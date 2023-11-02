import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Contact = () => {
  const { isAuthenticated, user } = useAuth0();

  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (<Wrapper>
    <h2 className="common-heading">Contact page</h2>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.760897399586!2d72.66200196479585!3d23.032549766186225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e86fdfe79379d%3A0xa65202d41a815382!2sManmohan%20Park!5e0!3m2!1sen!2sin!4v1686573173528!5m2!1sen!2sin"
     width="100%"
      height="450" 
      style={ {border:0 } } 
      allowFullscreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade">

       </iframe>

       <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/mzbqnpwn" method="POST" className="contact-inputs">
           <input type="text" 
           placeholder="username"
           value={isAuthenticated ? user.name : ""}
            name="username" 
            required 
            autoComplete="off"
            
           />

           <input type="email" 
           name="Email" 
           placeholder="Email" 
           autoComplete="off" 
           value={isAuthenticated ? user.email : ""}
           required
           
            />
            <textarea 
            name="Message"
            cols="30"
            rows="10"
            required
            autoComplete="off"
            placeholder="Enter Your Message"
            >
            </textarea>

            <input type="submit" value="send" />
          </form>
        </div>
       </div>
  </Wrapper>

  );
};

export default Contact;
