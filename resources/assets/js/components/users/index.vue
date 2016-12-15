

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
                    <th>
                        <a href="#" @click="sortBy('id')" > ID </a>
                    </th>
                    <th>
                      <a href="#" @click="sortBy('name')" > Name </a>
                    </th>
                    <th>
                      <a href="#" @click="sortBy('email')" > email </a>
                    </th>
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
                sort: '',
                order:'',
                users: [],
                pagination: {},
        }
    },

    created: function() {
        this.loadUsers(this.$route.fullPath);
    },
    watch: {
        '$route.fullPath': function() {
            this.loadUsers(this.$route.fullPath);
        }
    },
    components: {
        'user-row': {
            props: ['value'],
            template: '<tr><td>{{value.id}}</td><td>{{value.name}}</td><td>{{value.email}}</td></tr>'
        },
    },
    methods: {
        loadUsers: function(url) {
          url = '/json'+ url;
            this.$http.get(url).then(function(response) {
                this.users = response.body.data;
                this.setPagination(response.body);
            });
        },
        sortBy: function(key) {
            this.sort = key;
            this.order = this.order === 'desc' ? 'asc' : 'desc';
            var url =  this.$route.path + '?page=' + this.$route.query.page + '&sort=' + this.sort + '&order='+ this.order;
            console.log(url);
            this.loadUsers(url);

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
