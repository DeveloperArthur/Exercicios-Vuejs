<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item" v-for="servidor in servers">Server #{{ servidor.id }}
                <button @click="checkStatus(servidor)">Check status</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            setUpdateStatus: {
                type: Object,
                default: {}
            },
            servers: {
                type: Array,
                default: []
            }
        },
        data: function(){
            return {
                status: ''
            };
        },
        methods: {
            checkStatus(itemSelecionado){
                // this.status = this.servers[n-1].status;
                //no $emit vc vai pegar a variavel que quer passar para o outro componente e passar a funcao que vai fazer isso
                
                this.$emit('getStatus', itemSelecionado);
            }
        }
    }   
</script>

<style>

</style>