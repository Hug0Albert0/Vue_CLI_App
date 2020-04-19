<template>
   <div>
      <h1>Galeria de Fotos</h1>
      <router-link
         :to="{name: 'Fotos', params: {id: item}}"
         v-for=" (item, index) of fotosArreglo" :key="index">
         <button>Foto: {{item}}</button>
      </router-link>
      <Fotografia></Fotografia>
      <button @click="home">Home</button>
      <button @click="anterior">Anterior</button>
      <button @click="siguiente">Siguiente</button>
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
   },
   methods: {
      home() {
         this.$router.push("/");
      },
      anterior() {
         this.$router.go(-1);
      },
      siguiente() {
         this.$router.go(1);
      }
   }
}
</script>