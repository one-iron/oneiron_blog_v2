<template>
  <div class="mainWrap">
    <aside class="asideWrap">
      <Profile />
      <SideMenu />
    </aside>
    <Nuxt />
  </div>
</template>

<script>
import Profile from "../components/profile.vue";
import SideMenu from "../components/sideMenu.vue";

export default {
  name: "Layout",
  components: { Profile, SideMenu },
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
  padding: 80px 0;

  display: flex;
}

.asideWrap {
  width: 258px;
  display: flex;
  flex-direction: column;
}
</style>
