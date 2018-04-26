<template>
    <div class="container">
        <NavBar></NavBar>
        <SideNav></SideNav>
    </div>
</template>

<script>
import NavBar from '@/components/navBar/NavBar'
import SideNav from '@/components/sideNav/SideNav'

export default {
    name: 'Layout',
    components: {
      NavBar,
      SideNav
    }
}
</script>

<style>
    
</style>
