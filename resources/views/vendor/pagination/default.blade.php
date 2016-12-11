<ul class="pagination" v-if="pagination.last_page > 0">    
    <li v-if="this.pagination.current_page < this.pagination.last_page" :class="{ 'disabled' : pagination.current_page === pagination.last_page || pagination.last_page === 0 }">
        <span v-if="pagination.current_page === pagination.last_page || pagination.last_page === 0">
            <span aria-hidden="true">></span>
        </span>

        <a href="#" v-if="pagination.current_page < pagination.last_page" @click.prevent="loadUsers(pagination.next_page_url)">
            <span aria-hidden="true">></span>
        </a>
    </li>
</ul>