<template>
  <div class="detail">
    <h1>{{detail.title}}</h1>
    <p v-html='detail.content'></p>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      detail: {}
    };
  },
  methods: {
    getData() {
      this.ajaxFn({
        method: "GET",
        dataType: "",
        data: "id=" + this.$route.params.id,
        url: "http://www.bozedu.net:8888/article/main/detail",
        async: true,
        callback: responseData => {
          let data = JSON.parse(responseData).data;
          this.detail = data;

          console.log(this.detail);
        }
      });
    }
  },
  watch: {
    $route() {
      this.getData();
    }
  },
  created() {
    this.getData();
  }
};
</script>
<style scoped>
</style>

