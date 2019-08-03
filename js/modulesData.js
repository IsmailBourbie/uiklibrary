/**** Description of files ****/
/** Licence:
 *** keys: semester number for exemple the first semester of the first year is 1 and the the second semester of the third year is 5 and so on
 *** values: an array of objects (modules) that's contains a description of module, for each module there is:
 ***    - url: (String: url) the url of google drive folder (PS: must be the full url including https)
 ***    - name: (String) name of modules 
 ***    - Course, td tp: (Boolean) represent if the module has course, td and tp;
 */

const LICENCE = {
    1: [
        {
            "url": "#",
            "name": "Algorithms",
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
            "name": "Analyse",
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
    };        

function getDegreeData(n) {
    if (n == 0) return LICENCE;
    else return MASTER;
}

function getDegreeName(n) {
    if (n == 0) return "Licence";
    else return "Master";
}

