<template>
    <div class="navBar">
        NavBar {{msg}}
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            msg: 'asdf'
        }
    }
}
</script>

<style>
    .navBar{}
</style>
