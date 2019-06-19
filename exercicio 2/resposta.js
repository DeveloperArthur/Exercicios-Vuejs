new Vue({
  el: "#exercise",
  data: {
    value: '',
    value2: ''
  },
  methods: {
  	alerta: function(){
    	alert('Questao 1 respondida!');
    },
    teclas: function(event){
    	this.value = event.target.value
    },
    teclas2: function(event){
    	this.value2 = event.target.value
    }
  }
});
