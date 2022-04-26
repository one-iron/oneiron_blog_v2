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
  width: 650px;

  margin:0 auto;
  border-radius: 10px;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.pageTitle {
  font-family: "NanumSquareExtraBold";
  display: flex;
  align-items: center;
  font-size: 10px;
  padding: 0 40px;
  background-color: var(--second-blue);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom: 1px solid rgb(233, 233, 233);
  text-align: center;
}

.pageTitle > h1 {
  margin: unset;
  font-family: "NanumSquareExtraBold";
  margin: 20px 0;
  font-size: 30px;
}
article {
  font-family: "NanumSquare", "sans-serif";

  font-size: 15px;
  padding: 20px 40px;
}

@media screen and (max-width: 1023px) {
  .idWrap {
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  }
}
</style>
