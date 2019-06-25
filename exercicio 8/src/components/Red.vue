<template>
    <div>
        <h1>Ola eu sou a tela vermelha</h1>
        <slot></slot>
    </div>
</template>

<script>

</script>

<style scoped>
    div {
        border: 1px solid red;
        background-color: lightcoral;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>