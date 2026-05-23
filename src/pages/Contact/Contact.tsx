import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ContactFormBlock from "../../sections/ContactBlockForm/ContactFormBlock";
import ContactHero from "../../sections/ContactHero/ContactHero";

export default function Contact(){
    return (
        <>
            <Header variant="light-bg" />
            <ContactHero />
            <ContactFormBlock />
            <Footer />
        </>
    )
}