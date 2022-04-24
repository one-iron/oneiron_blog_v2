<template>
  <div class="categoryMenuWrap">
    <ul>
        <li
            :class="[path === item.path ? 'menuListIn' : '']"
            v-for="item in list"
            :key="item.text"
        >
            <NuxtLink :to="item.path" class="menuNuxtLink">
            <!-- <div class="menuNuxtLinkEmoji">{{ item.emoji }}</div> -->
            <span>#{{ item.text }}</span>
            </NuxtLink>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "CategoryMenu",
    created() {
        this.path = this.$route.path;
    },
    data() {
        return {
        path: "",
        list: [
            { emoji: "💻", text: " 개발", path: "/" },
            { emoji: "⛅", text: " TIL", path: "/tils" },
            { emoji: "🏆", text: " 에러", path: "/errors" },
            { emoji: "💡", text: " 궁금증", path: "/wonders" },
            { emoji: "🌈", text: " 일상", path: "/days" },
            { emoji: "💾", text: " 회고록", path: "/memoirs" },
            { emoji: "🏄‍♂️", text: " 원철", path: "/aboutme_1" },
        ],
        };
    },
    watch: {
    $route(to, from) {
      if (to.path === '/aboutme_1') {
        this.path = to.path;
      } else {
        this.path = to.name === "id" ? from.path : to.path;
      }
    },
  },

}
</script>

<style>

.categoryMenuWrap {
    /* width: 100%; */
}

.categoryMenuWrap > ul > li {
    display: inline-block;
    padding: 10px 13px;
    margin-right: 10px;
    border-radius: 15px;
    background-color: white;
    font-family: "NanumSquareBold", sans-serif;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
    cursor: pointer;
}

@media screen and (max-width: 1023px) {
    .categoryMenuWrap > ul > li {
        margin-bottom: 10px;
    }
}

.menuListIn {
    font-family: "NanumSquareExtraBold", sans-serif !important;
    background-color: var(--second-blue) !important;
    color: var(--main-blue);
}

.categoryMenuWrap > ul > li:hover {
  background-color: var(--second-blue);
}

</style>