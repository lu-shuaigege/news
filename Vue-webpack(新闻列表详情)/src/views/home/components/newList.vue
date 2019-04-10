<template>
  <div>
    <ul>
      <li v-for='item of list' :key='item.id'>
        <router-link :to='`/detail/${item.id}`'>{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "newList",
  data() {
    return {
      list: []
    };
  },
  created() {
    this.ajaxFn({
      method: "POST",
      dataType: "form",
      data: "page=1&limit=6",
      url: "http://www.bozedu.net:8888/article/main/index",
      async: true,
      callback: responseData => {
        console.log(this);
        let data = JSON.parse(responseData).data;
        this.list = data.page_data;
      }
    });
  }
};
</script>
<style scoped>
</style>

