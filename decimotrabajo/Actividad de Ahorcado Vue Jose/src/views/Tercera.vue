<template>
  <div class="wrap">
    <div class="nivel-card">

      <h1 class="titulo">Selecciona un Nivel</h1>

      <p class="categoria">
        Categoría: <strong>{{ categoria }}</strong>
      </p>

      <div 
        v-for="item in niveles"
        :key="item.nombre"
        class="opcion"
        @click="elegirNivel(item.nombre)"
      >
        <span class="icono">{{ item.icono }}</span>

        <div class="info">
          <h3>{{ item.nombre }}</h3>
          <p class="detalle">{{ item.detalle }}</p>
        </div>
      </div>
 <button class="btn-volver" @click="volverAtras">
  ⬅ Volver
</button>

    </div>
  </div>
</template>


<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();


const categoria = route.query.categoria || "Sin categoría";


function elegirNivel(nivel) {
  router.push({
    path: "/cuarta",
    query: {
      categoria: categoria,
      nivel: nivel
    }
  });
}

const niveles = [
  { nombre: "Fácil", detalle: "Palabras de nivel Facil • 8 intentos", icono: "😊" },
  { nombre: "Medio", detalle: "Palabras de nivel Medio • 6 intentos", icono: "😯" },
  { nombre: "Difícil", detalle: "Palabras de nivel Dificil • 5 intentos", icono: "🥵" }
];




function volverAtras() {
  router.back();
}

</script>


<style scoped>
.wrap {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #6a4cff, #b37bff, #e3c4ff);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.nivel-card {
  width: 100%;
  max-width: 480px;
  background: rgba(255,255,255,0.08);
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  border: 1px solid rgba(255,255,255,0.2);
  backdrop-filter: blur(8px);
}

.titulo {
  color: #fff;
  font-size: 32px;
  margin-bottom: 5px;
  text-shadow: 0 0 8px #c6a7ff;
}

.categoria {
  color: #eee;
  margin-bottom: 30px;
}

.opcion {
  display: flex;
  align-items: center;
  gap: 18px;
  background: rgba(255,255,255,0.12);
  padding: 16px;
  border-radius: 15px;
  margin-bottom: 18px;
  cursor: pointer;
  transition: 0.25s;
  border: 1px solid rgba(255,255,255,0.25);
}

.opcion:hover {
  background: rgba(255,255,255,0.19);
  transform: scale(1.03);
}

.icono {
  font-size: 40px;
}

.info h3 {
  margin: 0;
  color: #fff;
}

.detalle {
  margin: 0;
  font-size: 14px;
  color: #ddd;
}

.resultado {
  margin-top: 20px;
  color: #fff;
  font-size: 18px;
}

.btn-volver {
  background: #6a4cff;
  color: white;
  padding: 8px 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 15px;
  box-shadow: 0 2px 6px #0003;
  transition: 0.2s;
}

.btn-volver:hover {
  background: #5a3ce0;
  box-shadow: 0 3px 8px #0004;
}

</style>
