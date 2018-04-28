<template>
	<div class="col-xs-10">
        <div class="panel">
            <div class="panel-body">
                <!-- 路由出口 -->
                <!-- 路由匹配到的组件将渲染在这里 -->
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
	export default {
		name: 'Content'
	}
</script>