const button = document.getElementById("button")
const input = document.getElementById("input")
const ul = document.getElementById("ul")
const btn = document.getElementById("btn")
const li = document.getElementById("li")


button.addEventListener("click", function () {
    event.preventDefault();
    ul.innerHTML += `<li > ${input.value}</li>
    <button id="btn">Delete</button>`

    input.value = ""
})

btn.addEventListener("click", function () {
    li.innerHTML += " "
})




