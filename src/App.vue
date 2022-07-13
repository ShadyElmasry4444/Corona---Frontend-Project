<template>
  <Styles />
  <Navbar></Navbar>

  <div class="section1">
    <div id="passage"></div>
    <Firstsection id="hero"></Firstsection>
  </div>
  <Secondsection></Secondsection>
  <Thirdsection></Thirdsection>
  <Fourthsection></Fourthsection>
  <Fifthsection></Fifthsection>
  <Sixthsection></Sixthsection>
  <Seventhsection></Seventhsection>
  <Eighthsection></Eighthsection>
  <Ninthsection></Ninthsection>
  <Tenthsection></Tenthsection>
  <Eleventhsection></Eleventhsection>
  <Twelfthsection></Twelfthsection>
  <router-view />
  <Backtotop></Backtotop>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Styles from "./components/Styles.vue";
import Firstsection from "./components/Firstsection.vue";
import Secondsection from "./components/Secondsection.vue";
import Thirdsection from "./components/Thirdsection.vue";
import Fourthsection from "./components/Fourthsection.vue";
import Fifthsection from "./components/Fifthsection.vue";
import Sixthsection from "./components/Sixthsection.vue";
import Seventhsection from "./components/Seventhsection.vue";
import Eighthsection from "./components/Eighthsection.vue";
import Ninthsection from "./components/Ninthsection.vue";
import Tenthsection from "./components/Tenthsection.vue";
import Eleventhsection from "./components/Eleventhsection.vue";
import Twelfthsection from "./components/Twelfthsection.vue";
import Backtotop from "./components/Backtotop.vue";

export default {
  components: {
    Navbar,
    Styles,
    Firstsection,
    Secondsection,
    Thirdsection,
    Fourthsection,
    Fifthsection,
    Sixthsection,
    Seventhsection,
    Eighthsection,
    Ninthsection,
    Tenthsection,
    Eleventhsection,
    Twelfthsection,
    Backtotop,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.section1 {
  background-image: url(../public/img/shape-a.png);
  background-color: #e3e6f3a6;
  overflow-y: 200px;
  height: 90vh;
}
</style>
