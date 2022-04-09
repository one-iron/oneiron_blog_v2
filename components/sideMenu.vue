<template>
  <div class="sideMenuWrap">
    <ul>
      <li
        :class="[path === item.path ? 'menuListIn' : 'menuList']"
        v-for="item in list"
        :key="item.text"
      >
        <NuxtLink :to="item.path" class="menuNuxtLink">
          <div class="menuNuxtLinkEmoji">{{ item.emoji }}</div>
          <span>{{ item.text }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.path = this.$route.path;
  },
  data() {
    return {
      path: "",
      list: [
        { emoji: "💻", text: " 개발", path: "/" },
        { emoji: "💡", text: " 궁금증", path: "/wonders" },
      ],
    };
  },
  watch: {
    $route(to, from) {
      this.path = to.path;
    },
  },
};
</script>

<style>
.sideMenuWrap {
  margin-top: 30px;
  background-color: white;

  border-radius: 15px;
  padding: 30px 20px;

  font-family: "NanumSquareBold", sans-serif;
  font-size: 19px;

  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
}

.menuList {
  padding: 8px 0;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: 5px;
  color: black;
}

.menuListIn {
  padding: 8px 0;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: 5px;
  color: black;

  font-family: "NanumSquareExtraBold", sans-serif;
  background-color: var(--second-blue);
  color: var(--main-blue);
}

.menuList:hover {
  background-color: var(--main-gray);
}

.menuNuxtLink {
  display: block;
  text-decoration: none;
}

.menuNuxtLinkEmoji {
  display: inline-block;
  width: 30px;
  text-decoration: none;
}

.menuNuxtLink.nuxt-link-exact-active {
  outline: none;
}
</style>
