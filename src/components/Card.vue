<template>
  <div class="section">
    <p>Articles</p>
    <div class="card-container">
      <div class="main-card" v-for="news in allnews" :key="news.author"
      >
      <a :href="news.url" target="_blank">
        <p>{{ news.publishedAt }}</p>
        <div class="image1"><img :src="news.urlToImage" alt="" /></div>
        <div class="details">
          <h3 class=title>{{ news.title }}</h3>
          <h4 class="published">{{ longDate(news.publishedAt) }}</h4>
          <h3 class="author">{{ news.author }}</h3>
        </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: [ "allnews" ],
 
  computed: {
     longDate() {
            return (newDate) => {
                let date = new Date(newDate);
                const month = date.toLocaleString('default', { month: 'long' });
                const day = date.toLocaleString('default', { weekday: 'long' });
                // (date.getMonth()+1)
                return month + ' ' + date.getDate() + ', ' + date.getFullYear();
            }
        }
  }
  
};

</script>
<style scoped>
.section {
  padding: 96px 137px;
  text-align: left;
}
.card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px;
}
h3 {
  width: 264px;
  margin-top: 16px;
  font-size: 12px;
}
.title{
  font-family: 'Public Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  /* or 23px */
  letter-spacing: -0.02em;
  color: #000000;
}
.image1 img {
  width: 264px;
  height: 168px;
  border-radius: 8px;
  object-fit: fill;
}

.published{
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  /* identical to box height, or 21px */
  color: #000000;
}

.author{
  font-family: 'Public Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 130%;
  /* or 18px */
  letter-spacing: -0.02em;
  color: #000000;
}

a{
  text-decoration: none;
  color: #000000;
}
</style>