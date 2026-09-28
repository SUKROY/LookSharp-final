// Face shape data
const faceShapeData = {
    oval: {
        title: "Oval Face Shape",
        characteristics: [
            "Forehead and jaw are about the same width",
            "Cheekbones are slightly wider",
            "Face length is about 1.5 times the width",
            "Soft, rounded jawline"
        ],
        recommendations: [
            "Most hairstyles work well",
            "Medium to long layered cuts",
            "Side or middle parts",
            "Soft, wispy bangs"
        ],
        tips: [
            "You can experiment with various styles",
            "Avoid very short layers that add height",
            "Consider face-framing layers",
            "Both straight and wavy styles work well"
        ]
    },
    round: {
        title: "Round Face Shape",
        characteristics: [
            "Face width and length are similar",
            "Full cheeks",
            "Rounded jawline",
            "Soft chin"
        ],
        recommendations: [
            "Long, layered cuts",
            "Side-swept bangs",
            "Asymmetrical styles",
            "Volume at the crown"
        ],
        tips: [
            "Avoid chin-length cuts that emphasize roundness",
            "Create height at the top of the head",
            "Use side parts to add angles",
            "Consider long layers past the chin"
        ]
    },
    heart: {
        title: "Heart Face Shape",
        characteristics: [
            "Wide forehead and cheekbones",
            "Narrow, pointed chin",
            "May have a widow's peak",
            "High cheekbones"
        ],
        recommendations: [
            "Side-swept bangs",
            "Chin-length bobs",
            "Layered mid-length cuts",
            "Textured pixie cuts"
        ],
        tips: [
            "Balance wider forehead with volume at the chin",
            "Avoid styles that add width at the temples",
            "Consider soft, wispy bangs",
            "Try styles that add width at the jaw"
        ]
    },
    square: {
        title: "Square Face Shape",
        characteristics: [
            "Strong, angular jawline",
            "Forehead, cheekbones, and jaw are similar in width",
            "Minimal curves",
            "Often straight hairline"
        ],
        recommendations: [
            "Soft layers",
            "Side-swept styles",
            "Textured cuts",
            "Long, layered cuts"
        ],
        tips: [
            "Soften angular features with waves or curls",
            "Avoid blunt cuts",
            "Try side parts to add asymmetry",
            "Consider long, face-framing layers"
        ]
    },
    diamond: {
        title: "Diamond Face Shape",
        characteristics: [
            "Narrow forehead and jawline",
            "High, dramatic cheekbones",
            "Pointed chin",
            "May have angular features"
        ],
        recommendations: [
            "Side-swept bangs",
            "Chin-length or longer styles",
            "Layered cuts",
            "Volume at the temples"
        ],
        tips: [
            "Add width at the forehead and jawline",
            "Consider wispy bangs",
            "Try styles with volume at the temples",
            "Avoid too much height at the crown"
        ]
    },
    triangular: {
        title: "Triangular Face Shape",
        characteristics: [
            "Narrow forehead",
            "Wide jawline",
            "Minimal cheekbone definition",
            "Face widens toward the bottom"
        ],
        recommendations: [
            "Volume at the temples and crown",
            "Layered cuts with volume on top",
            "Side-swept bangs",
            "Medium to short lengths"
        ],
        tips: [
            "Create volume above the ears",
            "Consider full bangs",
            "Try styles that add width at the temples",
            "Avoid styles that add width at the jaw"
        ]
    }
};

// Modal functionality
const modal = document.getElementById('faceShapeModal');
const closeModal = document.querySelector('.close-modal');
const learnMoreButtons = document.querySelectorAll('.learn-more-btn');
const bookConsultationBtn = document.querySelector('.book-consultation');

// Open modal with face shape data
function openModal(shapeType) {
    const data = faceShapeData[shapeType];
    
    // Set modal content
    modal.querySelector('.modal-header h2').textContent = data.title;
    modal.querySelector('.shape-image img').src = `../images/${shapeType}.png`;
    modal.querySelector('.shape-image img').alt = data.title;

    // Clear and populate lists
    const characteristicsList = modal.querySelector('.characteristics');
    const recommendationsList = modal.querySelector('.recommendations');
    const tipsList = modal.querySelector('.tips');

    characteristicsList.innerHTML = data.characteristics
        .map(item => `<li>${item}</li>`)
        .join('');

    recommendationsList.innerHTML = data.recommendations
        .map(item => `<li>${item}</li>`)
        .join('');

    tipsList.innerHTML = data.tips
        .map(item => `<li>${item}</li>`)
        .join('');

    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Event listeners
learnMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const shapeType = button.closest('.face-shape-card').dataset.shape;
        openModal(shapeType);
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Restore scrolling
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
});

bookConsultationBtn.addEventListener('click', () => {
    window.location.href = 'booking.html';
});

// Add hover effect to face shape cards
const faceShapeCards = document.querySelectorAll('.face-shape-card');
faceShapeCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
}); 