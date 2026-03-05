<template>
  <div class="lectura-page">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="navbar-container">
        <div class="navbar-logo">
          <div class="logo-icon">
            <q-icon name="all_inclusive" size="lg" class="text-primary" />
          </div>
          <span class="logo-text">Numera<span class="text-primary">.ai</span></span>
        </div>

        <div class="navbar-menu hide-lt-md">
          <a href="#" class="nav-link active">Lectura Diaria</a>
          <a href="#" class="nav-link">Carta Natal</a>
          <a href="#" class="nav-link">Ciclos</a>
          <div class="nav-divider"></div>
          <button class="profile-btn">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo7jua4TuBui7I5MhSvL2pRq7n7FfPefECxkmHh9JB6lr5scn0_QCZ5IMbNDgandiIoyYu0dwqn93MMd7TLigu9TRtmz6NLGnRJUyogZJGchCGGTtARQO8cUwpXcU1gVAN3yf1TWtO5e-yeS32DaSDNuVcUoEaM-FLiRM7kutPwZNhDCkQXzkzL0GSvdYVhhvFVDQLrM0NMQHNfuRbt_M1k_-iUwx8-OoWUAvt8nnQoWuBHU5JoKnhQE3M9hTSVTd3t2hIxzQ7sm4" alt="profile" class="profile-avatar" />
            <span>Mi Perfil</span>
          </button>
        </div>

        <button class="menu-btn hide-gt-sm">
          <q-icon name="menu" size="lg" />
        </button>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Decorative Background -->
      <div class="bg-decorative"></div>
      <div class="bg-glow right"></div>
      <div class="bg-glow left"></div>

      <div class="content-container">
        <!-- Header -->
        <header class="header-section">
          <div class="badge-pill">
            <q-icon name="auto_awesome" size="sm" class="text-primary" />
            <span>Lectura Generada por IA</span>
          </div>
          <h1 class="page-title">Tu Guía Diaria</h1>
          <p class="page-date">
  {{ lectura?.dia || '' }}
</p>
        </header>

        <!-- Main Reading Card -->
        <article class="reading-card">
          <div class="card-border-top"></div>
          <div class="card-border-bottom"></div>

          <div class="reading-grid">
            <!-- Left Column: Numerology -->
            <div class="reading-left">
              <div class="number-wrapper">
                <div class="number-glow"></div>
                <svg class="number-svg" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" stroke-width="1" class="opacity-30" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="1" class="opacity-60" />
                  <text x="50" y="60" font-size="40" text-anchor="middle" fill="#f4d525" class="text-glow">7</text>
                </svg>
              </div>

              <h3 class="vibration-title">Vibración Maestra</h3>
              <p class="vibration-desc">
                El número 7 representa la introspección, la sabiduría interior y la conexión espiritual profunda.
              </p>

              <div class="stats-grid">
                <div class="stat-item">
                  <span class="stat-label">Color</span>
                  <span class="stat-value">Violeta</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Planeta</span>
                  <span class="stat-value">Neptuno</span>
                </div>
              </div>
            </div>

            <!-- Right Column: Reading -->
            <div class="reading-right">
              <div class="reading-content">
                <div v-if="cargando">
  Generando tu lectura...
</div>

<div v-else-if="error">
  {{ error }}
</div>

<div v-else-if="lectura">

  <h2 class="reading-title">
    <q-icon name="wb_twilight" size="md" />
    Tu Lectura de Hoy
  </h2>

  <p 
    class="reading-text"
    style="white-space: pre-line;"
  >
    {{ lectura.contenido }}
  </p>

</div>
              </div>

              <!-- Actions -->
              <div class="actions-section">
                <button class="share-btn">
                  <q-icon name="share" size="sm" />
                  <span>Compartir Lectura</span>
                </button>

                <div class="action-buttons">
                  <button class="icon-btn" title="Guardar en Diario">
                    <q-icon name="bookmark_border" size="md" />
                  </button>
                  <button class="icon-btn" title="Me resuena">
                    <q-icon name="favorite_border" size="md" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>

        <!-- Related Content -->
        <div class="related-section">
          <a href="#" class="related-card">
            <div class="card-glow"></div>
            <div class="card-inner">
              <div class="card-icon">
                <q-icon name="calendar_month" size="md" />
              </div>
              <div class="card-text">
                <h4 class="card-title">Predicción Semanal</h4>
                <p class="card-desc">Descubre qué te deparan los próximos 7 días según tus ciclos.</p>
              </div>
            </div>
          </a>

          <a href="#" class="related-card">
            <div class="card-glow"></div>
            <div class="card-inner">
              <div class="card-icon">
                <q-icon name="diversity_3" size="md" />
              </div>
              <div class="card-text">
                <h4 class="card-title">Compatibilidad</h4>
                <p class="card-desc">Analiza la conexión numerológica con tu pareja o amigos.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="page-footer">
      <div class="footer-container">
        <p class="footer-text">© 2023 Numera.ai - Todos los derechos reservados.</p>
        <div class="footer-links">
          <a href="#">Privacidad</a>
          <a href="#">Términos</a>
          <a href="#">Ayuda</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useAuthStore } from "../stores/Auth"
import axiosInstance from "../plugins/pluginAxios"

const auth = useAuthStore()

const lectura = ref(null)
const cargando = ref(false)
const error = ref("")

const cargarLectura = async () => {
  try {
    console.log("Usuario:", auth.usuario)
    console.log("ID:", auth.usuario?._id)

    cargando.value = true

    const response = await axiosInstance.get(
      `/lecturas/diaria/${auth.usuario?._id}`
    )

    console.log("Respuesta backend:", response.data)

    lectura.value = response.data.lectura

  } catch (err) {
    console.log("Error:", err.response?.data)
    error.value =
      err.response?.data?.msg || "No tienes lectura hoy"
  } finally {
    cargando.value = false
  }
}

onMounted(() => {
  cargarLectura()
})
</script>

<style scoped lang="scss">
$primary: #f4d525;
$primary-dim: #bfa515;
$bg-dark: #221f10;
$mystic-purple: #2D1B36;
$mystic-purple-light: #3E2A4F;
$text-gray-light: #d1d5db;
$text-gray-dark: #9ca3af;

* { box-sizing: border-box; }

.lectura-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: $bg-dark;
  color: $text-gray-light;
}

// NAVBAR
.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba($bg-dark, 0.8);
  backdrop-filter: blur(12px);

  .navbar-container {
    max-width: 112rem;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;

    @media (max-width: 640px) {
      padding: 0 1rem;
    }
  }

  .navbar-logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-shrink: 0;

    .logo-icon {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      background: rgba($primary, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba($primary, 0.3);
    }

    .logo-text {
      font-family: 'Newsreader', serif;
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 0.05em;
      color: white;
      

      .text-primary {
        color: $primary;
      }
    }
  }

  .navbar-menu {
    display: flex;
    align-items: center;
    gap: 2rem;

    .nav-link {
      color: #d1d5db;
      text-decoration: none;
      font-size: 1.125rem;
      transition: color 0.3s;
      padding-bottom: 0.25rem;

      &:hover {
        color: white;
      }

      &.active {
        color: $primary;
        border-bottom: 2px solid $primary;
      }
    }

    .nav-divider {
      width: 1px;
      height: 1.5rem;
      background: rgba(255, 255, 255, 0.1);
    }

    .profile-btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #d1d5db;
      background: none;
      border: none;
      cursor: pointer;
      transition: color 0.3s;
      font-size: 1rem;

      &:hover {
        color: white;
      }

      .profile-avatar {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        border: 1px solid #4b5563;
        object-fit: cover;
      }
    }
  }

  .menu-btn {
    background: none;
    border: none;
    color: #d1d5db;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: white;
    }
  }
}

// MAIN CONTENT
.main-content {
  flex: 1;
  position: relative;
  background: linear-gradient(180deg, #3e2a4f 0%, $bg-dark 100%);
  overflow-y: auto;
}

.bg-decorative {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 600px;
  background: linear-gradient(to bottom, rgba($primary, 0.05), transparent);
  pointer-events: none;
}

.bg-glow {
  position: absolute;
  width: 24rem;
  height: 24rem;
  border-radius: 50%;
  filter: blur(96px);
  pointer-events: none;

  &.right {
    top: 80px;
    right: 40px;
    background: rgba($primary, 0.05);
  }

  &.left {
    bottom: 80px;
    left: 40px;
    background: rgba($mystic-purple-light, 0.2);
  }
}

.content-container {
  position: relative;
  z-index: 10;
  max-width: 56rem;
  margin: 0 auto;
  padding: 3rem 1rem;

  @media (max-width: 640px) {
    padding: 2rem 1rem;
  }
}

// HEADER
.header-section {
  text-align: center;
  margin-bottom: 3rem;

  .badge-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25rem 1rem;
    border-radius: 9999px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);
    margin-bottom: 1.5rem;
    font-size: 0.875rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #9ca3af;
  }

  .page-title {
    font-family: 'Newsreader', serif;
    font-size: 3.75rem;
    font-weight: 300;
    color: white;
    margin: 0 0 0.5rem 0;
    letter-spacing: -0.025em;

    @media (max-width: 768px) {
      font-size: 2.25rem;
    }
  }

  .page-date {
    font-size: 1.25rem;
    color: $primary;
    font-weight: 300;
    font-style: italic;
    margin: 0;
  }
}

// READING CARD
.reading-card {
  width: 100%;
  background: rgba($mystic-purple, 0.6);
  backdrop-filter: blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 20px -5px rgba($primary, 0.3);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  .card-border-top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, transparent, rgba($primary, 0.5), transparent);
  }

  .card-border-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, transparent, rgba($primary, 0.2), transparent);
  }

  .reading-grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 3rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  .reading-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    padding-right: 2rem;
    text-align: center;

    @media (max-width: 768px) {
      border-right: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding-right: 0;
      padding-bottom: 2rem;
    }

    .number-wrapper {
      position: relative;
      margin-bottom: 1.5rem;

      .number-glow {
        position: absolute;
        inset: 0;
        background: rgba($primary, 0.1);
        border-radius: 50%;
        filter: blur(24px);
        transform: scale(1.5);
        animation: pulse 3s ease-in-out infinite;
      }

      .number-svg {
        width: 8rem;
        height: 8rem;
        color: $primary;
        position: relative;
        z-index: 1;
        filter: drop-shadow(0 0 10px rgba($primary, 0.4));
      }
    }

    .vibration-title {
      font-size: 1.25rem;
      color: white;
      font-weight: 500;
      margin: 0 0 0.5rem 0;
    }

    .vibration-desc {
      font-size: 1rem;
      color: #9ca3af;
      line-height: 1.5;
      margin: 0 0 1.5rem 0;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      width: 100%;
      margin-top: 1.5rem;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);

      .stat-item {
        display: flex;
        flex-direction: column;

        .stat-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          color: #6b7280;
          letter-spacing: 0.05em;
          margin-bottom: 0.25rem;
        }

        .stat-value {
          color: $primary;
          font-weight: 500;
        }
      }
    }
  }

  .reading-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .reading-content {
    margin-bottom: 2rem;

    .reading-title {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 1.5rem;
      color: $primary;
      font-weight: 400;
      font-family: 'Newsreader', serif;
      margin: 0 0 1.5rem 0;
    }

    .reading-text {
      font-size: 1.125rem;
      color: #d1d5db;
      font-weight: 300;
      line-height: 2;
      margin: 0 0 1.5rem 0;

      strong {
        color: white;
        font-weight: 400;
      }
    }

    .reading-quote {
      border-left: 2px solid $primary;
      padding-left: 1.5rem;
      margin: 2rem 0;
      font-style: italic;
      color: white;
      font-size: 1.25rem;
      font-weight: 400;
      background: rgba(255, 255, 255, 0.05);
      padding: 1rem 1rem 1rem 1.5rem;
      border-radius: 0 0.5rem 0.5rem 0;
    }
  }

  .actions-section {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    @media (max-width: 640px) {
      flex-direction: column;
    }

    .share-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      width: 100%;
      padding: 0.75rem 2rem;
      background: $primary;
      color: $bg-dark;
      border: none;
      border-radius: 0.5rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s;
      box-shadow: 0 10px 20px -5px rgba($primary, 0.3);

      &:hover {
        background: $primary-dim;
        transform: scale(1.05);
      }

      @media (max-width: 640px) {
        width: 100%;
      }
    }

    .action-buttons {
      display: flex;
      gap: 0.5rem;
      margin-left: auto;

      @media (max-width: 640px) {
        margin-left: 0;
        width: 100%;
        justify-content: center;
      }

      .icon-btn {
        padding: 0.75rem;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: none;
        color: #9ca3af;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          color: $primary;
          border-color: rgba($primary, 0.5);
          background: rgba(255, 255, 255, 0.05);
        }
      }
    }
  }
}

// RELATED SECTION
.related-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 3rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .related-card {
    display: block;
    padding: 1.5rem;
    background: $bg-dark;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.75rem;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    transition: all 0.3s;

    &:hover {
      border-color: rgba($primary, 0.4);

      .card-glow {
        opacity: 1;
      }

      .card-title {
        color: $primary;
      }
    }

    .card-glow {
      position: absolute;
      inset: 0;
      background: linear-gradient(to right, transparent, rgba($primary, 0.05));
      opacity: 0;
      transition: opacity 0.3s;
    }

    .card-inner {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: flex-start;
      gap: 1rem;
    }

    .card-icon {
      padding: 0.75rem;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 0.5rem;
      color: $primary;
      flex-shrink: 0;
    }

    .card-text {
      flex: 1;

      .card-title {
        font-size: 1.125rem;
        color: white;
        font-weight: 500;
        margin: 0 0 0.5rem 0;
        transition: color 0.3s;
      }

      .card-desc {
        font-size: 0.875rem;
        color: #9ca3af;
        margin: 0;
      }
    }
  }
}

// FOOTER
.page-footer {
  background: $bg-dark;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  margin-top: 3rem;

  .footer-container {
    max-width: 112rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

   
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  .footer-text {
    font-size: 0.875rem;
    color: #6b7280;
    font-weight: 300;
    margin: 0;
  }

  .footer-links {
    display: flex;
    gap: 1.5rem;

    a {
      font-size: 0.875rem;
      color: #6b7280;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: $primary;
      }
    }
  }
}

// ANIMATIONS
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

// UTILITY CLASSES
.hide-lt-md {
  @media (max-width: 768px) {
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
</style>