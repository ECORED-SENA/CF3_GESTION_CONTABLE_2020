<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 Documentos
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-4.mb-lg-0
              img(src="@/assets/curso/images/tema1/img_1.svg").img-fluid
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p Hablar de los documentos en el mundo comercial es permitir la construcción de una contabilidad que brinda información de hechos económicos organizados de forma cronológica. Así mismo, posibilita organizar todos los procesos financieros en una empresa con ánimo o sin ánimo de lucro.

    #t_1_1.titulo-segundo
      .h4.mt-4 1.1 Contables y no contables, extracontables y títulos valores

    p.mt-2 Las transacciones comerciales deben reconocerse monetariamente para generar una serie de documentos contables, no contables y títulos de valores (Angulo, 2018). Por tanto, se profundizará en cada uno de ellos con el fin de lograr un aprendizaje significativo y continuar con el proceso contable de una empresa. Los documentos que se manejan en una entidad son los siguientes:
    br
    p <b>Documentos contables</b>
    p Son los documentos que soportan una transacción comercial, entre ellos se encuentran (Angulo, 2018):

     
    .row.mt-5
      .col-md.mb-5.mb-sm-0
        ol.lista-ol
          li 
            span.text-bold 1. 
            | Factura cambiaria de compra y venta.
          li 
            span.text-bold 2. 
            |  Factura electrónica.
          li 
            span.text-bold 3. 
            |  Factura equivalente o documento equivalente a la factura de venta.
          li 
            span.text-bold 4. 
            | Comprobante de egreso o comprobante de pago.
          li 
            span.text-bold 5. 
            | Comprobante de ingreso o comprobante de caja.
          li 
            span.text-bold 6. 
            |  Comprobante de venta con tarjetas de crédito.
          li 
            span.text-bold 7. 
            |  Nómina.
          li 
            span.text-bold 8. 
            | Planilla Integrada de liquidación de aportes.
          li 
            span.text-bold 9. 
            | Declaración de renta, Impuesto al Valor Agregado (IVA), Retención en la Fuente, Impuesto de Industria y Comercio ICA.

      .col-sm.mb-5.mb-sm-0
        ol.lista-ol
          li 
            span.text-bold 10. 
            | Recibo de transferencia de fondos electrónicos.
          li 
            span.text-bold 11. 
            | Recibo de pago interbancario.
          li 
            span.text-bold 12. 
            | Comprobante de pago con tarjeta crédito.
          li 
            span.text-bold 13. 
            | Extractos bancarios.
          li 
            span.text-bold 14. 
            | Consignaciones bancarias.
          li 
            span.text-bold 15. 
            | Recibos de caja menor.
          li 
            span.text-bold 16. 
            | Notas débito y notas crédito.
          li 
            span.text-bold 17. 
            | Notas de contabilidad.
          li 
            span.text-bold 18. 
            | Comprobante de contabilidad. 

    .jumbotron-6.mt-5
      .row.justify-content-center.align-items-center.mt-3
        .col-auto 
            img.img-a.my-3(src="@/assets/curso/images/tema1/img_2.svg" alt="", style="width:250px; display:inline-block; margin:auto 5rem;").img-fluid
        .col

          p.p <b>Documentos no contables</b>
          p.p Tienen una utilidad previa a la transacción comercial. Permiten al comprador 
          p.p tener una idea sobre un acto mercantil, son meramente informativos y no 
          p.p suscita un registro en la contabilidad (Angulo, 2018). Son ejemplos de 
          p.p documentos no contables los siguientes:
          br
          p.p  1. Cotización.
          p.p  2. Pedido.
          p.p  3. Remisión.

    p.mt-2 

    p <b>Títulos valores</b>
      br
      |Son documentos comerciales regidos por el Código de Comercio y el Código Civil Colombiano. En ellos se incorpora la figura del patrimonio de una persona natural o jurídica. En la realidad económica, esta herramienta dinamiza la economía en el comercio formal e informal. Ejemplos de títulos valores son:
      br
      br
      .col

      p 1. Letra de cambio.
      p 2. El cheque.
      p 3. El pagaré.
      br
      br
      p En la clasificación de títulos valores se encuentran:

    .row.justify-content-center
      .col-8
        hr.mt-5.mb-4
      
        .row.justify-content-center.align-items-center
          .col-auto
            figure
              img.me-5(src='@/assets/curso/images/tema1/ico_1.svg' alt="", style="width:70px; display:block; margin:auto 0;").img-float     
          .col
            h6.mb-2 Títulos valores a la orden:
            br
            p.mb-2 Mediante la figura del endoso, se transfiere la responsabilidad de pago de una persona a otra sin interesar quién es el que porte el documento, se agrega la expresión “a la orden”. Con la firma del endosante se transfiere responsabilidades al endosatario. Dos ejemplos son: la letra de cambio y el pagaré.
        hr.mt-5.mb-4
        .row.justify-content-center.align-items-center
          .col-auto
            figure
              img.me-5(src='@/assets/curso/images/tema1/ico_2.svg' alt="", style="width:70px; display:block; margin:auto 0;").img-float      
          .col
            h6.mb-2 Títulos al portador:
            br
            p Donde el reconocimiento se hace a quien ostente el título, un ejemplo son los cheques al portador, poco usados por tema de seguridad, pero vigentes aún.
        hr.mt-5.mb-4
        .row.justify-content-center.align-items-center
          .col-auto
            figure
              img.me-5(src='@/assets/curso/images/tema1/ico_3.svg' alt="", style="width:70px; display:block; margin:auto 0;").img-float     
          .col
            h6.mb-2 Títulos valores nominativos:
            br
            p Estos títulos son expedidos a favor de una determinada persona. En el Código de Comercio se determina que la persona que gira, o transfiere el título debe realizar la inscripción del tenedor en el registro que lleva el creador del título (Secretaría del Senado, 2020. Art. 648).
        hr.mt-5.mb-4
    p.mt-5 Para mayor profundización en el tema se sugiere revisar los siguientes enlaces:

    .row.mt-5
      .col-lg-6
        a.anexo.mb-4(:href="obtenerLink('/downloads/capitulo_ii_titulos_valores.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Sistema general de títulos valores en la República de Colombia

        a.anexo.mb-4.mb-lg-0(href="http://www.secretariasenado.gov.co/senado/basedoc/codigo_comercio_pr020.html" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p Enlace web. Secretaría del Senado. Código de Comercio. Cap. II.

    #t_1_2.titulo-segundo
      .h4.mt-5 1.2 Definición, clasificación, características y diligenciamiento

    p.mt-3 <b>Factura cambiaria de compra y venta:</b>
    br
    p Según lo determina el Estatuto Tributario, los requerimientos exigidos para la factura son (Secretaría del Senado, 2020. Art. 617):

    
        .row.justify-content-center.align-items-center.mt-5
          .col-auto 
              img.img-a.my-3(src="@/assets/curso/images/tema1/img_3.svg" alt="", style="width:300px; display:inline-block; margin:auto 5rem;").img-fluid
          .col
            .row
              .col-sm.mb-5.mb-sm-0
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta
                      span a
                    | Estar denominada expresamente como factura de venta.
                  li 
                    .lista-ol--cuadro__vineta
                      span b
                    | Apellidos y nombre o razón y NIT del vendedor o de quien presta el servicio.
                  li 
                    .lista-ol--cuadro__vineta
                      span c
                    | *Modificado* Apellidos y nombre o razón social y NIT del adquirente de los bienes o servicios, junto con la discriminación del IVA pagado.
                  li 
                    .lista-ol--cuadro__vineta
                      span d
                    | Llevar un número que corresponda a un sistema de numeración consecutiva de facturas de venta.
                  li 
                    .lista-ol--cuadro__vineta
                      span e
                    | Fecha de su expedición.
                  li 
                    .lista-ol--cuadro__vineta
                      span f
                    | Descripción específica o genérica de los artículos vendidos o servicios prestados.
                  li 
                    .lista-ol--cuadro__vineta
                      span g
                    | Valor total de la operación.
                  li 
                    .lista-ol--cuadro__vineta
                      span h
                    | El nombre o razón social y el NIT del impresor de la factura.
                  li 
                    .lista-ol--cuadro__vineta
                      span i
                    | Indicar la calidad de retenedor del impuesto sobre las ventas.
                  li 
                    .lista-ol--cuadro__vineta
                      span j
                    | *- Declarado Inexequible Corte Constitucional-

    p.mt-5 Al momento de la expedición de la factura, los requisitos de los literales a), b), d) y h), deberán estar previamente impresos a través de medios litográficos, tipográficos o de técnicas industriales de carácter similar. Cuando el contribuyente utilice un sistema de facturación por computador o máquinas registradoras, con la impresión efectuada por tales medios se entienden cumplidos los requisitos de impresión previa. El sistema de facturación deberá numerar en forma consecutiva las facturas y se deberán proveer los medios necesarios para su verificación y auditoría.
    br
    p.mb-3 <b>PAR.</b> En el caso de las Empresas que venden tiquetes de transporte, no será obligatorio entregar el original de la factura. Al efecto, será suficiente entregar copia de la misma.
    p <b>PAR 2.</b> ** Adicionado- Para el caso de facturación por máquinas registradoras, será admisible la utilización de numeración diaria o periódica, siempre y cuando corresponda a un sistema consecutivo que permita individualizar y distinguir de manera inequívoca cada operación facturada, ya sea mediante prefijos numéricos, alfabéticos o alfanuméricos o mecanismos similares.

    .row.mt-5
      .col-lg-6
        a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <b>Anexo.</b>  Factura cambiaria de compra y venta

    hr.mt-5 

    
    .row.justify-content-center.align-items-center.mt-5
      .col
        h6.mb-2 Factura electrónica
        br
        p Para la figura de facturación electrónica debe considerarse el Estatuto Tributario (Secretaría del Senado, 2020. Art. 617) y el Decreto 2242 (Sistema Único de Información Normativa, 2020):  
        br
        p Según el Decreto 2242 (Sistema Único de Información Normativa, 2020. Art. 2) la factura electrónica: es el documento que soporta transacciones de venta de bienes y/o servicios y que operativamente tienen lugar a través de sistemas computacionales y/o soluciones informáticas que permiten el cumplimiento de las características y condiciones que se establecen en el presente Decreto, en relación con la expedición, recibo, rechazo y conservación. La expedición de la factura electrónica comprende la generación por el obligado a facturar y su entrega al adquirente. 
      .col-auto 
        img.img-a.my-3(src="@/assets/curso/images/tema1/img_4.svg" alt="", style="width:300px; display:inline-block; margin:auto 5rem;").img-fluid

    p.mt-3 <b>Obligado a facturar electrónicamente:</b> persona natural o jurídica comprendida en el ámbito de este Decreto y que como tal debe facturar electrónicamente en las condiciones que se establecen en los artículos siguientes. 
    br
    p <b>Adquirente:</b> persona natural o jurídica que adquiere bienes y/o servicios y debe exigir factura o documento equivalente y, que, tratándose de la factura electrónica, la recibe, rechaza, cuando sea del caso, y conserva para su posterior exhibición, en las condiciones que se establecen en el presente decreto. 
    br
    p <b>Proveedor tecnológico:</b> es la persona natural o jurídica que podrá prestar a los obligados a facturar electrónicamente y/o a los adquirentes que opten por recibir la factura en formato electrónico de generación, cuando unos u otros así lo autoricen, los servicios inherentes a la expedición de la factura electrónica, incluida la entrega del ejemplar a la DIAN como se indica en el artículo 7° del presente Decreto, así como los servicios relacionados con su recibo, rechazo y conservación. El proveedor tecnológico deberá surtir el proceso de autorización por parte de la DIAN previsto en el artículo 12 de este decreto. 
    br
    p <b>Catálogo de Participantes de Factura Electrónica:</b> es el registro electrónico administrado por la DIAN, que provee información de los obligados a facturar electrónicamente dentro del ámbito del presente Decreto, de los adquirentes que decidan recibirla electrónicamente y proveedores tecnológicos, con el fin de facilitar su operatividad. 
    br
    p <b>Código Único de Factura Electrónica:</b> El código único de factura electrónica para las facturas electrónicas, corresponde a un valor alfanumérico, obtenido a partir de la aplicación de un procedimiento que utiliza datos de la factura, que adicionalmente incluye la clave de contenido técnico de control generada y entregada por la DIAN.
    br
    p El Código Único de Factura Electrónica deberá ser incluido como un campo más dentro de la factura electrónica. Este código deberá visualizarse en la representación gráfica de las facturas electrónicas y en los códigos bidimensionales QR definidos para tal fin.
    br
    p.mb-3 La factura equivalente o documentos equivalentes a la factura de venta son (Angulo, 2018):
    .row
      .col-sm.mb-5.mb-sm-0
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Boletas de máquinas registradoras.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Boletas de ingreso a espectáculos públicos.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Boletas de transporte tiquetes.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Recibos de pagos de matrículas y pensiones emitidas por establecimientos de educación reconocidos por el gobierno.

    p Para profundizar en las definiciones, características y diligenciamiento de los diferentes documentos, por favor revise el libro contabilidad financiera correlacionado con Normas Internacionales de Información Financiera NIIF, capítulo número 12, en el siguiente enlace: 
    .col-lg-6
      a.anexo.mt-4.mb-lg-0(href="https://login.bdigital.sena.edu.co/login?url=http://www.ebooks7-24.com/?il=8047" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p Enlace web. Biblioteca Digital del SENA
    hr.mt-5

    h6.mg Documento equivalente

    p.mg Es un documento similar a la factura, no es obligatorio, pero se debe tener como soporte. Algunos ejemplos se encuentran en empresas inscritas al régimen simple que no tienen obligación de facturar:

    
        .row.justify-content-center.align-items-center.mt-5
          .col-auto 
              img.img-a.my-3(src="@/assets/curso/images/tema1/img_5.svg" alt="", style="width:300px; display:inline-block; margin:auto 5rem;").img-fluid
          .col
            .row
              .col-sm.mb-5.mb-sm-0
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta
                      span a
                    | Comerciantes minoristas, siempre y cuando no excedan los topes de venta. Algunos ejemplos son: los comerciantes de productos del agro sin transformación y cuya cuantía no supere los niveles permitidos.
                  li 
                    .lista-ol--cuadro__vineta
                      span b
                    | Personas naturales con vínculos laborales.
                  li 
                    .lista-ol--cuadro__vineta
                      span c
                    | Las empresas de servicio público de transporte urbano de pasajeros.
                  li 
                    .lista-ol--cuadro__vineta
                      span d
                    | Tiquetes de transporte de pasajero de forma aérea         
            .row
              
                p.h6.mt-5 Requisitos del documento equivalente:

                p.mt-3 Son todos aquellos inmersos en la resolución de la Dirección de Impuestos y Aduanas Nacionales DIAN 000042 del 2020 en el artículo 13.

                .col-sm.mt-3  
                  ul.lista-ul--color
                    li 
                      i.fas.fa-check
                      | Estar denominado expresamente como sistema P.O.S.
                    li 
                      i.fas.fa-check
                      | Debe presentar Número de Identificación Tributaria (NIT).
                    li 
                      i.fas.fa-check
                      | Debe llevar un número consecutivo.
                    li 
                      i.fas.fa-check
                      | Especificaciones de la transacción como: cantidad, unidad de medida,identificación de bienes y servicios, indicar la calidad de agente retenedor del impuesto sobre las ventas y demás.
                
    .cajon.color-acento-contenido.p-4.mt-5
        .h5 Recordemos que una factura al contado se registra:
        p Con un debito en la caja y un crédito en la cuenta comercio al por mayor y por menor (ingresos ordinarios), cuando es gravada la mercancía se debe reconocer la cuenta impuestos por pagar, acreditando.      

    p.mt-5 Cuando se reconocen las compras, se registra con un debito en las compras al contado, se reconoce la cuenta de impuestos al valor agregado IVA, debitando y aplicando la tarifa vigente y disminuyen las cuentas de efectivo (caja o banco).
    br
    p Otro ejemplo de documento equivalente son los expedidos por máquinas registradoras, las boletas de espectáculos públicos y todos los requisitos contemplados en el Articulo 771-2 del Estatuto Tributario (Secretaría del Senado, 2020).     

    .row.mt-5
        .col-lg-6
          a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p Anexo.  Formato documento equivalente
              
        p De igual forma, puede observar el ejemplo que se encuentra registrado en la siguiente página web:  
      
        .col-lg-6

          a.anexo.mt-4.mb-lg-0(href="https://www.icbf.gov.co/el-instituto/sistema-integrado-de-gestion/formato-documento-equivalente-factura-v3" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p Enlace web. Formato Documento Equivalente a Factura
    hr.mt-5 

    h6.mt-5 Comprobante de egreso o comprobante de pago

    p Comúnmente se conoce como orden pago, soporte que respalda los desembolsos de efectivo, por norma de control interno realizados mediante cheques. Los comprobantes de egreso se elaboran por duplicados, para anexar a la cuenta que respalda la entrega del título valor, que es el cheque con que se efectúa el pago.

        .row.justify-content-center.align-items-center.mt-5
          .col-sm  
            .h6 Características:
            p.mb-3 Deben registrarse de forma ordenada y debe expresar de forma clara la transacción registrada, donde relacione: 
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Número del comprobante, ciudad origen.
              li 
                i.fas.fa-check
                | Fecha.
              li 
                i.fas.fa-check
                | El valor en números y letras.
              li 
                i.fas.fa-check
                | El registro contable, el número de cheque.
              li 
                i.fas.fa-check
                | Datos del beneficiario como: identificación, firma y fecha en que se recibe.
              li 
                i.fas.fa-check
                | Las firmas de elaboración, aprobado por, contabilizado por.

          .col-auto 
              img.img-a.my-3(src="@/assets/curso/images/tema1/img_6.svg" alt="", style="width:300px; display:inline; margin:auto 8rem;").img-fluid
          .row.mt-2
            .col-lg-6
              a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p Anexo.  Comprobante de egreso o comprobante de pago
        hr.mt-5
        
        h6.mt-5 Comprobante de ingreso o comprobante de caja

        p.mt-3 Este soporte de contabilidad representa los dineros recibidos en la empresa para posteriormente ser consignados en los bancos. Se realizan con dos copias, una que es entregada al cliente, respaldando el efectivo recibido y una copia para respaldar el valor del comprobante y generar el respectivo devengo contable, representa abonos a las ventas a plazos.

    
        .row.justify-content-center.align-items-center.mt-5
          .col-auto 
              img.img-a.my-3(src="@/assets/curso/images/tema1/img_7.svg" alt="", style="width:350px; display:inline-block; margin:auto 5rem;").img-fluid

          .col-sm  
            .h6 Características:
            
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Nombre de la empresa, número de identificación tributaria NIT.
              li 
                i.fas.fa-check
                | Número consecutivo.
              li 
                i.fas.fa-check
                | Dirección y datos generales de la empresa.
              li 
                i.fas.fa-check
                | Ciudad y fecha donde se realiza la transacción.
              li 
                i.fas.fa-check
                | El concepto por el cual se recibe el efectivo.
              li 
                i.fas.fa-check
                | El valor en números y letras recibidos.
              li 
                i.fas.fa-check
                | El número de cheque y el banco de origen del título valor.
              li 
                i.fas.fa-check
                | Debe ser entregado al cliente con firma y sello de la empresa
              li 
                i.fas.fa-check
                | El registro contable con la afectación a las cuentas respectivas.
              li 
                i.fas.fa-check
                | Firmas de quien elaboró, aprobó y contabilizó.

              .row.mt-5
                .col-lg-12
                  a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-pdf.svg")
                    .anexo__texto
                      p Anexo.  Comprobante de Ingreso o comprobante de caja
        hr.mt-5
        h6.mt-5 Comprobante de venta con tarjeta de crédito
                p.mt-3 Es un medio de pago convencional, donde se utiliza la figura de tarjeta habiente, utilizando un datafono para recibir pagos. Es una forma segura para no manejar efectivo, el banco o entidad financiera cobra a la empresa una comisión por el uso de este medio electrónico.  Cuando se realiza la transacción se debe guardar copia de la transacción y anexar a la venta, como soporte.  
    
        .row.justify-content-center.align-items-center.mt-5
          .col
            
            h6 Características:
            p.mt-3 Debe definir la ciudad y el nombre del establecimiento comercial, fecha y plazos de pagos, es decir el número de cuotas para ser pagadas por él cuenta habiente, si es tarjeta de crédito. Si es cuenta de ahorro, la transacción descuenta de forma automática y por medio de correo electrónico se notifica al cliente, comúnmente el reporte es enviado al dispositivo móvil del cliente por parte de la entidad financiera.
          .col-auto 
            img.img-a(src="@/assets/curso/images/tema1/img_8.svg" alt="", style="width:350px; display:inline-block; margin:auto 5rem;").img-fluid

        .row
          .col-lg-6
            a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Anexo.  Comprobante de Ingreso o comprobante de caja
        hr.mt-5
        h6.mt-5 Nómina
            P.mt-3 Es un soporte contable en el cual la empresa respalda el pago de empleados por concepto de sueldos a los colaboradores de la empresa de forma mensual, quincenal, cada diez días o, como se haya pactado el pago de sueldos.
    
        .row.justify-content-center.align-items-center.mt-5
          .col-auto 
              img.img-a.my-3(src="@/assets/curso/images/tema1/img_9.svg" alt="", style="width:350px; display:inline-block; margin:auto 5rem;").img-fluid
          .col
              
              h6 Características:
              .col-sm  
            
                ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    | Presenta columnas que representan nombres, apellidos y documento de identidad.
                  li 
                    i.fas.fa-check
                    | En las columnas se encuentra el devengado y los descuentos que por ley tienen los empleados.
                  li
                    i.fas.fa-check
                    | Columna de horas extra y comisiones.
                  li 
                    i.fas.fa-check
                    | Presenta nombre de la empresa, NIT de la empresa, dirección y periodo de pago.
                 
              .row.mt-5
                  .col-lg-12
                    a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-pdf.svg")
                      .anexo__texto
                        p Anexo.  Comprobante de Nómina
        hr.mt-5
        h6.mt-5 Planilla integrada de liquidación de aportes
    
        .row.justify-content-center.align-items-center.mt-5
          .col
            
            p.mt-3 Es un soporte en el cual las empresas registran las diferentes novedades de los empleados, frente a salud, pensiones, riesgos laborales, cajas de compensación, se realiza por intermedio de un tercero y se trasfiere a las diferentes empresas de seguridad social, es un documento que brinda la información a empleados y entidades que vigilan el pago de seguridad social.

            h6.mt-5 Características:
            p.mt-3 Registra las diferentes novedades por conceptos de variaciones transitorias en los salarios de los empleados como: comisiones, sueldos, incapacidades, las cuales modifican la base para calcular las deducciones en la nómina de las empresas.
          .col-auto
            img.img-a.my-3(src="@/assets/curso/images/tema1/img_10.svg" alt="", style="width:350px; display:inline-block; margin:auto 5rem;").img-fluid
          .row.mt-2
              .col-lg-6
                a.anexo.mt-4.mb-lg-0(href="https://www.minsalud.gov.co/sites/rid/paginas/freesearchresults.aspx?k=&k=ugpp" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p Enlace web. Planilla integrada de liquidación de aportes:
          hr.mt-5

        h6.mt-5 Declaración de impuestos
            P.mt-3 Cada vez que se efectúan compras y ventas de productos o bienes gravados, es obligación de las empresas descontar valores cuantificables, acorde con la base gravable y tarifas aplicadas, descontadas y trasferidas a la administración de impuestos y aduanas nacionales DIAN, en las fechas establecidas en el calendario tributario actualizado de cada año fiscal.
    
        .row.justify-content-center.align-items-center.mt-5
          .col-auto 
              img.img-a.my-3(src="@/assets/curso/images/tema1/img_11.svg" alt="", style="width:350px; display:inline-block; margin:auto 5rem;").img-fluid
          .col
              
              h6 Características:
              p.mt-3 Es un medio de confrontación de los pagos efectuados al gobierno nacional, distrital o municipal por concepto de tributos. Son ejemplos de soportes los pagos por concepto de las declaraciones de:
               .col-sm  
            
                ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    | Impuesto al Valor Agregado (IVA).
                  li 
                    i.fas.fa-check
                    | Retención en la Fuente.
                  li
                    i.fas.fa-check
                    | Impuesto de Renta y Complementario.
                  li 
                    i.fas.fa-check
                    | Impuesto de Industria y Comercio.

              p.mt-3 Para revisar los diferentes formularios, por favor ingrese a los siguientes enlaces:
        
        .row.mt-2
            .col-lg-6
              a.anexo.mt-4.mb-lg-0(href="https://www.dian.gov.co/atencionciudadano/formulariosinstructivos/Paginas/default.aspx" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p Enlace web. Dirección de Impuestos y Aduanas Nacionales (DIAN).
            .col-lg-6
              a.anexo.mt-4.mb-lg-0(href="https://shd.gov.co/shd/industria-y-comercio" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p Enlace web. Secretaría de Hacienda de Bogotá.
    hr.mt-5
    h6.mt-5 Recibo de transferencia de fondos y pago interbancario

    p.mt-3 Es una forma de agilizar negocios entre las entidades financieras y/o clientes. Actualmente se utilizan con mayor frecuencia, teniendo en cuenta que se realiza desde un dispositivo móvil con acceso a internet, que genera garantía y seguridad en el momento de realizar la transacción.


        .row.justify-content-center.align-items-center.mt-5
          .col
            h6.mb-2 Características:
              
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Presenta una cuenta de origen del banco que gira o recibe transferencias.
              li 
                i.fas.fa-check
                | Una cuenta de destino, al banco que transfiriere recursos. 
              li
                i.fas.fa-check
                | Valor a transferir.
              li 
                i.fas.fa-check
                | Fecha, que se genera automáticamente.
              li 
                i.fas.fa-check
                | Por el monto de la transacción se genera un documento soporte para registrar en contabilidad, este documento se genera de forma automática.

          p.mt-3.mb-3 Para diligenciar se tiene en cuenta:


          .col-sm  
            
                ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    | Nombre o razón social.
                  li 
                    i.fas.fa-check
                    | Dirección. 
                  li
                    i.fas.fa-check
                    | Ciudad y teléfono.
                  li 
                    i.fas.fa-check
                    | Datos de la cuenta bancaria, banco, cuenta, número de cuenta, tipo de cuenta.
                  li 
                    i.fas.fa-check
                    | Titular de la cuenta.
                  li 
                    i.fas.fa-check
                    | Autorizaciones y firmas.
                
          .col-auto 
              img.px-3(src="@/assets/curso/images/tema1/img_12.svg" alt="", style="width:300px; display:block; margin: 0 auto ;")
        .row.mt-5
          .col-lg-6
            a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Anexo.  Recibo de transferencia de fondos y pago interbancario
          
        hr.mt-5

        h6.mt-5 Extractos bancarios
                P.mt-3 Documento donde se registran, por parte de la entidad financiera, todos los movimientos efectuados durante el mes. Se registran pagos de cheques, transferencias, notas bancarias, gravámenes financieros. Es el documento base para realizar la conciliación bancaria y el control del efectivo.
    
        .row.justify-content-center.align-items-center.mt-3
          .col-auto 
              img.px-4(src="@/assets/curso/images/tema1/img_13.svg" alt="", style="width:350px; display:block; margin:0 auto ;").
          .col
              
              h6 Características:
               
              p.mb-3 Posibilita la elaboración de la conciliación bancaria, bajo los métodos comúnmente utilizados. Los componentes de los extractos bancarios son:
            
                ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    | Saldos iniciales.
                  li 
                    i.fas.fa-check
                    | Intereses. 
                  li
                    i.fas.fa-check
                    | Avances.
                  li 
                    i.fas.fa-check
                    | Saldo final.
                  li 
                    i.fas.fa-check
                    | Cargos y abonos.
  
              .row.mt-5
                  .col-lg-12
                    a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-pdf.svg")
                      .anexo__texto
                        p Anexo.  Extractos bancarios           
    hr.mt-5
    h6.mt-5 Consignaciones bancarias

    p.mt3 Cada vez que se consigna efectivo en las entidades financieras de la empresa, el banco expide un soporte denominado comprobante de consignación, el cual sirve para registrar el hecho económico en la contabilidad. La contabilización se realiza debitando la cuenta de ahorro o cuenta corriente y acreditando la cuenta Efectivo (caja), para disminuir el valor del saldo de esta.

    
        .row.justify-content-center.align-items-center.mt-5
          .col
            h6.mb-2 Características:
            p.mt-3 El soporte debe contener el registro emitido por la máquina registradora del banco, el sello y la firma de la persona autorizada en el banco. El documento contiene los siguientes elementos:
            .col-sm.mt-3
            
                ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    | Ciudad y fecha.
                  li 
                    i.fas.fa-check
                    | Número de la cuenta bancaria. 
                  li
                    i.fas.fa-check
                    | Valor a consignar en números o letras.
                  li 
                    i.fas.fa-check
                    | Nombre de quien consigna y un número telefónico.
                  

          .col-auto 
              img.img-a.my-3(src="@/assets/curso/images/tema1/img_14.svg" alt="", style="width:300px; display:inline-block; margin:auto 3rem;").img-fluid
          .row.mt-2
            .col-lg-6
              a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p Anexo.  Consignaciones bancarias
    hr.mt-5
    h6.mt-5 Recibos de caja menor
            P.mt-3 Las empresas necesitan realizar pagos mínimos, acorde con los montos establecidos y registrados en las políticas contables y en la resolución interna, llamada gastos de caja menor. Allí se establecen los numerales de pago, los montos y la persona responsable del manejo de dicho fondo
    
    .row.justify-content-center.align-items-center.mt-5
      .col-auto 
          img.img-a.my-3(src="@/assets/curso/images/tema1/img_15.svg" alt="", style="width:350px; display:inline-block; margin:auto 5rem;").img-fluid
      .col
          
          h6 Características:
          p.mt-3 Es un fondo utilizado para cubrir gastos mínimos, requeridos en el desarrollo del objeto social de la empresa. Al diligenciar se debe observar:
          .col-sm.mt-3.mb-3
            
                ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    | Registrar ciudad y fecha..
                  li 
                    i.fas.fa-check
                    | Pagado al beneficiario. 
                  li
                    i.fas.fa-check
                    | Valor y concepto.
                  li 
                    i.fas.fa-check
                    | Soporte de pago anexo.
                  li 
                    i.fas.fa-check
                    | Consecutivo.
          p Se deben registrar contablemente, debitando los gastos autorizados y acreditando la cuenta caja.
          .row.mt-5
              .col-lg-12
                a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                      p Anexo.  Recibos de caja menor
    hr.mt-5
    h6.mt-5 Notas débito y crédito
    p.mt-3 <b>Nota debito:</b>
    p.mt-3 Es un documento contable que reconoce valores de la empresa a favor de sus clientes, debido a errores u omisiones. Por ejemplo: intereses cobrados de forma adicional sobre facturas de compra y venta o notas débito que disminuyen el saldo de la cuenta bancaria de la empresa.

    
        .row.justify-content-center.align-items-center.mt-3
          .col
            h6.mb-2 Características:
            p.mt-3 Es un fondo utilizado para cubrir gastos mínimos, requeridos en el desarrollo del objeto social de la empresa. Al diligenciar se debe observar:
            .col-sm.mt-3
            
                ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    | Debe contener nombre e identificación.
                  li 
                    i.fas.fa-check
                    | Consecutivo.
                  li
                    i.fas.fa-check
                    | Concepto.
                  li 
                    i.fas.fa-check
                    | Valor.
                  li 
                    i.fas.fa-check
                    | Firmas de personal responsable.


          .col-auto 
              img.img-a.my-3(src="@/assets/curso/images/tema1/img_16.svg" alt="", style="width:300px; display:inline-block; margin:auto 3rem;").img-fluid
          .row.mt-2
            .col-lg-6
              a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p Anexo.  Nota debito:
    hr.mt-5
    
    .row.justify-content-center.align-items-center.mt-5
      .col-auto 
          img.img-a.my-3(src="@/assets/curso/images/tema1/img_17.svg" alt="", style="width:350px; display:inline-block; margin:auto 5rem;").img-fluid
      .col
          
          .h6 Nota crédito:
          p.mt-3 Soporte contable para reconocer disminuciones por concepto de descuentos no incluidos en las facturas, es utilizado cuando se presentan las devoluciones de mercancías, se elabora con original y copia, para ser conservado en contabilidad y la copia entregada al cliente.
          h6.mt-3 Características:
          .col-sm.mt-3

                ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    | Documento utilizado para reconocer cambios en las facturas,evidencia dineros 
                  li 
                    i.fas.fa-check
                    | Devueltos al cliente por inconformidades.
                  li
                    i.fas.fa-check
                    | Utilizado como soporte cuando se anulan facturas.
                  li 
                    i.fas.fa-check
                    | Valor.
                  li 
                    i.fas.fa-check
                    | Corrige datos, valores iniciales de las facturas.

         
          .h6.mt-3 Contenido:
          .col-sm.mt-3

                ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    | Ciudad y fecha.
                  li 
                    i.fas.fa-check
                    | Consecutivo.
                  li
                    i.fas.fa-check
                    | Descripción o detalle.
                  li 
                    i.fas.fa-check
                    | Firmas autorizadas.
                  
                
          .row.mt-5
              .col-lg-12
                a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p Anexo.  Nota crédito:
    hr.mt-5
    h6.mt-5 Notas de contabilidad
    p.mt-3 También denominada notas internas, utilizadas para enmendar errores o realizar ajustes contables. Se utiliza en aquellas operaciones que carecen de un soporte específico.

    
        .row.justify-content-center.align-items-center.mt-5
          .col
            h6.mb-2 Características:
            .col-sm.mt-3

                ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    | Reconoce la disminución de un activo en la depreciación.
                  li 
                    i.fas.fa-check
                    | Registra las amortizaciones en los créditos bancarios como control.
                  li
                    i.fas.fa-check
                    | Se utiliza para hacer ajustes en el cierre contable.
                  li 
                    i.fas.fa-check
                    | Utilizado solo por el área de contabilidad.

            h6.mt-3.mb-2 Contenido:

            .col-sm.mt-3

                ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    | Presenta el detalle.
                  li 
                    i.fas.fa-check
                    | La fecha de elaboración.
                  li
                    i.fas.fa-check
                    | La imputación contable.
                  li 
                    i.fas.fa-check
                    | Las firmas responsables.

          .col-auto 
              img.img-a.my-3(src="@/assets/curso/images/tema1/img_18.svg" alt="", style="width:300px; display:inline-block; margin:auto 3rem;").img-fluid
          .row.mt-2
            .col-lg-6
              a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p Anexo. Notas de contabilidad:
    hr.mt-5
    h6.mt-5 Comprobantes de contabilidad
    p.mt-3 Representa la base en la elaboración de estados financieros, como resultado debe presentar sumas iguales en los débitos y créditos de una transacción comercial.
    
      .row.justify-content-center.align-items-center.mt-5
        .col-auto 
            img.img-a.my-3(src="@/assets/curso/images/tema1/img_19.svg" alt="", style="width:350px; display:inline-block; margin:auto 5rem;").img-fluid
        .col
            
            h6 Características:
            p Presentan un consecutivo para vincular con las operaciones comerciales de forma cronológica.
            .col-sm.mt-3

                ul.lista-ul--color
                  li   
                    i.fas.fa-check
                    | Fecha.
                  li 
                    i.fas.fa-check
                    | Detalle.
                  li 
                    i.fas.fa-check
                    | Cuantía.
                  li 
                    i.fas.fa-check
                    | Registro contable.

            p.mt-3 Son ejemplos de comprobantes de contabilidad:

            .col-sm.mt-3

                ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    | Comprobantes de apertura o de inicio: donde se registra aporte inicial de socios o accionistas.
                  li 
                    i.fas.fa-check
                    | Comprobantes de ingreso: representa el manejo de efectivo que ingresa a la empresa por conceptos del desarrollo del objeto social de la organización.
                  li
                    i.fas.fa-check
                    | Comprobantes de egreso: representa las salidas de dinero, incluye pagos realizados a proveedores.
                  li
                    i.fas.fa-check
                    | Comprobantes de nómina: en el pago de salarios a empleados.
                  li 
                    i.fas.fa-check
                    | Comprobantes débito y crédito: representan mayores valores a favor de clientes o modificaciones a facturas.
            
      .row
            p.mt-3 En el diligenciamiento se debe:

            .col-sm.mt-3

                ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    | Registrar: fecha, año, mes y día.
                  li 
                    i.fas.fa-check
                    | Datos de la persona o empresa a realizar el comprobante, datos del contacto, dirección y correo electrónico.
                  li
                    i.fas.fa-check
                    | Descripción de la transacción.
                  li
                    i.fas.fa-check
                    | Valor de la transacción económica.
                  
            .row.mt-5
              .col-lg-6
                a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p Anexo. Comprobantes de contabilidad:
    hr.mt-5
    h6.mt-5 Títulos valores
    p.mt-3 El Código de Comercio define los títulos valores como:
    
      .row.justify-content-center.align-items-center.mt-5
          .col
            .bloque-texto-d.color-primario.p-4
              .bloque-texto-d__texto.mb-1
                i.fas.fa-quote-left
                span.h5 Documentos necesarios para legitimar el ejercicio del derecho literal y autónomo que en ellos se incorpora. Pueden ser de contenido crediticio, corporativos o de participación y de tradición o representativos de mercancías.
                i.fas.fa-quote-right
              .bloque-texto-d__autor 
                .h6.mb-0  (Secretaría del Senado, 2020. Art. 619)

            p.mt-5 El Código del Comercio establece (Secretaría del Senado, 2020. Art. 621):
            br
            p Además de lo dispuesto para cada título-valor en particular, los títulos-valores deberán llenar los requisitos siguientes:

                ol.lista-ol--cuadro.mt-5
                  li 
                    .lista-ol--cuadro__vineta
                      span 1
                    |   La mención del derecho que en el título se incorpora
                  li 
                    .lista-ol--cuadro__vineta
                      span 2
                    |   La firma de quien lo crea.
          .col-auto 
            img.img-a.my-3(src="@/assets/curso/images/tema1/img_20.svg" alt="", style="width:350px; display:inline-block; margin:auto 5rem;").img-fluid

      p.mt-3 La firma podrá sustituirse, bajo la responsabilidad del creador del título, por un signo o contraseña que puede ser mecánicamente impuesto. Si no se menciona el lugar de cumplimiento o ejercicio del derecho, lo será el del domicilio del creador del título; y si tuviere varios, entre ellos podrá elegir el tenedor, quien tendrá igualmente derecho de elección si el título señala varios lugares de cumplimiento o de ejercicio. Sin embargo, cuando el título sea representativo de mercaderías, también podrá ejercerse la acción derivada del mismo en el lugar en que estas deban ser entregadas. Si no se menciona la fecha y el lugar de creación del título, se tendrán como tales la fecha y el lugar de su entrega.

      h6.mt-3 Características:

      p.mt-3 Según el Código del Comercio (Secretaría del Senado, 2020. Art. 622):
      br
      p Si en el título se dejan espacios en blanco, cualquier tenedor legítimo podrá llenarlos, conforme a las instrucciones del suscriptor que los haya dejado, antes de presentar el título para el ejercicio del derecho que en él se incorpora.
      br
      p Una firma puesta sobre un papel en blanco, entregado por el firmante para convertirlo en un título-valor, dará al tenedor el derecho de llenarlo. Para que el título, una vez completado, pueda hacerse valer contra cualquiera de los que en él han intervenido antes de completarse, deberá ser llenado estrictamente de acuerdo con la autorización dada para ello.
      br
      p Si un título de esta clase es negociado, después de llenado, a favor de un tenedor de buena fe exenta de culpa, será válido y efectivo para dicho tenedor y este podrá hacerlo valer como si se hubiera llenado de acuerdo con las autorizaciones dadas.

      p.mt-3 <b>Clases</b>

      p.mt-3 Según el Código Comercio, se encuentran títulos: nominativos, a la orden y al portador.

      .row.mt-5
        .col-md-6.col-lg.mb-5
          .tarjeta-Avatar
            img(src="@/assets/curso/images/tema1/img_21.svg" alt="", style="width:280px; display:block; margin:0 auto;")
            .tarjeta.color-sistema-h.p-4
              h4 Nominativos
              p (Secretaría del Senado, 2020. Art. 648):El título-valor será nominativo cuando en él o en la norma que rige su creación se exija la inscripción del tenedor en el registro que llevará el creador del título. Solo será reconocido como tenedor legítimo quien figure, a la vez, en el texto del documento y en el registro de este.

        .col-md-6.col-lg.mb-5
          .tarjeta-Avatar
            img(src="@/assets/curso/images/tema1/img_22.svg" alt="", style="width:280px; display:block; margin: 0 auto;")
            .tarjeta.color-sistema-h.p-4
              h4 A la orden
              p (Secretaría del Senado, 2020. Art.651):Los títulos-valores expedidos a favor de determinada persona, en los cuales se agregue la cláusula "a la orden" o se exprese que son transferibles por endoso, o se diga que son negociables, o se indique su denominación específica de título-valor, serán a la orden y se transmitirán por endoso y entrega del título, sin perjuicio de lo dispuesto en el artículo 648.

        .col-md-6.col-lg.mb-5
          .tarjeta-Avatar
            img(src="@/assets/curso/images/tema1/img_23.svg" alt="", style="width:280px; display:block; margin: 0 auto;")
            .tarjeta.color-sistema-h.p-4
              h4 Al portador
              p (Secretaría del Senado, 2020. Art. 668): Son títulos al portador los que no se expidan a favor de persona determinada, aunque no incluyan la cláusula "al portador", y los que contengan dicha cláusula. La simple exhibición del título legitimará al portador y su tradición se producirá por la sola entrega.
      hr.mt-5
      p.mt-5 Clases de títulos valores más utilizados:
      

      AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
        .row.px-5(titulo="Letra de cambio")
          .col-md-6.mb-3.md-0
          p.mb-5 Es un documento de carácter crediticio, con la representación de las figuras como son: girador y librador que pactan un valor, para ser entregado en una fecha determinada.
          h6.mb-3 Requisitos
          p.mb-4 Según el Código de Comercio (Secretaría del Senado, 2020. Art. 621): Además de lo dispuesto para cada título-valor en particular, los títulos-valores deberán llenar los requisitos siguientes:

            ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta
                      span 1
                    |   La mención del derecho que en el título se incorpora
                  li 
                    .lista-ol--cuadro__vineta
                      span 2
                    |    La firma de quién lo crea.
          p.mt-3 La firma podrá sustituirse, bajo la responsabilidad del creador del título, por un signo o contraseña que puede ser mecánicamente impuesto.
          
          p.mt-3 Si no se menciona el lugar de cumplimiento o ejercicio del derecho, lo será el del domicilio del creador del título; y si tuviere varios, entre ellos podrá elegir el tenedor, quien tendrá igualmente derecho de elección si el título señala varios lugares de cumplimiento o de ejercicio. Sin embargo, cuando el título sea representativo de mercaderías, también podrá ejercerse la acción derivada del mismo en el lugar en que estas deban ser entregadas.
          
          p.mt-3 Si no se menciona la fecha y el lugar de creación del título, se tendrán como tales la fecha y el lugar de su entrega.

          .row.mt-5
              .col-lg-6
                a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p Anexo. Letra de cambio: 
        
        .row.px-5(titulo="Pagaré a la orden")
          .col-md-6.mb-4.mb-md-0
          p.mb-3 Es una promesa de pago, es un documento crediticio que respalda una unidad económica en una fecha determinada y, con un interés adicional.
          
          p.mb-4 <b>Requisitos</b>  (Secretaría del Senado, 2020. Art. 709):
          p.mb-4 El pagaré debe contener, además de los requisitos que establece el Artículo 621, los siguientes:

            ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta
                      span 1
                    |   La promesa incondicional de pagar una suma determinante de dinero;
                  li 
                    .lista-ol--cuadro__vineta
                      span 2
                    |   El nombre de la persona a quien deba hacerse el pago;
                  li 
                    .lista-ol--cuadro__vineta
                      span 3
                    |   La indicación de ser pagadero a la orden o al portador, y
                  li 
                    .lista-ol--cuadro__vineta
                      span 4
                    |   La forma de vencimiento.

          .row.mt-5
              .col-lg-6
                a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p Anexo. Pagaré a la orden:

        .row.px-5(titulo="Cheque")
          .col-md-6.mb-4.mb-md-0
          p Un título valor de carácter crediticio respalda unidades monetarias, mediante el uso de una entidad financiera.
          h6.p-2.mb-3 Características  (Secretaría del Senado, 2020. Art.712):
          p.mb-3 El cheque sólo puede ser expedido en formularios impresos de cheques o chequeras y a cargo de un banco. El título que en forma de cheque se expida en contravención a este artículo no producirá efectos de título-valor.
          p.mb-3 <b>Artículo</b>  (Secretaría del Senado, 2020. Art. 718):
          
          p Los cheques deberán presentarse para su pago:

            ol.lista-ol--cuadro.mt-5
                  li 
                    .lista-ol--cuadro__vineta
                      span 1
                    |   Dentro de los quince días a partir de su fecha, si fueren pagaderos en el mismo lugar de su expedición;
                  li 
                    .lista-ol--cuadro__vineta
                      span 2
                    |   Dentro de un mes, si fueren pagaderos en el mismo país de su expedición, pero en lugar distinto al de ésta;
                  li 
                    .lista-ol--cuadro__vineta
                      span 3
                    |   Dentro de tres meses, si fueren expedidos en un país latinoamericano y pagaderos en algún otro país de América Latina y
                  li 
                    .lista-ol--cuadro__vineta
                      span 4
                    |   Dentro de cuatro meses, si fueren expedidos en algún país latinoamericano para ser pagados fuera de América Latina

          .row.mt-5
              .col-lg-6
                a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p Anexo. Cheque:

        .row.px-5(titulo="Factura cambiaria")
          .col-md-6.mb-4.mb-md-0
          p (Secretaría del Senado, 2020): Registra las ventas de mercancías que pueden ser al contado o a plazos.
          .row.mt-3
            .col-lg-6
              .cajon.color-primario.p-4.mb-4
                .h5 Artículo 772.
                p Artículo modificado por el artículo 1 de la Ley 1231 de 2008. El nuevo texto es el siguiente: Factura es un título valor que el vendedor o prestador del servicio podrá librar y entregar o remitir al comprador o beneficiario del servicio.
            .col-lg-6
              .cajon.color-primario.p-4.mb-4
                  .h5 Artículo 773.
                  p Artículo modificado por el artículo 2 de la Ley 1231 de 2008. El nuevo texto es el siguiente: Una vez que la factura sea aceptada por el comprador o beneficiario del servicio, se considerará, frente a terceros de buena fe, exenta de culpa que el contrato que le dio origen ha sido debidamente ejecutado en la forma estipulada en el título.
          
          p.mt-3 El comprador o beneficiario del servicio deberá aceptar, de manera expresa, el contenido de la factura, por escrito colocado en el cuerpo de esta o en documento separado, físico o electrónico. Igualmente, deberá constar el recibo de la mercancía o del servicio por parte del comprador del bien o beneficiario del servicio, en la factura y/o en la guía de transporte, según el caso, indicando el nombre, identificación o la firma de quien recibe, y la fecha de recibo. El comprador del bien o beneficiario del servicio no podrá alegar falta de representación o indebida representación por razón de la persona que reciba la mercancía o el servicio en sus dependencias, para efectos de la aceptación del título valor.

          .row.mt-5
              .col-lg-6
                a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p Anexo. Factura cambiaria

        .row.px-5(titulo="Bonos")
          .col-md-6.mb-4.mb-md-0
          p Títulos valores que representan inversiones en emisiones realizadas por el Estado para financiarse, son inversiones de carácter público.
        
          div.div.justify-content-center.m-auto
            hr.mt-3
            .row.align-items-center
              .col-auto
                figure
                  img.me-5(src='@/assets/curso/images/tema1/ico_1.svg' alt="", style="width:70px; display:block; margin:auto 0;").img-float     
              .col
                p.mb-2 Copia de la Resolución y otros actos administrativos, por medio de los cuales el Ministerio de Hacienda y Crédito Público y demás organismos competentes autorizaron la respectiva emisión; 
            hr.mt-3
            .row.align-items-center
              .col-auto
                figure
                  img.me-5(src='@/assets/curso/images/tema1/ico_2.svg' alt="", style="width:70px; display:block; margin:auto 0;").img-float      
              .col
                p Copia de la justificación técnica, económica y social de la emisión, su plan de financiación por fuentes de recursos y el cronograma de gastos anuales en moneda local y extranjera. 
            hr.mt-3
            .row.align-items-center
              .col-auto
                figure
                  img.me-5(src='@/assets/curso/images/tema1/ico_3.svg' alt="", style="width:70px; display:block; margin:auto 0;").img-float     
              .col
                p Las condiciones financieras y las garantías de los valores emitidos por las entidades públicas deberán sujetarse a lo dispuesto en las Resoluciones Externas No. 1 y No. 11 de 1993 de la Junta Directiva del Banco de la República, o a las normas que las modifiquen o sustituyan. 
            
          p.mt-5 <b>Características</b>  (Secretaría del Senado, 2020. Art.712):


          p.mt-3 Art. 1.1.1.10.- Adicionado Res. 470 del 16 de junio de 2005 (Legis, 2020. Art. 1). Inscripción automática de títulos emitidos por Fondos Comunes Especiales, administrados por sociedades fiduciarias, que cumplan con la normatividad aplicable a los fondos de capital privado de que trata esta resolución. Se entenderán inscritos en el Registro Nacional de Valores e Intermediarios para todos los efectos legales y autorizada la oferta pública, los títulos que emitan los fondos comunes especiales administrados por sociedades fiduciarias, cuando medie solicitud expresa del administrador y el reglamento autorizado por la Superintendencia Bancaria cumpla con los requisitos esenciales previstos en la presente resolución para los fondos de capital privado.
          
          p.mt-3 Para el efecto, el acto administrativo de autorización del reglamento que profiera la Superintendencia Bancaria deberá prever expresamente el cumplimiento de los requisitos esenciales previstos en la presente resolución para los fondos de capital privado.
          
          p.mt-3 De manera previa a la realización de la oferta pública, deberá presentarse ante el Registro Nacional de Valores e Intermediarios, los documentos de que trata el numeral 2º del artículo 1.1.1.1. de la presente resolución, y dos ejemplares del prospecto de colocación.
          
          p.mt-3 Parágrafo 1º.- Los documentos que incorporen los derechos de los suscriptores, en los fondos comunes especiales administrados por una sociedad fiduciaria que cumplan con los requisitos esenciales previstos en la presente resolución para los fondos de capital privado, para efectos de la inscripción en el Registro de Valores e Intermediarios, tendrán el carácter y prerrogativas propias de los títulos valores, a excepción de la acción cambiaria de regreso.

          p.mt-3 Parágrafo 2º.- El facsímil del título, o modelo de este debe precisar claramente: 

            ol.lista-ol--cuadro.mt-5
                  li 
                    .lista-ol--cuadro__vineta
                      span a
                    |   El nombre de la sociedad fiduciaria y el nombre o identificación del fondo que administra.
                  li 
                    .lista-ol--cuadro__vineta
                      span b
                    |   Fecha de vencimiento del título;
                  li 
                    .lista-ol--cuadro__vineta
                      span c
                    |   La indicación clara y destacada que se trata de un derecho de participación en el fondo común especial;
                  li 
                    .lista-ol--cuadro__vineta
                      span d
                    |   El nombre de la oficina, sucursal o agencia de la sociedad fiduciaria, o si fuere del caso, el del establecimiento de crédito con el cual haya suscrito contrato de uso de red, que están facultados para entregar el título y la fecha de esta;
                  li 
                    .lista-ol--cuadro__vineta
                      span e
                    |   El nombre e identificación del suscriptor;
                  li 
                    .lista-ol--cuadro__vineta
                      span f
                    |   El valor nominal de la inversión, el número de unidades que dicha inversión representa y el valor de la unidad a la fecha en que se realiza el aporte;
                  li 
                    .lista-ol--cuadro__vineta
                      span g
                    |   La siguiente leyenda que se deberá incluir en caracteres destacados: "Las obligaciones de la sociedad fiduciaria relacionadas con la gestión del portafolio, son de medio y no de resultado. Los dineros entregados por los suscriptores al fondo no son depósitos, ni generan para la sociedad administradora las obligaciones propias de una institución de depósito y no están amparados por el seguro de depósito del Fondo de Garantías de Instituciones Financieras FOGAFÍN, ni por ninguno otro de dicha naturaleza. La inversión en el fondo está sujeta a los riesgos de inversión, derivados de la evolución de los precios de mercado de los títulos que componen el portafolio del respectivo fondo".

          p.mt-3 Cuando en la advertencia se estipule el cobro de la remuneración por administración a cargo del fondo como límites máximos o rangos, se deberá completar con una leyenda en la que se informe de tal hecho, indicando el monto máximo o los rangos, así como la base de su liquidación.

          p.mt-3 Parágrafo 3º.- Los documentos que incorporen los derechos de los suscriptores en los fondos comunes especiales administrados por una sociedad fiduciaria que cumpla con los requisitos esenciales previstos en la presente resolución para los fondos de capital privado, inscritos en el Registro Nacional de Valores e intermediarios, deberán inscribirse en una bolsa de valores.

          p.mt-3 Para profundizar el tema de bonos, por favor ingrese al siguiente enlace:

          .row.mt-5
              .col-lg-6
                a.anexo.mb-4(:href="obtenerLink('/downloads/Cartilla Todo lo que debe saber sobre Bonos.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p Anexo. Bonos
      hr.mt-5

      h6.mg Documentos no contables.

      p.mg Son documentos informativos, entre los cuales se incluyen:
    TabsC.color-acento-contenido.mb-5
        .py-3.py-md-4(titulo="Cotización:")
          .row
            .col-md-6.mb-4.mb-md-0
              p Es el documento que relaciona las características de la negociación del producto o servicio. Su objetivo es brindar información al cliente, con el fin de tomar la decisión de compra.
              .col-sm.mt-3
                h6.mb-2 Contenido
                ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    | Membrete: logo, nombre de la empresa.
                  li 
                    i.fas.fa-check
                    | Precio del producto o servicio.
                  li
                    i.fas.fa-check
                    | Descripción del producto o servicio.
                  li
                    i.fas.fa-check
                    | Referencias del producto.
                  li 
                    i.fas.fa-check
                    | Fecha de entrega.
                  li
                    i.fas.fa-check
                    | Forma de pago.
                  li
                    i.fas.fa-check
                    | Tiempo de validez de la cotización.
                  li
                    i.fas.fa-check
                    | Nombre de la persona que solicita la cotización.
                  li
                    i.fas.fa-check
                    | Nombre del asesor.
        
            .col-md-6
              figure
                img(src='@/assets/curso/images/tema1/img_24.svg' alt="", style="width:450px; display:block; margin:auto 0;")

        .py-3.py-md-4(titulo="Pedido:")
          .row
            .col-md-6.mb-4.mb-md-0
              p Es el documento que se elabora una vez el cliente ha revisado la cotización y toma la decisión de adquirir el producto.
              .col-sm.mt-3

                  ul.lista-ul--color
                    li 
                      i.fas.fa-check
                      | Membrete: logo, nombre de la empresa.
                    li 
                      i.fas.fa-check
                      | Precio unitario del producto que se va a comprar.
                    li
                      i.fas.fa-check
                      | Descripción del producto.
                    li
                      i.fas.fa-check
                      | Cantidad.
                    li 
                      i.fas.fa-check
                      | Referencias del producto.
                    li
                      i.fas.fa-check
                      | Fecha de entrega.
                    li
                      i.fas.fa-check
                      | Forma de pago.
                    li
                      i.fas.fa-check
                      | Observaciones
                    li
                      i.fas.fa-check
                      | Firmas
              
            .col-md-6
              figure
                img(src='@/assets/curso/images/tema1/img_25.svg' alt="", style="width:450px; display:block; margin:0 auto;")

            .row.mt-5
              .col-lg-6
                a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p Anexo. Pedido:  

        .py-3.py-md-4(titulo="Remisión:")
          .row
            .col-md-6
              figure
                img(src='@/assets/curso/images/tema1/img_26.svg' alt="", style="width:350px; display:block; margin:auto 0;")
            .col-md-6.mb-4.mb-md-0
              p Es el documento que soporta la entrega del pedido conforme lo solicitado.
                .col-sm.mt-3

                  ul.lista-ul--color
                    li 
                      i.fas.fa-check
                      | Membrete: logo, nombre de la empresa.
                    li 
                      i.fas.fa-check
                      | Descripción del producto.
                    li
                      i.fas.fa-check
                      | Cantidad.
                    li 
                      i.fas.fa-check
                      | Referencias del producto.
                    li
                      i.fas.fa-check
                      | Fecha de entrega.
                    li
                      i.fas.fa-check
                      | Número de pedido.
                    li
                      i.fas.fa-check
                      | Transportador.
              
              .row.mt-5
                .col-lg-12
                  a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-pdf.svg")
                    .anexo__texto
                      p Anexo. Remisión:    

        

    
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
