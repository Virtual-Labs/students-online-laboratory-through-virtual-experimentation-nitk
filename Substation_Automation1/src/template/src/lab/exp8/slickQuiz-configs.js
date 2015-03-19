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
            "q": "The main function of substations are",
            "a": [
                { "option": "To receive energy transmitted at high voltage from the generating stations", "correct": false },
                  { "option": "To decrease the voltage to a value appropriate for local distribution", "correct": false },
                    { "option": "To provide switching facilities", "correct": false },
                { "option": "All the above", "correct": true}
            ],
                "correct": "<p><span>Right answer</span> Ans:All the above</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:All the above</p>"  // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Substations generally have ",
            "a": [
                { "option": "Switching and protection equipment", "correct": false },
                { "option": "Transformers", "correct": false },
                { "option": "Control equipment", "correct": false },
				{ "option": "All the above", "correct": true }
                //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],
				"correct": "<p><span>Right answer</span> Ans:All the above</p>",
				"incorrect": "<p><span>wrong</span> It's wrong,Ans:All the above</p>"  // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "A circuit breaker is an automatically operated electrical switch designed to protect an electrical circuit from damage caused by ________.",
            "a": [
                { "option": "Overhead", "correct": false },
                { "option": "Short circuit", "correct": false },
                { "option": "Both", "correct": true },
                { "option": "None of the above", "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Both</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both</p>" // no comma here
        },
        { // Question 4
            "q": "The important characteristics of the fluid used in Circuit Breaker are :-",
            "a": [
                { "option": "It should have good thermal and chemical stability", "correct": false },
                { "option": "It should have high dielectric strength and are extinguishing ability", "correct": false },
                  { "option": "Non- inflammability and high thermal conductivity", "correct": false },
                { "option": "All the above", "correct": true}
               // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:All the above</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:All the above</p>"  // no comma here
        },
		{ // Question 5
		    "q": "The advantage of using oil in Oil Circuit Breaker as an arc quenching medium is:  ",
            "a": [
                { "option": "It has high dielectric strength", "correct": false },
                { "option": "As a result of decomposition of oil, it has good cooling property", "correct": false },
				{ "option": "Both (a) and (b)", "correct": true },
                { "option": "Highly inflammable", "correct": false }
               // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Both (a) and (b)</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both (a) and (b)</p>"  // no comma here
        },
		   { // Question 6
		       "q": "SF6 circuit breaker is ________  ",
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
        	       "q": "Instrument Transformer are used because  ",
        	       "a": [
                { "option": "It is cheap", "correct": false },
                { "option": "It provides more safety", "correct": false },
                { "option": "It is not practicable to connect instruments and meters directly to the lines in high voltage circuits", "correct": false },
				 { "option": "Both (b) and (c)", "correct": true }
        	       // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:Both (b) and (c)</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both (b) and (c)</p>"  // no comma here
        	   },
        	     { // Question 8
        	         "q": "A potential transformer is a ",
        	         "a": [
                { "option": "Step up transformer", "correct": false },
                { "option": "Step down transformer", "correct": true },
                  { "option": "Both (a) and (b)", "correct": false},
                { "option": "None", "correct": false }
        	         // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Step down transformer</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Step down transformer</p>"  // no comma here
        	     },
		{ // Question 9
		    "q": "A current transformer is a",
		    "a": [
               { "option": "Step up transformer", "correct": true },
                { "option": "Step down transformer", "correct": false },
                  { "option": "Both (a) and (b)", "correct": false },
                { "option": "None", "correct": false }
		    // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Step up transformer</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Step up transformer</p>"  // no comma here
	
        	   },
	        { // Question 10
	            "q": "Big porcelain bushing, hollow insulators can be used up to _______ kV.",
            "a": [
           { "option": "200 kV", "correct": false },
                { "option": "400 kV", "correct": false },
                { "option": "1000 kV", "correct": true },
                { "option": "3000 kV", "correct": false }
// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:1000 kV</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:1000 kV</p>"  // no comma here
        } // no comma here
    ]
};
