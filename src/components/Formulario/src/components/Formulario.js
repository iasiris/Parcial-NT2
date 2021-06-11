
export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData : this.getInicialData(),
      formState : {},
      nombreLengthMin : 3,
      nombreLengthMax : 15,
      notaMin : 0,
      notaMax: 10,
      alumnos:[],
    }
  },
  computed: {
    
  },
  mounted () {

  },
  methods: {
    getInicialData() {
      return {
        nombre: '',
        apellido: '',
        nota:'',
      }
    },
    enviar() {      
      console.log({...this.formData})
      this.alumnos.push({...this.formData})
      this.formData = this.getInicialData()
      this.formState._reset()
    },

    tipoDeNota(nota){
      if(nota>= 0 && nota<4 ){
        return [
          'text-danger' //entre 0 y 3 es rojo          
        ]
      } else if (nota>= 4 && nota<7){ 
        return [          
          'text-warning' //entre 4 y 6 es amarrillo
        ]
      } else { 
        return [
          'text-success'  //>=7  es verde
        ]
      }
    },
    calcularPromedio(){
      let total = 0;
      this.alumnos.forEach(alumno =>{
        total += (alumno.nota);
      });
      return (total / this.alumnos.length) 
    },
    
  }
}


