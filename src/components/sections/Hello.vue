<template>
  <section class="hello_section" id="hello">
    <v-container class="hello_700" grid-list-md>
      <v-layout row wrap>
        <v-flex lg7>
          <img alt="" class="hello__image" src="img/personal.jpg"
               style="padding-top: 15%; border-radius: 2%!important;width: 100%!important;height: auto"
          />
        </v-flex>
        <v-flex class="hello_body personal_text" lg5>
          <h6>Cześć wszystkim, jestem</h6>
          <h3>Krystian Pacholski</h3>
          <h4>Junior WEB Developer</h4>
          <p>Chłopak marnujący trzeci rok w technikum informatycznym ambitnie dążący do realizacji swoich
            nieposkromionych marzeń.<br> W wolnej chwili lubi sięgnąć po ciekawą książkę koniecznie z kubkiem pełnym pysznej kawy ;3 <br></p>
          <ul class="list hello_info">
            <li><a href="#">
              <v-icon>mdi-calendar-month</v-icon>
              9 stycznia, 2001</a></li>
            <li><a href="tel:697919264">
              <v-icon>mdi-phone</v-icon>
              697 919 264</a></li>
            <li><a href="mailto:pachol2001@gmail.com">
              <v-icon>mdi-email</v-icon>
              pachol2001@gmail.com</a></li>
            <li><a
              @click="push('https://www.google.com/maps?q=opoczno&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjm0ofMoPflAhWK_CoKHWUGCwcQ_AUoAXoECBQQAw')">
              <v-icon>mdi-city</v-icon>
              Opoczno</a></li>
          </ul>
          <v-container class="mt-4 grid-list-md">
            <v-layout row wrap>
              <v-flex class="button-social" xs6>
                <v-btn @click="push('https://www.facebook.com/pasiol01')"
                       class="hidden-sm-and-down button-social__facebook" fab large text>
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn @click="push('https://www.facebook.com/pasiol01')"
                       class="hidden-md-and-up button-social__facebook" fab>
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
              </v-flex>
              <v-flex class="button-social" xs6>
                <v-btn @click="push('https://www.github.com/kpacholskipl')"
                       class="hidden-sm-and-down button-social__github" fab large text>
                  <v-icon>mdi-github-circle</v-icon>
                </v-btn>
                <v-btn @click="push('https://www.github.com/kpacholskipl')"
                       class="hidden-md-and-up button-social__github" fab>
                  <v-icon>mdi-github-circle</v-icon>
                </v-btn>
              </v-flex>
              <!--<v-flex xs4>-->
              <!--<v-btn class="hidden-sm-and-down button-social__linkedin" fab flat large>-->
              <!--<v-icon>mdi-linkedin</v-icon>-->
              <!--</v-btn>-->
              <!--<v-btn class="hidden-md-and-up button-social__linkedin" fab flat>-->
              <!--<v-icon>mdi-linkedin</v-icon>-->
              <!--</v-btn>-->
              <!--</v-flex>-->
            </v-layout>
          </v-container>
        </v-flex>
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
