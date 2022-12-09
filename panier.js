const addToCart = document.getElementById("addToCart");


// addToCart.addEventListener('click',function(){

//     clickOne(nom,quantite,prix);
    
    
// });



/*
function clickOne(nom,quantite,prix){

    let text;

    var itemD=document.createElement("tr");


    var nomCD=document.createElement("td");
    var qCD=document.createElement("td");
    var prixCD=document.createElement("td");


    text=document.createTextNode(nom);

    nomCD.appendChild(text);

    itemD.appendChild(nomCD);





    text=document.createTextNode(quantite);
    qCD.appendChild(text);

    itemD.appendChild(qCD);


    text=document.createTextNode(prix);
    prixCD.appendChild(text);

    itemD.appendChild(prixCD);


    document.getElementById("details_cart_desktop").appendChild(itemD);
    //document.getElementById("details_cart_mobile").appendChild(itemD);
    

    sum+=prix;


    const AffichageTotalDesktop=document.getElementById("totalDispaly_desktop");
    AffichageTotalDesktop.textContent=sum;

    const AffichageTotalMobile=document.getElementById("totalDispaly_mobile");
    AffichageTotalMobile.textContent=sum;

    
    
}
*/

var sum=0;

function clickOne2(nom,prix){


    let text;

    var itemD=document.createElement("tr");
    


    var nomCD=document.createElement("td");
    var qCD=document.createElement("td");
    var prixCD=document.createElement("td");


    text=document.createTextNode(nom);

    nomCD.appendChild(text);

    itemD.appendChild(nomCD);



    var quantite=document.getElementById("selectedQ"+nom).innerText;

    text=document.createTextNode(quantite);
    qCD.appendChild(text);

    itemD.appendChild(qCD);


    text=document.createTextNode(prix);
    prixCD.appendChild(text);

    itemD.appendChild(prixCD);


    document.getElementById("details_cart_desktop").appendChild(itemD);
    
    sum+=prix*quantite;
    const AffichageTotalDesktop=document.getElementById("totalDispaly_desktop");
    AffichageTotalDesktop.textContent=sum;

    const AffichageTotalMobile=document.getElementById("totalDispaly_mobile");
    AffichageTotalMobile.textContent=sum;




}
function clickOne1(nom,prix){

    let text;

    var itemM=document.createElement("tr");
    


    var nomCM=document.createElement("td");
    var qCM=document.createElement("td");
    var prixCM=document.createElement("td");


    text=document.createTextNode(nom);

    nomCM.appendChild(text);

    itemM.appendChild(nomCM);


    var quantite=document.getElementById("selectedQ"+nom).innerText;



    text=document.createTextNode(quantite);
    qCM.appendChild(text);

    itemM.appendChild(qCM);


    text=document.createTextNode(prix);
    prixCM.appendChild(text);

    itemM.appendChild(prixCM);


    document.getElementById("details_cart_mobile").appendChild(itemM);
    
 
    


}


/*------------------------------------------------------------------------------------------------------------------------------*/

const CartClose = document.getElementById("CartClose");


CartClose.addEventListener('click',function(){

    const cart_container = document.getElementById("cart_container"); 

    cart_container.classList.add('carthidden');

});


/*-----------------------------------------------------------------------------------------------------------------------------------*/


const opencartmobile = document.getElementById("opencart_mobile");


opencartmobile.addEventListener('click',function(){


    const cart_container = document.getElementById("cart_container"); 

    cart_container.classList.remove('carthidden');

});




const opencart = document.getElementById("opencart");
let i=0;

opencart.addEventListener('click',function(){

    const cart_container = document.getElementById("cart_containerr"); 

    if(i%2==0){
        cart_container.style.visibility="visible";
        cart_container.style.height="400px";
    }else{

        cart_container.style.visibility="hidden";
        cart_container.style.height="0px";

    }
    i++;

});



/*------------------------------------------------------------------confirmation message-----------------------------------------------*/

const Commander_desktop = document.getElementById("Commander_desktop");


Commander_desktop.addEventListener('click',function(){


    Commander_desktop.innerText="Done";
    Commander_desktop.style.background="yellow";

    const Commander_mobile = document.getElementById("Commander_mobile");

    Commander_mobile.innerText="Done";
    Commander_mobile.style.background="yellow";

});




const Commander_mobile = document.getElementById("Commander_mobile");


Commander_mobile.addEventListener('click',function(){

    Commander_mobile.innerText="Done";
    Commander_mobile.style.background="yellow";

    const Commander_desktop = document.getElementById("Commander_desktop");

    Commander_desktop.innerText="Done";
    Commander_desktop.style.background="yellow";

});

