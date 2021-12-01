const Menu = [
  {
    header: "Starters", //these are used to render the section headers for each portion of the menu
  },
  {
    regmenuitem: true, //regular menu items contain a title, one regular price, and an optional description.
    title: "Thai Rolls",
    description:
      "Crispy springrolls filled with chicken or vegetables, served with house sweet sauce (available vegetarian).",
    price: "6.00",
  },
  {
    regmenuitem: true,
    title: "Ravioli",
    description:
      "Steamed bite size pork and vegetable ravioli, served with ginger soy sauce.",
    price: "6.00",
  },
  {
    regmenuitem: true,
    title: "Scallion Pancake",
    description: "Crispy vegetarian pancake served with ginger soy sauce.",
    price: "6.00",
  },
  {
    regmenuitem: true,
    title: "Crab Rangoon",
    description:
      "Crispy wonton filled with crabmeat, onion, carrot and cream cheese, served with pineapple sauce.",
    price: "6.00",
  },
  {
    regmenuitem: true,
    title: "Tempura",
    description:
      "An assortment of vegetables or bite size chicken dipped in tempura batter, fried until golden brown, served with house sweet sauce.",
    price: "7.00",
  },
  {
    regmenuitem: true,
    title: "Cozy Shrimp",
    description:
      "Marinated whole shrimp spring rolls served with pineapple sauce.",
    price: "6.00",
  },
  {
    regmenuitem: true,
    title: "Satay Skewers",
    description:
      "Choice of marinated chicken or beef on bamboo sticks, served with homemade peanut sauce.",
    price: "7.00",
  },
  {
    regmenuitem: true,
    id: 7,
    title: "Combo Platter",
    description:
      "Vegetarian Spring Rolls, crab rangoons, spicy wings, cozy shrimp, vegetable tempura, chicken satay and ravioli.",
    price: "18.00",
  },
  {
    regmenuitem: true,
    id: 8,
    title: "Koo Chai",
    description:
      "Thai style vegetarian dumplings filled with chives, fried or steamed, served with spicy ginger soy sauce.",
    price: "6.00",
  },
  {
    regmenuitem: true,
    title: "Fried Calamari",
    description:
      "Lightly battered calamari rings, served with sweet chili sauce.",
    price: "7.00",
  },
  {
    regmenuitem: true,
    title: "Chicken Fingers",
    description:
      "Bite size chicken dipped in tempura batter, fried until golden brown, served with sweet and sour sauce.",
    price: "7.00",
  },
  {
    regmenuitem: true,
    title: "Spicy Wings",
    description: "Golden fried and glazed with sweet tangy spicy sauce.",
    price: "7.00",
    spice: "Mild", //items with spice levels will be rendered with stars next to their names according to the level of spice
  },
  {
    regmenuitem: true,
    title: "Satay Skewers",
    description:
      "Choice of marinated chicken or beef on bamboo sticks, served with homemade peanuts sauce.",
    price: "7.00",
  },
  {
    regmenuitem: true,
    title: "Fried Wonton",
    description:
      "Ground chicken with egg skin, served with sweet & sour sauce.",
    price: "6.00",
  },
  {
    header: "Soups",
  },
  {
    regmenuitem: true,
    title: "Tom Yam",
    description:
      "Thai style hot and sour shrimp or chicken soup with mushrooms, scallions and cilantro.",
    price: "5.00",
    spice: "Mild",
  },
  {
    regmenuitem: true,
    title: "Tom Khar",
    description:
      "Mild chicken coconut soup with mushrooms, scallions and cilantro.",
    price: "5.00",
  },
  {
    regmenuitem: true,
    title: "Wonton",
    description:
      "Minced spiced pork wonton with scallions, cilantro, and crispy garlic in light broth.",
    price: "6.00",
  },
  {
    regmenuitem: true,
    title: "Chicken Noodle",
    description:
      "Thin rice noodle with chicken, scallions, cilantro and crispy garlic in light broth.",
    price: "5.00",
  },
  {
    regmenuitem: true,
    title: "Seafood Rice",
    description:
      "An assortment of seafood with rice, celery and crispy garlic in light broth.",
    price: "5.00",
  },
  {
    heading: "Noodles & Rice",
  },
  {
    noodleitem: true, //noodle items contain both a lunch and dinner price, and thus must be rendered differently
    title: "Pad Thai",
    description:
      "Thin rice noodle with chicken, shrimp, ground peanuts, scallions, egg, and bean sprouts (available vegetarian).",
    lunchprice: "9.00",
    dinnerprice: "12.00",
  },
  {
    noodleitem: true,
    title: "Yellow River",
    description:
      "Soft egg noodle with shrimp, scallop, squid, mussels, onions, carrots, scallions, mushrooms and bean sprout.",
    lunchprice: "11.00",
    dinnerprice: "14.00",
  },
  {
    noodleitem: true,
    title: "Kau Gai",
    description:
      "Wide rice noodle with chicken, scallions, cilantro, crispy garlic and egg.",
    lunchprice: "9.00",
    dinnerprice: "12.00",
  },
  {
    noodleitem: true,
    title: "Drunken Noodle (Chicken, Beef, Pork or Tofu)",
    description:
      "Wide rice noodle with peppers, onions, bamboo shoots, basil leaves, egg and chili pepper sauce.",
    lunchprice: "9.00",
    dinnerprice: "12.00",
  },
  {
    noodleitem: true,
    title: "Bangkok Fried Rice",
    description:
      "With chicken, shrimp, green peas, tomatoes, onions, scallions and egg.",
    lunchprice: "9.00",
    dinnerprice: "12.00",
  },
  {
    noodleitem: true,
    title: "Sukiyaki Soup",
    description:
      "Spicy Thai soup with chicken, shrimp, napa cabbage, watercress, scallions, cilantro, egg and cellophane noodle in home sukiyaki broth.",
    lunchprice: "9.00",
    dinnerprice: "12.00",
    spice: "Hot",
  },
  {
    noodleitem: true,
    title: "Green Curry Fried Rice",
    description:
      "With shrimp, chicken, red and green peppers, string beans, basil leaves, Thai herbs, egg and green curry paste.",
    lunchprice: "9.00",
    dinnerprice: "12.00",
    spice: "Hot",
  },
  {
    noodleitem: true,
    title: "Pad See Ew (Chicken, Beef, Pork or Tofu)",
    description:
      "Wide rice noodle with broccoli, carrots and egg in sweet soy sauce.",
    lunchprice: "9.00",
    dinnerprice: "12.00",
  },
  {
    noodleitem: true,
    title: "Pik Pow Fried Rice",
    description:
      "With shrimp, squid, scallop, peppers, red onions, scallions, and egg in pik pow sauce, topped with cashew nuts.",
    lunchprice: "11.00",
    dinnerprice: "14.00",
    spice: "Mild",
  },
  {
    noodleitem: true,
    title: "Pineapple Fried Rice",
    description:
      "With chicken, shrimp, pineapple chunks, onions, snow peas, raisins, curry powder and egg.",
    lunchprice: "9.00",
    dinnerprice: "12.00",
  },
  {
    noodleitem: true,
    title: "Tom Yam Noodle Soup",
    description:
      "Thin rice noodle with ground chicken, shrimp, scallop, squid, mussels ground peanuts,bean sprouts, scallions, and cilantro in hot and sour broth.",
    lunchprice: "11.00",
    dinnerprice: "14.00",
    spice: "Mild",
  },
  {
    noodleitem: true,
    title: "Basil Fried Rice (Chicken, Beef, Pork or Tofu)",
    description:
      "With peppers, red onions, egg and basil leaves, Thai herbs, egg and green curry paste.",
    lunchprice: "9.00",
    dinnerprice: "12.00",
    spice: "Hot",
  },
  {
    noodleitem: true,
    title: "Vegetable pad thai",
    description:
      "Thin rice noodle with ground peanuts, scallions, egg, and bean sprouts.",
    lunchprice: "9.00",
    dinnerprice: "12.00",
  },
  {
    noodleitem: true,
    title: "Crispy pad thai (Available Vegetarian)",
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
    proteinitem: true,
    title: "Flounder Fillet",
    lunchprice: "10.00",
    dinnerprice: "20.00",
  },
  {
    createyourown: true, //indicates this item will be rendered without price, as prices are dependent on protein choice.
    title: "Yellow Curry",
    spice: "Mild",
    description:
      "Peppers, pineapple chunks, yellow squash, zucchini, tomatoes and onions.",
  },
  {
    createyourown: true,
    title: "Rama Garden",
    description: "Steamed assorted vegetable and a side of peanut sauce.",
  },
  {
    createyourown: true,
    title: "Garlic",
    description: "Onion, peppers, tomatoes, snow peas and crispy garlic.",
  },
  {
    createyourown: true,
    title: "Massaman Curry",
    description: "Peppers, potato, onions, carrots, yellow squash and peanut.",
    spice: "Mild",
  },
  {
    createyourown: true,
    title: "Sweet and Sour",
    description: "Cucumbers, onions, tomatoes, pineapple chunks and scallions.",
  },
  {
    createyourown: true,
    title: "Seafood Rama Garden",
    description: "Steamed assorted vegetables and a side of peanut sauce.",
    spice: "Mild",
  },
  {
    createyourown: true,
    title: "Peppers",
    description: "Assorted peppers, onions and mushrooms.",
  },
  {
    createyourown: true,
    title: "Red Curry",
    description:
      "Peppers, bamboo shoots, eggplants, string beans and basil leaves.",
    spice: "Mild",
  },
  {
    createyourown: true,
    title: "Broccoli",
    description: "Broccoli, carrots and mushrooms.",
  },
  {
    createyourown: true,
    title: "Basil",
    description: "Onions, peppers, mushrooms and basil leaves.",
    spice: "Hot",
  },
  {
    createyourown: true,
    title: "Panang Curry",
    description:
      "Peppers, green peas, baby corns, snow peas, mushroom and basil leaves.",
    spice: "Mild",
  },
  {
    createyourown: true,
    title: "Ginger",
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
    regmenuitem: true,
    title: "Chicken Cashew Nuts",
    description:
      "Sauteed chicken with peppers, pineapple chunks, onions, mushrooms, scallions, cashew nuts, and pik pow chili sauce.",
    price: "13.00",
    spice: "Mild",
  },
  {
    regmenuitem: true,
    title: "Chicken Gaprow",
    description:
      "Thai style stir-fried minced chicken with chili sauce, red and green peppers, red onions, and basil leaves.",
    price: "13.00",
    spice: "Mild",
  },
  {
    regmenuitem: true,
    title: "Siamese Twin",
    description:
      "Sauteed chicken and shrimp with peppers, onions, scallions, snow peas, and tomatoes in spicy sweet and sour sauce.",
    price: "14.00",
  },
  {
    regmenuitem: true,
    title: "Beef Macadamia",
    description:
      "Marinated sliced beef with red peppers, mushrooms, shredded gingers, carrots, and scallions on bed of fresh watercress, napa top with macadamia nuts.",
    price: "14.00",
    spice: "Mild",
  },
  {
    regmenuitem: true,
    title: "Pad Pik King",
    description:
      "Stir-fried chicken and shrimp with crispy string beans, carrots, red peppers and red curry paste in tasty brown sauce topped with cashew nuts.",
    price: "14.00",
    spice: "Hot",
  },
  {
    regmenuitem: true,
    title: "Bangkok Chicken",
    description:
      "Lightly battered bite size chicken glazed with homemade chef sauce, served with sautéed vegetables.",
    price: "13.00",
  },
  {
    regmenuitem: true,
    title: "Crispy Chicken Basil",
    description:
      "Crispy battered chicken sauteed with onions, red & green peppers in spicy balls sauce.",
    price: "14.00",
  },
  {
    regmenuitem: true,
    title: "Crispy Duck",
    description:
      "Half boneless crispy duck, glazed with homemade Chef’s sauce, served with sautéed vegetables.",
    price: "19.00",
  },
  {
    regmenuitem: true,
    title: "Friendship",
    description:
      "Sauteed sliced chicken, beef, and pork with tomatoes, green peas, mushrooms and pineapple chunks in plum sauce, served on Sizzling hot plate.",
    price: "14.00",
  },
  {
    regmenuitem: true,
    title: "Orange Chicken",
    description:
      "Crispy battered chicken glazed with homemade orange sauce, served with broccoli, carrots and baby corn.",
    price: "13.00",
  },
  {
    regmenuitem: true,
    title: "Mango Curry",
    description:
      "Fresh cubes mango simmered in yellow curry with chicken, shrimp, onions, peppers, yellow squash and tomatoes.",
    price: "14.00",
    spice: "Mild",
  },
  {
    regmenuitem: true,
    title: "Thai BBQ",
    description:
      "Grilled marinated chicken breast, served with green papaya salad, sticky rice and chili dipping sauce.",
    price: "14.00",
  },
  {
    regmenuitem: true,
    title: "Wild Boar Basil",
    description:
      "Sauteed sliced pork with peppercorn, mushrooms, onions, peppers, basil leaves and Thai herbs.",
    price: "14.00",
    spice: "Hot",
  },
  {
    regmenuitem: true,
    title: "Duck Choo Chee",
    description:
      "Sliced roasted duck in tasty choo chee curry sauce with snow peas, tomatoes, peppers, pineapple chunks and shredded lime leaves.",
    price: "19.00",
    spice: "Mild",
  },
  {
    regmenuitem: true,
    title: "Tamarind Duck",
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
    regmenuitem: true,
    title: "Spicy Catfish",
    description:
      "Lightly battered fillet pieces of catfish quick sauteed with red and green peppers, string beans, basil leaves and Thai herbs.",
    price: "18.00",
    spice: "Mild",
  },
  {
    regmenuitem: true,
    title: "Siam Chili Fish",
    description:
      "Lightly battered Tilapia fillet glazed with sweet chili sauce topped with crispy basil.",
    price: "18.00",
    spice: "Mild",
  },
  {
    regmenuitem: true,
    title: "Siam Madness",
    description:
      "Sauteed shrimp, scallop, squid, salmon fillet and fresh mussels with onions, peppers, mushrooms in hot basil chili sauce, served on Sizzling hot plate.",
    price: "19.00",
    spice: "Hot and Spicy",
  },
  {
    regmenuitem: true,
    title: "Spicy Mussels",
    description:
      "Lightly battered fillet pieces of catfish quick sauteed with red and green peppers, string beans, basil leaves and Thai herbs.",
    price: "18.00",
    spice: "Hot",
  },
  {
    regmenuitem: true,
    title: "Steamed Ginger Fish",
    description:
      "Steamed tilapia fillet with onions, shredded gingers, mushrooms, scallions and red peppers in ginger soy sauce.",
    price: "18.00",
    spice: "Mild",
  },
  {
    regmenuitem: true,
    title: "Steamed Lime Tilapia",
    description:
      "Sauteed shrimp, scallop, squid, salmon fillet and fresh mussels with onions, peppers, mushrooms in hot basil chili sauce, served on Sizzling hot plate.",
    price: "19.00",
    spice: "Hot",
  },
  {
    regmenuitem: true,
    title: "Spicy Mussels",
    description:
      "Lightly battered fillet pieces of catfish quick sauteed with red and green peppers, string beans, basil leaves and Thai herbs.",
    price: "18.00",
    spice: "Hot",
  },
  {
    regmenuitem: true,
    title: "Paradise Shrimp",
    description:
      "Large shrimp sautéed in yellow curry sauce with onions, tomatoes, pineapple chunks, scallions, and egg, topped with crispy garlic.",
    price: "16.00",
    spice: "Mild",
  },
  {
    regmenuitem: true,
    title: "Shrimp De Emerald",
    description:
      "Sauteed large shrimp with fresh mushroom, red peppers, shredded ginger, and scallions, served on bed of steamed broccoli.",
    price: "16.00",
  },
  {
    regmenuitem: true,
    title: "Bangkok Salmon",
    description:
      "Grilled salmon fillet and glazed with sweet chili sauce, served with steamed broccoli.",
    price: "18.00",
  },
  {
    regmenuitem: true,
    title: "Curry Salmon",
    description:
      "Steamed salmon fillet, glazed with house yellow curry sauce served with steamed broccoli, cauliflower, and sweet potatoes tempura.",
    price: "18.00",
    spice: "Mild",
  },
  {
    regmenuitem: true,
    title: "Scallop Pik Pow",
    description:
      "Sauteed sea scallop with onions, peppers, and scallions in pik pow sauce.",
    price: "16.00",
    spice: "Mild",
  },
  {
    header: "Side Orders",
  },
  {
    regmenuitem: true,
    title: "White Rice",
    price: "2.00",
  },
  {
    regmenuitem: true,
    title: "Brown Rice",
    price: "2.00",
  },
  {
    regmenuitem: true,
    title: "Sticky Rice",
    price: "3.00",
  },
  {
    header: "Kid's Menu",
  },
  {
    regmenuitem: true,
    title: "Kid's MENU 1",
    description:
      "Chicken finger & (F) Shumai Combo with rice and milk or orange juice.",
    price: "8.00",
  },
  {
    regmenuitem: true,
    title: "Kid's MENU 2",
    description:
      "Chicken Teriyaki & (F) Shumai Combo with rice and milk or orange juice.",
    price: "8.00",
  },
  {
    header: "Beverages",
  },
  {
    regmenuitem: true,
    title: "Soda",
    description: "Coke, Diet Coke, Sprite, Ginger Ale or Root Beer",
    price: "2.00",
  },
  {
    regmenuitem: true,
    title: "Milk / Chocolate Milk",
    price: "2.00",
  },
  {
    regmenuitem: true,
    title: "Thai Iced Tea / Coffee",
    price: "2.50",
  },
  {
    regmenuitem: true,
    title: "Hot Thai Tea / Coffee",
    price: "2.00",
  },
  {
    regmenuitem: true,
    title: "Juice",
    price: "2.00",
  },
  {
    header: "Desserts",
  },
  {
    regmenuitem: true,
    title: "Ice Cream",
    description: "Ginger or Coconut (add sticky rice for an additional $2.00)",
    price: "3.00",
  },
  {
    regmenuitem: true,
    title: "Fried Banana",
    description: "(add ice cream for an additional $3.00)",
    price: "5.00",
  },
  {
    regmenuitem: true,
    title: "Fried Ice Cream",
    price: "5.00",
  },
  {
    regmenuitem: true,
    title: "Mango with Sticky Rice",
    price: "5.00",
    description: "(add ice cream for an additional $3.00)",
  },
];

export default Menu;
