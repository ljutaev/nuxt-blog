<template>
    <article class="post">
        <header class="post__header">
            <div class="post__title">
                <h1>{{post.title}}</h1>
                <nuxt-link to="/">
                    <i class="el-icon-back"></i>
                </nuxt-link>
            </div>
            <div class="post__info">
                <small><i class="el-icon-time"></i> {{ new Date(post.date).toLocaleString() }}</small>
                <small><i class="el-icon-view"></i> {{post.views}}</small>
            </div>
            <div class="post__image">
                <img :src="post.imageUrl">
            </div>
        </header>
        <main class="post__content">
            <vue-markdown>{{post.text}}</vue-markdown>
        </main>
        <footer>
            <app-comment-form
                v-if="canAddComment"
                @created="createCommentHandler"
            >
            </app-comment-form>
            <div class="comments" v-if="post.comments.length">
                <app-comment
                    v-for="comments in post.comments"
                    :key="comments"
                    :comment="comments"
                >
                </app-comment>
            </div>
            <div class="text-center" v-else>
                Комментариев нет
            </div>               
        </footer>
    </article>
</template>

<script>
import AppComment from '@/components/main/Comment'
import AppCommentForm from '@/components/main/CommentForm'
export default {
    validate({params}) {
        return Boolean(params.id)
    },
    async asyncData({store, params}) {
        const post = await store.dispatch('post/fetchById', params.id)
        await store.dispatch('post/addView', post)
        return {
            post: {...post, views: ++post.views}
        }
    },
    data() {
        return {
            canAddComment: true
        }
    },
    methods: {
        createCommentHandler() {
            this.canAddComment = false
        }
    },
    components: {AppComment, AppCommentForm}
}
</script>

<style lang="sass" scoped>
    .post
        max-width: 600px
        margin: 0 auto
        $this: &
        &__title
            display: flex
            justify-content: space-between
            align-items: center
            margin-bottom: 1rem
        &__image
            width: 100%
            height: auto
        &__header
            margin-bottom: 1.5rem
        &__info
            @extend #{$this}__title
            margin-bottom: .5rem
        &__content
            @extend #{$this}__header
</style>
