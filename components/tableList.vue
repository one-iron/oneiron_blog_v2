<template>
  <div class="tableContainer">
    <div class="tableWrap">
      <table>
        <thead>
          <tr>
            <td v-for="(item, index) in columns" :key="index">
              <span>{{ item.title }}</span>
            </td>
          </tr>
        </thead>
        <tbody v-for="(item, index) in data" :key="index">
          <tr>
            <td>
              {{ item.id }}
            </td>
            <NuxtLink :to="`${type}_${item.id}`" class="menuNuxtLink">
              <td>
                {{ item.title }}
              </td>
            </NuxtLink>
            <td>
              {{ item.date }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "tableList",
  props: ["data", , "type"],
  data() {
    return {
      columns: [
        {
          title: "번호",
          dataIndex: "id",
        },
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

<style>
.tableContainer {
  padding-bottom: 20px;
  width: 777px;
  margin-left: 30px;
  border-radius: 15px;
  background-color: white;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
}

@media screen and (max-width: 1023px) {
  .tableContainer {
    width: 100%;
    margin: 150px 0 0 0;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  }
}

table {
  font-family: "NanumSquare", sans-serif;
  width: 100%;
  border-radius: 15px;
}

table thead {
  border-bottom: 1px solid rgb(233, 233, 233);
}

table thead td {
  background-color: var(--main-gray);
  color: black;
  font-weight: bold;
  font-size: 13px;
  padding: 20px 40px;
}

table thead tr td:first-child {
  border-top-left-radius: 15px;
}
table thead tr td:nth-child(2) {
  width: 65%;
}

table thead tr td:last-child {
  border-top-right-radius: 15px;
}

table tbody {
  font-size: 13px;
  cursor: pointer;
}

table tbody tr {
  border-bottom: 1px solid rgb(233, 233, 233);
}

table tbody td {
  color: #636363;
  /* width: 60%; */
}

table tbody a:first-child {
  width: 100%;
  height: 100%;
}

table tbody tr:hover {
  background-color: var(--main-gray);
}

table tbody td {
  padding: 20px 40px;
}

table tbody td:last-child {
  padding: 20px 40px;
}
</style>
