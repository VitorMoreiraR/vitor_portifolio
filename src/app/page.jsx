import Image from "next/image";
import Layout from "../components/layout"
import "../styles/global.css"
import Homepage from "./pages/homepage"
import Aboutme from "./pages/aboutme"
import Skills from "./pages/skills"
import Project_article from "./pages/projects_articles"

export default function Home() {
  return (
    <>
      <Layout>

        <Homepage></Homepage>
        <Aboutme></Aboutme> 
        <Skills></Skills>
        <Project_article></Project_article>
      </Layout>
    </>
    
  );
}
