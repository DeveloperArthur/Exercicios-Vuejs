<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <!-- declarando o metodo na tag e escrevendo a funcao entre aspas -->
            <!-- getStatus é o metodo que faz pega a variavel lá do componente filho e trás pro pai-->
            <servers
            @getStatus="status2 = $event"
            :servers="servers"
            :setUpdateStatus="status2"
            ></servers>
            <!-- setStatus eh uma variavel que vai receber o valor da var passada pelo pai -->
            <app-server-details 
            @getUpdateStatus="atualizarMinhaArray($event)"
            :setStatus="status2"></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
        data(){
            return {
                status2: '',
                servers: [
                    { id: 1, status: 'Normal'},
                    { id: 2, status: 'Critical'},
                    { id: 3, status: 'Offline'},
                    { id: 4, status: 'Unknow'},
                    { id: 5, status: 'Low'}
                ]
          }
        },
        methods: {
            atualizarMinhaArray(itemRecebido){
                this.servers.map(itemServidor => {
                    if(itemServidor.id == itemRecebido.id)  itemServidor.status = itemRecebido.status;
                })
            }
        },
        components: {
            appHeader: Header,
            Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        }
    }
</script>

<style>

</style>
