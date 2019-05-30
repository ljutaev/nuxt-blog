<template>
    <div>
        <h1>Аналитика по постам</h1>
        <canvas ref="canvas" height="50vh"></canvas>
    </div>
</template>

<script>
import {Bar} from 'vue-chartjs'
export default {
    layout: 'admin',
    middleware: ['admin-auth'],
    extends: Bar,
    async asyncData({store}) {
        const analytics = await store.dispatch('post/getAnalytics')
        return {analytics}
    }
}
</script>
