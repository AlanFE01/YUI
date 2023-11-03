# button组件

<MyButton color="green">slot</MyButton>
<MyButton color="pink" icon="camera">拍照</MyButton>
<MyButton color="red" icon="container-services">组织架构</MyButton>

:::demo

```vue
<template>
  <MyButton color="green">{{data}}</MyButton>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  const data = ref<string>('button组件')
</script>
```
:::