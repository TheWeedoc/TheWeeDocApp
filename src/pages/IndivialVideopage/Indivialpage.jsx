import React from "react";
import Header from "../../components/Layout/Header/Header";
import Videoplayer from "../../components/videplayer/videoplayer";
import "./indivialpage.css";
import {
  savebtn,
  starbtn,
  sharebtn,
  thumbsup,
  thumbsdown,
} from "../../Assests/Svg/Commonsvg";
function Indivialpage() {
  return (
    <>
      <Header />
      <div className="indivialpage-main-Div">
        <Videoplayer />
        <div className="vid-topDiv flex flex-col space-y-2 md:space-y-0 md:flex-row">
          <div className="vid-topleft">
            <h1>Left Right Left</h1>
            <div className="options_div">
              <div>{savebtn}</div>
              <div>{starbtn}</div>
            </div>
          </div>

          <div className="vid-topright">
            <div className="share_text">{sharebtn} Share</div>

            <div className="likesDiv">
              <div>{thumbsup} 25k</div>
              <hr style={{ borderRight: "1.4px solid #fff", height: "14px" }} />
              <div>{thumbsdown} 300</div>
            </div>
          </div>
        </div>

        <div className="details-div">
          <ul>
            <li style={{ padding: "2px 10px 2px 0px" }}>2022</li>
            <li>1h 59m</li>
            <li>Tamil</li>
            <li>Action</li>
            <li>Triller</li>
            <li>Fantasy</li>
            <li style={{ border: "none" }}>U/A 13+</li>
          </ul>
        </div>

        <div className="userprofileSec">
          <div className="pro_imgDiv">
            <img
              src="https://media.licdn.com/dms/image/C5603AQGIYT25qdyUmQ/profile-displayphoto-shrink_800_800/0/1637938260330?e=2147483647&v=beta&t=bga--I_pyA8FUDbHvJb92QCuuhiPJnYViXPt4Kmp2Zk"
              className="profilepic"
              alt="Nirmal"
            />
          </div>
          <div className="pro_textDiv">
            <b>Nirmal kumar</b>
            <small>167 Followers</small>
          </div>
          <button className="invid_page_followbtn">Follow</button>
        </div>

        <div className="indivl_page_cnt">
          <p>
            The show is based on Kanchanjunga Military Academy where soldiers
            are trained to serve the nation. Naveen Singh Ahluwalia, who is the
            narrator of the show tells his story about how he was framed and
            labelled as a Traitor. The academy is helmed by Brigadier Chandok
            and his team of army officers. The story narrates the plot of six
            youngsters who comes from various backgrounds to take admission in
            the academy. These youngsters are Naina Singh, Amardeep Huda, Ali
            Baig, Aalekh Sharma, Yadhuvansh Sahni and Pooja Ghai. Together they
            join the army and become cadets to serve the nation. They are
            supported by Captain Rajveer and Dr. Ritu Mishra. It is suggested
            that Naina Singh Ahluwalia has joined the academy with a mission to
            conquer. It is revealed that she is the younger sister of Naveen
            Singh Ahluwalia who was labelled as a traitor. Naina doesn't believe
            that her brother was a traitor and hence to prove his innocence and
            avenge the people who wronged him, she joins KMA to fulfill her
            goal.
            <br />
            <br />
            Also she vows to become the best cadet of the academy just like her
            brother. But in order to do so, she hides her real identity. Having
            witnessed atrocities at an early age by the people who insulted her
            family, Naina develops hate, anger and disgust for the society
            particularly with the system in the Indian Army. Thus, transforming
            into a strong willed, anti-social, aggressive, angry young woman
            from a bubbly girl she once was.
          </p>
        </div>
      </div>
    </>
  );
}

export default Indivialpage;
