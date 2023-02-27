const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: '',
			lastName: '',
			confirmedName: '',
		};
	},

	// using computed (the 3rd part that makes up the vue create app), instead of the method "outputfullname()". Computed only runs when one of the dependencies changes, in this case the 'name' property. Computed is better for outputting values, where methods are used for more logic that is constantly changing/complex functions or for events. **You always bind your events to methods. Use with data binding, and are only re-evaluated if the dependent data changed. Useful for data that depends on other data.
	computed: {
		fullname() {
			if (this.confirmedName === '' || this.lastName === '') {
				return '';
			}
			return this.confirmedName + ' ' + this.lastName;
		},
	},

	//repeat a data or computed property name in a watch, so for example in data I have 'counter', so I will reuse counter in the watch. This watcher method is executed whenever the counter property changes. The watcher automatically gets the value of the property that it's watching, ex. counter(value){}. You can also accept newValue and oldValue as arguments. Watchers shine with http request, timers, or resetting values such as below. Nothing is directly used in the template. It allows you to run code in reaction to changed data, and useful for any non-data updates you want to make.
	watch: {
		counter() {
			if (value > 50) {
				this.counter = 0;
			}
		},
	},

	//use with event binding OR data binding. Method is executed for every "re-render" cycle of the component. Useful for events or data that need to be re-evaluated all the time.
	methods: {
		add(num) {
			this.counter = this.counter + num;
		},
		reduce(num) {
			this.counter = this.counter - num;
		},
		setName(e, lastName) {
			// this.name = e.target.value + ' ' + lastName;
			this.name = e.target.value;
		},
		confirmInput() {
			this.confirmedName = this.name;
		},
		submitForm() {
			// e.preventDefault();
			alert('Submitted!');
		},
		resetInput() {
			this.confirmedName = '';
		},
		outputFullName() {
			if (this.confirmedName === '') {
				return '';
			}
			return this.confirmedName + ' ' + 'Chrzanowska';
		},
	},
});

app.mount('#events');
