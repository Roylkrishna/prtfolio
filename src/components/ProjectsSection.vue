<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
useScrollReveal()

const projects = [
  {
    title: "Quiz Master App",
    category: "App Development",
    date: "May 2025 - Aug 2025",
    description: "Built a multi-user exam preparation platform for multiple courses, providing practice features and one admin control.",
    link: "#"
  },
  {
    title: "Bank Telemarketing Success Prediction",
    category: "Machine Learning",
    date: "Aug 2024 - Dec 2024",
    description: "Built a classification model to predict telemarketing campaign success using Logistic Regression, Random Forest, and XGBoost. Achieved F1 score of 0.73.",
    link: "#"
  },
  {
    title: "Influencer Engagement Platform",
    category: "App Development",
    date: "May 2024 - Aug 2024",
    description: "Built a sponsorship platform where sponsors can approach influencers, and influencers can choose campaigns.",
    link: "#"
  },
  {
    title: "Gift Center Purchasing Patterns",
    category: "Data Analysis",
    date: "Aug 2024 - Dec 2024",
    description: "Collected data from a gift center, analyzed, interpreted it, and gave suggestions for business improvement.",
    link: "#"
  },
  {
    title: "Electronic Band Structure Calculations",
    category: "MSc Project",
    date: "Aug 2025 - Nov 2025",
    description: "Calculated band structure of existing materials using Quantum Espresso software to analyze electronic and physical properties.",
    link: "#"
  },
  {
    title: "Solar Tracking System",
    category: "Electronics",
    date: "March 2025 - April 2025",
    description: "Simulated a Solar tracking system using LDR to increase efficiency with automatic rotation tracking the sun.",
    link: "#"
  }
];
</script>

<template>
  <section id="projects" class="section">
    <div class="container reveal">
      <h2 class="section-title">My <span>Projects</span></h2>
      
      <div class="projects-grid">
        <div v-for="(project, index) in projects" :key="index" class="project-card">
          <div class="card-header">
            <span class="category">{{ project.category }}</span>
            <span class="date">{{ project.date }}</span>
          </div>
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="card-footer">
            <a :href="project.link" class="project-link">View Project →</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background-color: var(--color-bg-secondary);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border-color: rgba(56, 189, 248, 0.5);
}

.card-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.85rem;
}

.category {
  color: var(--color-accent);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.date {
  color: var(--color-text-secondary);
}

.project-card h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--color-text-primary);
}

.project-card p {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  flex-grow: 1;
  margin-bottom: 1.5rem;
}

.project-link {
  color: var(--color-text-primary);
  font-weight: 500;
  transition: color 0.2s;
}

.project-link:hover {
  color: var(--color-accent);
}
</style>
