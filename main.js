var siteNameInput=document.getElementById("siteName");
var siteUrlInput=document.getElementById("siteUrl");

var btn =document.getElementById("btn");
var tableRow=document.getElementById("tableRow");
var siteArr =[];
if (localStorage.getItem('sites') != null) {
    siteArr = JSON.parse(localStorage.getItem('sites'))
    display(siteArr)
}

btn.onclick =function(){
    addSite()
};

function addSite(){
    var site ={
        siteName : siteNameInput.value,
        siteUrl : siteUrlInput.value}
    if( siteNameInput.value ==('') && siteUrlInput.value== ('')){
        alert("Please Write Site Name And Site URL");
    }else if ( siteNameInput.value ==('') ){
        alert("Please Write Site Name ");
    }else if( siteUrlInput.value== ('')){
        alert("Please Write Site URL");
    }else{
    siteArr.push(site);
    localStorage.setItem('sites', JSON.stringify(siteArr))}
    display();
    clearForm();
};

function display(){
    var box =``
    for(var i =0;i<siteArr.length;i++){
        box+=`
        <tr>
        <td> ${i + 1 }</td>
        <td> ${siteArr[i].siteName}</td>
        <td><button class="btn btn-outline-info" onclick='check(${[i]})'><i class="fa-solid fa-eye pe-2"></i>Visit</button></td>
        <td><button class="btn btn-outline-danger" onclick='deleteFun(${[i]})'><i class="fa-solid fa-trash-can"></i> Delete</button></td>
        </tr>
        `
    }
tableRow.innerHTML =box;
}
function deleteFun(index){
    siteArr.splice(index,1);
    localStorage.setItem('sites', JSON.stringify(siteArr));
    display();
}

function check(index){
    var x ;
    var y = JSON.stringify(siteArr[index].siteUrl);
    console.log(y);
    
    if(y.includes('http://') == false) {
        var x = ('http://'+JSON.parse(y));
    }
    if(y.includes('http://') == false && y.includes('www.') == false){
        var x = ('http://'+'www.'+JSON.parse(y));
    }
    if( y.includes('http://') == false && y.includes('www.') == false && y.includes('.com') == false ){
        var x = ('http://'+'www.'+JSON.parse(y)+'.com');
    }
    if( y.includes('http://') == false && y.includes('www.') == true && y.includes('.com') == false ){
        var x = ('http://'+JSON.parse(y)+'.com');
    }
    window.open(x);
}

function clearForm(){
    siteNameInput.value='';
    siteUrlInput.value='';
}
