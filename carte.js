/*------------------------------------------augmenter la quantite d'article--------------------------------*/
const QUpSuchi1 = document.getElementById("UpSuchi1");


QUpSuchi1.addEventListener('click',function(){
    

    const selectedQ = document.getElementById("selectedQSuchi1");
    
    let a = parseInt(selectedQ.innerText)+1;
    selectedQ.innerText=a;
    
});

/*---------------------------------------------baisser la quantite d'article---------------------------------------*/
const QDownSuchi1 = document.getElementById("DownSuchi1");


QDownSuchi1.addEventListener('click',function(){
    
    const selectedQ = document.getElementById("selectedQSuchi1");
    if(selectedQ.innerText>1){

        let a = parseInt(selectedQ.innerText)-1;
        selectedQ.innerText=a;

    }
    
});

/*------------------------------------------------------------QUp & QDown---------------------------------------------------------------*/



const QUpSuchi2 = document.getElementById("UpSuchi2");


QUpSuchi2.addEventListener('click',function(){
    

    const selectedQSuchi2 = document.getElementById("selectedQSushi2");
    let a = parseInt(selectedQSuchi2.innerText)+1;
    selectedQSuchi2.innerText=a;
    
});



const QDownSuchi2 = document.getElementById("DownSuchi2");


QDownSuchi2.addEventListener('click',function(){
    

    const selectedQSuchi2 = document.getElementById("selectedQSushi2");

    if(selectedQSuchi2.innerText>1){

        let a = parseInt(selectedQSuchi2.innerText)-1;
        selectedQSuchi2.innerText=a;

    }
    
});





const QUpSuchi3 = document.getElementById("UpSuchi3");


QUpSuchi3.addEventListener('click',function(){
    

    const selectedQSuchi3 = document.getElementById("selectedQSushi3");
    let a = parseInt(selectedQSuchi3.innerText)+1;
    selectedQSuchi3.innerText=a;
    
});



const QDownSuchi3 = document.getElementById("DownSuchi3");


QDownSuchi3.addEventListener('click',function(){
    

    const selectedQSuchi3 = document.getElementById("selectedQSushi3");

    if(selectedQSuchi3.innerText>1){

        let a = parseInt(selectedQSuchi3.innerText)-1;
        selectedQSuchi3.innerText=a;

    }
    
});





const QUpObento1 = document.getElementById("UpObento1");


QUpObento1.addEventListener('click',function(){
    

    const selectedQObento1 = document.getElementById("selectedQObento1");
    let a = parseInt(selectedQObento1.innerText)+1;
    selectedQObento1.innerText=a;
    
});



const QDownObento1 = document.getElementById("DownObento1");


QDownObento1.addEventListener('click',function(){
    

    const selectedQObento1 = document.getElementById("selectedQObento1");
    

    if(selectedQObento1.innerText>1){

        let a = parseInt(selectedQObento1.innerText)-1;
        selectedQObento1.innerText=a;

    }

    
});









const QUpObento2 = document.getElementById("UpObento2");


QUpObento2.addEventListener('click',function(){
    

    const selectedQObento2 = document.getElementById("selectedQObento2");
    let a = parseInt(selectedQObento2.innerText)+1;
    selectedQObento2.innerText=a;
    
});



const QDownObento2 = document.getElementById("DownObento2");


QDownObento2.addEventListener('click',function(){
    

    const selectedQObento2 = document.getElementById("selectedQObento2");
    

    if(selectedQObento2.innerText>1){

        let a = parseInt(selectedQObento2.innerText)-1;
        selectedQObento2.innerText=a;

    }

    
});



const QUpPlat1 = document.getElementById("UpPlat1");


QUpPlat1.addEventListener('click',function(){
    

    const selectedQPlat1 = document.getElementById("selectedQPlat1");
    let a = parseInt(selectedQPlat1.innerText)+1;
    selectedQPlat1.innerText=a;
    
});

const QDownPlat1 = document.getElementById("DownPlat1");


QDownPlat1.addEventListener('click',function(){
    

    const selectedQPlat1 = document.getElementById("selectedQPlat1");

    if(selectedQPlat1.innerText>1){

        let a = parseInt(selectedQPlat1.innerText)-1;
        selectedQPlat1.innerText=a;

    }
    
});






const QUpPlat2 = document.getElementById("UpPlat2");


QUpPlat2.addEventListener('click',function(){
    

    const selectedQPlat2 = document.getElementById("selectedQPlat2");
    let a = parseInt(selectedQPlat2.innerText)+1;
    selectedQPlat2.innerText=a;
    
});

const QDownPlat2 = document.getElementById("DownPlat2");


QDownPlat2.addEventListener('click',function(){
    

    const selectedQPlat2 = document.getElementById("selectedQPlat2");

    if(selectedQPlat2.innerText>1){

        let a = parseInt(selectedQPlat2.innerText)-1;
        selectedQPlat2.innerText=a;

    }
    
});




const QUpPlat3 = document.getElementById("UpPlat3");


QUpPlat3.addEventListener('click',function(){
    

    const selectedQPlat3 = document.getElementById("selectedQPlat3");
    let a = parseInt(selectedQPlat3.innerText)+1;
    selectedQPlat3.innerText=a;
    
});

const QDownPlat3 = document.getElementById("DownPlat3");


QDownPlat3.addEventListener('click',function(){
    

    const selectedQPlat3 = document.getElementById("selectedQPlat3");

    if(selectedQPlat3.innerText>1){

        let a = parseInt(selectedQPlat3.innerText)-1;
        selectedQPlat3.innerText=a;

    }
    
});





const suchisSelector = document.getElementById("suchisSelector");

suchisSelector.addEventListener('click', function(){

    document.getElementById("Suchis").classList.remove("masque");
    document.getElementById("Obentos").classList.remove("masque");
    document.getElementById("Plats").classList.remove("masque");

    document.getElementById("suchis").classList.remove("masque");
    document.getElementById("obentos").classList.remove("masque");
    document.getElementById("plats").classList.remove("masque");


    document.getElementById("Obentos").classList.add("masque");
    document.getElementById("Plats").classList.add("masque");

    document.getElementById("obentos").classList.add("masque");
    document.getElementById("plats").classList.add("masque");



});


const obentosSelector = document.getElementById("obentosSelector");

obentosSelector.addEventListener('click', function(){
    

    document.getElementById("Suchis").classList.remove("masque");
    document.getElementById("Obentos").classList.remove("masque");
    document.getElementById("Plats").classList.remove("masque");


    document.getElementById("suchis").classList.remove("masque");
    document.getElementById("obentos").classList.remove("masque");
    document.getElementById("plats").classList.remove("masque");

    document.getElementById("Suchis").classList.add("masque");
    document.getElementById("Plats").classList.add("masque");

    document.getElementById("suchis").classList.add("masque");
    document.getElementById("plats").classList.add("masque");
   


});



const platsSelector = document.getElementById("platsSelector");

platsSelector.addEventListener('click', function(){

    document.getElementById("Suchis").classList.remove("masque");
    document.getElementById("Obentos").classList.remove("masque");
    document.getElementById("Plats").classList.remove("masque");

    document.getElementById("suchis").classList.remove("masque");
    document.getElementById("obentos").classList.remove("masque");
    document.getElementById("plats").classList.remove("masque");


    document.getElementById("Suchis").classList.add("masque");
    document.getElementById("Obentos").classList.add("masque");


    document.getElementById("suchis").classList.add("masque");
    document.getElementById("obentos").classList.add("masque");









});
