// ✰ webmeji - Aisha Asal ✰
// AI assistant character

window.SPAWNING = [
  {
    id: "aisha-asal",
    config: "AISHA_CONFIG"
  }
];

window.AISHA_CONFIG = {

  ALLOWANCES: [
    "pet",
    "drag",
    "bottom",
    "top",
    "left",
    "right"
  ],

  walkspeed: 50,
  fallspeed: 150,
  jumpspeed: 200,

  gettingupspeed: 3500,

  walk: {
    frames: [
      "shime1.png",
      "shime2.png",
      "shime3.png",
      "shime2.png"
    ],
    interval: 175,
    loops: 6
  },

  stand: {
    frames: [
      "shime1.png"
    ],
    interval: 1000,
    loops: 1
  },

  sit: {
    frames: [
      "shime11.png"
    ],
    interval: 1000,
    loops: 1,
    randomizeDuration: true,
    min: 3000,
    max: 11000
  },

  spin: {
    frames: [
      "shime1.png"
    ],
    interval: 150,
    loops: 3
  },

  dance: {
    frames: [
      "shime5.png",
      "shime6.png",
      "shime1.png"
    ],
    interval: 200,
    loops: 5
  },

  trip: {
    frames: [
      "shime18.png",
      "shime19.png",
      "shime19.png"
    ],
    interval: 250,
    loops: 1
  },

  forcewalk: {
    loops: 6
  },

  forcethink: {
    frames: [
      "shime27.png",
      "shime28.png"
    ],
    interval: 500,
    loops: 2
  },

  pet: {
    frames: [
      "shime15.png",
      "shime16.png",
      "shime17.png"
    ],
    interval: 400
  },

  drag: {
    frames: [
      "shime7.png",
      "shime5.png",
      "shime8.png",
      "shime6.png"
    ],
    interval: 210
  },

  falling: {
    frames: [
      "shime10.png",
      "shime18.png"
    ],
    interval: 200,
    loops: 2
  },

  fallen: {
    frames: [
      "shime9.png",
      "shime4.png",
      "shime19.png"
    ],
    interval: 250,
    loops: 1
  },

  ORIGINAL_ACTIONS: [
    "walk",
    "walk",
    "walk",
    "walk",
    "walk",
    "walk",
    "spin",
    "spin",
    "spin",
    "sit",
    "sit",
    "dance",
    "dance",
    "dance",
    "dance",
    "dance",
    "trip"
  ],

  EDGE_ACTIONS: [
    "hang",
    "hang",
    "climb",
    "climb",
    "climb",
    "climb",
    "climb",
    "fall"
  ],

  JUMP_CHANCE: 0.1,

  climbSide: {
    frames: [
      "shime13.png",
      "shime14.png"
    ],
    interval: 200,
    loops: 2
  },

  hangstillSide: {
    frames: [
      "shime12.png"
    ],
    interval: 200,
    loops: 2,
    randomizeDuration: true,
    min: 3000,
    max: 11000
  },

  climbTop: {
    frames: [
      "shime24.png",
      "shime25.png"
    ],
    interval: 200,
    loops: 8
  },

  hangstillTop: {
    frames: [
      "shime23.png"
    ],
    interval: 200,
    loops: 2,
    randomizeDuration: true,
    min: 3000,
    max: 11000
  },

  jump: {
    frames: [
      "shime22.png"
    ],
    interval: 200
  }
};


// تحويل مسارات الصور إلى GitHub Pages
const AISHA_BASE =
  "https://bienbanmo-dot.github.io/aisha-webmeji/";

for (const action of Object.values(window.AISHA_CONFIG)) {
  if (
    action &&
    typeof action === "object" &&
    Array.isArray(action.frames)
  ) {
    action.frames = action.frames.map(
      (src) => AISHA_BASE + src
    );
  }
  }
