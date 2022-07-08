<template>

<input
      type="text"
      placeholder="Search for an article..."
      v-model="searchTerm"
    />
    <HeadlineVue :heading="globalHeadline"></HeadlineVue>
    <Card :allnews="filtered"></Card>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
import HeadlineVue from "@/components/Headline.vue"
import Card from "@/components/Card.vue"
export default {
  name: "globalView",
  components: {HeadlineVue, Card},
   data: () => ({
        searchTerm: ""

    }),
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
    filtered() {
       if (this.searchTerm) {
        return this.$store.state.global.filter((news) =>
          news.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      } else {
        return this.global;
      }
    },
    global(){
        let str = this.$store.state.global;
        console.log(str)
        let result = str.slice(1, 10);
        return result
    },
    
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

input{
  padding: 10px 20px;
  border-radius: 4px;
}

::placeholder{
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 130%;
  /* or 42px */
  letter-spacing: -0.02em;
}
</style>