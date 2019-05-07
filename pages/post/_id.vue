<template>
    <article class="post">
        <header class="post__header">
            <div class="post__title">
                <h1>Post title</h1>
                <nuxt-link to="/">
                    <i class="el-icon-back"></i>
                </nuxt-link>
            </div>
            <div class="post__info">
                <small><i class="el-icon-time"></i> {{ new Date().toLocaleString() }}</small>
                <small><i class="el-icon-view"></i> 42</small>
            </div>
            <div class="post__image">
                <img src="https://www.mcny.org/sites/default/files/New-York-14-10-2489.jpg" alt="Post Image" class="post__image">
            </div>
        </header>
        <main class="post__content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus porro doloremque quasi! Eligendi labore ipsum veritatis vitae veniam voluptas voluptate omnis mollitia odio? Dolorem cupiditate eos dolores maxime minus quia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus porro doloremque quasi! Eligendi labore ipsum veritatis vitae veniam voluptas voluptate omnis mollitia odio? Dolorem cupiditate eos dolores maxime minus quia!</p>
        </main>
        <footer>
            <app-comment-form></app-comment-form>
            <div class="comments" v-if="true">
                <app-comment
                    v-for="comments in 4"
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
