<nav v-if="pagination.last_page > 0" aria-label="Page navigation" >
    <ul class="pagination">
        <li :class="{disabled: pagination.prev_page_url == null}">
            <a href="#" v-if="pagination.prev_page_url != null"  @click.prevent="loadUsers(pagination.prev_page_url)" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </a>
        </li>
        <li v-for="n in pagination.last_page" 
            :class="{ active: n == pagination.current_page}">
            <a :href="'/users?page=' + n" v-on:click.prevent="loadUsers">@{{ n }}</a>                           
        </li>
        <li :class="{disabled: pagination.next_page_url == null}">
            <a href="#" v-if="pagination.next_page_url != null"  @click.prevent="loadUsers(pagination.next_page_url)" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
            </a>
        </li>
    </ul>
</nav>

