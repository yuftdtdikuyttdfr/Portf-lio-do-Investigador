// Alternar tema claro/escuro
document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark");

    // Adicionar ou remover a classe "dark" aos selects
    const selects = document.querySelectorAll("select");
    selects.forEach(select => {
        select.classList.toggle("dark", document.body.classList.contains("dark"));
    });
});

// Formulário de contato
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
});

// Modal
const modalTriggers = document.querySelectorAll('.modal-trigger');
const modals = document.querySelectorAll('.modal');

modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const modalId = trigger.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'block';
    });
});

modals.forEach(modal => {
    modal.querySelector('.close').addEventListener('click', () => {
        modal.style.display = 'none';
    });
});

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});

// Efeito de rolagem suave
const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Animação das habilidades
const skills = document.querySelectorAll('.skill');
skills.forEach(skill => {
    skill.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#000000';
        setTimeout(() => {
            this.style.backgroundColor = '#202020'; // ou outra cor 
        }, 500);
    });
});

// Animações de Botões
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'transform 0.2s';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});
