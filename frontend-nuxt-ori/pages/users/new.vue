<template>
  <b-container fluid>
    <br />
    <b-row class="my-1">
      <b-col sm="3">名前</b-col>
      <b-col sm="9">
        <b-form-input v-model="user.name" />
      </b-col>
    </b-row>
    <b-row class="my-1">
      <b-col sm="3">メールアドレス</b-col>
      <b-col sm="9">
        <b-form-input v-model="user.email" />
      </b-col>
    </b-row>
    <b-row class="my-1">
      <b-col sm="3">パスワード</b-col>
      <b-col sm="9">
        <b-form-input v-model="user.password" />
      </b-col>
    </b-row>
    <br />
    <button type="button" class="btn btn-primary" @click="save">
      登録する
    </button>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'UserDetail',
  data() {
    return {
      user: {},
    }
  },

  methods: {
    async save() {
      const url = process.env.apiUrl + '/api/users'
      try {
        await this.$axios.post(url, this.user)
        alert('ユーザー登録しました')
        this.$router.push('/users')
      } catch (e) {
        console.error(e)
        alert('ユーザーの登録に失敗しました')
      }
    },
  },
})
</script>
