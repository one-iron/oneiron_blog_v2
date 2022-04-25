<template>
  <div class="mainWrap">
    <ProfileV2 />
    <CategoryMenu />
    <Nuxt />
  </div>
</template>

<script>
// import Profile from "../components/profile.vue";
// import SideMenu from "../components/sideMenu.vue";
import ProfileV2 from "../components/profileV2.vue";
import CategoryMenu from "../components/categoryMenu.vue";

export default {
  name: "Layout",
  components: { ProfileV2 },
};
</script>

<style>
/* @import url("https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap"); */
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,800;1,900&display=swap');
@import "../static/common.css";
@import "../static/reset.css";
@import "../static/markdownGithuTheme.css";

body {
  background-color: var(--main-gray);
}

.mainWrap {
  padding: 80px 0;
}

.asideWrap {
  width: 258px;
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 1023px) {
  .mainWrap {
    margin: 0 auto;
    display: inline-block;
    padding: 0;
    width: 100%;
  }
  .indexWrap {
    width: 390px;
    margin: 0 auto;
  }
  .profileWrap {
    display: none;
  }
  .asideWrap {
    display: inline-block;
  }
  .sideMenuWrap {
    top: 0;
  }
}
</style>
