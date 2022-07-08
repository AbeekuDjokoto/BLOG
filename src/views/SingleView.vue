<template>
  
  <div>
    <h1>This is working</h1>
    
    <p>{{singleView}}</p>
    <p v-for="card in singleView" :key="card.index">{{card.author}}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "singleView",
  props:['title'],
  data: () => ({
    
  }),
 created() {
    const articleName = this.$route.params.name;
    this.getSingleView = articleName
    this.$store.state.singleView= this.getSingleView
    let check = this.$store.state.singleView
    console.log(check)
  },
  computed: {
    ...mapGetters({
      singleView: "getSingleView",
    }),
  },
  methods: {
    ...mapActions({
      getSingleView: "getSingleView",
    }),
  },
};
</script>

<style>

</style>