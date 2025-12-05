<template>
  <div class="game-wrap">

    
    <div class="top-info">
  <div class="box">
    <p class="label">Categoría</p>
    <p class="value">{{ categoria }}</p>
  </div>

  <div class="box">
    <p class="label">Nivel</p>
    <p class="value">{{ nivel }}</p>
  </div>

  <div class="box">
    <p class="label">Intentos</p>
    <p class="value">{{ intentos }}/{{ maxIntentos }}</p>
  </div>

  <div class="box">
    <p class="label">Tiempo</p>
    <p class="value">{{ tiempo }}</p>
  </div>
</div>

    
<img 
  class="ahorcado-img" 
  :src="`/ahorcado/${intentos}.png`" 
  alt="Ahorcado"
/>


    
    <div class="palabra">
      <span 
        v-for="(l, i) in letrasMostradas"
        :key="i"
        class="letra"
      >
        {{ l }}
      </span>
    </div>

    
    <div class="pista">
      <strong>💡 Pista:</strong> {{ pista }}
    </div>

    
    <div class="teclado">
  <div class="fila fila1">
    <button v-for="l in abecedario.slice(0,10)" :key="l" class="btn" :disabled="usadas.includes(l)" @click="presionarLetra(l)">
      {{ l }}
    </button>
  </div>

  <div class="fila fila2">
    <button v-for="l in abecedario.slice(10,20)" :key="l" class="btn" :disabled="usadas.includes(l)" @click="presionarLetra(l)">
      {{ l }}
    </button>
  </div>

  <div class="fila fila3">
    <button v-for="l in abecedario.slice(20,27)" :key="l" class="btn" :disabled="usadas.includes(l)" @click="presionarLetra(l)">
      {{ l }}
    </button>
  </div>
</div>


    <div style="text-align:center; margin-top:30px;">
  <button class="btn-ranking" @click="irRanking">
    🏆 Ver Mejores Tiempos
  </button>
</div>



<q-dialog v-model="showModal" transition-show="scale" transition-hide="scale">
  <q-card class="glass-card">
    <q-card-section>
      <div class="text-h5 text-center neon-title">{{ modalTitulo }}</div>
      <div class="text-subtitle2 text-center q-mt-sm neon-text">{{ modalMensaje }}</div>
    </q-card-section>

    <q-card-actions align="center">
      <q-btn color="purple-5" glossy rounded label="Aceptar" v-close-popup />
    </q-card-actions>
  </q-card>
</q-dialog>


  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";

const showModal = ref(false);
const modalTitulo = ref("");
const modalMensaje = ref("");


const router = useRouter();


const route = useRoute();


const categoria = route.query.categoria || "Animales";


const nivelRaw = route.query.nivel || "Fácil";
const nivel = nivelRaw
  .replace("Fácil", "Facil")
  .replace("Difícil", "Dificil")
  .replace("Medio", "Medio");


const tiempoRestante = ref(
  nivel === "Facil" ? 90 :
  nivel === "Medio" ? 60 :
  40
);

let interval = null;


function verificarFin() {
  
  if (!letrasMostradas.value.includes("_")) {
    clearInterval(interval);

    
    const final = tiempoRestante.value;
    guardarPuntaje(final, tiempo.value);

   modalTitulo.value = "🎉 ¡Ganaste!";
modalMensaje.value = "Lograste adivinar la palabra.";
showModal.value = true;

    return;
  }

  
  if (intentos.value >= maxIntentos) {
    clearInterval(interval);

    modalTitulo.value = "❌ Perdiste";
modalMensaje.value = "La palabra era: " + palabra;
showModal.value = true;

    return;
  }
}








const tiempo = computed(() => {
  const m = String(Math.floor(tiempoRestante.value / 60)).padStart(2,"0");
  const s = String(tiempoRestante.value % 60).padStart(2,"0");
  return `${m}:${s}`;
});


onMounted(() => {
  interval = setInterval(() => {
    if (tiempoRestante.value > 0) {
      tiempoRestante.value--;
    } else {
      clearInterval(interval);
      modalTitulo.value = "⏳ Tiempo agotado";
modalMensaje.value = "No alcanzaste a adivinar la palabra.";
showModal.value = true;

    }
  }, 1000);
});


onBeforeUnmount(() => {
  if (interval) clearInterval(interval);
});

function irRanking() {
  router.push("/quinta");
}

  
const banco = {
  Animales: {
    Facil: [
      { palabra: "GATO", pista: "Maúlla" },
      { palabra: "LORO", pista: "Habla mucho" },
      { palabra: "PERRO", pista: "El mejor amigo" },
      { palabra: "FOKA", pista: "Vive en zonas frías" },
      { palabra: "ARAÑA", pista: "Tiene 8 patas" },
      { palabra: "OSO", pista: "Duerme en invierno" },
      { palabra: "PEZ", pista: "Vive en el agua" }
    ],
    Medio: [
      { palabra: "ELEFANTE", pista: "Animal gigante" },
      { palabra: "JIRAFA", pista: "Cuello largo" },
      { palabra: "DELFIN", pista: "Muy inteligente" },
      { palabra: "PINGUINO", pista: "No vuela" },
      { palabra: "BISONTE", pista: "Muy robusto" },
      { palabra: "LEOPARDO", pista: "Tiene manchas" },
      { palabra: "COCODRILO", pista: "Gran mordida" }
    ],
    Dificil: [
      { palabra: "ORNITORRINCO", pista: "Animal raro" },
      { palabra: "HIPOPOTAMO", pista: "Muy pesado" },
      { palabra: "RINOCERONTE", pista: "Gran cuerno" },
      { palabra: "CAMALEON", pista: "Cambia de color" },
      { palabra: "ESCORPION", pista: "Tiene aguijón" },
      { palabra: "MARIPOSA", pista: "Colorida" },
      { palabra: "AVESTRUZ", pista: "Corre mucho" }
    ]
  },

  Paises: {
    Facil: [
      { palabra: "COLOMBIA", pista: "Café y esmeraldas" },
      { palabra: "CHILE", pista: "País largo" },
      { palabra: "PERU", pista: "Machu Picchu" },
      { palabra: "MEXICO", pista: "Mariachis" },
      { palabra: "CANADA", pista: "Muy frío" },
      { palabra: "BRASIL", pista: "Fútbol" },
      { palabra: "ARGENTINA", pista: "Tango" }
    ],
    Medio: [
      { palabra: "SUECIA", pista: "Vikingos" },
      { palabra: "PORTUGAL", pista: "Cristiano Ronaldo" },
      { palabra: "AUSTRALIA", pista: "Canguros" },
      { palabra: "JAPON", pista: "Tecnología" },
      { palabra: "CHINA", pista: "Muralla" },
      { palabra: "TURQUIA", pista: "Santa Sofía" },
      { palabra: "NORUEGA", pista: "Auroras" }
    ],
    Dificil: [
      { palabra: "KAZAJISTAN", pista: "Asia central" },
      { palabra: "UZBEKISTAN", pista: "Asia central" },
      { palabra: "LITUANIA", pista: "País báltico" },
      { palabra: "AZERBAIYAN", pista: "Cáucaso" },
      { palabra: "ARMENIA", pista: "Cáucaso" },
      { palabra: "BANGLADESH", pista: "Asia sur" },
      { palabra: "SINGAPUR", pista: "Ciudad-estado" }
    ]
  },

  Deportes: {
    Facil: [
      { palabra: "FUTBOL", pista: "Arcos y balón" },
      { palabra: "TENIS", pista: "Raqueta" },
      { palabra: "BOXEO", pista: "Guantes" },
      { palabra: "GOLF", pista: "Hoyos" },
      { palabra: "RUGBY", pista: "Pelota ovalada" },
      { palabra: "NATACION", pista: "Piscina" },
      { palabra: "ATLETISMO", pista: "Corre rápido" }
    ],
    Medio: [
      { palabra: "CICLISMO", pista: "Bicicleta" },
      { palabra: "BALONMANO", pista: "Manos" },
      { palabra: "JUDO", pista: "Arte marcial" },
      { palabra: "KARATE", pista: "Golpes" },
      { palabra: "PATINAJE", pista: "Ruedas" },
      { palabra: "ESGRIMA", pista: "Espadas" },
      { palabra: "TAEKWONDO", pista: "Patadas" }
    ],
    Dificil: [
      { palabra: "TRIATLON", pista: "3 disciplinas" },
      { palabra: "EQUITACION", pista: "Caballos" },
      { palabra: "HALTEROFILIA", pista: "Pesas" },
      { palabra: "ESCALADA", pista: "Montañas" },
      { palabra: "SNOWBOARD", pista: "Nieve" },
      { palabra: "VELERISMO", pista: "Barcos" },
      { palabra: "BADMINTON", pista: "Raquetas y pluma" }
    ]
  },

  Frutas: {
    Facil: [
      { palabra: "MANGO", pista: "Dulce tropical" },
      { palabra: "PERA", pista: "Verde" },
      { palabra: "LIMON", pista: "Ácido" },
      { palabra: "MANZANA", pista: "Roja o verde" },
      { palabra: "BANANO", pista: "Amarillo" },
      { palabra: "UVA", pista: "Pequeñas" },
      { palabra: "KIWI", pista: "Verde por dentro" }
    ],
    Medio: [
      { palabra: "PAPAYA", pista: "Naranja" },
      { palabra: "MANDARINA", pista: "Cítrico" },
      { palabra: "MARACUYA", pista: "Pulpa ácida" },
      { palabra: "SANDIA", pista: "Roja grande" },
      { palabra: "MELOCOTON", pista: "Durazno" },
      { palabra: "GUANABANA", pista: "Blanca dulce" },
      { palabra: "CEREZA", pista: "Roja pequeña" }
    ],
    Dificil: [
      { palabra: "GRANADILLA", pista: "Cáscara dura" },
      { palabra: "MANGOSTINO", pista: "Exótica" },
      { palabra: "CARAMBOLO", pista: "Forma de estrella" },
      { palabra: "TAMARINDO", pista: "Árbol alto" },
      { palabra: "ARANDANO", pista: "Pequeño azul" },
      { palabra: "PITAHAYA", pista: "Fruta dragón" },
      { palabra: "MORA", pista: "Morada o roja" }
    ]
  },

  Peliculas: {
    Facil: [
      { palabra: "TITANIC", pista: "Barco" },
      { palabra: "AVATAR", pista: "Azules" },
      { palabra: "COCO", pista: "Día de muertos" },
      { palabra: "SHREK", pista: "Ogro" },
      { palabra: "FROZEN", pista: "Hielo" },
      { palabra: "JOKER", pista: "Payaso" },
      { palabra: "RAPIDOS", pista: "Carreras" }
    ],
    Medio: [
      { palabra: "INCEPTION", pista: "Sueños" },
      { palabra: "NARNIA", pista: "Reino mágico" },
      { palabra: "CORALINE", pista: "Botones" },
      { palabra: "GLADIADOR", pista: "Roma" },
      { palabra: "KINGKONG", pista: "Gorila gigante" },
      { palabra: "HARRY", pista: "Magia" },
      { palabra: "INTERESTELAR", pista: "Espacio" }
    ],
    Dificil: [
      { palabra: "SCARFACE", pista: "Tony Montana" },
      { palabra: "OLDBOY", pista: "Venganza" },
      { palabra: "HEREDITARY", pista: "Terror fuerte" },
      { palabra: "WHIPLASH", pista: "Baterista" },
      { palabra: "MEMENTO", pista: "Memoria" },
      { palabra: "BLADERUNNER", pista: "Futurista" },
      { palabra: "INCENDIES", pista: "Drama profundo" }
    ]
  },

  Ciencia: {
    Facil: [
      { palabra: "ATOMO", pista: "Muy pequeño" },
      { palabra: "CELULA", pista: "Unidad de vida" },
      { palabra: "AGUA", pista: "H2O" },
      { palabra: "ENERGIA", pista: "Se transforma" },
      { palabra: "PLANTA", pista: "Hace fotosíntesis" },
      { palabra: "SOL", pista: "Estrella cercana" },
      { palabra: "LUNA", pista: "Satélite" }
    ],
    Medio: [
      { palabra: "GALAXIA", pista: "Muchas estrellas" },
      { palabra: "NEURONA", pista: "Célula nerviosa" },
      { palabra: "PROTON", pista: "Carga positiva" },
      { palabra: "GRAVEDAD", pista: "Nos atrae" },
      { palabra: "ECOSISTEMA", pista: "Vida interactuando" },
      { palabra: "FOTON", pista: "Luz" },
      { palabra: "ATOMICO", pista: "Relacionado a átomos" }
    ],
    Dificil: [
      { palabra: "TERMODINAMICA", pista: "Calor y energía" },
      { palabra: "ASTROFISICA", pista: "Espacio" },
      { palabra: "GENETICA", pista: "ADN" },
      { palabra: "CRISPR", pista: "Edición genética" },
      { palabra: "MICROBIOLOGIA", pista: "Microorganismos" },
      { palabra: "NEUROCIENCIA", pista: "Cerebro" },
      { palabra: "BIOTECNOLOGIA", pista: "Tecnología biológica" }
    ]
  }
};


const lista = banco[categoria]?.[nivel] || [];
const seleccion = lista[Math.floor(Math.random() * lista.length)];

const palabra = seleccion.palabra;
const pista = seleccion.pista;


const usadas = ref([]);
const letras = palabra.split("");

const intentos = ref(0);
const maxIntentos = 6;



const imagenAhorcado = computed(() => `/ahorcado/${intentos.value}.png`);


const abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");


const letrasMostradas = computed(() =>
  letras.map((l) => (usadas.value.includes(l) ? l : "_"))
);


function presionarLetra(letra) {
  if (usadas.value.includes(letra)) return;

  usadas.value.push(letra);

  if (!palabra.includes(letra)) {
    intentos.value++;
  }

  verificarFin();
}









function guardarPuntaje(tiempoFinalSegundos, tiempoTexto) {
  const jugador = localStorage.getItem("jugador") || "Sin Nombre";
  const categoria = route.query.categoria || "???";
  const nivel = route.query.nivel || "???";

  let ranking = JSON.parse(localStorage.getItem("ranking")) || [];

  ranking.push({
    nombre: jugador,
    categoria,
    nivel,
    tiempo: tiempoTexto,
    segundos: tiempoFinalSegundos
  });

  localStorage.setItem("ranking", JSON.stringify(ranking));
}





</script>

<style scoped>
.game-wrap {
  padding: 20px;
  min-height: 100vh;
  background: linear-gradient(135deg, #c9d6ff, #e2e2e2);
}

.top-info {
  display: flex;
  gap: 15px;
  margin-bottom: 40px;
  justify-content: center;
}

.box {
  background: white;
  padding: 12px 18px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  text-align: center;
}

.label {
  margin: 0;
  font-size: 12px;
  color: #666;
}

.value {
  margin: 0;
  font-weight: bold;
}

.palabra {
  display: flex;
  justify-content: center;
  gap: 12px;
  font-size: 32px;
  margin-bottom: 20px;
}

.letra {
  border-bottom: 2px solid black;
  width: 28px;
  text-align: center;
}

.pista {
  background: #fff3bf;
  padding: 10px;
  margin: 0 auto 40px;
  max-width: 500px;
  border-radius: 8px;
  border-left: 5px solid #ffd43b;
}

.teclado {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.btn {
  padding: 10px;
  width: 40px;
  background: #5f8bff;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-weight: bold;
  transition: 0.2s;
  
}

.btn:disabled {
  background: #b5b5b5;
  cursor: not-allowed;
}


.ahorcado {
  font-family: monospace;
 
  font-size: 18px;
  text-align: center;
  margin: 20px 0;
}



.btn-ranking {
  background: #6a4cff;
  padding: 12px 18px;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 2px 6px #0003;
  transition: 0.2s;
}

.btn-ranking:hover {
  transform: scale(1.05);
  box-shadow: 0 3px 10px #0004;
}

.ahorcado-img {
  width: 290px;
  height: auto;
  margin: 10px auto 25px;
  display: block;
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


.fila {
  display: grid;
  gap: 8px;
  margin-bottom: 10px;
}

.fila1 {
  grid-template-columns: repeat(10, 1fr);
}

.fila2 {
  grid-template-columns: repeat(10, 1fr);
}

.fila3 {
  grid-template-columns: repeat(7, 1fr);
}

.btn {
  width: 100%;
  height: 40px;
}

</style>
