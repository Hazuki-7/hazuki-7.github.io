
function handleYesClick() {
    window.location.href = "yes_page.html"
}

function handleNoClick() {
    window.location.href = "no_page.html"
}

function handleMouseEnterYes() {
    document.getElementById("imga").src = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHZybDZ0NGI1NG9jMXl2azg3bGEybHFnYW8wb214NjV5dzY4cDFxOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11sBLVxNs7v6WA/giphy.gif"
}

function handleMouseLeaveYes() {
    document.getElementById("imga").src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGV3NGJvNm9nY2RsYXdyamI1anB4MHdwdXEyN2JrZXdwNmI2ZW1kbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tpVKvAabWt3G5csMkT/giphy.gif"
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
async function handleMouseEnterNo() {
    document.getElementById("imga").src = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExc256b2czMDRlOTZkc2xqaWN4M2dlbmdvNXNjcDJhZmJqd2g5eWNsdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DUuyU3KyYGLNS/giphy.gif"
    /*await sleep(1200)
    document.getElementById("imga").src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWFsb3d3NndranplNHg4YWZycmRlcHB4dTRoOGFzMTN2bG9vZ2Q0dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LRVnPYqM8DLag/giphy.gif"
    await sleep(1200)
    document.getElementById("imga").src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2kzOGxxbmduMnc2NmRsZG1pdHhsaXNrZDJzN29zbXY2cHljeHk1byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5dYlaHNyiLXtYPe3e9/giphy.gif"*/
}

function handleMouseLeaveNo() {
    document.getElementById("imga").src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGV3NGJvNm9nY2RsYXdyamI1anB4MHdwdXEyN2JrZXdwNmI2ZW1kbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tpVKvAabWt3G5csMkT/giphy.gif"
}