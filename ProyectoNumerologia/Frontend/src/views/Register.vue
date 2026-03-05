asar · VUE
Copiar

<template>
  <div class="page">
    <div class="bg"></div>
    <div class="card">
      <div class="left gt-sm">
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkJsS36YgozZ1lzi1eWpVcDcr15CuClyFAQ2RMXHRZnz4XFuy7NuFijhBoHMxPIqflK2zQMCMe7niNY95d10Y5NbRyc_ZNNJeg7Fl7zbFKVM1C3V80Ao9MeFy5OCjUG3z2MEga8-iR_aX7pgLgTeYOXKe26XnYxZuUSnjSHc9QHHEibKdTM0oTOOcQ51JE2G4hxaOc4AkPqiBK1pggJDJ6iVBsz460cT3mm-jbodQ1Df23Aw4ikxZ5BX8HWOrodeWllc9_XXRGFbI" class="bg-img" />
        <div class="overlay"></div>
        <div class="content">
          <div class="logo">
            <q-icon name="auto_awesome" color="gold" size="32px" />
            <h3>Num<span class="primary">AI</span></h3>
          </div>
          <h1>Descubre el código secreto de tu vida</h1>
          <p>Únete a la plataforma de numerología más avanzada. Lecturas generadas por IA, cartas natales precisas y una comunidad consciente te esperan.</p>
          <div class="testimonial">
            <div class="avatars">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1M61kIf5lRsKzV8pqX2jxZsll2t0icWslo6Nzw2gSBZnkrUCnmTS9YGnL74nFikp04578wz223TEdTGIiI2NqZ6_RcDpR8seX8B5vDonGR2nF1ZeLBfOEMuKjhlsgleRURbdwyQs3v1oBVrNP51buZbdsXzZqByEugLXUP6yT3TZz_MxVQHs3qjyb9Z8aIpm4SGf2uG1OVT3mfNA5rwDh0Kke6kvJaBTLrGNBaVehwYEiuTM3NGgstp6-Pl4y7XBvDxzyioUOuZw" />
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDESfm8icaW9wT-nAlrwx_3JF5APeCxP0OvaIGXrtPsjVO3xpTfKFtPh5UvfOMDg7rvsrPvAyx2mfT4oEjlDlCviWHnKVYd2LcoIigfHEmLXEZaa5WllpMc7_KQzqEoACoXc39jHw9OpvgUTbr1KUPKAS5iLwutYW_AjQZGGPRtpcmVq9pY6IMwL3VFkeBUxAM_gzW3otC4BjLE04mSZmQp6BowVcOaeHSgIiacZc2JImQiuWkg7Fve5Pe_ZDDg_xWhcbl6JI6sd-k" />
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuChi-kYa_wHnbfwjN5ZaPKeehD21HxhX0XH0alzsbL0oCa1AJS6Qz0XYlOxsPB3TaRFCmp58zwU1m1vTHx5oPKtJpoWWjO1t73hfsrovyXjgOpeATizbAbYaHgC5JATCOXHnp9Dfzs5xyvXkeTvxNIrwc_wdHOTGFGisHzJpcq2nKKvGuyK7bg11UDv3ZlkCMxsMyzJoGMEh1VSV1x54QiqG8Y7R4Me5lDNai_ccdAnAwZ04ZhCx_PoaSuGOflksB3u-Y5PDypKqU" />
            </div>
            <div class="rating">
              <div class="stars">
                <q-icon name="star" color="gold" size="14px" />
                <q-icon name="star" color="gold" size="14px" />
                <q-icon name="star" color="gold" size="14px" />
                <q-icon name="star" color="gold" size="14px" />
                <q-icon name="star" color="gold" size="14px" />
              </div>
              <p><strong>10k+</strong> usuarios iluminados</p>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="top-link gt-md">¿Ya tienes cuenta? <a href="#">Inicia sesión</a></div>
        <div class="form-section">
          <h2>Crear Cuenta</h2>
          <p>Ingresa tus datos para calcular tu numerología inicial.</p>
          <form @submit.prevent="submit" class="form">
            <div class="field">
              <label>Nombre Completo</label>
              <div class="input-wrapper">
                <q-icon name="person_outline" />
                <input v-model="data.name" type="text" placeholder="Ej. Ana García" />
              </div>
            </div>
            <div class="field">
  <label>Edad</label>
  <div class="input-wrapper">
    <q-icon name="calendar_today" />
    <input v-model="data.age" type="number" min="0" placeholder="Ej. 25" />
  </div>
</div>
            <div class="field">
              <label>Correo Electrónico</label>
              <div class="input-wrapper">
                <q-icon name="alternate_email" />
                <input v-model="data.email" type="email" placeholder="nombre@ejemplo.com" />
              </div>
            </div>
            <div class="field">
              <label>Fecha de Nacimiento</label>
              <div class="input-wrapper">
                <q-icon name="cake" />
                <input v-model="data.dob" type="date" class="date-input" />
              </div>
              <p class="hint"><q-icon name="lock" size="12px" />Necesario para tu carta natal precisa</p>
            </div>
            <div class="field">
              <label>Contraseña</label>
              <div class="input-wrapper">
                <q-icon name="lock_outline" />
                <input v-model="data.password" :type="showPwd ? 'text' : 'password'" placeholder="••••••••" />
                <q-icon :name="showPwd ? 'visibility' : 'visibility_off'" class="toggle-pwd" @click="showPwd=!showPwd" />
              </div>
            </div>
            <button type="submit" class="btn-submit" @click="submit"><span>Calcular mi Numerología</span><q-icon name="arrow_forward" size="18px" /></button>
          </form>
          <div class="divider">O regístrate con</div>
          <div class="social">
            <button class="social-btn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" /></svg>Google</button>
            <button class="social-btn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.24.75-.62 1.49-1.12 2.08-.8.95-1.51 1.63-2.41 1.99zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>Apple</button>
          </div>
          <div class="bottom-link lt-md">¿Ya tienes cuenta? <a href="#">Inicia sesión</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axiosInstance from '../plugins/pluginAxios.js'

const data = ref({ 
  name: '', 
  email: '', 
  dob: '', 
  age: '',   // 👈 nuevo campo
  password: '' 
})

const showPwd = ref(false)

const submit = async () => {
  try {
    const response = await axiosInstance.post(
      "/usuario/register",
      data.value
    )

    alert("Usuario registrado correctamente")
    console.log(response.data)

  } catch (error) {
    console.error(error)
    alert(error.response?.data?.error || error.response?.data?.message || "Error al registrar usuario")
  }
}
</script>

<style scoped lang="scss">
$primary: #7311d4;
$light: #8f3ce6;
$gold: #D4AF37;
$bg: #191022;
$surface: #231630;

.page {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: $bg;
  color: #e5e7eb;
  
  .bg {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at top left, rgba($primary, 0.2), transparent);
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 24rem;
      height: 24rem;
      background: rgba($primary, 0.1);
      border-radius: 50%;
      filter: blur(96px);
      opacity: 0.5;
    }
  }
}

.card {
  max-width: 112rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  min-height: 37.5rem;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 10;
  border: 1px solid rgba($primary, 0.2);
  background: $surface;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}

.left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem;
  position: relative;
  
  .bg-img {
    position: absolute;
    inset: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.6;
    mix-blend-mode: overlay;
  }
  
  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, $bg, rgba($primary, 0.2), transparent);
    z-index: 1;
  }
  
  .content {
    position: relative;
    z-index: 10;
    
    .logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 2rem;
      
      h3 {
        font-size: 1.5rem;
        font-weight: 700;
        color: white;
        margin: 0;
        
        .primary { color: $primary; }
      }
    }
    
    h1 {
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1.2;
      color: white;
      margin: 0 0 1.5rem 0;
    }
    
    p {
      font-size: 1.125rem;
      color: #d1d5db;
      font-weight: 300;
      line-height: 1.5;
    }
    
    .testimonial {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      border-radius: 0.75rem;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(4px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      margin-top: auto;
      
      .avatars {
        display: flex;
        
        img {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          border: 2px solid $bg;
          object-fit: cover;
          margin-left: -0.75rem;
          
          &:first-child { margin-left: 0; }
        }
      }
      
      .rating {
        .stars {
          display: flex;
          gap: 0.125rem;
          margin-bottom: 0.25rem;
        }
        
        p {
          font-size: 0.875rem;
          color: #d1d5db;
          margin: 0;
          font-weight: normal;
          
          strong { color: white; }
        }
      }
    }
  }
}

.right {
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.top-link {
  position: absolute;
  top: 0;
  right: 0;
  padding: 2rem;
  font-size: 0.875rem;
  color: #9ca3af;
  
  a {
    color: $primary;
    text-decoration: none;
    font-weight: 500;
    margin-left: 0.25rem;
    
    &:hover { color: $light; }
  }
}

.form-section {
  width: 100%;
  max-width: 28rem;
  margin: 0 auto;
  
  h2 {
    font-size: 1.875rem;
    font-weight: 700;
    color: white;
    margin: 0 0 0.5rem 0;
  }
  
  > p {
    color: #9ca3af;
    margin: 0 0 2rem 0;
  }
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  
  label {
    font-size: 0.875rem;
    font-weight: 500;
    color: #d1d5db;
    margin-left: 0.25rem;
  }
  
  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    
    i {
      position: absolute;
      left: 0.75rem;
      color: #6b7280;
      transition: color 0.2s;
      pointer-events: none;
    }
    
    input {
      width: 100%;
      padding: 0.75rem 0.75rem 0.75rem 2.5rem;
      border: 1px solid #374151;
      border-radius: 0.5rem;
      background: rgba($bg, 0.5);
      color: #f3f4f6;
      font-size: 0.875rem;
      transition: all 0.2s;
      
      &::placeholder { color: #9ca3af; }
      
      &:focus {
        outline: none;
        border-color: $primary;
        box-shadow: 0 0 0 1px $primary;
        
        ~ i { color: $gold; }
      }
      
      &.date-input { color-scheme: dark; }
      
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 30px $surface inset !important;
        -webkit-text-fill-color: white !important;
      }
    }
    
    .toggle-pwd {
      position: absolute;
      right: 0.75rem;
      cursor: pointer;
      color: #6b7280;
      
      &:hover { color: #d1d5db; }
    }
  }
  
  .hint {
    font-size: 0.75rem;
    color: rgba($primary, 0.8);
    margin-left: 0.25rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin-top: 0.25rem;
  }
}

.btn-submit {
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background: $primary;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 0 15px rgba($primary, 0.5);
  margin-top: 0.5rem;
  
  &:hover {
    background: $light;
    box-shadow: 0 0 25px rgba($primary, 0.7);
  }
}

.divider {
  position: relative;
  margin: 2rem 0 1.5rem;
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    border-top: 1px solid #374151;
  }
  
  &::after {
    content: attr(data-label);
    position: relative;
    display: inline-block;
    padding: 0 0.75rem;
    background: $surface;
    z-index: 1;
  }
}

.social {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}

.social-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  border: 1px solid #374151;
  border-radius: 0.5rem;
  background: rgba($bg, 0.5);
  color: #d1d5db;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    color: white;
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
}

.bottom-link {
  text-align: center;
  font-size: 0.875rem;
  color: #9ca3af;
  margin-top: 2rem;
  
  a {
    color: $primary;
    text-decoration: none;
    font-weight: 500;
    margin-left: 0.25rem;
    
    &:hover { color: $light; }
  }
}

.gt-sm {
  @media (max-width: 640px) { display: none; }
}

.gt-md {
  @media (max-width: 768px) { display: none; }
}

.lt-md {
  @media (min-width: 768px) { display: none; }
}
</style>