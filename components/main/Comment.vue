<template>
    <el-card class="comment">
        <div class="comment__header">
            <span>{{comment.name}}</span>
            <small>
                <i class="el-icon-time"></i>
                {{ new Date(comment.date).toLocaleString() }}
            </small> 
        </div>
        <div class="comment__text">
            {{comment.text}}
        </div>
    </el-card>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
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
