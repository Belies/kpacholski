<template>
  <v-footer style="height: auto; background-color: black">
    <v-container class="mt-4 grid-list-md justify-center">
      <v-layout class="justify-center" row wrap>
        <div class="pr-5">
          <v-btn @click="push('https://www.facebook.com/pasiol01')"
                 class="hidden-sm-and-down button-social__facebook" fab flat large>
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn @click="push('https://www.facebook.com/pasiol01')"
                 class="hidden-md-and-up button-social__facebook" fab flat>
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
        </div>
        <div class="pr-5">
          <v-btn @click="push('https://www.github.com/kpacholskipl')"
                 class="hidden-sm-and-down button-social__github" fab flat large>
            <v-icon>mdi-github-circle</v-icon>
          </v-btn>
          <v-btn @click="push('https://www.github.com/kpacholskipl')"
                 class="hidden-md-and-up button-social__github" fab flat>
            <v-icon>mdi-github-circle</v-icon>
          </v-btn>
        </div>
        <div>
          <v-btn class="hidden-sm-and-down button-social__linkedin" fab flat large>
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn class="hidden-md-and-up button-social__linkedin" fab flat>
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
        </div>
      </v-layout>
    </v-container>
  </v-footer>
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
