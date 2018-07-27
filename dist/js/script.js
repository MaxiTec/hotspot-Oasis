var form = $('#autos-form')
var formRest = $('#rest-form')
var formSpa = $('#spa-form')
// form.validate({
//   errorPlacement: function errorPlacement (error, element) { element.before(error) },
//   rules: {
//     confirm: {
//       equalTo: '#password'
//     }
//   }
// })
// formulario Principal
form.children('div').steps({
  headerTag: 'h3',
  bodyTag: 'section',
  // transitionEffect: 'slideLeft',
  labels: {
    cancel: 'Cancelar',
    current: 'Paso Actual:',
    pagination: 'Pagination',
    finish: 'Reservar',
    next: 'Siguiente',
    previous: 'Anterior',
    loading: 'Cargando ...'
  },
  onStepChanging: function (event, currentIndex, newIndex) {
    form.validate().settings.ignore = ':disabled,:hidden'
    return form.valid()
  },
  onFinishing: function (event, currentIndex) {
    form.validate().settings.ignore = ':disabled'
    return form.valid()
  },
  onFinished: function (event, currentIndex) {
    // Aqui va el envio del Formuario D:
    alert('Envianr Formulario!')
  }
})
// formulario Restaurantes
formRest.children('div').steps({
  headerTag: 'h3',
  bodyTag: 'section',
  // transitionEffect: 'slideLeft',
  labels: {
    cancel: 'Cancelar',
    current: 'Paso Actual:',
    pagination: 'Pagination',
    finish: 'Reservar',
    next: 'Siguiente',
    previous: 'Anterior',
    loading: 'Cargando ...'
  },
  onStepChanging: function (event, currentIndex, newIndex) {
    formRest.validate().settings.ignore = ':disabled,:hidden'
    return formRest.valid()
  },
  onFinishing: function (event, currentIndex) {
    formRest.validate().settings.ignore = ':disabled'
    return formRest.valid()
  },
  onFinished: function (event, currentIndex) {
    // Aqui va el envio del Formuario D:
    alert('Envianr Formulario!')
  }
})
// formulario Spa
formSpa.children('div').steps({
  headerTag: 'h3',
  bodyTag: 'section',
  // transitionEffect: 'slideLeft',
  labels: {
    cancel: 'Cancelar',
    current: 'Paso Actual:',
    pagination: 'Pagination',
    finish: 'Reservar',
    next: 'Siguiente',
    previous: 'Anterior',
    loading: 'Cargando ...'
  },
  onStepChanging: function (event, currentIndex, newIndex) {
    formSpa.validate().settings.ignore = ':disabled,:hidden'
    return formSpa.valid()
  },
  onFinishing: function (event, currentIndex) {
    formSpa.validate().settings.ignore = ':disabled'
    return formSpa.valid()
  },
  onFinished: function (event, currentIndex) {
    // Aqui va el envio del Formuario D:
    alert('Envianr Formulario!')
  }
})
