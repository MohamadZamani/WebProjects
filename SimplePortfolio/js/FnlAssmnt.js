/*
Name: Mohamad Zamani
Email: Mzamani6@myseneca.ca
Studnet ID: 153110192
WEB222-ZBB
Final Assessment Project
*/
document.getElementById("hiring").addEventListener("click", hiringHandler);
window.addEventListener("resize", onresize);
function onresize(){
       // document.getElementById("mySideNav").style.width = "100%";
        var viewportwidth;
        if (typeof window.innerWidth != 'undefined') {
        viewportwidth = window.innerWidth
        }
        if (viewportwidth > 850) {
                document.getElementById("mySideNav").style.width = "100%";
        }
}

function closeNav() {
        document.getElementById("mySideNav").style.width = "0";
}
function sideNavAction() {
        
        document.getElementById("mySideNav").style.width = "100%";
}

function postalCode(name) {
        var pstc_RGEX = /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]●?[0-9][A-Z][0-9]$/;
        pstc_RGEX.test(name);
        alert(result+ "\nPlease enter a valid postal code");
        if (name.value.match(name)) {
            return true;
        }
        else {
            error.textContent = "Please enter a valid postal code";
            return false;
        }
    }



function hiringHandler() {
    const topic = document.getElementById('topic');
    const hrate = document.createElement('input');
    hrate.type = 'number';
    hrate.min = '1';
    hrate.placeholder = 'hiring rate'
    topic.appendChild(hrate);
}
