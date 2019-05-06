<template>
    <el-card
        shadow="always"
        :body-style="{padding: 0}"
        class="post"
    >
        <header slot="header" class="post__header">
            <h3>Post title</h3>
            <small><i class="el-icon-time"></i> {{ new Date().toLocaleString() }}</small>
        </header>
        <div class="post__body">
            <img src="https://www.mcny.org/sites/default/files/New-York-14-10-2489.jpg" alt="Post Image" class="post__image">
        </div>
        <footer class="post__footer">
            <el-button round @click="openPost">Открыть</el-button>
            <span>
                <i class="el-icon-message"></i>
                12
            </span>
        </footer>
    </el-card>
</template>

<script>
export default {
    methods: {
        openPost() {
            console.log('Open Post')
            alert(1)
        }
    }
}
</script>

<style lang="sass" scoped>
    .post
        margin-bottom: 1.5rem
        &__header
            display: flex
            justify-content: space-between
            align-items: center
        &__body

        &__image
            width: 100%   
            height: auto
        &__footer
            padding: 1rem
            display: flex
            justify-content: space-between
            align-items: center
</style>

