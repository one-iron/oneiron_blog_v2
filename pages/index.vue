<template>
  <div><Table :data="data" :columns="columns" :type="type" /></div>
</template>

<script>
import Table from "../components/tableList.vue";

export default {
  layout: "layout",
  name: "IndexPage",
  components: { Table },
  mounted() {
    this.searchAll();
  },
  data() {
    return {
      type: "index",
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
  methods: {
    async searchAll() {
      const indexList = await this.$content("index")
        .without(["body"])
        .sortBy("date", "desc")
        .fetch();
      this.data = indexList;
    },
  },
};
</script>

<style></style>
