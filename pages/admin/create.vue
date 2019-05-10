<template>
        <el-form 
            :model="controls" 
            :rules="rules" 
            ref="form"
            @submit.native.prevent="onSubmit"
        >
        <h1 class="mb-2">Создать новый пост</h1>
        <el-form-item class="mb-2" label="Введите название поста" prop="title">
                <el-input  v-model.trim="controls.title" />
            </el-form-item>
            <el-form-item class="mb-2" label="Текст в формате .md или .html" prop="text">
                <el-input type="textarea" :rows="10" v-model="controls.text" />
            </el-form-item>

            <el-button type="success" plain @click="previewDialog = true" class="mb">Предпросмотр</el-button>

            <el-dialog title="Предпросмотр" :visible.sync="previewDialog">
                <div :key="controls.text">
                    <vue-markdown>{{controls.text}}</vue-markdown>
                </div>
            </el-dialog>

            <el-form-item>
                <el-button
                    type="primary"
                    round
                    native-type="submit"
                    :loading="loading"
                >
                    Создать пост
                </el-button>
            </el-form-item>
        </el-form>
</template>

<script>
export default {
    layout: 'admin',
    middleware: ['admin-auth'],
    head() {
        return {
            title: `Создать пост`
        }
    },
    data() {
        return {
            loading: false,
            previewDialog: false,
            controls: {
                text: '',
                title: '',
            },
            rules: {
                text: [
                    { required: true, message: 'Текст не должен быть пустым', trigger: 'blur' }
                ],
                title: [
                    { required: true, message: 'Название поста не может быть пустым', trigger: 'blur' }
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
                        title: this.controls.title
                    }
                    try {
                        await this.$store.dispatch('post/create', formData)
                        this.controls.text = ''
                        this.controls.title = ''
                        this.$message.success('Пост создан')
                    } catch (e) {} finally {
                        this.loading = false
                    }
                    
                }
            })
        } 
    }
}
</script>

<style lang="sass" scoped>
    form
        max-width: 600px
</style>