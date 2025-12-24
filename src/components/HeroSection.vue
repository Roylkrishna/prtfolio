<script setup>
import profileImg from '../assets/profile.jpg'
import { ref, onMounted } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

useScrollReveal()

const displayedHeadline = ref('')
const fullHeadline = "Making quality Education Accessible to all with Tech and AI"
const typeSpeed = 30

const typeWriter = () => {
  let i = 0
  const timer = setInterval(() => {
    if (i < fullHeadline.length) {
      displayedHeadline.value += fullHeadline.charAt(i)
      i++
    } else {
      clearInterval(timer)
    }
  }, typeSpeed)
}

onMounted(() => {
  setTimeout(typeWriter, 500) // Delay start slightly
})
</script>

<template>
  <section id="hero" class="hero-section">
    <div class="container hero-content">
      <div class="text-content reveal">
        <h2 class="greeting">Hello, I'm</h2>
        <h1 class="name">Deependra</h1>
        <h3 class="headline typing-cursor">{{ displayedHeadline }}</h3>
        <p class="intro reveal delay-200">
          Enthusiastic teacher and researcher bridging Physics with Data Science.
          Passionate about making learning creative and engaging.
        </p>
        <div class="cta-buttons reveal delay-300">
          <router-link to="/contact" class="btn btn-primary">Get in Touch</router-link>
          <router-link to="/projects" class="btn btn-outline">View Projects</router-link>
        </div>
        
      </div>
      <div class="visual-content reveal delay-200">
        <div class="image-placeholder">
           <img :src="profileImg" alt="Deependra Pratap Singh" class="profile-image" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding-top: var(--header-height);
  background: radial-gradient(circle at top right, rgba(56, 189, 248, 0.1), transparent 40%);
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
}

.greeting {
  color: var(--color-accent);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.name {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #fff, #94a3b8);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.headline {
  font-size: 1.5rem;
  color: var(--color-text-secondary);
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.intro {
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  max-width: 500px;
  margin-bottom: 2.5rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
}

.video-container {
  margin-top: 2.5rem;
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  overflow: hidden;
  width: 100%;
  max-width: 600px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.profile-image {
  width: 350px;
  height: 350px;
  object-fit: cover;
  object-position: top center;
  border-radius: 50%;
  border: 4px solid rgba(56, 189, 248, 0.3);
  box-shadow: 0 0 30px rgba(56, 189, 248, 0.2);
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  opacity: 0.7;
}

.arrow {
  font-size: 1.5rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  
  .intro {
    margin: 0 auto 2.5rem;
  }

  .cta-buttons {
    justify-content: center;
  }
  
  .visual-content {
    display: flex;
    justify-content: center;
  }
  
  .profile-image {
    width: 250px;
    height: 250px;
  }
  
  .name {
    font-size: 2.5rem;
  }
}

.typing-cursor::after {
  content: '|';
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
