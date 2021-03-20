<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-start">
        <router-link active-class="is-active" class="is-size-4 navbar-item" :to="{name: 'home'}">Home</router-link>
        <router-link active-class="is-active" class="is-size-4 navbar-item" :to="{name: 'setup'}">Set up</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>