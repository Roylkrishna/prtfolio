<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
useScrollReveal()
</script>

<template>
  <section id="contact" class="section contact-section">
    <div class="container text-center reveal">
      <h2 class="section-title">Get In <span>Touch</span></h2>
      <p class="contact-intro">
        I am always open to discussing new teaching opportunities, data science projects, or creative collaborations.
      </p>

      <div class="contact-cards">
        <a href="mailto:deependra.singh@iitg.ac.in" class="contact-card">
          <div class="icon">✉️</div>
          <h3>Email</h3>
          <p>deependra.singh@iitg.ac.in</p>
        </a>

        <a href="https://linkedin.com/in/roylkrishna" target="_blank" class="contact-card">
          <div class="icon">🔗</div> <!-- Using a link emoji for LinkedIn -->
          <h3>LinkedIn</h3>
          <p>/roylkrishna</p>
        </a>
      </div>

      <footer class="footer">
        <p>© {{ new Date().getFullYear() }} Deependra Pratap Singh. All rights reserved.</p>
      </footer>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background-color: var(--color-bg-secondary);
  padding-bottom: 2rem;
}

.text-center {
  text-align: center;
}

.contact-intro {
  max-width: 600px;
  margin: 0 auto 3rem;
  color: var(--color-text-secondary);
  font-size: 1.1rem;
}

.contact-cards {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 4rem;
}

.contact-card {
  background: var(--color-bg-primary);
  padding: 2rem 3rem;
  border-radius: 12px;
  min-width: 250px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-accent);
}

.icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.contact-card h3 {
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
}

.contact-card p {
  color: var(--color-text-secondary);
  font-weight: 500;
}

.sub-text {
  font-size: 0.9rem;
  margin-top: 0.25rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
}

.social-btn {
  font-size: 1.1rem;
  color: var(--color-text-primary);
  padding: 0.5rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  transition: all 0.3s ease;
}

.social-btn:hover {
  background: var(--color-accent);
  border-color: var(--color-accent);
}

.footer {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 2rem;
  color: var(--color-text-secondary);
  font-size: 0.9rem;
}
</style>
