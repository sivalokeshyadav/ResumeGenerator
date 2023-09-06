function adNewWEField(){
    let newEle=document.createElement("textarea");
    newEle.classList.add("form-control");
    newEle.classList.add("weField");
    newEle.classList.add("mt-3")
    newEle.setAttribute("rows",3);
    newEle.placeholder="Enter Here"

    let weObj=document.getElementById("we");
    let weAddButton=document.getElementById("weAddButton");

    weObj.insertBefore(newEle,weAddButton)

}


function addNewACField(){
    let newACEle=document.createElement("textarea");
    newACEle.classList.add("form-control");
    newACEle.classList.add("adField");
    newACEle.classList.add("mt-3")
    newACEle.setAttribute("rows",3);
    newACEle.placeholder="Enter Here"

    let acObj=document.getElementById("ac");
    let adAddButton=document.getElementById("adAddButton");

    acObj.insertBefore(newACEle,adAddButton)

}


//generating CV

function generateCV(){
    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1")
    nameT1.innerHTML=nameField;

    //direct
    document.getElementById("nameT2").innerHTML=nameField;

    //contact
    document.getElementById("contactT1").innerHTML=document.getElementById("contactField").value;

    //address
    document.getElementById("addressT1").innerHTML=document.getElementById("yaField").value;

    //links

    document.getElementById("fbT").innerHTML=document.getElementById("facebookField").value;
    document.getElementById("instaT").innerHTML=document.getElementById("instagramField").value;
    document.getElementById("linkT").innerHTML=document.getElementById("linkdenField").value;


    //objective 
    document.getElementById("objT").innerHTML=document.getElementById("objectiveField").value;

    //we


    let wes=document.getElementsByClassName("weField")

    let str=""
    for(let e of wes){
        str=str+`<li>${e.value}</li>`
    }


    document.getElementById("weT").innerHTML=str;



    //academic qualifications
    let aqs=document.getElementsByClassName("adField")
    let str1=""

    for(let e of aqs){
        str1+=`<li>${e.value}</li>`
    }

    document.getElementById("acT").innerHTML=str1;

    //code for setting Image
    let file=document.getElementById("profileField").files[0];
    console.log(file)
    let reader=new FileReader()
    reader.readAsDataURL(file);

    //set image to template
    reader.onloadend=function(){
        document.getElementById("displayedImage").src=reader.result;
    }
    console.log(reader.result)


    

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";


    

}


//print CV
function printCV(){
    window.print()
}



