// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge",
        "main":    "<p></p>",
        "results": "<h5>Learn More</h5><p>study and take quiz</p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "The maximum generated voltage in power generating stations in advanced countries is 33kV while that in India is _________",
            "a": [
                { "option": "6kV", "correct": false },
            { "option": "9kV", "correct": false },
            { "option": "11kV", "correct": true },
                { "option": "44kV", "correct": false }
            ],
                "correct": "<p><span>Right answer</span> Ans:11kV</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:11kV</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
              "q": "The transmission lines and feeders are  _____________",
            "a": [
                { "option": "2-phase 2-wire circuits", "correct": false },
                { "option": "3-phase 3-wire circuit", "correct": true },
                { "option": "3-phase 3-wire circuits", "correct": false },
                { "option": "None of the above", "correct": false} // no comma here
            ],

                "correct": "<p><span>Right answer</span> Ans:3-phase 3-wire circuit</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:3-phase 3-wire circuit</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The transmission lines are _____________",
            "a": [
                { "option": "3-phase 4-wire circuits", "correct": true },
                { "option": "2-phase 2-wire circuits", "correct": false },
                { "option": "3-phase 3-wire circuits", "correct": false },
                { "option": "None of the above", "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:3-phase 4-wire circuits</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:3-phase 4-wire circuits</p>" // no comma here
        },
        { // Question 4
            "q": "Copper conductor is _____________ ",
            "a": [
                { "option": "Homogenous material", "correct": false },
                { "option": "Highly durable and has high scrap value", "correct": false },
                { "option": "It has high current density, so lesser X-sectional area of conductor is required", "correct": false },
                { "option": "All the above", "correct": true }
               // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:All the above</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:All the above</p>"  // no comma here
        },
		{ // Question 5
		    "q": "The sag in aluminium conductors is __________ the copper conductors.",
            "a": [
                { "option": "Lesser than", "correct": false },
                { "option": "Equal to", "correct": false },
                { "option": "Greater than", "correct": true },
                { "option": "2 times lesser than", "correct": false }
               // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Greater than</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Greater than</p>"  // no comma here
        },
		   { // Question 6
		       "q": "Choose the proper set of increases order of mechanical strength of the following line supports :  ",
            "a": [
                { "option": "Wooden poles > steel poles > steel towers > R.C.C poles", "correct": false },
                { "option": "Wooden poles > steel towers > steel poles > R.C.C poles", "correct": false },
                { "option": "Wooden poles > steel poles >R.C.C poles > steel towers", "correct": true },
				 {"option": "Wooden poles > R.C.C poles >steel poles > steel towers",      "correct": false}
               // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:Wooden poles > steel poles >R.C.C poles > steel towers</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:Wooden poles > steel poles >R.C.C poles > steel towers</p>"  // no comma here
        },
		{ // Question 7
		       "q": "A good porcelain insulator has compressive strength of about _________ and dielectric strength of _________ of its thickness.",
            "a": [
                { "option": "70 N/m<sup>2</sup> , 6kV/cm", "correct": false },
                { "option": "700 N/m<sup>2</sup>, 6kV/cm", "correct": false },
                 { "option": "7000 N/m<sup>2</sup> , 6kV/cm", "correct": false },
                {"option": "7000 N/m<sup>2</sup> , 60kV/cm",      "correct": true}
               // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:7000 N/m<sup>2</sup> , 60kV/cm</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:7000 N/m<sup>2</sup> , 60kV/cm</p>"  // no comma here
        },
         { // Question 8 - Multiple Choice, Multiple True Answers, Select Any
             "q": "Steatite is produced by mixing ___________ with small proton of ________ and ___________. ",
             "a": [
                { "option": "Hydrated magnesium silicate,carbon,nitrogen", "correct": false },
                { "option": "Hydrated magnesium silicate,carbon,clay", "correct": false },
                { "option": "Hydrated magnesium silicate,nitrogen,clay", "correct": false },
				{ "option": "Hydrated magnesium silicate, clay, feldspar", "correct": true }
             //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],

				"correct": "<p><span>Right answer</span> Ans:Hydrated magnesium silicate, clay, feldspar</p>",
				"incorrect": "<p><span>wrong</span> It's wrong,Ans:Hydrated magnesium silicate, clay, feldspar</p>" // no comma here
         },
        { // Question 9 - Multiple Choice, Multiple True Answers, Select All
            "q": "Development of 11KV/433 volts substation automation scheme using PLC for cyclic ON/OFF load control schemes",
            "a": [
                { "option": "Weight of the conductor", "correct": false },
                { "option": "Span length", "correct": false },
                { "option": "Temperature", "correct": false },
                { "option": "All the above", "correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:All the above</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:All the above</p>" // no comma here
        },
        { // Question 10
            "q": "The skin effect is negligible when the supply frequency is ________ and the conductor diameter is _________.",
            "a": [
                { "option": "High, Large", "correct": false },
                { "option": "High, Small", "correct": false },
                { "option": "Low ,Small", "correct": true },
                { "option": "Low ,Large", "correct": false }
            // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Low ,Small</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Low ,Small</p>"  // no comma here
        },
		{ // Question 11
		    "q": "The factor which effect skin and proximity effects are ___________",
		    "a": [
                { "option": "Frequency of the current", "correct": false },
                { "option": "Permeability of the conductor material", "correct": false },
				{ "option": "Size of the conductor and distance between the conductors", "correct": false },
                { "option": "All the above", "correct": true }
		    // {"option": "1291",   "correct": false} // no comma here
            ],
		    "correct": "<p><span>Right answer</span> Ans:All the above</p>",
		    "incorrect": "<p><span>wrong</span> It's wrong,Ans:All the above</p>"  // no comma here
		},
		   { // Question 12
		       "q": "In medium transmission lines ________",
		       "a": [
                { "option": "Length is between 50 km and 160km", "correct": false },
                { "option": "Operating voltage is between 21kV and 100kV", "correct": false },
                { "option": "Both (a) and (b)", "correct": true },
				 { "option": "None of the above", "correct": false }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:Both (a) and (b)</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both (a) and (b)</p>"  // no comma here
		   },
		   { // Question 13
		       "q": "_______ is the r.m.s value of current which the Circuit breaker is capable of carrying continuously at its rated frequency under specified conditions.",
		       "a": [
                { "option": "Breaking capacity", "correct": false },
                { "option": "Making capacity", "correct": false },
                { "option": "Short-time capacity", "correct": false },
                { "option": "None of the above", "correct": true }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:None of the above</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:None of the above</p>"  // no comma here
		   },
		   { // Question 14
		       "q": "Functions of switchgear are ________",
		   		       "a": [
                { "option": "To localize the effects of faults by operation of protective equipment and so automatically disconnect faulty point from the system", "correct": false },
                { "option": "To break efficiently the short circuits without giving rise to dangerous conditions", "correct": false },
                { "option": "To facilitate the redistribution of local, inspection and maintenance on the system", "correct": false },
                { "option": "All the above", "correct": true }
		   		       // {"option": "1291",   "correct": false} // no comma here
            ],
		   		       "correct": "<p><span>Right answer</span> Ans:All the above</p>",
		   		       "incorrect": "<p><span>wrong</span> It's wrong,Ans:All the above</p>"  // no comma here
		   		   },
        { // Question 15
            "q": "Timers are __________",
            "a": [
                { "option": "Used to delay an action", "correct": false },
                { "option": "Used to run an operation for a predetermined period of time", "correct": false },
		 { "option": "Used to record the total accumulated time of continuous or inter-mediate events", "correct": false },
                { "option": "All the above", "correct": true } 


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:All the above</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:All the above</p>"  // no comma here
        } // no comma here
    ]
};
