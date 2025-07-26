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

const poses = [
    {
        "id": "ardha_chandrasana",
        "name": "Ardha Chandrasana",
        "english": "Half Moon Pose",
        "level": "intermediate",
        "steps": [
            "From Warrior II shift weight to front foot",
            "Place hand on block",
            "Lift back leg horizontally",
            "Extend opposite arm up"
        ],
        "benefits": [
            "balance",
            "core strength",
            "hip mobility"
        ],
        "image": "ardha_chandrasana.jpg",
        "short_desc": "A standing pose that challenges balance and strengthens the core."
    },
    {
        "id": "dolphin_pose",
        "name": "Ardha Pincha Mayurasana",
        "english": "Dolphin Pose",
        "level": "intermediate",
        "steps": [
            "From Downward Dog lower forearms",
            "Keep hips high",
            "Walk feet closer",
            "Hold and breathe"
        ],
        "benefits": [
            "shoulder strength",
            "prepares for inversions",
            "core stability"
        ],
        "image": "dolphin.jpg",
        "short_desc": "A pose that strengthens the shoulders and builds stability."
    },
    {
        "id": "baddha_padmasana",
        "name": "Baddha Padmasana",
        "english": "Bound Lotus Pose",
        "level": "advanced",
        "steps": [
            "Sit in Padmasana",
            "Bind arms around back",
            "Join hands",
            "Hold back upright and breathe"
        ],
        "benefits": [
            "deep stretch",
            "seated stability",
            "hip flexibility"
        ],
        "image": "bound_lotus.jpg",
        "short_desc": "An advanced seated pose that deeply stretches the hips."
    },
    {
        "id": "balasana",
        "name": "Balasana",
        "english": "Child’s Pose",
        "level": "beginner",
        "steps": [
            "Kneel and sit on heels",
            "Fold forward over thighs",
            "Extend arms forward or by sides",
            "Rest forehead and breathe"
        ],
        "benefits": [
            "calms nervous system",
            "stretches back",
            "reduces anxiety"
        ],
        "image": "balasana.jpg",
        "short_desc": "A restorative pose that calms the body and mind."
    },
    {
        "id": "bakasana",
        "name": "Bakasana",
        "english": "Crow Pose",
        "level": "advanced",
        "steps": [
            "Squat down",
            "Place palms on floor shoulder‑width",
            "Lean forward",
            "Balance knees on upper arms",
            "Lift feet off ground",
            "Hold"
        ],
        "benefits": [
            "arm strength",
            "balance",
            "mental focus"
        ],
        "image": "bakasana.jpg",
        "short_desc": "A challenging arm balance that requires strength and focus."
    },
    {
        "id": "bhekasana",
        "name": "Bhekasana",
        "english": "Frog Pose",
        "level": "advanced",
        "steps": [
            "Lie face down",
            "Reach back, grab feet, press down",
            "Lift chest and gaze up",
            "Hold"
        ],
        "benefits": [
            "stretches thighs",
            "opens front body",
            "enhances spinal flexibility"
        ],
        "image": "bhekasana.jpg",
        "short_desc": "An intense backbend that stretches the thighs and chest."
    },
    {
        "id": "bhujangasana",
        "name": "Bhujangasana",
        "english": "Cobra Pose",
        "level": "beginner",
        "steps": [
            "Lie on belly",
            "Place hands under shoulders",
            "Inhale and lift chest",
            "Keep elbows bent"
        ],
        "benefits": [
            "opens chest",
            "strengthens spine",
            "reduces fatigue"
        ],
        "image": "bhujangasana.jpg",
        "short_desc": "A gentle backbend that strengthens the spine and opens the chest."
    },
    {
        "id": "dhanurasana",
        "name": "Dhanurasana",
        "english": "Bow Pose",
        "level": "intermediate",
        "steps": [
            "Lie on belly",
            "Reach back to grab ankles",
            "Inhale and lift chest and legs",
            "Hold and breathe"
        ],
        "benefits": [
            "opens chest & shoulders",
            "strengthens back",
            "stimulates abdominal organs"
        ],
        "image": "dhanurasana.jpg",
        "short_desc": "A backbend that opens the chest and stimulates the abdominal area."
    },
    {
        "id": "matsyasana",
        "name": "Matsyasana",
        "english": "Fish Pose",
        "level": "intermediate",
        "steps": [
            "Lie on back",
            "Arch chest up with crown touching floor",
            "Support with elbows",
            "Breathe"
        ],
        "benefits": [
            "opens chest",
            "stretches throat",
            "boosts energy"
        ],
        "image": "matsyasana.jpg",
        "short_desc": "A heart-opening pose that energizes the body."
    },
    {
        "id": "navasana",
        "name": "Paripurna Navasana",
        "english": "Boat Pose",
        "level": "intermediate",
        "steps": [
            "Sit with legs bent",
            "Lean back slightly",
            "Lift legs and spine into V",
            "Extend arms forward",
            "Hold"
        ],
        "benefits": [
            "strengthens core",
            "improves balance",
            "stimulates digestion"
        ],
        "image": "navasana.jpg",
        "short_desc": "A core-strengthening pose that engages the entire body."
    },
    {
        "id": "padangusthasana",
        "name": "Padangusthasana",
        "english": "Big Toe Pose",
        "level": "intermediate",
        "steps": [
            "Stand and fold forward",
            "Hold big toes",
            "Lengthen spine and breathe"
        ],
        "benefits": [
            "hamstring & calf stretch",
            "improves digestion",
            "calms mind"
        ],
        "image": "padangusthasana.jpg",
        "short_desc": "A forward bend that stretches the legs and calms the mind."
    },
    {
        "id": "paschimottanasana",
        "name": "Paschimottanasana",
        "english": "Seated Forward Bend",
        "level": "beginner",
        "steps": [
            "Sit with legs straight",
            "Inhale lengthen spine",
            "Exhale fold forward",
            "Hold and breathe"
        ],
        "benefits": [
            "stretches hamstrings",
            "calms nervous system",
            "improves focus"
        ],
        "image": "paschimottanasana.jpg",
        "short_desc": "A seated forward bend that stretches the hamstrings and calms the mind."
    },
    {
        "id": "parsva_dhanurasana",
        "name": "Parsva Dhanurasana",
        "english": "Side Bow Pose",
        "level": "advanced",
        "steps": [
            "Seated → bend knee toward glute",
            "Grab foot and kick into hand",
            "Extend other arm overhead",
            "Balance and breathe"
        ],
        "benefits": [
            "core strength",
            "quad stretch",
            "shoulder open"
        ],
        "image": "parsva_dhanurasana.jpg",
        "short_desc": "A deep backbend that requires strength and flexibility."
    },
    {
        "id": "pose_hal20",
        "name": "Halasana",
        "english": "Plow Pose",
        "level": "intermediate",
        "steps": [
            "Lie on back",
            "Lift legs overhead toward floor behind head",
            "Support back with hands",
            "Hold"
        ],
        "benefits": [
            "stretches spine",
            "stimulates thyroid",
            "calms nervous system"
        ],
        "image": "halasana.jpg",
        "short_desc": "A deep stretch for the spine that stimulates the thyroid."
    },
    {
        "id": "salamba_sarvangasana",
        "name": "Salamba Sarvangasana",
        "english": "Shoulder Stand",
        "level": "intermediate",
        "steps": [
            "Lie on back",
            "Lift legs overhead",
            "Support back with hands",
            "Stack hips over shoulders"
        ],
        "benefits": [
            "boosts circulation",
            "regulates thyroid",
            "calms nervous system"
        ],
        "image": "shoulder_stand.jpg",
        "short_desc": "An inversion that boosts circulation and calms the mind."
    },
    {
        "id": "shirshasana",
        "name": "Salamba Shirshasana",
        "english": "Headstand",
        "level": "advanced",
        "steps": [
            "Place head on mat, support with forearms",
            "Lift legs off the floor",
            "Balance vertically",
            "Hold"
        ],
        "benefits": [
            "strengthens core",
            "improves circulation",
            "boosts mental clarity"
        ],
        "image": "headstand.jpg",
        "short_desc": "A powerful inversion that boosts mental clarity and strengthens the core."
    },
    {
        "id": "tadasana",
        "name": "Tadasana",
        "english": "Mountain Pose",
        "level": "beginner",
        "steps": [
            "Stand tall with feet together",
            "Distribute weight evenly",
            "Relax shoulders",
            "Breathe steadily"
        ],
        "benefits": [
            "Improves posture",
            "Enhances balance",
            "Calms mind"
        ],
        "image": "tadasana.jpg",
        "short_desc": "A foundational standing pose that promotes alignment and balance."
    },
    {
        "id": "uttanasana",
        "name": "Uttanasana",
        "english": "Standing Forward Bend",
        "level": "beginner",
        "steps": [
            "Stand tall",
            "Hinge at hips",
            "Fold forward",
            "Relax neck and shoulders"
        ],
        "benefits": [
            "Stretches hamstrings",
            "Calms mind",
            "Relieves stress"
        ],
        "image": "uttanasana.jpg",
        "short_desc": "A forward bend that stretches the back and calms the mind."
    },
    {
        "id": "virabhadrasana_ii",
        "name": "Virabhadrasana II",
        "english": "Warrior II Pose",
        "level": "intermediate",
        "steps": [
            "Feet wide, front turned out",
            "Bend front knee",
            "Arms extended horizontally",
            "Gaze over front hand"
        ],
        "benefits": [
            "Strengthens legs",
            "Improves focus",
            "Opens hips"
        ],
        "image": "virabhadrasana_ii.jpg",
        "short_desc": "A powerful pose that builds strength and focus."
    },
    {
        "id": "virasana",
        "name": "Virasana",
        "english": "Hero Pose",
        "level": "intermediate",
        "steps": [
            "Kneel with knees together",
            "Sit between heels",
            "Lengthen spine",
            "Hands on thighs, breathe deeply"
        ],
        "benefits": [
            "Aligns spine",
            "Calms mind",
            "Deepens meditation seating"
        ],
        "image": "virasana.jpg",
        "short_desc": "A seated pose that promotes meditation and spine alignment."
    },
    {
        "id": "viparita_karani",
        "name": "Viparita Karani",
        "english": "Legs-Up-the-Wall Pose",
        "level": "beginner",
        "steps": [
            "Lie on back with hips near wall",
            "Extend legs vertically up wall",
            "Relax arms by sides",
            "Breathe and hold 5–20 minutes"
        ],
        "benefits": [
            "Improves circulation",
            "Calms mind",
            "Reduces swelling and anxiety"
        ],
        "image": "viparita_karani.jpg",
        "short_desc": "An inversion pose that helps relax the body and improve circulation."
    },
    {
        "id": "vrikshasana",
        "name": "Vrikshasana",
        "english": "Tree Pose",
        "level": "beginner",
        "steps": [
            "Stand on one foot",
            "Place foot on inner thigh",
            "Bring hands to prayer",
            "Hold and breathe"
        ],
        "benefits": [
            "Improves balance",
            "Strengthens legs",
            "Enhances focus"
        ],
        "image": "vrikshasana.jpg",
        "short_desc": "A balancing pose that develops focus and stability."
    },
    {
        "id": "vrischikasana",
        "name": "Vrischikasana",
        "english": "Scorpion Pose",
        "level": "advanced",
        "steps": [
            "Forearm balance with lifted legs",
            "Arch back deeply",
            "Support body with forearms",
            "Engage core and breathe"
        ],
        "benefits": [
            "Backbend strength",
            "Balance",
            "Flexibility"
        ],
        "image": "vrischikasana.jpg",
        "short_desc": "A challenging inversion that requires flexibility and balance."
    },
    {
        "id": "vrischikasana_handstand",
        "name": "Handstand Scorpion",
        "english": "Handstand Scorpion Pose",
        "level": "advanced",
        "steps": [
            "Enter handstand",
            "Bend knees and arch legs down toward head",
            "Engage core",
            "Balance"
        ],
        "benefits": [
            "Upper body strength",
            "Flexibility",
            "Focus"
        ],
        "image": "handstand_scorpion.jpg",
        "short_desc": "A handstand variation that challenges both strength and flexibility."
    },
    {
        "id": "trikonasana",
        "name": "Trikonasana",
        "english": "Triangle Pose",
        "level": "beginner",
        "steps": [
            "Stand wide",
            "Reach front hand down to shin or block",
            "Extend back arm up",
            "Gaze up",
            "Hold and breathe"
        ],
        "benefits": [
            "Stretches hips and legs",
            "Aids digestion",
            "Improves balance"
        ],
        "image": "trikonasana.jpg",
        "short_desc": "A standing pose that stretches the sides and improves balance."
    },
    {
        "id": "natarajasana",
        "name": "Natarajasana",
        "english": "Dancer Pose",
        "level": "advanced",
        "steps": [
            "Stand in Tadasana",
            "Grab back foot",
            "Lift and extend leg back",
            "Reach forward with other arm and arch spine"
        ],
        "benefits": [
            "Balance",
            "Back flexibility",
            "Mental focus"
        ],
        "image": "natarajasana.jpg",
        "short_desc": "A graceful balance pose that opens the chest and stretches the spine."
    },
    {
        "id": "urdhva_dhanurasana",
        "name": "Urdhva Dhanurasana",
        "english": "Wheel Pose",
        "level": "advanced",
        "steps": [
            "Lie on back",
            "Feet close to glutes",
            "Hands by ears",
            "Press up into backbend",
            "Engage limbs"
        ],
        "benefits": [
            "Opens chest",
            "Strengthens spine",
            "Boosts energy"
        ],
        "image": "urdhva_dhanurasana.jpg",
        "short_desc": "A deep backbend that stretches the chest and strengthens the spine."
    },
    {
        "id": "utkatasana",
        "name": "Utkatasana",
        "english": "Chair Pose",
        "level": "intermediate",
        "steps": [
            "Stand tall",
            "Bend knees and sink hips back",
            "Raise arms overhead",
            "Keep weight in heels",
            "Hold"
        ],
        "benefits": [
            "Strengthens legs",
            "Tones core",
            "Stimulates heart"
        ],
        "image": "utkatasana.jpg",
        "short_desc": "A strong pose that targets the legs and core."
    },
    {
        "id": "ustrasana",
        "name": "Ustrasana",
        "english": "Camel Pose",
        "level": "intermediate",
        "steps": [
            "Kneel",
            "Place hands on lower back or heels",
            "Arch back and drop head",
            "Hold"
        ],
        "benefits": [
            "Opens chest and abdomen",
            "Strengthens back",
            "Improves posture"
        ],
        "image": "ustrasana.jpg",
        "short_desc": "A backbend that opens the chest and stretches the front of the body."
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


document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('poses-container');

    poses.forEach(pose => {
        const card = document.createElement('div');
        card.className = 'pose-card';
        card.innerHTML = `
      <img src="images/${pose.image}" alt="${pose.name}">
      <h3>${pose.name}</h3>
      <p>${pose.short_desc}</p>
    `;
        card.addEventListener('click', () => showPoseModal(pose));
        container.appendChild(card);
    });

    const modal = document.getElementById('pose-modal');
    const closeBtn = modal.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
    });
});

function showPoseModal(pose) {
    const modalBody = document.getElementById('pose-modal-body');
    modalBody.innerHTML = `
    <h2>${pose.name}</h2>
    <img src="images/${pose.image}" alt="${pose.name}" style="max-width: 100%;">
    <p><strong>Level:</strong> ${pose.level}</p>
    <h4>Benefits</h4>
    <ul>${pose.benefits.map(b => `<li>${b}</li>`).join('')}</ul>
    <h4>Steps</h4>
    <ol>${pose.steps.map(s => `<li>${s}</li>`).join('')}</ol>
  `;
    document.getElementById('pose-modal').classList.remove('hidden');
}
