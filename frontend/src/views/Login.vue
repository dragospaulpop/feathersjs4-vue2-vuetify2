<template>
  <v-container fill-height>
    <v-row>
      <v-col class="text-center">
        <v-card class="mx-4" elevation="8">
          <v-card-title>
            Login
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                persistent-hint
                v-model="email"
                label="Email"
                hint="Introduceti adresa de email"
                :rules="[required]">
              </v-text-field>
              <v-text-field
                persistent-hint
                v-model="password"
                type="password"
                label="Parola"
                hint="Introduceti parola"
                :rules="[required]">
              </v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="login">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LoginView',

  data: () => ({
    email: 'user1@pwa.com',
    password: 'test'
  }),

  methods: {
    required (val) {
      return !!val || 'Camp obligatoriu'
    },
    async login () {
      if (this.email && this.password) {
        const resp = await this.$store.dispatch('login', { email: this.email, password: this.password })
        if (resp) this.$router.push({ name: 'home' })
      }
    }
  }
}
</script>
