import React from 'react'
import { AboutContainer, HeaderContainer, InfoContainer, StyledImage } from './aboutStyle';
import codingSvg from '../../assets/coding.svg';
const About = () => {
  return (
        <AboutContainer>
          <StyledImage src={codingSvg} alt="coding" />
          <HeaderContainer>
            <h1>
              About Software Developer <span>İhsan Çetin</span>
            </h1>
          </HeaderContainer>
          <InfoContainer>
            <h1>Hi! I'm ihsan Cetin.</h1>
            <h2>I’m currently learning Full-Stack Development Languages.</h2>
            <h2>
            Kırıkkale Üniversitesi Master of Arts /MA/🎓

            📈📊 Finance Branch Manager

            👨‍💻 Student at Clarusway 🖥 Full Stack Developer | ReactJS | JS | HTML | CSS | Sass | Bootstrap
            🌱 I’m currently learning Python, SQL, Git&GitHub, HTML, CSS, JS, Java,.

            👯 Enthusiastic Full-Stack Developer eager to contribute to team success through hard work, attention to details and excellent organizational skills.
            
            </h2>
            <h2>
              <a href="mailto:ihsancetin92@gmail.com">Send email</a>
              ihsancetin92@gmail.com
            </h2>
          </InfoContainer>
        </AboutContainer>
      );
    };
    export default About;