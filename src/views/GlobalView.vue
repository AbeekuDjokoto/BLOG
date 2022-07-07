<template>
    <div v-for="data in global.articles" :key="data">
        <div v-for="data in global.articles.slice(0, 1)" :key="data">
            <img :src="data.urlToImage" alt="">
            <div class="bg">
                <p class="description">{{ data.description}}</p>
                <p>{{ data.publishedAt }}</p>
                <p>{{ data.author }}</p>
            </div>
        </div>
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
    color: #FFFFFF;
}

.bg{
    background: #6B0B5B;
    /* padding: 148px 0px 48px 237px; */
    width: 100%;
}

.description{
    
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 130%;
    /* or 42px */
    letter-spacing: -0.02em;
    
    
}
</style>