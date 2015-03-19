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
            "q": "The advantage of using PLC is ",
            "a": [
                { "option": "Accuracy and quality can be improved", "correct": false },
            { "option": "Productivity can be improved", "correct": false },
            { "option": "Makes it easy to work in difficult or hazardous environment", "correct": false },
                { "option": "All the above", "correct": true }
            ],
            "correct": "<p><span>Right answer</span> Ans:All the above</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:All the above</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "In the figure shown below, recognize the following part <br><img src=\"../images/PLC/1.jpg\"\height=300 width=450/>",
            "a": [
                { "option": "1= Input section<br> 2 = Output section<br>3 = Sensing section<br>4 = Field hardware devices", "correct": false },
                { "option": "1 = Sensing section<br>2 = Output section<br>3 = Field hardware devices<br>4 = Input section", "correct": false },
                { "option": "1= Input section<br>2 = Sensing section<br>3 = Output section<br>4 = Field hardware devices", "correct": false },
				{ "option": "1 = Sensing section<br>2 = Input section<br>3 = Field hardware devices<br>4 = Output section", "correct": true }
                //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],

				"correct": "<p><span>Right answer</span> Ans:1 = Sensing section<br>2 = Input section<br>3 = Field hardware devices<br>4 = Output section</p>",
				"incorrect": "<p><span>wrong</span> It's wrong,Ans:1 = Sensing section<br>2 = Input section<br>3 = Field hardware devices<br>4 = Output section</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "In the sensing section of PLC, it has limit switches, photoelectric sensors, push button etc. These hardware devices are called as ",
            "a": [
                { "option": "Field input devices", "correct": true },
                { "option": "Field input and output devices", "correct": false },
                { "option": "Field output devices", "correct": false },
                { "option": "All", "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Field input devices</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Field input devices</p>" // no comma here
        },
        { // Question 4
            "q": "The Function of the input section in PLC, is to ",
            "a": [
                { "option": "Connect and isolate ,low voltage input level to high-voltage signal", "correct": false },
                { "option": "Connect and isolate, high voltage input level from field device to low-voltage signals", "correct": true },
                { "option": "Both (a) and (b)", "correct": false },
                { "option": "Neither (a) and (b)", "correct": false }
               // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Connect and isolate, high voltage input level from field device to low-voltage signals</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Connect and isolate, high voltage input level from field device to low-voltage signals</p>"  // no comma here
        },
		{ // Question 5
		    "q": "Programmer (device used by the programme or operator to enter or edit program instruction or data) is a ",
		    "a": [
                { "option": "Handheld programmer", "correct": false },
                { "option": "Personal computer", "correct": false },
                { "option": "Industrial computer programming terminal", "correct": false },
                { "option": "All", "correct": true }
               // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:All</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
        },
		   { // Question 6
		       "q": "When the PLC is running and following the programmer�s instructions, it is called as  ",
            "a": [
                { "option": "Solving the computer problem", "correct": false },
                { "option": "Fixing the bug", "correct": false },
                { "option": "Solving the user program", "correct": true },
				 {"option": "All",      "correct": false}
               // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Solving the user program</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Solving the user program</p>"  // no comma here
        },
		   { // Question 7
		       "q": "Fixed PLC is also called as  ",
            "a": [
                { "option": "A modular PLC", "correct": false },
                { "option": "Motion PLC", "correct": false },
                 { "option": "Packaged controller", "correct": true },
                {"option": "Both",      "correct": false}
               // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Packaged controller</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Packaged controller</p>"  // no comma here
        },
         { // Question 8 - Multiple Choice, Multiple True Answers, Select Any
             "q": "The list of instructions given by the programmer is placed in PLC memory in ascending order. This list of instructions is called as",
             "a": [
                { "option": "Instructions to hardware", "correct": false },
                { "option": "Instructions to field hardware device", "correct": false },
                { "option": "User ladder program", "correct": true },
				{ "option": "None", "correct": false }
             //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],

				"correct": "<p><span>Right answer</span> Ans:User ladder program</p>",
				"incorrect": "<p><span>wrong</span> It's wrong,Ans:User ladder program</p>" // no comma here
         },
        { // Question 9 - Multiple Choice, Multiple True Answers, Select All
            "q": "Before downloading the user program, the processor must be in  ",
            "a": [
                { "option": "Run mode", "correct": false },
                { "option": "Test mode", "correct": false },
                { "option": "Program mode", "correct": true },
                { "option": "All", "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Program mode</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Program modee</p>" // no comma here
        },
        { // Question 10
            "q": "In run mode, the programmer will continuously run and solve programmed instructions. This constant running of the program in a PLC is called ________  ",
            "a": [
                { "option": "Fixing", "correct": false },
                { "option": "Scanning", "correct": true },
                { "option": "Executing", "correct": false },
                { "option": "None", "correct": false }
            // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Scanning</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Scanning</p>"  // no comma here
        },
		{ // Question 11
		    "q": "What is the address of a screw terminal 9 on the 16-point input module in slot 3? <br><img src=\"../images/PLC/q2.jpg\"\height=450 width=300/> ",
		    "a": [
                { "option": "I: 3.0/9", "correct": true },
                { "option": "I: 9.0/3", "correct": false },
				{ "option": "I: 3.1/9", "correct": false },
                { "option": "I: 9.1/3", "correct": false }
		    // {"option": "1291",   "correct": false} // no comma here
            ],
		    "correct": "<p><span>Right answer</span> Ans:I: 3.0/9</p>",
		    "incorrect": "<p><span>wrong</span> It's wrong,Ans:I: 3.0/9</p>"  // no comma here
		},
		   { // Question 12
		       "q": "What is the address of screw terminal 10 on a 16-point input module in slot 4?<br><img src=\"../images/PLC/q3.jpg\"\height=450 width=300/> ",
		       "a": [
                { "option": "O: 4.1/10", "correct": false },
                { "option": "I: 4.0/10", "correct": true },
                { "option": "I: 10.1/4", "correct": false },
				 { "option": "I: 4.1/10", "correct": false }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:I: 4.0/10</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:I: 4.0/10</p>"  // no comma here
		   },
		   { // Question 13
		       "q": "What is the address of screw terminal 2 on an 8-point input module in slot 3?<br><img src=\"../images/PLC/q4.jpg\"\height=450 width=300/> ",
		       "a": [
                { "option": "I: 3.0/2", "correct": true },
                { "option": "I: 2.0/3", "correct": false },
                { "option": "I: 2.1/3", "correct": false },
                { "option": "I: 3.2/0", "correct": false }
		       // {"option": "1291",   "correct": false} // no comma here
            ],
		       "correct": "<p><span>Right answer</span> Ans:I: 3.0/2</p>",
		       "incorrect": "<p><span>wrong</span> It's wrong,Ans:I: 3.0/2</p>"  // no comma here
		   },
		   { // Question 14
		       "q": "What is the address of screw terminal 16 on a 32-point input module in slot 2? ",
		   		       "a": [
                { "option": "I: 2.0/16", "correct": false },
                { "option": "I: 2.16/0", "correct": false },
                { "option": "I: 2.1/0", "correct": true },
                { "option": "I: 2.0/1", "correct": false }
		   		       // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:I: 2.1/0</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:I: 2.1/0</p>"  // no comma here
		   		   },
        { // Question 15
            "q": "What is the address of screw terminal 19 on a 32-point input module in slot 2? ",
            "a": [
                { "option": "I: 2.0/3", "correct": false },
                { "option": "I: 2.1/3", "correct": true },
		 { "option": "I: 2.0/19", "correct": false },
                { "option": "I: 2.1/19", "correct": false } 


// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:I: 2.1/3</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:I: 2.1/3</p>"  // no comma here
        } // no comma here
    ]
};
