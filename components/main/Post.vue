<template>
    <el-card
        shadow="always"
        :body-style="{padding: 0}"
        class="post"
    >
        <header slot="header" class="post__header">
            <h3>{{ post.title }}</h3>
            <small><i class="el-icon-time"></i> {{ new Date(post.date).toLocaleString() }}</small>
        </header>
        <div class="post__body">
            <img :src="post.imageUrl" alt="Post Image" class="post__image">
        </div>
        <footer class="post__footer">
            <el-button round @click="openPost">Открыть</el-button>
            <span>
                <i class="el-icon-message"></i>
                {{post.comments.length}}
            </span>
        </footer>
    </el-card>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    methods: {
        openPost() {
            const id = this.post._id;
            this.$router.push(`/post/${id}`);
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

