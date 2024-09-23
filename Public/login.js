// Simulamos datos de usuarios
const users = [
    { username: "admin", password: "1234", role: "admin" },
    { username: "user", password: "1234", role: "user" }
];

// Manejar el evento de submit del formulario
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificar usuario y contraseña
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Guardar información del usuario en localStorage
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('username', user.username);
        localStorage.setItem('role', user.role);

        // Redireccionar según el rol
        if (user.role === "admin") {
            window.location.href = "Home_admin.html";
        } else {
            window.location.href = "Home_usuario.html";
        }
    } else {
        document.getElementById('error').textContent = 'Credenciales incorrectas. Inténtalo de nuevo.';
    }
});
