<template>
  <div class="admin-page">
    <!-- Sidebar -->
    <aside class="sidebar hide-lt-md">
      <!-- Logo -->
      <div class="logo-section">
        <div class="logo-icon">
          <span>N</span>
        </div>
        <h3 class="logo-text">Numera<span class="primary">AI</span></h3>
      </div>

      <!-- Navigation -->
      <nav class="nav-section">
        <div class="nav-group-title">Principal</div>
        
        <a href="#" class="nav-link active">
          <q-icon name="dashboard" />
          <span>Panel de Control</span>
        </a>
        <a href="#" class="nav-link">
          <q-icon name="people" />
          <span>Usuarios</span>
        </a>
        <a href="#" class="nav-link">
          <q-icon name="auto_awesome" />
          <span>Lecturas IA</span>
          <span class="nav-badge">New</span>
        </a>
        <a href="#" class="nav-link">
          <q-icon name="payments" />
          <span>Pagos y Membresías</span>
        </a>

        <div class="nav-divider"></div>

        <div class="nav-group-title">Configuración</div>
        
        <a href="#" class="nav-link">
          <q-icon name="tune" />
          <span>Configuración API</span>
        </a>
        <a href="#" class="nav-link">
          <q-icon name="security" />
          <span>Roles y Permisos</span>
        </a>
      </nav>

      <!-- User Profile -->
      <div class="user-section">
        <div class="user-avatar">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc2t8RIA4Yt_l6AH0ZpVoAvuIc6kWHHKVBhyw9ljvSz1E4mScc-mJgcO4vHh39BY4GkVBfpyJsFBk4k7Y35oxyEuj_6SMEJpBf7aQnXgIaH18EXR-sJGy0MG1LJaRf6HAYc_gGCxs8C1aZIUUa2L2AeetdydM2QLY6P55cnvIgc9wqZT39EQqXMbKTUUt56BxNHjYtsmOK0fa_d0UwL9IND03jmUvcf6DaO81FmH5xrA6m2h8SozovWP6gut-Cbuz2yjG7Lq169VI" alt="admin" />
          <div class="status-dot"></div>
        </div>
        <div class="user-info">
          <p class="user-name">Admin Principal</p>
          <p class="user-email">admin@numera.ai</p>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Header -->
      <header class="top-header">
        <div class="header-left">
          <button class="menu-btn hide-gt-sm">
            <q-icon name="menu" />
          </button>
          <div class="header-title-section hide-lt-sm">
            <h1 class="header-title">Vista General</h1>
            <p class="header-subtitle">Bienvenido de nuevo, Admin</p>
          </div>
        </div>

        <div class="header-right">
          <!-- Search -->
          <div class="search-box hide-lt-md">
            <q-icon name="search" class="search-icon" />
            <input type="text" placeholder="Buscar usuario o transacción..." class="search-input" />
          </div>

          <!-- Notifications -->
          <button class="header-btn">
            <q-icon name="notifications_none" />
            <span class="notif-badge"></span>
          </button>

          <!-- Help -->
          <button class="header-btn">
            <q-icon name="help_outline" />
          </button>
        </div>
      </header>

      <!-- Scrollable Content -->
      <div class="content-area">
        <!-- KPI Cards -->
        <div class="kpi-grid">
          <!-- Revenue Card -->
          <div class="kpi-card">
            <div class="card-glow revenue"></div>
            <div class="card-content">
              <div class="card-header">
                <div>
                  <p class="card-label">Ingresos Totales (Mes)</p>
                  <h3 class="card-value">$42,593.00</h3>
                </div>
                <div class="card-icon revenue-icon">
                  <q-icon name="trending_up" />
                </div>
              </div>
              <div class="card-footer">
                <span class="increase">
                  <q-icon name="arrow_upward" size="sm" />
                  12.5%
                </span>
                <span class="comparison">vs mes anterior</span>
              </div>
            </div>
          </div>

          <!-- Users Card -->
          <div class="kpi-card">
            <div class="card-glow users"></div>
            <div class="card-content">
              <div class="card-header">
                <div>
                  <p class="card-label">Usuarios Activos</p>
                  <h3 class="card-value">8,245</h3>
                </div>
                <div class="card-icon users-icon">
                  <q-icon name="person_outline" />
                </div>
              </div>
              <div class="card-footer">
                <span class="increase">
                  <q-icon name="arrow_upward" size="sm" />
                  4.3%
                </span>
                <span class="comparison">nuevos registros</span>
              </div>
            </div>
          </div>

          <!-- AI Readings Card -->
          <div class="kpi-card">
            <div class="card-glow ai"></div>
            <div class="card-content">
              <div class="card-header">
                <div>
                  <p class="card-label">Lecturas IA Generadas</p>
                  <h3 class="card-value">156,201</h3>
                </div>
                <div class="card-icon ai-icon">
                  <q-icon name="psychology" />
                </div>
              </div>
              <div class="progress-bar">
                <div class="progress-fill" style="width: 78%"></div>
              </div>
              <p class="progress-text">78% de cuota API mensual</p>
            </div>
          </div>

          <!-- Conversion Card -->
          <div class="kpi-card">
            <div class="card-glow conversion"></div>
            <div class="card-content">
              <div class="card-header">
                <div>
                  <p class="card-label">Tasa de Conversión</p>
                  <h3 class="card-value">3.8%</h3>
                </div>
                <div class="card-icon conversion-icon">
                  <q-icon name="star_border" />
                </div>
              </div>
              <div class="card-footer">
                <span class="decrease">
                  <q-icon name="arrow_downward" size="sm" />
                  0.2%
                </span>
                <span class="comparison">vs semana pasada</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Charts Section -->
        <div class="charts-grid">
          <!-- Main Chart -->
          <div class="chart-card">
            <div class="chart-header">
              <div>
                <h2 class="chart-title">Análisis de Crecimiento</h2>
                <p class="chart-subtitle">Ingresos vs Nuevos Miembros Premium</p>
              </div>
              <div class="chart-buttons">
                <button class="chart-btn">Semana</button>
                <button class="chart-btn active">Mes</button>
                <button class="chart-btn">Año</button>
              </div>
            </div>

            <div class="chart-content">
              <div class="bars-container">
                <div class="bar-group">
                  <div class="bar-wrapper" style="height: 30%">
                    <div class="bar"></div>
                  </div>
                  <span class="bar-label">01 Nov</span>
                </div>
                <div class="bar-group">
                  <div class="bar-wrapper" style="height: 45%">
                    <div class="bar"></div>
                  </div>
                  <span class="bar-label">05 Nov</span>
                </div>
                <div class="bar-group">
                  <div class="bar-wrapper" style="height: 60%">
                    <div class="bar"></div>
                  </div>
                  <span class="bar-label">10 Nov</span>
                </div>
                <div class="bar-group">
                  <div class="bar-wrapper" style="height: 55%">
                    <div class="bar"></div>
                  </div>
                  <span class="bar-label">15 Nov</span>
                </div>
                <div class="bar-group">
                  <div class="bar-wrapper" style="height: 80%">
                    <div class="bar"></div>
                  </div>
                  <span class="bar-label">20 Nov</span>
                </div>
                <div class="bar-group">
                  <div class="bar-wrapper" style="height: 70%">
                    <div class="bar"></div>
                  </div>
                  <span class="bar-label">25 Nov</span>
                </div>
                <div class="bar-group">
                  <div class="bar-wrapper" style="height: 90%">
                    <div class="bar"></div>
                  </div>
                  <span class="bar-label">30 Nov</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Widgets -->
          <div class="widgets-column">
            <!-- Distribution Card -->
            <div class="widget-card">
              <h3 class="widget-title">Tipos de Membresía</h3>
              <div class="donut-chart">
                <div class="donut-inner">
                  <span class="donut-text">12k</span>
                  <span class="donut-label">Usuarios</span>
                </div>
              </div>
              <div class="distribution-list">
                <div class="distribution-item">
                  <div class="distribution-color primary"></div>
                  <span class="distribution-name">Básico (Gratis)</span>
                  <span class="distribution-percent">65%</span>
                </div>
                <div class="distribution-item">
                  <div class="distribution-color gold"></div>
                  <span class="distribution-name">Premium (Oro)</span>
                  <span class="distribution-percent">25%</span>
                </div>
                <div class="distribution-item">
                  <div class="distribution-color gray"></div>
                  <span class="distribution-name">Inactivos</span>
                  <span class="distribution-percent">10%</span>
                </div>
              </div>
            </div>

            <!-- CTA Card -->
            <div class="cta-card">
              <h3 class="cta-title">Exportar Reporte</h3>
              <p class="cta-desc">Descarga el reporte mensual de rendimiento y usuarios.</p>
              <button class="cta-button">
                <q-icon name="download" size="sm" />
                <span>Descargar CSV</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Transactions Table -->
        <div class="table-card">
          <div class="table-header">
            <h3 class="table-title">Transacciones Recientes</h3>
            <button class="table-view-all">Ver todo</button>
          </div>

          <div class="table-wrapper">
            <table class="transactions-table">
              <thead>
                <tr>
                  <th>Usuario</th>
                  <th>Plan</th>
                  <th>Fecha</th>
                  <th>Monto</th>
                  <th>Estado</th>
                  <th class="text-right">Acción</th>
                </tr>
              </thead>
              <tbody>
                <!-- Row 1 -->
                <tr class="table-row">
                  <td class="user-cell">
                    <div class="user-avatar-table">MJ</div>
                    <div class="user-details">
                      <p class="user-name-table">María Jimenez</p>
                      <p class="user-email-table">maria.j@gmail.com</p>
                    </div>
                  </td>
                  <td>Numerología Anual</td>
                  <td class="date-cell">24 Oct, 2023</td>
                  <td class="amount-cell">$120.00</td>
                  <td class="status-cell">
                    <span class="status-badge completed">
                      <span class="status-dot"></span>
                      Completado
                    </span>
                  </td>
                  <td class="action-cell">
                    <button class="action-btn">
                      <q-icon name="more_vert" />
                    </button>
                  </td>
                </tr>

                <!-- Row 2 -->
                <tr class="table-row">
                  <td class="user-cell">
                    <div class="user-avatar-table">CR</div>
                    <div class="user-details">
                      <p class="user-name-table">Carlos Ruiz</p>
                      <p class="user-email-table">carlos.ruiz99@hotmail.com</p>
                    </div>
                  </td>
                  <td>Lectura Carta Natal (Única)</td>
                  <td class="date-cell">24 Oct, 2023</td>
                  <td class="amount-cell">$45.00</td>
                  <td class="status-cell">
                    <span class="status-badge processing">
                      <span class="status-dot"></span>
                      Procesando
                    </span>
                  </td>
                  <td class="action-cell">
                    <button class="action-btn">
                      <q-icon name="more_vert" />
                    </button>
                  </td>
                </tr>

                <!-- Row 3 -->
                <tr class="table-row">
                  <td class="user-cell">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4eJ7WkSq-JxLT82qoqrlzdplX1X3VVh2a2b1lapPHJnBtw7v6_uWyUhmhHIGB6wyle7bzROYyApimauUEpuIqZK1E6VgBO6xnMe6-vnu8Yl4xHPqNd23Q9--plUnx5XsGFpvSy8EFTyMrkIFBVguTPvrcLtUkb4n8en50cUDNLOyIgde7zhKveX4EQ1MDGvzVluCi_0WdRCon4FWVKGnLv96oco4kvJcZiV0MGgnzNQ8wezN8vc_-Vipp0R-taJ2SVPIDc-pjQiE" alt="sofia" class="user-photo" />
                    <div class="user-details">
                      <p class="user-name-table">Sofía Lopez</p>
                      <p class="user-email-table">sofi.lopes@outlook.com</p>
                    </div>
                  </td>
                  <td>Mensual Premium</td>
                  <td class="date-cell">23 Oct, 2023</td>
                  <td class="amount-cell">$15.00</td>
                  <td class="status-cell">
                    <span class="status-badge completed">
                      <span class="status-dot"></span>
                      Completado
                    </span>
                  </td>
                  <td class="action-cell">
                    <button class="action-btn">
                      <q-icon name="more_vert" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const searchQuery = ref('')
</script>

<style scoped lang="scss">
$primary: #7311d4;
$primary-light: #9c4ce6;
$primary-dark: #4a0b8a;
$gold: #D4AF37;
$bg: #130c1a;
$surface: #1f1629;
$surface-darker: #191022;

* { box-sizing: border-box; }

.admin-page {
  display: flex;
  height: 100vh;
  background: $bg;
  color: #cbd5e1;
}

// SIDEBAR
.sidebar {
  width: 16rem;
  background: white;
  border-right: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  z-index: 20;

  @media (prefers-color-scheme: dark) {
    background: $surface-darker;
    border-right-color: rgba(255, 255, 255, 0.05);
  }

  .logo-section {
    height: 5rem;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    border-bottom: 1px solid #e2e8f0;
    gap: 0.75rem;

    @media (prefers-color-scheme: dark) {
      border-bottom-color: rgba(255, 255, 255, 0.05);
    }

    .logo-icon {
      width: 2rem;
      height: 2rem;
      border-radius: 0.5rem;
      background: linear-gradient(to bottom right, $primary, #5c0a82);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 700;
      font-size: 1.125rem;
      box-shadow: 0 0 15px rgba($primary, 0.5);
    }

    .logo-text {
      font-size: 1.25rem;
      font-weight: 700;
      letter-spacing: -0.025em;
      color: #0f172a;

      @media (prefers-color-scheme: dark) {
        color: white;
      }

      .primary {
        color: $primary;
      }
    }
  }

  .nav-section {
    flex: 1;
    overflow-y: auto;
    padding: 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .nav-group-title {
    font-size: 0.75rem;
    font-weight: 600;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 0 1rem;
    margin-bottom: 0.5rem;

    @media (prefers-color-scheme: dark) {
      color: #64748b;
    }
  }

  .nav-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    border-radius: 0.75rem;
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s;
    position: relative;

    @media (prefers-color-scheme: dark) {
      color: #94a3b8;
    }

    &:hover {
      background: #f1f5f9;
      color: #0f172a;

      @media (prefers-color-scheme: dark) {
        background: rgba(255, 255, 255, 0.05);
        color: white;
      }
    }

    &.active {
      background: rgba($primary, 0.1);
      color: $primary;
      border: 1px solid rgba($primary, 0.2);

      @media (prefers-color-scheme: dark) {
        background: rgba($primary, 0.1);
        color: #c084fc;
      }
    }

    .nav-badge {
      margin-left: auto;
      background: rgba($primary, 0.2);
      color: $primary;
      font-size: 0.75rem;
      font-weight: 700;
      padding: 0.125rem 0.5rem;
      border-radius: 9999px;
    }
  }

  .nav-divider {
    height: 1px;
    background: #e2e8f0;
    margin: 1.5rem 0;

    @media (prefers-color-scheme: dark) {
      background: rgba(255, 255, 255, 0.05);
    }
  }

  .user-section {
    padding: 1rem;
    border-top: 1px solid #e2e8f0;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    @media (prefers-color-scheme: dark) {
      border-top-color: rgba(255, 255, 255, 0.05);
    }

    .user-avatar {
      position: relative;
      flex-shrink: 0;

      img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 9999px;
        border: 2px solid rgba($primary, 0.3);
        object-fit: cover;
      }

      .status-dot {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 0.75rem;
        height: 0.75rem;
        background: #22c55e;
        border-radius: 50%;
        border: 2px solid white;

        @media (prefers-color-scheme: dark) {
          border-color: $surface-darker;
        }
      }
    }

    .user-info {
      flex: 1;
      min-width: 0;

      .user-name {
        font-size: 0.875rem;
        font-weight: 600;
        color: #0f172a;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        @media (prefers-color-scheme: dark) {
          color: white;
        }
      }

      .user-email {
        font-size: 0.75rem;
        color: #64748b;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        @media (prefers-color-scheme: dark) {
          color: #94a3b8;
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
  background: $bg;
}

// HEADER
.top-header {
  height: 5rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  z-index: 10;
  position: sticky;
  top: 0;

  @media (prefers-color-scheme: dark) {
    background: rgba($surface-darker, 0.8);
    border-bottom-color: rgba(255, 255, 255, 0.05);
  }

  .header-left {
    display: flex;
    align-items: center;
    gap: 1rem;

    .menu-btn {
      background: none;
      border: none;
      color: #64748b;
      cursor: pointer;
      padding: 0.5rem;
      transition: color 0.2s;

      &:hover {
        color: $primary;
      }
    }
  }

  .header-title-section {
    .header-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: #0f172a;
      margin: 0;

      @media (prefers-color-scheme: dark) {
        color: white;
      }
    }

    .header-subtitle {
      font-size: 0.875rem;
      color: #64748b;
      margin: 0;

      @media (prefers-color-scheme: dark) {
        color: #94a3b8;
      }
    }
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .search-box {
    position: relative;
    width: 16rem;

    .search-icon {
      position: absolute;
      left: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      color: #94a3b8;
      pointer-events: none;
    }

    .search-input {
      width: 100%;
      padding: 0.5rem 1rem 0.5rem 2.5rem;
      background: #f1f5f9;
      border: none;
      border-radius: 0.5rem;
      font-size: 0.875rem;
      color: #0f172a;
      transition: all 0.2s;

      @media (prefers-color-scheme: dark) {
        background: rgba(255, 255, 255, 0.05);
        color: white;

        &::placeholder {
          color: #64748b;
        }
      }

      &:focus {
        outline: none;
        
        box-shadow: 0 0 0 2px $primary;
      }
    }
  }

  .header-btn {
    position: relative;
    background: none;
    border: none;
    color: #64748b;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.5rem;
    transition: all 0.2s;

    @media (prefers-color-scheme: dark) {
      color: #94a3b8;

      &:hover {
        background: rgba(255, 255, 255, 0.05);
        color: $primary;
      }
    }

    &:hover {
      background: #f1f5f9;
      color: $primary;
    }

    .notif-badge {
      position: absolute;
      top: 0.375rem;
      right: 0.375rem;
      width: 0.5rem;
      height: 0.5rem;
      background: #ef4444;
      border-radius: 50%;
      animation: pulse 2s infinite;
    }
  }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

// CONTENT AREA
.content-area {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 5rem;

  @media (prefers-color-scheme: dark) {
    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: #332640;
      border-radius: 4px;

      &:hover {
        background: $primary;
      }
    }
  }
}

// KPI GRID
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;

  .kpi-card {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 0.75rem;
    padding: 1.5rem;
    position: relative;
    overflow: hidden;
    transition: all 0.3s;

    @media (prefers-color-scheme: dark) {
      background: $surface;
      border-color: rgba(255, 255, 255, 0.05);
    }

    &:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

      @media (prefers-color-scheme: dark) {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      }
    }

    .card-glow {
      position: absolute;
      top: 0;
      right: 0;
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
      opacity: 0.1;
      
      &.revenue {
        background: #22c55e;
      }

      &.users {
        background: #3b82f6;
      }

      &.ai {
        background: $primary;
      }

      &.conversion {
        background: $gold;
      }
    }

    .card-content {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      .card-label {
        font-size: 0.75rem;
        font-weight: 600;
        color: #64748b;
        text-transform: uppercase;
        letter-spacing: 0.05em;

        @media (prefers-color-scheme: dark) {
          color: #94a3b8;
        }
      }

      .card-value {
        font-size: 1.875rem;
        font-weight: 700;
        color: #0f172a;
        margin-top: 0.25rem;

        @media (prefers-color-scheme: dark) {
          color: white;
        }
      }

      .card-icon {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;

        &.revenue-icon {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
        }

        &.users-icon {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
        }

        &.ai-icon {
          background: rgba($primary, 0.1);
          color: $primary;
        }

        &.conversion-icon {
          background: rgba($gold, 0.1);
          color: $gold;
        }
      }
    }

    .card-footer {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.875rem;

      .increase {
        color: #22c55e;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }

      .decrease {
        color: #ef4444;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }

      .comparison {
        color: #64748b;

        @media (prefers-color-scheme: dark) {
          color: #94a3b8;
        }
      }
    }

    .progress-bar {
      width: 100%;
      height: 0.375rem;
      background: #e2e8f0;
      border-radius: 9999px;
      overflow: hidden;

      @media (prefers-color-scheme: dark) {
        background: rgba(255, 255, 255, 0.1);
      }

      .progress-fill {
        height: 100%;
        background: linear-gradient(to right, $primary, $primary-light);
        border-radius: 9999px;
      }
    }

    .progress-text {
      font-size: 0.75rem;
      color: #64748b;
      margin: 0;

      @media (prefers-color-scheme: dark) {
        color: #94a3b8;
      }
    }
  }
}

// CHARTS GRID
.charts-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}

// CHART CARD
.chart-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 1.5rem;

  @media (prefers-color-scheme: dark) {
    background: $surface;
    border-color: rgba(255, 255, 255, 0.05);
  }

  .chart-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.5rem;

    .chart-title {
      font-size: 1.125rem;
      font-weight: 700;
      color: #0f172a;
      margin: 0;

      @media (prefers-color-scheme: dark) {
        color: white;
      }
    }

    .chart-subtitle {
      font-size: 0.875rem;
      color: #64748b;
      margin-top: 0.25rem;

      @media (prefers-color-scheme: dark) {
        color: #94a3b8;
      }
    }

    .chart-buttons {
      display: flex;
      gap: 0.5rem;
    }
  }

  .chart-btn {
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
    font-weight: 500;
    background: #f1f5f9;
    color: #64748b;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.2s;

    @media (prefers-color-scheme: dark) {
      background: rgba(255, 255, 255, 0.05);
      color: #94a3b8;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }

      &.active {
        background: $primary;
        color: white;
      }
    }

    &:hover {
      background: #e2e8f0;
    }

    &.active {
      background: $primary;
      color: white;
    }
  }

  .chart-content {
    height: 18rem;
  }

  .bars-container {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    height: 100%;
    gap: 0.5rem;
    padding: 1rem 0;
  }

  .bar-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    gap: 0.5rem;

    .bar-wrapper {
      width: 100%;
      background: #e2e8f0;
      border-radius: 0.25rem 0.25rem 0 0;
      position: relative;

      @media (prefers-color-scheme: dark) {
        background: rgba(255, 255, 255, 0.1);
      }

      .bar {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 60%;
        background: linear-gradient(to top, $primary-dark, $primary);
        border-radius: 0.25rem 0.25rem 0 0;
      }
    }

    .bar-label {
      font-size: 0.75rem;
      color: #94a3b8;
    }
  }
}

// WIDGETS COLUMN
.widgets-column {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

// WIDGET CARD
.widget-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 1.5rem;

  @media (prefers-color-scheme: dark) {
    background: $surface;
    border-color: rgba(255, 255, 255, 0.05);
  }

  .widget-title {
    font-size: 1.125rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 1rem 0;

    @media (prefers-color-scheme: dark) {
      color: white;
    }
  }

  .donut-chart {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 12rem;
    position: relative;
    margin-bottom: 1rem;

    .donut-inner {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .donut-text {
        font-size: 1.5rem;
        font-weight: 700;
        color: #0f172a;

        @media (prefers-color-scheme: dark) {
          color: white;
        }
      }

      .donut-label {
        font-size: 0.75rem;
        color: #64748b;

        @media (prefers-color-scheme: dark) {
          color: #94a3b8;
        }
      }
    }
  }

  .distribution-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    .distribution-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.875rem;

      .distribution-color {
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 50%;
        flex-shrink: 0;

        &.primary {
          background: $primary;
        }

        &.gold {
          background: $gold;
        }

        &.gray {
          background: #cbd5e1;
        }
      }

      .distribution-name {
        color: #64748b;
        flex: 1;
        margin-left: 0.75rem;

        @media (prefers-color-scheme: dark) {
          color: #94a3b8;
        }
      }

      .distribution-percent {
        font-weight: 600;
        color: #0f172a;

        @media (prefers-color-scheme: dark) {
          color: white;
        }
      }
    }
  }
}

// CTA CARD
.cta-card {
  background: linear-gradient(to bottom right, $primary, $primary-dark);
  border-radius: 0.75rem;
  padding: 1.5rem;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 8rem;
    height: 8rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    filter: blur(2rem);
  }

  .cta-title {
    font-size: 1.125rem;
    font-weight: 700;
    margin: 0 0 0.5rem 0;
    position: relative;
    z-index: 1;
  }

  .cta-desc {
    font-size: 0.875rem;
    opacity: 0.9;
    margin: 0 0 1rem 0;
    position: relative;
    z-index: 1;
  }

  .cta-button {
    width: 100%;
    padding: 0.625rem 1rem;
    background: white;
    color: $primary;
    border: none;
    border-radius: 0.5rem;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: background 0.2s;
    position: relative;
    z-index: 1;

    &:hover {
      background: #f1f5f9;
    }
  }
}

// TABLE CARD
.table-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background: $surface;
    border-color: rgba(255, 255, 255, 0.05);
  }

  .table-header {
    padding: 1.5rem;
    border-bottom: 1px solid #e2e8f0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (prefers-color-scheme: dark) {
      border-bottom-color: rgba(255, 255, 255, 0.05);
    }

    .table-title {
      font-size: 1.125rem;
      font-weight: 700;
      color: #0f172a;
      margin: 0;

      @media (prefers-color-scheme: dark) {
        color: white;
      }
    }

    .table-view-all {
      font-size: 0.875rem;
      color: $primary;
      background: none;
      border: none;
      cursor: pointer;
      font-weight: 500;

      &:hover {
        color: $primary-light;
      }
    }
  }

  .table-wrapper {
    overflow-x: auto;
  }

  .transactions-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.875rem;

    thead {
      background: #f1f5f9;

      @media (prefers-color-scheme: dark) {
        background: rgba(255, 255, 255, 0.05);
      }

      th {
        padding: 1rem 1.5rem;
        text-align: left;
        font-weight: 600;
        color: #64748b;
        text-transform: uppercase;
        font-size: 0.75rem;
        letter-spacing: 0.05em;

        @media (prefers-color-scheme: dark) {
          color: #94a3b8;
        }

        &.text-right {
          text-align: right;
        }
      }
    }

    tbody {
      tr {
        border-bottom: 1px solid #e2e8f0;
        transition: background 0.2s;

        @media (prefers-color-scheme: dark) {
          border-bottom-color: rgba(255, 255, 255, 0.05);

          &:hover {
            background: rgba(255, 255, 255, 0.05);
          }
        }

        &:hover {
          background: #f9fafb;
        }
      }

      td {
        padding: 1rem 1.5rem;
        color: #64748b;

        @media (prefers-color-scheme: dark) {
          color: #cbd5e1;
        }
      }
    }
  }

  .user-cell {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    .user-avatar-table {
      width: 2rem;
      height: 2rem;
      border-radius: 0.5rem;
      background: linear-gradient(135deg, #667eea, #764ba2);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 0.875rem;
      font-weight: 600;
      flex-shrink: 0;
    }

    .user-photo {
      width: 2rem;
      height: 2rem;
      border-radius: 0.5rem;
      object-fit: cover;
      flex-shrink: 0;
    }

    .user-details {
      min-width: 0;

      .user-name-table {
        font-weight: 600;
        color: #0f172a;
        margin: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        @media (prefers-color-scheme: dark) {
          color: white;
        }
      }

      .user-email-table {
        font-size: 0.75rem;
        color: #94a3b8;
        margin: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  .date-cell {
    font-family: monospace;
    color: #64748b;

    @media (prefers-color-scheme: dark) {
      color: #94a3b8;
    }
  }

  .amount-cell {
    font-weight: 700;
    color: #0f172a;
    font-family: monospace;

    @media (prefers-color-scheme: dark) {
      color: white;
    }
  }

  .status-cell {
    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.375rem;
      padding: 0.375rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 600;

      .status-dot {
        width: 0.375rem;
        height: 0.375rem;
        border-radius: 50%;
      }

      &.completed {
        background: rgba(34, 197, 94, 0.1);
        color: #16a34a;

        @media (prefers-color-scheme: dark) {
          background: rgba(34, 197, 94, 0.1);
          color: #86efac;
        }

        .status-dot {
          background: #22c55e;
        }
      }

      &.processing {
        background: rgba(234, 179, 8, 0.1);
        color: #a16207;

        @media (prefers-color-scheme: dark) {
          background: rgba(234, 179, 8, 0.1);
          color: #facc15;
        }

        .status-dot {
          background: #eab308;
          animation: pulse 2s infinite;
        }
      }
    }
  }

  .action-cell {
    text-align: right;

    .action-btn {
      background: none;
      border: none;
      color: #94a3b8;
      cursor: pointer;
      padding: 0.5rem;
      transition: color 0.2s;

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

.text-right {
  text-align: right;
}
</style>