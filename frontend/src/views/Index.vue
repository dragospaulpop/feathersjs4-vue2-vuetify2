<template>
  <v-container fill-height>
    <v-row>
      <v-col class="text-center">
        <v-card class="mx-4" elevation="8">
          <v-card-title>
            Todos
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                persistent-hint
                v-model="title"
                label="Title"
                hint="Introduceti titlul"
                :rules="[required]">
              </v-text-field>

            </v-form>

            <v-list dense>
              <v-list-item v-for="todo in todos" :key="todo._id">
                <v-list-item-content>
                  <v-list-item-title>
                    {{ todo.title }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="add">Add todo</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexView',
  data: () => ({
    title: 'Whatever'
  }),
  computed: {
    todos () {
      return this.$store.getters.todos
    }
  },
  methods: {
    required (val) {
      return !!val || 'Camp obligatoriu'
    },
    add () {
      this.$store.dispatch('addTodo', this.title)
      this.title = null
    }
  },
  mounted () {
    this.$store.dispatch('fetchTodos')
  }
}
</script>
