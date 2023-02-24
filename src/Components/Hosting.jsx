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

const Hosting = () => {
    useEffect(() => {
        Aos.init({duration:2000})
       })
    const skills = [
      {
        img: "data:image/jpeg;base64,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",
        title:"Netlify"
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8m6HLoS3SHV9ItGh5ICPKAbUrNQ0kztx5DA&usqp=CAU",
        title:"Heroku"
        },
        
        {
          img: git,
          title:"Github"
        },
        {
          img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEUAAAD///8wMDD8/PwEBAT5+fkICAjV1dX29va6urpVVVWBgYHo6OgnJyfDw8NkZGQbGxuhoaFDQ0Pd3d15eXmpqak9PT1GRkaFhYWampoyMjLAwMDQ0NDs7OxOTk5SUlISEhJdXV0kJCQ2gl6QAAADtklEQVR4nO3c6U7jMBSG4Rwct4HuK4XSYZj7v8ix04W0DSFpXXnR+zDiB2Ikf7Kb45PEZBkAAAAAAAAAAAAAAAAAAAAAAAAAAAhZvud7GA9kwuVZyhFNtF7WSzxhNk96Do0nGfkewiOZudvKOEt4CvNsIiIT38N4pLwvSvV9j+KRBqK1lqXvYTyI+fT1ClFmEoteluTl1GRaiUlo/q2yRK82I7HxTEZbMdKLaBI9i9J2DpU8+x7NI+TZi5TsHMpLenNoAvWVnPRTXKYDqRqkl3A6VJU5lOHU94Ccm0kloNK2YqTDtktPcpbQzOcosXU6LqtENaHpMXq+R+VKbiuFUmcJTWH8TGrv9iHVgPZzKPKRTsXILyrFsfAPfA/MndHuOqGJuEvnhsZKzmrhgZaZ74G5si7qAopWeu57aI5sRRXXEe3Ptr6Hdr+8l2d/aubv6E/8RdH2FA0JTY8Rf8JlQ8AkeozpUDcE1HH3GOXsrKTuOnq63JR3paLdvdmRv9ZXilNCVbxm0e7eymeh29piX53E7f6pYozs2vs83D78+YOoTcWItskww16c9xQ1q1T0ItpVWt9T1Ii2YuT1PcW1Ybw9xqxVQBVvjzFvrhSnhKqItccYS9N25puWcYQXGzPgyS+lsLpOJ1HuwBfSXAorAWXhe7C3WErbObS/Ft2T7zzr7VRzsa/OoVK7yBap2YW1qxTfZrFt3eZFx4SmYsSV8LnlVeYourtSk/KJfaeIKpp3pcqP06JbvPJ6uoilJNp2dvNL01SXUMkmkluLZgr/2krRbsdWSRjNu1JmkG+ti301oshbLNvTte68SG1A8/Xue+it5PaJ9o0iebt20nmFHudRIqkYi5Zt4bUijh5jI52r/XEOzfV343v4v7DlrJCb59D8vyILuhe2Twu79hSXZmGX/dxWivvodchzmNkn2vcKvMf46rhZq5lD9eU7xE/Kp4CLjm3hNdtjBPpE0Q5q030/WhNxE2bEcki7tjcQGwIq2YWb8M1UtLsTam16jBATZvbk3Q1d01VCW/j/+Y5SJ3dRKY6C7DH2J+/cUGGe4Mub3n3qmDDME3xLubGlqEkY3gm+48k7V8K7K3U6eecsYngn+PYn79wFDOwE3/fJO2cRAzvBdzp55yyg/RbQCb6Lk3euBHWCr927T10F9K7Uxck7VwJ6u3bmslAchXSCb+0+3sHad7SD6fvTY7yHs0yT95COPPE/KGXlIdVDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwK3/fO8e54q11GgAAAAASUVORK5CYII=",
          title:"vercel"
        },
    ]

  

  return (
    <Container id='skills' data-aos='flip-left'>
        <h1>Hosting</h1>
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

export default Hosting