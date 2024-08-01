document.addEventListener('DOMContentLoaded', () => {

    // alert("hi")
    const btn = document.getElementById("btn")
    btn.addEventListener("click", computeSlope)

    function computeSlope(x1,x2,y1,y2){
        // alert("hi")

        const x1= parseFloat(document.getElementById("x1").value)
        const x2 = parseFloat(parseIntdocument.getElementById("x2").value)
        const y1 = parseFloat(document.getElementById("y1").value)
        const y2 = parseFloat(document.getElementById("y2").value)

        // alert(x1,x2,y1,y2)

        if(x2-x1>0){
            slope=(y2-y1)/(x2-x1)
        }else{
            updateDiv("slope is undefined")
        }
        

        updateDiv(slope.toFixed(2))


    }

    function updateDiv(v) {
        document.getElementById("result").innerText = v;
    }
})