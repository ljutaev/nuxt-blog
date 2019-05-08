<template>
    <div class="admin-wrap">
        <el-container :style="{height: '100%'}">
            <el-aside width="250px">
                <app-aside></app-aside>
            </el-aside>
            <el-main>
                <nuxt />
            </el-main>
        </el-container>
    </div>
</template>

<script>
import AppAside from '@/components/admin/Aside'

export default {
    components: {AppAside}
}
</script>

<style lang="sass" scoped>
    .admin-wrap
        height: 100vh
        width: 100%
</style>