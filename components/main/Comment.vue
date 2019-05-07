<template>
    <el-card class="comment">
        <div class="comment__header">
            <span>Person name</span>
            <small>
                <i class="el-icon-time"></i>
                {{ new Date().toLocaleString() }}
            </small> 
        </div>
        <div class="comment__text">
            Lorem ipsum dolor sit amet. 
        </div>
    </el-card>
</template>

<script>
export default {
    props: ['comment']
}
</script>

<style lang="sass" scoped>
    .comment
        margin-bottom: 1rem
        &__header
            display: flex
            justify-content: space-between
            align-items: center
            margin-bottom: .5rem
            font-size: .8rem
        &__text
            white-space: pre-line
</style>
