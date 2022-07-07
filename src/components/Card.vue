<template>
  <div class="section">
    <p>Articles</p>
    <div class="card-container">
      <div class="main-card" v-for="news in allnews" :key="news">
        <div class="image1"><img :src="news.urlToImage" alt="" /></div>
        <div class="details">
          <h3>{{ news.title }}</h3>
          <h4>{{ news.publishedAt }}</h4>
          <h3>{{ news.author }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: ["allnews"],
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
h2 {
}
.image1 img {
  width: 264px;
  height: 168px;
  border-radius: 8px;
  object-fit: fill;
}
</style>