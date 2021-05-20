<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
        .titulo-principal__numero
          .h3 3
        .h3 Libros contables.
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-4.mb-lg-0
              img(src="@/assets/curso/images/tema3/img_30.svg").img-fluid
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p Los libros de información financiera están conformados por libros auxiliares y principales, su diligenciamiento debe efectuarse de forma cronológica, acorde a la normatividad vigente. Los libros contables están conformados por comprobantes de contabilidad base para la elaboración de estados financieros (Angulo, 2018). En coherencia con el Decreto ley 19 de 2012 (Secretaría del Senado, 2020), se registran en las Cámaras de comercio los libros de actas de socios y accionistas.

    p.mt-3 Según el Código Comercio (Secretaría del Senado, 2020. Art. 48 al 56):

    AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
        .row(titulo="Artículo 48:")
          .col-md-6.mb-4.mb-md-0
          p Todo comerciante conformará su contabilidad, libros, registros contables, inventarios y estados financieros en general, a las disposiciones de este Código y demás normas sobre la materia. Dichas normas podrán autorizar el uso de sistemas que, como la microfilmación, faciliten la guarda de su archivo y correspondencia. Asimismo, será permitida la utilización de otros procedimientos de reconocido valor técnico-contable, con el fin de asentar sus operaciones, siempre que facilite el conocimiento y prueba de la historia clara, completa y fidedigna de los asientos individuales y el estado general de los negocios.
        
        .row(titulo="Artículo 49:")
          .col-md-6.mb-4.mb-md-0
          p Libros de comercio para los efectos legales, cuando se haga referencia a los libros de comercio, se entenderán por tales los que determine la ley como obligatorios y los auxiliares necesarios para el completo entendimiento de aquellos.
        .row(titulo="Artículo 53:")
          .col-md-6.mb-4.mb-md-0
          p De las operaciones mercantiles. En los libros se asentarán en orden cronológico las operaciones mercantiles y todas aquellas que puedan influir en el patrimonio del comerciante, haciendo referencia a los comprobantes de contabilidad que las respalden.

          p.mt-3 El comprobante de contabilidad es el documento que debe elaborarse previamente al registro de cualquier operación y en el cual se indicará el número, fecha, origen, descripción y cuantía de la operación, así como las cuentas afectadas con el asiento. A cada comprobante se anexarán los documentos que lo justifiquen.

        .row(titulo="Artículo 57: En los libros de comercio se prohíbe:")
          .col-md-6.mb-4.mb-md-0
            .row
              ol.lista-ol--cuadro.mt-5
                  li 
                    .lista-ol--cuadro__vineta
                      span 1
                    |   Alterar en los asientos el orden o la fecha de las operaciones a que estos se refieren;
                  li 
                    .lista-ol--cuadro__vineta
                      span 2
                    |   Dejar espacios que faciliten intercalaciones o adiciones en el texto de los asientos o a continuación de estos;

                  li 
                    .lista-ol--cuadro__vineta
                      span 3
                    |   Hacer interlineaciones, raspaduras o correcciones en los asientos. Cualquier error u omisión se salvará con un nuevo asiento en la fecha en que se advirtiere;
                  li 
                    .lista-ol--cuadro__vineta
                      span 4
                    |   Borrar o tachar en todo o en parte los asientos, 

                  li 
                    .lista-ol--cuadro__vineta
                      span 5
                    |   Numeral modificado por el artículo 174 del Decreto 19 de 2012. El nuevo texto es el siguiente: Arrancar hojas, alterar el orden de estas o mutilar 

            p.mt-3 Para observar la totalidad del capítulo de libros de comercio, revisar el link en:
          .row.mt-5
              .col-lg-6
                a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p Enlace web. Archivo general
          p.mt-3 En tema tributario observemos el Estatuto Tributario (Secretaría del Senado, 2020. Art. 654 y 655):
          br
          p Nos menciona las sanciones relacionadas con la contabilidad y de clausura de establecimiento.
       
        
              
    #t_3_1.pb-5.h2 tema 3.1
    .pb-5(v-for="item of 15")

    #t_3_2.pb-5.h2 tema 3.2
    .pb-5(v-for="item of 15")

    #t_3_3.pb-5.h2 tema 3.3
    .pb-5(v-for="item of 15")

    #t_3_4.pb-5.h2 tema 3.4
    .pb-5(v-for="item of 15")

    #t_3_5.pb-5.h2 tema 3.5
    .pb-5(v-for="item of 15")

    #t_3_6.pb-5.h2 tema 3.6
    .pb-5(v-for="item of 15")

  Muestras

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
