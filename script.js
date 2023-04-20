const dishSelector = document.querySelector(`#Dish-Selector`);
const nonVegRadio = document.querySelector(`#food-type-2`);
const closeButton = document.querySelectorAll(`.close`);
const likeToHave = document.querySelector(`#food-area`);
const vegRadio = document.querySelector(`#food-type-1`);
const foodPrice = document.querySelector(`#foodPrice`);
const foodImage = document.querySelector(`#foodImage`);
const dateTime = document.querySelector(`#billToday`);
const foodDesc = document.querySelector(`#foodDesc`);
const foodName = document.querySelector(`#foodName`);
const QUANTITY = document.querySelector(`#quantity`);
const modal = document.querySelector(`dialog`);
const form = document.querySelector(`form`);
let TOTAL = 0;
let PRICE = 0;
let SGST = 0;
let VGST = 0;

form.addEventListener(`submit`, (event) => {
  event.preventDefault();
  SGST = (PRICE * parseInt(QUANTITY.value) * 0.18).toFixed(3);
  VGST = (PRICE * parseInt(QUANTITY.value) * 0.12).toFixed(3);
  TOTAL = (
    PRICE * parseInt(QUANTITY.value) +
    parseInt(SGST) +
    parseInt(VGST)
  ).toFixed(3);

  document.querySelector(`#billOrder`).innerText = foodName.innerText;
  document.querySelector(`#billQuantity`).innerText = QUANTITY.value;
  document.querySelector(`#billPrice`).innerText = (
    PRICE * QUANTITY.value
  ).toFixed(3);
  document.querySelector(`#billSGST`).innerText = SGST;
  document.querySelector(`#billVGST`).innerText = VGST;
  document.querySelector(`#billAmount`).innerText = TOTAL;

  modal.classList.add(`slide-in-blurred-bottom`);
  setTimeout(() => {
    modal.classList.remove(`slide-in-blurred-bottom`);
  }, 601);
  modal.showModal();
});

const today = new Date();
dateTime.innerText = `${today.toLocaleString("en-US", {
  weekday: "short",
  day: "numeric",
  year: "numeric",
  month: "long",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
})}`;

const changeDishes = (
  radioNumber,
  foodArea,
  foodOne,
  foodTwo,
  foodThree,
  foodFour
) => {
  [radioNumber, likeToHave].forEach((doThis) => {
    doThis.addEventListener(`change`, () => {
      if (likeToHave.value === foodArea && radioNumber.checked === true) {
        dishSelector.innerHTML = `<option value="Select Dish">Select Dish</option>
                                  <option value = "${foodOne}">${foodOne} </option>
                                  <option value = "${foodTwo}">${foodTwo}</option>
                                            <option value = "${foodThree}">${foodThree}</option>
                                                  <option value = "${foodFour}">${foodFour}</option>`;
      }
    });
  });
};
const selectedDish = (name, desc, image, money, rate) => {
  dishSelector.addEventListener(`change`, () => {
    if (dishSelector.value === name) {
      foodName.innerText = name;
      foodDesc.innerText = desc;
      foodImage.src = image;
      foodPrice.innerText = money;
      PRICE = rate;
      [foodName, foodImage, foodPrice, foodDesc].forEach((action) => {
        action.classList.add(`fade-in`);
        setTimeout(() => {
          action.classList.remove(`fade-in`);
        }, 610);
      });
    }
  });
};

closeButton.forEach((action) => {
  action.addEventListener(`click`, () => {
    form.reset();
    modal.classList.add(`slide-out-blurred-bottom`);
    setTimeout(() => {
      modal.close();
      modal.classList.remove(`slide-out-blurred-bottom`);
    }, 650);
  });
});
// <-------------------------------------DATA-ENTRY------------------------------------->

changeDishes(
  vegRadio,
  `North`,
  "Chole Bhature",
  "Shahi Paneer",
  "Daal Makhni",
  "Chaat"
);
changeDishes(
  nonVegRadio,
  `North`,
  "Butter Chicken",
  "Rogan Josh",
  "Mutton Korma",
  "Chicken Biryani"
);
changeDishes(
  vegRadio,
  `South`,
  "Idli Sambhar",
  "Masala Dosa",
  "Medu Vada",
  "Upma"
);
changeDishes(
  nonVegRadio,
  `South`,
  "Lamb Curry",
  "Paya Curry",
  "Handi Mutton",
  "Mutton Biryani"
);
changeDishes(vegRadio, `Fast`, "Momos", "Pizza", "Burger", "Puff Pattie");
changeDishes(
  nonVegRadio,
  `Fast`,
  "Chicken Momos",
  "Chicken Tikka",
  "Mutton Pizza",
  "Egg Roll"
);
changeDishes(vegRadio, `Bevrages`, "Chai", "Cofee", "Coke", "Red Bull");
changeDishes(nonVegRadio, `Bevrages`, "Chai", "Cofee", "Coke", "Red Bull");

selectedDish(
  `Idli Sambhar`,
  `Idli Sambar is a hearty, comforting and a healthy meal of soft fluffy idlis served with savory, spiced and lightly tangy sambar – a vegetable stew made with lentils and assorted vegetables. It is a winning combination made for each other.`,
  `https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aWRsaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
  `₹59 / Peice`,
  59
);
selectedDish(
  `Chole Bhature`,
  `Chole Bhature also known as Chana Bhatura is one of the most popular Punjabi dish liked almost all over India. Chole stands for a spiced tangy chickpea curry and Bhatura is a soft and fluffy fried leavened bread.`,
  `https://images.unsplash.com/photo-1560260330-727f7f5c0277?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
  `₹119 / Plate`,
  119
);
selectedDish(
  `Shahi Paneer`,
  `It is a delicious North Indian curry made with paneer and tomato based spicy gravy laced with spices. This is a traditional recipe that has been followed from generations and has been cemented in Indian cuisine since the time of Moguls.`,
  `https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGFuZWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
  `₹199 / Plate`,
  199
);
selectedDish(
  `Daal Makhni`,
  `This Dal Makhani recipe is a restaurant style version with subtle smoky flavors and creaminess of the lentils. If you love authentic Punjabi food then you are going to love this Dal Makhani even more. Its very Popular in India and Pakistan.`,
  `https://maunikagowardhan.co.uk/wp-content/uploads/2017/11/Black-Dal-Makhani-scaled.jpg`,
  `₹99 / Plate`,
  99
);
selectedDish(
  `Chaat`,
  `Aloo Chaat, this popular street food from North India is one of the easiest chaats to make at home. This spicy chaat is a perfect food to serve in the party as it can be prepared in advance and served as a snack, starter or appetizer.`,
  `https://images.unsplash.com/photo-1599307767316-776533bb941c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGlra2l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`,
  `₹79 / Plate`,
  79
);
selectedDish(
  `Butter Chicken`,
  `Butter Chicken is one of the most popular curries at any Indian restaurant around the world. Aromatic golden chicken pieces in an incredible creamy curry sauce, this Butter Chicken recipe is one of the best you will try! `,
  `https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
  `₹419 / Plate`,
  419
);
selectedDish(
  `Rogan Josh`,
  `It is made with red meat—traditionally lamb, mutton, or goat—and coloured and flavoured primarily by alkanet flower and Kashmiri chilies. It is one of the signature recipes of Kashmiri cuisine.Its very Tasty and Aromatic.`,
  `https://maunikagowardhan.co.uk/wp-content/uploads/2010/08/Lamb-Rogan-Josh-1-scaled.jpg`,
  `₹489 / Plate`,
  489
);
selectedDish(
  `Mutton Korma`,
  `This unique mutton dish can be prepared with some easily available ingredients like tender mutton, onions, tomatoes, yoghurt, coriander, ginger, green chilies, poppy seeds, herbs and spices. Its Spices Pops Out and Tastes really good.`,
  `https://images.unsplash.com/photo-1559203244-78de52adba0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bXV0dG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
  `₹529 / Plate`,
  529
);
selectedDish(
  `Chicken Biryani`,
  `Biryani is a mixed rice dish originating among the royal khansamas of the durbar of Old Delhi, under the Mughal Empire, during the late 16th century of the erstwhile Mughal Court and Whole of India. Its very Popular in India.`,
  `https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyeWFuaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
  `₹449 / Plate`,
  449
);
selectedDish(
  `Masala Dosa`,
  `Masala Dosa / dosey / dosai is a variation of the popular South Indian dosa which has its origins in Tuluva Udupi cuisine of Karnataka. It is made from rice, lentils, potato, fenugreek, ghee and curry leaves, and served with chutneys and sambar.`,
  `https://images.unsplash.com/photo-1643268972535-a2b100ff3632?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9zYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
  `₹189 / Dosa`,
  189
);
selectedDish(
  `Medu Vada`,
  `Medu vada is a South Indian breakfast snack made from Vigna mungo. It is usually made in a doughnut shape, with a crispy exterior and soft interior. A popular food item in South Indian cuisine it is generally eaten as a breakfast or a snack`,
  `https://foodiewish.com/wp-content/uploads/2020/05/Medu-Vada-Recipe-1.jpg`,
  `₹79 / Peice`,
  79
);
selectedDish(
  `Upma`,
  `Upma, uppittu is a dish originating from the Indian subcontinent, most common in Kerala, Andhra Pradesh, Tamil Nadu, and Sri Lankan Tamil breakfast, cooked as a thick porridge from dry-roasted semolina or coarse rice flour. `,
  `https://cdn.aahaaramonline.com/wp-content/uploads/2013/11/rava_upma_with_onions.jpg`,
  `₹59 / Plate`,
  59
);
selectedDish(
  `Lamb Curry`,
  `This authentic Indian lamb curry is made with lamb shoulder. It's simmered with fragrant spices, caramelized onions, and Greek yogurt until fork-tender. Served over Indian bread or basmati rice, this is a meal on its own.`,
  `https://images.unsplash.com/photo-1627366422957-3efa9c6df0fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
  `₹459 / Plate`,
  459
);
selectedDish(
  `Paya Curry`,
  `Paya curry has sheep's trotters, cooked in a luscious tomato-onion curry. This is a famous Pakistani dish that is eaten popularly in Muslim cuisine and has slowly garnered fans around the world.Very Good in Taste and Asthtics.`,
  `https://images.unsplash.com/photo-1564834744159-ff0ea41ba4b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
  `₹559 / Plate`,
  559
);
selectedDish(
  `Handi Mutton`,
  `Champaran meat, also known as ahuna, handi meat or batlohi, is a dish with its root from Champaran, a district of Bihar. Meat is marinated in a mix of mustard oil and ghee, garlic, onions, ginger with the paste of spices.`,
  `https://images.unsplash.com/photo-1574653853027-5382a3d23a15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG11dHRvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
  `₹519 / Plate`,
  519
);
selectedDish(
  `Mutton Biryani`,
  `A hearty mutton biryani that will impress your guests instantly. Biryani is a dish that nobody can ever resist. Be it a dinner party or any celebratory occasion, biryani seems to be an ideal main dish to serve along with a spicy salan or refreshing raita.`,
  `https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmlyeWFuaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
  `₹499 / Plate`,
  499
);
selectedDish(
  `Momos`,
  `Momo are bite-size dumplings made with a spoonful of stuffing wrapped in dough. Momo are usually steamed, though they are sometimes fried or steam-fried. It produces an intensively flavored broth sealed inside the wrappers. `,
  `https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9tb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
  `₹39 / Peice`,
  39
);
selectedDish(
  `Chicken Momos`,
  `Momo are bite-size dumplings made with a spoonful of stuffing wrapped in dough. Momo are usually steamed, though they are sometimes fried or steam-fried. It produces an intensively flavored broth sealed inside the wrappers`,
  `https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9tb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
  `₹59 / Peice`,
  59
);
selectedDish(
  `Pizza`,
  `Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature.`,
  `https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`,
  `₹419 / Pizza`,
  419
);
selectedDish(
  `Burger`,
  `The name "hamburger" comes from the seaport town of Hamburg, Germany, where it is thought that 19th-century sailors brought back the idea of raw shredded beef (known today as beef tartare) after trading with the Baltic provinces of Russia`,
  `https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1cmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
  `₹399 / Burger`,
  399
);
selectedDish(
  `Puff Pattie`,
  `Puff Pattie, also known as pâte feuilletée, is a flaky light pastry made from a laminated dough composed of dough and butter. The butter is put inside the dough, making a paton that is repeatedly folded and rolled out before baking.`,
  `https://images.unsplash.com/photo-1587122569949-ae6e755c6bdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHB1ZmYlMjBwYXN0cnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`,
  `₹49 / Pattie`,
  49
);
selectedDish(
  `Mutton Pizza`,
  `Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature.`,
  `https://images.unsplash.com/photo-1566222496324-7d04b48d2585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2tlbiUyMHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
  `₹449 / Pizza`,
  449
);
selectedDish(
  `Chicken Tikka`,
  `It is traditionally small pieces of boneless chicken baked using skewers on a brazier called angeethi or over charcoal after marinating in Indian spices and dahi (yogurt)—essentially a boneless version of tandoori chicken`,
  `https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMHRpa2thfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
  `₹589 / Tikka`,
  589
);
selectedDish(
  `Egg Roll`,
  `Egg rolls are a variety of deep-fried appetizers served in American Chinese restaurants. An egg roll is a cylindrical, savory roll with shredded cabbage, chopped pork, and other fillings inside a thickly-wrapped wheat flour skin, which is fried in hot oil.`,
  `https://images.unsplash.com/photo-1559095240-55a16b2dda6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZWdnJTIwcm9sbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
  `₹179 / Roll`,
  179
);
selectedDish(
  `Chai`,
  `Masala chai is an Indian tea beverage made by boiling black tea in milk and water with a mixture of aromatic herbs and spices. Originating in India the beverage has gained worldwide popularity, becoming a feature in many coffee and tea houses.`,
  `https://images.unsplash.com/photo-1561336526-2914f13ceb36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
  `₹79 / Chai`,
  79
);
selectedDish(
  `Cofee`,
  `Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain flowering plants in the Coffea genus. From the coffee fruit, the seeds are separated to produce a stable, raw product: unroasted green coffee.`,
  `https://images.unsplash.com/photo-1618902515708-0972a312344b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZmVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
  `₹89 / Cofee`,
  89
);
selectedDish(
  `Coke`,
  `Coca-Cola, or Coke, is a carbonated soft drink manufactured by the Coca-Cola Company. Originally marketed as a temperance drink, it was invented in the late 19th century by John Stith Pemberton in Atlanta, Georgia.`,
  `https://images.unsplash.com/photo-1596803244618-8dbee441d70b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29rZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
  `₹79 / Coke`,
  79
);
selectedDish(
  `Red Bull`,
  `Originally available only in a single nondescript flavor sold in a tall and slim silver-blue can, called Red Bull Energy Drink, numerous variants of the drink were added over the course of time. Its very energetic and Wholesome Drink. `,
  `https://images.unsplash.com/photo-1546527050-7e08a7f44112?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJlZCUyMGJ1bGx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`,
  `₹149 / Red Bull`,
  149
);
