<template>
  <header v-for="head in heading" :key="head">
    <div class="heroImage"><img :src="head.urlToImage" /></div>
    <div class="text">
      <h1>{{ head.title }}</h1>
      <p class="date">{{ head.publishedAt }}</p>
      <p class="author">{{ head.author }}</p>
    </div>
  </header>
</template>
<script>
export default {
  name: "HeadlineNav",
  props: ["heading"],
};
</script>
<style scoped>
.date {
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #ffffff;
}
.author {
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  color: #ffffff;
}
.text {
  padding: 148px 0px 53px 137px;
  left: 0px;
  background: #6b0b5b;
  text-align: left;
  margin-top: 369px;
}
h1 {
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #ffffff;
  width: 537px;
}
p {
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #ffffff;
}
.heroImage {
  height: 400px;
  width: 966px;
  position: absolute;
  top: 128px;
  left: 137px;
}
.heroImage img {
  width: 966px;
  height: 400px;
  object-fit: fill;
  border-radius: 8px;
}
</style>