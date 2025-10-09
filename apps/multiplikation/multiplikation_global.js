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
serie1_MG=[2,3,5,6,10,7,9,8,1,4];
serie2_MG=[3,2,10,4,1,7,5,9,6,8];
serie3_MG=[4,10,3,5,7,1,6,2,8,9];
serie4_MG=[7,1,6,5,3,10,9,4,8,2];
serie5_MG=[5,8,3,9,7,10,4,2,1,6];
serie6_MG=[1,6,7,9,8,2,5,4,3,10];
serie7_MG=[10,5,2,4,8,3,9,7,6,1];
serie8_MG=[9,6,4,5,8,7,1,2,10,3];
serie9_MG=[3,8,7,5,6,2,4,10,9,1];
serie10_MG=[10,2,9,6,5,3,1,4,8,5];
serie11_MG=[6,4,7,5,2,9,8,10,3,1];
serie12_MG=[4,3,5,10,2,7,8,1,5,6];
serie13_MG=[7,4,1,3,10,2,6,9,8,5];
serie14_MG=[10,2,6,3,5,7,8,1,9,4];
serie15_MG=[8,2,5,10,6,1,7,9,3,4];
//lägg till diagnos med alla tabeller i en vector xxx
rattSvarForstaForsok_MG=1; //för att kunna skilja på svar som är rätt direkt och inte
