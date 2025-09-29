// Main JavaScript file for DevTools Conglomerate

// Responsive navigation toggle with accessibility and smooth transitions
export function initNavToggle() {
    const navToggle = document.createElement('button');
    navToggle.innerHTML = '☰';
    navToggle.className = 'md:hidden text-2xl p-2 focus:outline-none';
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-controls', 'nav-menu');
    navToggle.setAttribute('aria-label', 'Toggle navigation menu');
    const nav = document.querySelector('nav > div > div.flex.items-center.space-x-4');
    if (nav) {
        nav.id = 'nav-menu';
        nav.classList.add('transition-all', 'duration-300', 'ease-in-out');
        navToggle.addEventListener('click', () => {
            const isExpanded = nav.classList.contains('hidden');
            nav.classList.toggle('hidden');
            navToggle.setAttribute('aria-expanded', !isExpanded);
        });
        nav.parentNode.insertBefore(navToggle, nav);
        nav.classList.add('hidden', 'flex-col', 'space-y-2', 'md:flex', 'md:flex-row', 'md:space-x-4');
    }
}

// Dark mode toggle with persistence
export function initDarkMode() {
    const darkToggle = document.createElement('button');
    darkToggle.textContent = '🌙';
    darkToggle.className = 'ml-4 px-3 py-1 border rounded text-indigo-600 hover:bg-indigo-100 focus:outline-none';
    darkToggle.title = 'Toggle Dark Mode';
    darkToggle.setAttribute('aria-label', 'Toggle dark mode');
    darkToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        if (document.documentElement.classList.contains('dark')) {
            darkToggle.textContent = '☀️';
            localStorage.setItem('darkMode', 'enabled');
        } else {
            darkToggle.textContent = '🌙';
            localStorage.setItem('darkMode', 'disabled');
        }
    });
    const navBar = document.querySelector('nav > div > div.flex.items-center.space-x-4');
    if (navBar) {
        navBar.appendChild(darkToggle);
    }

    // Load dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled' || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        darkToggle.textContent = '☀️';
    }
}

// Fade-in animation for sections
export function initFadeIn() {
    const sections = document.querySelectorAll('section, main, header, footer');
    sections.forEach(section => {
        section.classList.add('opacity-0', 'transition-opacity', 'duration-1000', 'ease-in-out');
    });
    setTimeout(() => {
        sections.forEach(section => {
            section.classList.remove('opacity-0');
            section.classList.add('opacity-100');
        });
    }, 100);
}

// Form validation and search enhancements
export function initSearch() {
    const searchInput = document.querySelector('input[placeholder="Search tools..."]');
    const searchButton = document.querySelector('button[type="submit"]') || document.querySelector('button').contains('Search');
    const apiCards = document.querySelectorAll('.grid > div');

    if (searchInput && apiCards.length > 0) {
        // Live filtering
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            apiCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const desc = card.querySelector('p').textContent.toLowerCase();
                if (title.includes(query) || desc.includes(query)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });

        // Form validation
        searchInput.addEventListener('blur', () => {
            if (searchInput.value.trim() === '') {
                searchInput.setCustomValidity('Please enter a search term');
            } else {
                searchInput.setCustomValidity('');
            }
        });

        // Search button functionality
        if (searchButton) {
            searchButton.addEventListener('click', (e) => {
                e.preventDefault();
                const query = searchInput.value.trim();
                if (query === '') {
                    alert('Please enter a search term');
                    searchInput.focus();
                } else {
                    alert(`Searching for: ${query}`);
                }
            });
        }
    }
}

// Initialize all features
export function init() {
    initNavToggle();
    initDarkMode();
    initFadeIn();
    initSearch();
}

// Auto-initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', init);
