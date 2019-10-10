<template>
    <section id="contact" class="personal_text">
      <div class="pt-5 pb-5 mt-5 mb-5">
        <h3><center>Kontakt</center></h3>
      </div>
      <v-container class="contact-section personal_text">
        <v-layout wrap>
          <v-flex class="pr-5" xs6>
            <h4>Twoje imię:</h4>
            <v-text-field
              class="contact-section__input"
              height="7vh"
              label="Janusz"
              solo

            ></v-text-field>
          </v-flex>
          <v-flex class="pl-5" xs6>
            <h4>Twoje email:</h4>
            <v-text-field
              class="contact-section__input"
              height="7vh"
              label="example@mail.com"
              solo

            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <h4>Temat:</h4>
            <v-text-field class="contact-section__input"
                          height="7vh"
                          label="np.: Współpraca"
                          solo
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <h4>Treść wiadomości:</h4>
            <v-textarea rows="5" solo></v-textarea>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
</template>

<script>

</script>
