<template>
    <div v-for="data in global.articles" :key="data">
        <p>{{ data.author }}</p>
        <p>{{ data.content }}</p>
        <p>{{ data.description }}</p>
        <p>{{ data.publishedAt }}</p>
        <p v-for="data in global.source" :key="data">{{ data.name }}</p>
        <a :href="data.url">Link</a>
        <img :src="data.urlToImage" alt="">
        
    </div>

</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "globalView",

 async mounted() {
  await this.getAllGlobal();
    // console.log(this.global);
},
  computed: {
    ...mapGetters({
      global: "getGlobal",
    }),
  },
  methods: {
    ...mapActions({
      getAllGlobal: "getAllGlobal",
    }),
  },
};

</script>

<style scoped>
    img{
        width: 900px;
    }

p{
    font-family: 'Playfair Display', serif;
}
</style>