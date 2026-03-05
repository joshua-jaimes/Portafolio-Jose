<template>
  <div class="login-page">

    <!-- Background -->
    <div class="bg-gradient"></div>
    <div class="pattern"></div>

    <!-- Orbs -->
    <div class="orb orb1"></div>
    <div class="orb orb2"></div>

    <main class="layout">

      <!-- LEFT HERO -->
      <section class="hero">
        <span class="badge">Nueva versión 2.0</span>

        <h1>
          Descubre el poder de tus
          <span>números</span>
        </h1>

        <p>
          Accede a lecturas personalizadas generadas por IA y gestiona
          tu viaje espiritual con nuestra plataforma premium.
        </p>

        <div class="features">
          <div class="feature">🧠 Lecturas AI</div>
          <div class="feature">👥 Comunidad</div>
        </div>
      </section>

      <!-- RIGHT LOGIN -->
      <section class="login-box glow">
        <div class="logo">
          <span class="material-icons">all_inclusive</span>
        </div>

        <h2>Bienvenido de nuevo</h2>
        <p class="subtitle">Ingresa a tu portal místico</p>

        <form @submit.prevent="ingresar">

          <label>Correo electrónico</label>
          <input v-model="usuario" type="email" placeholder="correo@ejemplo.com" required>

          <label>Contraseña</label>
          <input v-model="pass" type="password" placeholder="••••••••" required>

          <!-- BOTÓN LOGIN -->
          <button type="submit" class="login-btn">
            Iniciar sesión
            <span class="material-icons">arrow_forward</span>
          </button>

          <!-- BOTÓN REGISTRAR -->
          <router-link to="/register" class="register-btn">
            <span class="material-icons">person_add</span>
            Registrar Persona
          </router-link>

        </form>
      </section>

    </main>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/Auth'

const usuario = ref('')
const pass = ref('')
const auth = useAuthStore()
const router = useRouter()

async function ingresar() {
  const ok = await auth.login(usuario.value, pass.value)

  if (ok) {
    alert('Login correcto')
    router.push('/dashboard') // 👈 aquí lo mandas
  } else {
    alert(auth.error || 'Error al iniciar sesión')
  }
}
</script>

<style scoped>

html, body, #app {
  height: 100%;
  margin: 0;
}

.login-page {
  background: #0f0914;
  color: white;
  font-family: system-ui, sans-serif;
  position: relative;
  /* pantalla completa real */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  min-height: 100vh;
  width: 100%;
}

/* Background */
.bg-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #191022, #2a0b4d, #150629);
}

.pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 2px 2px, rgba(115,17,212,.15) 1px, transparent 0);
  background-size: 32px 32px;
  opacity: .35;
}

/* Orbs */
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
}

.orb1 {
  width: 40vw;
  height: 40vw;
  background: rgba(115,17,212,.35);
  top: -15%;
  left: -15%;
}

.orb2 {
  width: 35vw;
  height: 35vw;
  background: rgba(40,0,120,.45);
  bottom: -15%;
  right: -15%;
}

/* Layout */
.layout {
  min-height: 100vh; /* ocupa toda la pantalla */
  display: grid;
  grid-template-columns: 1fr 420px;
  align-items: center;
  justify-content: center;
  padding: 60px;
  position: relative;
  z-index: 2;
  gap: 60px;
}

/* HERO */
.hero h1 {
  font-size: 3rem;
  line-height: 1.1;
}

.hero h1 span {
  color: #b980ff;
}

.hero p {
  margin-top: 15px;
  color: #bbb;
  max-width: 480px;
}

.badge {
  display: inline-block;
  background: rgba(115,17,212,.15);
  color: #b980ff;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  margin-bottom: 18px;
}

.features {
  display: flex;
  gap: 12px;
  margin-top: 25px;
}

.feature {
  background: rgba(255,255,255,.05);
  padding: 10px 14px;
  border-radius: 12px;
  font-size: 13px;
}

/* LOGIN CARD */
.login-box {
  background: linear-gradient(180deg, rgba(35,22,48,.96), rgba(25,16,34,.99));
  padding: 36px;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,.1);
  backdrop-filter: blur(10px);
}

.glow {
  box-shadow: 0 0 45px rgba(115,17,212,.5);
}

.logo {
  width: 60px;
  height: 60px;
  margin: auto;
  background: rgba(115,17,212,.25);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
}

.logo span {
  font-size: 32px;
  color: #b980ff;
}

.login-box h2 {
  text-align: center;
  margin-bottom: 4px;
}

.subtitle {
  text-align: center;
  font-size: 13px;
  color: #aaa;
  margin-bottom: 22px;
}

/* FORM */
label {
  font-size: 12px;
  color: #ccc;
  display: block;
  margin-bottom: 4px;
}

input {
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  background: #0f0b18;
  border: 1px solid rgba(255,255,255,.15);
  color: white;
  margin-bottom: 14px;
}

input:focus {
  outline: none;
  border-color: #7311d4;
}

/* BOTÓN LOGIN */
.login-btn {
  width: 100%;
  padding: 13px;
  border-radius: 12px;
  background: linear-gradient(135deg,#7311d4,#9b4dff);
  border: none;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  margin-top: 6px;
  box-shadow: 0 0 18px rgba(115,17,212,.6);
  transition: all .3s ease;
}

.login-btn:hover {
  transform: translateY(-2px);
}

/* BOTÓN REGISTRAR */
.register-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin-top: 16px;
  padding: 12px;
  border-radius: 12px;
  background: rgba(155,77,255,.08);
  border: 1px solid rgba(155,77,255,.6);
  color: #b980ff;
  font-weight: bold;
  text-decoration: none;
  transition: all .3s ease;
  backdrop-filter: blur(6px);
}

.register-btn:hover {
  background: rgba(155,77,255,.2);
  box-shadow: 0 0 15px rgba(155,77,255,.5);
  transform: translateY(-2px);
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .layout {
    grid-template-columns: 1fr;
    padding: 25px;
  }

  .hero {
    display: none;
  }

  .login-box {
    max-width: 380px;
    margin: auto;
  }
}
</style>