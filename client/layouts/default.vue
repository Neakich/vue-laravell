<template>
  <v-app>
    <v-toolbar app flat dark color="primary" >
        <v-toolbar-side-icon @click.stop="menu = !menu"></v-toolbar-side-icon>
        <v-toolbar-title>Vue Laravel Project</v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer
      v-model="menu"
      absolute
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile avatar to="/">
          <v-list-tile-avatar>
            <img src="https://cdn-images-1.medium.com/max/1200/1*yeAO-nwsAqnzr7k-zoDkoQ.png">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Menu</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile
          :to="item.route"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
        menu: null,
        items: [
                { 
                    title: 'Registration', 
                    icon: 'assignment_ind',
                    route: '/registration'
                },
                { 
                    title: 'Users', 
                    icon: 'group',
                    route: '/users'
                }
            ],
    }),
  }
</script>
