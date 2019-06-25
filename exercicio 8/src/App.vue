<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <p>Minha solução usando if</p>
                <button class="btn btn-primary" @click="mudartela(1)">Load Blue Template</button>
                <button class="btn btn-success" @click="mudartela(2)">Load Green Template</button>
                <button class="btn btn-danger" @click="mudartela(3)">Load Red Template</button>
                <hr>
                <app-blue v-if="result == 'azul'"></app-blue>
                <app-green v-if="result == 'verde'"></app-green>
                <app-red v-if="result == 'vermelho'"></app-red>
                <hr>
                <p>Solução correta abaixo utilizando slots</p> 
                <button class="btn btn-primary" @click="selectedComponent = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedComponent = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger"  @click="selectedComponent = 'appRed'">Load Red Template</button>
                <hr>
                <component :is="selectedComponent">
                    <h2>Utilizando slots</h2>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        methods: {
            mudartela(n){
                if(n == 1){
                    this.result = 'azul';
                }else if(n == 2){
                    this.result = 'verde';
                }else if(n == 3){
                    this.result = 'vermelho';
                }
            }
        },
        data(){
            return{
                result: '',
                selectedComponent: 'appBlue'
            }
        }
    }
</script>

<style>
</style>
