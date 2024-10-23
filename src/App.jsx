import ClickToTop from "./components/click_to_top/ClickToTop";
import ClientTestimonials from "./components/client_testimonials/ClientTestimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import FunFact from "./components/fun_fact/FunFact";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <FunFact></FunFact>
      <Skills></Skills>
      {/* <RecentProject></RecentProject> */}
      <ClientTestimonials></ClientTestimonials>
      <Contact></Contact>
      <Footer></Footer>
      <ClickToTop></ClickToTop>
    </>
  );
}

export default App;
