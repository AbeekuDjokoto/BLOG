<template>
    <HeadlineVue :heading="businessHeadline"></HeadlineVue>
    <Card :allnews="business"></Card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import HeadlineVue from "@/components/Headline.vue"
import Card from "@/components/Card.vue"
export default {
  name: "BusinessView",
    components: {HeadlineVue, Card},
 async mounted() {
  await this.getAllBusiness();
    // console.log(this.global);
},
  computed: {
    ...mapGetters({
      business: "getBusiness",
    }),
    businessHeadline(){
        let str = this.$store.state.business;
        console.log(str)
        let result = str.slice(0, 1);
        return result
    },
    business(){
        let str = this.$store.state.business;
        console.log(str)
        let result = str.slice(1, 10);
        return result
    }
  },
  
  methods: {
    ...mapActions({
      getAllBusiness: "getAllBusiness",
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