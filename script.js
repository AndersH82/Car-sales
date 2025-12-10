// simple function
document.getElementById("BuyNow").addEventListener("click", () => {
    alert("Here you can buy new and old cars");
})

// Navbar toggle for mobile
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.getElementById('primary-navigation');

    if (navToggle && navList) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!isExpanded));
            navList.classList.toggle('show');
        });

        // Close nav when a link is clicked (mobile)
        navList.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                navList.classList.remove('show');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
});

// Modal: open car details when clicking the card's View button
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('car-modal');
    const modalImage = modal.querySelector('.modal-image');
    const modalTitle = modal.querySelector('#car-modal-title');
    const modalSpecs = modal.querySelector('.modal-specs');
    const modalPrice = modal.querySelector('.modal-price');
    const closeBtn = modal.querySelector('.modal-close');

    function openModal(data) {
        modalImage.src = data.imgSrc || '';
        modalImage.alt = data.imgAlt || '';
        modalTitle.textContent = data.title || '';
        modalSpecs.textContent = data.specs || '';
        modalPrice.textContent = data.price || '';
        modal.classList.add('show');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('show');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // Open on View click
    document.querySelectorAll('.car-card .btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const card = btn.closest('.car-card');
            if (!card) return;
            const img = card.querySelector('img');
            const title = card.querySelector('.title');
            const specs = card.querySelector('.specs');
            const price = card.querySelector('.amount');

            openModal({
                imgSrc: img ? img.src : '',
                imgAlt: img ? img.alt : '',
                title: title ? title.textContent : '',
                specs: specs ? specs.textContent : '',
                price: price ? price.textContent : ''
            });
        });
    });

    // Close handlers
    closeBtn.addEventListener('click', closeModal);
    modal.querySelectorAll('[data-close="true"]').forEach(el => {
        el.addEventListener('click', closeModal);
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) closeModal();
    });
});