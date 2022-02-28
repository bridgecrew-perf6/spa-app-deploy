<template>
  <div class="container">
    <br />
    <table class="table table-striped dataReports-table">
      <thead class="thead-light">
        <tr class="dataReportsHeader">
          <th class="ar_col_4 text-left">ユーザー名</th>
          <th class="ar_col_4">メールアドレス</th>
          <th class="ar_col_4"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td class="ar_col_4">{{ user.name }}</td>
          <td class="ar_col_4">{{ user.email }}</td>
          <td class="ar_col_4">
            <nuxt-link :to="{ path: `/users/${user.id}` }">編集する</nuxt-link>
          </td>
        </tr>
      </tbody>
    </table>
    <nuxt-link :to="{ path: `/users/new` }">
      <button type="button" class="btn btn-primary">新規作成する</button>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'UserList',
  data() {
    return {
      users: [],
    }
  },

  async created() {
    const url = process.env.apiUrl + '/api/users'
    const { data: users } = await this.$axios.get(url)
    this.users = users
  },
})
</script>
