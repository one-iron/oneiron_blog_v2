<template>
  <div>
    <Table :data="data" :type="type" />
  </div>
</template>

<script>
import Table from "../components/tableList.vue";
export default {
  layout: "layout",
  name: "wondersPage",
  components: { Table },
  mounted() {
    this.searchAll();
  },
  data() {
    return {
      type: "wonders",
      data: [],
    };
  },
  methods: {
    async searchAll() {
      const indexList = await this.$content("wonders")
        .without(["body"])
        .sortBy("date", "desc")
        .fetch();
      this.data = indexList;
    },
  },
};
</script>

<style></style>
