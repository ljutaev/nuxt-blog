<template>
  <div>
    <el-container>
      <el-header>
        <app-navigation />
      </el-header>
      <el-main>
        <nuxt />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
  import AppNavigation from '@/components/main/Navigation'
  export default {
    components: {
      AppNavigation
    }
  }
</script>


<style>

</style>
