function convert() {
    var inputValue = document.getElementById("inputValue").value;
    var unitFrom = document.getElementById("unitFrom").value;
    var unitTo = document.getElementById("unitTo").value;
    var result = 0;
  
    if (unitFrom === "m" && unitTo === "km") {
      result = inputValue / 1000;
  } else if (unitFrom === "m" && unitTo === "m") {
        result = inputValue/1;
  } else if (unitFrom === "m" && unitTo === "cm") {
      result = inputValue * 100;
  } else if (unitFrom === "m" && unitTo === "mm") {
      result = inputValue * 1000;
  } else if (unitFrom === "m" && unitTo === "mi") {
      result = inputValue * 0.000621371;
  } else if (unitFrom === "m" && unitTo === "yd") {
      result = inputValue * 1.09361;
  } else if (unitFrom === "m" && unitTo === "ft") {
      result = inputValue * 3.28084;
  } else if (unitFrom === "m" && unitTo === "in") {
      result = inputValue * 39.3701;
  } else if (unitFrom === "m" && unitTo === "nmi") {
      result = inputValue * 0.000539957;
  } else if (unitFrom === "m" && unitTo === "au") {
      result = inputValue / 1.496e+11 ;
} else if (unitFrom === "km" && unitTo === "m") {
    result = inputValue * 1000;
} else if (unitFrom === "km" && unitTo === "km") {
    result = inputValue/1;
} else if (unitFrom === "km" && unitTo === "cm") {
    result = inputValue * 100000;
} else if (unitFrom === "km" && unitTo === "mm") {
    result = inputValue * 1000000;
} else if (unitFrom === "km" && unitTo === "mi") {
    result = inputValue * 0.621371;
} else if (unitFrom === "km" && unitTo === "yd") {
    result = inputValue * 1093.61;
} else if (unitFrom === "km" && unitTo === "ft") {
    result = inputValue * 3280.84;
} else if (unitFrom === "km" && unitTo === "in") {
    result = inputValue * 39370.1;
} else if (unitFrom === "km" && unitTo === "nmi") {
    result = inputValue * 0.539957;
} else if (unitFrom === "km" && unitTo === "au") {
    result = inputValue * 6.68459e-9;
} else if (unitFrom === "cm" && unitTo === "m") {
    result = inputValue / 100;
} else if (unitFrom === "cm" && unitTo === "cm") {
    result = inputValue / 1;
} else if (unitFrom === "cm" && unitTo === "km") {
  result = inputValue / 100000;
} else if (unitFrom === "cm" && unitTo === "mm") {
  result = inputValue * 10;
} else if (unitFrom === "cm" && unitTo === "mi") {
  result = inputValue * 6.2137e-6;
} else if (unitFrom === "cm" && unitTo === "yd") {
  result = inputValue * 0.0109361;
} else if (unitFrom === "cm" && unitTo === "ft") {
  result = inputValue * 0.0328084;
} else if (unitFrom === "cm" && unitTo === "in") {
  result = inputValue * 0.393701;
} else if (unitFrom === "cm" && unitTo === "nmi") {
  result = inputValue / 5.3996e-6;
} else if (unitFrom === "cm" && unitTo === "au") {
  result = inputValue / 6.6846e-14;
} else if (unitFrom === "mm" && unitTo === "m") {
  result = inputValue / 1000;
} else if (unitFrom === "mm" && unitTo === "mm") {
    result = inputValue/1;
} else if (unitFrom === "mm" && unitTo === "km") {
  result = inputValue / 1000000;
} else if (unitFrom === "mm" && unitTo === "cm") {
  result = inputValue / 10;
} else if (unitFrom === "mm" && unitTo === "mi") {
  result = inputValue * 6.2137e-7;
} else if (unitFrom === "mm" && unitTo === "yd") {
  result = inputValue * 0.00109361;
} else if (unitFrom === "mm" && unitTo === "ft") {
  result = inputValue * 0.00328084;
} else if (unitFrom === "mm" && unitTo === "in") {
  result = inputValue * 0.0393701;
} else if (unitFrom === "mm" && unitTo === "nmi") {
  result = inputValue * 5.39957e-7;
} else if (unitFrom === "mm" && unitTo === "au") {
  result = inputValue * 6.68459e-15;
} else if (unitFrom === "mi" && unitTo === "m") {
  result = inputValue * 1609.34;
} else if (unitFrom === "mi" && unitTo === "mi") {
    result = inputValue/1;
} else if (unitFrom === "mi" && unitTo === "km") {
  result = inputValue * 1.60934;
} else if (unitFrom === "mi" && unitTo === "cm") {
  result = inputValue * 160934;
} else if (unitFrom === "mi" && unitTo === "mm") {
  result = inputValue * 1.609e+6;
} else if (unitFrom === "mi" && unitTo === "yd") {
  result = inputValue * 1760;
} else if (unitFrom === "mi" && unitTo === "ft") {
  result = inputValue * 5280;
} else if (unitFrom === "mi" && unitTo === "in") {
  result = inputValue * 63360;
} else if (unitFrom === "mi" && unitTo === "nmi") {
  result = inputValue * 0.868976;
} else if (unitFrom === "mi" && unitTo === "au") {
  result = inputValue * 1.077e-8;
} else if (unitFrom === "yd" && unitTo === "m") {
  result = inputValue / 1.09361;
} else if (unitFrom === "yd" && unitTo === "yd") {
    result = inputValue/1;
} else if (unitFrom === "yd" && unitTo === "km") {
  result = inputValue / 1093.61;
} else if (unitFrom === "yd" && unitTo === "cm") {
  result = inputValue * 91.44;
} else if (unitFrom === "yd" && unitTo === "mm") {
  result = inputValue * 914.4;
} else if (unitFrom === "yd" && unitTo === "mi") {
  result = inputValue * 0.000568182;
} else if (unitFrom === "yd" && unitTo === "ft") {
  result = inputValue * 3;
} else if (unitFrom === "yd" && unitTo === "in") {
  result = inputValue * 36;
} else if (unitFrom === "yd" && unitTo === "nmi") {
  result = inputValue * 0.000493737;
} else if (unitFrom === "yd" && unitTo === "au") {
  result = inputValue * 6.11093e-12;
} else if (unitFrom === "ft" && unitTo === "m") {
  result = inputValue / 3.28084;
} else if (unitFrom === "ft" && unitTo === "ft") {
    result = inputValue/1;
} else if (unitFrom === "ft" && unitTo === "km") {
  result = inputValue / 3280.84;
} else if (unitFrom === "ft" && unitTo === "cm") {
  result = inputValue * 30.48;
} else if (unitFrom === "ft" && unitTo === "mm") {
  result = inputValue * 304.8;
} else if (unitFrom === "ft" && unitTo === "mi") {
  result = inputValue * 0.000189394;
} else if (unitFrom === "ft" && unitTo === "yd") {
  result = inputValue / 3;
} else if (unitFrom === "ft" && unitTo === "in") {
  result = inputValue * 12;
} else if (unitFrom === "ft" && unitTo === "nmi") {
  result = inputValue * 0.000164579;
} else if (unitFrom === "ft" && unitTo === "au") {
  result = inputValue * 2.03719e-12;
} else if (unitFrom === "in" && unitTo === "m") {
  result = inputValue / 39.3701;
} else if (unitFrom === "in" && unitTo === "in") {
    result = inputValue/1;
} else if (unitFrom === "in" && unitTo === "km") {
  result = inputValue / 39370.1;
} else if (unitFrom === "in" && unitTo === "cm") {
  result = inputValue * 2.54;
} else if (unitFrom === "in" && unitTo === "mm") {
  result = inputValue * 25.4;
} else if (unitFrom === "in" && unitTo === "mi") {
  result = inputValue * 1.5783e-5;
} else if (unitFrom === "in" && unitTo === "yd") {
  result = inputValue / 36;
} else if (unitFrom === "in" && unitTo === "ft") {
  result = inputValue / 12;
} else if (unitFrom === "in" && unitTo === "nmi") {
  result = inputValue * 1.3715e-5;
} else if (unitFrom === "in" && unitTo === "au") {
  result = inputValue * 1.70108e-13;
} else if (unitFrom === "nmi" && unitTo === "m") {
  result = inputValue / 0.000539957;
} else if (unitFrom === "nmi" && unitTo === "nmi") {
    result = inputValue/1;
} else if (unitFrom === "nmi" && unitTo === "km") {
  result = inputValue / 0.539957;
} else if (unitFrom === "nmi" && unitTo === "cm") {
  result = inputValue * 185200;
} else if (unitFrom === "nmi" && unitTo === "mm") {
  result = inputValue * 1.852e+6;
} else if (unitFrom === "nmi" && unitTo === "mi") {
  result = inputValue * 1.15078;
} else if (unitFrom === "nmi" && unitTo === "yd") {
  result = inputValue * 2025.37;
} else if (unitFrom === "nmi" && unitTo === "ft") {
  result = inputValue * 6076.12;
} else if (unitFrom === "nmi" && unitTo === "in") {
  result = inputValue * 72913.4;
} else if (unitFrom === "nmi" && unitTo === "au") {
  result = inputValue * 1.21472e-8;
} else if (unitFrom === "au" && unitTo === "m") {
  result = inputValue / 6.68459e-12;
} else if (unitFrom === "au" && unitTo === "au") {
    result = inputValue/1;
} else if (unitFrom === "au" && unitTo === "km") {
  result = inputValue / 6.68459e-9;
} else if (unitFrom === "au" && unitTo === "cm") {
  result = inputValue / 6.68459e-14;
} else if (unitFrom === "au" && unitTo === "mm") {
  result = inputValue / 6.68459e-15;
} else if (unitFrom === "au" && unitTo === "mi") {
  result = inputValue * 92955807.3;
} else if (unitFrom === "au" && unitTo === "yd") {
  result = inputValue * 105700000000;
} else if (unitFrom === "au" && unitTo === "ft") {
  result = inputValue * 347850000000;
} else if (unitFrom === "au" && unitTo === "in") {
  result = inputValue * 4174200000000;
} else if (unitFrom === "au" && unitTo === "nmi") {
  result = inputValue * 9295580.73;
}


  
    document.getElementById("result").innerHTML = result.toFixed(2) + " " + unitTo;
  }