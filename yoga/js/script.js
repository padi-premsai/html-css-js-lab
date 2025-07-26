const types = [
    {
        "id": "anjusara",
        "name": "Anusara Yoga",
        "description": "Heart‑centered alignment yoga emphasizing joy, community and connection.",
        "key_practices": [
            "alignment",
            "positive mindset",
            "joyful movement"
        ],
        "benefits": [
            "posture",
            "mind‑body harmony",
            "cardio"
        ],
        "suitable_for": [
            "beginners to intermediate"
        ],
        "image": "anusara_yoga.jpg"
    },
    {
        "id": "anastara",
        "name": "Anastara Yoga",
        "description": "A modern flow style combining alignment and movement.",
        "key_practices": [
            "flow",
            "alignment",
            "mindfulness"
        ],
        "benefits": [
            "flexibility",
            "strength",
            "mind‑body harmony"
        ],
        "suitable_for": [
            "all levels"
        ],
        "image": "anastara_yoga.jpg"
    },
    {
        "id": "ashtanga",
        "name": "Ashtanga Yoga",
        "description": "Fixed series of poses practiced in a set order, vigorous and structured.",
        "key_practices": [
            "primary series",
            "Mysore self‑pace",
            "vinyasa linking"
        ],
        "benefits": [
            "strength",
            "endurance",
            "mental focus"
        ],
        "suitable_for": [
            "intermediate to advanced"
        ],
        "image": "ashtanga_yoga.jpeg"
    },
    {
        "id": "bikram",
        "name": "Bikram (Hot) Yoga",
        "description": "26 fixed postures in a heated room (approx 105°F), same sequence every time.",
        "key_practices": [
            "fixed sequence",
            "heat",
            "breath"
        ],
        "benefits": [
            "detoxified",
            "flexibility",
            "cardio"
        ],
        "suitable_for": [
            "healthy adults",
            "heat lovers"
        ],
        "image": "bikram_yoga.jpg"
    },
    {
        "id": "hatha",
        "name": "Hatha Yoga",
        "description": "Gentle, traditional physical yoga with a balance of postures, breathing and meditation.",
        "key_practices": [
            "asana",
            "pranayama",
            "meditation"
        ],
        "benefits": [
            "strength",
            "flexibility",
            "stress relief"
        ],
        "suitable_for": [
            "beginners",
            "all levels"
        ],
        "image": "hatha_yoga.jpg"
    },
    {
        "id": "iyengar",
        "name": "Iyengar Yoga",
        "description": "Alignment-focused yoga using props for precise postural alignment.",
        "key_practices": [
            "props",
            "alignment",
            "long holds"
        ],
        "benefits": [
            "posture",
            "safety",
            "rehabilitation"
        ],
        "suitable_for": [
            "all levels",
            "injury recovery"
        ],
        "image": "iyengar_yoga.jpg"
    },
    {
        "id": "jivamukti",
        "name": "Jivamukti Yoga",
        "description": "Combines rigorous asana practice with spiritual teachings, chanting and meditation.",
        "key_practices": [
            "asana",
            "chanting",
            "meditation",
            "philosophy"
        ],
        "benefits": [
            "spiritual depth",
            "strength",
            "flexibility"
        ],
        "suitable_for": [
            "intermediate to advanced"
        ],
        "image": "jivamukti_yoga.jpg"
    },
    {
        "id": "kundalini",
        "name": "Kundalini Yoga",
        "description": "Spiritual and physical practice including chanting, kriyas and breathwork.",
        "key_practices": [
            "chanting",
            "kriya sequences",
            "meditation"
        ],
        "benefits": [
            "energy",
            "mental clarity",
            "stress reduction"
        ],
        "suitable_for": [
            "all levels",
            "spiritual seekers"
        ],
        "image": "kundalini_yoga.jpg"
    },
    {
        "id": "prenatal",
        "name": "Prenatal Yoga",
        "description": "Gentle yoga adapted for pregnancy, focusing on breathing, stretching and safety.",
        "key_practices": [
            "gentle stretching",
            "breath awareness",
            "pelvic floor safe poses"
        ],
        "benefits": [
            "stress relief",
            "preparation for childbirth",
            "posture support"
        ],
        "suitable_for": [
            "pregnant individuals",
            "all levels"
        ],
        "image": "prenatal_yoga.jpg"
    },
    {
        "id": "restorative",
        "name": "Restorative Yoga",
        "description": "Deep relaxation poses held for long durations with ample support.",
        "key_practices": [
            "props",
            "passive poses",
            "pranayama"
        ],
        "benefits": [
            "stress relief",
            "healing",
            "recovery"
        ],
        "suitable_for": [
            "all levels",
            "stress relief",
            "rehabilitation"
        ],
        "image": "restorative_yoga.jpg"
    },
    {
        "id": "vinyasa",
        "name": "Vinyasa Yoga",
        "description": "Flow-style yoga linking breath and movement in a continuous sequence.",
        "key_practices": [
            "flow",
            "sun salutations",
            "dynamic movement"
        ],
        "benefits": [
            "cardio",
            "strength",
            "mind-body connection"
        ],
        "suitable_for": [
            "beginners to advanced"
        ],
        "image": "vinyasa_yoga.jpg"
    },
    {
        "id": "yin",
        "name": "Yin Yoga",
        "description": "Slow-paced yoga with long-held poses targeting deep connective tissue.",
        "key_practices": [
            "long holds",
            "floor-based poses",
            "meditation"
        ],
        "benefits": [
            "flexibility",
            "joint health",
            "relaxation"
        ],
        "suitable_for": [
            "all levels",
            "deep stretch seekers"
        ],
        "image": "yin_yoga.jpg"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('types-container');

    if (container && typeof types !== 'undefined') {
        types.forEach(type => {
            const card = document.createElement('div');
            card.className = 'type-card';
            card.innerHTML = `
                <img src="images/${type.image}" alt="${type.name}">
                <h3>${type.name}</h3>
                <p class="short-desc">${type.description}</p>
            `;

            // Add animation and click handler
            card.addEventListener('click', () => {
                card.classList.add('animate');
                showModal(type);
                setTimeout(() => card.classList.remove('animate'), 300);
            });

            container.appendChild(card);
        });
    }

    // Modal close logic
    const modal = document.getElementById('modal');
    modal.querySelector('.close-btn').addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
});

function showModal(type) {
    const modal = document.getElementById('modal');
    const body = document.getElementById('modal-body');

    body.innerHTML = `
        <h2>${type.name}</h2>
        <img src="images/${type.image}" alt="${type.name}" style="max-width: 100%; margin-bottom: 1rem;">
        <p>${type.description}</p>
        <h4>Key Practices</h4>
        <ul>${type.key_practices.map(p => `<li>${p}</li>`).join('')}</ul>
        <h4>Benefits</h4>
        <ul>${type.benefits.map(b => `<li>${b}</li>`).join('')}</ul>
        <h4>Suitable For</h4>
        <ul>${type.suitable_for.map(s => `<li>${s}</li>`).join('')}</ul>
    `;

    modal.classList.remove('hidden');
}
