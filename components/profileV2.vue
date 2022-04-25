<template>
  <div class="profileV2Wrap">
      <NuxtLink to="/">
        <h1 class="blogName">ONE_IRON</h1>
      </NuxtLink>
      <CategoryMenu />
  </div>
</template>

<script>
import CategoryMenu from "../components/categoryMenu.vue";

export default {
    name: "profileV2",
    components: { CategoryMenu }
};
</script>

<style>


.profileV2Wrap {
    width: 650px;
    margin: 0 auto;
    padding-bottom: 20px;
}

@media screen and (max-width: 1023px) {
    .profileV2Wrap {
        width: 100%;
        padding: 20px 40px;
    }
}

.blogName {
    font-family: 'Raleway', sans-serif;
    font-style: italic;
    margin-bottom: 20px;
    font-size: 40px;
    color: var(--main-blue);
    cursor: pointer;
}

</style>
