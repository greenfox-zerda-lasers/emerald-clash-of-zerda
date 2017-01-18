const data = (function () {

  const user = [
    {"id": 1, "username": "brigi", "kingdom": "brigi\'s kingdom", "points": 32, "password": "password"},
    {"id": 2, "username": "gabor", "kingdom": "gabor\'s kingdom", "points": 25, "password": "jelszo"}
  ];

  const buildings = [
    [{"id": 1, "type": "townhall", "level": 1, "hp": 100},
  	 {"id": 2, "type": "mine", "level": 1, "hp": 100},
  	 {"id": 3, "type": "farm", "level": 1, "hp": 100},
  	 {"id": 4, "type": "barack", "level": 1, "hp": 100},
  	 {"id": 5, "type": "barack", "level": 2, "hp": 100},
    ],
    [
  	 {"id": 6, "type": "townhall", "level": 1, "hp": 100},
  	 {"id": 7, "type": "mine", "level": 1, "hp": 100},
  	 {"id": 8, "type": "farm", "level": 1, "hp": 100},
  	 {"id": 9, "type": "barack", "level": 1, "hp": 100},
  	 {"id": 10, "type": "barack", "level": 2, "hp": 100},
    ]
  ];

  const resources = [
    [{"type": "food", "amount": 3, "buildings": ["townhall", "farm"]},
     {"type": "gold", "amount": 4, "buildings": ["townhall", "mine"]},
    ],
    [{"type": "food", "amount": 5, "buildings": ["townhall", "farm"]},
     {"type": "gold", "amount": 7, "buildings": ["townhall", "mine"]},
    ],
  ];

  const troops = [
    [{"id": 1, "level": 1, "hp": 100, "attack": 20, "defense": 30},
     {"id": 2, "level": 2, "hp": 100, "attack": 30, "defense": 100},
     {"id": 3, "level": 2, "hp": 100, "attack": 35, "defense": 105},
     {"id": 4, "level": 3, "hp": 100, "attack": 50, "defense": 300}
    ],
    [{"id": 5, "level": 1, "hp": 100, "attack": 20, "defense": 30},
     {"id": 6, "level": 2, "hp": 100, "attack": 30, "defense": 100},
     {"id": 7, "level": 2, "hp": 100, "attack": 35, "defense": 105},
     {"id": 8, "level": 3, "hp": 100, "attack": 50, "defense": 300}
    ]
  ];

  const kingdom = [
    {"user": user[0], "buildings": buildings[0], "resources": resources[0], "troops": troops[0]},
    {"user": user[1], "buildings": buildings[1], "resources": resources[1], "troops": troops[1]},
  ];

  const battle = {
    "id": 1, /* what?*/
	  "attacker": {
      "user": user[0],
      "troops": troops,
      "damage": 20,
      "troopsLost": troops
    },
  	"defender": {
      "user": user[1],
      "troops": troops,
      "damage": 20,
      "troopsLost": troops,
      "buildingsLost": buildings,
    }
  };

  return {
    userData: user,
    kingdomData: kingdom,
    buildingData: buildings,
    resourceData: resources,
    troopData: troops,
    battleData: battle
  }

}) ();

module.exports = data;
