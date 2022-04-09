<template>
<b-container>
    <b-row class="vh-100 text-center" align-v="center">
        <b-col v-for="item in items" :key="item.title" md="4">
            <b-img :src="item.urlImage" width="120" height="120" class="imgHover mb-2" v-b-modal="'myModal'" user="'item'" @click="sendInfo(item)"></b-img>
            <h4>{{item.title}}</h4>
        </b-col>
    </b-row>
    <b-modal id="myModal" hide-footer class="modal-dialog modal-dialog-scrollable">
        <p>
            {{selectedUser.description}}
        </p>
    </b-modal>
</b-container>
</template>

<script>
export default {
    name: 'QuestionsView',
    data() {
        return {
            items: [{
                    urlImage: "data:image/png;base64,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",
                    title: "WebSockets",
                    description: "WebSockets es un protocolo de comunicación bidireccional en tiempo real que crea un tunel entre un cliente y un servidor y que soporta multiples clientes conectados al mismo tunel"
                },
                {
                    urlImage: "https://cdn-icons-png.flaticon.com/512/72/72342.png",
                    title: "Comunicación entre componentes",
                    description: "Podemos pasar datos a componentes secundarios a través de la Prop. Para usar una metáfora vívida, la transferencia de datos entre los componentes principal y secundario es equivalente a una tubería de alcantarillado de arriba hacia abajo, que solo puede fluir de arriba hacia abajo, no corriente arriba. Este es exactamente el flujo de datos unidireccional de la filosofía de diseño de Vue."
                },
                {
                    urlImage: "https://res.cloudinary.com/practicaldev/image/fetch/s--88uqZM_l--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/i/1st9m5e9cbuxtr0incz9.png",
                    title: "Virtual DOM",
                    description: "Virtual DOM es una capa intermedia entre el Template y el DOM, en el cual corren todo tipo de procesos como bucles, operaciones, renderizados y demas. El Virtual DOM entrega los datos al DOM ya procesados, minimizando los tiempos de carga entre cada renderizado del DOM "
                }
            ],
            selectedUser: '',
        }
    },
    methods: {
        sendInfo(item) {
            this.selectedUser = item;
        }
    }

}
</script>

<style>
.imgHover:hover {
    cursor: pointer;
    transform: scale(1.2)
}
</style>
