import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import About from "../../sections/About/About";
import ContactBlock from "../../sections/ContactBlock/ContactBlock";
import Feedback from "../../sections/Feedback/Feedback";
import Hero from "../../sections/Hero/Hero";
import HowItWorks from "../../sections/HowItWorks/HowItWorks";
import Video from "../../sections/Video/Video";


export default function Home(){
    return (
        <>
            <Header variant="dark-bg" />
            <Hero />
            <About />
            <HowItWorks />
            <Video />
            <Feedback />
            <ContactBlock />
            <Footer />
        </>
    )
}