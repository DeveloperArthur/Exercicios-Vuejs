<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <app-meio></app-meio>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
import header from './components/header.vue';
import meio from './components/meio.vue';
import footer from './components/footer.vue';

export default {
    components: {
        AppHeader: header,
        AppMeio: meio,
        AppFooter: footer
    }
}
</script>

<style>

</style>
