<template>
  <div class="container">
    <form v-if="foi">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Exercício 1 -->
          <!-- Criar um formulário de inscrição onde você recupera as seguintes informações -->
          <!-- Nome Completo (Primeiro Nome + Sobrenome) -->
          <!-- Mail -->
          <!-- Senha -->
          <!-- Armazenamento de dados? Sim / não -->
          
          <!-- Exercício 2 -->
          <!-- Exibe o formulário somente se ele não tiver sido enviado -->
          <!-- Exibe o resumo dos dados UMA VEZ que o formulário foi enviado -->

          <!-- Exercício 3 -->
          <!-- Edite o exemplo acima e crie um controle "Full Name" personalizado -->
          <!-- que ainda contém o campo de entrada de nome e sobrenome -->
          <br>
          <p id="nome">Primeiro nome:</p> 
          <input type="text" v-model="nome">
          <br><br>
          <p id="nome">Ultimo nome:</p> 
          <input type="text" v-model="sobrenome">
          <br><br>
          <p id="mail">Mail:</p> 
          <input type="text" v-model="mail">
          <br><br>
          <p id="senha">Senha:</p>
          <input type="password" v-model="senha">
          <br><br>
          <p id="dados">Armazenamento de dados?</p>
          <input type="radio" id="dados" name="drone" value="Sim" checked v-model="dados"> Sim
          <br>
          <input type="radio" id="dados" name="drone" value="Não" checked v-model="dados"> Não
          <br><br>
          <button class="btn btn-primary" @click="enviar">Enviar</button>
        </div>
      </div>
    </form>
    <hr>
    <div class="row" v-if="!foi">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>seus dados</h4>
          </div>
          <div class="panel-body">
            <p>Nome completo: {{ nome }} {{ sobrenome }}</p>
            <p>Mail: {{ mail }}</p>
            <p>Senha: {{ senha }}</p>
            <p>Receber armazenamento de dados: {{ dados }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      foi: true,
      nome: '',
      sobrenome: '',
      mail: '',
      senha: '',
      dados: ''
    }
  },
  methods: {
    enviar(){
      this.foi = false;
    }
  }
};
</script>

<style>
</style>
