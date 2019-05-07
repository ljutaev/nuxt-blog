<template>
    <el-form 
        :model="controls" 
        :rules="rules" 
        ref="form"
        @submit.native.prevent="onSubmit"
    >
        <h1>Добавить коментарий</h1>
        <el-form-item label="Ваше имя" prop="name">
            <el-input v-model.trim="controls.name" />
        </el-form-item>
        <el-form-item label="Текст коментария" prop="text">
            <el-input 
                type="textarea"
                resize="none"
                rows="2"
                v-model.trim="controls.text" />
        </el-form-item>
        <el-form-item>
            <el-button
                type="primary"
                round
                native-type="submit"
            >
                Добавить комментарий
            </el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    data() {
        return {
            controls: {
                name: '',
                text: ''
            },
            rules: {
                name: [
                    { required: true, message: 'Имя не должно быть пустым', trigger: 'blur' }
                ],
                text: [
                    { required: true, message: 'Введите ваш комментарий', trigger: 'blur' }
                ],
            }
        }
    },
    methods: {
        onSubmit() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    console.log('valid!!');
                }
            });
        } 
    }
}
</script>

<style lang="sass" scoped>

</style>
