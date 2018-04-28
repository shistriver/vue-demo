<template>
    <div class="col-xs-2">
        <div class="list-group">
            <!-- 使用 router-link 组件来导航 -->
            <!-- 通过传入 `to` 属性指定链接 -->
            <!-- <router-link> 默认会被渲染成一个 `<a>`标签 -->
            <router-link active-class="active" class="list-group-item" to="/axios">Axios</router-link>
            <router-link active-class="active" class="list-group-item" to="/calculator">Calculator</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideNav',
    data() {
        return {
            msg: 'asdf'
        }
    }
}
</script>

<style>
    
</style>
