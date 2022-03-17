<template>
  <div>
    <div class="flex justify-around bg-blue-50 h-10">
      <img>
      <p>Name</p>
    </div>
    <div class="flex justify-around">
      <setting-card-for-profile class="w-1/3 min-h-min"/>
      <setting-card-for-profile class="w-1/3 min-h-min" />
      <setting-card-for-profile class="w-1/3 min-h-min" />
    </div>
    <div class="container">
      <h2>Projects</h2>
      <p>Architects design houses</p>
      <div class="flex justify-around">
        <project-card-with-img class="w-1/4" />
        <project-card-with-img class="w-1/4" />
        <project-card-with-img class="w-1/4" />
        <create-a-new-card class="w-1/4" />
      </div>
    </div>
  </div>
</template>
<script>
import ProjectCardWithImg from '@/components/ProjectCardWithImg'
import CreateANewCard from '@/components/CreateANewCard'
import SettingCardForProfile from '@/components/SettingCardForProfile'
export default {
  components: { SettingCardForProfile, CreateANewCard, ProjectCardWithImg }
}
</script>
