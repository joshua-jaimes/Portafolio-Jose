<template>
  <div class="wrap">

    <h1 class="title">🏆 Mejores Tiempos</h1>
    <p class="sub">Los jugadores más rápidos del ahorcado</p>

    
    <div class="podio" v-if="top3.length >= 3">
      <div class="puesto p2">
        <span class="num">2</span>
        <p>{{ top3[1].nombre }}</p>
        <small>{{ top3[1].tiempo }}</small>
      </div>

      <div class="puesto p1">
        <span class="num">1</span>
        <p>{{ top3[0].nombre }}</p>
        <small>{{ top3[0].tiempo }}</small>
      </div>

      <div class="puesto p3">
        <span class="num">3</span>
        <p>{{ top3[2].nombre }}</p>
        <small>{{ top3[2].tiempo }}</small>
      </div>
    </div>

    
    <div class="lista">
      <div v-for="(p, i) in puntajes" :key="i" class="item">
        <div class="left">
          <span class="circle">{{ i + 1 }}</span>
          <div>
            <p class="name">{{ p.nombre }}</p>
            <small>{{ p.categoria }} • {{ p.nivel }}</small>
          </div>
        </div>

        <div class="right">
          <p class="time">{{ p.tiempo }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const puntajes = ref([]);
const top3 = ref([]);

onMounted(() => {
  let data = JSON.parse(localStorage.getItem("ranking")) || [];

  
  data.sort((a, b) => a.segundos - b.segundos);

  puntajes.value = data;
  top3.value = data.slice(0, 3);
});
</script>

<style scoped>
.wrap {
  padding: 25px;
  max-width: 480px;
  margin: auto;
  text-align: center;
}

.title {
  font-size: 28px;
  font-weight: bold;
}

.sub {
  color: #666;
  margin-bottom: 25px;
}

.podio {
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
}

.puesto {
  background: #eee;
  padding: 12px;
  border-radius: 12px;
  width: 80px;
  box-shadow: 0 2px 6px #0002;
}

.p1 { background: #ffe066; }
.p2 { background: #d3d3d3; }
.p3 { background: #f4a261; }

.num {
  font-size: 20px;
  font-weight: bold;
}

.lista {
  margin-top: 10px;
}

.item {
  background: #fafafa;
  padding: 12px 14px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0 1px 4px #0002;
}

.left {
  display: flex;
  gap: 10px;
  text-align: left;
}

.circle {
  background: #6a4cff;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.name {
  font-weight: bold;
}

.time {
  font-weight: bold;
  color: #4a4;
}
</style>
