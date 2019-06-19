new Vue({
  el: "#exercise",
  data: {
    name: 'Arthur',
    age: 20,
    link: 'https://cdn.pixabay.com/photo/2018/07/23/22/48/nature-3558033_960_720.jpg',
    teste: 'Arthur'
  },
  methods: {
  	random: function(){
    	return Math.random();
    }
  }
})
