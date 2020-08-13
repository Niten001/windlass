let values = [
  [
    "Achievement",
    true,
    [
      ["Influential", true],
      ["Ambitious", true],
      ["Successful", true],
      ["Capable", true],
      ["Intelligent", true],
    ],
  ],
  [
    "Hedonism",
    true,
    [
      ["Enjoying Life", true],
      ["Self-Indulgent", true],
      ["Pleasure", true],
    ],
  ],
  [
    "Stimulation",
    true,
    [
      ["Daring", true],
      ["Variation in Life", true],
      ["Excitement in Life", true],
    ],
  ],
  [
    "Self-Direction",
    true,
    [
      ["Independent", true],
      ["Freedom", true],
      ["Curious", true],
      ["Creativity", true],
      ["Choosing own Goals", true],
      ["Privacy", true],
      ["Self-Respect", true],
    ],
  ],
  [
    "Universalism",
    true,
    [
      ["Broadminded", true],
      ["Equality", true],
      ["Unity with Nature", true],
      ["Protecting the Environment", true],
      ["Inner Harmony", true],
      ["A World at Peace", true],
      ["Social Justice", true],
      ["Wisdom", true],
    ],
  ],
  [
    "Benevolence",
    true,
    [
      ["A Spiritual Life", true],
      ["Mature Love", true],
      ["Helpful", true],
      ["True Friendship", true],
      ["Forgiving", true],
      ["Meaning in Life", true],
      ["Honest", true],
      ["Responsible", true],
      ["Loyal", true],
    ],
  ],
  [
    "Conformity",
    true,
    [
      ["Self-Discipline", true],
      ["Politeness", true],
      ["Honouring of Elders", true],
      ["Obedient", true],
    ],
  ],
  [
    "Tradition",
    true,
    [
      ["Humble", true],
      ["Detachment", true],
      ["Respect for Tradition", true],
      ["Devout", true],
      ["Moderate", true],
      ["Accepting my Portion in Life", true],
    ],
  ],
  [
    "Security",
    true,
    [
      ["Healthy", true],
      ["Family Security", true],
      ["Social Order", true],
      ["Clean", true],
      ["Reciprocation of Favours", true],
      ["Sense of Belonging", true],
      ["National Security", true],
    ],
  ],
  [
    "Power",
    true,
    [
      ["Social Recognition", true],
      ["Wealth", true],
      ["Authority", true],
      ["Social Power", true],
      ["Preserving my Public Image", true],
    ],
  ],
];

module.exports = function Search() {
  return `<div class="search">
    <div class="search-container">
      <form class="search-form" action="./results">
        <input id="search-input" class="search-input" type="text" placeholder="Search" name="search_query" required/>
        <button class="search-button"><i class="fas fa-search"></i></button>
      </form>
      <button id="filter-button" class="filter-button" onclick="toggleFilter();"><i class="fas fa-chevron-down"></i></button>
    </div>
    <div id="search-filter-dropdown" class="search-filter-dropdown">
      <ul>
        ${values.map((value) => {
          return `<li id="${value[0]}" class="check-box">
            ${value[0]}
            <ul>
              ${value[2].map((category) => {
                return `<li id="${category[0]}" class="check-box">${category[0]}</li>`;
              })}
            </ul>
          </li>`;
        })}
      </ul>
    </div>
  </div>`;
};
