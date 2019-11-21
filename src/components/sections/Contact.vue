<template>
  <section class="personal_text" id="contact">
    <div class="pt-5 pb-5 mt-5 mb-5">
      <h3>
        <center>Kontakt</center>
      </h3>
    </div>
    <v-container class="contact-section personal_text">
      <v-layout wrap>
        <v-flex :class="{'pr-5': true === $vuetify.breakpoint.lgAndUp }" lg6 xs12>
          <h4>Twoje imię:</h4>
          <v-text-field
            :rules="[rules.required]"
            class="contact-section__input"
            height="7vh"
            label="Janusz"
            solo
            outlined
            color="black"
            v-model="name"

          ></v-text-field>
        </v-flex>
        <v-flex :class="{'pl-5': true === $vuetify.breakpoint.lgAndUp }" lg6 xs12>
          <h4>Twoje email:</h4>
          <v-text-field
            :rules="[rules.required, rules.email]"
            class="contact-section__input input-group--focused"
            height="7vh"
            label="example@mail.com"
            solo
            outlined
            color="black"
            v-model="email"
          ></v-text-field>
        </v-flex>
        <v-flex xs12>
          <h4>Temat:</h4>
          <v-text-field :rules="[rules.required, rules.min]"
                        class="contact-section__input"
                        height="7vh"
                        label="np.: Współpraca"
                        solo
                        outlined
                        color="black"
                        v-model="subject"
          ></v-text-field>
        </v-flex>
        <v-flex xs12>
          <h4>Treść wiadomości:</h4>
          <v-textarea :rules="[rules.required, rules.content]"
                      class="contact-section__input"
                      rows="8"
                      solo
                      outlined
                      color="black"
                      v-model="content"
          >
          </v-textarea>
          <center>
            <v-btn :disabled="isRequire" @click="sendEmail" large :style="!isRequire? 'border-color: black; border-style: solid':'' ">
            Wyślij
          </v-btn>
          </center>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>
<script>
  export default {
    data: () => ({
      name: '',
      email: '',
      subject: '',
      content: '',
      rules: {
        required: value => !!value || 'Wymagane.',
        min: v => v.length >= 10 || 'Min 10 znaków',
        content: v => v.length >= 20 || 'Min 20 znaków',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value.trim()) || 'Niepoprawny format e-mail.'
        }
      },
      rulesBoolean: {
        required: value => !!value || false,
        min: v => v.length >= 10 || false,
        content: v => v.length >= 20 || false,
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || false
        }
      },
    }),
    methods: {
      sendEmail() {
        var template_params = {
          "from_name": this.name,
          "reply_to": this.email,
          "subject": this.subject,
          "content": this.content
        }

        var service_id = "default_service";
        var template_id = "template_OpdwCKqv";
        emailjs.send(service_id, template_id, template_params);
      }
    },
    computed: {
      isRequire() {
        return !(this.rulesBoolean.required(this.email) && this.rulesBoolean.required(this.name) && this.rulesBoolean.required(this.subject) && this.rulesBoolean.required(this.content) && this.rulesBoolean.email(this.email) && this.rulesBoolean.min(this.subject) && this.rulesBoolean.content(this.content))
      }
    }
  }

</script>
