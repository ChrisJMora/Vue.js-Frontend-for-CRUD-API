<template>
    <main>

        <Navbar/>
        <div class="my-5">
            <div class="mx-auto w-25" style="max-width: 100%;">
                <h2 class="text-center mv-3">Editar usuario</h2>
                <form @submit.prevent="updateUser">
                    <!--username-->
                    <div class="row">
                        <div class="col-md-12 form-group mb-3">
                            <label for="username" class="form-label">Nombre de usuario</label>
                            <input type="text" name="username" id="username" class="form-control" required v-model="client.username">
                        </div>
                    </div>
                    <!--first-name-->
                    <div class="row">
                        <div class="col-md-12 form-group mb-3">
                            <label for="firstName" class="form-label">Nombre</label>
                            <input type="text" name="firstName" id="firstName" class="form-control" required v-model="client.firstName">
                        </div>
                    </div>
                    <!--last-name-->
                    <div class="row">
                        <div class="col-md-12 form-group mb-3">
                            <label for="lastName" class="form-label">Apellido</label>
                            <input type="text" name="lastName" id="lastName" class="form-control" required v-model="client.lastName">
                        </div>
                    </div>
                    <!--email-->
                    <div class="row">
                        <div class="col-md-12 form-group mb-3">
                            <label for="email" class="form-label">Correo electrónico</label>
                            <input type="email" name="email" id="email" class="form-control" required v-model="client.email">
                        </div>
                    </div>
                    <!--submit-->
                    <div class="row">
                        <div class="col-md-12 form-group">
                            <input type="submit" value="Submit" class="btn btn-primary w-100">
                        </div>
                    </div>
                </form>
            </div>
        </div>

    </main>
</template>

<script>

import Navbar from '../components/Navbar.vue';

export default {
    name: 'UpdateUser',
    components: {
        Navbar
    },

    data() {
        return {
            client: {
                username: '',
                firstName: '',
                lastName: '',
                email: '',
            }
        }
    },

    beforeMount(){
        this.getUser();
    },

    methods: {
        getUser(){
            fetch(`http://localhost:8082/api/clients?username=${this.$route.params.username}`)
            .then(res => res.json())
            .then(response => {
                this.client = response.data;
                console.log(response)
            })
        },

        updateUser(){
            fetch(`http://localhost:8082/api/clients/update?username=${this.$route.params.username}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.client)
            })
            .then(response => {
                console.log(response)
                this.$router.push("/")
            })
        }
    }
}

</script>