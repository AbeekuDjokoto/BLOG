<template>
    <HeadlineVue :heading="healthHeadline"></HeadlineVue>
    <Card :allnews="health"></Card>

</template>

<script>
import { mapActions, mapGetters } from "vuex";
import HeadlineVue from "@/components/Headline.vue"
import Card from "@/components/Card.vue"
export default {
  name: "HealthView",
    components: {HeadlineVue, Card},
 async mounted() {
  await this.getAllHealth();
    // console.log(this.global);
},
  computed: {
    ...mapGetters({
      health: "getHealth",
    }),
    healthHeadline(){
        let str = this.$store.state.health;
        console.log(str)
        let result = str.slice(0, 1);
        return result
    },
    health(){
        let str = this.$store.state.health;
        console.log(str)
        let result = str.slice(1, 10);
        return result
    }
  },
  methods: {
    ...mapActions({
      getAllHealth: "getAllHealth",
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