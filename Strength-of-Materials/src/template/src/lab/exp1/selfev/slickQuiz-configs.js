// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge",
        "main":    "<p></p>",
        "results": "<h5>Learn More</h5><p></p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "  For the State of Plane stress shown in the figure Determine the Principal stress?<br><img src=\"../images/mohr01.png\"\/>",
            "a": [
                {"option": "70MPa , -30MPa",      "correct": true},
                {"option": "40MPa, 50MPae of energy",      "correct": false},
                {"option": "-80MPa, 50MPa",      "correct": false},		// no comma here
   		 {"option": "-60MPa, 40MPa ",      "correct": false}        ],
            "correct": "<p><span>Right answer</span> Ans:70MPa , -30MPa</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:70MPa , -30MPa</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": " For the State of Plane stress shown in the figure Determine the Principal plane?<br><img src=\"../images/mohr01.png\"\/>",
            "a": [
                {"option": "28.6 degree, 106.56 degree",               "correct": false},
                {"option": "26.6 degree, 116.30 degree",   "correct": true},
            {"option": "26.0 degree, 216.56 degree",               "correct": false},
              {"option": "46.6 degree, 16.56 degree", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> Ans:26.6 degree, 116.30 degree</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:26.6 degree, 116.30 degree</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "  For the State of Plane stress shown in the figure Determine the maximum shear stress<br><img src=\"../images/mohr01.png\"\/>",
            "a": [
                {"option": "05MPa",           "correct": false},
                {"option": "39MPa",                  "correct": false},
                {"option": "50MPa",  "correct": true},		
                {"option": "35MPa",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span> Ans:50MPa</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:50MPa</p>" // no comma here
        }
        
      // no comma here
    ]
};
