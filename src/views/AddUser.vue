<template>
    <main>

        <Navbar/>
        <div class="my-5">
            <div class="mx-auto w-25" style="max-width: 100%;">
                <h2 class="text-center mv-3">Agregar usuario</h2>
                <form @submit.prevent="addUser">
                    <!--first-name-->
                    <div class="row">
                        <div class="col-md-12 form-group mb-3">
                            <label for="firstName" class="form-label">Nombre</label>
                            <input type="text" name="firstName" id="firstName" class="form-control" required v-model="user.firstName">
                        </div>
                    </div>
                    <!--last-name-->
                    <div class="row">
                        <div class="col-md-12 form-group mb-3">
                            <label for="lastName" class="form-label">Apellido</label>
                            <input type="text" name="lastName" id="lastName" class="form-control" required v-model="user.lastName">
                        </div>
                    </div>
                    <!--email-->
                    <div class="row">
                        <div class="col-md-12 form-group mb-3">
                            <label for="email" class="form-label">Correo electrónico</label>
                            <input type="email" name="email" id="email" class="form-control" required v-model="user.email">
                        </div>
                    </div>
                    <!--password-->
                    <div class="row">
                        <div class="col-md-12 form-group mb-3">
                            <label for="password" class="form-label">Contraseña</label>
                            <input type="password" name="password" id="password" class="form-control" required v-model="user.password">
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
    name: 'AddUser',
    components: {
        Navbar
    },

    data() {
        return {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            }
        }
    },

    methods: {
        addUser() {
            fetch('http://localhost:8082/api/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.user)
            })
            .then(data => {
                console.log(data)
                this.$router.push("/")
            })
        }
    }
}

</script>