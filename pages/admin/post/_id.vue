<template>
    <div class="page-wrap">
        <el-breadcrumb separator="/" class="mb">
            <el-breadcrumb-item :to="{ path: '/admin/list' }">Посты</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">{{post.title}}</a></el-breadcrumb-item>
        </el-breadcrumb>
        Post {{$route.params.id}}

        <el-form 
            :model="controls" 
            :rules="rules" 
            ref="form"
            @submit.native.prevent="onSubmit"
        >
            <!-- <h1>Войти в панель администоратора</h1> -->
            <el-form-item class="mb-2" label="Текст в формате .md или .html" prop="text">
                <el-input type="textarea" :rows="10" v-model.trim="controls.text" />
            </el-form-item>

            <div class="mb-2">
                <small class="mr">
                    <i class="el-icon-time"></i>
                    <span>{{ new Date(post.date).toLocaleString() }}</span>
                </small>
                <small>
                    <i class="el-icon-view"></i>
                    <span>{{ post.views }}</span>
                </small>
            </div>

            <el-form-item>
                <el-button
                    type="primary"
                    round
                    native-type="submit"
                    :loading="loading"
                >
                    Обновить
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    layout: 'admin',
    middleware: ['admin-auth'],
    head() {
        return {
            title: `Пост | ${this.post.title}`
        }
    },
    validate({params}) {
        return Boolean(params.id)
    },
    data() {
        return {
            loading: false,
            controls: {
                text: '',
            },
            rules: {
                text: [
                    { required: true, message: 'Текст не должен быть пустым', trigger: 'blur' }
                ],
            }
        }
    },
    async asyncData({store, params}) {
        const post = await store.dispatch('post/fetchAdminById', params.id)
        return {post}
    },
    methods: {
        onSubmit() {
            this.$refs.form.validate(async valid => {
                if(valid) {
                    this.loading = true;

                    const formData = {
                        text: this.controls.text,
                        id: this.post._id
                    }
                    try {
                        await this.$store.dispatch('post/update', formData)
                        this.$message.success('Пост обновлен')
                        this.loading = false
                    } catch (e) {
                        this.loading = false
                    }
                    
                }
            })
        } 
    }
}
</script>

<style lang="sass" scoped>
    .page-wrap
        max-width: 600px
    .mr
        margin-right: 2rem
</style>