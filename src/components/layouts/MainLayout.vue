<template>
  <nav-bar />
  <side-bar />
  <div>
    <main-loader />
    Здесь будет основной контент страницы
  </div>
  <footer-of-page />
</template>


<script>
import NavBar from '/src/components/NavBar'
import SideBar from '/src/components/SideBar'
import FooterOfPage from '/src/components/FooterOfPage'
import MainLoader from "@/components/MainLoader";

export default {
  components: {
    MainLoader,
    NavBar,
    SideBar,
    FooterOfPage
  }
}
</script>
