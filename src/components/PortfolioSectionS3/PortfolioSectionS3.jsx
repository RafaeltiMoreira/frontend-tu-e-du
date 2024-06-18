import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import pImg1 from '../../images/portfolio/18.jpg'
import pImg2 from '../../images/portfolio/19.jpg'
import pImg3 from '../../images/portfolio/20.jpg'
import pImg4 from '../../images/portfolio/21.jpg'
import pImg5 from '../../images/portfolio/22.jpg'
import pImg6 from '../../images/portfolio/23.jpg'
import pImg7 from '../../images/portfolio/24.jpg'
import pImg8 from '../../images/portfolio/25.jpg'
import pImg9 from '../../images/portfolio/29.jpg'
import pImg10 from '../../images/portfolio/24.jpg'
import pImg11 from '../../images/portfolio/25.jpg'
import pImg12 from '../../images/portfolio/26.jpg'
import pImg13 from '../../images/portfolio/27.jpg'
import pImg14 from '../../images/portfolio/28.jpg'
import pImg15 from '../../images/portfolio/29.jpg'
import pImg16 from '../../images/portfolio/18.jpg'
import pImg17 from '../../images/portfolio/19.jpg'
import pImg18 from '../../images/portfolio/20.jpg'
import { useState } from "react";


const Portfolios = [
    {
        Pimg: pImg1,
        style: "s1",
    },
    {
        Pimg: pImg2,
        style: "s2",
    },
    {
        Pimg: pImg3,
        style: "s3",
    },
    {
        Pimg: pImg4,
        style: "s4",
    },
    {
        Pimg: pImg5,
        style: "s5",
    },
    {
        Pimg: pImg6,
        style: "s6",
    },
    {
        Pimg: pImg7,
        style: "s7",
    },
    {
        Pimg: pImg8,
        style: "s8",
    },
    {
        Pimg: pImg9,
        style: "s9",
    },
    {
        Pimg: pImg10,
        style: "s1",
    },
    {
        Pimg: pImg11,
        style: "s2",
    },
    {
        Pimg: pImg12,
        style: "s3",
    },
    {
        Pimg: pImg13,
        style: "s4",
    },
    {
        Pimg: pImg14,
        style: "s5",
    },
    {
        Pimg: pImg15,
        style: "s6",
    },
    {
        Pimg: pImg16,
        style: "s7",
    },
    {
        Pimg: pImg17,
        style: "s8",
    },
    {
        Pimg: pImg18,
        style: "s9",
    }

]

const PortfolioSectionS3 = () => {

    const [open, setOpen] = useState(false);

    const settings = {
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: false,
        dots: false,
        variableWidth: true,
        loop: false,
        autoplay: true,
        rtl: false,
        responsive:false,
    };
    const settings2 = {
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: false,
        dots: false,
        variableWidth: true,
        loop: false,
        autoplay: true,
        rtl: true,
        responsive:false,
    };

    return (
        <section className="wpo-portfolio-section-s4 section-padding pb-0" id="book">
            <h2 className="hidden">some</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="portfolio-grids gallery-container clearfix gallery-slide">
                            <Slider {...settings}>
                                {Portfolios.slice(0, 9).map((image, i) => (
                                    <div className={`grid ${image.style}`} key={i}>
                                        <div className="img-holder" onClick={() => setOpen(true)}>
                                            <img src={image.Pimg} alt="" className="img img-responsive" />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <div className="portfolio-grids gallery-container clearfix gallery-slide2">
                            <Slider {...settings2}>
                                {Portfolios.slice(9, 18).map((image, i) => (
                                    <div className={`grid ${image.style}`} key={i}>
                                        <div className="img-holder" onClick={() => setOpen(true)}>
                                            <img src={image.Pimg} alt="" className="img img-responsive" />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[
                    { src: pImg1 },
                    { src: pImg2 },
                    { src: pImg3 },
                    { src: pImg4 },
                    { src: pImg5 },
                    { src: pImg6 },
                    { src: pImg7 },
                    { src: pImg8 },
                    { src: pImg9 },
                    { src: pImg10 },
                    { src: pImg11 },
                    { src: pImg12 },
                    { src: pImg13 },
                    { src: pImg14 },
                    { src: pImg15 },
                    { src: pImg16 },
                    { src: pImg17 },
                    { src: pImg18 },
                ]}
            />
        </section>
    )
}

export default PortfolioSectionS3;