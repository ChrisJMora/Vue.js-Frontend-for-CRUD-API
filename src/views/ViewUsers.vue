<template>
    <main>
        <Navbar />

        <!--Table-->
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="text-center">Usuarios</h1>

                    <a href="/add" class="btn btn-primary">Agregar Usuario</a>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Nombre completo</th>
                                <th scope="col">Correo electrónico</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in users" :key="user.id">
                                <th scope="row">{{ user.id }}</th>
                                <td>{{ user.firstName }} {{ user.lastName }}</td>
                                <td>{{ user.email }}</td>
                                <td>
                                    <a class="btn btn-primary" :href="`/edit/${user.id}`">Editar</a>
                                    <button class="btn btn-danger mx-2" @click="$event => deleteUser(user.id)">Eliminar</button>
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
            users: []
        }
    },

    methods: {
        getUsers() {
            fetch('http://localhost:8082/api/read')
            .then(res => res.json())
            .then(data => {
                this.users = data
                console.log(data)
            })
        },

        deleteUser(id) {
            fetch(`http://localhost:8082/api/delete/${id}`, {
                method: 'DELETE'
            })
            .then(data => {
                console.log(data)
                this.getUsers()
            })
        }
    },

    beforeMount() {
        this.getUsers()
    }
}

</script>