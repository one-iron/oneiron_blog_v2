<template>
  <div class="indexWrap">
    <Table :data="data" :columns="columns" />
  </div>
</template>

<script>
import Table from "../components/tableList.vue";

export default {
  layout: "layout",
  name: "IndexPage",
  components: { Table },
  mounted() {
    const testData = [...Array(100)].map((_, i) => ({
      id: `/${i}`,
      title: `Edward King ${i}`,
      created: "2022.04.10",
      type: "/",
    }));

    this.data = testData;
  },
  data() {
    return {
      data: [],
      columns: [
        {
          title: "제목",
          dataIndex: "title",
        },
        {
          title: "작성일",
          dataIndex: "created",
          width: 120,
        },
      ],
    };
  },
};
</script>

<style scoped>
.bodyClass {
  background-color: var(--main-gray);
}

.indexWrap {
  padding-bottom: 20px;
  width: 777px;
  margin-left: 30px;
  border-radius: 15px;
  background-color: white;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
}
</style>
