import EducationCourses from "./components/education_courses/EducationCourses";
import Footer from "./components/footer/Footer";
import FunFact from "./components/fun_fact/FunFact";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import RecentProject from "./components/recent_project/RecentProject";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <FunFact></FunFact>
      <Skills></Skills>
      <RecentProject></RecentProject>
      <EducationCourses></EducationCourses>
      <Footer></Footer>
    </>
  );
}

export default App;
