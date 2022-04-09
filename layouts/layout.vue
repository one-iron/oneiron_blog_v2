<template>
  <div class="mainWrap">
    <aside class="asideWrap">
      <Profile />
    </aside>
    <Nuxt />
  </div>
</template>

<script>
import Profile from "../components/profile.vue";

export default {
  name: "Layout",
  components: { Profile },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap");
@import "../static/common.css";
@import "../static/reset.css";

body {
  background-color: var(--main-gray);
}

.mainWrap {
  width: 1068px;
  margin: 0 auto;
  padding: 30px 0;
}

.asideWrap {
  width: 258px;
}
</style>
