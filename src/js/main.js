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

// XSS Scanner Demo
export function initXSSScannerDemo() {
    const scanBtn = document.getElementById('scan-xss');
    const inputTextarea = document.getElementById('xss-input');
    const outputTextarea = document.getElementById('xss-output');

    if (scanBtn && inputTextarea && outputTextarea) {
        scanBtn.addEventListener('click', () => {
            const input = inputTextarea.value;
            const result = scanForXSS(input);
            outputTextarea.value = result ? 'Potential XSS detected!' : 'No XSS detected.';
        });
    }
}

function scanForXSS(input) {
    // Simple XSS detection logic (for demo purposes)
    const xssPattern = /<script.*?>.*?<\/script.*?>|on\w+=["'].*?["']/gi;
    return xssPattern.test(input);
}



// Initialize all features
export function init() {
    initNavToggle();
    initDarkMode();
    initFadeIn();
    initSearch();
    initXSSScannerDemo();


    // Test dark mode compatibility for new elements
    const demoSection = document.getElementById('scan-xss');
    if (demoSection) {
        const observer = new MutationObserver(() => {
            if (document.documentElement.classList.contains('dark')) {
                demoSection.classList.add('dark');
            } else {
                demoSection.classList.remove('dark');
            }
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    }
}

// Interactive API Playground functionality
export function initAPIPlayground() {
    const apiSelect = document.getElementById('api-select');
    const requestEditor = document.getElementById('request-editor');
    const sendRequestBtn = document.getElementById('send-request');
    const responseDisplay = document.getElementById('response-display');
    const responseStatus = document.getElementById('response-status');

    if (!apiSelect || !requestEditor || !sendRequestBtn || !responseDisplay || !responseStatus) {
        return; // Elements not found, skip initialization
    }

    // Extract API names from the page
    const apiCards = document.querySelectorAll('.grid > div h3');
    const apiNames = Array.from(apiCards).map(card => card.textContent.trim());

    // API examples data (dynamically generated based on extracted names)
    const apiExamples = {};

    // Define examples for each API type
    const exampleTemplates = {
        'XSS Scanner': {
            endpoint: '/api/xss-scan',
            method: 'POST',
            example: JSON.stringify({
                code: "<script>alert('xss')</script>"
            }, null, 2)
        },
        'SQL Injection Scanner': {
            endpoint: '/api/sql-injection-scan',
            method: 'POST',
            example: JSON.stringify({
                code: "SELECT * FROM users WHERE id = '1' OR '1'='1'"
            }, null, 2)
        },
        'SEO Meta Validator': {
            endpoint: '/api/seo-meta-validate',
            method: 'POST',
            example: JSON.stringify({
                html: "<html><head><title>My Page</title><meta name='description' content='Page description'></head></html>"
            }, null, 2)
        },
        'Code Complexity Analyzer': {
            endpoint: '/api/code-complexity',
            method: 'POST',
            example: JSON.stringify({
                code: "function factorial(n) { if (n <= 1) return 1; return n * factorial(n-1); }"
            }, null, 2)
        },
        'Dependency Vulnerability Checker': {
            endpoint: '/api/dependency-check',
            method: 'POST',
            example: JSON.stringify({
                dependencies: {
                    "express": "4.17.1",
                    "lodash": "4.17.20"
                }
            }, null, 2)
        },
        'JSON-to-XML Converter': {
            endpoint: '/api/json-to-xml',
            method: 'POST',
            example: JSON.stringify({
                name: "John",
                age: 30,
                city: "New York"
            }, null, 2)
        },
        'YAML Validator Formatter': {
            endpoint: '/api/yaml-validate',
            method: 'POST',
            example: JSON.stringify({
                yaml: "name: John\nage: 30\ncity: New York"
            }, null, 2)
        },
        'CSV-to-JSON API': {
            endpoint: '/api/csv-to-json',
            method: 'POST',
            example: JSON.stringify({
                csv: "name,age,city\nJohn,30,New York\nJane,25,London"
            }, null, 2)
        },
        'Image Format Converter': {
            endpoint: '/api/image-convert',
            method: 'POST',
            example: JSON.stringify({
                imageUrl: "https://example.com/image.jpg",
                targetFormat: "png"
            }, null, 2)
        },
        'PDF Text Extractor': {
            endpoint: '/api/pdf-extract',
            method: 'POST',
            example: JSON.stringify({
                pdfUrl: "https://example.com/document.pdf"
            }, null, 2)
        },
        'Dockerfile Generator': {
            endpoint: '/api/dockerfile-generate',
            method: 'POST',
            example: JSON.stringify({
                language: "nodejs",
                framework: "express",
                port: 3000
            }, null, 2)
        },
        'Nginx Config Generator': {
            endpoint: '/api/nginx-config',
            method: 'POST',
            example: JSON.stringify({
                domain: "example.com",
                port: 3000,
                ssl: true
            }, null, 2)
        },
        'Let\'s Encrypt Bot Simulator': {
            endpoint: '/api/letsencrypt-simulate',
            method: 'POST',
            example: JSON.stringify({
                domain: "example.com",
                email: "admin@example.com"
            }, null, 2)
        },
        'Git Command Helper': {
            endpoint: '/api/git-help',
            method: 'POST',
            example: JSON.stringify({
                command: "git rebase -i HEAD~3"
            }, null, 2)
        },
        'UUID Generator': {
            endpoint: '/api/uuid-generate',
            method: 'POST',
            example: JSON.stringify({
                count: 5
            }, null, 2)
        },
        'Password Strength API': {
            endpoint: '/api/password-strength',
            method: 'POST',
            example: JSON.stringify({
                password: "MySecurePassword123!"
            }, null, 2)
        },
        'Hash Generator': {
            endpoint: '/api/hash-generate',
            method: 'POST',
            example: JSON.stringify({
                text: "hello world",
                algorithm: "sha256"
            }, null, 2)
        },
        'Unit Test Generator': {
            endpoint: '/api/unit-test-generate',
            method: 'POST',
            example: JSON.stringify({
                function: "function add(a, b) { return a + b; }"
            }, null, 2)
        },
        'Color Converter API': {
            endpoint: '/api/color-convert',
            method: 'POST',
            example: JSON.stringify({
                color: "#FF0000",
                from: "hex",
                to: "rgb"
            }, null, 2)
        },
        'Fake User Generator': {
            endpoint: '/api/fake-user',
            method: 'POST',
            example: JSON.stringify({
                count: 3,
                locale: "en_US"
            }, null, 2)
        }
    };

    // Populate apiExamples with extracted API names
    apiNames.forEach(apiName => {
        if (exampleTemplates[apiName]) {
            apiExamples[apiName] = exampleTemplates[apiName];
        } else {
            // Default example for APIs not in templates
            apiExamples[apiName] = {
                endpoint: `/api/${apiName.toLowerCase().replace(/\s+/g, '-')}`,
                method: 'POST',
                example: JSON.stringify({
                    message: `Example request for ${apiName}`
                }, null, 2)
            };
        }
    });

    // Populate API dropdown
    apiNames.forEach(apiName => {
        const option = document.createElement('option');
        option.value = apiName;
        option.textContent = apiName;
        apiSelect.appendChild(option);
    });

    // Handle API selection
    apiSelect.addEventListener('change', (e) => {
        const selectedAPI = e.target.value;
        if (selectedAPI && apiExamples[selectedAPI]) {
            requestEditor.value = apiExamples[selectedAPI].example;
        } else {
            requestEditor.value = '';
        }
    });

    // Handle send request
    sendRequestBtn.addEventListener('click', async () => {
        const selectedAPI = apiSelect.value;
        if (!selectedAPI) {
            alert('Please select an API first.');
            return;
        }

        const requestBody = requestEditor.value.trim();
        if (!requestBody) {
            alert('Please enter a request body.');
            return;
        }

        // Disable button during request
        sendRequestBtn.disabled = true;
        sendRequestBtn.textContent = 'Sending...';
        responseStatus.textContent = 'Status: Sending request...';

        try {
            // Validate JSON
            JSON.parse(requestBody);

            // Simulate API call (since endpoints don't exist yet)
            const mockResponse = await simulateAPICall(selectedAPI, requestBody);
            responseDisplay.textContent = JSON.stringify(mockResponse, null, 2);
            responseStatus.textContent = 'Status: 200 OK (Mock Response)';

        } catch (error) {
            if (error instanceof SyntaxError) {
                responseDisplay.textContent = 'Error: Invalid JSON in request body';
                responseStatus.textContent = 'Status: 400 Bad Request';
            } else {
                responseDisplay.textContent = `Error: ${error.message}`;
                responseStatus.textContent = 'Status: 500 Internal Server Error';
            }
        } finally {
            // Re-enable button
            sendRequestBtn.disabled = false;
            sendRequestBtn.textContent = 'Send Request';
        }
    });

    // Mock API call simulation
    async function simulateAPICall(apiName, requestBody) {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

        const requestData = JSON.parse(requestBody);
        const apiConfig = apiExamples[apiName];

        // Generate mock responses based on API type
        switch (apiName) {
            case 'XSS Scanner':
                return {
                    vulnerable: Math.random() > 0.7,
                    issues: Math.random() > 0.7 ? ['Potential XSS in user input'] : [],
                    recommendations: ['Sanitize user input', 'Use Content Security Policy']
                };

            case 'SQL Injection Scanner':
                return {
                    vulnerable: Math.random() > 0.7,
                    issues: Math.random() > 0.7 ? ['Potential SQL injection in user input'] : [],
                    recommendations: ['Use prepared statements', 'Validate input data']
                };

            case 'SEO Meta Validator':
                return {
                    score: Math.floor(Math.random() * 40) + 60,
                    issues: ['Missing Open Graph tags', 'Title too short'],
                    suggestions: ['Add meta description', 'Include structured data']
                };

            case 'Code Complexity Analyzer':
                return {
                    complexity: Math.floor(Math.random() * 10) + 1,
                    maintainability: Math.floor(Math.random() * 40) + 60,
                    suggestions: ['Break down into smaller functions', 'Reduce nesting']
                };

            case 'Dependency Vulnerability Checker':
                return {
                    totalDependencies: Object.keys(requestData.dependencies || {}).length,
                    vulnerabilities: Math.floor(Math.random() * 3),
                    critical: Math.floor(Math.random() * 2),
                    recommendations: ['Update to latest versions', 'Remove unused dependencies']
                };

            case 'JSON-to-XML Converter':
                return {
                    xml: '<root><name>John</name><age>30</age><city>New York</city></root>',
                    converted: true
                };

            case 'YAML Validator Formatter':
                return {
                    valid: true,
                    formatted: "name: John\nage: 30\ncity: New York\n",
                    errors: []
                };

            case 'CSV-to-JSON API':
                return [
                    { name: 'John', age: 30, city: 'New York' },
                    { name: 'Jane', age: 25, city: 'London' }
                ];

            case 'Image Format Converter':
                return {
                    success: true,
                    convertedUrl: 'https://example.com/converted-image.png',
                    originalFormat: 'jpg',
                    targetFormat: 'png'
                };

            case 'PDF Text Extractor':
                return {
                    text: 'This is extracted text from the PDF document...',
                    pages: 5,
                    totalWords: 1250
                };

            case 'Dockerfile Generator':
                return {
                    dockerfile: 'FROM node:14\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nEXPOSE 3000\nCMD ["npm", "start"]',
                    generated: true
                };

            case 'Nginx Config Generator':
                return {
                    config: 'server {\n    listen 80;\n    server_name example.com;\n    location / {\n        proxy_pass http://localhost:3000;\n    }\n}',
                    generated: true
                };

            case 'Let\'s Encrypt Bot Simulator':
                return {
                    success: true,
                    certificate: '-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----',
                    validUntil: '2024-12-31'
                };

            case 'Git Command Helper':
                return {
                    explanation: 'Interactive rebase allows you to modify commits in your history.',
                    steps: ['Start interactive rebase', 'Choose operations for each commit', 'Save and exit'],
                    alternatives: ['git reset --soft HEAD~3', 'git commit --amend']
                };

            case 'UUID Generator':
                const uuids = [];
                for (let i = 0; i < (requestData.count || 1); i++) {
                    uuids.push('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                        const r = Math.random() * 16 | 0;
                        const v = c == 'x' ? r : (r & 0x3 | 0x8);
                        return v.toString(16);
                    }));
                }
                return { uuids };

            case 'Password Strength API':
                const strength = Math.floor(Math.random() * 40) + 60;
                return {
                    strength: strength,
                    score: strength >= 80 ? 'Strong' : strength >= 60 ? 'Medium' : 'Weak',
                    breached: Math.random() > 0.8,
                    suggestions: ['Add special characters', 'Use longer password']
                };

            case 'Hash Generator':
                const algorithms = {
                    md5: '5d41402abc4b2a76b9719d911017c592',
                    sha256: 'b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9'
                };
                return {
                    hash: algorithms[requestData.algorithm] || 'hashed_value_here',
                    algorithm: requestData.algorithm,
                    input: requestData.text
                };

            case 'Unit Test Generator':
                return {
                    tests: [
                        'describe("add function", () => {',
                        '  test("adds two numbers", () => {',
                        '    expect(add(2, 3)).toBe(5);',
                        '  });',
                        '});'
                    ],
                    generated: true
                };

            case 'Color Converter API':
                const conversions = {
                    hex: '#FF0000',
                    rgb: 'rgb(255, 0, 0)',
                    hsl: 'hsl(0, 100%, 50%)'
                };
                return {
                    original: requestData.color,
                    converted: conversions[requestData.to] || conversions.hex,
                    from: requestData.from,
                    to: requestData.to
                };

            case 'Fake User Generator':
                const users = [];
                for (let i = 0; i < (requestData.count || 1); i++) {
                    users.push({
                        id: i + 1,
                        name: `User ${i + 1}`,
                        email: `user${i + 1}@example.com`,
                        address: {
                            street: `123 Main St ${i + 1}`,
                            city: 'Anytown',
                            zipcode: '12345'
                        }
                    });
                }
                return { users };

            default:
                return { message: 'Mock response for ' + apiName };
        }
    }
}

// Auto-initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    init();
    initAPIPlayground();
});
