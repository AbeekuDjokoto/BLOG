<template>
  <div class="home">
    <Navigation></Navigation>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h2 v-for="data in global" :key="data.articles">{{ data.description }}</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navigation from '@/components/Navigation.vue'


export default {
  name: 'HomeView',
  components: {
    HelloWorld, Navigation,
  }
}
</script>
