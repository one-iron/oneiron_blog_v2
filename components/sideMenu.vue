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
        { emoji: "⛅", text: " TIL", path: "/tils" },
        { emoji: "💡", text: " 궁금증", path: "/wonders" },
        { emoji: "💰", text: " 에러", path: "/errors" },
        { emoji: "🌈", text: " 일상", path: "/days" },
        { emoji: "💾", text: " 회고록", path: "/memoirs" },
      ],
    };
  },
  watch: {
    $route(to, from) {
      this.path = to.name === "id" ? from.path : to.path;
    },
  },
};
</script>

<style>
.sideMenuWrap {
  top: 260px;
  width: 230px;
  background-color: white;
  position: fixed;

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

@media screen and (max-width: 1023px) {
  .sideMenuWrap {
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  }
  .sideMenuWrap li {
    margin-right: 10px;
    float: left;
  }
}
</style>
