function addTopic(){
    var contentEl = document.getElementById("contentRow").appendChild(generateElements())
    console.log(contentEl)
}

function deleteTopic(){
    var el = document.getElementById("contentRow").removeChild(addTopic())
    console.log("Topic Deleted")
}

function clearTopic(){
    console.log("Topic Cleared")
}

function finishTopic(){
    console.log("Topic Finished")
}

function startMeeting(){
    console.log("Meeting Started")
}

function generateElements() {
    var wrapper = document.createElement("div")
    console.log(wrapper);

    // create timer
    var topicTimer = document.createElement("span")
    wrapper.appendChild(topicTimer)

    // create done button
    var finishTopic = document.createElement("button")
    wrapper.appendChild(finishTopic)

    // create topic title
    var topicTitle = document.createElement("input")
    wrapper.appendChild(topicTitle)

    // create topic duration
    var topicDuration = document.createElement("input")
    wrapper.appendChild(topicDuration)

    // create delete button
    var deleteTopic = document.createElement("button")
    wrapper.appendChild(deleteTopic)

    return wrapper
}
function deleteElements(){

}
function CurrentTime(){
    const today = new Date()
    let h = today.getHours()
    let m = today.getMinutes()
    let s = today.getSeconds()
    m = checktime(m)
    s = checktime(s)
    document.getElementById("ct").innerHTML = h + ":" + m + ":" + ":" + s
    setTimeout(CurrentTime,1000)
}
 function checktime(){
    if(i<10) {i = '0' + i}
    return i
 }




