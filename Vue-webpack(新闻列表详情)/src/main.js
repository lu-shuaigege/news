import Vue from 'vue'
import App from './App'
import router from './router'

Vue.prototype.ajaxFn = function (obj) {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState === 4) {
      if (request.status === 200) {
        obj.callback(request.responseText);
      }
    }
  }
  if (obj.method === 'GET') {
    request.open(obj.method, obj.url + '?' + obj.data, obj.async);
    request.send();
  }
  if (obj.method === 'POST') {
    request.open(obj.method, obj.url, obj.data, obj.async);
    if (obj.dataType === 'form') {
      request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }
    if (obj.dataType === 'json') {
      request.setRequestHeader('Content-type', 'application/json');
    }
    request.send(obj.data);
  }
}

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
