<template>
  <div class="wrap">
    <div class="game-card">
      <div class="header-zone">
        <div class="icon-spin">🎮</div>
        <h1 class="title">Ahorcado Neon</h1>
        <p class="subtitle">Descifra la palabra secreta antes que las luces se apaguen</p>
      </div>

      <div class="hangman-area">
        <div class="halo"></div>
        <div class="stick body"></div>
        <div class="stick head"></div>
        <div class="stick arm-left"></div>
        <div class="stick arm-right"></div>
        <div class="stick leg-left"></div>
        <div class="stick leg-right"></div>
      </div>

<div class="user-box">
  <input v-model="nombre" placeholder="Escribe tu nombre" />
  <button class="btn-user" @click="guardarNombre">Guardar</button>
</div>



      <q-btn color="primary" label="Jugar" to="/segunda"/><br>


 
<q-dialog v-model="mostrarModal" transition-show="scale" transition-hide="scale">
  <q-card class="glass-card">

    <q-card-section>
      <div class="text-h5 text-center neon-title">{{ tituloModal }}</div>
      <div class="text-subtitle2 text-center q-mt-sm neon-text">
        {{ mensajeModal }}
      </div>
    </q-card-section>

    <q-card-actions align="center">
      <q-btn color="purple-5" glossy rounded label="Aceptar" v-close-popup />
    </q-card-actions>

  </q-card>
</q-dialog>


    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const nombre = ref("");


function guardarNombre() {
  if (nombre.value.trim() === "") {
    tituloModal.value = "Falta tu nombre";
    mensajeModal.value = "Por favor escribe un nombre.";
    mostrarModal.value = true;
    return;
  }

  localStorage.setItem("jugador", nombre.value);

  tituloModal.value = "Guardado";
  mensajeModal.value = "Tu nombre ha sido guardado.";
  mostrarModal.value = true;
}


const mostrarModal = ref(false)
const tituloModal = ref("")
const mensajeModal = ref("")

function abrirModal(titulo, mensaje) {
  tituloModal.value = titulo
  mensajeModal.value = mensaje
  mostrarModal.value = true
}

</script>


<style scoped>

.wrap {
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(circle at top, #a179ff, #E0E1DD, #C5C6C7);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}


.game-card {
  width: 100%;
  max-width: 520px;
  background: rgba(255,255,255,0.1);
  border-radius: 25px;
  padding: 35px;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.25);
  text-align: center;
  animation: fadeIn 0.8s ease;
  box-shadow: 0 0 25px rgba(255,255,255,0.2);
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}


.icon-spin {
  font-size: 50px;
  animation: spin 4s linear infinite;
  margin-bottom: 10px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}


.title {
  font-size: 2.4rem;
  color: #fff;
  text-shadow: 0 0 8px #c79aff, 0 0 15px #b76aff;
}

.subtitle {
  color: #f0e8ff;
  font-size: 1rem;
  opacity: 0.9;
  margin-bottom: 25px;
}


.hangman-area {
  width: 180px;
  height: 200px;
  margin: 0 auto 25px;
  position: relative;
}

.halo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(circle, #fff, #b77aff33, transparent);
  position: absolute;
  top: 10px;
  left: 30px;
  filter: blur(8px);
  z-index: 1;
}

.stick {
  background: #fff;
  position: absolute;
  box-shadow: 0 0 6px #fff;
}

.head {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  top: 30px;
  left: 68px;
  background: transparent;
  border: 4px solid #fff;
}

.body {
  width: 4px;
  height: 60px;
  top: 75px;
  left: 89px;
}

.arm-left {
  width: 45px;
  height: 4px;
  top: 100px;
  left: 45px;
  transform: rotate(-20deg);
}

.arm-right {
  width: 45px;
  height: 4px;
  top: 100px;
  left: 90px;
  transform: rotate(20deg);
}

.leg-left {
  width: 40px;
  height: 4px;
  top: 150px;
  left: 55px;
  transform: rotate(40deg);
}

.leg-right {
  width: 40px;
  height: 4px;
  top: 150px;
  left: 92px;
  transform: rotate(-40deg);
}


.btn-start {
  background: linear-gradient(45deg, #ae7bff, #c08aff);
  border: none;
  padding: 12px 32px;
  font-size: 1.2rem;
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
  text-shadow: 0 0 4px #fff;
  box-shadow: 0 0 12px #c495ff;
  transition: 0.25s;
}

.btn-start:hover {
  transform: scale(1.07);
  box-shadow: 0 0 18px #d8b1ff;
}

.user-box {
  margin-bottom: 20px;
}

.user-box input {
  padding: 8px;
  width: 70%;
  border-radius: 8px;
  border: none;
  margin-bottom: 8px;
}

.btn-user {
  padding: 8px 16px;
  background: #8d5bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.btn-user:hover {
  background: #7a4df5;
}

.glass-card {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 18px;
  box-shadow: 0 0 20px rgba(170, 120, 255, 0.4);
  padding: 15px;
}

.neon-title {
  color: #e4c3ff;
  text-shadow: 0 0 8px #d2a1ff, 0 0 12px #c480ff;
}

.neon-text {
  color: #f3e6ff;
  opacity: 0.9;
}


</style>
