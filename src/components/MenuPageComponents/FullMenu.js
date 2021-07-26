import React from "react";
import SpiceLevel from "./SpiceLevel"

function FullMenu() {
    return (
        <div class="container-fluid">
            <div class="row mt-3">
                <div class="col text-center">
                    <h1 class="mb-0">BANGKOK HILL MENU</h1>
                    <img src="assets/menu.png" alt="Bangkok Hill Logo" />
                </div>
            </div>
            <div class="row">
                <div class="col text-center">
                    <h3 class="menuheadings">STARTERS</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-md-3">
                    <h5>Thai Rolls</h5>
                    <p>Crispy springrolls filled with chicken or vegetables, served with house sweet
                        sauce (available vegetarian).</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 6.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Ravioli</h5>
                    <p>Steamed bite size pork and vegetable ravioli, served with ginger soy sauce.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 6.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Scallion Pancake</h5>
                    <p>Crispy vegetarian pancake served with ginger soy sauce.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 6.00</p>
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-md-3">
                    <h5>Crab Rangoon</h5>
                    <p>Crispy wonton filled with crabmeat, onion, carrot and cream cheese, served with
                        pineapple sauce.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 6.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Tempura</h5>
                    <p>An assortment of vegetables or bite size chicken dipped in tempura batter, fried
                        until golden brown, served with house sweet sauce.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 7.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Cozy Shrimp</h5>
                    <p>Marinated whole shrimp spring rolls served with pineapple sauce.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 6.00</p>
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-md-3">
                    <h5>Satay Skewers</h5>
                    <p>Choice of marinated chicken or beef on bamboo sticks, served with homemade peanut
                        sauce.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 7.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Combo Platter</h5>
                    <p>Vegetarian Spring Rolls, crab rangoons, spicy wings, cozy shrimp, vegetable
                        tempura, chicken satay and ravioli.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 18.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Koo Chai</h5>
                    <p>Thai style vegetarian dumplings filled with chives, fried or steamed, served with
                        spicy ginger soy sauce.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 6.00</p>
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-md-3">
                    <h5>Fried Calamari</h5>
                    <p>Lightly battered calamari rings, served with sweet chili sauce.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 7.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Chicken Fingers</h5>
                    <p>Bite size chicken dipped in tempura batter, fried until golden brown, served with
                        sweet and sour sauce.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 7.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Spicy Wings<i class="fa fa-star"></i></h5>
                    <p>Golden fried and glazed with sweet tangy spicy sauce.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 7.00</p>
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-md-3">
                    <h5>Satay Skewers</h5>
                    <p>Choice of marinated chicken or beef on bamboo sticks, served with homemade
                        peanuts sauce.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 7.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Fried Wonton</h5>
                    <p>Ground chicken with egg skin,served with sweet & sour sauce.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 6.00</p>
                </div>
            </div>
            <div class="row">
                <div class="col text-center mb-3 pb-2">
                    <h3 class="menuheadings">SOUPS</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-md-3">
                    <h5>Tom Yam<i class="fa fa-star"></i></h5>
                    <p>Thai style hot and sour <strong>shrimp or chicken</strong> soup with mushrooms,
                        scallions and cilantro.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 5.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Tom Khar</h5>
                    <p>Mild chicken coconut soup with mushrooms, scallions and cilantro.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 5.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Wonton</h5>
                    <p>Minced spiced pork wonton with scallions, cilantro, and crispy garlic in light
                        broth.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 6.00</p>
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-md-3">
                    <h5>Chicken Noodle</h5>
                    <p>TThin rice noodle with chicken, scallions, cilantro and crispy garlic in light
                        broth.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 5.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Seafood Rice</h5>
                    <p>An assortment of seafood with rice, celery and crispy garlic in light broth.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 5.00</p>
                </div>
            </div>
            <div class="row">
                <div class="col text-center mb-3 pb-2">
                    <h3 class="menuheadings">NOODLES & RICE</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-sm-7 col-md-3">
                    <h5>Pad Thai</h5>
                    <p>Thin rice noodle with chicken, shrimp, ground peanuts, scallions, egg, and bean
                        sprouts.(available vegetarian).</p>
                </div>
                <div class="col-2 col-sm-3">
                    <div class="row">
                        <div class="col">
                            <p>Lunch</p>
                            <p class="text-nowrap">$ 9.00</p>
                        </div>
                        <div class="col">
                            <p>Dinner</p>
                            <p class="text-nowrap">$ 12.00</p>
                        </div>
                    </div>
                </div>
                <div class="col-10 col-sm-7 col-md-3">
                    <h5>Yellow River</h5>
                    <p>Soft egg noodle with shrimp, scallop, squid, mussels, onions, carrots, scallions,
                        mushrooms and bean sprout.</p>
                </div>
                <div class="col-2 col-sm-3">
                    <div class="row">
                        <div class="col">
                            <p>Lunch</p>
                            <p class="text-nowrap">$ 11.00</p>
                        </div>
                        <div class="col">
                            <p>Dinner</p>
                            <p class="text-nowrap">$ 14.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-sm-7 col-md-3">
                    <h5>Kau Gai</h5>
                    <p>Wide rice noodle with chicken, scallions, cilantro, crispy garlic and egg.</p>
                </div>
                <div class="col-2 col-sm-3">
                    <div class="row">
                        <div class="col">
                            <p>Lunch</p>
                            <p class="text-nowrap">$ 9.00</p>
                        </div>
                        <div class="col">
                            <p>Dinner</p>
                            <p class="text-nowrap">$ 12.00</p>
                        </div>
                    </div>
                </div>
                <div class="col-10 col-sm-7 col-md-3">
                    <h5>Drunken Noodle (Chicken, Beef, Pork or Tofu)</h5>
                    <p>Wide rice noodle with peppers, onions, bamboo shoots, basil leaves, egg and chili
                        pepper sauce.</p>
                </div>
                <div class="col-2 col-sm-3">
                    <div class="row">
                        <div class="col">
                            <p>Lunch</p>
                            <p class="text-nowrap">$ 9.00</p>
                        </div>
                        <div class="col">
                            <p>Dinner</p>
                            <p class="text-nowrap">$ 12.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-sm-7 col-md-3">
                    <h5>Bangkok Fried Rice</h5>
                    <p>With chicken, shrimp, green peas, tomatoes, onions, scallions and egg.</p>
                </div>
                <div class="col-2 col-sm-3">
                    <div class="row">
                        <div class="col">
                            <p>Lunch</p>
                            <p class="text-nowrap">$ 9.00</p>
                        </div>
                        <div class="col">
                            <p>Dinner</p>
                            <p class="text-nowrap">$ 12.00</p>
                        </div>
                    </div>
                </div>
                <div class="col-10 col-sm-7 col-md-3">
                    <h5>Sukiyaki Soup<i class="fa fa-star"></i><i class="fa fa-star"></i></h5>
                    <p>Spicy Thai soup with chicken, shrimp, napa cabbage, watercress, scallions,
                        cilantro, egg and cellophane noodle in home sukiyaki broth.</p>
                </div>
                <div class="col-2 col-sm-3">
                    <div class="row">
                        <div class="col">
                            <p>Lunch</p>
                            <p class="text-nowrap">$ 11.00</p>
                        </div>
                        <div class="col">
                            <p>Dinner</p>
                            <p class="text-nowrap">$ 13.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-sm-7 col-md-3">
                    <h5>Green Curry Fried Rice<i class="fa fa-star"></i><i class="fa fa-star"></i></h5>
                    <p>With shrimp, chicken, red and green peppers, string beans, basil leaves, Thai
                        herbs, egg and green curry paste.</p>
                </div>
                <div class="col-2 col-sm-3">
                    <div class="row">
                        <div class="col">
                            <p>Lunch</p>
                            <p class="text-nowrap">$ 9.00</p>
                        </div>
                        <div class="col">
                            <p>Dinner</p>
                            <p class="text-nowrap">$ 12.00</p>
                        </div>
                    </div>
                </div>
                <div class="col-10 col-sm-7 col-md-3">
                    <h5>Pad See Ew (Chicken, Beef, Pork or Tofu)</h5>
                    <p>Wide rice noodle with broccoli, carrots and egg in sweet soy sauce.</p>
                </div>
                <div class="col-2 col-sm-3">
                    <div class="row">
                        <div class="col">
                            <p>Lunch</p>
                            <p class="text-nowrap">$ 9.00</p>
                        </div>
                        <div class="col">
                            <p>Dinner</p>
                            <p class="text-nowrap">$ 12.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-sm-7 col-md-3">
                    <h5>Pik Pow Fried Rice<i class="fa fa-star"></i></h5>
                    <p>With shrimp, squid, scallop, peppers, red onions, scallions, and egg in pik pow
                        sauce , topped with cashew nuts.</p>
                </div>
                <div class="col-2 col-sm-3">
                    <div class="row">
                        <div class="col">
                            <p>Lunch</p>
                            <p class="text-nowrap">$ 11.00</p>
                        </div>
                        <div class="col">
                            <p>Dinner</p>
                            <p class="text-nowrap">$ 14.00</p>
                        </div>
                    </div>
                </div>
                <div class="col-10 col-sm-7 col-md-3">
                    <h5>Pineapple Fried Rice</h5>
                    <p>With chicken, shrimp, pineapple chunks, onions, snow peas, raisins, curry powder
                        and egg.</p>
                </div>
                <div class="col-2 col-sm-3">
                    <div class="row">
                        <div class="col">
                            <p>Lunch</p>
                            <p class="text-nowrap">$ 9.00</p>
                        </div>
                        <div class="col">
                            <p>Dinner</p>
                            <p class="text-nowrap">$ 12.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-sm-7 col-md-3">
                    <h5>Tom Yam Noodle Soup<i class="fa fa-star"></i></h5>
                    <p>Thin rice noodle with ground chicken, shrimp, scallop, squid, mussels ground
                        peanuts,bean sprouts, scallions, and cilantro in hot and sour broth.</p>
                </div>
                <div class="col-2 col-sm-3">
                    <div class="row">
                        <div class="col">
                            <p>Lunch</p>
                            <p class="text-nowrap">$ 11.00</p>
                        </div>
                        <div class="col">
                            <p>Dinner</p>
                            <p class="text-nowrap">$ 14.00</p>
                        </div>
                    </div>
                </div>
                <div class="col-10 col-sm-7 col-md-3">
                    <h5>Basil Fried Rice (Chicken, Beef, Pork or Tofu)<i class="fa fa-star"></i><i
                            class="fa fa-star"></i></h5>
                    <p>With peppers, red onions, egg and basil leaves, Thai herbs, egg and green curry
                        paste.</p>
                </div>
                <div class="col-2 col-sm-3">
                    <div class="row">
                        <div class="col">
                            <p>Lunch</p>
                            <p class="text-nowrap">$ 9.00</p>
                        </div>
                        <div class="col">
                            <p>Dinner</p>
                            <p class="text-nowrap">$ 12.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-sm-7 col-md-3">
                    <h5>Vegetable pad thai</h5>
                    <p>TThin rice noodle with ground peanuts, scallions, egg, and bean sprouts.</p>
                </div>
                <div class="col-2 col-sm-3">
                    <div class="row">
                        <div class="col">
                            <p>Lunch</p>
                            <p class="text-nowrap">$ 9.00</p>
                        </div>
                        <div class="col">
                            <p>Dinner</p>
                            <p class="text-nowrap">$ 12.00</p>
                        </div>
                    </div>
                </div>
                <div class="col-10 col-sm-7 col-md-3">
                    <h5>Crispy pad thai (Available Vegetarian)</h5>
                    <p>Crispy egg noodle with chicken, shrimp, ground peanusts, scallions, egg, and
                        beans sprouts.</p>
                </div>
                <div class="col-2 col-sm-3">
                    <div class="row">
                        <div class="col">
                            <p>Lunch</p>
                            <p class="text-nowrap">$ 9.00</p>
                        </div>
                        <div class="col">
                            <p>Dinner</p>
                            <p class="text-nowrap">$ 12.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-sm-7 col-md-3">
                    <h5>Crispy chicken pad thai</h5>
                    <p>Thin rice noodle with crispy chicken, ground peanuts, scallions, egg, and bean
                        sprouts.</p>
                </div>
                <div class="col-2 col-sm-3">
                    <div class="row">
                        <div class="col">
                            <p>Lunch</p>
                            <p class="text-nowrap">$ 9.00</p>
                        </div>
                        <div class="col">
                            <p>Dinner</p>
                            <p class="text-nowrap">$ 12.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col text-center">
                    <h3 class="menuheadings mb-3">Create Your Own</h3>
                    <h5 class="mb-5">Served with your choice of white or brown rice.</h5>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <table class="table table-borderless mb-5">
                        <thead>
                            <tr>
                                <th scope="col">Your Choice Of:</th>
                                <th scope="col">Lunch</th>
                                <th scope="col">Dinner</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Chicken, Beef, Pork or Tofu</th>
                                <td>$ 8.00</td>
                                <td>$ 12.00</td>
                            </tr>
                            <tr>
                                <th scope="row">Shrimp, Scallop or Squid</th>
                                <td>$ 9.00</td>
                                <td>$ 16.00</td>
                            </tr>
                            <tr>
                                <th scope="row">Seafood or Duck</th>
                                <td class="text-nowrap">$ 10.00</td>
                                <td class="text-nowrap">$ 19.00</td>
                            </tr>
                            <tr>
                                <th scope="row">Flounder Fillet</th>
                                <td>$ 10.00</td>
                                <td class="text-nowrap">$ 20.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-md-4">
                    <h5>Yellow Curry<i class="fa fa-star"></i></h5>
                    <p>Peppers, pineapple chunks, yellow squash, zucchini, tomatoes and onions.</p>
                </div>
                <div class="col-10 col-md-4">
                    <h5>Rama Garden</h5>
                    <p>Steamed assorted vegetable and a side of peanut sauce.</p>
                </div>
                <div class="col-10 col-md-4">
                    <h5>Garlic</h5>
                    <p>Onion, peppers, tomatoes, snow peas and crispy garlic.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-md-4">
                    <h5>Massaman Curry<i class="fa fa-star"></i></h5>
                    <p>Peppers, potato, onions, carrots, yellow squash and peanut.</p>
                </div>
                <div class="col-10 col-md-4">
                    <h5>Sweet and Sour</h5>
                    <p>Cucumbers, onions, tomatoes, pineapple chunks and scallions.</p>
                </div>
                <div class="col-10 col-md-4">
                    <h5>Seafood Rama Garden<i class="fa fa-star"></i></h5>
                    <p>Steamed assorted vegetables and a side of peanut sauce.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-md-4">
                    <h5>Peppers</h5>
                    <p>Assorted peppers, onions and mushrooms.</p>
                </div>
                <div class="col-10 col-md-4">
                    <h5>Red Curry<i class="fa fa-star"></i></h5>
                    <p>Peppers, bamboo shoots, eggplants, string beans and basil leaves.</p>
                </div>
                <div class="col-10 col-md-4">
                    <h5>Broccoli</h5>
                    <p>Broccoli, carrots and mushrooms</p>
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-md-4">
                    <h5>Basil<i class="fa fa-star"></i><i class="fa fa-star"></i></h5>
                    <p>Onions, peppers, mushrooms and basil leaves.</p>
                </div>
                <div class="col-10 col-md-4">
                    <h5>Panang Curry<i class="fa fa-star"></i></h5>
                    <p>Peppers, green peas, baby corns, snow peas, mushroom and basil leaves.</p>
                </div>
                <div class="col-10 col-md-4">
                    <h5>Ginger<i class="fa fa-star"></i></h5>
                    <p>Shredded gingers, onions, mushrooms,peppers, and yellow bean sauce</p>
                </div>
            </div>
            <div class="row">
                <div class="col text-center">
                    <h3 class="menuheadings mb-3">House Specials</h3>
                    <h5 class="mb-5">Served with your choice of white or brown rice.</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-md-3">
                    <h5>Chicken Cashew Nuts<i class="fa fa-star"></i></h5>
                    <p>Sauteed chicken with peppers, pineapple chunks, onions, mushrooms, scallions,
                        cashew nuts, and pik pow chili sauce.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 13.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Chicken Gaprow<i class="fa fa-star"></i></h5>
                    <p>Thai style stir-fried minced chicken with chili sauce, red and green peppers, red
                        onions, and basil leaves.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 13.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Siamese Twin</h5>
                    <p>Sauteed chicken and shrimp with peppers, onions, scallions, snow peas, and
                        tomatoes in spicy sweet and sour sauce.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 14.00</p>
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-md-3">
                    <h5>Beef Macadamia<i class="fa fa-star"></i></h5>
                    <p>Marinated sliced beef with red peppers, mushrooms, shredded gingers, carrots, and
                        scallions on bed of fresh watercress, napa topwith macadamia nuts.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 14.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Pad Pik King<i class="fa fa-star"></i><i class="fa fa-star"></i></h5>
                    <p>Stir-fried chicken and shrimp with crispy string beans, carrots, red peppers and
                        red curry paste in tasty brown sauce topped with cashew nuts.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 14.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Bangkok Chicken</h5>
                    <p>Lightly battered bite size chicken glazed with homemade chef sauce, served with
                        sautéed vegetables.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 13.00</p>
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-md-3">
                    <h5>Crispy Chicken Basil</h5>
                    <p>Crispy battered chicken sauteed with onions, red & green peppers in spicy balls
                        sauce.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 14.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Crispy Duck</h5>
                    <p>Half boneless crispy duck, glazed with homemade Chef’s sauce, served with sautéed
                        vegetables.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 19.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Friendship</h5>
                    <p>Sauteed sliced chicken, beef, and pork with tomatoes, green peas, mushrooms and
                        pineapple chunks in plum sauce, served on Sizzling hot plate.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 14.00</p>
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-md-3">
                    <h5>Orange Chicken</h5>
                    <p>Crispy battered chicken glazed with homemade orange sauce, served with broccoli,
                        carrots and baby corn.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 13.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Mango Curry<i class="fa fa-star"></i></h5>
                    <p>Fresh cubes mango simmered in yellow curry with chicken, shrimp, onions, peppers,
                        yellow squash and tomatoes.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 14.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Thai BBQ</h5>
                    <p>Grilled marinated chicken breast, served with green papaya salad, sticky rice and
                        chili dipping sauce.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 14.00</p>
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-md-3">
                    <h5>Wild Boar Basil<i class="fa fa-star"></i><i class="fa fa-star"></i></h5>
                    <p>Sauteed sliced pork with peppercorn, mushrooms, onions, peppers, basil leaves and
                        Thai herbs.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 14.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Duck Choo Chee<i class="fa fa-star"></i></h5>
                    <p>Sliced roasted duck in tasty choo chee curry sauce with snow peas, tomatoes,
                        peppers, pineapple chunks and shredded lime leaves.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 19.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Tamarind Duck</h5>
                    <p>Sauteed sliced boneless duck in sweet tamarind sauce with pineapple, peppers,
                        onions, mushrooms, gingers, green peas, tomatoes, scallions, and snow peas.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 19.00</p>
                </div>
            </div>
            <div class="row">
                <div class="col text-center">
                    <h3 class="menuheadings mb-3">From the Sea</h3>
                    <h5 class="mb-5">Served with your choice of white or brown rice.</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-md-3">
                    <h5 class=" text-nowrap">Spicy Catfish<i class="fa fa-star"></i></h5>
                    <p>Lightly battered fillet pieces of catfish quick sauteed with red and green
                        peppers, string beans, basil leaves and Thai herbs.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 18.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Siam Chili Fish<i class="fa fa-star"></i></h5>
                    <p>Lightly battered Tilapia fillet glazed with sweet chili sauce topped with crispy
                        basil.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 18.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Siam Madness<i class="fa fa-star"></i><i class="fa fa-star"></i><i
                            class="fa fa-star"></i></h5>
                    <p>Sauteed shrimp, scallop, squid, salmon fillet and fresh mussels with onions,
                        peppers, mushrooms in hot basil chili sauce, served on Sizzling hot plate.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 19.00</p>
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-md-3">
                    <h5 class=" text-nowrap">Spicy Mussels<i class="fa fa-star"></i><i
                            class="fa fa-star"></i></h5>
                    <p>Lightly battered fillet pieces of catfish quick sauteed with red and green
                        peppers, string beans, basil leaves and Thai herbs.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 18.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Steamed Ginger Fish<i class="fa fa-star"></i></h5>
                    <p>Steamed tilapia fillet with onions, shredded gingers, mushrooms, scallions and
                        red peppers in ginger soy sauce.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 18.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Steamed Lime Tilapia<i class="fa fa-star"></i><i class="fa fa-star"></i></h5>
                    <p>Sauteed shrimp, scallop, squid, salmon fillet and fresh mussels with onions,
                        peppers, mushrooms in hot basil chili sauce, served on Sizzling hot plate.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 19.00</p>
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-md-3">
                    <h5 class=" text-nowrap">Spicy Mussels<i class="fa fa-star"></i><i
                            class="fa fa-star"></i></h5>
                    <p>Lightly battered fillet pieces of catfish quick sauteed with red and green
                        peppers, string beans, basil leaves and Thai herbs.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 18.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Paradise Shrimp<i class="fa fa-star"></i></h5>
                    <p>Large shrimp sautéed in yellow curry sauce with onions, tomatoes, pineapple
                        chunks, scallions, and egg, topped with crispy garlic.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 16.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Shrimp De Emerald</h5>
                    <p>Sauteed large shrimp with fresh mushroom, red peppers, shredded ginger, and
                        scallions, served on bed of steamed broccoli.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 16.00</p>
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-md-3">
                    <h5>Bangkok Salmon</h5>
                    <p>Grilled salmon fillet and glazed with sweet chili sauce, served with steamed
                        broccoli.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 18.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Curry Salmon<i class="fa fa-star"></i></h5>
                    <p>Steamed salmon fillet, glazed with house yellow curry sauce served with steamed
                        broccoli, cauliflower, and sweet potatoes tempura.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 18.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Scallop Pik Pow<i class="fa fa-star"></i></h5>
                    <p>Sauteed sea scallop with onions, peppers, and scallions in pik pow sauce.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 16.00</p>
                </div>
            </div>
            <div class="row">
                <div class="col text-center">
                    <h3 class="menuheadings mb-3">Side Orders</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-md-3">
                    <h5 class=" text-nowrap">White Rice</h5>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 2.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Brown Rice</h5>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 2.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Sticky Rice</h5>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 3.00</p>
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-md-3">
                    <h5>Steamed Rice Noodle</h5>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 3.00</p>
                </div>
            </div>
            <div class="row">
                <div class="col text-center">
                    <h3 class="menuheadings mb-3">Kid's Menu</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-md-3">
                    <h5>Kid's MENU 1</h5>
                    <p>Chicken finger & (F) Shumai Combo with rice and milk or orange juice.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 8.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Kid's MENU 2</h5>
                    <p>Chicken Teriyaki & (F) Shumai Combo with rice and milk or orange juice.</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 8.00</p>
                </div>
            </div>
            <div class="row">
                <div class="col text-center">
                    <h3 class="menuheadings mb-3">Beverages</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-md-3">
                    <h5 class=" text-nowrap">Soda</h5>
                    <p>Coke, Diet Coke, Sprite, Ginger Ale or Root Beer</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 2.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Thai Iced Tea / Coffee</h5>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 2.50</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Hot Thai Tea / Coffee</h5>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 2.00</p>
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-md-3">
                    <h5>Milk / Chocolate Milk</h5>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 2.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Juice</h5>
                    <p>Orange, Lemonade, or Mango</p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 2.00</p>
                </div>
            </div>
            <div class="row">
                <div class="col text-center">
                    <h3 class="menuheadings mb-3">Desserts</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-10 col-md-3">
                    <h5>Ice Cream</h5>
                    <p>Ginger or Coconut</p>
                    <p><i>(add sticky rice for an additional $2.00)</i></p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 3.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Fried Banana</h5>
                    <p><i>(add ice cream for an additional $3.00)</i></p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 5.00</p>
                </div>
                <div class="col-10 col-md-3">
                    <h5>Fried Ice Cream</h5>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 5.00</p>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col-10 col-md-3">
                    <h5>Mango with Sticky Rice</h5>
                    <p><i>(add ice cream for an additional $3.00)</i></p>
                </div>
                <div class="col-2 col-md-1">
                    <p class="text-nowrap">$ 5.00</p>
                </div>
            </div>
            <SpiceLevel />
        </div>
    )
}

export default FullMenu