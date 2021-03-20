require('@/assets/main.scss');
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import c3 from 'c3'
import _ from 'lodash'
// import * as OfflinePluginRuntime from 'offline-plugin/runtime';

// OfflinePluginRuntime.install()

var app = createApp(App)
app.use(router).mount('#app')

app.directive('graph', {
  mounted(el, binding) {
    var c3Params = _.cloneDeep(binding.value);
    c3Params.bindto = el
    if(_.size(binding.value)){
      c3.generate(c3Params)
    }
  },
  updated(el, binding) {
    var c3Params = _.cloneDeep(binding.value);
    c3Params.bindto = el
    if(_.size(binding.value)){
      c3.generate(c3Params)
    }
  }
})
