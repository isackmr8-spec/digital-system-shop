// Mr Smiley Digital Market - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            alert(`Searching for: ${searchTerm}\n\nThis is a prototype. In the full system, this would search through our product database.`);
            searchInput.value = '';
        } else {
            alert('Please enter a search term.');
        }
    });

    // Category card hover effects
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.category-card, .feature-card, .benefit');
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // Form validation for future forms
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        const re = /^[\+]?[1-9][\d]{0,15}$/;
        return re.test(phone);
    }

    // Add click handlers for buttons (placeholders for future functionality)
    const signInBtn = document.querySelector('nav .btn');
    const registerBtn = document.querySelector('.btn-primary');

    signInBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Sign In functionality will be implemented in the full system.\n\nThis includes:\n- User authentication\n- Session management\n- Secure login\n- AI-powered personalization');
    });

    registerBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Seller Registration will be implemented in the full system.\n\nThis includes:\n- Shop registration form\n- Document verification\n- Admin approval process\n- AI analytics dashboard access');
    });

    // AI Chatbot Simulation (Prototype)
    function initAIChat() {
        const chatButton = document.createElement('button');
        chatButton.innerHTML = '🤖 AI Chat';
        chatButton.className = 'ai-chat-btn';
        chatButton.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: var(--primary-color);
            color: var(--secondary-color);
            border: none;
            border-radius: 50px;
            width: 60px;
            height: 60px;
            font-size: 24px;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 1000;
            transition: all 0.3s ease;
        `;

        chatButton.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });

        chatButton.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });

        chatButton.addEventListener('click', function() {
            showAIChat();
        });

        document.body.appendChild(chatButton);
    }

    function showAIChat() {
        const chatWindow = document.createElement('div');
        chatWindow.innerHTML = `
            <div style="
                position: fixed;
                bottom: 90px;
                right: 20px;
                width: 350px;
                height: 500px;
                background: white;
                border-radius: 10px;
                box-shadow: 0 8px 24px rgba(0,0,0,0.3);
                z-index: 1001;
                display: flex;
                flex-direction: column;
                font-family: Arial, sans-serif;
            ">
                <div style="
                    background: var(--primary-color);
                    color: var(--secondary-color);
                    padding: 15px;
                    border-radius: 10px 10px 0 0;
                    font-weight: bold;
                ">
                    🤖 Mr Smiley AI Assistant
                    <button onclick="this.parentElement.parentElement.remove()" style="
                        float: right;
                        background: none;
                        border: none;
                        color: var(--secondary-color);
                        font-size: 20px;
                        cursor: pointer;
                    ">×</button>
                </div>
                <div id="chat-messages" style="
                    flex: 1;
                    padding: 15px;
                    overflow-y: auto;
                    background: #f8f9fa;
                ">
                    <div style="margin-bottom: 10px;">
                        <strong>AI:</strong> Hello! I'm your AI shopping assistant. How can I help you today?
                    </div>
                </div>
                <div style="padding: 15px; border-top: 1px solid #eee;">
                    <input id="chat-input" type="text" placeholder="Ask me anything about shopping..." style="
                        width: 100%;
                        padding: 10px;
                        border: 1px solid #ddd;
                        border-radius: 20px;
                        outline: none;
                    ">
                    <button onclick="sendMessage()" style="
                        margin-top: 10px;
                        width: 100%;
                        padding: 10px;
                        background: var(--primary-color);
                        color: var(--secondary-color);
                        border: none;
                        border-radius: 20px;
                        cursor: pointer;
                        font-weight: bold;
                    ">Send</button>
                </div>
            </div>
        `;
        document.body.appendChild(chatWindow);

        // Focus on input
        setTimeout(() => {
            document.getElementById('chat-input').focus();
        }, 100);
    }

    // Make sendMessage function global
    window.sendMessage = function() {
        const input = document.getElementById('chat-input');
        const messages = document.getElementById('chat-messages');
        const message = input.value.trim();

        if (message) {
            // Add user message
            messages.innerHTML += `<div style="margin-bottom: 10px; text-align: right;"><strong>You:</strong> ${message}</div>`;

            // Simulate AI response
            setTimeout(() => {
                const responses = [
                    "I'd be happy to help you find the perfect product! What category are you interested in?",
                    "Great question! Let me check our current promotions for you.",
                    "I can help you track your order. Could you provide your order number?",
                    "Based on your shopping history, you might like these recommended products...",
                    "Our AI system shows high ratings for similar items. Would you like me to show you some options?",
                    "I can assist with product information, order tracking, or general shopping advice. What do you need?"
                ];
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                messages.innerHTML += `<div style="margin-bottom: 10px;"><strong>AI:</strong> ${randomResponse}</div>`;
                messages.scrollTop = messages.scrollHeight;
            }, 1000);

            input.value = '';
            messages.scrollTop = messages.scrollHeight;
        }
    };

    // Initialize AI Chat
    initAIChat();

    // Mobile menu toggle (for future responsive enhancements)
    function toggleMobileMenu() {
        const nav = document.querySelector('nav ul');
        nav.classList.toggle('mobile-menu-active');
    }

    // Add mobile menu button if needed in the future
    // const mobileMenuBtn = document.createElement('button');
    // mobileMenuBtn.textContent = '☰';
    // mobileMenuBtn.classList.add('mobile-menu-btn');
    // mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    // document.querySelector('header .container').appendChild(mobileMenuBtn);

    console.log('Mr Smiley Digital Market prototype loaded successfully!');
});
