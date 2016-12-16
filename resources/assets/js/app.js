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

//Vue.component('main-sidebar', require('./components/layouts/Sidebar.vue'));
//Vue.component('main-header', require('./components/layouts/Header.vue'));
Vue.config.debug = true;

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/home',
        component: require('./components/Home.vue'),
        name: 'home'
    }, {
        path: '/user',
        component: require('./components/User.vue'),
        name: 'user'
    }, {
        path: '/users',
        component: require('./components/users/index.vue'),
        name: 'user-index'
    }]
})

// router.beforeEach((to, from, next) => {
//   console.log(to);
//   next();
// })

const app = new Vue({
    router,
    el: '#app',
    data: {}
})


//import App from './components/App.vue'
//
//const User = {
//    template: "Hello",
//}
//
//const router = new VueRouter({
//    mode: 'history',
//    routes: [
//        {path: '/', component: App, name: 'home'},
//        {path: '/user', component: User, name: 'user'},
//    ]
//})
//
//const app = new Vue({
//    router,
//    el: '#app',
//    data: {
//
//    },
////    created: {
////
////    },
////    methods: {
////
////    }
//});

//import Users from './components/Users.vue';
//
//const router = new VueRouter({
//    mode: 'history',
//    routes: [
//        {path: '/'},
//        {path: '/users?', query: 'page', component: Users},
//    ],
//});
//const app = new Vue({
//    router,
//    el: '#app',
//    data: {
//        users: [],
//        pagination: {},
//        url: ''
//    },
//    created: function () {
//        this.url = document.URL;
//        this.loadUsers();
//    },
//    methods: {
//        loadUsers: function () {
//            if (event) {
//                if (this.url == event.currentTarget.getAttribute('href'))
//                    return;
//                this.url = event.currentTarget.getAttribute('href');
//            }
//            this.$http.get(this.url).then(function (response) {
//                history.pushState(null, null, this.url);
//                this.users = response.body.data;
//                this.setPagination(response.body);
//            });
//
//
//        },
//
//        setPagination: function (data) {
//            this.pagination = {
//                current_page: data.current_page,
//                last_page: data.last_page,
//                next_page_url: data.next_page_url,
//                prev_page_url: data.prev_page_url
//            };
//        }
//    }
//
//});

$(document).ajaxStart(function() {
    Pace.restart();
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
