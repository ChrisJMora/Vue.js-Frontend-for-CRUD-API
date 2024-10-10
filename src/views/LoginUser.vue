<template>
    <main>

        <div class="my-5">
            <div class="mx-auto w-25" style="max-width: 100%;">
                <h2 class="text-center mv-3">Login</h2>
                <form @submit.prevent="loginUser">
                    <!--username-->
                    <div class="row">
                        <div class="col-md-12 form-group mb-3">
                            <label for="identifier" class="form-label">Nombre de usuario o correo electrónico</label>
                            <input type="text" name="identifier" id="identifier" class="form-control" required v-model="credential.identifier">
                        </div>
                    </div>
                    <!--password-->
                    <div class="row">
                        <div class="col-md-12 form-group mb-3">
                            <label for="password" class="form-label">Contraseña</label>
                            <input type="password" name="password" id="password" class="form-control" required v-model="credential.password">
                        </div>
                    </div>
                    <!--submit-->
                    <div class="row">
                        <div class="col-md-12 form-group">
                            <input type="submit" value="Submit" class="btn btn-primary w-100">
                        </div>
                    </div>
                    <!--register-->
                    <div class="row">
                        <div class="col-md-12 form-group">
                            <a href="/add" class="btn btn-primary w-100">Agregar usuario</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    </main>
</template>

<script>


export default {
    name: 'LoginUser',

    data() {
        return {
            credential: {
                identifier: '',
                password: ''
            },
            error: '',
        }
    },

    methods: {
        loginUser() {
            fetch('http://localhost:8082/api/clients/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.credential)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.status == 'SUCCESS') {
                    localStorage.setItem('isAuthenticated', 'true');
                    this.$router.push('/');
                } else {
                    this.error = 'Credenciales inválidas';
                }
            })
        }
    }
}

</script>