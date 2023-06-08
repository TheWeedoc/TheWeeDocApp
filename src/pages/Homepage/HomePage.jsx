import React from 'react'
import { Carousel } from 'antd';
import Header from '../../components/Layout/Header/Header';
import "./homepage.css"
import { bannerplayicon,bannersave } from '../../Assests/Svg/Commonsvg';
function HomePage() {

    const img1 = "https://collider.com/wp-content/uploads/the-avengers-movie-poster-banners-04.jpg"
    const img2 = "https://scifibloggers.com/wp-content/uploads/The-Avengers-Banner-276443869-e1429647138196.jpeg"  
    const img3 = "https://collider.com/wp-content/uploads/dark-knight-rises-movie-poster-banner-catwoman.jpg"
    const img4 = "https://houseofgeekery.files.wordpress.com/2022/08/bullet-train-movie-posters-give-stunning-new-look-at-brad-pitts-rivals90ff50be-291f-475d-8c0d-af36b4dfb6c1-415x250-1.jpeg"
    
    const userimg1 = "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI="

  return (
    <>
     <Header/>
     <Carousel autoplay>

     <div className="BannerDiv">
        <img src={img1} alt='banner' width="100" height="100" />
        <div className="mask"></div>
        <div className="bannercontDiv">
                <div className="usernameDiv">
                  <img src={userimg1} alt='user'/>
                  <h4>Wilson Andrew</h4>
                  <button>Follow</button>
                </div>
                <h1 className="titlename">Avengers-End Game</h1>
                <div className="catagoryDiv">
                          <div>Action</div>
                          <div>Triller</div>
                          <div>English</div>
                          <div>U/A 13+</div>
                </div>
              <p className="description">“Billa 2" shows the transformation of a Sri Lankan Tamil refugee, David Billa, to the most feared underworld don. While corruption and bureaucracy... See more</p>
              <div className="playbtnDiv">
                      <button>{bannerplayicon} Play</button>
                      <div>{bannersave}</div>
              </div>
        </div>
    </div>


    <div className="BannerDiv">
        <img src={img2} alt='banner' width="100" height="100" />
        <div className="mask"></div>
        <div className="bannercontDiv">
                <div className="usernameDiv">
                  <img src={userimg1} alt='user'/>
                  <h4>Wilson Andrew</h4>
                  <button>Follow</button>
                </div>
                <h1 className="titlename">Avengers-End Game</h1>
                <div className="catagoryDiv">
                          <div>Action</div>
                          <div>Triller</div>
                          <div>English</div>
                          <div>U/A 13+</div>
                </div>
              <p className="description">“Billa 2" shows the transformation of a Sri Lankan Tamil refugee, David Billa, to the most feared underworld don. While corruption and bureaucracy... See more</p>
              <div className="playbtnDiv">
                      <button>{bannerplayicon} Play</button>
                      <div>{bannersave}</div>
              </div>
        </div>
    </div>
    <div className="BannerDiv">
        <img src={img3} alt='banner' width="100" height="100" />
        <div className="mask"></div>
        <div className="bannercontDiv">
                <div className="usernameDiv">
                  <img src={userimg1} alt='user'/>
                  <h4>Sadhan Bose</h4>
                  <button>Follow</button>
                </div>
                <h1 className="titlename">Dark knight Rise</h1>
                <div className="catagoryDiv">
                          <div>Action</div>
                          <div>Triller</div>
                          <div>English</div>
                          <div>U/A 13+</div>
                </div>
              <p className="description">“Billa 2" shows the transformation of a Sri Lankan Tamil refugee, David Billa, to the most feared underworld don. While corruption and bureaucracy... See more</p>
              <div className="playbtnDiv">
                      <button>{bannerplayicon} Play</button>
                      <div>{bannersave}</div>
              </div>
        </div>
    </div>
    <div className="BannerDiv">
        <img src={img4} alt='banner' width="100" height="100" />
        <div className="mask"></div>
        <div className="bannercontDiv">
                <div className="usernameDiv">
                  <img src={userimg1} alt='user'/>
                  <h4>Wilson Andrew</h4>
                  <button>Follow</button>
                </div>
                <h1 className="titlename">Deadpool - 2</h1>
                <div className="catagoryDiv">
                          <div>Action</div>
                          <div>Triller</div>
                          <div>English</div>
                          <div>U/A 13+</div>
                </div>
              <p className="description">“Billa 2" shows the transformation of a Sri Lankan Tamil refugee, David Billa, to the most feared underworld don. While corruption and bureaucracy... See more</p>
              <div className="playbtnDiv">
                      <button>{bannerplayicon} Play</button>
                      <div>{bannersave}</div>
              </div>
        </div>
    </div>
  
</Carousel>
  </>
  )
}

export default HomePage