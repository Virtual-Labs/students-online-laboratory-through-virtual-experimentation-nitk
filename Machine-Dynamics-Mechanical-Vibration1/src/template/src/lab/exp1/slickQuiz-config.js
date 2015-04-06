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
            "q": " A body is said to undergo free vibration, when?",
            "a": [
                {"option": "It  vibrates in free space",      "correct": false},
                {"option": "It vibrates  freely with no force acting on it",     "correct": true},
                {"option": "The force causing the initial displacement  is removed",      "correct": false},
                {"option": "It vibrates freely with no resistive force acting on it",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:It vibrates  freely with no force acting on it</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:It vibrates  freely with no force acting on it</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": " A rod 20 mm diameters and 1.2 m long is rigidly fixed at one end and has a mass of 2kg concentrated at the other end. Ignoring the weight of the rod, calculate the frequency of transverse vibrations. Take E=200 Gpa.?",
            "a": [
                {"option": "5.88Hz",               "correct": true},
                {"option": "7.99Hz",   "correct": false},
                {"option": "8.66Hz",      "correct": false},
                {"option": "25Hz",     "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> Ans: 5.88Hz</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 5.88Hz</p>" // no comma here
        },
       { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": " If energy is lost in any way during vibration, the system can be considered to be  ?",
            "a": [
                {"option": "Damped",           "correct": true},
                {"option": "Undamped",                  "correct": false},
                {"option": "Underdamped ",  "correct": false},
                {"option": "Overdamped",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span> Ans: Damped </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Damped </p>" // no comma here
        },
        { // Question 4
            "q": " A system is said to be a Simply Supported beam system if it has a hinged connection at one end and .................. connection in other end. ",
            "a": [
                {"option": " Roller",    "correct": true},
                {"option": "Hinged",     "correct": false},
                {"option": "Fixed",      "correct": false},
              {"option": "Free ",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans: Roller</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Roller</p>"  // no comma here
        },
        { // Question 5 
            "q": " For a cantilever beam with a point load at the free end, The stiffness is ",
            "a": [
                {"option": "48EI/L3 ",    "correct": false},
                {"option": "192EI/L3",     "correct": false},
		 {"option": "3EI/L3",  "correct": true},
                {"option": "EI/L3",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans: 3EI/L3 </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:3EI/L3</p>"  // no comma here
        },
 { // Question 5
            "q": "For a Fixed-Fixed beam with a point load at the middle, The stiffness is",
            "a": [
                {"option": "48EI/L3 ",    "correct": false},
                {"option": " 192EI/L3",     "correct": true},
		 {"option": "3EI/L3",  "correct": false},
                {"option": "EI/L3",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:192EI/L3</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:192EI/L3</p>"  // no comma here
        },
  { // Question 5
            "q": " In free vibration experiment the damping may occur due to",
            "a": [
                {"option": "Friction at support",    "correct": false},
                {"option": "Hysteresis damping",     "correct": false},
		 {"option": "Friction at support and Hysteresis damping",  "correct": true},
                {"option": "None of the above",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans: Friction at support and Hysteresis damping</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Friction at support and Hysteresis damping</p>"  // no comma here
        },
 { // Question 5
            "q": " A FFT plot is a?",
            "a": [
                {"option": "Frequency domain plot ",    "correct": true},
                {"option": "Time domain plot",     "correct": false},
		 {"option": "Amplifier",  "correct": false},
                {"option": "None of the above",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Frequency domain plot </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Frequency domain plot </p>"  // no comma here
        } ,  // no comma here
{ // Question 5
            "q": " When a system is subjected to free vibration and the system is considered as a discrete system in which the beam is considered as mass-less and the whole mass is concentrated at the free end of the beam. The governing equation of motion for such system will be,?",
            "a": [
                {"option": " mx+kx=0",    "correct": true},
                {"option": "mx+kx=f0 Sinwt ",     "correct": false},
		 {"option": "kx+mx=0",  "correct": false},
                {"option": "mx+kx=f0",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:  mx+kx=0</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: mx+kx=0</p>"  // no comma here
        } ,
{ // Question 5
            "q": " The moment of inertia of the beam cross-section and for a circular cross-section it is given as,?",
            "a": [
                {"option": "I=pi/64d4",    "correct": true},
                {"option": "I=pi/32d4",     "correct": false},
		 {"option": "I=pi/62d4",  "correct": false},
                {"option": "I=pi/34d4",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans: I=pi/64d4</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:I=pi/64d4</p>"  // no comma here
        }   
    ]
};
