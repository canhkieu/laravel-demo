
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app',
    data: {
        users: [],
        pagination: {}
    },
    created: function () {
        this.loadUsers('');
    },
    methods: {
        loadUsers: function (page_url) {
            page_url = page_url || '/users';

            this.$http.get(page_url).then(function (response) {                
                this.users =  response.body.data;              
                this.setPagination(response.body);
            });
        },
        setPagination: function (data) {
            console.log(data);
            this.pagination = {
                current_page: data.current_page,
                last_page: data.last_page,
                next_page_url: data.next_page_url,
                prev_page_url: data.prev_page_url
            };
        }
    }
});


//import Pusher from "pusher-js";
//Pusher.logToConsole = true;
//
//var pusher = new Pusher('1a236f4b6910926b109d', {
//    cluster: 'ap1',
//    encrypted: true
//});
//
//var channel = pusher.subscribe('my-channel');
//channel.bind('App\\Events\\NotificationPusher', function (data) {
//    $('body').append('<br>').append(data.text);
//});