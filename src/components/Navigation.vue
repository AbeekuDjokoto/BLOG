<template>
  <div class="container">
    <figure>
        <img :src="image" alt="">
    </figure>
    <div>
       <router-link to="/global">Global</router-link> |
       <router-link to="/technology">Technology</router-link> |
       <router-link to="/business">Business</router-link> |
       <router-link to="/health">Health</router-link>
    </div>
    <div>
        <p>{{ menu }}</p>
    </div>

    <button @click="reduce">Reduce</button>
  </div>
</template>

<script>
import GlobalViewVue from '@/views/GlobalView.vue';

export default {
    components: { GlobalViewVue },
    data(){
        return{
            image: require('@/assets/Group17.svg'),
            menu: "Menu"
        }
    },
    computed: {
        products(){
            return this.$store.state.products;
        },
        saleProducts(){
            return this.$store.getters.saleProducts;
        }  
    },
    methods: {
        reduce(){
            this.$store.dispatch('headline')
        }
    }

}
</script>

<style scoped>
.container{
    font-family: 'Public Sans', sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

ul{
    display: inline;
    gap: 49px;
}

ul li{
    list-style: none;
}
</style>