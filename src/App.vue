<template>
  <div id="app">
    <navigation id="nav"></navigation>
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/navigation'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat');
@import "./src/assets/variables.scss";

html {
  background-color: #0d1117;
}

*, *::before, *::after {
  margin: 0; padding: 0;
  box-sizing: border-box;
  font-family: $font-stack;
}

#app {
  text-align: center;
  color: #8b949e;
  background-color: #0d1117;
}

#nav {
  a {
    font-weight: bold;
    color: #f3f3f3;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
