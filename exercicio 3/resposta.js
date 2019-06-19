new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed: {
        	result: function() {
          	return this.value == 37 ? 'chegou' : 'ainda não chegou';
          }
        },
        watch: {
        	result: function() {
          	var vm = this;
          	setTimeout(function() {
            	vm.value = 0;
            }, 5000);
          }
        }
    });
