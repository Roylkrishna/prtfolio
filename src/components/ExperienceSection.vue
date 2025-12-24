<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
useScrollReveal()

const experiences = [
  {
    role: "Physics Teacher",
    company: "Self Employed",
    period: "2017 - 2020",
    description: "Worked as Physics Teacher for class XI-XII. Mentored students for JEE and NEET through guidance and a one-month crash Course.",
    type: "work"
  },
  {
    role: "Teaching Internship",
    company: "S. N. Mahavidyalaya Vinodpur, Bhongaon",
    period: "During B.Ed",
    description: "Gained hands-on teaching experience during B.Ed. Incorporated peer feedback to improve instruction.",
    type: "work"
  }
];

const positions = [
  {
    role: "Secretary",
    company: "Bandipur House, IIT Madras BS",
    period: "Aug 2024 - July 2025",
    description: "Facilitated collaboration between 4200+ House members, leading a House Council of 18 members. Coordinated execution of 16 student meetups across India, Dubai, and Singapore. Assisted council in organizing academic/non-academic activities for 40,000+ students."
  },
  {
    role: "Group Leader",
    company: "Group 5, General Student Body, IIT Madras BS",
    period: "Sep 2022 - Aug 2024",
    description: "Coordinated events and support between 70+ group members and House Council. Organized support meetings and raised student concerns on the official support forum."
  },
  {
    role: "Peer Mentor",
    company: "SAATHI Counseling Cell, IITG",
    period: "Aug 2025 - Present",
    description: "Volunteering as a Peer mentor for Junior Students, providing support in academic and non-academic aspects."
  }
];
</script>

<template>
  <section id="experience" class="section experience-section">
    <div class="container reveal">
      <h2 class="section-title">Experience & <span>Leadership</span></h2>
      
      <div class="video-section reveal">
        <div class="video-container">
          <iframe 
            src="https://www.youtube.com/embed/hGELRSjXvoA?si=EoXAwoVxEXQpv1mC&amp;clip=Ugkxh8mM2cF3RRr1f7DnsHhMhmkCXNXAwBQ4&amp;clipt=EIGS2QIYxbfaAg&amp;autoplay=1&amp;mute=0" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
          </iframe>
        </div>
      </div>
      
      <div class="experience-grid">
        <div class="column">
          <h3 class="subtitle">Teaching Experience</h3>
          <div class="timeline">
            <div v-for="(exp, index) in experiences" :key="index" class="card">
              <div class="card-header">
                <h4>{{ exp.role }}</h4>
                <div class="period">{{ exp.period }}</div>
              </div>
              <div class="company">{{ exp.company }}</div>
              <p>{{ exp.description }}</p>
            </div>
          </div>
        </div>

        <div class="column">
          <h3 class="subtitle">Positions of Responsibility</h3>
          <div class="timeline">
            <div v-for="(pos, index) in positions" :key="index" class="card">
              <div class="card-header">
                <h4>{{ pos.role }}</h4>
                <div class="period">{{ pos.period }}</div>
              </div>
              <div class="company">{{ pos.company }}</div>
              <p>{{ pos.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  position: relative;
}

.experience-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: var(--color-text-primary);
  text-align: center;
}

.card {
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border-left: 4px solid var(--color-accent);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateX(5px);
  background: rgba(30, 41, 59, 0.8);
}

.card-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  align-items: flex-start;
}

.card-header h4 {
  color: var(--color-text-primary);
  font-size: 1.1rem;
}

.period {
  font-size: 0.85rem;
  color: var(--color-accent);
  white-space: nowrap;
  margin-left: 1rem;
}

.company {
  color: var(--color-text-secondary);
  font-weight: 500;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

p {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .experience-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.video-section {
  margin-top: 2rem;
  margin-bottom: 4rem;
  text-align: center;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  overflow: hidden;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
