<template>
  <div class="idWrap">
    <div class="markdown-body" :style="{ minHeight: `${deviceHeight}px` }">
      <div class="pageTitle">
        <h1>
          <b>{{ page.title }}</b>
        </h1>
      </div>
      <article>
        <nuxt-content :document="page" />
      </article>
    </div>
  </div>
</template>

<script>
export default {
  layout: "layout",
  name: "detailPage",
  async asyncData({ $content, params, error }) {
    const path = params.id.split("_");
    const page = await $content(`${path[0]}/${path[1]}`)
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: "Page not found" });
      });
    return {
      page,
    };
  },
  data() {
    return {
      deviceHeight: "",
      page: {},
    };
  },
};
</script>

<style>
.idWrap {
  width: 777px;
  margin-left: 30px;
  border-radius: 15px;
  background-color: white;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
}

.pageTitle {
  font-family: "NanumSquareExtraBold";
  display: flex;
  align-items: center;
  font-size: 10px;
  height: 57px;
  padding: 0 40px;
  background-color: var(--main-gray);
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  border-bottom: 1px solid rgb(233, 233, 233);
}

.pageTitle > h1 {
  margin: unset;
}
article {
  font-family: "NanumSquare", "sans-serif";

  font-size: 15px;
  padding: 20px 40px;
}

@media screen and (max-width: 1023px) {
  .idWrap {
    width: 100%;
    margin: 150px 0 0 0;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  }
}
</style>
