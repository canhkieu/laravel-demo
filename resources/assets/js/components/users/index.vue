

<template>

<div class="box">
    <div class="box-header with-border">
        <h3 class="box-title">Bordered Table</h3> Users {{ $route.query.page }}
    </div>
    <!-- /.box-header -->
    <div class="box-body">
      <div class="col-md-4"></div>
      <div class="col-md-4"></div>
        <div class="col-md-4">
          <div class="input-group has-feedback">
              <div class="input-group-btn">
                  <button type="button" class="btn btn-primary">Search</button>
                  <button type="button" class="btn btn-default" aria-label="Clear"><span class="fa fa-times-circle-o"></span></button>
              </div>
              <input class="form-control" placeholder="Search" v-model="keyword" v-on:keyup.enter="search">
              <span class="fa fa-search form-control-feedback"></span>
          </div>
        </div>

        <table class="table table-hover">
            <thead>
                <tr>
                    <th>
                        <router-link :to="{query: Object.assign( {}, $route.query, {sort: 'id', order: this.order == 'desc' ? 'asc' : 'desc' })}"> ID </router-link>
                    </th>
                    <th>
                        <router-link :to="{query: Object.assign( {}, $route.query, {sort: 'name', order: this.order == 'desc' ? 'asc' : 'desc' })}"> Name </router-link>
                    </th>
                    <th>
                        <router-link :to="{query: Object.assign( {}, $route.query, {sort: 'email', order: this.order == 'desc' ? 'asc' : 'desc' })}"> Email </router-link>
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
            <ul class="pagination pull-right">
                <li v-if="pagination.prev_page_url != null">
                    <router-link :to="{query: Object.assign( {}, $route.query, {page: pagination.current_page - 1})}"><span aria-hidden="true">&laquo;</span></router-link>
                </li>
                <li v-for="n in pagination.last_page" :class="{ active: n == pagination.current_page}">
                    <router-link :to="{query: Object.assign( {}, $route.query, {page: n})}">{{ n }}</router-link>
                </li>
                <li v-if="pagination.next_page_url != null">
                    <router-link :to="{query: Object.assign( {}, $route.query, {page: pagination.current_page + 1})}"><span aria-hidden="true">&raquo;</span></router-link>
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
            order: '',
            users: [],
            pagination: {},
        }
    },
    created: function() {
        this.loadUsers(this.$route.fullPath);
        this.keyword = this.$route.query.keyword;
        this.order = this.$route.query.order;
        this.sort = this.$route.query.sort;
    },
    watch: {
        '$route.fullPath': function() {
            this.keyword = this.$route.query.keyword;
            this.order = this.$route.query.order;
            this.sort = this.$route.query.sort;
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
        search: function() {
            this.$router.push({
                query: {
                    keyword: this.keyword
                }
            });
        },
        loadUsers: function(url) {
            url = '/json' + url;
            this.$http.get(url).then(function(response) {
                this.users = response.body.data;
                this.setPagination(response.body);
            });
        },
        sortBy: function(key) {
            this.sort = key;
            this.order = this.order === 'desc' ? 'asc' : 'desc';
            var url = this.$route.path + '?page=' + this.$route.query.page + '&sort=' + this.sort + '&order=' + this.order;
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
