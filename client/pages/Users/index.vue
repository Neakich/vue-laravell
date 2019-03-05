<template>
<v-container>
  <v-card-title>
    <v-spacer></v-spacer>
    <v-text-field
      v-model="search"
      append-icon="search"
      label="Search"
      single-line
      hide-details
    ></v-text-field>
  </v-card-title>
  <v-data-table
    :headers="headers"
    :items="users"
    class="elevation-1"
    :search="search"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-left">{{ props.item.phone }}</td>
      <td class="text-xs-center">{{ props.item.sex }}</td>
    </template>
  </v-data-table>
</v-container>
</template>

<script>
  import { usersRef } from '../../firebase'
  export default {
    // async asyncData({ $axios }) {
    //     const users = await $axios.$get('http://127.0.0.1:3000/users')
    //     return { users }
    // },
    firebase() {
      return {
        users: usersRef,
      }
    },
    data () {
      return {
        search: '',
        headers: [
          { text: 'Имя', value: 'first_name',  align: 'left' },
          { text: 'Телефон', value: 'phone', align: 'left' },
          { text: 'Пол', value: 'sex', align: 'center' },
        ],
      }
    }
  }
</script>