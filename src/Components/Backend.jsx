import React, { useEffect } from 'react'
import styled from 'styled-components'
import html from '../Resources/Images/LanguageImages/html5.png'
import css from '../Resources/Images/LanguageImages/css3.png'
import js from '../Resources/Images/LanguageImages/js.png'
import git from '../Resources/Images/LanguageImages/git.png'
import mongodb from '../Resources/Images/LanguageImages/mongodb.png'
import nodejs from '../Resources/Images/LanguageImages/nodejs.png'
import react from '../Resources/Images/LanguageImages/react.png'
import reactredux from '../Resources/Images/LanguageImages/redux.png'
import mern from '../Resources/Images/LanguageImages/mern.png'
import typescript from "../Resources/Images/LanguageImages/typescript.png"
import Aos from "aos";
import "aos/dist/aos.css";

const Backend = () => {
    useEffect(() => {
        Aos.init({duration:2000})
       })
    const skills = [
        {
            img: nodejs,
            title: "Node.js",
          },
          {
            img: "https://taher-ahmed.vercel.app/express.svg",
            title: "Express.js",
          },
          {
            img: mongodb,
            title: "MongoDB",
          },
          {
            img: "https://taher-ahmed.vercel.app/postman-icon.svg",
            title: "Postman",
          },
          {
            img: "https://rangav.gallerycdn.vsassets.io/extensions/rangav/vscode-thunder-client/2.4.3/1676994812363/Microsoft.VisualStudio.Services.Icons.Default",
            title: "ThunderClient",
          },
    ]

  

  return (
    <Container id='skills' data-aos='flip-left'>
        <h1>Back-End</h1>
        <div className='skillsContainer'>
            {skills.map((ele,index)=>(
                <div key={index}>
                    <img src={ele.img} alt={ele.title} width='70px' height='70px'/>
                    <p>{ele.title}</p>
                </div>
            ))}
        </div>
    </Container>
  )
}

const Container = styled.div`
    width:100%;
    margin:auto;
    
    h1{
        color:teal;
        text-transform:uppercase;
       
    }

    .skillsContainer{
        width:85%;
        margin:auto;
        display:grid;
        grid-template-columns: repeat(auto-fit,minmax(120px,max-content));
        justify-content:center;
        padding:30px;
        gap:20px;
    }

    .skillsContainer>div{
       display:flex;
       align-items:center;
       flex-direction:column;
       box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
       padding: 20px 0px 10px 0px;
       border-radius: 10px;
    }

    .skillsContainer>div:hover{
        -webkit-transform: translateY(-5px);
        transform: translateY(-15px);
        -webkit-transition: all 0.5s;
        transition: all 0.8s;
     }
   
`

export default Backend