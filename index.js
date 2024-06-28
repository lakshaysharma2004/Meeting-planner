var meetingTopics = [];

var defaultValues = {
    time: 4,
    title: "Default",
    status: "Incomplete"
};

function populatemeetingitems(){
    clearTopic()
    meetingTopics.forEach((topic, index) => {
        document.getElementById("contentRow").appendChild(generateElements(topic, index));
    });
}

function addTopic() {
    meetingTopics.push({});
    populatemeetingitems();
}

function clearTopic(){
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
