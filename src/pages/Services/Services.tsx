import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ContactBlock from "../../sections/ContactBlock/ContactBlock";
import Feedback from "../../sections/Feedback/Feedback";
import GenericHero from "../../sections/GenericHero/GenericHero";
import ServicesGrid from "../../sections/ServicesGrid/ServicesGrid";
import Video from "../../sections/Video/Video";

export default function Services(){
    return (
        <>
            <Header variant="dark-bg" />
            <GenericHero
                bgText="OUR SERVICES"
                title="OUR SERVICES"
                description="When it comes to land surveying, you have enough on your plate. 
                Our goal at Survey Drafters is to let you focus on what you do best while we take care of the technology. 
                Simply submit your data to us and we create high-quality AutoCAD drawings for your use. You get to lower your overhead and get more done with Survey Drafters! "
                linesBottom={6}
                rightLine={1}
                leftLine={1}
            />
            <ServicesGrid />
            <Video />
            <Feedback />
            <ContactBlock />
            <Footer />
        </>
    )
}