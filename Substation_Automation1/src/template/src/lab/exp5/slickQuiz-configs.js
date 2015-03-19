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
            "q": "The transformer works on principle of ___________. ",
            "a": [
                { "option": "Self-induction", "correct": false},
                  { "option": "Mutual induction", "correct": true },
                  { "option": "Both (a) and (b)", "correct": false }
            ],
                  "correct": "<p><span>Right answer</span> Ans:Mutual induction</p>",
                  "incorrect": "<p><span>wrong</span> It's wrong,Ans:Mutual induction</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The ratio of secondary induced emf to primary induced emf is known as ___________",
            "a": [
                { "option": "Voltage transform ratio", "correct": true },
                { "option": "Current ratio", "correct": false },
                { "option": "Power ratio", "correct": false },
				{ "option": "All the above", "correct": false }
                //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],

				"correct": "<p><span>Right answer</span> Ans:Voltage transform ratio</p>",
				"incorrect": "<p><span>wrong</span> It's wrong,Ans:Voltage transform ratio</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Instrument Transformer are used because ",
            "a": [
                { "option": "It is cheap", "correct": false },
                { "option": "It provides more safety", "correct": false },
                { "option": "It is not practicable to connect instruments and meters directly to the lines in high voltage circuits", "correct": false },
                { "option": "Both (b) and (c)", "correct": true} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Both (b) and (c)</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both (b) and (c)</p>" // no comma here
        },
        { // Question 4
            "q": "A current transformer is a ________",
            "a": [
                { "option": "Step up transformer", "correct": true },
                { "option": "Step down transformer", "correct": false },
                  { "option": "Both (a) and (b)", "correct": false},
                { "option": "None", "correct": false }
               // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Step up transformer</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Step up transformer</p>"  // no comma here
        },
		{ // Question 5
		    "q": "The important characteristics of the fluid used in CB are : - ",
            "a": [
                { "option": "It should have good thermal and chemical stability", "correct": false },
                { "option": "It should have high dielectric strength and are extinguish ability", "correct": false },
				{ "option": "Non- inflammability and high thermal conductivity", "correct": false },
                { "option": "All the above", "correct": true }
               // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:All the above</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:All the above</p>"  // no comma here
        },
		   { // Question 6
		       "q": "SF6 circuit breaker is ",
            "a": [
                { "option": "Expensive", "correct": false },
                { "option": "SF6 gas has to be reconditioned after every operation of the breaker and additional equipment is required for these purposes", "correct": false },
                { "option": "Both (a) and (b)", "correct": true },
				 { "option": "None of the above", "correct": false }
               // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:Both (a) and (b)</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both (a) and (b)</p>"  // no comma here
        },
        	   { // Question 7
        	       "q": "In double bus–bar system ,there is a provision of a bus-bar coupling switch for transferring operation from one bus-bar to another _________ ",
        	       "a": [
                { "option": "True", "correct": true },
            	 { "option": "False", "correct": false }
        	       // {"option": "1291",   "correct": false} // no comma here
            ],
            	 "correct": "<p><span>Right answer</span> Ans:True</p>",
            	 "incorrect": "<p><span>wrong</span> It's wrong,Ans:True</p>"  // no comma here
        	   },
	        { // Question 8
	            "q": "_________ is a device which is used to switch from one bus to the other without any interruption in power supply and without creating hazardous arcs.  ",
            "a": [
           { "option": "Isolator", "correct": false },
                { "option": "Circuit breaker", "correct": false },
                { "option": "Bus coupler", "correct": true },
                { "option": "Any of the above", "correct": false }
// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Bus coupler</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Bus coupler</p>"  // no comma here
        } // no comma here
    ]
};
