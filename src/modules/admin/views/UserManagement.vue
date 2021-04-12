<template>
    <div>
manage
<base-button @click="listUsers()" class="btn-primary">load users</base-button>
<pre>{{ users }}</pre>
    </div>
</template>

<script>
import { listUsers as _listUsers } from '../admin.service.js'
    export default {
        data() {
            return {
                users: []
            }
        },
        methods: {
            async listUsers() {
                const users = await _listUsers()
                this.users = users
            }
        },       
    }
</script>

<style lang="scss" scoped>

</style>