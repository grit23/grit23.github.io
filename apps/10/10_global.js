//Globala variabler, deklarationer utan var blir globala även om dom är i en funktion

tal1_G=0;
tal2_G=0;
ekvation_G="START";
val_G="startvarde"; //radio button val
svarsMatris_G = [];
svar_G=0;
rattSvar_G=0;
i=0; //i visaSvar
t1_G= new Date(); //mäta tiden för svaren, millisekunder sedan 1970, 1:a januari
t2_G= new Date();
rattSvarForstaForsok_G=1; //för att kunna skilja på svar som är rätt direkt och inte