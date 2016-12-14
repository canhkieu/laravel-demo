

<template>

<div class="box">
    <div class="box-header with-border">
        <h3 class="box-title">Bordered Table</h3> Users {{ $route.query.page }}
    </div>
    <!-- /.box-header -->
    <div class="box-body">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                <user-row v-for="user in users" :value="user"></user-row>
            </tbody>
        </table>
    </div>
    <!-- /.box-body -->
    <div class="box-footer clearfix">
        <nav v-if="pagination.last_page > 0" aria-label="Page navigation">
            <ul class="pagination">
                <li v-if="pagination.prev_page_url != null">
                    <router-link :to="{name:'user-index', query:{page: (pagination.current_page - 1)}}" v-on:click.prevent="loadUsers"><span aria-hidden="true">&laquo;</span></router-link>
                </li>
                <li v-for="n in pagination.last_page" :class="{ active: n == pagination.current_page}">

                    <router-link :to="{name:'user-index', query:{page:n}}" v-on:click.prevent="loadUsers">{{ n }}</router-link>
                </li>
                <li v-if="pagination.next_page_url != null">
                  <router-link :to="{name:'user-index', query:{page: (pagination.current_page + 1)}}" v-on:click.prevent="loadUsers"><span aria-hidden="true">&raquo;</span></router-link>
                </li>
            </ul>
        </nav>


    </div>

</div>

</template>

<script>

export default {
    data: function() {
        return {
            users: [],
            pagination: {},
            url: ''
        }
    },

    created: function() {
        this.url = document.URL;
        this.loadUsers();
    },
    watch: {
        '$route': function() {
            this.loadUsers();
        }
    },
    computed: function() {
        this.url = function() {
            return document.URL;
        }
    },
    components: {
        'user-row': {
            props: ['value'],
            template: '<tr><td>{{value.id}}</td><td>{{value.name}}</td><td>{{value.email}}</td></tr>'
        },
    },
    methods: {
        loadUsers: function() {
            if (event) {
                if (this.url == event.currentTarget.getAttribute('href'))
                    return;
                this.url = event.currentTarget.getAttribute('href');
            }
            this.$http.get(this.url).then(function(response) {
                console.log(response);
                history.pushState(null, null, this.url);
                this.users = response.body.data;
                this.setPagination(response.body);
            });
        },

        setPagination: function(data) {
            this.pagination = {
                current_page: data.current_page,
                last_page: data.last_page,
                next_page_url: data.next_page_url,
                prev_page_url: data.prev_page_url
            };
        }
    }
}

</script>
