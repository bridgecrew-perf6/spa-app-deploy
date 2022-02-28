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
      編集する
    </button>
    <button type="button" class="btn btn-danger" @click="del">削除する</button>
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

  async created() {
    const url = process.env.apiUrl + '/api/users/' + this.$route.params.id
    const { data: user } = await this.$axios.get(url)
    this.user = user
  },

  methods: {
    async save() {
      const url = process.env.apiUrl + '/api/users/' + this.$route.params.id
      try {
        await this.$axios.put(url, this.user)
        alert('ユーザー編集しました')
        this.$router.push('/users')
      } catch (e) {
        console.error(e)
        alert('ユーザーの編集に失敗しました')
      }
    },
    async del() {
      if (!confirm('ユーザーを削除しますか')) return
      const url = process.env.apiUrl + '/api/users/' + this.$route.params.id
      try {
        await this.$axios.delete(url)
        alert('ユーザーを削除しました')
        this.$router.push('/users')
      } catch (e) {
        console.error(e)
        alert('ユーザーの削除に失敗しました')
      }
    },
  },
})
</script>
