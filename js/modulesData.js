/**** Description of files ****/
/** Licence:
 *** keys: semester number for exemple the first semester of the first year is 1 and the the second semester of the third year is 5 and so on
 *** values: an array of objects (modules) that's contains a description of module, for each module there is:
 ***    - url: (String: url) the url of google drive folder (PS: must be the full url including https)
 ***    - name: (String) name of modules 
 ***    - Course, td tp: (Boolean) represent if the module has course, td and tp;
 */

const LICENCE = {    
    1: [// first year
        [ // Semester 01
            {
                "url": "#",
                "name": "Algorithms 01",
                "course": true,
                "td": true,
                "tp": true,
            },
            {
                "url": "#",
                "name": "Bureautique",
                "course": false,
                "td": false,
                "tp": true,
            },
            {
                "url": "#",
                "name": "Analyse 01",
                "course": true,
                "td": true,
                "tp": false,
            },
            {
                "url": "#",
                "name": "Algebre 01",
                "course": true,
                "td": true,
                "tp": false,
            },
            {
                "url": "#",
                "name": "Electronique",
                "course": true,
                "td": true,
                "tp": false,
            },
            {
                "url": "#",
                "name": "Mecanique",
                "course": true,
                "td": true,
                "tp": false,
            },
            {
                "url": "#",
                "name": "Anglais",
                "course": true,
                "td": false,
                "tp": false,
            }
        ],
        [ // Semester 02
            {
                "url": "#",
                "name": "Algorithms 02",
                "course": true,
                "td": true,
                "tp": true,
            },
            {
                "url": "#",
                "name": "Structure Machine",
                "course": false,
                "td": false,
                "tp": true,
            },
            {
                "url": "#",
                "name": "Analyse 02",
                "course": true,
                "td": true,
                "tp": false,
            },
            {
                "url": "#",
                "name": "Algebre 02",
                "course": true,
                "td": true,
                "tp": false,
            },
            {
                "url": "#",
                "name": "POO",
                "course": true,
                "td": true,
                "tp": false,
            },
            {
                "url": "#",
                "name": "Electricité",
                "course": true,
                "td": true,
                "tp": false,
            },
            {
                "url": "#",
                "name": "Tech de L'information",
                "course": true,
                "td": true,
                "tp": false,
            },
            {
                "url": "#",
                "name": "Statistiques",
                "course": true,
                "td": false,
                "tp": false,
            }
        ]
    ],
    2: [
        [ // Semester 01
            {
                "url": "#",
                "name": "Théories Des Graphs",
                "course": true,
                "td": true,
                "tp": false,
            },
            {
                "url": "#",
                "name": "Génie Logiciel 01",
                "course": true,
                "td": true,
                "tp": false,
            },
            {
                "url": "#",
                "name": "Systéme D'exploitaion",
                "course": true,
                "td": true,
                "tp": true,
            },
            {
                "url": "#",
                "name": "Base De Donnée",
                "course": true,
                "td": true,
                "tp": false,
            },
            {
                "url": "#",
                "name": "Développement D'applications Web",
                "course": true,
                "td": false,
                "tp": true,
            },
            {
                "url": "#",
                "name": "Réseaux De Communication",
                "course": true,
                "td": true,
                "tp": true,
            },
            {
                "url": "#",
                "name": "Anglais",
                "course": true,
                "td": false,
                "tp": false,
            }
        ],
    ],
    3: []    
},
    MASTER = {
        "SE" : {
            1: [
                [
                    {
                        "url": "#",
                        "name": "BDA et DataMining",
                        "course": true,
                        "td": true,
                        "tp": true,
                    },
                    {
                        "url": "#",
                        "name": "Compléxité Algorithmique",
                        "course": true,
                        "td": true,
                        "tp": true,
                    },
                    {
                        "url": "#",
                        "name": "Simulation Multi Agent.",
                        "course": true,
                        "td": true,
                        "tp": true,
                    },
                    {
                        "url": "#",
                        "name": "Génie Logiciel.",
                        "course": true,
                        "td": true,
                        "tp": false,
                    },
                    {
                        "url": "#",
                        "name": "Gestion de la qualité",
                        "course": true,
                        "td": true,
                        "tp": false,
                    },
                    {
                        "url": "#",
                        "name": "Architecture et Administration de SGBD",
                        "course": true,
                        "td": true,
                        "tp": false,
                    },
                    {
                        "url": "#",
                        "name": "Logique pour IA",
                        "course": true,
                        "td": true,
                        "tp": false,
                    },
                    {
                        "url": "#",
                        "name": "Anglais",
                        "course": true,
                        "td": false,
                        "tp": false,
                    },
                ],
                [
                    {
                        "url": "#",
                        "name": "Specification et conception des logiciels",
                        "course": true,
                        "td": true,
                        "tp": false,
                    },
                    {
                        "url": "#",
                        "name": "Validation formelle des systemes informtique",
                        "course": true,
                        "td": true,
                        "tp": true,
                    },
                    {
                        "url": "#",
                        "name": "Architecture et Dev Logiciels",
                        "course": true,
                        "td": false,
                        "tp": true,
                    },
                    {
                        "url": "#",
                        "name": "Construction des App Réparties",
                        "course": true,
                        "td": false,
                        "tp": true,
                    },
                    {
                        "url": "#",
                        "name": "Fondement de l'intelligence Artificielle",
                        "course": true,
                        "td": true,
                        "tp": false,
                    },
                    {
                        "url": "#",
                        "name": "Mathématiques Appliquées",
                        "course": true,
                        "td": true,
                        "tp": false,
                    },
                    {
                        "url": "#",
                        "name": "Programmation Web",
                        "course": true,
                        "td": false,
                        "tp": true,
                    },
                    {
                        "url": "#",
                        "name": "Sécurité Informatique.",
                        "course": true,
                        "td": false,
                        "tp": true,
                    },
                    {
                        "url": "#",
                        "name": "Anglais 2",
                        "course": true,
                        "td": false,
                        "tp": false,
                    }
                ]
            ],
            2: [                
            ],
        },
        "NT": {
            1: [],
            2: []
        },
        "CS": {
            1: [],
            2: []
        }
    };       


function getLicenceSemester(year, semester) {
    return LICENCE[year][semester];
}

function getMasterSemester(speciality, year, semester) {
    return MASTER[speciality][year][semester];
}