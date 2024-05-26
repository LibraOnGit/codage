document.addEventListener('DOMContentLoaded', function() {
    // Sample data
    const stages = [
        { title: 'Stage en développement web', company: 'TechCorp', description: 'Développement d\'applications web en JavaScript.', contact: 'contact@techcorp.com' },
        { title: 'Stage en marketing digital', company: 'MarketPros', description: 'Stratégies de marketing en ligne.', contact: 'contact@marketpros.com' }
    ];

    const rapports = [
        { title: 'Rapport de fin d\'études sur l\'IA', author: 'Jean Dupont', description: 'Étude approfondie sur l\'intelligence artificielle.', contact: 'jean.dupont@example.com' },
        { title: 'Rapport de stage en développement mobile', author: 'Marie Curie', description: 'Développement d\'applications mobiles en Swift.', contact: 'marie.curie@example.com' }
    ];

    const entreprises = [
        { name: 'TechCorp', description: 'Entreprise spécialisée en développement web.', contact: 'contact@techcorp.com' },
        { name: 'MarketPros', description: 'Entreprise spécialisée en marketing digital.', contact: 'contact@marketpros.com' }
    ];

    // Rendering functions
    function renderList(list, elementId) {
        const listElement = document.getElementById(elementId);
        listElement.innerHTML = '';
        list.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('item');
            itemElement.innerHTML = `
                <h3>${item.title || item.name}</h3>
                <p>${item.description}</p>
                <p><strong>Contact:</strong> ${item.contact}</p>
            `;
            listElement.appendChild(itemElement);
        });
    }

    // Initial rendering
    renderList(stages, 'stages-list');
    renderList(rapports, 'rapports-list');
    renderList(entreprises, 'entreprises-list');

    // Search functionality
    document.getElementById('search-stages').addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const filteredStages = stages.filter(stage => stage.title.toLowerCase().includes(query));
        renderList(filteredStages, 'stages-list');
    });

    document.getElementById('search-rapports').addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const filteredRapports = rapports.filter(rapport => rapport.title.toLowerCase().includes(query));
        renderList(filteredRapports, 'rapports-list');
    });

    document.getElementById('search-entreprises').addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const filteredEntreprises = entreprises.filter(entreprise => entreprise.name.toLowerCase().includes(query));
        renderList(filteredEntreprises, 'entreprises-list');
    });

    // Breadcrumb navigation
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            document.getElementById('breadcrumb-current').textContent = this.textContent;
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        });
    });
});
