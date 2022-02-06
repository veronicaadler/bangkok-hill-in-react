import CarouselComponent from "./Carousel";
import AboutUsDescription from "./AboutUsDescription";
import Header from "../Header";
import Footer from "../Footer";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid" id="aboutus">
        <div className="row">
          <div className="col-12 p-3 mt-2">
            <h1 id="aboutusheading" className="text-center maincardtitle">
              OUR STORY
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col p-0 w-0">
            <CarouselComponent />
          </div>
        </div>
        <div className="row">
          <div className="col p-0 w-0 mb-5">
            <AboutUsDescription />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
