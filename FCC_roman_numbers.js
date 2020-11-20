function convertToRoman(num) {
   let roman = "";
 
   while (num >= 1000) {
     num = num - 1000;
     roman += "M";
   }
   while (num >= 900) {
     num = num - 900;
     roman += "CM";
   }
   while (num >= 500) {
      num = num - 500;
      roman += "D";
    }
    while (num >= 400) {
      num = num - 400;
      roman += "CD";
    }
   while (num >= 100) {
     num = num - 100;
     roman += "C";
   }
   while (num >= 90) {
     num = num - 90;
     roman += "XC";
   }
   while (num >= 50) {
      num = num - 50;
      roman += "L";
    }
    while (num >= 40) {
      num = num - 40;
      roman += "XL";
    }
   while (num >= 10) {
     num = num - 10;
     roman += "X";
   }
   while (num >= 9) {
     num = num - 9;
     roman += "IX";
   }
   while (num >= 5) {
     num = num - 5;
     roman += "V";
   }
   while (num >= 4) {
     num = num - 4;
     roman += "IV";
   }
   while (num >= 1) {
     num = num - 1;
     roman += "I";
   }
 
   return roman;
 }
   
   console.log(convertToRoman(126));
   