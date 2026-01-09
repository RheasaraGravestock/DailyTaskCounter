
let tasksCompleted = 0;

let taskButton = document.querySelector(".taskButton");
let taskDisplay = document.getElementById("taskDisplay");
let messageDisplay = document.getElementById("messageDisplay");

messageDisplay.textContent = "Starting is the hardest bit!";


taskButton.addEventListener('click', function addTask() {
    tasksCompleted++;
    //task display
    if (tasksCompleted == 1) {
       taskDisplay.textContent =`You have completed ${tasksCompleted} task! Well done!`;
    } else {
        taskDisplay.textContent = `You have completed ${tasksCompleted} tasks! Well done!`;
    }
    //message display
    if (tasksCompleted == 5) {
       messageDisplay.textContent = "Keep up the good work!";
    } else if (tasksCompleted == 10) {
        tasksCompletedMessage();
    } else {
        messageDisplay.textContent = "You're doing great!";
    }
});

function tasksCompletedMessage () {
        const message = document.createElement("p");
        message.textContent = "All tasks completed!";
        document.body.append(message);
        message.style.color = "green";
    
};

let motivationalMessage = ["Keep going!", "You can do this!", "I believe in you!"]
for (let i = 0; i < motivationalMessage.length; i++) {
  console.log(motivationalMessage[i]);
};
