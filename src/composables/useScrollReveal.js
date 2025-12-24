import { onMounted, onUnmounted } from 'vue';

export function useScrollReveal(className = 'reveal', activeClass = 'active', threshold = 0.15) {
    let observer = null;

    onMounted(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: threshold
        };

        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(activeClass);
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, options);

        const elements = document.querySelectorAll(`.${className}`);
        elements.forEach(el => observer.observe(el));
    });

    onUnmounted(() => {
        if (observer) observer.disconnect();
    });
}
