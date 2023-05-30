//---------------------variables--------------------------
const mainOptions = document.querySelector(".main-options");
const subOptions = document.querySelectorAll(".sub-options");
const inputLHS = document.querySelector(".value-LHS");
const inputRHS = document.querySelector(".value-RHS");
const inputs = document.querySelectorAll(".value");

//--------------------conversion functions------------------

////////////////////////////////////////////////////////////
//length
const kilometerToMeter = function (km) {
  return km * 1000;
};

const kilometerToCentimeter = function (km) {
  return km * 100000;
};

const kilometerToMilimeter = function (km) {
  return km * 1000000;
};

const meterToKilometer = function (m) {
  return m / 1000;
};

const meterToCentimeter = function (m) {
  return m * 100;
};

const meterToMilimeter = function (m) {
  return m * 1000;
};

const centimeterToKilometer = function (cm) {
  return cm / 100000;
};

const centimeterToMeter = function (cm) {
  return cm / 100;
};

const centimeterToMilimeter = function (cm) {
  return cm * 10;
};

const milimeterToKilometer = function (mm) {
  return mm / 1000000;
};

const milimeterToMeter = function (mm) {
  return mm / 1000;
};

const milimeterToCentimeter = function (mm) {
  return mm / 10;
};

/////////////////////////////////////////////////
//Area
const sqkmToSqm = function (sqkm) {
  return sqkm * 1000000;
};

const sqkmToHectare = function (sqkm) {
  return sqkm * 100;
};

const sqkmToAcre = function (sqkm) {
  return sqkm * 247.105;
};

const sqmToSqkm = function (sqm) {
  return sqm / 1000000;
};

const sqmToHectare = function (sqm) {
  return sqm / 10000;
};

const sqmToAcre = function (sqm) {
  return sqm / 4047;
};

const hectareToSqkm = function (h) {
  return h / 100;
};

const hectareToSqm = function (h) {
  return h * 10000;
};

const hectareToAcre = function (h) {
  return h * 2.471;
};

const acreToSqkm = function (a) {
  return a / 247.1;
};

const acreTosqm = function (a) {
  return a * 4047;
};

const acreToHectare = function (a) {
  return a / 2.471;
};

/////////////////////////////////////////////////////
//Mass
const tonToKg = function (t) {
  return t * 1000;
};

const tonToG = function (t) {
  return t * 1000000;
};

const tonToMg = function (t) {
  return t * 1000000000;
};

const kgToTon = function (kg) {
  return kg / 1000;
};

const kgToG = function (kg) {
  return kg * 1000;
};

const kgToMg = function (kg) {
  return kg * 1000000;
};

const gToTon = function (g) {
  return g / 1000000;
};

const gToKg = function (g) {
  return g / 1000;
};

const gToMg = function (g) {
  return g * 1000;
};

const mgToTon = function (mg) {
  return mg / 1000000000;
};

const mgToKg = function (mg) {
  return mg / 1000000;
};

const mgToG = function (mg) {
  return mg / 1000;
};

//////////////////////////////////////////////////////////
//time
const secToMin = function (sec) {
  return sec / 60;
};

const secToHr = function (sec) {
  return sec / 3600;
};

const secToDy = function (sec) {
  return sec / (3600 * 24);
};

const minToSec = function (min) {
  return min * 60;
};

const minToHr = function (min) {
  return min / 60;
};

const minToDy = function (min) {
  return min / (24 * 60);
};

const hrToSec = function (hr) {
  return hr * 3600;
};

const hrToMin = function (hr) {
  return hr * 60;
};

const hrToDy = function (hr) {
  return hr / 24;
};

const dyToSec = function (dy) {
  return dy * 24 * 3600;
};

const dyToMin = function (dy) {
  return dy * 24 * 60;
};

const dyToHr = function (dy) {
  return dy * 24;
};

/////////////////////////////////////////////////////////
//volume
const cbmToLt = function (cbm) {
  return cbm * 1000;
};

const cbmToMl = function (cbm) {
  return cbm * 1000000;
};

const ltToCbm = function (lt) {
  return lt / 1000;
};

const ltToMl = function (lt) {
  return lt * 1000;
};

const mlToCbm = function (ml) {
  return ml / 1000000;
};

const mlToLt = function (ml) {
  return ml / 1000;
};

////////////////////////////////////////////////////////////////////

const updateInputs = function () {
  let get, update;

  if (this.dataset.index == 0) {
    get = 0;
    update = 1;
  } else {
    get = 1;
    update = 0;
  }

  if (subOptions[get].value === subOptions[update].value) {
    inputs[update].value = +inputs[get].value;
  }

  ////////////////////////////////////////////////////////
  //////////area
  if (subOptions[get].value == "sqkm" && subOptions[update].value == "sqm") {
    inputs[update].value = sqkmToSqm(+inputs[get].value);
  }

  if (
    subOptions[get].value == "sqkm" &&
    subOptions[update].value == "hectare"
  ) {
    inputs[update].value = sqkmToHectare(+inputs[get].value);
  }

  if (subOptions[get].value == "sqkm" && subOptions[update].value == "acre") {
    inputs[update].value = sqkmToAcre(+inputs[get].value);
  }

  if (subOptions[get].value == "sqm" && subOptions[update].value == "sqkm") {
    inputs[update].value = sqmToSqkm(+inputs[get].value);
  }

  if (subOptions[get].value == "sqm" && subOptions[update].value == "hectare") {
    inputs[update].value = sqmToHectare(+inputs[get].value);
  }

  if (subOptions[get].value == "sqm" && subOptions[update].value == "acre") {
    inputs[update].value = sqmToAcre(+inputs[get].value);
  }

  if (
    subOptions[get].value == "hectare" &&
    subOptions[update].value == "sqkm"
  ) {
    inputs[update].value = hectareToSqkm(+inputs[get].value);
  }

  if (subOptions[get].value == "hectare" && subOptions[update].value == "sqm") {
    inputs[update].value = hectareToSqm(+inputs[get].value);
  }

  if (
    subOptions[get].value == "hectare" &&
    subOptions[update].value == "acre"
  ) {
    inputs[update].value = hectareToAcre(+inputs[get].value);
  }

  if (subOptions[get].value == "acre" && subOptions[update].value == "sqkm") {
    inputs[update].value = acreToSqkm(+inputs[get].value);
  }

  if (subOptions[get].value == "acre" && subOptions[update].value == "sqm") {
    inputs[update].value = acreTosqm(+inputs[get].value);
  }

  if (
    subOptions[get].value == "acre" &&
    subOptions[update].value == "hectare"
  ) {
    inputs[update].value = acreToHectare(+inputs[get].value);
  }

  ///////////////////////////////////////////////////////////
  ////////////length
  if (
    subOptions[get].value == "kilometer" &&
    subOptions[update].value == "meter"
  ) {
    inputs[update].value = kilometerToMeter(+inputs[get].value);
  }

  if (
    subOptions[get].value == "kilometer" &&
    subOptions[update].value == "centimeter"
  ) {
    inputs[update].value = kilometerToCentimeter(+inputs[get].value);
  }

  if (
    subOptions[get].value == "kilometer" &&
    subOptions[update].value == "milimeter"
  ) {
    inputs[update].value = kilometerToMilimeter(+inputs[get].value);
  }

  if (
    subOptions[get].value == "meter" &&
    subOptions[update].value == "kilometer"
  ) {
    inputs[update].value = meterToKilometer(+inputs[get].value);
  }

  if (
    subOptions[get].value == "meter" &&
    subOptions[update].value == "centimeter"
  ) {
    inputs[update].value = meterToCentimeter(+inputs[get].value);
  }

  if (
    subOptions[get].value == "meter" &&
    subOptions[update].value == "milimeter"
  ) {
    inputs[update].value = meterToMilimeter(+inputs[get].value);
  }

  if (
    subOptions[get].value == "centimeter" &&
    subOptions[update].value == "kilometer"
  ) {
    inputs[update].value = centimeterToKilometer(+inputs[get].value);
  }

  if (
    subOptions[get].value == "centimeter" &&
    subOptions[update].value == "meter"
  ) {
    inputs[update].value = centimeterToMeter(+inputs[get].value);
  }

  if (
    subOptions[get].value == "centimeter" &&
    subOptions[update].value == "milimeter"
  ) {
    inputs[update].value = centimeterToMilimeter(+inputs[get].value);
  }

  if (
    subOptions[get].value == "milimeter" &&
    subOptions[update].value == "kilometer"
  ) {
    inputs[update].value = milimeterToKilometer(+inputs[get].value);
  }

  if (
    subOptions[get].value == "milimeter" &&
    subOptions[update].value == "meter"
  ) {
    inputs[update].value = milimeterToMeter(+inputs[get].value);
  }

  if (
    subOptions[get].value == "milimeter" &&
    subOptions[update].value == "centimeter"
  ) {
    inputs[update].value = milimeterToCentimeter(+inputs[get].value);
  }

  ////////////////////////////////////////////////////////////
  //////////mass

  if (subOptions[get].value == "ton" && subOptions[update].value == "kg") {
    inputs[update].value = tonToKg(+inputs[get].value);
  }

  if (subOptions[get].value == "ton" && subOptions[update].value == "g") {
    inputs[update].value = tonToG(+inputs[get].value);
  }

  if (subOptions[get].value == "ton" && subOptions[update].value == "mg") {
    inputs[update].value = tonToMg(+inputs[get].value);
  }

  if (subOptions[get].value == "kg" && subOptions[update].value == "ton") {
    inputs[update].value = kgToTon(+inputs[get].value);
  }

  if (subOptions[get].value == "kg" && subOptions[update].value == "g") {
    inputs[update].value = kgToG(+inputs[get].value);
  }

  if (subOptions[get].value == "kg" && subOptions[update].value == "mg") {
    inputs[update].value = kgToMg(+inputs[get].value);
  }

  if (subOptions[get].value == "g" && subOptions[update].value == "ton") {
    inputs[update].value = gToTon(+inputs[get].value);
  }

  if (subOptions[get].value == "g" && subOptions[update].value == "kg") {
    inputs[update].value = gToKg(+inputs[get].value);
  }

  if (subOptions[get].value == "g" && subOptions[update].value == "mg") {
    inputs[update].value = gToMg(+inputs[get].value);
  }

  if (subOptions[get].value == "mg" && subOptions[update].value == "ton") {
    inputs[update].value = mgToTon(+inputs[get].value);
  }

  if (subOptions[get].value == "mg" && subOptions[update].value == "kg") {
    inputs[update].value = mgToKg(+inputs[get].value);
  }

  if (subOptions[get].value == "mg" && subOptions[update].value == "g") {
    inputs[update].value = mgToG(+inputs[get].value);
  }

  //////////////////////////////////////////////////////
  ///////////time
  if (subOptions[get].value == "sec" && subOptions[update].value == "min") {
    inputs[update].value = secToMin(+inputs[get].value);
  }

  if (subOptions[get].value == "sec" && subOptions[update].value == "hr") {
    inputs[update].value = secToHr(+inputs[get].value);
  }

  if (subOptions[get].value == "sec" && subOptions[update].value == "dy") {
    inputs[update].value = secToDy(+inputs[get].value);
  }

  if (subOptions[get].value == "min" && subOptions[update].value == "sec") {
    inputs[update].value = minToSec(+inputs[get].value);
  }

  if (subOptions[get].value == "min" && subOptions[update].value == "hr") {
    inputs[update].value = minToHr(+inputs[get].value);
  }

  if (subOptions[get].value == "min" && subOptions[update].value == "dy") {
    inputs[update].value = minToDy(+inputs[get].value);
  }

  if (subOptions[get].value == "hr" && subOptions[update].value == "sec") {
    inputs[update].value = hrToSec(+inputs[get].value);
  }

  if (subOptions[get].value == "hr" && subOptions[update].value == "min") {
    inputs[update].value = hrToMin(+inputs[get].value);
  }

  if (subOptions[get].value == "hr" && subOptions[update].value == "dy") {
    inputs[update].value = hrToDy(+inputs[get].value);
  }

  if (subOptions[get].value == "dy" && subOptions[update].value == "sec") {
    inputs[update].value = dyToSec(+inputs[get].value);
  }

  if (subOptions[get].value == "dy" && subOptions[update].value == "min") {
    inputs[update].value = dyToMin(+inputs[get].value);
  }

  if (subOptions[get].value == "dy" && subOptions[update].value == "hr") {
    inputs[update].value = dyToHr(+inputs[get].value);
  }

  ////////////////////////////////////////////////////////////
  ///////////////////////vol
  if (subOptions[get].value == "cbm" && subOptions[update].value == "lt") {
    inputs[update].value = cbmToLt(+inputs[get].value);
  }

  if (subOptions[get].value == "cbm" && subOptions[update].value == "ml") {
    inputs[update].value = cbmToMl(+inputs[get].value);
  }

  if (subOptions[get].value == "lt" && subOptions[update].value == "cbm") {
    inputs[update].value = ltToCbm(+inputs[get].value);
  }

  if (subOptions[get].value == "lt" && subOptions[update].value == "ml") {
    inputs[update].value = ltToMl(+inputs[get].value);
  }

  if (subOptions[get].value == "ml" && subOptions[update].value == "cbm") {
    inputs[update].value = mlToCbm(+inputs[get].value);
  }

  if (subOptions[get].value == "ml" && subOptions[update].value == "lt") {
    inputs[update].value = mlToLt(+inputs[get].value);
  }
};

const init = function () {
  subOptions.forEach((subOption, i) => {
    if (!i)
      subOption.innerHTML = `<option value="kilometer">Kilometer</option>
      <option value="meter" selected="selected">Meter</option>
      <option value="centimeter" >Centimeter</option>
      <option value="milimeter">Milimeter</option>`;
    else
      subOption.innerHTML = `<option value="kilometer">Kilometer</option>
      <option value="meter">Meter</option>
      <option value="centimeter" selected="selected">Centimeter</option>
      <option value="milimeter">Milimeter</option>`;
  });

  inputs[0].value = 1;
  updateInputs.call(inputs[0]);
};

//-----------------------event listeners----------------------------

//event listners on changing the value of inputs
inputLHS.addEventListener("input", updateInputs);
inputRHS.addEventListener("input", updateInputs);

//event listners on selecting suboptions
subOptions[0].addEventListener("change", updateInputs.bind(inputRHS));
subOptions[1].addEventListener("change", updateInputs.bind(inputLHS));

//event listener on main-options
mainOptions.addEventListener("change", function () {
  if (mainOptions.value === "area") {
    subOptions.forEach((subOption, i) => {
      if (!i)
        subOption.innerHTML = `<option value="sqkm">Square Kilometer</option>
      <option value="sqm" selected="selected">Square meter</option>
      <option value="hectare">Hectare</option>
      <option value="acre">Acre</option>`;
      else
        subOption.innerHTML = `<option value="sqkm" selected="selected">Square Kilometer</option>
        <option value="sqm" >Square meter</option>
        <option value="hectare">Hectare</option>
      <option value="acre">Acre</option>`;
    });
  }

  if (mainOptions.value === "length") {
    subOptions.forEach((subOption, i) => {
      if (!i)
        subOption.innerHTML = `<option value="kilometer">Kilometer</option>
        <option value="meter" selected="selected">Meter</option>
        <option value="centimeter" >Centimeter</option>
        <option value="milimeter">Milimeter</option>`;
      else
        subOption.innerHTML = `<option value="kilometer">Kilometer</option>
        <option value="meter">Meter</option>
        <option value="centimeter" selected="selected">Centimeter</option>
        <option value="milimeter">Milimeter</option>`;
    });
  }

  if (mainOptions.value === "mass") {
    subOptions.forEach((subOption, i) => {
      if (!i)
        subOption.innerHTML = `
        <option value="ton">Tonne</option>
        <option value="kg" selected="selected">Kilogram</option>
        <option value="g">Gram</option>
        <option value="mg" >Miligram</option>`;
      else
        subOption.innerHTML = `
        <option value="ton">Tonne</option>
        <option value="kg" >Kilogram</option>
        <option value="g" selected="selected">Gram</option>
        <option value="mg" >Miligram</option>
        `;
    });
  }

  if (mainOptions.value === "time") {
    subOptions.forEach((subOption, i) => {
      if (!i)
        subOption.innerHTML = `<option value="sec" selected="selected">Second</option>
        <option value="min">Minute</option>
        <option value="hr" >Hour</option>
        <option value="dy">Day</option>`;
      else
        subOption.innerHTML = `<option value="sec" >Second</option>
        <option value="min" selected="selected">Minute</option>
        <option value="hr" >Hour</option>
        <option value="dy">Day</option>`;
    });
  }

  if (mainOptions.value === "volume") {
    subOptions.forEach((subOption, i) => {
      if (!i)
        subOption.innerHTML = `<option value="cbm" >Cubic meter</option>
        <option value="lt" selected="selected">Liter</option>
        <option value="ml" >Mililiter</option>`;
      else
        subOption.innerHTML = `<option value="cbm" >Cubic meter</option>
        <option value="lt" >Liter</option>
        <option value="ml" selected="selected">Mililiter</option>`;
    });
  }

  inputs[0].value = 1;
  updateInputs.call(inputs[0]);
});

init();
