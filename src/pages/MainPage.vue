<template>
  <navbar></navbar>
  <album-list></album-list>
</template>

<script>
//https://tailwindui.com/preview
import Navbar from './common/Navbar'
import DarkNavLayout from "@/pages/common/DarkNavLayout"
import Table from "./common/Table"
import AlbumList from "./common/AlbumList"


export default {
  name: "MainPage",
  components: {
    DarkNavLayout,
    Navbar,
    Table,
    AlbumList
  }
}
</script>

<style scoped>

</style>
