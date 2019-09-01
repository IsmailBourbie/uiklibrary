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
        [ // Semester 01
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
    2: [],
    3: []    
},
    MASTER = {
        "GL" : {
            1: [],
            2: [
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
                }
            ],
            3: [],
            4: [],
        }
    };        


function getLicenceSemester(year, semester) {
    return LICENCE[year][semester];
}