//visibility of loop types list by one click 

function clicko() {
    var x = document.getElementById("clickbtn");
    if (x.style.display === "none") {  //disapear and show 
        x.style.display = "block";
        x.style.transition = "0.3s ease-in";


    } else {
        x.style.display = "none";
    }
}



// //visibility of functions types list by one click 

function func() {
    var x = document.getElementById("list");
    if (x.style.display === "none") {  //disapear and show 
        x.style.display = "block";

    } else {
        x.style.display = "none";
    }
}




// //visibility of functions types list by one click 

function hoist() {
    var x = document.getElementById("Hoisting");
    if (x.style.display === "none") {  //disapear and show 
        x.style.display = "block";

    } else {
        x.style.display = "none";
    }
}














//global scope 
// is not work with side bar i have to find anothe way to make it work by loop
// var acc = document.getElementsByClassName("accordation");
// var i; //declare variable need hioisting to work
// for(i=0 ;i<acc.length;i++){
// acc[i].addEventListener('click',function(){  // declare function
// this.classList.toggle("active");
//     var panel = document.nextElementSibling;
// if(panel.style.display==="none"){

//     panel.style.display="block";

// }
// else{panel.style.displey="none"}



// }


//function also not working   i dont know the reason 

// document.getElementById(".lili").addEventListener('click', function () {
//     var i = 0;
//     var list = document.querySelector(".lis");
//     for (; i < loop.length; i++) {
//         if (list.style.display === "none") {

//             list.style.display = "block"
//         } else {
//             list.style.display === "none"
//         }


//     }
// })








//tabs for types of loop

function openLoop(evt, loopName, looptwo) {
    var i, tabcontent, tablinks; //declare and hoisted to ues later
    tabcontent = document.getElementsByClassName("tabcontent");

    //display the dece
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";

    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");

    }

    document.getElementById(loopName).style.display = "block ";
    document.getElementById(looptwo).style.display = "block ";

    evt.currentTarget.className += " active";
}





//tabs for types of function

function funcs(event, funcdef, funcsyn) {

    var i, funcontent, funLinks; //declare and hoisted to ues later
    funcontent = document.getElementsByClassName("funcontent");

    //display the dece

    for (i = 0; i < funcontent.length; i++) {

        funcontent[i].style.display = "none";
    }

    funLinks = document.getElementsByClassName("funLinks");

    for (i = 0; i < funLinks.length; i++) {
        funLinks[i].className = funLinks[i].className.replace(" active", "");

    }

    document.getElementById(funcdef).style.display = "block ";
    document.getElementById(funcsyn).style.display = "block ";

    event.currentTarget.className += " active";

};










var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}







//Default Parameter
var yourchoice;
yourchoice = prompt("Choose a number between 1 and 4", "1, 2, 3 or 4")
switch (yourchoice) {
    case "1":
        alert("You typed in a 1");
        break;
    case "2":
        alert("You typed in a 2");
        break;
    case "3":
        alert("You typed in a 3");
        break;
    case "4":
        alert("You typed in a 4");
        break;

        default:
            alert ("any thing you choose it is true ")
}














// //tabs for types of hoist
// function hoist(events, hoisti, hoistsyn) {

//     var i, hoistContent, hoistLinks; //declare and hoisted to ues later
//     hoistContent = document.getElementsByClassName("hoistContent");

//     //display the dece

//     for (i = 0; i < hoistContent.length; i++) {

//         hoistContent[i].style.display = "none";
//     }

//     hoistLinks = document.getElementsByClassName("hoistLinks");

//     for (i = 0; i < hoistLinks.length; i++) {
//       hoistLinks[i].className.replace(" active", "");

//     }

//     document.getElementById(hoisti).style.display = "block ";
//     document.getElementById(hoistsyn).style.display = "block ";

//     event.currentTarget.className += " active";

// }



// function openLoop(evt,loopName){ //parameters ,evt=event, loopName=forLoop (event,'forLoop') which this syntax wrote in html 
//     var i, tabcontent, tablinks; // Declare 
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length ; i++){
//     tabcontent[i].style.display="none"

//     }
//     tablinks = document.getElementsByClassName("tabLinks");
//     for (i = 0; i < tablinks.length ;i++ ){
// tablinks[i].className=tablinks[i].replace("active" ,"");
//     }
//     document.getElementById(loopName).style.display="block";
//     evt.currentTaRGET.className+="active "

// }




//is not working 

// var age;
// age=prompt("how old are you");
// switch(age){
// case "12_18":
// alert("you are small");
// break;
// case "19_40":
// alert("welcome in our world, enjoy your time ");
// break;
// default:
//     alert("welcome ")

// }