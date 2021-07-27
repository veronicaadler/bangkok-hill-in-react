import React from "react";
import CarouselComponent from "./Carousel";
import AboutUsDescription from "./AboutUsDescription";

function AboutPage() {
    return (
        <div class="container-fluid" id="aboutus">
                <div class="row">
                    <div class="col-12 p-3 mt-2">
                        <h1 id="aboutusheading" class="text-center card-title">OUR STORY</h1>
                    </div>  
                </div>
                <div class="row">
                    <div class="col p-0 w-0">
                        <CarouselComponent />
                    </div>
                </div>
                <div class="row">
                    <div class="col p-0 w-0 mb-5">
                        <AboutUsDescription />
                    </div>
                </div>
        </div>
    )
}

export default AboutPage