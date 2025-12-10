<template>
  <div class="contenedor">
    <h2 class="titulo">Elige una categoría</h2>

    <div class="grid">
      <router-link
  v-for="cat in categorias"
  :key="cat.texto"
  :to="{
    path: '/tercera',
    query: { categoria: cat.texto }
  }"
  class="card"
  :style="{ background: cat.color }"
>
  <span class="emoji">{{ cat.icono }}</span>
  <p class="texto">{{ cat.texto }}</p>
</router-link>

    </div>

    <button class="btn-volver" @click="volverAtras">
  ⬅ Volver
</button>

  </div>
</template>

<script setup>

  import { useRouter } from "vue-router";
const router = useRouter();

function volverAtras() {
  router.back();
}

const categorias = [
  { texto: "Frutas", icono: "🍎", color: "linear-gradient(45deg,#ff9a9e,#fad0c4)", ruta: "/frutas" },
  { texto: "Animales", icono: "🦁", color: "linear-gradient(45deg,#a1c4fd,#c2e9fb)", ruta: "/animales" },
  { texto: "Paises", icono: "🌍", color: "linear-gradient(45deg,#84fab0,#8fd3f4)", ruta: "/paises" },
  { texto: "Deportes", icono: "⚽", color: "linear-gradient(45deg,#f6d365,#fda085)", ruta: "/deportes" },
  { texto: "Peliculas", icono: "🎬", color: "linear-gradient(45deg,#667eea,#764ba2)", ruta: "/peliculas" },
  { texto: "Ciencia", icono: "🔬", color: "linear-gradient(45deg,#e0c3fc,#8ec5fc)", ruta: "/ciencia" }
];
</script>

<style scoped>
.contenedor {
  max-width: 950px;
  margin: auto;
  padding: 28px;
  text-align: center;
}

.titulo {
  font-size: 35px;
  margin-bottom: 53px;
  font-weight: bold;
}

.grid {
  display: grid;
  gap: 26px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}


.card {
  padding: 35px;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  transition: 0.25s;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 23px;
  text-decoration: none; 
}

.card:hover {
  transform: scale(1.04);
  opacity: 0.95;
}

.emoji {
  font-size: 50px;
  margin-bottom: 15px;
}

.texto {
  margin-top: 5px;
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
  margin-top: 1.1rem;
}

.btn-volver:hover {
  background: #5a3ce0;
  box-shadow: 0 3px 8px #0004;
}

</style>
