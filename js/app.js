import { signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import  { auth } from './firebase.js'


const loginForm = 
          document.querySelector("#formLogin");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = loginForm["correo"].value;
  const password = loginForm["contrasena"].value;

  console.log(`Correo: ${email}, contraseña: ${password}`);

  try{
    const userCredentials = await signInWithEmailAndPassword(auth, email, password)
    console.log("Bienvenido " + userCredentials.user.email)
  }
  catch(error){
    console.log(error.code)
    if(error.code === 'auth/invalid-login-credentials'){
      console.log("Datos incorrectos")
    }
  }
})


