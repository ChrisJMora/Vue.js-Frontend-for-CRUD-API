<template>
    <main>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Frontend</a>
                <button class="navbar-toogler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportContent" aria-controls="navbarSupportContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggle-icon"></span>
                </button>
                
                <div class="collapse navbar-collpase" id="navbarSupportContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a href="/" class="nav-link">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a href="/add" class="nav-link">Agregar usuario</a>
                        </li>
                        <!-- Botón de Cerrar sesión -->
                        <button class="btn btn-danger" @click="logout">Cerrar sesión</button>
                    </ul>
                </div>
            </div>
        </nav>
    </main>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.setItem('isAuthenticated', 'false');
      this.$router.push('/auth');
    }
  }
}
</script>