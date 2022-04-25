<template>
  <div><Table :data="data" :type="type" /></div>
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
    };
  },
  methods: {
    async searchAll() {
      const indexList = await this.$content("index")
        .without(["body"])
        .sortBy("date", "desc")
        .fetch();
      this.data = indexList;

      let test = [];

      indexList.map((item) => {
        test.push(`/index_${item.id}`)
      })
      console.log('>>', test)
    },
  },
};
</script>

<style></style>
