
// Creamos nuestra aplicacion.
const miAplicacion = Vue.createApp({
    components: {
        'inicio': comp_inicio,
        'mejores': comp_mejores,
        'reglas': comp_reglas,
        'donde': comp_donde,
        'contacto': comp_contacto
    },
    data() {
        return {
            inicio_ver: false,
            mejores_ver: false,
            reglas_ver: false,
            contacto_ver: false,
            donde_ver: false
        }
    },
    mounted() {
        this.inicio_ver = true
    },
    methods: {
        show(componente) {
            this.inicio_ver = false
            this.mejores_ver = false
            this.reglas_ver = false
            this.donde_ver = false
            this.contacto_ver = false

            console.clear()
            console.log(componente)
            if (componente == "inicio") {
                this.inicio_ver = true
            } else if (componente == "mejores") {
                this.mejores_ver = true
            } else if (componente == "reglas") {
                this.reglas_ver = true
            } else if (componente == "donde") {
                this.donde_ver = true
            }
            else if (componente == "contacto") {
                this.contacto_ver = true
            }
        }
    }
}).mount("#app")