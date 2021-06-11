<template>
  <section class="src-componentes-multipleChoice">
    <div class="jumbotron">
      <h2>Ejercicio 2</h2>
      <hr />
      <div class="mb-3">
        <table class="table">
          <tr class="bg-success text-white">
            <th>Pregunta</th>
            <th>Respuesta</th>
          </tr>
          <tr
            class="bg-info text-white"
            v-for="(pregunta, index) in preguntas"
            :key="index"
          >
            <td>{{ pregunta.numero }}</td>
            <td>{{ pregunta.respuestas }}</td>
          </tr>
        </table>
      </div>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-multipleChoice',
    props: [],
    mounted () {

    },
    data () {
      return {
       preguntas : [
         {numero:1, respuestas:'c'},
         {numero:2, respuestas:'b,c'},
         {numero:3, respuestas:'b'}
       ]
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="css">
.src-components-multipleChoice {
}
</style>
