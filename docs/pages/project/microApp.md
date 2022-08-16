# 微前端落地

我们为什么需要微前端，微前端能解决什么问题？

微前端架构旨在解决单体应用在一个相对长的时间跨度下，由于参与的人员、团队的增多、变迁，从一个普通应用演变成一个巨石应用(Frontend Monolith)后，随之而来的应用不可维护的问题。这类问题在企业级 Web 应用中尤其常见。

现状：各个平台都有不一样的网址，访问时出现每个系统都进行一遍鉴权，多开 tab 页，开发人员不知道有哪些平台，不知道从哪儿能访问到该平台等问题。

措施：为了避免上述情况，架构组 将贾维斯以及运维组各个平台进行了整和，之后可能还会将工具组的各个平台进行整和，从而实现云客 devops 一站式管理。

解决方案：使用 微前端 技术将各个平台整和到一个平台，使用 单点登录 技术将各个平台登录鉴权系统打通。

## 方案调研

- qiankun
  - <https://qiankun.umijs.org/zh>
- single-spa
  - <https://single-spa.js.org/>
- micro App
  - <https://zeroing.jd.com/>

## 微前端具体实操

结合项目分析，由于公司技术栈较为统一，主应用和子应用都是基于 `umi` 作为脚手架进行开发的。
为了前期快速落地，所以在方案选择上使用了 `umi-qiankun` 这个微前端插件进行开发。

### 主应用配置

第一步：引入插件。

```shell
yarn add @umijs/plugin-qiankun -D
```

第二步：注册子应用。

```ts
export default {
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'app1', // 唯一 id，会在装载子应用时用上，注意保持一致。
          entry: '//localhost:7001', // html entry
        },
        {
          name: 'app2', // 唯一 id，会在装载子应用时用上，注意保持一致。
          entry: '//localhost:7002', // html entry
        },
      ],
    },
  },
};
```

第三步：装载子应用。

```diff
export default {
 routes: [
    {
      path: '/',
      component: '../layouts/index.js',
      routes: [
        {
          path: '/app1',
          component: './app1/index.js',
          routes: [
            {
              path: '/app1/user',
              component: './app1/user/index.js',
            },
+            // 配置微应用 app1 关联的路由
+            {
+              path: '/app1/project',
+              microApp: 'app1',
+            },
          ],
        },
+       // 配置 app2 关联的路由
+       {
+         path: '/app2',
+         microApp: 'app2'
+       },
        {
          path: '/',
          component: './index.js',
        },
      ],
    },
  ],
}
```

### 子应用配置

第一步：插件注册（config.js）

```ts
export default {
  qiankun: {
    slave: {},
  },
};
```

第二步：配置运行时生命周期钩子（可选）

插件会自动为你创建好 qiankun 子应用需要的生命周期钩子，但是如果你想在生命周期期间加一些自定义逻辑，可以在子应用的 src/app.ts 里导出 qiankun 对象，并实现每一个生命周期钩子，其中钩子函数的入参 props 由主应用自动注入。

```ts
export const qiankun = {
  // 应用加载之前
  async bootstrap(props) {
    console.log('app1 bootstrap', props);
  },
  // 应用 render 之前触发
  async mount(props) {
    console.log('app1 mount', props);
  },
  // 应用卸载之后触发
  async unmount(props) {
    console.log('app1 unmount', props);
  },
};
```

- 子应用前端资源开启跨域处理

由于，`qiankun` 微前端框架是采用 `html entry` 的方式来加载前端应用的主入口的，所以需要前端开启跨域处理，否则将出现前端资源加载`CORS`错误。也可以通过网关域名转发的方式来绕过加载子应用资源加载需要跨域的问题。

- 子应用开启 APISIX 网关转发

由于公司架构特性，所有的应用都部署在容器当中，前后端通信是由网关进行转发的，而在微前端环境下，又是以主应用的 域名作为 `origin`，若不更改网关层配置就会出现子应用的请求转发到主应用的后端服务上去的情况。

所以，我们需要为每一个子应用分配一个 `apiPrefix`，作为 API 请求前缀，避免出现上述情况。该 API 请求前缀,通过提供的前端 SDK 插件进行获取到。

> 为了正确获取到 apiPrefix, 我们需要为前端项目书写正确的命名，以 fe-xxx(项目名的形式)。

获取示例如下：

```ts
import { EnvUtils, isMicroEnv } from '@yunke/micro-frontend';
import { request } from 'umi';
import pakeageName from '../../package.json'; // fe-pressure

export const myRequest: typeof request = (url: string, options?: any) => {
  const newOptions = {
    prefix: isMicroEnv ? `${EnvUtils.apiPrefix(pakeageName.name)}` : '',
    ...options,
  };
  return request(url, newOptions);
};
```

网关配置示例如下：
![网关配置示例](https://tva1.sinaimg.cn/large/e6c9d24egy1h4ylquh67tj20u00vrwfu.jpg)

### 事件通知机制

对于一些异常处理或者特殊操作。我们需要从子应用发通知给主应用。
这里，我们选用的是 `eventBus` ， 这种类似 `Vue2.0` 中的 `eventBus` 事件总线 的思想和概念来完成事件通知这一个需求。
核心代码是写在主应用中的，然后挂载到 全局 `window` 对象下的。

```ts
// 主应用下监听事件核心代码
interface eventDataType {
  code: string;
  msg: string;
  appCode: string;
}
const getUserInfoSuccess = (data: eventDataType) => {
  console.log('监听到用户登录成功', data);
  setMicroLoading(false);
};

const loginFailed = (data: eventDataType) => {
  console.log('监听到用户登录失败', data);
  const appCode = data?.appCode || 'opreation';

  const errorMessage = {
    title: '子应用登录失败',
    subTitle: '该账号登录子应用平台失败，请找管理员进行处理',
  };
  localStorage.setItem('errorMessage', JSON.stringify(errorMessage));
  window.location.href = `${window.location.origin}/login/errors?app_code=${appCode}`;
};

const subAppGlobalError = (data: eventDataType) => {
  console.log('监听到子应用加载失败', data);
};

const listenerMap = {
  [EventNameEnum.getUserInfoSuccess]: getUserInfoSuccess,
  [EventNameEnum.loginFailed]: loginFailed,
  [EventNameEnum.subAppGlobalError]: subAppGlobalError,
};

// 事件监听
useEffect(() => {
  (window as any).JARVIS_EVENTBUS = eventBus;
  Object.entries(listenerMap).forEach(([key, value]) => {
    eventBus.addListener(key, value);
  });
  return () => {
    Object.entries(listenerMap).forEach(([key, value]) => {
      eventBus.removeListener(key, value);
    });
  };
}, []);
```

```ts
// 子应用发送事件示例
import { EventNameEnum } from '@yunke/micro-frontend';

const eventBus = (window as any).JARVIS_EVENTBUS;

const errorHandle = () => {
  if (!eventBus) {
    return;
  }
  eventBus.emit(EventNameEnum.loginFailed, {
    code: 2,
    appCode: 'dva',
    message: '配置平台登录失败',
  });
};
```

### 前端 SDK 以及 BFF plugin

> 目的是将接入微前端和单点登录的公共代码以及公共逻辑抽离出来，方便接入方进行接入，减少接入成本。

#### 前端 SDK 需要实现的功能

> 提供工具方法并返回对应数据

1. 判断 当前是否为 微前端环境 (已完成)
2. 根据 package.json 中的 name 来返回 api 请求前缀 (已完成)
3. 根据 package.json 中的 name 来返回 appCode (已完成)
4. 暴露 单点登录 接口的请求路径和请求参数 ts 类型 (已完成)
5. 根据 应用所处于的环境来返回 登录跳转的地址 (已完成)
6. 提供 事件通知 EventBus 实例方法(待完成)

#### BFF plugin 需要实现的功能

> 拦截 客户端 发送的请求，并对特定路由进行逻辑处理并返回结果。需要 yunfly 框架版本在 v3.0 以上。

目前提供以下四种接口请求处理。

1. 通过 域账号 和 appcode 拿到 sso-ticket
2. 通过票据拿用户信息，可以根据返回的 code 来判断用户是否已经登录
3. 校验 SSO 票据（是否登录）
4. 登出
