import { Fragment } from 'react';
import NavbarCouple from '../../components/NavbarCouple/NavbarCouple'
import Hero2 from '../../components/Hero2/Hero2';
import CoupleSection3 from '../../components/CoupleSection3/CoupleSection3.jsx';
import StorySection2 from '../../components/StorySection2/StorySection2';
import EventSection from '../../components/EventSection/EventSection';
import FooterCouple from '../../components/FooterCouple/FooterCouple';
import Scrollbar from '../../components/Scrollbar/Scrollbar'
import PortfolioSectionS3 from '../../components/PortfolioSectionS3/PortfolioSectionS3';



const HomePage = () => {

    return (
        <div id='home'>
        <Fragment>
            <NavbarCouple />
            <Hero2 />
            <CoupleSection3 />
            <StorySection2 />
            <PortfolioSectionS3 />
            <EventSection/>
            <FooterCouple />
            <Scrollbar />
        </Fragment>
        </div>
    )
};

export default HomePage;