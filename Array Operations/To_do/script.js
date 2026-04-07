arr = ["Task Test"]

function addTask() {

    newtask = document.getElementById("task").value
    arr.push(newtask)
    render()
    document.getElementById("task").value = ""


}

function render() {

    document.getElementById("tasksUL").innerHTML = arr.map((task, i) => `


    <tr>
    <td>${task}</td>
    <td style="padding: 10px;"><button onclick="update(${i})">Update</button></td>
    <td><button onclick="del(${i})">Delete</button></td>
    </tr>
    `).join("")



}
function del(i) {
    arr.splice(i, 1)
    render()


}

function clearr() {
    arr = []
    render()

}
function update(ind) {

    document.getElementById("tasksUL").innerHTML = arr.map((task, i) => `

    <tr>
    ${i == ind ? `<td style="color: #0000ff;">${task}</td>` : `<td>${task}</td>`}

    <td style="padding: 10px;"><button onclick="update(${i})">Update</button></td>
    <td><button onclick="del(${i})">Delete</button></td>
    </tr>
    `).join("")

}

render()