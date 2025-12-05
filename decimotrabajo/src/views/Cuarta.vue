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
    </div>

    <!-- AHORCADO -->
<pre class="ahorcado">{{ dibujoAhorcado }}</pre>

    
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
      <button 
        v-for="(b, i) in abecedario"
        :key="i"
        class="btn"
        :disabled="usadas.includes(b)"
        @click="presionarLetra(b)"
      >
        {{ b }}
      </button>
    </div>

  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();


const categoria = route.query.categoria || "Animales";


const nivelRaw = route.query.nivel || "Fácil";
const nivel = nivelRaw
  .replace("Fácil", "Facil")
  .replace("Difícil", "Dificil")
  .replace("Medio", "Medio");


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

// DIBUJOS DEL AHORCADO
const dibujos = [
String.raw`
               
               
               
               
               
               
               
               
               
               
===============
`,
String.raw`
     |         
     |         
     |         
     |         
     |         
     |         
     |         
     |         
     |         
     |         
===============
`,
String.raw`
   +-----+     
     |         
     |         
     |         
     |         
     |         
     |         
     |         
     |         
     |         
===============
`,
String.raw`
   +------+     
     |    O    
     |         
     |         
     |         
     |         
     |         
     |         
     |         
     |         
===============
`,
String.raw`
   +------+     
     |    O    
     |    |    
     |    |    
     |         
     |         
     |         
     |         
     |         
     |         
===============
`,
String.raw`
   +------+     
     |    O    
     |   /|\   
     |    |    
     |         
     |         
     |         
     |         
     |         
     |         
===============
`,
String.raw`
   +------+     
     |    O    
     |   /|\   
     |    |    
     |   / \   
     |         
     |         
     |         
     |         
     |         
===============
`
];



// Computed del dibujo
const dibujoAhorcado = computed(() => dibujos[intentos.value]);



const abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");


const letrasMostradas = computed(() =>
  letras.map((l) => (usadas.value.includes(l) ? l : "_"))
);


function presionarLetra(letra) {
  usadas.value.push(letra);

  if (!palabra.includes(letra)) {
    intentos.value++;
  }
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

</style>
