<template>
  <main-page></main-page>
  <Abed msg="ABED"/>
</template>

<script>
import Abed from './components/Abed.vue'
import MainPage from "@/pages/MainPage";

export default {
  name: 'App',
  components: {
    Abed,
    MainPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
