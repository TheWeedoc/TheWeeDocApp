import React from "react";
import Header from "../../components/Layout/Header/Header";
import { Helmet } from "react-helmet";
function AboutUs() {
  return (
    <div>
      <Helmet>
        <title>Aboutus - TheWeedoc</title>
      </Helmet>
      <Header />
      <div className="text-white font-notosans p-4 md:p-24">
        <div className="flex flex-col space-y-3  ">
          <h3 className="">About Us</h3>
          <p>
            TheWeedoc is an online video streaming platform which is owned
            subsidiary of <b>Clumsy Clover Clowns Pvt Ltd.</b> currently offers content
            across 180 languages, Highly evolved video streaming technology and
            a high attention to quality of experience across devices and
            platforms, make (TheWeedoc) the most complete cinema destination for
            Over The Top (OTT) video consumers.
          </p>
          <br />
          <p>A Video Experience Like No Other</p>
          <p>
            Seamless Video Playback - Our adaptive video streaming technology
            ensures that the best possible video quality is played back
            automatically based on the available bandwidth, therefore making it
            a great video experience on both mobile networks as well as WiFi
            internet connections. Our video is optimized to play on mobile
            networks with inconsistent throughput so that our users don't have
            to compromise on their experience on the low end, and play HD
            quality video on the top end of bandwidth availability.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
