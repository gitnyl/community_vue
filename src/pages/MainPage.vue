<template>
  <navbar></navbar>
  <album-list></album-list>
  <table></table>
  <description-list></description-list>
</template>

<script>
import Navbar from './common/Navbar'
import DarkNavLayout from "@/pages/common/DarkNavLayout"
import Table from "./common/Table"
import AlbumList from "./common/AlbumList"
import DescriptionList from "@/pages/common/DescriptionList";



export default {
  name: "MainPage",
  components: {
    DarkNavLayout,
    Navbar,
    Table,
    AlbumList,
    DescriptionList
  }
}
</script>

<style scoped>

</style>
