<template>
  <div>
    <Table :data="data" :type="type" />
  </div>
</template>

<script>
import Table from "../components/tableList.vue";
export default {
  layout: "layout",
  name: "errorsPage",
  components: { Table },
  mounted() {
    this.searchAll();
  },
  data() {
    return {
      type: "errors",
      data: [],
    };
  },
  methods: {
    async searchAll() {
      const indexList = await this.$content("errors")
        .without(["body"])
        .sortBy("date", "desc")
        .fetch();
      this.data = indexList;
    },
  },
};
</script>

<style></style>
