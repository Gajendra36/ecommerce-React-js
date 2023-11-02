import styled from "styled-components"

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
        <div className="container">
         <h3>Trusted By 1000+ Companies</h3>
         <div className="brand-section-slider">
            {/* my first image */}
            
          {/* my 1st img  */}
          <div className="slide">
            <img
              src="https://i.pinimg.com/736x/98/b9/a5/98b9a59f3d4e26471d54bd2524e01fb7.jpg"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://i.pinimg.com/736x/2a/89/fe/2a89fee1a635745cec680e88efa49bcc.jpg"
              alt="trusted-brands" className="are"
            />
          </div>
          <div className="slide">
            <img
              src="https://i.pinimg.com/736x/75/68/05/75680550fdc2305216ad9014d2b8b8f2.jpg"
              alt="trusted-brands" className="hello"
            />
          </div>
          <div className="slide">
            <img
              src="https://i.pinimg.com/564x/59/a6/19/59a619c04527465b4539c54c74f0263c.jpg"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://i.pinimg.com/564x/d4/9f/a3/d49fa3523c84bef766b4b2bde8296d23.jpg"
              alt="trusted-brands" className="you"
            />
          </div>
         </div>
        </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  .slide .hello{
    height:6rem;
  }
  .slide .are{
    height: 7rem;
  }
  .slide .you{
    height: 7rem;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;


export default Trusted
