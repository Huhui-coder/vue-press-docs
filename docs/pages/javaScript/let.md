## 特点
- 暂时性死区
- 无变量提升
- 块作用域

## 疑惑
为何 `const` 表示声明一个常量，但当你将一个对象使用 `const` 声明后，还是可以改变这个对象呢？


::: demo
```html
<template>
  <div>
    <p>{{ i }}</p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        i: ''
      };
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
          const obj = '';
          obj.name = 'hit'
        //   const obj = { name: 'hit'}
        //   this.i = obj
        //   obj = { age: 12} // 浏览器会报错, 可以改变 const 声明引用类型对象的内部属性，当你改变这个对象本身的时候，就会报错。
      },
    },
  };
</script>
```
:::
