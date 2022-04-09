<template>
<div id="form" class="container-fluid">
    <b-row class="vh-100" align-v="center" @keyup.enter="submit">
        <b-form-group id="input-group-1" label="¿En que ciudad de Colombia te encuentras?" label-for="input-1" description="Presiona enter para enviar tu respuesta">
            <b-form-input id="input-1" class="mt-2 mb-0" type="text" placeholder="Ej: Bogota, Medellin..." v-model="ciudad"></b-form-input>
        </b-form-group>
    </b-row>
</div>
</template>

<script>
import axios from "axios"
import Swal from 'sweetalert2'
export default {
    name: 'HomeView',
    data() {
        return {
            ciudad: null
        }
    },
    methods: {
        submit: function () {
            var data = JSON.stringify({
                "ciudad": `${this.ciudad}`
            });

            var config = {
                method: 'post',
                url: `http://localhost:3003/api/v1/add-food`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            axios(config)
                .then(function () {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })

                    Toast.fire({
                        icon: 'success',
                        title: 'Respuesta enviada correctamente, compatriota'
                    })
                })
                .catch(function () {
                    Swal.fire(
                        '¡Ups!',
                        'Algo salio mal...',
                        'error'
                    )
                });
        }
    },
}
</script>

<style>
* {
    font-family: 'Cunia', sans-serif;
}

#form {
    background-image: url("https://devaca.mx/wp-content/uploads/2021/04/2020.02-Colombia-Capa-2.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

#input-group-1 {
    color: yellow
}

#input-1 {
    color: blue
}

.text-muted {
    color: red !important
}
</style>
