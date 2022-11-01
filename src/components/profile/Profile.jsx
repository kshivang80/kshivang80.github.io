import React from "react";
import "./Profilecss.css";
import { Type } from "./typescript";
//import {Typewriter} from './typescript.jsx'


const Profile = () => {
  const profileImg="https://avatars.githubusercontent.com/u/103144321?s=400&u=7beb3721f11395d27bad6e29025ff1de74872d91&v=4"
  return (
    <div className="box">
      <div className="d-flex profile container  rounded flex-wrap">
        <div className=" d-flex justify-content-center mx-5 ">
          <img
            className="rounded-circle"
            src={profileImg}
            alt="Shivang"
          />
        </div>
        <div className="summry">
          <h1 className="my-2"           style={{fontSize:"39px",fontWeight:"bolder"}}>Shivang kumar</h1>
          <div className="" style={{color:"indigo",fontSize:"29px",fontWeight:"bolder"}}>
            <Type/>
          </div>
          <hr className="border border-light" />
          <p>
         I have completed As a Full stack web developer from Military based coding program from MASAI SCHOOL Where I have created more than 10+ major projects and 30+ minor          </p>
          <button className="btn btn-dark border"><a className="text-decoration-none text-light" href="https://drive.google.com/file/d/1-wfUN-ge2rG3uKSKUveUQ68GqxxxZAVm/view?usp=sharing" target="_blank" rel="noopener noreferrer">RESUME</a> </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
