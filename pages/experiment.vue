<template>
  <div>
    <Table :data="data" :type="type" />
  </div>
</template>

<script>
// import Table from "../../components/tableList.vue";
import Table from "../components/tableList.vue"
// import Table from "../../components/tableList.vue";
export default {
  layout: "layout",
  name: "experiment",
  components: { Table },
  mounted() {
    this.searchAll();
  },
  data() {
    return {
      type: "experiment",
      data: [],
    };
  },
  methods: {
    async searchAll() {
      const indexList = await this.$content("experiment")
        .without(["body"])
        .sortBy("date", "desc")
        .fetch();
      this.data = indexList;
    },
  },
};
</script>

<style></style>
