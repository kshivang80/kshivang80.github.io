import React, {useEffect} from 'react';
import styled from 'styled-components';
import decanhearaldPng from '../Resources/Images/Project/decanhearaldPng.png';
import AirgaragePng from '../Resources/Images/Project/AirgaragePng.png';
import youtubePng from '../Resources/Images/Project/youtubePng.png';
import wrdrbPng from '../Resources/Images/Project/wrdrbPng.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import StreamIcon from '@mui/icons-material/Stream';
import { useState } from 'react';


const Projects = () => {


    const [state, setState] = useState('')
    const projects = [
        {
            id: 1,
            title: 'WRDRB ',
            img: wrdrbPng,
            desc: 'WRDRB Net-a-Porter Group S.p.A. is an Italian online fashion retailer created on 5 October 2015 after the merger between Yoox Group and Net-a-porter Group. Yoox was originally founded by Federico Marchetti in Milan in 2000,',
            worked: 'A collaborative project, built in one week by a team of 5 developers .',
            githubLink: 'https://github.com/LV-23/fixed-thread-889/tree/main',
            deployedLink: "https://fixed-thread-889.netlify.app/",
            tags: ['HTML', 'CSS', 'Javascript', 'React', 'Chakra-UI']
        },
        {
            id: 2,
            title: 'Deccan Herald Clone',
            img: decanhearaldPng,
            desc: 'Deccan Herald is an Indian English language daily newspaper published from the Indian state of Karnataka. It was founded by K. N. Guruswamy, a liquor businessman from Ballari and was launched on 17 June 1948',
            worked: 'This is a individual project which is only created by me in 4 days.',
          
            githubLink: 'https://github.com/kshivang80/fluent-canvas-584',
            deployedLink: 'https://glistening-profiterole-4e0dab.netlify.app',
            tags: ['HTML', 'CSS', 'Javascript', 'React', 'Chakra-UI']
        },
        {
            id: 3,
            title: 'AirGarage Clone',
            img: AirgaragePng,
            desc: "AirGarage is a full service parking operator. We handle all of the day-to-day logistics that go into making your parking lot or garage the most successful version of itself.",
            worked: 'A collaborative project, built in one week by a team of 5 developers .',
           
            githubLink: 'https://github.com/Amanyadav2030/Airgarage-Clone',
            deployedLink: "https://dazzling-meerkat-951529.netlify.app/",
            tags: ['HTML', 'CSS', 'Javascript']
        },
        {
            id: 4,
            title: 'YOUTUBE Clone',
            img: youtubePng,
            desc: 'YouTube is an American online video sharing and social media platform headquartered in San Bruno, California. It was launched on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim. It is owned by Google, and is the second most visited website, after Google Search',
            worked: 'This is a individual project which is only created by me in 4 days.',
           
            githubLink: 'https://github.com/masai-course/SHIVANG_fp03_190/tree/master/unit-3/sprint-3/day-1/assignments',
            deployedLink: 'https://shiny-pegasus-a8ef30.netlify.app/',
            tags: ['HTML', 'CSS', 'Javascript']
        }
    ]

    return (
        <Container id='projects'>
            <h1>Projects</h1>
            <div className='projectsContainer'>
                {projects.map((ele, index) => (
                    <div key={index} className="box">
                        <div className='imgBox'>
                            <img src={ele.img} alt={ele.title} width='120%' height='100%' />
                        </div>
                        <div className='ContentBox'>
                            <h1>{ele.title}</h1>
                            <p>{ele.desc}</p>
                            <p style={{ fontWeight: 'bold' }}>{ele.worked}</p>
                            <div className='tagsBox'>
                                {ele.tags.map((tag, index) => (
                                    <span key={index}>{tag}</span>
                                ))}
                            </div>
                            <div className='linkSection'>
                                <a href={ele.githubLink}><button><GitHubIcon />Github</button></a>
                                <a href={ele.deployedLink}><button><StreamIcon />Live</button></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container >
    )
}


const Container = styled.div`
    width:100%;
    margin:auto;
    display:flex;
    flex-direction:column;
    gap:20px;
    
    h1{
        color:teal;
        text-transform:uppercase;
    }

    .projectsContainer{
        width:80%;
        margin:auto;
        display:flex;
        align-items:center;
        flex-direction:column;
    }

    .box{
        position:relative;
        width:100%;
        height:450px;
        display:flex;
        gap:10px;
        margin-bottom:80px;
        border: 10px solid #e9e9e9;
        border-radius: 20px;
        overflow:hidden;
    }

    .imgBox{
        width:50%;
        overflow:hidden;
    }

    
    .imgBox>img{
        display: block;
        transition: transform .4s; 
    }

    .imgBox>img:hover{
        position:absolute;
        width:80%;
        transform: scale(1.3);
        transform-origin: 0% 0%;
    }

    
    .ContentBox{
        width:50%;
        text-align:left;
        padding:0px 20px 20px 20px;
        
    }

    .ContentBox>h1{
        color:#343a40;
    }

    .ContentBox>p{
        width:90%;
        font-size:large;
        margin-top:0px;
    }

    .tagsBox{
        width:80%;
        display:flex;
        align-items:center;
        flex-wrap: wrap;
        line-height:20px;
        gap:5px;
        margin-bottom:20px;
    }

    .tagsBox>span{
        color:white;
        background-color:teal;
        padding: 2px 15px 2px 15px;
        border-radius:10px;
        font-size:13px;
        font-weight:bold;
    }


    .linkSection{
        display:flex;
        gap:20px;
    }

    .linkSection>a{
        text-decoration:none;
    }
    .linkSection>a:first-child>button{
        background-color:black;
        color: White;
        padding:8px 20px 8px 20px;
        border-radius:8px;
        font-weight:bold;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:10px;
        border:none;
        cursor:pointer;
    }

    button{
        cursor:pointer;
    }

    button:hover{
        -webkit-transform: translateY(-2px);
        transform: translateY(-2px);
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
    }
    

    .linkSection>a:last-child>button{
        background-color:#44a4be;
        color: White;
        padding:8px 20px 8px 20px;
        border-radius:8px;
        border:none;
        font-weight:bold;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:10px;
    }

    @media only screen and (min-width: 768px) and (max-width:1120px){
        .box{
            flex-direction:column;
            align-items:center;
            height:100%;
        }
 
        .projectsContainer{
            width:80%;
            margin:auto;
            
        }
        
        .imgBox{
            width:100%;
            height:400px;
        }

        .imgBox>img{
            width:100%;
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
        }

        .ContentBox>h1{
            font-size:x-large;
        }

        .ContentBox>p{
            font-size:15px;
        }

        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }

    @media only screen and (min-width: 481px) and (max-width:768px){
        .box{
           flex-direction:column;
           align-items:center;
           height:100%;
        }

        .projectsContainer{
            width:80%;
            margin:auto;
            
        }
        
        .imgBox{
            width:100%;
            height:280px;
        }

        .imgBox>img{
            width:100%;
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            text-align:center;
        }

        .ContentBox>h1{
            font-size:x-large;
        }

        .ContentBox>p{
            font-size:15px;
        }

        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }


    @media only screen and (min-width:320px) and (max-width:480px){
        .box{
            flex-direction:column;
            align-items:center;
            height:100%;
        }

        .projectsContainer{
            width:90%;
            margin:auto;
            
        }

        .imgBox{
            width:100%;
            height:200px;
        }

        .imgBox>img{
            width:100%;
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            text-align:center;
        }

        .ContentBox>h1{
            font-size:large;
        }

        .ContentBox>p{
            font-size:13px;
            
        }


        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }

    @media only screen and (max-width: 319px){
        .box{
            flex-direction:column;
            align-items:center;
            height:100%;
        }

        .projectsContainer{
            width:90%;
            margin:auto;
            
        }

        .imgBox{
            width:100%;
            height:150px;
        }

        .imgBox>img{
            width:100%;
            
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            text-align:center;
        }

        .ContentBox>h1{
            font-size:large;
        }

        .ContentBox>p{
            font-size:13px;
        }


        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }
`
export default Projects