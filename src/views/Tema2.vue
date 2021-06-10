<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 2
      .h3 Archivo y conservación de documentos
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-4.mb-lg-0
              img(src="@/assets/curso/images/tema2/img_27.svg").img-fluid
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p Con regularidad, las empresas utilizan gran cantidad de información para ser procesada y utilizada diariamente en la toma de decisiones administrativas y financieras.
              br
              p Con el cierre de año y transcurrido varios periodos de tiempo, esta información permanece como inactiva, pero es imperativa su conservación, teniendo en cuenta que es utilizada como testimonio sobre registros de hechos pasados. En tal sentido, las empresas desarrollan medidas de conservación para asegurar la integridad de los documentos que reposan en el archivo. 
    
    #t_2_1.titulo-segundo.mt-5
      .h4 2.1 Ley general de archivos

  
    .row.justify-content-center.align-items-center.mt-3
      .col
        p.mt-3 En Colombia, la gestión documental se rige bajo varias leyes, normas que orientan a las empresas sobre cómo desarrollar la organización de los archivos. En este sentido, se aprobó la Ley 594 del 2000, conocida como Ley General de Archivos, estableciendo todos los criterios para conservar documentos (Archivo General de la Nación Colombia, 2020).
        br
        p Con el fin de conocer las directrices establecidas en dicha norma, se sugiere profundizar ingresando al siguiente enlace:
        
        .row.mt-2
          .col-lg-6
            a.anexo.mt-4.mb-lg-0(href="https://www.archivogeneral.gov.co/consulte/recursos" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p Enlace web. Archivo general
            .col-lg-12
              a.anexo.mt-4.mb-lg-0(href="https://atsgestion.net/ley-gestion-documental/" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p Enlace web. Archivo general

      .col-auto 
          img.img-a.my-3(src="@/assets/curso/images/tema2/img_28.svg" alt="", style="width:300px; display:inline-block; margin:auto 0;").img-fluid

    #t_2_2.titulo-segundo.mt-5
      .h4 2.2 Consecutivo, cronológico por asuntos
        
  
    .row.justify-content-center.align-items-center.mt-3
      .col-auto 
          img.img-a.my-3(src="@/assets/curso/images/tema2/img_29.svg" alt="", style="width:350px; display:inline-block; margin:auto 5rem;").img-fluid
      .col
          
          p.mt-3 La forma en que se ordena uno o varios documentos es un proceso de disposición física. En un sentido estricto, es ordenar la documentación eligiendo qué documentos van primero y qué documentos van después. De esta forma, se organiza la gestión administrativa y la documental. Genera, en consecuencia, poder identificar una tarea de organización de documentos adecuadamente (Jiménez, 2003)
          br
          p La organización documental de forma cronológica hace referencia a una distribución acorde con fechas, considerando año, mes y día. Esta forma de clasificación es importante en la categorización de expedientes (Jiménez, 2003).
          br
          p Un ejemplo de ordenamiento es la utilizada en expedientes que, por su naturaleza, deben seguir abiertos para consultas. Por ejemplo, historias laborales o expedientes de alumnos. Su forma de clasificación sería: primer apellido, segundo apellido, segundo nombre y primer nombre (Jiménez, 2003).
          br
          p Otra forma de organización es la temática, la cual consiste en establecer series y subseries documentales por temas (Jiménez, 2003). Por ejemplo:
    
          .col-sm.mt-3

                  ul.lista-ul--color
                    li 
                      i.fas.fa-check
                      | Estadísticas.
                    li 
                      i.fas.fa-check
                      | Informes.
                    li
                      i.fas.fa-check
                      | Informes de gestión.
                    li
                      i.fas.fa-check
                      | Órdenes de pago
                  
         
      .row.mt-2
        .col-lg-5
          a.anexo.mb-4(:href="obtenerLink('/downloads/CARTILLA DE ORDENACION DOCUMENTAL.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p Anexo. Archivo general
    
    #t_2_3.titulo-segundo.mt-5
      .h4 2.3 Tabla de retención documental


    p.mt-3 Las tablas de retención documental son listados con tipos de documentos en donde se establece el tiempo que debe permanecer un documento archivado en las diferentes etapas del ciclo vital de un documento, reconocidos desde tres tipos de archivos: 

    .row  

          .col-sm.mt-3

                  ul.lista-ul--color
                    li 
                      i.fas.fa-check
                      | Archivo de gestión
                    li 
                      i.fas.fa-check
                      | Archivo central
                    li
                      i.fas.fa-check
                      | Archivo histórico.

          p.mt-3 Las ventajas de aplicar las Tablas de Retención Documental son:

          .col-sm.mt-3
                  ul.lista-ul--color
                    li 
                      i.fas.fa-check
                      | Facilitar el manejo de la información, ayuda a organizar y dar una estructura de la información.
                    li 
                      i.fas.fa-check
                      | Contribuye a la racionalización de la producción documental.
                    li 
                      i.fas.fa-check      
                      | Garantiza la conservación de los documentos en las diferentes fases del archivo.

                  p.mt-3 Las tablas de retención documental se encuentran inmersas en formatos aplicados a las empresas.

    .cajon.color-acento-contenido.p-4.mb-4.mt-5
       ul.lista-ul
        li 
          i.fas.fa-angle-right
          | Presentan código, representado por la clasificación que presenta la información
        li 
          i.fas.fa-angle-right
          | Presenta una columna de series documentales, donde van las diferentes clasificaciones de documentos
        li 
          i.fas.fa-angle-right
          | Se clasifica comúnmente en archivos de gestión y archivo central, estipulando el tiempo que va a ser custodiado 
        li 
          i.fas.fa-angle-right
          | Actualmente el procedimiento de conservación es la microfilmación, que presenta una columna de procedimientos, indicando los tiempos de custodia de los documentos


    p.mt-5 En las empresas comúnmente se utilizan códigos con ejemplos en números para establecer el orden jerárquico de la empresa:

    .col-sm.mt-3
              ul.lista-ul--color
                li 
                  i.fas.fa-check
                  | Gerencia.
                li 
                  i.fas.fa-check
                  | Recursos humanos.
                li 
                  i.fas.fa-check    
                  | Contabilidad.
                li 
                  i.fas.fa-check     
                  | Almacén.
                li 
                  i.fas.fa-check      
                  | Gestión documental.
    
    .tarjeta.color-acento-contenido.text-white.p-3.mb-5.mt-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/images/tema2/ico_4.svg" alt="", style="width:350px; display:inline-block; margin:auto 1rem;")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Tabla de retención documental
              p Para identificar qué dependencia genera la documentación para conservar la información, considere la siguiente tabla:
            .col-sm-auto
              a.boton.boton--c(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    .h6.mb-5 Sistema de gestión electrónica de documentos

    p.mt3 Cada vez que progresan las tecnologías, se aplican al control documental de la información. Para ser implementado en una organización, debe existir la voluntad de la administración para destinar recursos para la implementación de las nuevas tecnologías al servicio de la gestión documental. En ese sentido, existen en el mercado programas que hacen más efectivos los procesos, mejorando el proceso en beneficio de las organizaciones.




</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
