<template>
    <section id="skills" class="mt-5 ml-5 mr-5">
        <v-container grid-list-md>
            <v-layout row wrap>
                <v-flex class="hidden-md-and-down" lg2></v-flex>
                <v-flex class="sklis_body personal_text" lg4 xs12 md6>
                    <h3>Umiejętności</h3>
                    <p class="ma-1 sklis_body" >
                        Jak już wiesz mam na imię Krystian, od ponad roku hobbistycznie zajmuję się programowaniem,
                        skupiając się
                        na tworzeniu stron internetowych. Zarówno prostych jak i bardziej zawansowanych. Wykorzystując
                        do tego
                        następujące technologie: </p>
                    <v-container grid-list-md>
                        <v-layout>
                            <v-flex xs2>
                                <v-btn @click="push('https://laravel.com/')" class="ma-1" color="white" height="80px" width="80px" >
                                    <v-avatar>
                                        <img alt="avatar" height="80px" src="https://laravel.com/img/logomark.min.svg"
                                             width="80px">
                                    </v-avatar>
                                </v-btn>
                            </v-flex>
                            <v-flex offset-xs2 xs2>
                                <v-btn @click="push('https://vuejs.org/')" class="ma-1" color="white" height="80px" width="80px">
                                    <v-avatar>
                                        <img alt="avatar" height="80px" src="https://vuejs.org/images/logo.png"
                                             width="80px">
                                    </v-avatar>
                                </v-btn>
                            </v-flex>
                            <v-flex offset-xs2 xs2>
                                <v-btn @click="push('https://vuetifyjs.com/en/')" class="ma-1" color="white" height="80px" width="80px">
                                    <v-avatar>
                                        <img alt="avatar" height="80px"
                                             src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
                                             width="80px">
                                    </v-avatar>
                                </v-btn>
                            </v-flex>
                            <flex xs1 lg0></flex>
                        </v-layout>
                    </v-container>
                </v-flex>
                <v-flex lg1 class="hidden-md-and-down"></v-flex>
                <v-flex lg3 class="mt-5">
                    <div style="margin-top: auto; margin-bottom: auto">
                    <h1 class="mt-5">Laravel</h1>
                    <v-progress-linear background-opacity="0.2" color="red" height="12" rounded
                                       value="50%"></v-progress-linear>
                    <h1 class="mt-5">Vue.js</h1>
                    <v-progress-linear background-opacity="0.2" color="green" height="12" rounded
                                       value="40%"></v-progress-linear>
                    <h1 class="mt-5">Vuetify</h1>
                    <v-progress-linear background-opacity="0.2" color="blue" height="12" rounded
                                       value="55%"></v-progress-linear>
                    </div>
                </v-flex>

                <v-flex lg2 class="hidden-md-and-down"></v-flex>
            </v-layout>
        </v-container>
    </section>
</template>
<script>
  export default {
    methods: {
      push(path) {
        window.open(path, '_blank')
      }
    },
  }
</script>
