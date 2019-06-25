<template>
    <div class="col-xs-12 col-sm-6">
        <p>Status do Server selecionado: {{ setStatus.status }}</p>
        <button @click="changeStatus">Update status</button>
    </div>

</template>

<script>
    export default {
        //no props foi declarado o var que outro pai passou
        props: {
            setStatus: {
                type: Object,
                default: {}
            }
        },
        methods: {
            changeStatus(){
                if(this.setStatus.status != 'Normal'){
                    // this.setStatus = 'Normal';
                    this.$emit('getUpdateStatus', {
                        id: this.setStatus.id,
                        status: 'Normal'
                    });
                }
            }
        }
    }
</script>

<style>
</style>