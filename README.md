# Frontend para Gestión de Usuarios con Vue.js

Este proyecto es el frontend para la gestión de usuarios, desarrollado con **Vue.js**. La aplicación permite realizar operaciones como autenticación, visualización, adición, edición y eliminación de usuarios. Utiliza enrutamiento con **Vue Router** y cuenta con protección de rutas a través de autenticación básica.

## Instalación

1. Clona el repositorio:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd <NOMBRE_DEL_PROYECTO>
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

4. Ejecuta la aplicación localmente:
    ```bash
    npm run dev
    ```

## Dependencias

Este proyecto utiliza las siguientes dependencias principales:
- **Vue.js 3**: Framework principal para la interfaz de usuario.
- **Vue Router**: Manejo del enrutamiento dentro de la aplicación.
- **Vite**: Herramienta de desarrollo para aplicaciones Vue.js.

## Enrutamiento

La aplicación web incluye las siguientes vistas:
- **Login**: Autenticación de usuario.
- **Home**: Listado de usuarios (requiere autenticación).
- **Add User**: Agregar un nuevo usuario.
- **Edit User**: Editar los datos de un usuario existente (requiere autenticación).

El enrutamiento utiliza **Vue Router** para gestionar las distintas rutas, y algunas rutas están protegidas mediante autenticación. Si el usuario no está autenticado, será redirigido automáticamente a la página de login.

El enrutador está configurado en `src/router/index.js` y maneja las siguientes rutas:

| Ruta       | Nombre   | Componente               | Autenticación Requerida |
|------------|----------|--------------------------|-------------------------|
| `/auth`    | login    | LoginUser.vue             | No                      |
| `/`        | home     | ViewUsers.vue             | Sí                      |
| `/add`     | add      | AddUser.vue               | No                      |
| `/edit/:username` | edit | UpdateUser.vue | Sí                      |
