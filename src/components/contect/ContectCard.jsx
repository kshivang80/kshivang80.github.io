import React from "react";

const card = () => {
  return (
    <div className=" d-flex justify-content-center">
      <a
        className="mx-2"
        href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
        data-toggle="tooltip"
        title="Gmail"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-solid fa-envelope fs-2"></i>
      </a>

      <a
        className="mx-2"
        href="https://github.com/kshivang80"
        data-toggle="tooltip"
        title="Github"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-github fs-2" />
      </a>
      <a
        className="mx-2"
        href="https://www.linkedin.com/in/shivang-kumar-272488233/"
        data-toggle="tooltip"
        title="Linkedin"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-linkedin fs-2"> </i>
      </a>
      <a
        className="mx-2"
        href="/"
        data-toggle="tooltip"
        title="enter your mobile no"
      >
        
        <i class="fa fa-phone fs-2" aria-hidden="true" target="_blank"></i>
      </a>
    </div>
  );
};

export default card;
