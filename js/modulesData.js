const LICENCE = {
    1: [
        {
            "url": "#",
            "name": "Algorithms",
            "course": 1,
            "td": 1,
            "tp": 1,
        },
        {
            "url": "#",
            "name": "Bureautique",
            "course": 0,
            "td": 0,
            "tp": 1,
        },
        {
            "url": "#",
            "name": "Analyse",
            "course": 1,
            "td": 1,
            "tp": 0,
        },
        {
            "url": "#",
            "name": "Anglais",
            "course": 1,
            "td": 0,
            "tp": 0,
        }
    ],
    2: [
        // Here you add module as the first semester
    ],
    3: [],
    4: [],
    5: [],
    6: [],
},
    MASTER = {
        1: [],
        2: [],
        3: [],
        4: [],
    };        

function getDegreeData(n) {
    if (n == 0) return LICENCE;
    else return MASTER;
}

function getDegreeName(n) {
    if (n == 0) return "Licence";
    else return "Master";
}

