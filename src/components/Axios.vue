<template>
	<div class="axios">
		<img v-for="persona in personas" :src="persona.picture.thumbnail" :alt="persona.name.first" />
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'Axios',
		mounted() {
            this.cargarPersonas();
        },
		data() {
			return {
				personas: []
			}
		},
		methods: {
            cargarPersonas() {
              axios.get('https://randomuser.me/api/?results=50')
                .then((respuesta) => {
                  this.personas = respuesta.data.results;
                });
            }
        }
	}
</script>