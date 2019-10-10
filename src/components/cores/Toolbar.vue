<template>
  <section>
    <v-app-bar
      class="toolbar"
      color="black"
      height="100"
      v-scroll="onScroll"

    >
      <img alt="Błąd przy ładowaniu zdjęcia" class="toolbar-image" src="img/logo.png">
      <nav class="toolbar-menu hidden-sm-and-down">
        <v-btn @click="$vuetify.goTo('#hello', options)" :color="isTransparent ? 'red' : 'black'" class="toolbar-button">
          <a class="white--text">Cześć</a>
        </v-btn>
        <v-btn @click="$vuetify.goTo('#skills', options)" :color="isTransparent ? 'transparent' : 'black'" class="toolbar-button">
          <a class="white--text"> Umiejętności</a>
        </v-btn>
        <v-btn @click="$vuetify.goTo('#projects', options)" :color="isTransparent ? 'red' : 'black'" class="toolbar-button">
          <a class="white--text"> Projekty</a>
        </v-btn>
        <v-btn @click="$vuetify.goTo('#contact', options)" :color="isTransparent ? 'transparent' : 'black'" class="toolbar-button">
          <a class="white--text">Kontakt</a>
        </v-btn>
      </nav>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="toolbar-icon hidden-md-and-up"
                          dark></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      bottom
      class="nav hidden-md-and-up"
      v-model="drawer"
      v-show="drawer"
    >
      <v-list class="nav-list ma-0 pa-0">
        <v-list-item class="nav-list__item">
          <v-list-item-title @click="drawer = !drawer; $vuetify.goTo('#hello', options)" class="text-center">Cześć</v-list-item-title>
        </v-list-item>

        <v-list-item class="nav-list__item--black">
          <v-list-item-title @click="drawer = !drawer; $vuetify.goTo('#skills', options)" class="text-center"><a class="white--text">Umiejętnośći</a>
          </v-list-item-title>
        </v-list-item>

        <v-list-item class="nav-list__item">
          <v-list-item-title @click="drawer = !drawer; $vuetify.goTo('#projects', options)" class="text-center">Projekty</v-list-item-title>
        </v-list-item>

        <v-list-item class="nav-list__item--black">
          <v-list-item-title @click="drawer = !drawer; $vuetify.goTo('#contact', options)" class="text-center"><a class="white--text">Kontakt</a>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </section>
</template>

<script>
  export default {
    data: () => ({
      isTransparent: true,
      drawer: false,
      group: null,

    }),
    methods: {
      onScroll() {
        this.isTransparent = window.pageYOffset < 50
      },
    },
    computed: {
      options() {
        return {
          duration: 1000,
          offset: 100,
          easing: 'easeInOutCubic'
        }
      },
    }
  }
</script>
