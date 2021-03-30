//Globala variabler, deklarationer utan var blir globala även om dom är i en funktion

tal1_MG=0;
tal2_MG=0;
ekvation_MG="START";

val_MG="startvarde"; //radio button val

svarsMatris_MG = [];
svar_MG=0;
rattSvar_MG=0;
rattSvarat=0;
i=0; //i visaSvar
h=0; //stega tal2_MG så man får nästa värde i array.
t1_MG= new Date(); //mäta tiden för svaren, millisekunder sedan 1970, 1:a januari
t2_MG= new Date();
serie=[];
serie1_MG=[1,3,5,6,4,7,9,8,2,10];
serie2_MG=[3,2,5,4,1,7,10,9,8,6];
serie3_MG=[4,10,3,5,6,1,7,9,8,2];
serie4_MG=[7,1,3,5,6,10,4,9,8,2];
serie5_MG=[8,5,3,1,6,10,4,2,9,7];
serie6_MG=[4,6,7,9,8,2,10,1,3,5];
serie7_MG=[10,2,5,4,7,6,9,8,3,1];
serie8_MG=[5,6,4,9,8,7,10,2,1,3];
serie9_MG=[6,8,7,5,3,2,4,1,9,10];
serie10_MG=[8,2,3,6,5,9,1,4,10,5];
serie11_MG=[6,4,7,1,2,9,8,10,3,5];
serie12_MG=[2,3,5,10,4,7,8,1,4,6];
serie13_MG=[4,7,1,3,10,5,6,9,8,2];
serie14_MG=[10,2,1,3,5,7,4,6,9,8];
serie15_MG=[3,2,5,4,6,1,7,9,8,10];
rattSvarForstaForsok_MG=1; //för att kunna skilja på svar som är rätt direkt och inte
