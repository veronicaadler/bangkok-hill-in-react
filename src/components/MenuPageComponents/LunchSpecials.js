import React from "react";
import SpiceLevel from "./SpiceLevel";

function LunchSpecials() {
  return (
    <div>
      <div className="row mt-3">
        <div className="col text-center">
          <h1 className="mb-4 menuheadings">LUNCH SPECIALS</h1>
          <h4>Available Tuesday through Friday 11:30am-3:00pm</h4>
          <h5>
            Served with thai rolls, ravioli and choice of white or brown rice
          </h5>
          <img src="assets/menu.png" alt="Bangkok Hill Logo" />
        </div>
      </div>
      <div className="row">
        <div className="col-10 col-md-3">
          <h5>Chicken Cashew Nuts</h5>
          <p>
            Sauteed chicken with peppers, pineapple chunks, onions, mushrooms,
            scallions, cashew nuts, and pik pow chili sauce.
          </p>
        </div>
        <div className="col-2 col-md-1">
          <p className="text-nowrap">$ 10.00</p>
        </div>
        <div className="col-10 col-md-3">
          <h5>
            Pad Pik King<i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </h5>
          <p>
            Stir-fried chicken and shrimp with crispy stringbeans, carrots, red
            peppers and red curry paste in tasty brown sauce topped with cashew
            nuts.
          </p>
        </div>
        <div className="col-2 col-md-1">
          <p className="text-nowrap">$ 10.00</p>
        </div>
        <div className="col-10 col-md-3">
          <h5>
            Curry Salmon<i className="fa fa-star"></i>
          </h5>
          <p>
            Steamed salmon fillet, glazed with house yellow curry sauce served
            with steamed broccoli, cauliflower, and sweet potatoes tempura.
          </p>
        </div>
        <div className="col-2 col-md-1">
          <p className="text-nowrap">$ 11.00</p>
        </div>
      </div>
      <div className="row">
        <div className="col-10 col-md-3">
          <h5>Bangkok Chicken</h5>
          <p>
            Lightly battered bite size chicken glazed with homemade chef sauce,
            served with sautéed vegetables.
          </p>
        </div>
        <div className="col-2 col-md-1">
          <p className="text-nowrap">$ 10.00</p>
        </div>
        <div className="col-10 col-md-3">
          <h5>
            Tofu Pik Pow<i className="fa fa-star"></i>
          </h5>
          <p>
            Sauteed frieded tofu and an assorted of vegetable and pik pow sauce
            served with vegetarian spring rolls.
          </p>
        </div>
        <div className="col-2 col-md-1">
          <p className="text-nowrap">$ 10.00</p>
        </div>
        <div className="col-10 col-md-3">
          <h5>Tamarind Duck</h5>
          <p>
            Sauteed sliced boneless duck in sweet tamarind sauce with pineapple,
            peppers, onions, mushrooms, gingers, green peas, tomatoes,
            scallions, and snow peas.
          </p>
        </div>
        <div className="col-2 col-md-1">
          <p className="text-nowrap">$ 11.00</p>
        </div>
      </div>
      <div className="row">
        <div className="col-10 col-md-3">
          <h5>
            Siam Madness<i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </h5>
          <p>
            Lightly battered bite size chicken glazed with homemade chef sauce,
            served with sautéed vegetables.
          </p>
        </div>
        <div className="col-2 col-md-1">
          <p className="text-nowrap">$ 10.00</p>
        </div>
        <div className="col-10 col-md-3">
          <h5>Crispy Chicken Pad Thai</h5>
          <p>
            Thin rice noodle with crispy chicken, ground peanuts, scallions,
            egg, and bean sprouts.
          </p>
        </div>
        <div className="col-2 col-md-1">
          <p className="text-nowrap">$ 10.00</p>
        </div>
        <div className="col-10 col-md-3">
          <h5>Garlic (chicken, beef or tofu)</h5>
          <p>Onions, peppers, tomatoes, snow peas and crispy garlic.</p>
        </div>
        <div className="col-2 col-md-1">
          <p className="text-nowrap">$ 10.00</p>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-10 col-md-3">
          <h5>
            Yellow Curry (chicken, beef or tofu)<i className="fa fa-star"></i>
          </h5>
          <p>
            Peppers, pineapple chunks, yellow squash, zucchini, tomatoes, and
            onions.
          </p>
        </div>
        <div className="col-2 col-md-1">
          <p className="text-nowrap">$ 10.00</p>
        </div>
        <div className="col-10 col-md-3">
          <h5>Chicken Garpow</h5>
          <p>
            Thai style stir-fried minced chicken with chile sauce, red and green
            peppers, red onions, and basil leaves
          </p>
        </div>
        <div className="col-2 col-md-1">
          <p className="text-nowrap">$ 10.00</p>
        </div>
        <div className="col-10 col-md-3">
          <h5>Crispy fish with ginger</h5>
          <p>
            Crispy tilapia fillet with shredded ginger, onions, mushrooms, &
            peppers
          </p>
        </div>
        <div className="col-2 col-md-1">
          <p className="text-nowrap">$ 11.00</p>
        </div>
      </div>
      <SpiceLevel />
    </div>
  );
}

export default LunchSpecials;
