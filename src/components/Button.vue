<template>
  <button><slot></slot></button>
</template>

<script>
export default {
  name: "Button",
}
</script>

<style scoped>
button{
  min-width: 120px;
  height: 42px;
  padding: 5px 8px;
  background-color: aqua;
}
</style>