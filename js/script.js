let x = Math.floor((Math.random() * 7) + 0);
let QAPair = [
    { Q: "What is always in front of you but can’t be seen? <br> <input type='text' placeholder='Type your answer' id='answer'  ><br><button class='button-28' onclick='submit()'>Submit Answer</button>", A: "future" },
    { Q: "What can you break, even if you never pick it up or touch it? <br> <input type='text' placeholder='Type your answer' id='answer'  ><br><button class='button-28' onclick='submit()'>Submit Answer</button>", A: "promise" },
    { Q: "What can you catch, but not throw? <br> <input type='text' placeholder='Type your answer' id='answer'  ><br><button class='button-28' onclick='submit()'>Submit Answer</button>", A: "cold" },
    { Q: "I’m tall when I’m young, and I’m short when I’m old. What am I? <br> <input type='text' placeholder='Type your answer' id='answer'  ><br><button class='button-28' onclick='submit()'>Submit Answer</button>", A: "candle" },
    { Q: "The more of this there is, the less you see. What is it? <br> <input type='text' placeholder='Type your answer' id='answer'  ><br><button class='button-28' onclick='submit()'>Submit Answer</button>", A: "darkness" },
    { Q: "What can fill a room but takes up no space? <br> <input type='text' placeholder='Type your answer' id='answer'  ><br><button class='button-28' onclick='submit()'>Submit Answer</button>", A: "light" },
    { Q: "If you drop me I’m sure to crack, but give me a smile and I’ll always smile back. What am I? <br> <input type='text' placeholder='Type your answer' id='answer'  ><br><button class='button-28' onclick='submit()'>Submit Answer</button>", A: "mirror" },
    { Q: "What has one head, and four legs? <br> <input type='text' placeholder='Type your answer' id='answer'  ><br><button class='button-28' onclick='submit()'>Submit Answer</button>", A: "bed" }
]
document.getElementById("get").innerHTML = QAPair[x].Q
function submit() {
    let ans = document.getElementById("answer").value
    let editedAnswer = ans.toLowerCase().trim()
    if (QAPair[x].A == editedAnswer) {
        document.getElementById("get").innerHTML = "Your answer is correct!!<br> <img src='./src/Great-Job-Emoji-PNG-File.png'>"
    }
    else {
        document.getElementById("get").innerHTML = `Your answer is incorrect!! <br> Answer: ${QAPair[x].A}<br> <img src='./src/pngegg.png'>`
    }
}
