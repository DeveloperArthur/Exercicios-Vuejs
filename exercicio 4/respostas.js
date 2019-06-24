new Vue({
	el: '#exercise',
  data: {
  	box: 'shrink',
    aux: 1,
    meuArray: [ 'classe1', 'classe2'],
    ex3: 'exemplo1',
    ex4: 'exemplo4',
    ver: '',
    ex5: 'valor1',
    barra: 0
  },
  methods: {
  	StartEffect: function(){
    	setInterval(() => {
      	if(this.aux == 1){
        	this.box = 'highlight';
          this.aux++;
        }else{
        	this.box = 'shrink';
          this.aux--;
        }
			}, 500);
  	},
    addProgresso: function(){
    	console.log(this.barra);
    	setInterval(() => {
      	if(this.barra >= 100){
        	this.barra = 0;
        }
      }, 2000);
      this.barra += 10;
    }
  }
});
