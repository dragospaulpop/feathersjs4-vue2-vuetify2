<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-spacer></v-spacer>
      <h1>Todo Manager: {{ user }}</h1>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),

  computed: {
    user () {
      return this.$store.getters.user
    }
  },

  mounted () {
    this.$store.dispatch('reAuth')
  }
}
</script>
