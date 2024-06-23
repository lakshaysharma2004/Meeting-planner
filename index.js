var meetingTopics = [];

var defaultValues = {
    time: 4,
    title: "Default",
    status: "Incomplete"
};

function populatemeetingitems(){
    clearTopic()
    meetingTopics.forEach((topic,index ) => {
        document.getElementById("contentRow").appendChild(generateElements(topic,index ));
    })
}

function addTopic() {
    meetingTopics.push({})
    populatemeetingitems();
}

function clearTopic(){
    document.getElementById("contentRow").innerHTML = ''
}
    
function deleteTopic() {
    meetingTopics.splice(index, 1);
    populatemeetingitems();
}

function finishTopic() {
    console.log("Topic Finished")
}

function startMeeting() {
    console.log("Meeting Started")
}

function generateElements(topic,index) {
    var wrapper = document.createElement("div")
    console.log(wrapper);

    // create timer
    var topicTimer = document.createElement("span")
    wrapper.appendChild(topicTimer)

    // create done button
    var finishTopic = document.createElement("button")
    wrapper.appendChild(finishTopic)
    finishTopic.textContent = "Done";
    finishTopic.classList.add('Done')

    // create topic title
    var topicTitle = document.createElement("input")
    wrapper.appendChild(topicTitle)

    // create topic duration
    var topicDuration = document.createElement("input")
    wrapper.appendChild(topicDuration)

    // create delete button
    var deleteButton = document.createElement("button");
    wrapper.appendChild(deleteButton);
    deleteButton.textContent = "DEL";
    deleteButton.onclick = function() { deleteTopic(index); };
    deleteButton.classList.add('delete')
    return wrapper
}





