<template>
    <div class="error">
        <div class="error__content">
            <h1 class="error__title">Ошибка 404</h1>
            <nuxt-link to="/">Вернутся на главную</nuxt-link>
        </div>
    </div>
</template>

<style lang="sass" scoped>
    .error
        display: flex
        justify-content: center
        align-items: center
        width: 100%
        &__content
           display: flex
           flex-direction: column
           align-items: center 
        &__title
            color: #fa0000
            margin-bottom: 1rem
        
</style>

