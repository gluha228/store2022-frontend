<template>
    <my-header/>
    <div class = "main-content-items">
    <h2>There you can find wiki collection</h2>
    <filter-pad/>
    </div>
    <items-list/>
    <my-footer/>
</template>

<script>

import ItemsList from './components/ItemsList.vue'
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import FilterPad from './components/FilterPad.vue'

export default {
  name: 'App',
  components: {
    ItemsList,
    MyHeader,
    MyFooter,
    FilterPad
},
  data() {
  }
}
</script>

<style>
body {
    background: #333;
    margin: 0;
    color: #888;
    font-family: 'Courier New', Courier, monospace;
}
h2, h3 {
    color: rgb(184, 121, 4);
}
a {
    text-decoration: none !important;
}
.sidebar {
    float: left;
    top: 0%;
    left: 0%;
    top: 50px;
    width: 200px;
    border-right: rgb(184, 121, 4) 2px  solid;
}
.main-content-items {
    top: 50px;
    background-color: #666;
    color: #bbb;
    display: grid;
    padding-left: 20px;
}
</style>