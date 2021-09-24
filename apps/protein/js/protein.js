//Version 5.1
//Globala variabler laddas vid start    
//Globala variabler
var sub_total= [0, 0, 0, 0, 0, 0, 0]; //total vikt per råvara 
var sub_total_protein= [0, 0, 0, 0, 0, 0, 0]; //total vikt protein per råvara
console.log("start sub_total_protein "+sub_total_protein);

function visa_total(delsumma){//uppdaterar total summan högst upp på sidan med var total_protein 
    var total_protein=0;
    var i;
    for (i=0;i<delsumma.length;i++){
        total_protein = total_protein+delsumma[i]
    }
    document.getElementById("total_field").innerHTML=Math.round(total_protein)+" g";
}


function visa_subtotal(rad_id,protein_namn,vilken_knapp){//när knapp trycks så läggs det till i subtotal och printas i det id som anges
    rad_id=Number(rad_id);
    console.log("rad_id "+rad_id);
    //Def innehåll i varje protein
    //Def Tonfisk = [protein i hundra_g,portion av livsmedlet inte bara protein,stort_steg i vikt livsmedel,litet_steg]

    var tonfisk = [24.06,140,10,1]; //ok en burk
    var kyckling = [23,180,10,1]; //ok en filé
    var kott = [20,100,10,1]; //ok portion 100gfläskfile
    var agg = [12.25,55,27.5,1]; //ok, ett kokt ägg utan skal
    var notter = [20,35,10,1];//ok, portion 0.5 dl
    var proteinpulver = [77,37,18.5,1];//ok portion 37g=1 dl, 
    var rent_protein = [100,1,10,1]; //Här anger man antal protein inte mängd av ett livsmedel
    //LÄGG TILL SÅ ATT DET RÄKNAS UT G PROTEIN UR VIKT LIVSVMEDEL    
    
    //nedan - behövs tydligen för att protein_namn ska bl<!DOCTYPE html>
    //i vektorn tonfisk och inte en string...
    if(protein_namn=="tonfisk"){protein_namn=tonfisk}
    if(protein_namn=="kyckling"){protein_namn=kyckling}
    if(protein_namn=="kott"){protein_namn=kott}
    if(protein_namn=="agg"){protein_namn=agg}
    if(protein_namn=="notter"){protein_namn=notter}
    if(protein_namn=="proteinpulver"){protein_namn=proteinpulver}
    if(protein_namn=="rent_protein"){protein_namn=rent_protein}

    
    
    
    var steg;
    if(vilken_knapp=="hundra_g"){steg=protein_namn[0]}
    if(vilken_knapp=="portion"){steg=protein_namn[1]}
    if(vilken_knapp=="stort_steg"){steg=protein_namn[2]}
    if(vilken_knapp=="litet_steg"){steg=protein_namn[3]}
    if(vilken_knapp=="reset"){sub_total[rad_id]=0;steg=0} //steg=0 vet ej om det gör nåt

   sub_total[rad_id]=sub_total[rad_id]+steg; //gram livsmedel


    //nedan populeras sub_total_protein-vektorn med ren protiein i gram. sub_total är gram livsmedel som översätts i g protein.
    sub_total_protein[rad_id]=(sub_total[rad_id])*(protein_namn[0]/100);//protein_namn[0] är protein/100g  

    document.getElementById("total_"+rad_id).innerHTML=Math.round(sub_total[rad_id])+"g<span class=w3-small> ("+Math.round(sub_total_protein[rad_id])+"g prot)</span>";
console.log("subtotalvektorn protein"+sub_total_protein);
console.log("subtotalvektorn"+sub_total);
    visa_total(sub_total_protein);        //Uppdaterar totalen högst upp.
}

    
/*
function spara_lokalt(total, datum){
//    sparar totalen med key:datum
}

function exportera_data(){
  //  läs in lokalt sparat och visa i csv-fil
}

function visa_historia(lokaldata){
    //visa datan som sparats lokal per datum/key
}
*/