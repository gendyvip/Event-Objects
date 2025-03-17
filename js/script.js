var run = document.getElementById("runASCII")
var hide = document.getElementById("hideMenu")

run.addEventListener("click", function () {
    document.addEventListener("keydown", function (event) {
        if (event.altKey) {
            alert('Alt key is pressed');
        }
        else if (event.ctrlKey) {
            alert('Ctrl key is pressed');
        }
        else if (event.shiftKey) {
            alert('Shift key is pressed');
        }
        alert(`ASCII Code of ${event.key} is: ${event.keyCode}`)
    })
})


hide.addEventListener("click", function () {
    document.addEventListener("contextmenu", function (event) {
        event.preventDefault()
    })
})
