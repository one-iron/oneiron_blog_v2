<template>
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
          <NuxtLink :to="item.id" class="menuNuxtLink">
            <td>
              {{ item.title }}
            </td>
          </NuxtLink>
          <td>
            {{ item.created }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "tableList",
  props: ["data", "columns"],
};
</script>

<style>
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
  width: 85%;
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
  width: 60%;
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
