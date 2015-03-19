// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "Test Your Knowledge",
        "main": "<p></p>",
        "results": "<h5>Learn More</h5><p>study and take quiz</p>",
        "level1": "Jeopardy Ready",
        "level2": "Jeopardy Contender",
        "level3": "Jeopardy Amateur",
        "level4": "Jeopardy Newb",
        "level5": "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "The function of __________ is to isolate the part of the power system in case of abnormal conditions.",
            "a": [
                { "option": "Circuit Breaker", "correct": true },
            { "option": "Isolator", "correct": false },
            { "option": "Insulator", "correct": false },
                { "option": "All the above", "correct": false }
            ],
            "correct": "<p><span>Right answer</span> Ans:Circuit Breaker</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Circuit Breaker</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "In oil circuit breaker (O.C.B) the range exists between",
            "a": [
                { "option": "75MVA at 2.5 kV and 50000MVA at 250kV", "correct": false },
                { "option": "7.5MVA at 2.5 kV and 50000MVA at 250kV", "correct": false },
                { "option": "250MVA at 2.5 kV and 5000MVA at 250kV", "correct": false },
				{ "option": "25MVA at 2.5 kV and 5000MVA at 250kV", "correct": true }
            //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],

            "correct": "<p><span>Right answer</span> Ans:25MVA at 2.5 kV and 5000MVA at 250kV</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:25MVA at 2.5 kV and 5000MVA at 250kV</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The voltage across the contacts during the arcing period is known as ",
            "a": [
                { "option": "Recovery voltage", "correct": false },
                { "option": "Restriking voltage", "correct": false },
                { "option": "Arc voltage", "correct": true },
                { "option": "All the above", "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Arc voltage</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Arc voltage</p>" // no comma here
        },
        { // Question 4
            "q": "The transient voltage appearing across the contacts during arc period is called ________ ",
            "a": [
              { "option": "Recovery voltage", "correct": false },
                { "option": "Restriking voltage", "correct": true },
                { "option": "Arc voltage", "correct": false },
                { "option": "All the above", "correct": false }
            // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Restriking voltage</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Restriking voltage</p>"  // no comma here
        },
		{ // Question 5
		    "q": "When low inductive current is interrupted by a Circuit breaker and the arc generating force of the Circuit breaker and is more than necessary to interrupt a low magnitude of current, the current will be interrupted before its natural zero instant. It is termed as ",
		    "a": [
                { "option": "Restriking", "correct": false },
                { "option": "Recovery instant", "correct": false },
                { "option": "Current chopping", "correct": true },
                { "option": "Arcing voltage", "correct": false }
		    // {"option": "1291",   "correct": false} // no comma here
            ],
		    "correct": "<p><span>Right answer</span> Ans:Current chopping</p>",
		    "incorrect": "<p><span>wrong</span> It's wrong,Ans:Current chopping</p>"  // no comma here
		},
		   { // Question 6
		       "q": "_________ is the r.m.s value of current which the Circuit breaker is capable of carrying continuously at its rated frequency under specified conditions. ",
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
		   { // Question 7
		       "q": "________ is the current (r.m.s value) that a Circuit breaker is capable of breaking under specified conditions and given recovery voltage. ",
		       "a": [
           { "option": "Breaking capacity", "correct": true },
                { "option": "Making capacity", "correct": false },
                { "option": "Short-time capacity", "correct": false },
				 { "option": "None of the above", "correct": false }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
		       "correct": "<p><span>Right answer</span> Ans:Breaking capacity</p>",
		       "incorrect": "<p><span>wrong</span> It's wrong,Ans:Breaking capacity</p>"  // no comma here
		   },
         { // Question 8 - Multiple Choice, Multiple True Answers, Select Any
             "q": "The maximum generated voltage in power generating stations in advanced countries is 33kV while that in India is ________ ",
             "a": [
                { "option": "6 kV", "correct": false },
                { "option": "9kV", "correct": false },
                { "option": "11kV", "correct": true },
				{ "option": "44kV", "correct": false }
             //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],

             "correct": "<p><span>Right answer</span> Ans:11kV</p>",
             "incorrect": "<p><span>wrong</span> It's wrong,Ans:11kV</p>" // no comma here
         },
        { // Question 9 - Multiple Choice, Multiple True Answers, Select All
            "q": "The transmission lines are _________ ",
            "a": [
                { "option": "3-phase 4-wire circuits", "correct": true },
                { "option": "2-phase 2-wire circuits", "correct": false },
                { "option": "3-phase 3-wire circuits", "correct": false },
                { "option": "None of the above", "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:3-phase 4-wire circuits</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:3-phase 4-wire circuits</p>" // no comma here
        },
        { // Question 10
            "q": "_________ are the terminals which connect the consumer’s terminals to the distributors.",
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
		{ // Question 11
		    "q": "In AC system,",
		    "a": [
                { "option": "There is a need to synchronize the alternators before they are put in parallel", "correct": false },
                { "option": "As a result of skin effect, the resistance of the line is increased", "correct": false },
				{ "option": "In order to avoid corona loss and also to provide adequate amount of insulation in case of overhead lines, more spacing between the conductors is required", "correct": false },
                { "option": "All the above", "correct": true }
		    // {"option": "1291",   "correct": false} // no comma here
            ],
		    "correct": "<p><span>Right answer</span> Ans:All the above</p>",
		    "incorrect": "<p><span>wrong</span> It's wrong,Ans:All the above</p>"  // no comma here
		},
		   { // Question 12
		       "q": "Underground cables are rarely used for",
		       "a": [
                { "option": "Detection of fault is tough", "correct": false },
                { "option": "Installation costs are very high", "correct": false },
                { "option": "More suitable for short distance", "correct": false },
				 { "option": "All the above", "correct": true }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
		       "correct": "<p><span>Right answer</span> Ans:All the above</p>",
		       "incorrect": "<p><span>wrong</span> It's wrong,Ans:All the above</p>"  // no comma here
		   },
		   { // Question 13
		       "q": "The characteristics that conductors used for transmission and distribution should possess :  ",
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
		   { // Question 14
		       "q": "Copper conductor is",
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
        { // Question 15
            "q": "The sag in aluminium conductors is __________ the copper conductors.",
            "a": [
                { "option": "Lesser than", "correct": false },
                { "option": "Equal to", "correct": false },
		 { "option": "Greater than", "correct": true},
                { "option": "2 times lesser than", "correct": true }


            // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Greater than</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Greater than</p>"  // no comma here
} // no comma here
    ]
};
