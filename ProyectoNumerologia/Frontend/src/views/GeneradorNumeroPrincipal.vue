<template>
  <div class="generador-page">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="navbar-container">
        <div class="navbar-logo">
          <div class="logo-icon">
            <q-icon name="auto_awesome" size="lg" class="text-primary" />
          </div>
          <span class="logo-text">Cosmos<span class="text-primary">AI</span></span>
        </div>

        <div class="navbar-menu hide-lt-md">
          <a href="#" class="nav-link active">Generador</a>
          <a href="#" class="nav-link">Historial</a>
          <a href="#" class="nav-link">Carta Astral</a>
          <a href="#" class="nav-link">Membresía</a>
        </div>

        <div class="user-profile hide-lt-md">
          <div class="user-info">
            <span class="user-name">Sofia R.</span>
            <span class="user-plan">Plan Místico Pro</span>
          </div>
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIRWmWe95HA1QP-6296LakYAL2vTUkDsNeRi-uPxvXpAzFelIZ8MhJT_n6pg580KS4uE3Odv5IWV9nd_SuAmZ4ruTzB9Gs8wypmFIYAFfRK3MWH4t5zqs7b_ZesmayBxxTC8G4XM2ZQnj_YOF6qje4Z8FUzxjv_VImhOzQzAsCyDlB7B9HOmts_EX94WxbC5Dkwp4DyAESQKCxZ5U8ypBas6g-7wojP8F18HHZe4ELVLj-cLV88erL747spejC55DXO7hxwHk7Jhc" alt="Sofia" class="user-avatar" />
        </div>

        <button class="menu-btn hide-gt-sm">
          <q-icon name="menu" size="lg" />
        </button>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="main-content">
      <div class="content-container">
        <div class="layout-grid">
          <!-- Left Column: Input Form -->
          <div class="left-column">
            <!-- Input Card -->
            <div class="input-card">
              <div class="card-header-bg"></div>
              <div class="card-content">
                <h2 class="card-title">
                  <span>Nueva Lectura</span>
                  <q-icon name="lens_blur" size="sm" class="text-primary pulse" />
                </h2>
                <p class="card-subtitle">Ingresa tus datos para conectar con el cosmos.</p>

                <form class="form-space">
                  <!-- Name Field -->
                  <div class="form-group">
                    <label class="form-label">Nombre Completo</label>
                    <div class="form-input-wrapper">
                      <q-icon name="person" class="form-icon" />
                      <input v-model="form.name" type="text" placeholder="Ej: Maria González" class="form-input" />
                    </div>
                  </div>

                  <!-- Birth Date Field -->
                  <div class="form-group">
                    <label class="form-label">Fecha de Nacimiento</label>
                    <div class="form-input-wrapper">
                      <q-icon name="calendar_today" class="form-icon" />
                      <input v-model="form.birthdate" type="date" class="form-input" />
                    </div>
                  </div>

                  <!-- Reading Type -->
                  <div class="form-group">
                    <label class="form-label">Tipo de Lectura</label>
                    <div class="reading-buttons">
                      <button type="button" class="reading-btn active">
                        <q-icon name="stars" size="sm" />
                        <span>Esencial</span>
                      </button>
                      <button type="button" class="reading-btn">
                        <q-icon name="timeline" size="sm" />
                        <span>Predictiva</span>
                      </button>
                    </div>
                  </div>

                  <!-- Submit Button -->
                  <button type="button" class="submit-btn cosmic-pulse">
                    <q-icon name="auto_awesome" size="sm" />
                    <span>Generar Interpretación IA</span>
                  </button>
                </form>
              </div>
            </div>

            <!-- Membership Card -->
            <div class="membership-card">
              <div class="membership-gradient"></div>
              <div class="membership-content">
                <div class="membership-header">
                  <div>
                    <h3 class="membership-title">Membresía Pro</h3>
                    <p class="membership-date">Renueva en 12 días</p>
                  </div>
                  <span class="active-badge">Activa</span>
                </div>

                <div class="credits-section">
                  <div class="credits-label">
                    <span>Créditos IA</span>
                    <span class="credits-value">45 / 50</span>
                  </div>
                  <div class="progress-bar">
                    <div class="progress-fill" style="width: 90%"></div>
                  </div>
                </div>

                <button class="manage-btn">
                  <span>Gestionar Plan</span>
                  <q-icon name="arrow_forward" size="sm" />
                </button>
              </div>
            </div>
          </div>

          <!-- Right Column: Results -->
          <div class="right-column">
            <!-- Quick Stats -->
            <div class="stats-grid">
              <!-- Life Path Number -->
              <div class="stat-card">
                <div class="card-glow"></div>
                <q-icon name="alt_route" size="xl" class="card-bg-icon" />
                <h3 class="stat-label">Número de Vida</h3>
                <div class="stat-number">
                  <span class="number">7</span>
                  <span class="name">El Buscador</span>
                </div>
                <p class="stat-desc">Búsqueda de la verdad, análisis profundo y misticismo.</p>
              </div>

              <!-- Soul Number -->
              <div class="stat-card">
                <div class="card-glow"></div>
                <q-icon name="favorite_border" size="xl" class="card-bg-icon" />
                <h3 class="stat-label">Número de Alma</h3>
                <div class="stat-number">
                  <span class="number">9</span>
                  <span class="name">El Humanitario</span>
                </div>
                <p class="stat-desc">Compasión universal, sacrificio y cierre de ciclos.</p>
              </div>

              <!-- Destiny Number -->
              <div class="stat-card">
                <div class="card-glow"></div>
                <q-icon name="explore" size="xl" class="card-bg-icon" />
                <h3 class="stat-label">Número de Destino</h3>
                <div class="stat-number">
                  <span class="number">4</span>
                  <span class="name">El Constructor</span>
                </div>
                <p class="stat-desc">Orden, servicio, estabilidad y construcción sólida.</p>
              </div>
            </div>

            <!-- AI Interpretation -->
            <div class="interpretation-card">
              <div class="interpretation-header">
                <div class="header-left">
                  <div class="ai-icon-box">
                    <q-icon name="smart_toy" size="sm" class="text-primary" />
                  </div>
                  <h3 class="interpretation-title">Interpretación Cósmica IA</h3>
                </div>
                <div class="header-actions">
                  <button class="action-btn" title="Copiar">
                    <q-icon name="content_copy" size="sm" />
                  </button>
                  <button class="action-btn" title="Guardar PDF">
                    <q-icon name="picture_as_pdf" size="sm" />
                  </button>
                  <button class="action-btn" title="Compartir">
                    <q-icon name="share" size="sm" />
                  </button>
                </div>
              </div>

              <div class="interpretation-content">
                <div class="intro-block">
                  <p class="intro-greeting">Hola Elena,</p>
                  <p>Tu perfil numerológico presenta una combinación fascinante entre la introspección profunda del <span class="highlight">7</span> y la estructura pragmática del <span class="highlight">4</span>. Aquí está tu análisis detallado para este ciclo.</p>
                </div>

                <div class="content-sections">
                  <h4 class="section-title">
                    <q-icon name="psychology" size="sm" />
                    Análisis de Personalidad
                  </h4>
                  <p>Como Número de Vida 7, posees una mente analítica natural. No te conformas con las apariencias superficiales; necesitas entender el "por qué" y el "cómo" de todo lo que te rodea.</p>
                  <p>La clave para ti, Elena, está en usar tu intelecto (7) para crear sistemas tangibles y duraderos (4). No te pierdas solo en la teoría.</p>

                  <div class="challenges-grid">
                    <div class="challenge-box">
                      <h5 class="box-title challenges">Desafíos</h5>
                      <ul class="challenge-list">
                        <li>Tendencia al aislamiento excesivo.</li>
                        <li>Rigidez mental cuando las cosas cambian.</li>
                        <li>Escepticismo que bloquea la intuición.</li>
                      </ul>
                    </div>
                    <div class="challenge-box">
                      <h5 class="box-title potentials">Potencialidades</h5>
                      <ul class="challenge-list">
                        <li>Capacidad de especialización única.</li>
                        <li>Honestidad y lealtad inquebrantables.</li>
                        <li>Resolución de problemas complejos.</li>
                      </ul>
                    </div>
                  </div>

                  <h4 class="section-title">
                    <q-icon name="event" size="sm" />
                    Proyección de Ciclo Actual
                  </h4>
                  <p>Actualmente estás transitando un Año Personal 5. Esto introduce una energía dinámica que contrasta con tu naturaleza 4. Prepárate para cambios inesperados y nuevas oportunidades de aprendizaje.</p>
                </div>
              </div>

              <div class="interpretation-footer">
                <button class="regenerate-btn">
                  <q-icon name="refresh" size="sm" />
                  <span>Regenerar con nuevo enfoque</span>
                </button>
              </div>
            </div>

            <!-- Energy Balance -->
            <div class="balance-card">
              <h3 class="balance-title">Balance Energético</h3>
              <div class="balance-content">
                <div class="radar-chart">
                  <div class="radar-circles"></div>
                  <div class="balance-label">Equilibrio</div>
                </div>

                <div class="balance-bars">
                  <div class="bar-item">
                    <div class="bar-label">
                      <span>Mental</span>
                      <span class="bar-value">85%</span>
                    </div>
                    <div class="bar-track">
                      <div class="bar-fill" style="width: 85%; background: linear-gradient(90deg, #7311d4, #a855f7);"></div>
                    </div>
                  </div>

                  <div class="bar-item">
                    <div class="bar-label">
                      <span>Emocional</span>
                      <span class="bar-value">40%</span>
                    </div>
                    <div class="bar-track">
                      <div class="bar-fill" style="width: 40%; background: linear-gradient(90deg, #ec4899, #f472b6);"></div>
                    </div>
                  </div>

                  <div class="bar-item">
                    <div class="bar-label">
                      <span>Espiritual</span>
                      <span class="bar-value">75%</span>
                    </div>
                    <div class="bar-track">
                      <div class="bar-fill" style="width: 75%; background: linear-gradient(90deg, #6366f1, #818cf8);"></div>
                    </div>
                  </div>

                  <div class="bar-item">
                    <div class="bar-label">
                      <span>Físico</span>
                      <span class="bar-value">60%</span>
                    </div>
                    <div class="bar-track">
                      <div class="bar-fill" style="width: 60%; background: linear-gradient(90deg, #ec4899, #f472b6);"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="page-footer">
      <div class="footer-container">
        <p class="footer-text">© 2023 CosmosAI Numerología. Todos los derechos reservados.</p>
        <div class="footer-links">
          <a href="#">Términos</a>
          <a href="#">Privacidad</a>
          <a href="#">Soporte</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: 'Elena Ramirez',
  birthdate: '1992-08-15'
})
</script>

<style scoped lang="scss">
$primary: #7311d4;
$bg-dark: #191022;
$card-dark: #241b30;
$text-gray-light: #f3f4f6;
$text-gray-dark: #9ca3af;

* { box-sizing: border-box; }

.generador-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: $bg-dark;
  color: $text-gray-light;
}

@keyframes cosmic-pulse {
  0% { box-shadow: 0 0 0 0 rgba($primary, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba($primary, 0); }
  100% { box-shadow: 0 0 0 0 rgba($primary, 0); }
}

// NAVBAR
.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(#f7f6f8, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background: rgba($bg-dark, 0.8);
    border-bottom-color: rgba(255, 255, 255, 0.1);
  }

  .navbar-container {
    max-width: 112rem;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
  }

  .navbar-logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    .logo-icon {
      background: rgba($primary, 0.2);
      padding: 0.5rem;
      border-radius: 0.5rem;
    }

    .logo-text {
      font-size: 1.25rem;
      font-weight: 700;
      letter-spacing: -0.025em;
      color: #111;

      @media (prefers-color-scheme: dark) {
        color: white;
      }

      .text-primary {
        color: $primary;
      }
    }
  }

  .navbar-menu {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-left: 2.5rem;

    @media (max-width: 768px) {
      display: none;
    }

    .nav-link {
      color: #4b5563;
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 500;
      padding: 0.5rem 0.75rem;
      border-radius: 0.375rem;
      transition: all 0.3s;

      @media (prefers-color-scheme: dark) {
        color: #d1d5db;
      }

      &:hover {
        color: #111;

        @media (prefers-color-scheme: dark) {
          color: white;
        }
      }

      &.active {
        background: rgba($primary, 0.1);
        color: $primary;
        font-weight: 600;
      }
    }
  }

  .user-profile {
    display: flex;
    align-items: center;
    gap: 1rem;

    .user-info {
      text-align: right;

      .user-name {
        font-size: 0.875rem;
        font-weight: 700;
        color: #111;

        @media (prefers-color-scheme: dark) {
          color: white;
        }
      }

      .user-plan {
        font-size: 0.75rem;
        color: $primary;
        font-weight: 500;
      }
    }

    .user-avatar {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      border: 2px solid $primary;
      object-fit: cover;
    }
  }

  .menu-btn {
    background: none;
    border: none;
    color: #4b5563;
    cursor: pointer;

    @media (prefers-color-scheme: dark) {
      color: #d1d5db;
    }
  }
}

// MAIN CONTENT
.main-content {
  flex: 1;
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
}

.content-container {
  max-width: 112rem;
  margin: 0 auto;
}

.layout-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}

// LEFT COLUMN
.left-column {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

// INPUT CARD
.input-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (prefers-color-scheme: dark) {
    background: $card-dark;
    border-color: rgba(255, 255, 255, 0.05);
  }

  .card-header-bg {
    height: 2rem;
    background: linear-gradient(to bottom right, $primary, #7c3aed, #000);
    opacity: 0.2;
  }

  .card-content {
    padding: 1.5rem;
  }

  .card-title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 0 0.5rem 0;
    color: #111;

    @media (prefers-color-scheme: dark) {
      color: white;
    }

    .pulse {
      animation: pulse 2s infinite;
    }
  }

  .card-subtitle {
    font-size: 0.875rem;
    color: #6b7280;
    margin: 0 0 1.5rem 0;

    @media (prefers-color-scheme: dark) {
      color: #9ca3af;
    }
  }

  .form-space {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;

    .form-label {
      font-size: 0.875rem;
      font-weight: 500;
      color: #374151;

      @media (prefers-color-scheme: dark) {
        color: #d1d5db;
      }
    }

    .form-input-wrapper {
      position: relative;
      display: flex;
      align-items: center;

      .form-icon {
        position: absolute;
        left: 0.75rem;
        color: #9ca3af;
        pointer-events: none;
      }

      .form-input {
        width: 100%;
        padding: 0.75rem 0.75rem 0.75rem 2.5rem;
        background: #f9fafb;
        border: 1px solid #d1d5db;
        border-radius: 0.5rem;
        font-size: 0.875rem;
        color: #111;
        transition: all 0.3s;

        @media (prefers-color-scheme: dark) {
          background: $bg-dark;
          border-color: rgba(255, 255, 255, 0.1);
          color: white;
        }

        &:focus {
          outline: none;
          border-color: $primary;
          box-shadow: 0 0 0 2px rgba($primary, 0.1);
        }
      }
    }
  }

  .reading-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;

    .reading-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.75rem;
      border: 2px solid #d1d5db;
      background: white;
      border-radius: 0.5rem;
      color: #6b7280;
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s;

      @media (prefers-color-scheme: dark) {
        background: $bg-dark;
        border-color: rgba(255, 255, 255, 0.1);
        color: #9ca3af;
      }

      &.active {
        border-color: $primary;
        background: rgba($primary, 0.1);
        color: $primary;
      }

      &:hover:not(.active) {
        border-color: #9ca3af;
      }
    }
  }

  .submit-btn {
    width: 100%;
    padding: 0.875rem 1rem;
    background: $primary;
    color: white;
    border: none;
    border-radius: 0.5rem;
    font-weight: 700;
    font-size: 0.875rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1rem;
    transition: all 0.3s;

    &:hover {
      background: #6a0dad;
      transform: translateY(-2px);
    }

    &.cosmic-pulse {
      animation: cosmic-pulse 2s infinite;
    }
  }
}

// MEMBERSHIP CARD
.membership-card {
  background: linear-gradient(to right, #111, #000);
  border-radius: 0.75rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);

  @media (prefers-color-scheme: dark) {
    background: linear-gradient(to right, #2a1f3d, #1a1225);
  }

  .membership-gradient {
    position: absolute;
    right: 0;
    top: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(to left, rgba($primary, 0.2), transparent);
    pointer-events: none;
  }

  .membership-content {
    position: relative;
    z-index: 1;
    color: white;
  }

  .membership-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;

    .membership-title {
      font-weight: 700;
      font-size: 1.125rem;
      margin: 0;
    }

    .membership-date {
      font-size: 0.75rem;
      color: #9ca3af;
      margin: 0.25rem 0 0 0;
    }

    .active-badge {
      background: $primary;
      color: white;
      font-size: 0.75rem;
      font-weight: 700;
      padding: 0.25rem 0.75rem;
      border-radius: 0.25rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
  }

  .credits-section {
    margin-bottom: 1rem;

    .credits-label {
      display: flex;
      justify-content: space-between;
      font-size: 0.875rem;
      margin-bottom: 0.5rem;

      .credits-value {
        font-weight: 700;
      }
    }

    .progress-bar {
      width: 100%;
      height: 0.375rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 9999px;
      overflow: hidden;

      .progress-fill {
        height: 100%;
        background: $primary;
        border-radius: 9999px;
      }
    }
  }

  .manage-btn {
    font-size: 0.75rem;
    color: $primary;
    background: none;
    border: none;
    cursor: pointer;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.3s;

    &:hover {
      color: white;
    }
  }
}

// RIGHT COLUMN
.right-column {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

// STATS GRID
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .stat-card {
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 0.75rem;
    padding: 1.5rem;
    position: relative;
    overflow: hidden;
    transition: all 0.3s;

    @media (prefers-color-scheme: dark) {
      background: $card-dark;
      border-color: rgba(255, 255, 255, 0.05);
    }

    &:hover {
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      border-color: rgba($primary, 0.5);

      .card-bg-icon {
        opacity: 0.2;
      }
    }

    .card-glow {
      position: absolute;
      top: 0;
      right: 0;
      width: 4rem;
      height: 4rem;
      background: rgba($primary, 0.1);
      border-radius: 50%;
      opacity: 0;
      transition: opacity 0.3s;
    }

    .card-bg-icon {
      position: absolute;
      top: 1rem;
      right: 1rem;
      opacity: 0.1;
      color: $primary;
      transition: opacity 0.3s;
    }

    .stat-label {
      font-size: 0.75rem;
      text-transform: uppercase;
      color: #6b7280;
      letter-spacing: 0.05em;
      font-weight: 600;
      margin-bottom: 0.75rem;

      @media (prefers-color-scheme: dark) {
        color: #9ca3af;
      }
    }

    .stat-number {
      display: flex;
      align-items: baseline;
      gap: 0.5rem;
      margin-bottom: 1rem;

      .number {
        font-size: 3rem;
        font-weight: 700;
        color: $primary;
      }

      .name {
        font-size: 0.875rem;
        color: #6b7280;

        @media (prefers-color-scheme: dark) {
          color: #9ca3af;
        }
      }
    }

    .stat-desc {
      font-size: 0.875rem;
      color: #6b7280;
      line-height: 1.5;

      @media (prefers-color-scheme: dark) {
        color: #9ca3af;
      }
    }
  }
}

// INTERPRETATION CARD
.interpretation-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (prefers-color-scheme: dark) {
    background: $card-dark;
    border-color: rgba(255, 255, 255, 0.05);
  }

  .interpretation-header {
    padding: 1rem;
    border-bottom: 1px solid #e5e7eb;
    background: #f9fafb;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (prefers-color-scheme: dark) {
      background: rgba(0, 0, 0, 0.2);
      border-bottom-color: rgba(255, 255, 255, 0.05);
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      .ai-icon-box {
        width: 2rem;
        height: 2rem;
        border-radius: 0.5rem;
        background: rgba($primary, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .interpretation-title {
        font-weight: 700;
        font-size: 1.125rem;
        margin: 0;
        color: #111;

        @media (prefers-color-scheme: dark) {
          color: white;
        }
      }
    }

    .header-actions {
      display: flex;
      gap: 0.5rem;

      .action-btn {
        padding: 0.5rem;
        background: none;
        border: none;
        color: #9ca3af;
        cursor: pointer;
        border-radius: 0.375rem;
        transition: all 0.3s;

        &:hover {
          background: rgba(255, 255, 255, 0.1);
          color: $primary;
        }
      }
    }
  }

  .interpretation-content {
    padding: 1.5rem;
    max-height: 500px;
    overflow-y: auto;
    color: #4b5563;

    @media (prefers-color-scheme: dark) {
      color: #d1d5db;
    }

    .intro-block {
      border-left: 4px solid $primary;
      padding-left: 1rem;
      margin-bottom: 1.5rem;

      .intro-greeting {
        font-size: 1.125rem;
        font-weight: 600;
        margin: 0 0 0.5rem 0;
        color: #111;

        @media (prefers-color-scheme: dark) {
          color: white;
        }
      }

      p {
        margin: 0;
        line-height: 1.6;

        .highlight {
          color: $primary;
          font-weight: 700;
        }
      }
    }

    .content-sections {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .section-title {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 700;
        color: white;
        margin: 1rem 0 0.5rem 0;
      }

      p {
        margin: 0;
        line-height: 1.6;
      }

      .challenges-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin: 1rem 0;

        @media (max-width: 640px) {
          grid-template-columns: 1fr;
        }

        .challenge-box {
          background: #f9fafb;
          padding: 1rem;
          border-radius: 0.5rem;

          @media (prefers-color-scheme: dark) {
            background: $bg-dark;
          }

          .box-title {
            font-size: 0.875rem;
            font-weight: 700;
            margin: 0 0 0.75rem 0;
            text-transform: uppercase;
            letter-spacing: 0.05em;

            &.challenges {
              color: #dc2626;
            }

            &.potentials {
              color: #16a34a;
            }
          }

          .challenge-list {
            list-style: disc;
            list-style-position: inside;
            margin: 0;
            padding: 0;
            font-size: 0.875rem;

            li {
              margin-bottom: 0.375rem;
            }
          }
        }
      }
    }
  }

  .interpretation-footer {
    padding: 1rem;
    border-top: 1px solid #e5e7eb;
    background: #f9fafb;
    display: flex;
    justify-content: center;

    @media (prefers-color-scheme: dark) {
      background: rgba(0, 0, 0, 0.2);
      border-top-color: rgba(255, 255, 255, 0.05);
    }

    .regenerate-btn {
      font-size: 0.875rem;
      color: $primary;
      background: none;
      border: none;
      cursor: pointer;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: color 0.3s;

      &:hover {
        color: white;
      }
    }
  }
}

// BALANCE CARD
.balance-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

  @media (prefers-color-scheme: dark) {
    background: $card-dark;
    border-color: rgba(255, 255, 255, 0.05);
  }

  .balance-title {
    font-weight: 700;
    font-size: 1.125rem;
    margin: 0 0 1rem 0;
    color: #111;

    @media (prefers-color-scheme: dark) {
      color: white;
    }
  }

  .balance-content {
    display: flex;
    gap: 2rem;

    @media (max-width: 640px) {
      flex-direction: column;
      gap: 1rem;
    }

    .radar-chart {
      width: 12rem;
      height: 12rem;
      flex-shrink: 0;
      position: relative;

      .radar-circles {
        position: absolute;
        inset: 0;
        border: 1px solid #e5e7eb;
        border-radius: 50%;
        box-shadow:
          inset 0 0 0 2rem #f9fafb,
          inset 0 0 0 4rem #ffffff,
          inset 0 0 0 6rem #f9fafb;

        @media (prefers-color-scheme: dark) {
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow:
            inset 0 0 0 2rem #191022,
            inset 0 0 0 4rem $card-dark,
            inset 0 0 0 6rem #191022;
        }
      }

      .balance-label {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        color: $primary;
      }
    }

    .balance-bars {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .bar-item {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        .bar-label {
          display: flex;
          justify-content: space-between;
          font-size: 0.875rem;
          color: #6b7280;

          @media (prefers-color-scheme: dark) {
            color: #9ca3af;
          }

          .bar-value {
            font-weight: 700;
            color: #111;

            @media (prefers-color-scheme: dark) {
              color: white;
            }
          }
        }

        .bar-track {
          width: 100%;
          height: 0.5rem;
          background: #e5e7eb;
          border-radius: 9999px;
          overflow: hidden;

          @media (prefers-color-scheme: dark) {
            background: rgba(255, 255, 255, 0.1);
          }

          .bar-fill {
            height: 100%;
            border-radius: 9999px;
          }
        }
      }
    }
  }
}

// FOOTER
.page-footer {
  border-top: 1px solid #e5e7eb;
  background: white;
  padding: 2rem;

  @media (prefers-color-scheme: dark) {
    background: $bg-dark;
    border-top-color: rgba(255, 255, 255, 0.1);
  }

  .footer-container {
    max-width: 112rem;
    margin: 0 auto;
    text-align: center;
  }

  .footer-text {
    font-size: 0.875rem;
    color: #6b7280;
    margin: 0;

    @media (prefers-color-scheme: dark) {
      color: #6b7280;
    }
  }

  .footer-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;

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

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>