<template>
  <div class="dashboard-page">
    <!-- Sidebar -->
    <aside class="sidebar hide-lt-md">
      <div class="logo-box">
        <div class="logo-icon">
          <q-icon name="auto_awesome" size="lg" />
        </div>
        <h3 class="logo-text">Num<span class="primary">AI</span></h3>
      </div>

      <nav class="nav-menu">
        <a href="#" class="nav-item active">
          <q-icon name="dashboard" />
          <span>Inicio</span>
        </a>
        <a href="#" class="nav-item">
          <q-icon name="library_books" />
          <span>Mis Lecturas</span>
        </a>
        <a href="#" class="nav-item">
          <q-icon name="psychology" />
          <span>Consultas AI</span>
        </a>
        <a href="#" class="nav-item">
          <q-icon name="analytics" />
          <span>Tendencias</span>
        </a>

        <div class="nav-divider">
          <p class="divider-text">Cuenta</p>
          <a href="#" class="nav-item">
            <q-icon name="card_membership" />
            <span>Membresía</span>
          </a>
          <a href="#" class="nav-item">
            <q-icon name="settings" />
            <span>Configuración</span>
          </a>
        </div>
      </nav>

      <div class="user-profile">
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJx4eLv1skOsEEfsPV0qDIYSErReSPjx-hO9UyaGI9jOlijk8lQ7xcNRvRTzxD4n1PEHnQGuobGqbZ0bjGqEkOApGiS5mDyTxFAyj0NbjakEH7ptwCFziWRrC2Gfen3stPaj-pAH5ZbQWIXLkTn2rRj2CHgvOZZlmSduCrQV3XnkFZlrPJxpo_4oOZmbPvoTZoiqVP_Ofz2VePL2LBRJG9vNQYeW2KQTshVsic5Ag5syLaaE32FqcPni4osBYCQir8SSwH7H2wvp8" alt="user" class="user-avatar" />
        <div class="user-info">
          <p class="user-name">{{ nombreUsuario }}</p>
          <p class="user-plan">Plan Místico Pro</p>
        </div>
        <button class="logout-btn">
          <q-icon name="logout" />
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Background Glow -->
      <div class="bg-glow"></div>

      <!-- Header -->
      <header class="top-header">
        <h1 class="header-title hide-lt-md">Panel Principal</h1>
        <div class="logo-mobile hide-gt-sm">
          <q-icon name="auto_awesome" size="md" class="text-primary" />
          <span class="font-bold">NumAI</span>
        </div>

        <div class="header-right">
          <button class="notif-btn">
            <q-icon name="notifications" size="md" />
            <span class="notif-badge"></span>
          </button>
          <div class="header-divider"></div>
          <div class="credits-box">
            <q-icon name="stars" size="sm" class="text-gold" />
            <span>120 Créditos</span>
          </div>
        </div>
      </header>

      <!-- Scrollable Content -->
      <div class="content-scroll">
        <!-- Welcome Section -->
        <section class="welcome-section">
          <div class="welcome-content">
            <div>
             <h2 class="welcome-title">Hola Bienvenido {{ nombreUsuario }}</h2>
              <p class="welcome-subtitle">Las estrellas se alinean a tu favor. Hoy es un día de vibración <span class="text-primary font-bold">7</span>.</p>
            </div>
            <div class="life-number hide-lt-md">
              <span class="life-label">Número de Vida</span>
              <div class="gold-text">11</div>
            </div>
          </div>
        </section>

        <!-- Main Grid -->
        <div class="main-grid">
          <!-- Left Column -->
          <div class="grid-left">
            <!-- Quick Actions -->
            <div class="quick-actions">
              <!-- Generate Reading Card -->
              <div class="action-card primary-card" @click="irALecturaDiaria">
                <div class="card-glow"></div>
                <div class="card-content">
                  <div class="card-icon-box">
                    <q-icon name="add" size="md" />
                  </div>
                  <h3 class="card-title">Generar Lectura</h3>
                  <p class="card-desc">Crea un nuevo reporte numerológico completo con IA.</p>
                  <div class="card-action">
                    <span>Empezar ahora</span>
                    <q-icon name="arrow_forward" size="sm" />
                  </div>
                </div>
              </div>

              <!-- Ask AI Card -->
              <div class="action-card light-card">
                <div class="card-glow-light"></div>
                <div class="card-content">
                  <div class="card-icon-box-light">
                    <q-icon name="chat" size="md" />
                  </div>
                  <h3 class="card-title-dark">Consultar Oráculo AI</h3>
                  <p class="card-desc-dark">Haz una pregunta específica sobre tu destino o carrera.</p>
                  <div class="card-action-primary">
                    <span>Consultar</span>
                    <q-icon name="arrow_forward" size="sm" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Recent History -->
            <div class="history-card">
              <div class="history-header">
                <h3 class="history-title">Historial Reciente</h3>
                <a href="#" class="view-all">Ver todo</a>
              </div>
              <div class="history-list">
                <!-- Item 1 -->
                <div class="history-item">
                  <div class="item-icon">
                    <q-icon name="description" size="md" />
                  </div>
                  <div class="item-content">
                    <h4 class="item-title">Carta Natal Numerológica</h4>
                    <p class="item-date">Generado el 14 Oct, 2023</p>
                  </div>
                  <div class="item-status hide-lt-sm">
                    <span class="status-badge completed">Completado</span>
                  </div>
                  <button class="item-action">
                    <q-icon name="visibility" size="md" />
                  </button>
                </div>

                <!-- Item 2 -->
                <div class="history-item">
                  <div class="item-icon">
                    <q-icon name="favorite" size="md" />
                  </div>
                  <div class="item-content">
                    <h4 class="item-title">Compatibilidad de Pareja</h4>
                    <p class="item-date">Generado el 10 Oct, 2023</p>
                  </div>
                  <div class="item-status hide-lt-sm">
                    <span class="status-badge completed">Completado</span>
                  </div>
                  <button class="item-action">
                    <q-icon name="visibility" size="md" />
                  </button>
                </div>

                <!-- Item 3 -->
                <div class="history-item">
                  <div class="item-icon">
                    <q-icon name="work" size="md" />
                  </div>
                  <div class="item-content">
                    <h4 class="item-title">Proyección Laboral 2024</h4>
                    <p class="item-date">Generado el 05 Oct, 2023</p>
                  </div>
                  <div class="item-status hide-lt-sm">
                    <span class="status-badge draft">Borrador</span>
                  </div>
                  <button class="item-action">
                    <q-icon name="edit" size="md" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <div class="grid-right">
            <!-- Membership Widget -->
            <div class="membership-card">
              <div class="membership-glow"></div>
              <div class="membership-content">
                <div class="membership-header">
                  <div>
                    <p class="membership-label">Estado de Membresía</p>
                    <p class="membership-name">Plan Místico Pro</p>
                  </div>
                  <q-icon name="verified" size="lg" class="text-gold" />
                </div>

                <div class="credits-progress">
                  <div class="progress-label">
                    <span>Créditos de IA</span>
                    <span class="progress-value">85/100</span>
                  </div>
                  <div class="progress-bar">
                    <div class="progress-fill" style="width: 85%"></div>
                  </div>
                </div>

                <button class="upgrade-btn">
                  <q-icon name="upgrade" size="sm" />
                  <span>Mejorar Plan</span>
                </button>

                <p class="renew-date">Renueva: 25 Oct, 2023</p>
              </div>
            </div>

            <!-- Daily Insight -->
            <div class="insight-card">
              <div class="insight-header">
                <div class="insight-icon-box">
                  <q-icon name="light_mode" size="sm" class="text-primary" />
                </div>
                <h3 class="insight-title">Mensaje del Día</h3>
              </div>

              <div class="insight-image">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmzxKVwFmh3odbHG9n7xxxSgS1MbxMDyJIl1tSTcAroY4pJ_qoDAUp79qwbr7N-EWyJhx0l19g_S_4OgQlx8bSv46Vqmq5muxC0r4RiINmoVW1gjHXNmd48A4dXhsRqcbi-EjeOOzPlTl-QVX4_0poU_-g0JaAiPGLHTTuQaUGRrIccc1T2UBVQ3raPRV35AmT2tM_O935MNFXZqII0cuV2Rpd0xtixxZKGTjmRmg2S05aJSt2ccC38RokfEZG7gmjlhf1LeGp3Jk" alt="starry night" class="insight-img" />
                <div class="insight-overlay">
                  <p class="insight-quote">"El universo no comete errores, solo ajustes de curso."</p>
                </div>
              </div>

              <div class="insight-details">
                <div class="insight-item">
                  <span class="insight-label">Color de poder</span>
                  <div class="insight-value">
                    <span class="color-dot indigo"></span>
                    <span>Indigo</span>
                  </div>
                </div>
                <div class="insight-item">
                  <span class="insight-label">Hora mágica</span>
                  <span class="insight-value">14:00 PM</span>
                </div>
              </div>
            </div>

            <!-- Upcoming Cycles -->
            <div class="cycles-card">
              <h3 class="cycles-title">Próximos Ciclos</h3>
              <ul class="cycles-list">
                <li class="cycle-item active">
                  <div class="cycle-date">
                    <span class="cycle-month">OCT</span>
                    <span class="cycle-day">22</span>
                  </div>
                  <div class="cycle-content">
                    <p class="cycle-name">Inicio de Ciclo Personal 5</p>
                    <p class="cycle-desc">Cambios y libertad</p>
                  </div>
                </li>
                <li class="cycle-item">
                  <div class="cycle-date">
                    <span class="cycle-month">NOV</span>
                    <span class="cycle-day">01</span>
                  </div>
                  <div class="cycle-content">
                    <p class="cycle-name">Luna Nueva en Escorpio</p>
                    <p class="cycle-desc">Intención profunda</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <footer class="dashboard-footer">
          <p>© 2023 Numerología AI. Todos los derechos reservados.</p>
        </footer>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useAuthStore } from "../stores/Auth.js"
import { computed } from "vue"

import { ref } from 'vue'

const sidebarOpen = ref(false)

const auth = useAuthStore()

const nombreUsuario = computed(() => auth.usuario?.nombre || "")

import { useRouter } from 'vue-router'

const router = useRouter()

const irALecturaDiaria = () => {
  router.push({ name: 'LecturaDiaria' })
}




console.log("USUARIO DEL STORE:", auth.usuario)

</script>




<style scoped lang="scss">
$primary: #7311d4;
$primary-light: #9c4ddb;
$gold: #D4AF37;
$gold-light: #F3E5AB;
$bg: #191022;
$surface: #231630;
$surface-darker: #140c1c;
$gray-800: #1f2937;
$gray-700: #374151;
$gray-400: #9ca3af;
$gray-300: #d1d5db;
$gray-200: #e5e7eb;
$gray-100: #f3f4f6;

* { box-sizing: border-box; }

.dashboard-page {
  display: flex;
  height: 100vh;
  background: $bg;
  color: $gray-300;
}

// SIDEBAR
.sidebar {
  width: 16rem;
  background: #fff;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  z-index: 20;
  
  @media (prefers-color-scheme: dark) {
    background: $surface-darker;
    border-right-color: #1f2937;
  }

  .logo-box {
    padding: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    .logo-icon {
      width: 2rem;
      height: 2rem;
      border-radius: 0.5rem;
      background: $primary;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }

    .logo-text {
      font-size: 1.25rem;
      font-weight: 700;
      letter-spacing: -0.025em;
      color: #111;

      @media (prefers-color-scheme: dark) {
        color: white;
      }

      .primary {
        color: $primary;
      }
    }
  }

  .nav-menu {
    flex: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .nav-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    border-radius: 0.75rem;
    color: #6b7280;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s;
    cursor: pointer;

    @media (prefers-color-scheme: dark) {
      color: #9ca3af;
    }

    &:hover {
      background: #f3f4f6;
      color: #111;

      @media (prefers-color-scheme: dark) {
        background: rgba(255, 255, 255, 0.05);
        color: white;
      }
    }

    &.active {
      background: rgba($primary, 0.1);
      color: $primary;

      @media (prefers-color-scheme: dark) {
        background: rgba($primary, 0.1);
        color: $primary-light;
      }
    }
  }

  .nav-divider {
    padding-top: 1rem;
    margin-top: 1rem;
    border-top: 1px solid #e5e7eb;

    @media (prefers-color-scheme: dark) {
      border-top-color: #1f2937;
    }

    .divider-text {
      font-size: 0.75rem;
      font-weight: 600;
      color: #9ca3af;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: 0 1rem;
      margin-bottom: 0.5rem;
    }
  }

  .user-profile {
    padding: 1rem;
    border-top: 1px solid #e5e7eb;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    @media (prefers-color-scheme: dark) {
      border-top-color: #1f2937;
    }

    .user-avatar {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 9999px;
      border: 2px solid rgba($primary, 0.3);
      object-fit: cover;
    }

    .user-info {
      flex: 1;
      min-width: 0;

      .user-name {
        font-size: 0.875rem;
        font-weight: 500;
        color: #111;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        @media (prefers-color-scheme: dark) {
          color: white;
        }
      }

      .user-plan {
        font-size: 0.75rem;
        color: #6b7280;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        @media (prefers-color-scheme: dark) {
          color: #9ca3af;
        }
      }
    }

    .logout-btn {
      background: none;
      border: none;
      color: #9ca3af;
      cursor: pointer;
      transition: color 0.2s;

      &:hover {
        color: #111;

        @media (prefers-color-scheme: dark) {
          color: white;
        }
      }
    }
  }
}

// MAIN CONTENT
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  position: relative;

  .bg-glow {
    position: absolute;
    top: 0;
    right: 0;
    width: 31.25rem;
    height: 31.25rem;
    background: rgba($primary, 0.2);
    border-radius: 50%;
    filter: blur(120px);
    transform: translateY(-50%) translateX(50%);
    pointer-events: none;
    z-index: 0;
  }
}

// HEADER
.top-header {
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  border-bottom: 1px solid #e5e7eb;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(12px);
  z-index: 10;
  position: sticky;
  top: 0;

  @media (prefers-color-scheme: dark) {
    border-bottom-color: #1f2937;
    background: rgba($surface-darker, 0.5);
  }

  .header-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #111;

    @media (prefers-color-scheme: dark) {
      color: white;
    }
  }

  .logo-mobile {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 700;
    color: #111;

    @media (prefers-color-scheme: dark) {
      color: white;
    }
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .notif-btn {
    background: none;
    border: none;
    color: #9ca3af;
    cursor: pointer;
    position: relative;
    transition: color 0.2s;

    &:hover {
      color: $primary;
    }

    .notif-badge {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      width: 0.5rem;
      height: 0.5rem;
      background: #ef4444;
      border-radius: 50%;
      border: 2px solid white;

      @media (prefers-color-scheme: dark) {
        border-color: $surface-darker;
      }
    }
  }

  .header-divider {
    width: 1px;
    height: 2rem;
    background: #e5e7eb;

    @media (prefers-color-scheme: dark) {
      background: #374151;
    }
  }

  .credits-box {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: $gold;
    background: rgba($gold, 0.1);
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    border: 1px solid rgba($gold, 0.2);
  }
}

// CONTENT SCROLL
.content-scroll {
  flex: 1;
  overflow-y: auto;
  padding: 1rem 2rem;
  z-index: 10;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba($primary, 0.3);
    border-radius: 4px;

    &:hover {
      background: rgba($primary, 0.5);
    }
  }
}

// WELCOME SECTION
.welcome-section {
  margin-bottom: 2rem;

  .welcome-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 1rem;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .welcome-title {
    font-size: 1.875rem;
    font-weight: 700;
    color: #111;
    margin-bottom: 0.25rem;

    @media (prefers-color-scheme: dark) {
      color: white;
    }
  }

  .welcome-subtitle {
    color: #6b7280;

    @media (prefers-color-scheme: dark) {
      color: #9ca3af;
    }
  }

  .life-number {
    text-align: right;

    .life-label {
      font-size: 0.875rem;
      color: #9ca3af;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-weight: 600;
    }

    .gold-text {
      font-size: 3rem;
      font-weight: 700;
      background: linear-gradient(to right, $gold, $gold-light, $gold);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      filter: drop-shadow(0 0 8px rgba($gold, 0.3));
    }
  }
}

// MAIN GRID
.main-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}

.grid-left {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.grid-right {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

// QUICK ACTIONS
.quick-actions {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }

  .action-card {
    border-radius: 1.5rem;
    padding: 1.5rem;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.3s;

    &.primary-card {
      background: linear-gradient(135deg, $primary 0%, #500a96 100%);
      color: white;
      box-shadow: 0 10px 30px rgba($primary, 0.2);

      &:hover {
        box-shadow: 0 10px 40px rgba($primary, 0.4);
      }

      .card-glow {
        position: absolute;
        top: 0;
        right: 0;
        width: 15rem;
        height: 15rem;
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><text x="0" y="20" font-size="150" fill="white" opacity="0.1">✨</text></svg>');
        background-size: contain;
        opacity: 0.1;
      }
    }

    &.light-card {
      background: white;
      border: 1px solid #e5e7eb;
      transition: all 0.2s;

      @media (prefers-color-scheme: dark) {
        background: $surface;
        border-color: #374151;
      }

      &:hover {
        border-color: rgba($primary, 0.5);

        @media (prefers-color-scheme: dark) {
          border-color: rgba($primary, 0.5);
        }
      }

      .card-glow-light {
        position: absolute;
        top: 0;
        right: 0;
        opacity: 0.05;
      }
    }
  }

  .card-content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }

  .card-icon-box {
    width: 2.5rem;
    height: 2.5rem;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    color: white;
  }

  .card-icon-box-light {
    width: 2.5rem;
    height: 2.5rem;
    background: rgba($primary, 0.1);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    color: $primary;
  }

  .card-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
  }

  .card-title-dark {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
    color: #111;

    @media (prefers-color-scheme: dark) {
      color: white;
    }
  }

  .card-desc {
    font-size: 0.875rem;
    opacity: 0.8;
  }

  .card-desc-dark {
    font-size: 0.875rem;
    color: #6b7280;

    @media (prefers-color-scheme: dark) {
      color: #9ca3af;
    }
  }

  .card-action {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    margin-top: 1.5rem;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(0.25rem);
    }
  }

  .card-action-primary {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    margin-top: 1.5rem;
    color: $primary;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(0.25rem);
    }
  }
}

// HISTORY CARD
.history-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 1.5rem;
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background: $surface;
    border-color: rgba(#374151, 0.5);
  }

  .history-header {
    padding: 1.5rem;
    border-bottom: 1px solid #e5e7eb;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (prefers-color-scheme: dark) {
      border-bottom-color: rgba(#374151, 0.5);
    }

    .history-title {
      font-weight: 700;
      font-size: 1.125rem;
      color: #111;

      @media (prefers-color-scheme: dark) {
        color: white;
      }
    }

    .view-all {
      font-size: 0.875rem;
      color: $primary;
      text-decoration: none;
      font-weight: 500;

      &:hover {
        color: $primary-light;
      }
    }
  }

  .history-list {
    list-style: none;
    padding: 0;
    margin: 0;
    border-top: 1px solid #e5e7eb;

    @media (prefers-color-scheme: dark) {
      border-top-color: rgba(#374151, 0.5);
    }

    .history-item {
      padding: 1rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      border-bottom: 1px solid #e5e7eb;
      transition: background 0.2s;

      @media (prefers-color-scheme: dark) {
        border-bottom-color: rgba(#374151, 0.5);

        &:hover {
          background: rgba(255, 255, 255, 0.05);
        }
      }

      &:hover {
        background: #f9fafb;
      }

      .item-icon {
        width: 2.5rem;
        height: 2.5rem;
        background: rgba($primary, 0.1);
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $primary;
        flex-shrink: 0;
      }

      .item-content {
        flex: 1;
        min-width: 0;

        .item-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: #111;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;

          @media (prefers-color-scheme: dark) {
            color: white;
          }
        }

        .item-date {
          font-size: 0.75rem;
          color: #6b7280;

          @media (prefers-color-scheme: dark) {
            color: #9ca3af;
          }
        }
      }

      .item-status {
        .status-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.375rem 0.625rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 500;

          &.completed {
            background: rgba(34, 197, 94, 0.1);
            color: #16a34a;

            @media (prefers-color-scheme: dark) {
              background: rgba(34, 197, 94, 0.1);
              color: #86efac;
            }
          }

          &.draft {
            background: rgba(234, 179, 8, 0.1);
            color: #a16207;

            @media (prefers-color-scheme: dark) {
              background: rgba(234, 179, 8, 0.1);
              color: #facc15;
            }
          }
        }
      }

      .item-action {
        background: none;
        border: none;
        color: #9ca3af;
        cursor: pointer;
        transition: color 0.2s;

        &:hover {
          color: $primary;
        }
      }
    }
  }
}

// MEMBERSHIP CARD
.membership-card {
  background: linear-gradient(to bottom, $surface, $surface-darker);
  border: 1px solid rgba($gold, 0.3);
  border-radius: 1.5rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;

  .membership-glow {
    position: absolute;
    top: -2.5rem;
    right: -2.5rem;
    width: 8rem;
    height: 8rem;
    background: rgba($gold, 0.1);
    border-radius: 50%;
    filter: blur(2rem);
  }

  .membership-content {
    position: relative;
    z-index: 1;
  }

  .membership-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;

    .membership-label {
      font-size: 0.875rem;
      color: #9ca3af;
      font-weight: 500;
    }

    .membership-name {
      font-size: 1.25rem;
      font-weight: 700;
      color: white;
      margin-top: 0.25rem;
    }
  }

  .credits-progress {
    margin-bottom: 1.5rem;

    .progress-label {
      display: flex;
      justify-content: space-between;
      font-size: 0.875rem;
      color: #9ca3af;
      margin-bottom: 0.75rem;

      .progress-value {
        color: white;
        font-weight: 500;
      }
    }

    .progress-bar {
      width: 100%;
      height: 0.5rem;
      background: #374151;
      border-radius: 9999px;
      overflow: hidden;

      .progress-fill {
        height: 100%;
        background: linear-gradient(to right, $primary, $primary-light);
        border-radius: 9999px;
      }
    }
  }

  .upgrade-btn {
    width: 100%;
    padding: 0.625rem 1rem;
    background: $gold;
    color: $surface-darker;
    border: none;
    border-radius: 0.5rem;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: all 0.2s;

    &:hover {
      background: $gold-light;
    }
  }

  .renew-date {
    font-size: 0.75rem;
    text-align: center;
    color: #6b7280;
    margin-top: 0.75rem;
  }
}

// INSIGHT CARD
.insight-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 1.5rem;
  padding: 1.5rem;
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background: $surface;
    border-color: rgba(#374151, 0.5);
  }

  .insight-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;

    .insight-icon-box {
      width: 2rem;
      height: 2rem;
      background: rgba($primary, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .insight-title {
      font-weight: 700;
      color: #111;

      @media (prefers-color-scheme: dark) {
        color: white;
      }
    }
  }

  .insight-image {
    position: relative;
    width: 100%;
    aspect-ratio: 16/10;
    border-radius: 0.75rem;
    overflow: hidden;
    margin-bottom: 1rem;
   

    .insight-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.7s;

      &:hover {
        transform: scale(1.1);
      }
    }

    .insight-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
      padding: 1rem;
      display: flex;
      align-items: flex-end;

      .insight-quote {
        color: white;
        font-style: italic;
        font-size: 0.875rem;
        font-weight: 500;
      }
    }
  }

  .insight-details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .insight-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem;
      border-radius: 0.5rem;
      background: #f9fafb;

      @media (prefers-color-scheme: dark) {
        background: rgba(255, 255, 255, 0.05);
      }

      .insight-label {
        font-size: 0.875rem;
        color: #6b7280;

        @media (prefers-color-scheme: dark) {
          color: #9ca3af;
        }
      }

      .insight-value {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.875rem;
        font-weight: 500;
        color: #111;

        @media (prefers-color-scheme: dark) {
          color: white;
        }

        .color-dot {
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 50%;

          &.indigo {
            background: #6366f1;
          }
        }
      }
    }
  }
}

// CYCLES CARD
.cycles-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 1.5rem;
  padding: 1.5rem;

  @media (prefers-color-scheme: dark) {
    background: $surface;
    border-color: rgba(#374151, 0.5);
  }

  .cycles-title {
    font-weight: 700;
    color: #111;
    margin-bottom: 1rem;

    @media (prefers-color-scheme: dark) {
      color: white;
    }
  }

  .cycles-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .cycle-item {
      display: flex;
      gap: 0.75rem;

      .cycle-date {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 3rem;
        text-align: center;

        .cycle-month {
          font-size: 0.75rem;
          font-weight: 700;
          color: #9ca3af;
          text-transform: uppercase;
        }

        .cycle-day {
          font-size: 1.25rem;
          font-weight: 700;
          color: #111;

          @media (prefers-color-scheme: dark) {
            color: white;
          }
        }
      }

      .cycle-content {
        border-left: 2px solid #e5e7eb;
        padding-left: 0.75rem;

        @media (prefers-color-scheme: dark) {
          border-left-color: rgba(#374151, 0.5);
        }

        .cycle-name {
          font-size: 0.875rem;
          font-weight: 600;
          color: #111;
          margin: 0;

          @media (prefers-color-scheme: dark) {
            color: white;
          }
        }

        .cycle-desc {
          font-size: 0.75rem;
          color: #6b7280;
          margin: 0;

          @media (prefers-color-scheme: dark) {
            color: #9ca3af;
          }
        }
      }

      &.active {
        .cycle-date {
          .cycle-month {
            color: $primary;
          }

          .cycle-day {
            color: $primary;
          }
        }

        .cycle-content {
          border-left-color: $primary;
        }
      }
    }
  }
}

// FOOTER
.dashboard-footer {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
  text-align: center;
  font-size: 0.75rem;
  color: #9ca3af;

  @media (prefers-color-scheme: dark) {
    border-top-color: #1f2937;
  }

  p {
    margin: 0;
  }
}

// UTILITY CLASSES
.hide-lt-md {
  @media (max-width: 768px) {
    display: none;
  }
}

.hide-lt-sm {
  @media (max-width: 640px) {
    display: none;
  }
}

.hide-gt-sm {
  @media (min-width: 640px) {
    display: none;
  }
}

.text-primary {
  color: $primary;
}

.text-gold {
  color: $gold;
}

.font-bold {
  font-weight: 700;
}
</style>