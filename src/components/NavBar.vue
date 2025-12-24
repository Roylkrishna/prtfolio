<script setup>
</script>

<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="container nav-content">
      <router-link to="/" class="logo">
        Deependra Pratap Singh
      </router-link>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/experience">Experience</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  letter-spacing: -0.025em;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  font-weight: 500;
  color: var(--color-text-secondary);
  position: relative;
}

.nav-links a:hover, .nav-links a.router-link-active {
  color: var(--color-text-primary);
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-accent);
  transition: width 0.3s ease;
}

.nav-links a:hover::after, .nav-links a.router-link-active::after {
  width: 100%;
}

@media (max-width: 768px) {
  .nav-links {
    display: none; /* Mobile menu to be implemented if requested */
  }
}
</style>
