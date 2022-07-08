<template>
  <nav>
    <div>
      <img src="./assets/Group17.svg" alt="">
    </div>
    <div class="space">
      <router-link to="/">Global</router-link> 
      <router-link to="/technology">Technology</router-link>
      <router-link to="/business">Business</router-link>
      <router-link to="/health">Health</router-link>
    </div>
    <div class="menuFlex">
      <p class="menu">Menu</p>
      <img src="./assets/Vector.svg" alt="">
    </div>
  </nav>
  <router-view/>
</template>

<style scoped>
#app {
  font-family: 'Playfair Display', serif;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 36px 0px 36px;
}

nav a{
  padding: 30px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  align-items: center;
  color: #000000;
  text-decoration: none;
}

.menuFlex{
  display: flex;
}
.menu{
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  align-items: center;
  color: #000000;
  text-decoration: none;
  margin-right: 19px;
}


</style>
