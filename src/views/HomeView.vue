<template>
    <HeadlineVue :heading="globalHeadline"></HeadlineVue>
    <Card :allnews="global"></Card>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
import HeadlineVue from "@/components/Headline.vue"
import Card from "@/components/Card.vue"
export default {
  name: "globalView",
  components: {HeadlineVue, Card},
 async mounted() {
  await this.getAllGlobal();
    // console.log(this.global);
},
  computed: {
    ...mapGetters({
      global: "getGlobal",
    }),
    globalHeadline(){
        let str = this.$store.state.global;
        console.log(str)
        let result = str.slice(0, 1);
        return result
    },
    global(){
        let str = this.$store.state.global;
        console.log(str)
        let result = str.slice(1, 10);
        return result
    }
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