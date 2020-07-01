import React from "react";
import "./GithubProfileCard.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import emoji from "react-easy-emoji";
import { Fade } from "react-reveal";

export default function GithubProfileCard({prof}) {
  if (prof.hireable!==null){
    prof.hireable="Yes";
  }else{
    prof.hireable="No";
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="contact">
        <h2 className="row">Open to any opportunities!</h2>
		<h4 className="row">Brooklyn, NY</h4>
      <div className="row">
            <SocialMedia/>
          </div>
          <div className="image-content-profile">
           
          </div>
       
      </div>
    </Fade>
    );
}
