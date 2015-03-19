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
            "q": "In a transformer, if N2 is number of secondary winding The transmission lines and feeders are __________ .",
            "a": [
                { "option": "2-phase 2-wire circuit", "correct": false },
                { "option": "3-phase 3-wire circuit", "correct": true },
                { "option": "Both (a) and (b)", "correct": false },
				{ "option": "None of the above", "correct": false }
                //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
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
            "q": "________ are lines conductors which connect the distribution substations to the areas, to be fed by those distribution substations.",
            "a": [
                { "option": "Service mains", "correct": false },
                { "option": "Distributors", "correct": false },
                { "option": "Feeders", "correct": true },
                { "option": "None of the above", "correct": false }
               // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Feeders</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Feeders</p>"  // no comma here
        },
		{ // Question 5
		    "q": "________ are the terminals which connect the consumer’s terminals to the distributors",
		    "a": [
                { "option": "Service mains", "correct": true },
                { "option": "Distributors", "correct": false },
                { "option": "Feeders", "correct": false },
                { "option": "None of the above", "correct": false }
               // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Service mains</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Service mains</p>"  // no comma here
        },
		   { // Question 6
		       "q": "In AC-system , ",
            "a": [
                { "option": "Electric power can be generated at high voltage", "correct": false },
                { "option": "Stepping-up and stepping down of an AC voltage can be done easily and efficiently with the help of transformers", "correct": false },
                { "option": "Transformer line construction is comparatively difficult and the amount of copper required is comparatively more", "correct": false },
				 {"option": "All the above",      "correct": true}
               // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:All the above</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:All the above</p>"  // no comma here
        },
		{ // Question 7
		       "q": "In AC system, ",
            "a": [
                { "option": "There is a need to synchronize the alternators before they are put in parallel", "correct": false },
                { "option": "As a result of skin effect, the resistance of the line is increased", "correct": false },
                 { "option": "In order to avoid corona loss and also to provide adequate amount of insulation in case of overhead lines, more spacing between the conductors is required", "correct": false },
                {"option": "All the above",      "correct": true}
               // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:All the above</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:All the above</p>"  // no comma here
        },
         { // Question 8 - Multiple Choice, Multiple True Answers, Select Any
             "q": "<u>Statement 1</u>:- The best method is to use AC system for generation and distribution purpose and DC system for transmission purpose.<br><u>Statement 2</u>:- The best method is to use DC system for generation and distribution purpose and AC system for transmission purpose. ",
             "a": [
                { "option": "Statement 1 is true and Statement 2 is false", "correct": true },
                { "option": "Statement 1 is false and Statement 2 is false", "correct": false },
                { "option": "Statement 1 is false and Statement 2 is true", "correct": false },
				{ "option": "Statement 1 is false and Statement 2 is false", "correct": false }
             //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],

				"correct": "<p><span>Right answer</span> Ans:Statement 1 is true and Statement 2 is false</p>",
				"incorrect": "<p><span>wrong</span> It's wrong,Ans:Statement 1 is true and Statement 2 is false</p>" // no comma here
         },
        { // Question 9 - Multiple Choice, Multiple True Answers, Select All
            "q": "Underground cables are rarely used for ",
            "a": [
                { "option": "Detection of fault is tough", "correct": false },
                { "option": "Installation costs are very high", "correct": false },
                { "option": "More suitable for short distance", "correct": false },
                { "option": "All the above", "correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:All the above</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:All the above</p>" // no comma here
        },
        { // Question 10
            "q": "Important component of overhead lines is ",
            "a": [
                { "option": "Conductors", "correct": false },
                { "option": "Supports and cross-arms", "correct": false },
                { "option": "Insulators", "correct": false },
                { "option": "All the above", "correct": true }
            // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:All the above</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:All the above</p>"  // no comma here
        },
		{ // Question 11
		    "q": "The characteristics that conductors used for transmission and distribution should posses :",
		    "a": [
                { "option": "High tensile strength and low sensitivity", "correct": false },
                { "option": "Low specific gravity", "correct": false },
				{ "option": "Low cost", "correct": false },
                { "option": "All the above", "correct": true }
		    // {"option": "1291",   "correct": false} // no comma here
            ],
		    "correct": "<p><span>Right answer</span> Ans:All the above</p>",
		    "incorrect": "<p><span>wrong</span> It's wrong,Ans:All the above</p>"  // no comma here
		},
		   { // Question 12
		       "q": "Hard drawing of copper __________ electrical conductivity by small amount but it ___________ the tensile strength considerably.",
		       "a": [
                { "option": "Increases, decreases", "correct": false },
                { "option": "Decreases, increases", "correct": true },
                { "option": "Both (a) and (b) in some cases", "correct": false },
				 { "option": "None of the above", "correct": false }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:Decreases, increases</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:Decreases, increases</p>"  // no comma here
		   },
		   { // Question 13
		       "q": "Copper conductor is ",
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
		   { // Question 14
		       "q": "Aluminium is ______________ in weight as compared to copper, but has _________ conductivity and tensile strength. ",
		   		       "a": [
                { "option": "Heavier, Smaller", "correct": false },
                { "option": "Heavier, Greater", "correct": false },
                { "option": "Lighter, Greater", "correct": false },
                { "option": "Lighter, Smaller", "correct": true }
		   		       // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Lighter, Smaller</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Lighter, Smaller</p>"  // no comma here
		   		   },
        { // Question 15
            "q": "The sag in aluminium conductors is __________ the copper conductors.",
            "a": [
                { "option": "Lesser than", "correct": false },
                { "option": "Equal to", "correct": false },
		 { "option": "Greater than", "correct": true },
                { "option": "2 times lesser than", "correct": false } 


// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Greater than</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Greater than</p>"  // no comma here
        } // no comma here
    ]
};
