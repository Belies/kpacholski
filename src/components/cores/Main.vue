<template>
  <div>
  <Hello/>
  <Skills/>
  <Projects/>
  <Contact/>
  </div>
</template>
<script>
  export default {
    components: {
      Hello: () => import('@/components/sections/Hello'),
      Skills: () => import('@/components/sections/Skills'),
      Projects: () => import('@/components/sections/Projects'),
      Contact: () => import('@/components/sections/Contact'),
    },
  }
</script>