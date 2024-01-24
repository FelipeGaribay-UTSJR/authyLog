import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import  { auth } from './firebase.js'

// function loginUser() {

const registroForm = 
          document.querySelector("#formRegistro");

          registroForm.addEventListener("submit", async (e) => {
            e.preventDefault();
          
            const email = registroForm["correo-registro"].value;
            const password = registroForm["contrasena-registro"].value;
          
            console.log(`Correo: ${email}, contraseña: ${password}`);

  try{
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredentials)
  }
  catch(error){
    console.log(error.code)
    if(error.code === 'auth/invalid-login-credentials'){
    console.log("Datos incorrectos")
     }
  }
})

// Agrega un evento al botón o enlace que activará el cierre de sesión
const cerrarSesionButton = document.querySelector("#cerrarSesionButton");

cerrarSesionButton.addEventListener("click", () => {
  cerrarSesion();
});

// Función para cerrar la sesión
const cerrarSesion = async () => {
  try {
    await signOut(auth);
    console.log("Sesión cerrada exitosamente");
    // Puedes redirigir al usuario a la página de inicio de sesión u otra página después del cierre de sesión si es necesario.
  } catch (error) {
    console.error("Error al cerrar la sesión:", error);
  }
};

  