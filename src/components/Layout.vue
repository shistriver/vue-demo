<template>
    <div>
        <NavBar></NavBar>
        <div class="container">
        	<div class="row">
        		<!-- 侧边栏 -->
        		<SideNav></SideNav>
		        <Content></Content>
        	</div>
	    </div>
	</div>
</template>

<script>
import NavBar from '@/components/navBar/NavBar'
import SideNav from '@/components/sideNav/SideNav'
import Content from '@/components/Content'

export default {
    name: 'Layout',
    components: {
      NavBar,
      SideNav,
      Content
    }
}
</script>

<style>
    
</style>
