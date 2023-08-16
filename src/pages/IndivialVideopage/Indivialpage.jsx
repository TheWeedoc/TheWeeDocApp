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

import CastAndCrewSlider from "../../components/cards/IndividualVideoPage/CastAndCrewSlider";

import { Input } from "antd";
const { TextArea } = Input;

function Indivialpage() {
  const cardarr = [
    {
      id: "1",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
    {
      id: "2",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
    {
      id: "3",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
    {
      id: "4",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
    {
      id: "5",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
    {
      id: "6",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
    {
      id: "7",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
    {
      id: "8",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
    {
      id: "9",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
    {
      id: "10",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
    {
      id: "11",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
    {
      id: "12",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
    {
      id: "200",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
    {
      id: "13",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
    {
      id: "14",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
    {
      id: "15",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
    {
      id: "16",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
    {
      id: "17",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Nirmal",
      role: "Director",
    },
  ];
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
        <div className="flex flex-col w-full py-6 space-y-4">
          <div className="w-full">
            <TextArea
              className="bg-[#0a0a0d] text-white placeholder:text-gray-400"
              rows={4}
              placeholder="Write the films's review"
            />
          </div>
          <div className="flex justify-center md:justify-end">
            <button className="bg-white text-black font-notosans  justify-center rounded-lg px-4 py-1">
              Post Review
            </button>
          </div>
        </div>

        <div className="userprofileSec">
          <div className="pro_imgDiv">
            <img
              src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI="
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

        <div className="indivl_page_cnt py-6">
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
        <div className="flex flex-col justify-center items-center py-6 space-y-6">
          <h1 className="font-semibold text-white font-notosans text-lg text-left w-full md:px-10">
            Cast & Crew{" "}
          </h1>
          <CastAndCrewSlider castAndCrewData={cardarr} />
        </div>
      </div>
    </>
  );
}

export default Indivialpage;
