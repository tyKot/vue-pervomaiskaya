<template>
  <div class="page">
    <HeaderPage />
    <router-view></router-view>
    <FooterPage />
  </div>
</template>

<script>
import HeaderPage from "./components/HeaderPage.vue";
import FooterPage from "./components/FooterPage.vue";

export default {
  name: "App",
  components: {
    HeaderPage,
    FooterPage,
  }
};

</script>

<style>
@import url(./fonts/gilroy/#GilroyFonts.css);
@import url(./fonts/roboto/#RobotoFonts.css);

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Gilroy", Arial, Helvetica, serif;
}

body {
  overflow: hidden;
}

a {
  text-decoration: none;
}

li {
  list-style-type: none;
}

html {
  font-size: 62.5%;
}

body {
  background-color: #fff;
}
</style>
