<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
useScrollReveal()

const education = [
  {
    degree: "Master of Science in Physics",
    institution: "Indian Institute of Technology, Guwahati",
    year: "2024 - Present",
    score: "CGPA: 6.6"
  },
  {
    degree: "BS Data Science",
    institution: "Indian Institute of Technology, Madras",
    year: "2021 - Present",
    score: "CGPA: 7.57"
  },
  {
    degree: "Bachelor of Education (B.Ed)",
    institution: "S.N. Mahavidyalaya Vinodpur, Bhongaon",
    year: "2021 - 2023",
    score: "81.54%"
  },
  {
    degree: "Bachelor of Science",
    institution: "National PG College, Bhongaon",
    year: "2017 - 2020",
    score: "55.93%"
  }
];

</script>

<template>
  <section id="about" class="section about-section">
    <div class="container reveal">
      <h2 class="section-title">About <span>Me</span></h2>
      
      <div class="content-grid">
        <div class="bio-card">
          <h3>Career Objective</h3>
          <p>
            Developing Scintific temprament and retional thinking in students. My motivation is to help students grow into the best version of themselves and achieve educational excellence.
          </p>
          <div class="achievements mt-4">
            <h4>Key Achievements</h4>
            <ul>
              <li>Qualified Central Teacher Eligibility Test (CTET): Paper I (115) and Paper II (110).</li>
              <li>Represented Agra University yoga team in National Yoga Championship.</li>
            </ul>
          </div>
        </div>

        <div class="education-column">
          <h3>Education</h3>
          <div class="timeline">
            <div v-for="(edu, index) in education" :key="index" class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <h4>{{ edu.degree }}</h4>
                <div class="institution">{{ edu.institution }}</div>
                <div class="meta">
                  <span class="year">{{ edu.year }}</span>
                  <span class="score">{{ edu.score }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.about-section {
  background-color: var(--color-bg-secondary);
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--color-text-primary);
  border-left: 4px solid var(--color-accent);
  padding-left: 1rem;
}

.bio-card p {
  color: var(--color-text-secondary);
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.achievements h4 {
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
}

.achievements ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  color: var(--color-text-secondary);
}

.timeline {
  border-left: 2px solid rgba(255, 255, 255, 0.1);
  padding-left: 1.5rem;
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
}

.timeline-dot {
  position: absolute;
  left: -1.95rem; /* Adjust based on border and padding */
  top: 0.25rem;
  width: 12px;
  height: 12px;
  background-color: var(--color-accent);
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.2);
}

.timeline-content h4 {
  font-size: 1.1rem;
  color: var(--color-text-primary);
}

.institution {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
}

.meta {
  display: flex;
  gap: 1rem;
  font-size: 0.85rem;
  color: var(--color-accent);
  margin-top: 0.25rem;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.skill-tag {
  background-color: rgba(56, 189, 248, 0.1);
  color: var(--color-accent);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 1px solid rgba(56, 189, 248, 0.2);
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background-color: var(--color-accent);
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}
</style>
