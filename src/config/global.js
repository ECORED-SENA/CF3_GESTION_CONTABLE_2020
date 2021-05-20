export default {
  global: {
    componenteFormativo: 'Documentos contables y no contables.',
    descripcionCurso:
      'En este componente se identifican y analizan los documentos contables, cuyo objetivo es soportar el registro de los hechos económicos de la empresa; por ello, la importancia de conocer su concepto, características y requisitos.  Aunado a ello, se revisan los documentos no contables de tipo informativo, los cuales no se registran contablemente y, por ende, no afectan la contabilidad de la entidad.',
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Documentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Contables y no contables, extracontables y títulos valores',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Definición, clasificación, características y diligenciamiento.',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Archivo y conservación de documentos.',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Ley general de archivos.',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Consecutivo, cronológico por asuntos.',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Tabla de retención documental',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Libros contables.',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Conceptos, clasificación, formatos y comprobantes.',
            hash: 't_3_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        /*nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,*/
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Astrid Lili Puerta',
        cargo: 'Experta temática',
        centro: 'Centro Agropecuario de Buga',
        regional: 'Regional valle',
      },
      {
        nombre: 'Javier Enrique Santana',
        cargo: 'Experto temático',
        centro: 'Centro de Gestión Industrial',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Michael Andrés Cortés Caro',
        cargo: 'Experto temático',
        centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
      },
      {
        nombre: 'Mauricio Jiménez Fajardo',
        cargo: 'Experto temático',
        centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
      },
      {
        nombre: 'Manuel Alejandro Garzón Cárdenas',
        cargo: 'Experto temático',
        centro: 'Deutsche Gesellschaft für',
        regional: 'Internationale Zusammenarbeit (GIZ)',
      },
      {
        nombre: 'Liliana Victoria Morales Gualdrón',
        cargo: 'Diseñador instruccional',
        centro: 'Centro para la Industria y la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Carlos Andrés Rodríguez',
        cargo: 'Evaluador instruccional',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Revisora de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
      },
      {
        nombre: ['Adriana Rincón Avendaño', 'Eulises Orduz Amezquita'],
        cargo: 'Diseño web y Producción Audiovisual',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo Front-End',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Brayan Stiven Pinto Diaz',
        cargo: ['Desarrollo front-end', 'Validación de recursos'],
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Aguilar, H. (2017). Prácticas de contabilidad. Grupo Editorial Patria.',
    },
    {
      referencia:
        'Angulo, U. (2018). Contabilidad financiera, correlacionado con NIIF. Ediciones de la U.',
    },
    {
      referencia:
        'Archivo General de la Nación Colombia (2020, 16 de noviembre). Ley 594 de 2000 – Ley general de archivos',
      link: 'https://normativa.archivogeneral.gov.co/ley-594-de-2000/',
    },
    {
      referencia:
        'Archivo General de la Nación Colombia (2020, 16 de noviembre). Tabla de retención documental TRD',
      link:
        'https://www.archivogeneral.gov.co/sites/default/files/Estructura_Web/3_Transparencia/10.6%20tablas%20de%20retencion/Trdjunio_2016.pdf',
    },
    {
      referencia:
        'Bancolombia (2020, 16 de noviembre). Aprende a leer tu extracto.',
      link:
        'https://www.grupobancolombia.com/personas/aprender-es-facil/como-manejar-dinero/endeudamiento-responsable/que-es-una-tarjeta-credito/como-leer-extracto',
    },
    {
      referencia: 'BBVA (2020, 16 de noviembre). Ejemplo de cheque.',
      link: 'https://www.bbva.com.py/public/formato-cheques-2017.jsp',
    },
    {
      referencia:
        'Cámara de Comercio de Barranquilla (2020, 15 de noviembre). Solicitud de inscripción de libros – páginas web o sitios de internet',
      link:
        'http://www.camarabaq.org.co/wp-content/uploads/2019/02/3-Formato-Inscripcio%CC%81n-de-libros-pa%CC%81ginas-web.pdf',
    },
    {
      referencia:
        'Cámara de Comercio de Santa Marta (2020, 15 de noviembre). Circular 002 de 2016',
      link:
        'https://www.ccsm.org.co/normativas-del-registro-nacional-de-turismo/circular-002-de-2016.html',
    },
    {
      referencia:
        'Consejo Técnico de la Contaduría (2020, 10 de noviembre). Concepto 650 del 14 de agosto de 2018',
      link: 'https://www.ctcp.gov.co/conceptos/2018',
    },
    {
      referencia:
        'Consejo Técnico de la Contaduría Pública (2020, 16 de noviembre). Conceptos 2018: respuestas emitidas por el CTCP a las consultas interpuestas por la ciudadanía',
      link: 'https://www.ctcp.gov.co/conceptos/2018',
    },
    {
      referencia:
        'Del Carmen, L., y Gudiño, E. (2014). Contabilidad universitaria. McGraw-Hill',
    },
    {
      referencia:
        'Diéguez, J. (2017). Contabilidad financiera: el plan general de contabilidad. Pirámide.',
    },
    {
      referencia:
        'El Contador (2020, 15 de noviembre). Libro de diario general.',
      link: 'http://elcontador.net/libro-diario-general/',
    },
    {
      referencia:
        'Gerencie. (2020, 16 de noviembre). Formato en Excel para liquidar nómina',
      link:
        'https://www.gerencie.com/formato-en-excel-para-liquidar-la-nomina.html',
    },
    {
      referencia:
        'Itaú (2020, 16 de noviembre). Prospecto de información: tercera emisión de bonos subordinados hasta por $140,000,000,000 Banco Santander Colombia S.A.',
      link:
        'https://www.itau.co/documents/10282/1317643/78ProspectoBancoSantanderColombia.pdf',
    },
    {
      referencia:
        'Jiménez, G. (2003). Ordenación documental: division de clasificación y descripción. Archivo General de la Nación Colombia.',
    },
    {
      referencia:
        'Legis. (2020, 16 de noviembre). Minerva: siempre legal, siempre confiable. https://www.formasminerva.com/inicio',
    },
    {
      referencia:
        'Luna, G. (2013). Asistencia administrativa: documentos o soportes contables en Colombia.',
    },
    {
      referencia: 'Mil Formatos. (2020, 16 de noviembre). Ejemplo de factura.',
      link:
        'https://milformatos.com/wp-content/uploads/2018/02/Ejemplo-de-Factura.jpg',
    },
    {
      referencia:
        'Pérez, J. y  Fol, R. (2019). Manual de casos prácticos de ISR. Tax Editores.',
    },
    {
      referencia:
        'Secretaría del Senado (2020, 10 de noviembre). Ley 1111 de 2006',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1111_2006.html',
    },
    {
      referencia:
        'Secretaría del Senado (2020, 10 de noviembre). Ley 1755 de 2015.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1755_2015.html',
    },
    {
      referencia:
        'Secretaria del Senado (2020, 15 de octubre). Código del Comercio: Decreto-Ley 410 de 1971.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/codigo_comercio.html',
    },
    {
      referencia:
        'Secretaría del Senado (2020, 5 de noviembre). Estatuto tributario',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/estatuto_tributario.html',
    },
    {
      referencia:
        'Secretaría del Senado (2020, 6 de noviembre). Decreto-Ley 12 de 2012',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/decreto_0019_2012.html',
    },
    {
      referencia:
        'Sinisterra V., Polanco L., y Henao H. (2011). Contabilidad: sistema de información para las organizaciones. Mc. Graw Hill.',
    },
    {
      referencia:
        'Sistema Único de Información Normativa (2020, 10 de noviembre). Decreto 2242 de 2015',
      link: 'http://www.suin.gov.co/viewDocument.asp?id=30033048',
    },
    {
      referencia:
        'Super Intendencia de Industria y Comercio (2020, 15 de noviembre). Resolución 8934',
      link:
        'https://www.sic.gov.co/sites/default/files/normatividad/Resolucion_8934_2014.pdf ',
    },
    {
      referencia:
        'Tapia, C. y Jiménez, J. (2018) Cómo entender finanzas sin ser financiero. Instituto Mexicano de Contadores Públicos.',
    },
    {
      referencia:
        'Tejeda, A. (2017). Manual práctico de contabilidad. Pirámide.',
    },
    {
      referencia:
        'Tiendas Jumbo. (2020, 16 de noviembre). Formato transferencia de fondos.',
      link:
        'https://proveedores.tiendasjumbo.co/gateweb/base/documentos/Formato_transferencia_de_fondos.pdf',
    },
    {
      referencia:
        'Universidad del Cauca. (2020, 15 de noviembre). Libro mayor y balances',
      link: 'http://fccea.unicauca.edu.co/old/fcf/fcfse41.html',
    },
    {
      referencia:
        'Vilches, R. (2019). Apuntes de contabilidad básica. Editorial El Cid.',
    },
  ],
  glosario: [
    {
      termino: 'Comprobante de ingreso o recibo de caja.',
      significado:
        'El recibo de caja es un soporte de contabilidad en el que constan los ingresos en efectivo, cheques y otras formas de recaudo. El original se entrega al cliente y las copias generalmente se archivan así: una para el archivo consecutivo y otra para anexar al comprobante diario.',
    },
    {
      termino: 'Consignación bancaria',
      significado:
        'Es un comprobante que elaboran los bancos y suministran a sus cuentahabientes, para que lo diligencien al consignar.',
    },
    {
      termino: 'Cheque',
      significado:
        'Titulo valor por medio del cual una persona llamada girador, quien posee una cuenta bancaria, ordena a un banco, llamado girado, que pague una determinada suma de dinero a la orden de un tercero.',
    },
    {
      termino: 'Factura de venta',
      significado:
        'Es un título valor que el vendedor o prestador del servicio podrá librar y entregar o remitir al comprador o beneficiario del servicio.',
    },
    {
      termino: 'Letra de cambio',
      significado:
        'Documento negociable o título valor es una orden incondicional de pago de una persona llamada girador a otra persona llamada girado, para que pague a la orden o al portador cierta suma de dinero a la vista o en una fecha determinada.',
    },
    {
      termino: 'Nota débito',
      significado:
        'Es un comprobante que emiten las empresas, para cargar a  la cuenta de los clientes valores como intereses, por financiación, por sobregiros, el gravamen a movimientos financieros (GMF), venta de chequeras, comisiones, y otros cobros',
    },
  ],
  complementario: [
    {
      texto:
        'Apuntes de contabilidad básica Vilches, R. (2019). Apuntes de contabilidad básica. Editorial El Cid.',
      tipo: 'Capitulo 1',
    },
    {
      texto:
        'Prácticas de contabilidad Aguilar, H. (2017). Prácticas de contabilidad. Grupo Editorial Patria.',
      tipo: 'Capítulo 1',
    },
    {
      texto: 'Anexo 6 de 2019 al Decreto Único Reglamentario DUR 2420.',
      tipo: 'Titulo Tercero artículos 5,6,7,8,9 y 10.',
      link:
        'https://www.mincit.gov.co/normatividad/proyectos-de-normatividad/proyectos-de-decretos-2019/16-09-2019-anexo-no-6-2019-estados-financieros-ext.aspx',
    },
    {
      texto: 'Ley 594 de 2000',
      tipo: 'Ley general de archivos.',
      descarga: 'https://normativa.archivogeneral.gov.co/ley-594-de-2000/',
    },
    {
      texto: 'Resolución 8934 de 2014',
      tipo:
        'Resolución, aplicable a gestión documental para entidades privadas.',
      link: 'http://www.suin-juriscol.gov.co/viewDocument.asp?id=4041484',
    },
  ],
}
