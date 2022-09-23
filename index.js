let materials = {
  contents: [],
  meatType: [],
  cookType: [],
  extraItems: [],
};

let countLettuce = 5,
  countPickle = 5,
  countTomatoe = 5,
  countOnion = 5,
  countMeatball = 5,
  countChicken = 5,
  countHamburger = 5,
  countPotatoes = 5,
  countCola = 5,
  countPacketSos = 5;

let ingredientCheck = document.getElementById("ingredient-check");
let lettuceCount = document.getElementById("count-lettuce");

let controlDiv = document.getElementById("control");
let orderButton = document.getElementById("order-take");
let ingredientButton = document.getElementById("ingredient-check");
let prepareHamburger = document.getElementById("prep-hamburger");

let drinkCheck = document.getElementById("drink-check");
let potatoesCheck = document.getElementById("potatoes-check");
let chicken = document.getElementById("chicken");
let meatball = document.getElementById("meatball");
let btnGroup = document.getElementById("btn-group");

let prepareOrder = document.getElementById("prepare-order");

let hamburger = false;
let potatoes = false;
let drink = false;

let underCooked = document.getElementById("undercooked");
let normalCook = document.getElementById("normal");
let overCooked = document.getElementById("overcooked");

let lettuceButton = document.getElementById("lettuce");
let tomatoeButton = document.getElementById("tomatoe");
let pickleButton = document.getElementById("pickle");
let onionButton = document.getElementById("onion");

let resetOption = document.getElementById("reset-options");

let putDiv = document.getElementById("put");
let putButton = document.getElementById("put-button");

let serve = document.getElementById("serve");
let serveButton = document.getElementById("serve-button");

let newOrder = document.getElementById("new-order");

function orderTake() {
  countHamburger--;
  showRestOfMaterials();
  orderButton.disabled = true;
  lettuceButton.disabled = true;
  tomatoeButton.disabled = true;
  pickleButton.disabled = true;
  onionButton.disabled = true;
  resetOption.disabled = true;
  setTimeout(function () {
    controlDiv.style.display = "flex";

    orderButton.style.border = "border: 2px solid #fff";
    ingredientButton.style.display = "block";
  }, 1000);
}

function add(e) {
  if (e.target.getAttribute("name") == "lettuce") {
    if (lettuceButton.disabled == true) {
      lettuceButton.disabled = false;
    } else {
      materials.contents.push("Marul 🥬");
      lettuceButton.disabled = true;
      countLettuce--;
      showRestOfMaterials();
    }
  } else if (e.target.getAttribute("name") == "tomatoe") {
    if (tomatoeButton.disabled == true) {
      tomatoeButton.disabled = false;
    } else {
      tomatoeButton.disabled = true;
      countTomatoe--;
      materials.contents.push("Domates 🍅");
      showRestOfMaterials();
    }
  } else if (e.target.getAttribute("name") == "pickle") {
    if (pickleButton.disabled == true) {
      pickleButton.disabled = false;
    } else {
      pickleButton.disabled = true;
      countPickle--;
      materials.contents.push("Turşu 🥒");
      showRestOfMaterials();
    }
  } else if (e.target.getAttribute("name") == "onion") {
    if (onionButton.disabled == true) {
      onionButton.disabled = false;
    } else {
      onionButton.disabled = true;
      countOnion--;
      materials.contents.push("Soğan 🧅");
      showRestOfMaterials();
    }
  }
}

function reset() {
  if (lettuceButton.disabled == true) {
    lettuceButton.disabled = false;
    countLettuce++;
  }
  if (pickleButton.disabled == true) {
    pickleButton.disabled = false;
    countPickle++;
  }
  if (onionButton.disabled == true) {
    onionButton.disabled = false;
    countOnion++;
  }
  if (tomatoeButton.disabled == true) {
    tomatoeButton.disabled = false;
    countTomatoe++;
  }
  materials.contents = [];
  showRestOfMaterials();
}

function checkorderFunc() {
  ingredientCheck.disabled = true;

  setTimeout(function () {
    if (
      countLettuce < 0 ||
      countChicken < 0 ||
      countHamburger < 0 ||
      countMeatball < 0 ||
      countOnion < 0 ||
      countPickle < 0 ||
      countPacketSos < 1 ||
      countCola < 1 ||
      countPotatoes < 1
    ) {
      alert("YETERLİ MALZEME YOK");
      newOrder();
    } else {
      prepareOrder.style.display = "flex";
    }
  }, 3000);
}

function meatballFunc() {
  chicken.disabled = true;
  meatball.disabled = true;
  materials.meatType.push("Köfte 🧆");
  countMeatball--;
  showRestOfMaterials();
  setTimeout(function () {
    btnGroup.style.display = "block";
  }, 1000);
}

function potatoesFunc() {
  potatoesCheck.disabled = true;
  setTimeout(function () {
    potatoes = true;
    countPotatoes--;
    showRestOfMaterials();
    materials.extraItems.push("Patates 🍟");
    materials.extraItems.push("Paket Sos");
    if (drink && potatoes && hamburger) {
      putDiv.style.display = "flex";
    }
  }, 5000);
}

function cookFunc(e) {
  if (e.target.getAttribute("name") == "undercooked") {
    underCooked.disabled = true;
    normalCook.disabled = true;
    overCooked.disabled = true;
    materials.contents.push(`Hamburger Ekmeği 🥯`);
    materials.meatType.push("Az pişmiş");
    showRestOfMaterials();
    setTimeout(function () {
      prepareHamburger.style.display = "block";
    }, 2000);
  } else if (e.target.getAttribute("name") == "normal") {
    underCooked.disabled = true;
    normalCook.disabled = true;
    overCooked.disabled = true;
    materials.contents.push(`Hamburger Ekmeği 🥯`);
    materials.meatType.push("Normal pişmiş");
    showRestOfMaterials();
    setTimeout(function () {
      prepareHamburger.style.display = "block";
    }, 3000);
  } else if (e.target.getAttribute("name") == "overcooked") {
    underCooked.disabled = true;
    normalCook.disabled = true;
    overCooked.disabled = true;
    materials.contents.push(`Hamburger Ekmeği 🥯`);
    materials.meatType.push("Çok pişmiş");
    showRestOfMaterials();
    setTimeout(function () {
      prepareHamburger.style.display = "block";
    }, 4000);
  } else if (e.target.getAttribute("name") == "chicken") {
    chicken.disabled = true;
    meatball.disabled = true;
    materials.contents.push(`Hamburger Ekmeği 🥯`);
    materials.meatType.push("Tavuk 🍗");
    countChicken--;
    showRestOfMaterials();
    setTimeout(function () {
      prepareHamburger.style.display = "block";
    }, 3000);
  }
}

function prepHamburger() {
  prepareHamburger.disabled = true;
  setTimeout(function () {
    hamburger = true;
    if (drink && potatoes && hamburger) {
      putDiv.style.display = "flex";
    }
  }, 2000);
}

function drinkFunc() {
  drinkCheck.disabled = true;
  setTimeout(function () {
    countCola--;
    showRestOfMaterials();
    materials.extraItems.push("Kola ");
    drink = true;
    if (drink && potatoes && hamburger) {
      putDiv.style.display = "flex";
    }
  }, 2000);
}

function putFunc() {
  putButton.disabled = true;
  countPacketSos--;
  showRestOfMaterials();
  setTimeout(servFunc, 1000);
}

function servFunc() {
  serve.style.display = "flex";
}

function completeFunc() {
  serveButton.disabled = true;
  serveButton.style.border = "border: 2px solid #fff";
  setTimeout(function () {
    newOrder.style.display = "flex";
  }, 1000);
}

function neworderFunc() {
  lettuceButton.disabled = false;
  pickleButton.disabled = false;
  onionButton.disabled = false;
  tomatoeButton.disabled = false;

  resetOption.disabled = false;

  chicken.disabled = false;
  meatball.disabled = false;

  btnGroup.style.display = "none";
  controlDiv.style.display = "none";

  orderButton.disabled = false;
  ingredientButton.style.display = "none";
  prepareOrder.style.display = "none";
  ingredientCheck.disabled = false;
  prepareHamburger.style.display = "none";
  prepareHamburger.disabled = false;
  potatoesCheck.disabled = false;
  drinkCheck.disabled = false;

  underCooked.disabled = false;
  normalCook.disabled = false;
  overCooked.disabled = false;

  putDiv.style.display = "none";
  putButton.disabled = false;

  serve.style.display = "none";
  serveButton.disabled = false;
  drink = false;
  hamburger = false;
  potatoes = false;
  newOrder.style.display = "none";

  materials = {
    contents: [],
    meatType: [],
    cookType: [],
  };
  showRestOfMaterials();
}
let grediants = document.getElementById("gradiants");
let meatType = document.getElementById("meatType");
let extraItems = document.getElementById("extraItems");
let remainingMaterials = document.getElementById("remainingMaterials");
let remainingMeat = document.getElementById("remainingMeat");
let remainingExtraItems = document.getElementById("remainingExtraItems");

function showRestOfMaterials() {
  grediants.innerHTML = materials.contents.join(" ");
  meatType.innerHTML = materials.meatType.join(" ");
  extraItems.innerHTML = materials.extraItems.join(" ");
  remainingMaterials.innerHTML = `Hamburger Ekmeği : ${countHamburger}, Marul : ${countLettuce}, Domates : ${countTomatoe}, Turşu : ${countPickle}, Soğan : ${countOnion}`;
  remainingMeat.innerHTML = `Köfte: ${countMeatball}, Tavuk : ${countChicken}`;
  remainingExtraItems.innerHTML = `Kola: ${countCola} Patates : ${countPotatoes} Paket Sos : ${countPacketSos}`;
}
