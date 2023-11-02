import HeroSection from "./components/HeroSection";
import styled from "styled-components";
import { useProductContext } from "./context/productcontex";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Gajendra Ecommerce",
  };

  return (
    <Wrapper>
    <>
    
      {myName}
      <HeroSection myData={data} />
      <h1 className="head">Product Catalog: </h1><p className="para">The website will have a well-organized product catalog with various categories, such as lighting fixtures, switches, cables, electrical tools, generators, circuit breakers, motors, and more. Each category will contain a list of products with detailed descriptions and images.</p>
      <h1 className="head">Search Functionality: </h1> <p className="para">A search bar allows customers to find specific products quickly. They can search by product name, model number, brand, or any other relevant criteria.</p>
      <h1 className="head">Product Details and Reviews: </h1> <p className="para">Detailed product pages should provide essential information about each item, such as specifications, dimensions, technical details, and customer reviews and ratings.</p>
    </>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .head{
    margin: 15px;
    font-size:20px;
  }
  .para{
    position: relative;
    left: 10px;
    margin-left:20px;
    justify-content: center;
  
  }
`

export default About;