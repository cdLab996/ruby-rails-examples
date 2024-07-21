<script setup>
// eslint-disable-next-line no-console
console.log('App')
</script>

<template>
  <div class="flex items-center justify-center flex-col">
    <div class="h-full flex gap-2">
      <router-link to="/a">Go to A</router-link>
      <router-link to="/b">Go to B</router-link>
    </div>
    <div>App.vue</div>
    <RouterView />
  </div>
</template>
