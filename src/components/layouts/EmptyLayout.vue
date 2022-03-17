<template>
  <div>
    <nav-bar />
    <div>
      <main-loader />
      Здесь будут регистрация и логин
    </div>
    <footer-of-page />
  </div>
</template>

<script>
import NavBar from '/src/components/NavBar'
import FooterOfPage from '/src/components/FooterOfPage'
import MainLoader from "@/components/MainLoader";

export default {
  components: {
    MainLoader,
    FooterOfPage,
    NavBar
  }
}
</script>
