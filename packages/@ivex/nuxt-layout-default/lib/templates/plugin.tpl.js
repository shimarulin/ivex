/**
 * https://vuescrolljs.yvescoding.org/
 **/

import Vue from 'vue'
import vuescroll from 'vuescroll'
<% if (options.css) { %>
import 'vuescroll/dist/vuescroll.css'
<% } %>

const config = <%= serialize(options.config) %>
Vue.use(vuescroll, config)
