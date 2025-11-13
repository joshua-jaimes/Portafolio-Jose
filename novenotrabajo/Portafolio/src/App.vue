<template>
  <div class="q-pa-md flex flex-center">
    <q-card class="my-card q-pa-md" bordered>
      <h2 class="text-center text-primary">🛒 Carrito de Compras</h2>

      <div v-for="(p, i) in productos" :key="i" class="q-mb-sm">
        <q-card flat bordered class="q-pa-sm flex items-center justify-between">
          <div>
            <h6>{{ p.nombre }}</h6>
            <p class="text-grey">${{ p.precio }}</p>
          </div>
          <div class="row items-center">
            <q-btn
              dense
              round
              icon="remove"
              color="negative"
              @click="p.cantidad--"
              :disable="p.cantidad === 0"
            />
            <q-badge color="primary" class="q-mx-sm">{{ p.cantidad }}</q-badge>
            <q-btn dense round icon="add" color="positive" @click="p.cantidad++" />
          </div>
        </q-card>
      </div>

      <q-separator spaced />

      <div class="text-center">
        <p>Total items: {{ totalItems }}</p>
        <p>Subtotal: ${{ subtotal.toFixed(2) }}</p>
        <p>Impuesto (16%): ${{ impuesto.toFixed(2) }}</p>
        <h5 class="text-primary">Total a pagar: ${{ totalFinal.toFixed(2) }}</h5>
      </div>

      <q-separator spaced />

      <q-alert
        v-if="totalFinal > 1000"
        color="warning"
        icon="warning"
        class="q-mt-md"
      >
        ⚠️ Tu carrito supera los $1000
      </q-alert>

      <q-alert
        v-if="guardado"
        color="positive"
        icon="check_circle"
        class="q-mt-md"
      >
        ✅ Carrito guardado automáticamente
      </q-alert>
    </q-card>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const productos = ref([
  { nombre: "Laptop Dell", precio: 899, cantidad: 0 },
  { nombre: "Mouse Logitech", precio: 25, cantidad: 0 },
  { nombre: "Teclado Mecánico", precio: 89, cantidad: 0 },
  { nombre: 'Monitor 24"', precio: 199, cantidad: 0 },
  { nombre: "Webcam HD", precio: 59, cantidad: 0 },
]);

const guardado = ref(false);

const totalItems = computed(() => productos.value.reduce((t, p) => t + p.cantidad, 0));
const subtotal = computed(() => productos.value.reduce((t, p) => t + p.precio * p.cantidad, 0));
const impuesto = computed(() => subtotal.value * 0.16);
const totalFinal = computed(() => subtotal.value + impuesto.value);

watch(
  productos,
  (nuevo) => {
    localStorage.setItem("carrito", JSON.stringify(nuevo));
    guardado.value = true;
    setTimeout(() => (guardado.value = false), 1200);
  },
  { deep: true }
);

watch(totalFinal, (nuevo) => {
  if (nuevo > 1000) console.log("Compra grande detectada");
});
</script>

<style scoped>
.my-card {
  width: 520px;
  max-width: 95%;
}
</style>
