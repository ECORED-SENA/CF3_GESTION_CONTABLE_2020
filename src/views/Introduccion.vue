<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción

    .row.justify-content-center.align-items-center.mt-5
      .col-12.col-lg-6.mb-5
        p.mb-3 Bienvenido a este componente, en donde se abordan los temas: documentos contables y no contables, libros contables, archivo y conservación de documentos.

        p.mb-3 Los soportes son muy importantes porque contienen la voluntad de las partes, reflejando el acuerdo comercial de la transacción económica, acorde con la normatividad vigente y lineamientos establecidos. Las temáticas que se desarrollan en esta unidad son las siguientes:

        p 1. Documentos
        p 1.1 Contables, no contables, extracontables y títulos valores.
        p 1.2 Definición, clasificación, características y diligenciamiento.

      .col-12.col-lg-6
        img(src="@/assets/curso/images/tema1/intro.svg" alt="", style="width:400px; display:block; margin:0 auto;")
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
