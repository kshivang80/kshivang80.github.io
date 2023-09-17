import DownloadIcon from '@mui/icons-material/Download';
import React, { useEffect } from 'react'
import styled from 'styled-components'


import backImg from '../Resources/Images/backImg.jpg';

import Typical from "react-typical";
import Aos from "aos";
import "aos/dist/aos.css";
// import Resume from '../Resources/Files/Mohit_Sharma_Resume.pdf';
// import { saveAs } from 'file-saver';
const About = () => {
   useEffect(() => {
    Aos.init({duration:2000})
   })
    
    return (
        <div id="about">
            <Container>
                <div className='aboutBox'>
                    <div className='about_leftBox'>
                        <h1>Hi, I'm Shivang kumar.</h1>
                        <Typical
                       className='typical'
              loop={Infinity}
              

              steps={["I'm a Full Stack Web Developer",, 1000, "I'm a MERN Developer", 1000]}

            />
                        <p>A dedicated Full stack web developer who is always passionate about learning new things. A good leader and a good team player.</p>
                        <a href="https://drive.google.com/file/d/1RiOxS8MB8qtrD_AbGnsRZgoA_Gwj9Vsl/view?usp=sharing" target="_blank">
                            <button data-aos='fade-left'>Download CV<DownloadIcon /></button>
                        </a>
                       
                    </div>
                    <div className='about_rightBox'>
                        <div>
                            <img src="https://avatars.githubusercontent.com/u/103144321?s=400&u=76bb787d4c9d67956cfd0a0fa4341cf4f08b7d43&v=4" alt="" width='100%' height='100%'/>
                        </div>
                    </div>
                </div>
            </Container>
            <AboutMeWrapper data-aos='fade-right'>
            
                <div className='aboutSection'>
                
                    <div className='left'>
                    
                        <h3>Personal Details</h3>
                        <p></p>
                        <p>Email: <span>kshivang80@gmail.com</span></p>
                        <p>Language: <span>English</span></p>
                        <p>Nationality: <span>Indian</span></p>
                    </div>
                    <div className='right'>
                    
                        <h2>I am a <span>MERN Stack Developer</span></h2>
                        <p>My name is Shivang kumar, I am from Bihar but i live in delhi. Frontend Developer with the ability to learn and collaborate in rapidly changing environments and compositions. Worked through 1000+ hours of bootcamp structure learning in JavaScript, Node.Js, React.Js, MongoDB, Express,ChakraUI,Redux, HTML5, and CSS3.</p>
                       
                    </div>
                </div>
            </AboutMeWrapper>
        </div>


    )
}

const Container = styled.div`
    width:100%;
    height:450px;
     background-image: url(${backImg});
    a{
        text-decoration:none;
    }




    .aboutBox{
        width:80%;
        height:100%;
        margin:auto;
        display:flex;
        align-items:center;
        justify-content:center;
    }

    .typical {
        color: teal !important;
        // border:1px solid black;

        font-weight:700 !important;
        font-size:30px !important;
    }

    .about_leftBox{
        width:50%;
        text-align:left;
        padding:10px;
    }

    .about_leftBox>h1{
        font-size:30px;
        line-height:10px;
    }

    .about_leftBox>p{
        color:black;
        font-size:17px;
        font-weight:500;
    }
    
    .about_leftBox button{
        padding:12px 20px 12px 20px;
        border-radius:10px;
        border:1px solid teal;
        background:teal;
        color:white;
        display:flex;
        align-items:center;
        gap:5px;
        font-weight:bold;
        font-size:16px;
    }

    .about_leftBox button:hover{
        -webkit-transform: translateY(-2px);
        transform: translateY(-2px);
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
    }

    .about_rightBox{
        width:50%;
        height:80%;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:15px;
       
    }

    .about_rightBox>div{
        width:250px;
        height:250px;
        margin:auto;
        border-radius:100%;
        background-color:white;
        overflow:hidden;
        
    }
    

    

    @media only screen and (min-width: 481px) and (max-width:768px){
        height:450px;
        .aboutBox{
            height:100%;
            flex-direction:column-reverse;
            gap:0px;
            // border:1px solid blue;
        }

        .about_leftBox>h1{
            font-size:x-large;
           
            text-align:center;
            // border:1px solid blue;
           
            width: 140%;
           
        }

        .about_leftBox>p{
            color:#8492a6;
            font-size:17px;
            font-weight:500;
        }

        .about_leftBox{
            width:60%;
            display:flex;
            align-items:center;
            flex-direction:column;
            text-align:center;
        }

        .about_rightBox{
            width:100%;
            height:50%;
            display:flex;
            align-items:center;
            justify-content:center;
            border-radius:15px;
        }
    
        .about_rightBox>div{
            width:200px;
            height:200px;
            margin:auto;
            border-radius:100%;
            background-color:white;
            overflow:hidden;
           
        }

        .typical {
            //  border:1px solid black;
            width: 180%;
            // margin-top: -1.7rem;
            margin-left: 2.7rem;
            text-transform: small-caps
        }


    }

    @media only screen and (min-width:320px) and (max-width:480px){
        height:450px;
        .aboutBox{
            height:100%;
            flex-direction:column-reverse;
            
        }

        .about_leftBox>h1{
            font-size:x-large;
            line-height:0px;
            text-align:center;
        }

        .about_leftBox>p{
            color:#8492a6;
            font-size:17px;
            font-weight:500;
        }

        .about_leftBox{
            width:100%;
            display:flex;
            align-items:center;
            flex-direction:column;
            text-align:center;
        }

        .about_rightBox{
            width:100%;
            height:50%;
            display:flex;
            align-items:center;
            justify-content:center;
            border-radius:15px;
        }
    
        .about_rightBox>div{
            width:200px;
            height:200px;
        }

        .typical {
            //  border:1px solid black;
            width: 100%;
            // margin-top: -1.7rem;
            margin-left: 2.7rem;
            text-transform: small-caps;
            font-size: 10px;
        }

    }

    @media only screen and (max-width: 320px){
        height:450px;
        .aboutBox{
            height:100%;
            flex-direction:column-reverse;
        }

        .about_leftBox>h1{
            font-size:x-large;
            line-height:0px;
            text-align:center;
        }

        .about_leftBox>p{
            color:#8492a6;
            font-size:15px;
            font-weight:500;
        }

        .about_leftBox{
            width:100%;
            display:flex;
            align-items:center;
            flex-direction:column;
            text-align:center;
        }

        .about_rightBox{
            width:100%;
            height:50%;
            display:flex;
            align-items:center;
            justify-content:center;
            border-radius:15px;
        }
    
        .about_rightBox>div{
            width:150px;
            height:150px;
        }

    }


    @media only screen and (max-width: 319px){
        height:450px;
        .aboutBox{
            height:100%;
            flex-direction:column-reverse;
        }

        .about_leftBox>h1{
            font-size:large;
            line-height:0px;
            text-align:center;
        }

        .about_leftBox>p{
            color:#8492a6;
            font-size:15px;
            font-weight:500;
        }

        .about_leftBox{
            width:100%;
            display:flex;
            align-items:center;
            flex-direction:column;
            text-align:center;
        }

        .about_rightBox{
            width:100%;
            height:50%;
            display:flex;
            align-items:center;
            justify-content:center;
            border-radius:15px;
        }
    
        .about_rightBox>div{
            width:150px;
            height:150px;
        }

    }
`
const AboutMeWrapper = styled.div`
    width:100%;
    margin-top:-50px;
    margin-bottom:40px;
    .aboutSection{
        width:80%;
        margin:auto;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        background-color:white;
        display:flex;
        justify-content:center;
        padding:20px;
        border-radius:10px;
        gap:10px;
        // border: 2px solid black
       
    }

    .typical {
        // border:1px solid black;
        width: 100%;
        margin-top: -1.7rem;
        margin-left: 2.7rem;
        text-transform: small-caps
    }



    .left{
        width:30%;
        text-align:left;
        background-color:#f8f9fa;
        padding:5px 15px 5px 15px;;
        border-radius:10px;
    }

    .left>p{
        font-size:small;
        font-weight:bold;
    }

    .left>p>span{
        color:#707070 ;
    }

    .left>h3+p{
        margin-top:0px;
        border-top:1.5px dashed #d4dae1
    }

    .right{
        width:70%;
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        padding:0px 10px 0px 10px;
    }

    .right>h2{
        width:100%;
        margin-bottom:0px;
        font-size:20px;
        text-align:left;
    }
    .right>h2>span{
        color:teal;
        
    }

    .right>p{
        text-align:left;
        margin-top:5px;
    }

    .right>div{
        display:flex;
        align-items:flex-start;
        overflow:hidden;
        margin-top:-10px;
    }

    .right>div>img{
        margin-left:-35px;
    }

    @media only screen and (min-width: 769px) and (max-width:1110px){
        .left{
            width:35%;
        }

    }

    @media only screen and (min-width: 481px) and (max-width:768px){
        margin-top:20px;
        .aboutSection{
            flex-direction:column;
            align-items:center;
            // border:1px solid blue;
            margin-top: 7rem;
        }

        .left{
            width:90%;
        }
        .right{
            width:90%;
        }
        .right>p{
            font-size:14px;
        }

        .typical {
            //  border:1px solid black;
            width: 100%;
            margin-top: -1.7rem;
            margin-left: 2.7rem;
            text-transform: small-caps
        }

    }

    @media only screen and (min-width:320px) and (max-width:480px){
 
        margin-top:20px;
        .aboutSection{
            flex-direction:column;
            align-items:center;
            margin-top: 3rem
        }

        .left{
            width:90%;
        }
        .right{
            width:90%;
        }

        .right>h2{
            font-size:17px;
        }

        .right>p{
            font-size:15px;
        }

        .typical {
            //  border:1px solid black;
            width: 100%;
            margin-top: -1.4rem;
            margin-left: 2.7rem;
            text-transform: small-caps
        }
    }

    @media only screen and (max-width: 320px){
        margin-top:20px;
        .aboutSection{
            flex-direction:column;
            align-items:center;
            margin-top:4rem;
           
        }

        .left{
            width:90%;
        }
        .right{
            width:90%;
        }
        .right>h2{
            font-size:16px;
        }

        .right>p{
            font-size:13px;
        }

        .typical {
            //  border:1px solid black;
            width: 100%;
            margin-top: -1.7rem;
            margin-left: 2.7rem;
            text-transform: small-caps
        }

    }
    
`
export default About