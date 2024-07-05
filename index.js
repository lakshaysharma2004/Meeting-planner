var meetingTopics = [];
var defaultValues = {
    time: 4,
    title: "Default",
    status: "Incomplete"
};
var counter = 0; // Counter variable to keep track of elapsed time
var counterInterval; // Variable to store the interval ID

function populatemeetingitems() {
    clearTopic();
    meetingTopics.forEach((topic, index) => {
        document.getElementById("contentRow").appendChild(generateElements(topic, index));
    });
}

function addTopic() {
    meetingTopics.push({});
    populatemeetingitems();
}

function clearTopic() {
    document.getElementById("contentRow").innerHTML = '';
}

function deleteTopic(index) {
    meetingTopics.splice(index, 1); // Remove the item from the array
    populatemeetingitems(); // Refresh the displayed list
}

function finishTopic() {
    console.log("Topic Finished");
}

function startMeeting() {
    console.log("Meeting Started");
    counter = 0; // Reset the counter
    clearInterval(counterInterval); // Clear any existing interval
    counterInterval = setInterval(updateCounterClock, 1000); // Start the counter clock
}

function generateElements(topic, index) {
    var wrapper = document.createElement("div");
    wrapper.setAttribute("data-index", index);
    wrapper.classList.add('Table');

    // create timer
    var topicTimer = document.createElement("span");
    wrapper.appendChild(topicTimer);
    topicTimer.classList.add('Timeleft');

    // create done button
    var finishTopicButton = document.createElement("button");
    wrapper.appendChild(finishTopicButton);
    finishTopicButton.textContent = "Done";
    finishTopicButton.classList.add('Done');

    // create topic title
    var topicTitle = document.createElement("input");
    wrapper.appendChild(topicTitle);
    topicTitle.classList.add('Topic');

    // create topic duration
    var topicDuration = document.createElement("input");
    wrapper.appendChild(topicDuration);
    topicDuration.classList.add('Duration');

    // create delete button
    var deleteButton = document.createElement("button");
    wrapper.appendChild(deleteButton);
    deleteButton.textContent = "DEL";
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', function() {
        deleteTopic(index);
    });

    return wrapper;
}

// Function to update the real-time clock
function updateClock() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    var currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('ct').textContent = currentTime;
}

// Function to update the counter clock
function updateCounterClock() {
    counter++; // Increment the counter by 1 second
    var hours = Math.floor(counter / 3600).toString().padStart(2, '0');
    var minutes = Math.floor((counter % 3600) / 60).toString().padStart(2, '0');
    var seconds = (counter % 60).toString().padStart(2, '0');
    var counterTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('tmt').value = counterTime;
}

// Start the real-time clock update interval
setInterval(updateClock, 1000);
