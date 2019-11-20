<template>
  <v-app>
    <CoreToolbar/>
    <CoreMain/>
    <CoreFooter/>
    <!--<section style="background-color: black">-->
    <!--<div style="width: 100%; display: flex; align-items: center;-->
    <!--justify-content: center;">-->
    <!--<v-btn @click="education = !education" class="ma-5" :color="education?'red':'black'"> <a :style="{color: (education?'black':'white')}">Edukacja</a></v-btn>-->
    <!--<v-btn @click="education = !education" :color="!education?'red':'black'"><a :style="{color: (!education?'black':'white')}">Doświadczenie</a></v-btn>-->
    <!--</div>-->
    <!--<v-timeline class="mb-5">-->
    <!--<v-timeline-item-->
    <!--color="red"-->
    <!--:right="education"-->
    <!--small-->
    <!--&gt;-->
    <!--<div class="py-4"-->
    <!--style="color: white">-->
    <!--<h2 class="headline">Szkoła średnia </h2>-->
    <!--<div>-->
    <!--Technikum w zawodzie technik informatyk-->
    <!--</div>-->
    <!--</div>-->
    <!--</v-timeline-item>-->
    <!--<v-timeline-item-->
    <!--color="red"-->
    <!--:right="education"-->
    <!--small-->
    <!--&gt;-->
    <!--<div class="py-4"-->
    <!--style="color: white">-->
    <!--<h2 class="headline">Szkoła wyższa</h2>-->
    <!--<div>-->
    <!--Już wkrótce :)-->
    <!--</div>-->
    <!--</div>-->
    <!--</v-timeline-item>-->
    <!--</v-timeline>-->
    <!--</section>-->
    <!--<div style="height: 200vh;background-color: white">-->
    <!--</div>-->
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      education: true,
      years: [
        {
          color: 'cyan',
          year: '1960',
        },
        {
          color: 'green',
          year: '1970',
        },
      ],
    }),
    components: {
      CoreToolbar: () => import('@/components/cores/Toolbar'),
      CoreMain: () => import('@/components/cores/Main'),
      CoreFooter: () => import('@/components/cores/Footer'),
    },
    methods: {
      push(path) {
        window.open(path, '_blank')
      }
    },
  }
</script>
<style scoped>
  .button-social__facebook {
    background-color: white !important;
    color: black;
  }

  .button-social__facebook:hover {
    background-color: #4267b2 !important;
    color: white;
  }

  .button-social__linkedin {
    background-color: white !important;
    color: black;
  }

  .button-social__linkedin:hover {
    background-color: #2977c9 !important;
    color: white;
  }

  .button-social__github {
    background-color: white !important;
    color: black;
  }

  .button-social__github:hover {
    background-color: #4267b2 !important;
    color: white !important;
  }
</style>
