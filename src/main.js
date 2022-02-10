import Vue from 'vue'; // importing the vue library
import App from './App';

new Vue ({
    render: h => h(App) // creating a function 
}).$mount('#app');
