<template>
  <div>
    <Table :data="data" :columns="columns" :type="type" />
  </div>
</template>

<script>
import Table from "../components/tableList.vue";
export default {
  layout: "layout",
  name: "memoirsPage",
  components: { Table },
  mounted() {
    this.searchAll();
  },
  data() {
    return {
      type: "memoirs",
      data: [],
    };
  },
  methods: {
    async searchAll() {
      const indexList = await this.$content("memoirs")
        .without(["body"])
        .sortBy("date", "desc")
        .fetch();
      this.data = indexList;
    },
  },
};
</script>

<style></style>
