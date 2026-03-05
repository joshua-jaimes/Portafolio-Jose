<template>
  <div class="membresias-page">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="navbar-container">
        <div class="navbar-logo">
          <q-icon name="auto_awesome" size="lg" class="text-primary" />
          <span class="logo-text">Numera<span class="text-primary">AI</span></span>
        </div>

        <div class="navbar-menu hide-lt-md">
          <a href="#" class="nav-link">Lecturas</a>
          <a href="#" class="nav-link">Carta Astral</a>
          <a href="#" class="nav-link active">Membresía</a>
        </div>

        <div class="user-avatar">
          <span>JD</span>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Background Decor -->
      <div class="bg-decorative"></div>

      <div class="content-container">
        <!-- Header -->
        <header class="header-section">
          <h1 class="page-title">Elige tu destino numerológico</h1>
          <p class="page-subtitle">Desbloquea el poder de las lecturas generadas por IA y descubre lo que los números tienen preparado para ti. Planes flexibles, cancelación en cualquier momento.</p>

          <!-- Billing Toggle -->
          <div class="billing-toggle">
            <span class="toggle-label">Mensual</span>
            <label class="switch">
              <input v-model="isAnnual" type="checkbox" />
              <span class="slider"></span>
            </label>
            <span class="toggle-label">
              Anual
              <span class="discount-badge">-20% Dto</span>
            </span>
          </div>
        </header>

        <div class="plans-grid">
          <!-- Plans Column -->
          <div class="plans-column">
            <!-- Premium Plan (Selected) -->
            <div class="plan-card premium-plan">
              <div class="card-glow"></div>
              <div class="recommended-badge">Recomendado</div>

              <div class="plan-header">
                <div class="plan-info">
                  <h3 class="plan-title">
                    <span>Plan Premium</span>
                    <q-icon name="verified" size="sm" class="text-primary" />
                  </h3>
                  <p class="plan-desc">Acceso total a nuestra IA y reportes profundos.</p>
                </div>
                <div class="plan-price">
                  <div class="price-value">${{ isAnnual ? '49' : '59' }}</div>
                  <div class="price-period">/mes</div>
                  <div class="price-note">{{ isAnnual ? 'Facturado $588 anualmente' : 'Sin compromiso' }}</div>
                </div>
              </div>

              <div class="features-grid">
                <div class="feature-item">
                  <q-icon name="check" class="feature-icon" />
                  <span>Lecturas de IA ilimitadas</span>
                </div>
                <div class="feature-item">
                  <q-icon name="check" class="feature-icon" />
                  <span>Compatibilidad de pareja</span>
                </div>
                <div class="feature-item">
                  <q-icon name="check" class="feature-icon" />
                  <span>Predicciones anuales 2024</span>
                </div>
                <div class="feature-item">
                  <q-icon name="check" class="feature-icon" />
                  <span>Soporte prioritario VIP</span>
                </div>
              </div>
            </div>

            <!-- Monthly Plan (Unselected) -->
            <div class="plan-card basic-plan">
              <div class="plan-header">
                <div class="plan-info">
                  <h3 class="plan-title">Plan Mensual</h3>
                  <p class="plan-desc">Ideal para empezar tu viaje numerológico.</p>
                </div>
                <div class="plan-price">
                  <div class="price-value">${{ isAnnual ? '24' : '29' }}</div>
                  <div class="price-period">/mes</div>
                </div>
              </div>

              <div class="features-list">
                <div class="feature-item small">
                  <q-icon name="check" class="feature-icon-small" />
                  <span>Lecturas básicas</span>
                </div>
                <div class="feature-item small">
                  <q-icon name="check" class="feature-icon-small" />
                  <span>Actualizaciones semanales</span>
                </div>
              </div>
            </div>

            <!-- Testimonial -->
            <div class="testimonial-card">
              <div class="quote-mark">"</div>
              <p class="testimonial-text">
                La precisión de NumeraAI es escalofriante. El plan Premium me ayudó a entender mis ciclos anuales y tomar mejores decisiones en mi negocio. ¡Totalmente recomendado!
              </p>
              <div class="testimonial-author">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBixL84wwvJVq138UUzQaLGBheyLZ24XGnN1P2xkTYTn25nTFKRmZbb-JCEGUCM8n7LSSXMZS8Sv0oJO7BmNHV5Wmz_NwPfMEnd6Ep5ZKPqHSlK2zQtJ_o3JAkMWXT34ATmKeqtaH2C39kepNmRzNTS9L3SJI8pX2nb3VM4oFx1WXs8tnCLC2kVKjOoZCWvMoe9XubDWIbcaTh-PFV08m7-7k-0xwgyOWjT6j2LwwnauUzvMOe92CCjCU9hzPBeF33zN1ynDZRd6s4" alt="Maria G." class="author-avatar" />
                <div class="author-info">
                  <span class="author-name">Maria G.</span>
                  <div class="author-stars">
                    <q-icon name="star" size="xs" class="text-primary" />
                    <q-icon name="star" size="xs" class="text-primary" />
                    <q-icon name="star" size="xs" class="text-primary" />
                    <q-icon name="star" size="xs" class="text-primary" />
                    <q-icon name="star" size="xs" class="text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Payment Form Column -->
          <div class="payment-column">
            <div class="payment-card">
              <div class="payment-header">
                <h2 class="payment-title">Detalles de Pago</h2>
                <!-- Payment Methods Tabs -->
                <div class="payment-tabs">
                  <button class="tab-btn active">
                    <q-icon name="credit_card" size="sm" />
                    <span>Tarjeta</span>
                  </button>
                  <button class="tab-btn">
                    <q-icon name="account_balance" size="sm" />
                    <span>Transferencia</span>
                  </button>
                </div>
              </div>

              <div class="payment-form">
                <!-- Card Holder -->
                <div class="form-group">
                  <label class="form-label">Titular de la tarjeta</label>
                  <div class="form-input-wrapper">
                    <q-icon name="person" class="form-icon" />
                    <input type="text" placeholder="Como aparece en la tarjeta" class="form-input" />
                  </div>
                </div>

                <!-- Card Number -->
                <div class="form-group">
                  <label class="form-label">Número de tarjeta</label>
                  <div class="form-input-wrapper">
                    <q-icon name="payment" class="form-icon" />
                    <input type="text" placeholder="0000 0000 0000 0000" class="form-input card-number" />
                    <div class="card-brands">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDde6rjrzXbC0Hbt1Moc0-NRqv4-4uPq6TBSgsH5y5xB0YOcjAPw-619-RdbCKVg6ErfveyIF1MuloWeip-DsfPz3d3EElqA2oBRv7byevm6CjCMZQGoWvppMhmqwDGfEB-aZZBIMx3uZxSsgcVUBg4MmyLhU5OX0okkLl9jAz9j-Vtge0xzngnfpiU13cQC_ctsxfolA7FBlia1NNUDQalvAvCndMvRJvaDi5lSozkSWOB04vE06C03jDAeMF1pxP6akEalPikYMc" alt="visa" class="brand-logo" />
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxlRIjo2Zv_2XdG9vmGH5SHv4Ol43XUq-dQsOJSZJyyYck1GyA1WLoJtqfJX2gpX7AsPqUuVFDsHE4_WTNd6Mzckr9LvjAnbJyl3mzgdg5D5-2eA5THnwecotuNnzTXDrfb3CFRq0JcDXzr4vYco5y60hdGZQpkkahDrh92v6vzKcWSqeC9Th81-GokDWS-gzhEgKr163t8IO6k2bF3JSuX-5Zpt9loiw--_BCm0T5HJrOXzpYzlnSQNaSKyRrcx-2qVO-x3JqeBc" alt="mastercard" class="brand-logo" />
                    </div>
                  </div>
                </div>

                <!-- Expiry & CVC -->
                <div class="form-grid">
                  <div class="form-group">
                    <label class="form-label">Expiración</label>
                    <div class="form-input-wrapper">
                      <q-icon name="calendar_today" class="form-icon" />
                      <input type="text" placeholder="MM/AA" class="form-input" />
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="form-label">CVC</label>
                    <div class="form-input-wrapper">
                      <q-icon name="lock" class="form-icon" />
                      <input type="text" placeholder="123" class="form-input" />
                    </div>
                  </div>
                </div>

                <!-- Summary -->
                <div class="payment-summary">
                  <div class="summary-row">
                    <span>Subtotal ({{ isAnnual ? 'Anual' : 'Mensual' }})</span>
                    <span>${{ isAnnual ? '588.00' : '49.00' }}</span>
                  </div>
                  <div class="summary-row discount">
                    <span>Descuento ({{ isAnnual ? '20%' : '0%' }})</span>
                    <span>${{ isAnnual ? '-117.60' : '0.00' }}</span>
                  </div>
                  <div class="summary-row">
                    <span>Impuestos</span>
                    <span>$0.00</span>
                  </div>
                  <div class="summary-row total">
                    <span>Total a pagar</span>
                    <span>${{ isAnnual ? '470.40' : '49.00' }}</span>
                  </div>
                </div>

                <!-- Submit Button -->
                <button class="payment-button">
                  <q-icon name="lock_outline" size="sm" />
                  <span>Pagar Ahora ${{ isAnnual ? '470.40' : '49.00' }}</span>
                </button>

                <!-- Security -->
                <div class="security-footer">
                  <q-icon name="security" size="sm" class="text-green-500" />
                  <span>Pagos encriptados con SSL de 256 bits</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Trust Section -->
        <div class="trust-section">
          <div class="trust-logos">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNdbbZ9lIOPrA6l0M8_WUNEPSbxJEQjML97FHRbt0TPQ6wzBFDYVi5GrAw_3mqOrrw9u6DjTRqPIpAeJH0zE-4s7cwNRMsfYMmA_9mtNx0YY1HQmbSMZT4mKBlKTjK9LzrVDGzr78XqUb1mjPeVoiBWiPFTjStOIloF1YPLa2thKOuQBf0vVhzfLF4G-d_q_XfK5j8FdiusnNnQQ0sETYYFOXgMsTxzKK-2VrUgnJAV9KPTAR60mg8U2PygsqtqbAL7oADCPQy7x8" alt="stripe" class="logo-stripe" />
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcy2a6qwZ-FaVCGWRZHECneQk0GOtz1wPNhMc0FJLBvY0uJywN1oAzWFSzJYZroXzqb8YTIrj5NNQHQqovS3XgbYALcSAHTQ5MIAXVbsk80G2nkzMyhcN9ZXs4bKirnnZo5-EKdmfO1Ms_vt3cq_-ezFW0FhM20nBh5tTASGUzNeWtLsT_W-u0u2ylBS7wkHhfTbEfwBxp8TY1EMr31NN4iYTvI9fseymFaSCmn2GGDuMaBnRb0afsgRO4EAdqaf86Q4AquMMDTYE" alt="paypal" class="logo-paypal" />
          </div>

          <div class="trust-links">
            <a href="#">Términos de servicio</a>
            <a href="#">Política de privacidad</a>
            <a href="#">Ayuda</a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isAnnual = ref(true)
</script>

<style scoped lang="scss">
$primary: #f2b90d;
$primary-dark: #d4a00b;
$bg-dark: #221e10;
$surface-dark: #2d291c;
$text-gray-light: #f3f4f6;
$text-gray-dark: #9ca3af;

* { box-sizing: border-box; }

.membresias-page {
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
  backdrop-filter: blur(12px);
  background: rgba(#f8f8f5, 0.8);
  border-bottom: 1px solid rgba(229, 231, 235, 0.2);

  @media (prefers-color-scheme: dark) {
    background: rgba($bg-dark, 0.8);
    border-bottom-color: rgba($primary, 0.1);
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
    flex-shrink: 0;

    .logo-text {
      font-weight: 700;
      font-size: 1.25rem;
      letter-spacing: -0.025em;
      color: #1f2937;

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
    gap: 2rem;
    margin-left: 2.5rem;

    @media (max-width: 768px) {
      display: none;
    }

    .nav-link {
      color: #4b5563;
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 500;
      transition: color 0.3s;
      padding-bottom: 0.125rem;

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
        color: $primary;
        font-weight: 700;
      }
    }
  }

  .user-avatar {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: rgba($primary, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.875rem;
    color: $primary;
    border: 1px solid rgba($primary, 0.3);
  }
}

// MAIN CONTENT
.main-content {
  flex: 1;
  padding: 3rem 1rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }

  .bg-decorative {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;

    &::before {
      content: '';
      position: absolute;
      top: -10%;
      right: -5%;
      width: 24rem;
      height: 24rem;
      background: rgba($primary, 0.05);
      border-radius: 50%;
      filter: blur(96px);
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -10%;
      left: -5%;
      width: 24rem;
      height: 24rem;
      background: rgba($primary, 0.05);
      border-radius: 50%;
      filter: blur(96px);
    }
  }
}

.content-container {
  position: relative;
  z-index: 10;
  max-width: 96rem;
  margin: 0 auto;
}

// HEADER
.header-section {
  text-align: center;
  margin-bottom: 3rem;

  .page-title {
    font-size: 2.25rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
    color: #111;

    @media (prefers-color-scheme: dark) {
      color: white;
    }

    @media (max-width: 768px) {
      font-size: 1.875rem;
    }
  }

  .page-subtitle {
    color: #6b7280;
    max-width: 42rem;
    margin: 0 auto 2rem;

    @media (prefers-color-scheme: dark) {
      color: #9ca3af;
    }
  }

  .billing-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;

    .toggle-label {
      font-size: 0.875rem;
      font-weight: 500;
      color: #6b7280;

      @media (prefers-color-scheme: dark) {
        color: #9ca3af;
      }
    }

    .discount-badge {
      background: rgba($primary, 0.2);
      color: $primary;
      font-size: 0.75rem;
      padding: 0.125rem 0.5rem;
      border-radius: 9999px;
      border: 1px solid rgba($primary, 0.3);
      margin-left: 0.5rem;
    }

    .switch {
      position: relative;
      display: inline-block;
      width: 3.5rem;
      height: 1.75rem;

      input {
        opacity: 0;
        width: 0;
        height: 0;
      }

      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #2d291c;
        transition: 0.4s;
        border-radius: 1.75rem;
        border: 1px solid #444;

        &::before {
          position: absolute;
          content: '';
          height: 1.5rem;
          width: 1.5rem;
          left: 0.125rem;
          bottom: 0.125rem;
          background-color: white;
          transition: 0.4s;
          border-radius: 50%;
        }
      }

      input:checked + .slider {
        background-color: $primary;
        border-color: $primary;

        &::before {
          transform: translateX(1.75rem);
        }
      }

      input:focus + .slider {
        box-shadow: 0 0 0 2px rgba($primary, 0.2);
      }
    }
  }
}

// PLANS GRID
.plans-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}

.plans-column {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.payment-column {
  @media (max-width: 1024px) {
    order: -1;
  }
}

// PLAN CARDS
.plan-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 1.5rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;

  @media (prefers-color-scheme: dark) {
    background: $surface-dark;
    border-color: #4b4540;
  }

  &.premium-plan {
    background: white;
    border: 2px solid $primary;
    box-shadow: 0 20px 30px rgba($primary, 0.1);

    @media (prefers-color-scheme: dark) {
      background: $surface-dark;
    }

    .card-glow {
      position: absolute;
      top: 0;
      right: 0;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba($primary, 0.1), transparent);
      animation: glow 3s ease-in-out infinite;
    }

    .recommended-badge {
      position: absolute;
      top: 0;
      right: 0;
      background: $primary;
      color: $bg-dark;
      font-size: 0.75rem;
      font-weight: 700;
      padding: 0.5rem 1rem;
      border-radius: 0 1.5rem 0 1rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      z-index: 10;
    }
  }

  &.basic-plan {
    opacity: 0.7;
    transition: all 0.3s;

    &:hover {
      opacity: 1;
      border-color: rgba($primary, 0.5);

      @media (prefers-color-scheme: dark) {
        border-color: rgba($primary, 0.5);
      }
    }
  }

  .plan-header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 1;

    @media (max-width: 640px) {
      flex-direction: column;
    }

    .plan-info {
      text-align: left;

      .plan-title {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1.25rem;
        font-weight: 700;
        margin: 0 0 0.25rem 0;
        color: #111;

        @media (prefers-color-scheme: dark) {
          color: white;
        }
      }

      .plan-desc {
        font-size: 0.875rem;
        color: #6b7280;
        margin: 0;

        @media (prefers-color-scheme: dark) {
          color: #9ca3af;
        }
      }
    }

    .plan-price {
      text-align: right;

      .price-value {
        font-size: 1.875rem;
        font-weight: 700;
        color: #111;

        @media (prefers-color-scheme: dark) {
          color: white;
        }
      }

      .price-period {
        font-size: 1rem;
        color: #6b7280;
        font-weight: 400;

        @media (prefers-color-scheme: dark) {
          color: #9ca3af;
        }
      }

      .price-note {
        font-size: 0.75rem;
        color: $primary;
        font-weight: 500;
        margin-top: 0.25rem;
      }
    }
  }

  .features-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    position: relative;
    z-index: 1;

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }

    .feature-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 0.875rem;
      color: #111;

      @media (prefers-color-scheme: dark) {
        color: #f3f4f6;
      }

      .feature-icon {
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        background: rgba($primary, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        color: $primary;
        flex-shrink: 0;
      }

      &.small {
        font-size: 0.875rem;
      }
    }
  }

  .features-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    position: relative;
    z-index: 1;

    .feature-item {
      .feature-icon-small {
        color: #6b7280;

        @media (prefers-color-scheme: dark) {
          color: #9ca3af;
        }
      }
    }
  }
}

@keyframes glow {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
}

// TESTIMONIAL
.testimonial-card {
  background: rgba($primary, 0.05);
  border: 1px solid rgba($primary, 0.1);
  border-radius: 0.75rem;
  padding: 1.5rem;

  @media (prefers-color-scheme: dark) {
    background: rgba($primary, 0.05);
    border-color: rgba($primary, 0.1);
  }

  .quote-mark {
    font-size: 2rem;
    color: rgba($primary, 0.4);
    font-family: serif;
    margin-bottom: 0.5rem;
  }

  .testimonial-text {
    font-size: 0.875rem;
    color: #374151;
    font-style: italic;
    margin: 0 0 1rem 0;
    line-height: 1.6;

    @media (prefers-color-scheme: dark) {
      color: #d1d5db;
    }
  }

  .testimonial-author {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    .author-avatar {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      object-fit: cover;
    }

    .author-info {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      .author-name {
        font-size: 0.875rem;
        font-weight: 700;
        color: #111;

        @media (prefers-color-scheme: dark) {
          color: white;
        }
      }

      .author-stars {
        display: flex;
        gap: 0.125rem;
      }
    }
  }
}

// PAYMENT CARD
.payment-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 6rem;

  @media (prefers-color-scheme: dark) {
    background: $surface-dark;
    border-color: #4b4540;
  }

  @media (max-width: 1024px) {
    position: relative;
    top: 0;
  }

  .payment-header {
    padding: 1.5rem;
    border-bottom: 1px solid #e5e7eb;
    background: #f9fafb;

    @media (prefers-color-scheme: dark) {
      background: rgba(0, 0, 0, 0.2);
      border-bottom-color: #4b4540;
    }

    .payment-title {
      font-size: 1.125rem;
      font-weight: 700;
      margin: 0 0 1rem 0;
      color: #111;

      @media (prefers-color-scheme: dark) {
        color: white;
      }
    }

    .payment-tabs {
      display: flex;
      padding: 0.25rem;
      background: #e5e7eb;
      border-radius: 0.5rem;
      gap: 0.5rem;

      @media (prefers-color-scheme: dark) {
        background: rgba(0, 0, 0, 0.4);
      }

      .tab-btn {
        flex: 1;
        padding: 0.5rem 0.75rem;
        border-radius: 0.375rem;
        background: white;
        color: #6b7280;
        border: none;
        cursor: pointer;
        font-size: 0.875rem;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        transition: all 0.3s;

        @media (prefers-color-scheme: dark) {
          background: $surface-dark;
          color: #9ca3af;
        }

        &.active {
          background: white;
          color: #111;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

          @media (prefers-color-scheme: dark) {
            background: rgba($primary, 0.1);
            color: $primary;
          }
        }
      }
    }
  }

  .payment-form {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
}

// FORM ELEMENTS
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;

  .form-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 0.05em;

    @media (prefers-color-scheme: dark) {
      color: #9ca3af;
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
      padding: 0.625rem 0.75rem 0.625rem 2.5rem;
      background: #f3f4f6;
      border: 1px solid #d1d5db;
      border-radius: 0.5rem;
      font-size: 0.875rem;
      color: #111;
      transition: all 0.3s;

      @media (prefers-color-scheme: dark) {
        background: $bg-dark;
        border-color: #4b4540;
        color: white;
      }

      &:focus {
        outline: none;
        
        
        border-color: $primary;
      }

      &.card-number {
        padding-right: 3rem;
      }
    }

    .card-brands {
      position: absolute;
      right: 0.75rem;
      display: flex;
      gap: 0.5rem;

      .brand-logo {
        height: 0.75rem;
        opacity: 0.5;
      }
    }
  }
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

// PAYMENT SUMMARY
.payment-summary {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    border-top-color: #4b4540;
  }

  .summary-row {
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;
    color: #6b7280;

    @media (prefers-color-scheme: dark) {
      color: #9ca3af;
    }

    &.discount {
      color: #22c55e;

      @media (prefers-color-scheme: dark) {
        color: #86efac;
      }
    }

    &.total {
      color: #111;
      font-weight: 700;
      font-size: 1.125rem;
      padding-top: 0.75rem;
      border-top: 1px solid #e5e7eb;

      @media (prefers-color-scheme: dark) {
        color: white;
        border-top-color: #4b4540;
      }
    }
  }
}

// PAYMENT BUTTON
.payment-button {
  width: 100%;
  padding: 0.875rem 1rem;
  background: $primary;
  color: $bg-dark;
  border: none;
  border-radius: 0.75rem;
  font-weight: 700;
  font-size: 0.875rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s;
  box-shadow: 0 10px 20px -5px rgba($primary, 0.3);

  &:hover {
    background: $primary-dark;
    transform: scale(1.01);
  }

  &:active {
    transform: scale(0.99);
  }
}

// SECURITY FOOTER
.security-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 0.5rem;

  @media (prefers-color-scheme: dark) {
    color: #6b7280;
  }
}

// TRUST SECTION
.trust-section {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;

  @media (prefers-color-scheme: dark) {
    border-top-color: #4b4540;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .trust-logos {
    display: flex;
    gap: 1.5rem;
    opacity: 0.6;
    transition: opacity 0.3s;

    &:hover {
      opacity: 1;
    }

    .logo-stripe {
      height: 1.5rem;
    }

    .logo-paypal {
      height: 1.5rem;
    }
  }

  .trust-links {
    display: flex;
    gap: 2rem;

    @media (max-width: 768px) {
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;
    }

    a {
      font-size: 0.875rem;
      color: #6b7280;
      text-decoration: none;
      transition: color 0.3s;

      @media (prefers-color-scheme: dark) {
        color: #9ca3af;
      }

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
</style>