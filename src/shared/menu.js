const Menu = [
  {
    header: "Starters", //these are used to render the section headers for each portion of the menu
  },
  {
    title: "Thai Rolls",
    img: 'assets/menuitems/thairoll.jpeg',
    alt: 'Photo of Thai rolls',
    description:
      "Crispy springrolls filled with chicken or vegetables, served with house sweet sauce (available vegetarian).",
    price: "6.00",
  },
  {
    title: "Ravioli",
    img: 'assets/menuitems/ravioli.jpeg',
    alt: 'Photo of ravioli',
    description:
      "Steamed bite size pork and vegetable ravioli, served with ginger soy sauce.",
    price: "6.00",
  },
  {
    title: "Scallion Pancake",
    img: 'assets/menuitems/scallionpancake.jpeg',
    alt: 'Photo of scallion pancakes',
    description: "Crispy vegetarian pancake served with ginger soy sauce.",
    price: "6.00",
  },
  {
    title: "Crab Rangoon",
    img: 'assets/menuitems/crabrangoon.jpeg',
    alt: 'Photo of crab rangoon',
    description:
      "Crispy wonton filled with crabmeat, onion, carrot and cream cheese, served with pineapple sauce.",
    price: "6.00",
  },
  {
    title: "Tempura",
    img: 'assets/menuitems/tempura.jpeg',
    alt: 'Photo of tempura',
    description:
      "An assortment of vegetables or bite size chicken dipped in tempura batter, fried until golden brown, served with house sweet sauce.",
    price: "7.00",
  },
  {
    title: "Cozy Shrimp",
    img: 'assets/menuitems/cozyshrimp.jpeg',
    alt: 'Photo of cozy shrimp',
    description:
      "Marinated whole shrimp spring rolls served with pineapple sauce.",
    price: "6.00",
  },
  {
    title: "Satay Skewers",
    img: 'assets/menuitems/satayskewers.jpeg',
    alt: 'Photo of satay skewers',
    description:
      "Choice of marinated chicken or beef on bamboo sticks, served with homemade peanut sauce.",
    price: "7.00",
  },
  {
    title: "Combo Platter",
    img: 'assets/menuitems/comboplatter.jpeg',
    alt: 'Photo of combo platter',
    description:
      "Vegetarian Spring Rolls, crab rangoons, spicy wings, cozy shrimp, vegetable tempura, chicken satay and ravioli.",
    price: "18.00",
  },
  {
    title: "Koo Chai",
    img: 'assets/menuitems/koochai.jpeg',
    alt: 'Photo of koo chai',
    description:
      "Thai style vegetarian dumplings filled with chives, fried or steamed, served with spicy ginger soy sauce.",
    price: "6.00",
  },
  {
    title: "Fried Calamari",
    img: 'assets/menuitems/calamari.jpeg',
    alt: 'Photo of calamari',
    description:
      "Lightly battered calamari rings, served with sweet chili sauce.",
    price: "7.00",
  },
  {
    title: "Chicken Fingers",
    img: 'assets/menuitems/chickenfingers.jpeg',
    alt: 'Photo of chicken fingers',
    description:
      "Bite size chicken dipped in tempura batter, fried until golden brown, served with sweet and sour sauce.",
    price: "7.00",
  },
  {
    title: "Spicy Wings",
    img: 'assets/menuitems/spicywings.jpeg',
    alt: 'Photo of spicy wings',
    description: "Golden fried and glazed with sweet tangy spicy sauce.",
    price: "7.00",
    spice: "Mild", //items with spice levels will be rendered with stars next to their names according to the level of spice
  },
  {
    title: "Fried Wonton",
    img: 'assets/menuitems/wonton.jpeg',
    alt: 'Photo of wonton',
    description:
      "Ground chicken with egg skin, served with sweet & sour sauce.",
    price: "6.00",
  },
  {
    header: "Soups",
  },
  {
    title: "Tom Yam",
    img: 'assets/menuitems/tomyamsmall.jpeg',
    alt: 'Photo of tom yam',
    description:
      "Thai style hot and sour shrimp or chicken soup with mushrooms, scallions and cilantro.",
    price: "5.00",
    spice: "Mild",
  },
  {
    title: "Tom Khar",
    img: 'assets/menuitems/tomkhar.jpeg',
    alt: 'Photo of tom khar',
    description:
      "Mild chicken coconut soup with mushrooms, scallions and cilantro.",
    price: "5.00",
  },
  {
    title: "Wonton",
    img: 'assets/menuitems/wontonsoup.jpeg',
    alt: 'Photo of wonton soup',
    description:
      "Minced spiced pork wonton with scallions, cilantro, and crispy garlic in light broth.",
    price: "6.00",
  },
  {
    title: "Chicken Noodle",
    img: 'assets/menuitems/chickennoodle.jpeg',
    alt: 'Photo of chicken noodle soup',
    description:
      "Thin rice noodle with chicken, scallions, cilantro and crispy garlic in light broth.",
    price: "5.00",
  },
  {
    title: "Seafood Rice",
    img: 'assets/menuitems/seafoodrice.jpeg',
    alt: 'Photo of seafood rice',
    description:
      "An assortment of seafood with rice, celery and crispy garlic in light broth.",
    price: "5.00",
  },
  {
    header: "Noodles & Rice",
  },
  {
    noodleitem: true, //noodle items contain both a lunch and dinner price, and thus must be rendered differently
    title: "Pad Thai",
    img: 'assets/menuitems/padthai.jpeg',
    alt: 'Photo of pad thai',
    description:
      "Thin rice noodle with chicken, shrimp, ground peanuts, scallions, egg, and bean sprouts (available vegetarian).",
    lunchprice: "9.00",
    dinnerprice: "12.00",
  },
  {
    noodleitem: true,
    title: "Yellow River",
    img: 'assets/menuitems/yellowriver.jpeg',
    alt: 'Photo of yellow river',
    description:
      "Soft egg noodle with shrimp, scallop, squid, mussels, onions, carrots, scallions, mushrooms and bean sprout.",
    lunchprice: "11.00",
    dinnerprice: "14.00",
  },
  {
    noodleitem: true,
    title: "Kau Gai",
    img: 'assets/menuitems/kaugai.jpeg',
    alt: 'Photo of kau gai',
    description:
      "Wide rice noodle with chicken, scallions, cilantro, crispy garlic and egg.",
    lunchprice: "9.00",
    dinnerprice: "12.00",
  },
  {
    noodleitem: true,
    title: "Drunken Noodle (Chicken, Beef, Pork or Tofu)",
    img: 'assets/menuitems/drunkennoodle.jpeg',
    alt: 'Photo of drunken noodles',
    description:
      "Wide rice noodle with peppers, onions, bamboo shoots, basil leaves, egg and chili pepper sauce.",
    lunchprice: "9.00",
    dinnerprice: "12.00",
  },
  {
    noodleitem: true,
    title: "Bangkok Fried Rice",
    img: 'assets/menuitems/bangkokfriedrice.jpeg',
    alt: 'Photo of Bangkok fried rice',
    description:
      "With chicken, shrimp, green peas, tomatoes, onions, scallions and egg.",
    lunchprice: "9.00",
    dinnerprice: "12.00",
  },
  {
    noodleitem: true,
    title: "Sukiyaki Soup",
    img: 'assets/menuitems/sukiyaki.jpeg',
    alt: 'Photo of sukiyaki',
    description:
      "Spicy Thai soup with chicken, shrimp, napa cabbage, watercress, scallions, cilantro, egg and cellophane noodle in home sukiyaki broth.",
    lunchprice: "9.00",
    dinnerprice: "12.00",
    spice: "Hot",
  },
  {
    noodleitem: true,
    title: "Green Curry Fried Rice",
    img: 'assets/menuitems/greencurryrice.jpeg',
    alt: 'Photo of green curry fried rice',
    description:
      "With shrimp, chicken, red and green peppers, string beans, basil leaves, Thai herbs, egg and green curry paste.",
    lunchprice: "9.00",
    dinnerprice: "12.00",
    spice: "Hot",
  },
  {
    noodleitem: true,
    title: "Pad See Ew (Chicken, Beef, Pork or Tofu)",
    img: 'assets/menuitems/padseeew.jpeg',
    alt: 'Photo of pad see ew',
    description:
      "Wide rice noodle with broccoli, carrots and egg in sweet soy sauce.",
    lunchprice: "9.00",
    dinnerprice: "12.00",
  },
  {
    noodleitem: true,
    title: "Pik Pow Fried Rice",
    img: 'assets/menuitems/pikpowrice.jpeg',
    alt: 'Photo of pik pow fried rice',
    description:
      "With shrimp, squid, scallop, peppers, red onions, scallions, and egg in pik pow sauce, topped with cashew nuts.",
    lunchprice: "11.00",
    dinnerprice: "14.00",
    spice: "Mild",
  },
  {
    noodleitem: true,
    title: "Pineapple Fried Rice",
    img: 'assets/menuitems/pineapple.jpeg',
    alt: 'Photo of pineapple fried rice',
    description:
      "With chicken, shrimp, pineapple chunks, onions, snow peas, raisins, curry powder and egg.",
    lunchprice: "9.00",
    dinnerprice: "12.00",
  },
  {
    noodleitem: true,
    title: "Tom Yam Noodle Soup",
    img: 'assets/menuitems/tomyam.jpeg',
    alt: 'Photo of tom yam',
    description:
      "Thin rice noodle with ground chicken, shrimp, scallop, squid, mussels ground peanuts,bean sprouts, scallions, and cilantro in hot and sour broth.",
    lunchprice: "11.00",
    dinnerprice: "14.00",
    spice: "Mild",
  },
  {
    noodleitem: true,
    title: "Basil Fried Rice (Chicken, Beef, Pork or Tofu)",
    img: 'assets/menuitems/basilrice.jpeg',
    alt: 'Photo of basil fried rice',
    description:
      "With peppers, red onions, egg and basil leaves, Thai herbs, egg and green curry paste.",
    lunchprice: "9.00",
    dinnerprice: "12.00",
    spice: "Hot",
  },
  {
    noodleitem: true,
    title: "Vegetable pad thai",
    img: 'assets/menuitems/vegetablepadthai.jpeg',
    alt: 'Photo of vegetable pad thai',
    description:
      "Thin rice noodle with ground peanuts, scallions, egg, and bean sprouts.",
    lunchprice: "9.00",
    dinnerprice: "12.00",
  },
  {
    noodleitem: true,
    title: "Crispy pad thai (Available Vegetarian)",
    img: 'assets/menuitems/crispypadthai.jpeg',
    alt: 'Photo of crispy pad thai',
    description:
      "Crispy egg noodle with chicken, shrimp, ground peanuts, scallions, egg, and beans sprouts.",
    lunchprice: "9.00",
    dinnerprice: "12.00",
  },
  {
    header: "Create Your Own",
  },
  {
    subheader: "Served with your choice of protein and white or brown rice.", //subheaders will also have their own unique rendering
  },
  {
    protein: true, //indicates that this item is a type of protein for Create Your Own items
    title: "Chicken, Beef, Pork or Tofu",
    lunchprice: "8.00",
    dinnerprice: "12.00",
  },
  {
    protein: true,
    title: "Shrimp, Scallop or Squid",
    lunchprice: "9.00",
    dinnerprice: "16.00",
  },
  {
    protein: true,
    title: "Seafood or Duck",
    lunchprice: "10.00",
    dinnerprice: "16.00",
  },
  {
    protein: true,
    title: "Flounder Fillet",
    lunchprice: "10.00",
    dinnerprice: "20.00",
  },
  {
    createyourown: true, //indicates this item will be rendered without price, as prices are dependent on protein choice.
    title: "Yellow Curry",
    img: 'assets/menuitems/yellowriver.jpeg',
    alt: 'Photo of yellow river dish',
    spice: "Mild",
    description:
      "Peppers, pineapple chunks, yellow squash, zucchini, tomatoes and onions.",
  },
  {
    createyourown: true,
    title: "Rama Garden",
    img: 'assets/menuitems/ramagarden.jpeg',
    alt: 'Photo of rama garden dish',
    description: "Steamed assorted vegetable and a side of peanut sauce.",
  },
  {
    createyourown: true,
    title: "Garlic",
    img: 'assets/menuitems/garlic.jpeg',
    alt: 'Photo of create your own garlic dish',
    description: "Onion, peppers, tomatoes, snow peas and crispy garlic.",
  },
  {
    createyourown: true,
    title: "Massaman Curry",
    img: 'assets/menuitems/massamancurry.jpeg',
    alt: 'Photo of massaman curry',
    description: "Peppers, potato, onions, carrots, yellow squash and peanut.",
    spice: "Mild",
  },
  {
    createyourown: true,
    title: "Sweet and Sour",
    img: 'assets/menuitems/sweetandsour.jpeg',
    alt: 'Photo of sweet and sour dish',
    description: "Cucumbers, onions, tomatoes, pineapple chunks and scallions.",
  },
  {
    createyourown: true,
    title: "Seafood Rama Garden",
    img: 'assets/menuitems/seafoodgarden.jpeg',
    alt: 'Photo of seafood rama garden dish',
    description: "Steamed assorted vegetables and a side of peanut sauce.",
    spice: "Mild",
  },
  {
    createyourown: true,
    title: "Peppers",
    img: 'assets/menuitems/peppers.jpeg',
    alt: 'Photo of peppers dish',
    description: "Assorted peppers, onions and mushrooms.",
  },
  {
    createyourown: true,
    title: "Red Curry",
    img: 'assets/menuitems/redcurry.jpeg',
    alt: 'Photo of red curry dish',
    description:
      "Peppers, bamboo shoots, eggplants, string beans and basil leaves.",
    spice: "Mild",
  },
  {
    createyourown: true,
    title: "Broccoli",
    img: 'assets/menuitems/broccoli.jpeg',
    alt: 'Photo of broccoli dish',
    description: "Broccoli, carrots and mushrooms.",
  },
  {
    createyourown: true,
    title: "Basil",
    img: 'assets/menuitems/basil.jpeg',
    alt: 'Photo of basil dish',
    description: "Onions, peppers, mushrooms and basil leaves.",
    spice: "Hot",
  },
  {
    createyourown: true,
    title: "Panang Curry",
    img: 'assets/menuitems/panangcurry.jpeg',
    alt: 'Photo of panang curry',
    description:
      "Peppers, green peas, baby corns, snow peas, mushroom and basil leaves.",
    spice: "Mild",
  },
  {
    createyourown: true,
    title: "Ginger",
    img: 'assets/menuitems/ginger.jpeg',
    alt: 'Photo of ginger dish',
    description:
      "Shredded gingers, onions, mushrooms,peppers, and yellow bean sauce",
    spice: "Mild",
  },
  {
    header: "House Specials",
  },
  {
    subheader: "Served with your choice of white or brown rice.",
  },
  {
    title: "Chicken Cashew Nuts",
    img: 'assets/menuitems/cashewnuts.jpeg',
    alt: 'Photo of chicken cashew nut dish',
    description:
      "Sauteed chicken with peppers, pineapple chunks, onions, mushrooms, scallions, cashew nuts, and pik pow chili sauce.",
    price: "13.00",
    spice: "Mild",
  },
  {
    title: "Chicken Gaprow",
    img: 'assets/menuitems/chickengaprow.jpeg',
    alt: 'Photo of chicken gaprow',
    description:
      "Thai style stir-fried minced chicken with chili sauce, red and green peppers, red onions, and basil leaves.",
    price: "13.00",
    spice: "Mild",
  },
  {
    title: "Siamese Twin",
    img: 'assets/menuitems/siamesetwin.jpeg',
    alt: 'Photo of siamese twin dish',
    description:
      "Sauteed chicken and shrimp with peppers, onions, scallions, snow peas, and tomatoes in spicy sweet and sour sauce.",
    price: "14.00",
  },
  {
    title: "Beef Macadamia",
    img: 'assets/menuitems/beefmacadamia.jpeg',
    alt: 'Photo of beef macademia',
    description:
      "Marinated sliced beef with red peppers, mushrooms, shredded gingers, carrots, and scallions on bed of fresh watercress, napa top with macadamia nuts.",
    price: "14.00",
    spice: "Mild",
  },
  {
    title: "Pad Pik King",
    img: 'assets/menuitems/padpikking.jpeg',
    alt: 'Photo of pad pik king',
    description:
      "Stir-fried chicken and shrimp with crispy string beans, carrots, red peppers and red curry paste in tasty brown sauce topped with cashew nuts.",
    price: "14.00",
    spice: "Hot",
  },
  {
    title: "Bangkok Chicken",
    img: 'assets/menuitems/bangkokchicken.jpeg',
    alt: 'Photo of bangkok chicken',
    description:
      "Lightly battered bite size chicken glazed with homemade chef sauce, served with sautéed vegetables.",
    price: "13.00",
  },
  {
    title: "Crispy Chicken Basil",
    img: 'assets/menuitems/crispychickenbasil.jpeg',
    alt: 'Photo of crispy chicken basil',
    description:
      "Crispy battered chicken sauteed with onions, red & green peppers in spicy balls sauce.",
    price: "14.00",
  },
  {
    title: "Crispy Duck",
    img: 'assets/menuitems/crispyduck.jpeg',
    alt: 'Photo of crispy duck',
    description:
      "Half boneless crispy duck, glazed with homemade Chef’s sauce, served with sautéed vegetables.",
    price: "19.00",
  },
  {
    title: "Friendship",
    img: 'assets/menuitems/friendship.jpeg',
    alt: 'Photo of friendship dish',
    description:
      "Sauteed sliced chicken, beef, and pork with tomatoes, green peas, mushrooms and pineapple chunks in plum sauce, served on Sizzling hot plate.",
    price: "14.00",
  },
  {
    title: "Orange Chicken",
    img: 'assets/menuitems/orangechicken.jpeg',
    alt: 'Photo of orange chicken',
    description:
      "Crispy battered chicken glazed with homemade orange sauce, served with broccoli, carrots and baby corn.",
    price: "13.00",
  },
  {
    title: "Mango Curry",
    img: 'assets/menuitems/mangocurry.jpeg',
    alt: 'Photo of mango curry',
    description:
      "Fresh cubes mango simmered in yellow curry with chicken, shrimp, onions, peppers, yellow squash and tomatoes.",
    price: "14.00",
    spice: "Mild",
  },
  {
    title: "Thai BBQ",
    img: 'assets/menuitems/thaibbq.jpeg',
    alt: 'Photo of thai bbq',
    description:
      "Grilled marinated chicken breast, served with green papaya salad, sticky rice and chili dipping sauce.",
    price: "14.00",
  },
  {
    title: "Wild Boar Basil",
    img: 'assets/menuitems/wildboarbasil.jpeg',
    alt: 'Photo of wild boar basil dish',
    description:
      "Sauteed sliced pork with peppercorn, mushrooms, onions, peppers, basil leaves and Thai herbs.",
    price: "14.00",
    spice: "Hot",
  },
  {
    title: "Duck Choo Chee",
    img: 'assets/menuitems/duckchoochee.jpeg',
    alt: 'Photo of duck choo chee',
    description:
      "Sliced roasted duck in tasty choo chee curry sauce with snow peas, tomatoes, peppers, pineapple chunks and shredded lime leaves.",
    price: "19.00",
    spice: "Mild",
  },
  {
    title: "Tamarind Duck",
    img: 'assets/menuitems/tamarindduck.jpeg',
    alt: 'Photo of tamarind duck',
    description:
      "Sauteed sliced boneless duck in sweet tamarind sauce with pineapple, peppers, onions, mushrooms, gingers, green peas, tomatoes, scallions, and snow peas.",
    price: "19.00",
  },
  {
    header: "From the Sea",
  },
  {
    subheader: "Served with your choice of white or brown rice.",
  },
  {
    title: "Spicy Catfish",
    img: 'assets/menuitems/spicycatfish.jpeg',
    alt: 'Photo of spicy catfish',
    description:
      "Lightly battered fillet pieces of catfish quick sauteed with red and green peppers, string beans, basil leaves and Thai herbs.",
    price: "18.00",
    spice: "Mild",
  },
  {
    title: "Siam Chili Fish",
    img: 'assets/menuitems/siamchilifish.jpeg',
    alt: 'Photo of siam chili fish',
    description:
      "Lightly battered Tilapia fillet glazed with sweet chili sauce topped with crispy basil.",
    price: "18.00",
    spice: "Mild",
  },
  {
    title: "Siam Madness",
    img: 'assets/menuitems/siammadness.jpeg',
    alt: 'Photo of siam madness dish',
    description:
      "Sauteed shrimp, scallop, squid, salmon fillet and fresh mussels with onions, peppers, mushrooms in hot basil chili sauce, served on Sizzling hot plate.",
    price: "19.00",
    spice: "Hot and Spicy",
  },
  {
    title: "Spicy Mussels",
    img: 'assets/menuitems/spicymussels.jpeg',
    alt: 'Photo of spicy mussels',
    description:
      "Lightly battered fillet pieces of catfish quick sauteed with red and green peppers, string beans, basil leaves and Thai herbs.",
    price: "18.00",
    spice: "Hot",
  },
  {
    title: "Steamed Ginger Fish",
    img: 'assets/menuitems/steamedgingerfish.jpeg',
    alt: 'Photo of steamed finger fish',
    description:
      "Steamed tilapia fillet with onions, shredded gingers, mushrooms, scallions and red peppers in ginger soy sauce.",
    price: "18.00",
    spice: "Mild",
  },
  {
    title: "Steamed Lime Tilapia",
    img: 'assets/menuitems/steamedlimetilapia.jpeg',
    alt: 'Photo of steamed lime tilapia',
    description:
      "Sauteed shrimp, scallop, squid, salmon fillet and fresh mussels with onions, peppers, mushrooms in hot basil chili sauce, served on Sizzling hot plate.",
    price: "19.00",
    spice: "Hot",
  },
  {
    title: "Paradise Shrimp",
    img: 'assets/menuitems/paradiseshrimp.jpeg',
    alt: 'Photo of paradise shrimp',
    description:
      "Large shrimp sautéed in yellow curry sauce with onions, tomatoes, pineapple chunks, scallions, and egg, topped with crispy garlic.",
    price: "16.00",
    spice: "Mild",
  },
  {
    title: "Shrimp De Emerald",
    img: 'assets/menuitems/shrimpdeemerald.jpeg',
    alt: 'Photo of shrimp de emerald',
    description:
      "Sauteed large shrimp with fresh mushroom, red peppers, shredded ginger, and scallions, served on bed of steamed broccoli.",
    price: "16.00",
  },
  {
    title: "Bangkok Salmon",
    img: 'assets/menuitems/bangkoksalmon.jpeg',
    alt: 'Photo of bangkok salmon',
    description:
      "Grilled salmon fillet and glazed with sweet chili sauce, served with steamed broccoli.",
    price: "18.00",
  },
  {
    title: "Curry Salmon",
    img: 'assets/menuitems/currysalmon.jpeg',
    alt: 'Photo of curry salmon',
    description:
      "Steamed salmon fillet, glazed with house yellow curry sauce served with steamed broccoli, cauliflower, and sweet potatoes tempura.",
    price: "18.00",
    spice: "Mild",
  },
  {
    title: "Scallop Pik Pow",
    img: 'assets/menuitems/scalloppikpow.jpeg',
    alt: 'Photo of scallop pik pow',
    description:
      "Sauteed sea scallop with onions, peppers, and scallions in pik pow sauce.",
    price: "16.00",
    spice: "Mild",
  },
  {
    header: "Side Orders",
  },
  {
    side: true,
    title: "White Rice",
    price: "2.00",
  },
  {
    side: true,
    title: "Brown Rice",
    price: "2.00",
  },
  {
    side: true,
    title: "Sticky Rice",
    price: "3.00",
  },
  {
    header: "Kid's Menu",
  },
  {
    title: "Kid's MENU 1",
    img: 'assets/menuitems/kiditem1.jpeg',
    alt: "Photo of kid's menu 1",
    description:
      "Chicken finger & (F) Shumai Combo with rice and milk or orange juice.",
    price: "8.00",
  },
  {
    title: "Kid's MENU 2",
    img: 'assets/menuitems/kiditem2.jpeg',
    alt: "Photo of kid's menu 2",
    description:
      "Chicken Teriyaki & (F) Shumai Combo with rice and milk or orange juice.",
    price: "8.00",
  },
  {
    header: "Beverages",
  },
  {
    side: true,
    title: "Soda",
    description: "Coke, Diet Coke, Sprite, Ginger Ale or Root Beer",
    price: "2.00",
  },
  {
    side: true,
    title: "Milk / Chocolate Milk",
    price: "2.00",
  },
  {
    side: true,
    title: "Thai Iced Tea / Coffee",
    price: "2.50",
  },
  {
    side: true,
    title: "Hot Thai Tea / Coffee",
    price: "2.00",
  },
  {
    side: true,
    title: "Juice",
    price: "2.00",
  },
  {
    header: "Desserts",
  },
  {
    title: "Ice Cream",
    img: 'assets/menuitems/icecream.jpeg',
    alt: 'Photo of ice cream',
    description: "Ginger or Coconut (add sticky rice for an additional $2.00)",
    price: "3.00",
  },
  {
    title: "Fried Banana",
    img: 'assets/menuitems/friedbanana.jpeg',
    alt: 'Photo of fried banana',
    description: "(add ice cream for an additional $3.00)",
    price: "5.00",
  },
  {
    title: "Fried Ice Cream",
    img: 'assets/menuitems/friedicecream.jpeg',
    alt: 'Photo of fried ice cream',
    price: "5.00",
  },
  {
    title: "Mango with Sticky Rice",
    img: 'assets/menuitems/mangostickyrice.jpeg',
    alt: 'Photo of mango with sticky rice',
    price: "5.00",
    description: "(add ice cream for an additional $3.00)",
  },
];

export default Menu;
