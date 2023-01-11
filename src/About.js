
import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontext";

const About = () => {

  const {myName} = useProductContext();

    const data = {
      name: "FABAU Ecommerce ",
    };
  return ( 
    <>
    {myName}
      <HeroSection myData={data} />

    </>
  ) ;
};

export default About;
