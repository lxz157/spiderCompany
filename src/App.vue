<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView />
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
}

#app {
  min-height: 100vh;
  width: 100vw;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

* {
  box-sizing: border-box;
}
</style>