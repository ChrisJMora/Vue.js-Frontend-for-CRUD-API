<template>
    <main>
        <Navbar />

        <!--Table-->
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="text-center">Clientes</h1>

                    <a href="/add" class="btn btn-primary">Agregar Cliente</a>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Nombre de usuario</th>
                                <th scope="col">Nombre completo</th>
                                <th scope="col">Correo electrónico</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="client in clients" :key="client.id">
                                <td>{{ client.username }}</td>
                                <td>{{ client.firstName }} {{ client.lastName }}</td>
                                <td>{{ client.email }}</td>
                                <td>
                                    <a class="btn btn-primary" :href="`/edit/${client.username}`">Editar</a>
                                    <button class="btn btn-danger mx-2" @click="$event => deleteUser(client.username, client.email)">Eliminar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </main>
</template>

<script>

import Navbar from '../components/Navbar.vue';

export default {
    name: 'ViewUsers',
    components: {
        Navbar
    },

    data() {
        return {
            clients: []
        }
    },

    methods: {
        getUsers() {
            fetch('http://localhost:8082/api/clients/all')
            .then(res => res.json())
            .then(response => {
                this.clients = response.data
                console.log(response)
            })
        },

        deleteUser(username, email) {
            fetch(`http://localhost:8082/api/clients/delete?username=${username}&email=${email}`, {
                method: 'DELETE'
            })
            .then(response => {
                this.getUsers()
                console.log(response)
            })
        }
    },

    beforeMount() {
        this.getUsers()
    }
}

</script>