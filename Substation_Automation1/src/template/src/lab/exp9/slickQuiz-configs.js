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
            "q": "The important characteristics of the fluid used in Circuit Breaker are :-",
            "a": [
                { "option": "It should have good thermal and chemical stability", "correct": false },
                { "option": "It should have high dielectric strength and are extinguishing ability", "correct": false },
                  { "option": "Non- inflammability and high thermal conductivity", "correct": false},
                { "option": "All the above", "correct": true }
            ],

                "correct": "<p><span>Right answer</span> Ans:All the above</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:All the above</p>"  // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The advantage of using oil in Oil Circuit Breaker as an arc quenching medium is:  ",
            "a": [
                { "option": "It has high dielectric strength", "correct": false },
                { "option": "As a result of decomposition of oil, it has good cooling property", "correct": false },
				{ "option": "Both (a) and (b)", "correct": true },
                { "option": "Highly inflammable", "correct": false }
            // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Both (a) and (b)</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both (a) and (b)</p>" // no comma here
        },
        { // Question 4
            "q": "Instrument Transformer are used because  ",
            "a": [
                { "option": "It is cheap", "correct": false },
                { "option": "It provides more safety", "correct": false },
                { "option": "It is not practicable to connect instruments and meters directly to the lines in high voltage circuits", "correct": false },
				 { "option": "Both (b) and (c)", "correct": true }
               // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:Both (b) and (c</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both (b) and (c</p>"  // no comma here
        },
		{ // Question 5
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
		   { // Question 6
		       "q": "Big porcelain bushing, hollow insulators can be used up to _______ kV.",
		       "a": [
           { "option": "200 kV", "correct": false },
                { "option": "400 kV", "correct": false },
                { "option": "1000 kV", "correct": true },
                { "option": "3000 kV", "correct": false }
               // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:1000 kV</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:1000 kV</p>"  // no comma here
        },
        	   { // Question 7
        	       "q": "The use of ________ for high voltage applications is becoming more common.  ",
        	       "a": [
                { "option": "Oil", "correct": false },
                { "option": "Porcelain", "correct": false },
                { "option": "Polymer", "correct": true },
				 { "option": "All the above", "correct": false }
        	       // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:Polymer</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:Polymer</p>"  // no comma here
        	   },
        	     { // Question 8
        	         "q": "DC supply __________ be used for the transformer. ",
        	         "a": [
                { "option": "Can", "correct": false },
                { "option": "Connect", "correct": true },
                  { "option": "Both (a) and (b)", "correct": false }
         
        	         // {"option": "1291",   "correct": false} // no comma here
            ],
                  "correct": "<p><span>Right answer</span> Ans:Connect</p>",
                  "incorrect": "<p><span>wrong</span> It's wrong,Ans:Connect</p>"  // no comma here
        	     },
		{ // Question 9
		    "q": "The ratio of secondary induced emf to primary induced emf is known as ___________ ",
		    "a": [
                { "option": "Voltage transform ratio", "correct": true },
                { "option": "Current ratio", "correct": false },
				{ "option": "Power ratio", "correct": false },
                { "option": "All the above", "correct": false }
		    // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Voltage transform ratio</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Voltage transform ratio</p>"  // no comma here
	
        	   },
	        { // Question 10
	            "q": "The transmission voltage in India are _________ .",
            "a": [
           { "option": "400 kV", "correct": false },
                { "option": "220 kV", "correct": false },
                { "option": "132 kV", "correct": false},
                { "option": "All the above", "correct": true }
// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:All the above</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:All the above</p>"  // no comma here
        } // no comma here
    ]
};
