<template>
  <div class="mainWrap">
    <aside class="asideWrap">
      <!-- <Profile /> -->
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
@import "../static/markdownGithuTheme.css";

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
