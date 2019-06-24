new Vue({
	el: '#exercise',
  data: {
  	p1: true,
    p2: false,
    array: ['arthur', 'gabi', 'ilza', 'raul'],
    object: {
    	title: 'O Senhor dos Anéis', 
      autor: 'J.R.R. Tolkiens ', 
      livros: '3'
    },
    object2: {
    	name: 'TESTOBJECT', 
      data: [1.67, 1.33, 0.98, 2.21]
    }
  },
  methods: {
  	alter: function(){
    	this.p1 = !this.p1;
      this.p2 = !this.p2;
    }
  }
});
