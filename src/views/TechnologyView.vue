<template>
    <HeadlineVue :heading="technologyHeadline"></HeadlineVue>
    <Card :allnews="technology"></Card>

</template>

<script>
import { mapActions, mapGetters } from "vuex";
import HeadlineVue from "@/components/Headline.vue"
import Card from "@/components/Card.vue"
export default {
  name: "TechnologyView",
  components: {HeadlineVue, Card},
 async mounted() {
  await this.getAllTechnology();
    // console.log(this.global);
},
  computed: {
    ...mapGetters({
      technology: "getTechnology",
    }),
    technologyHeadline(){
        let str = this.$store.state.technology;
        console.log(str)
        let result = str.slice(0, 1);
        return result
    },
    technology(){
        let str = this.$store.state.technology;
        console.log(str)
        let result = str.slice(1, 10);
        return result
    }
  },
  methods: {
    ...mapActions({
      getAllTechnology: "getAllTechnology",
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