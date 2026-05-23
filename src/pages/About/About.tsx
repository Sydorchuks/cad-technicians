import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AboutContent from "../../sections/AboutContent/AboutContent";
import ContactBlock from "../../sections/ContactBlock/ContactBlock";
import Feedback from "../../sections/Feedback/Feedback";
import GenericHero from "../../sections/GenericHero/GenericHero";
import WhatWeDo from "../../sections/WhatWeDo/WhatWeDo";
import WhyUs from "../../sections/WhyUs/WhyUs";

export default function About(){
    return (
        <>
            <Header variant="dark-bg" />
            <GenericHero
                bgText="ABOUT US"
                title="ABOUT US"
                description="Survey Drafters has decades of experience in the land surveying industry, 
                and our ability to work virtually with professionals across the country is what sets us apart from the rest. 
                We minimize your expenses and maximize your productivity by using your field data to create high-quality AutoCAD drawings. 
                You can take on more clients and promise a faster turnaround time to your clients by partnering with Survey Drafters. "
                rightLine={1}
                linesBottom={6}
            />
            <AboutContent />
            <WhatWeDo />
            <WhyUs />
            <Feedback />
            <ContactBlock />
            <Footer />
        </>
    )
}