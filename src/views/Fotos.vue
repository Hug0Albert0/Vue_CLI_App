<template>
   <div>
      <h1>Galeria de Fotos</h1>
      <router-link
         :to="{name: 'Fotos', params: {id: item}}"
         v-for=" (item, index) of fotosArreglo" :key="index">
         <button>Foto: {{item}}</button>
      </router-link>
      <Fotografia></Fotografia>
   </div>
</template>

<script>

import Fotografia from "@/components/Fotografia.vue"

export default {
   components: {
      Fotografia
   },
   data() {
      return {
         fotosArreglo: [1, 2, 3, 4, 5]
      }
   }
}
</script>