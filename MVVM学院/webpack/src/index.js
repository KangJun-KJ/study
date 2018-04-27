import San from 'san'
import App from './App.san'

var MyApp = San.defineComponent({
	components:{
		'app':App
	},
	template: '<app><app>'
});

var myApp = new MyApp();
myApp.attach(document.body);