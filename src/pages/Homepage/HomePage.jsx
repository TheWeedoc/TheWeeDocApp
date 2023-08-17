import React, { useEffect } from "react";
import { Carousel } from "antd";
import Header from "../../components/Layout/Header/Header";
import "./homepage.css";
import { bannerplayicon, bannersave } from "../../Assests/Svg/Commonsvg";
import Homepagecard from "../../components/cards/Hompage/Homepagecard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/Home/productReducer";
function HomePage() {
  const img1 = "https://i.ytimg.com/vi/YwDZMgIImSg/maxresdefault.jpg";
  const img2 = "https://i.ytimg.com/vi/OG0gxFIOqGI/maxresdefault.jpg";
  const img3 = "https://i.ytimg.com/vi/gZp2x5k_9YI/maxresdefault.jpg";
  const img4 =
    "https://filmfreeway-production-storage-01-storage.filmfreeway.com/projects/project_stills/002/027/318/original/AALY-Thumbnail-Oct-2020.jpg?1602488049";

  const userimg1 =
    "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=";

  const cardarr = [
    {
      img: "https://i.ytimg.com/vi/YwDZMgIImSg/maxresdefault.jpg",
      title: "Pen",
      like: "3.01K",
    },
    {
      img: "https://i.ytimg.com/vi/OG0gxFIOqGI/maxresdefault.jpg",
      title: "Iragu",
      like: "1.42K",
    },
    {
      img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/short-story-thumbnail-design-template-c8d3daba0e4410fb1f3d7876bb2796b3_screen.jpg?ts=1589979453",
      title: "Animate ShortFilm",
      like: "3.01K",
    },
    {
      img: "https://i.ytimg.com/vi/gZp2x5k_9YI/maxresdefault.jpg",
      title: "Singsot",
      like: "34.01K",
    },
    {
      img: "https://filmfreeway-production-storage-01-storage.filmfreeway.com/projects/project_stills/002/027/318/original/AALY-Thumbnail-Oct-2020.jpg?1602488049",
      title: "AALY",
      like: "2.91K",
    },
    {
      img: "https://www.macworld.com/wp-content/uploads/2023/02/fursat-thumbnail-1.jpg?quality=50&strip=all",
      title: "Pencil",
      like: "3.01K",
    },
    {
      img: "https://i.ytimg.com/vi/YwDZMgIImSg/maxresdefault.jpg",
      title: "Pen",
      like: "3.01K",
    },
    {
      img: "https://blog.shortfundly.com/wp-content/uploads/2020/07/kannalane-tamil-shortfilm-review-by-shortfundly-1.jpg",
      title: "Kannalana",
      like: "3.01K",
    },
    {
      img: "https://blog.shortfundly.com/wp-content/uploads/2021/02/Marakkavea-Ninaikiren-_-Tamil-Short-Film-Review-Rating-2.5_5-800x520.png",
      title: "Marakkavea Ninaikkiren",
      like: "3.01K",
    },
    {
      img: "https://i.ytimg.com/vi/gZp2x5k_9YI/maxresdefault.jpg",
      title: "Singsot",
      like: "34.01K",
    },
    {
      img: "https://filmfreeway-production-storage-01-storage.filmfreeway.com/projects/project_stills/002/027/318/original/AALY-Thumbnail-Oct-2020.jpg?1602488049",
      title: "AALY",
      like: "2.91K",
    },
    {
      img: "https://www.macworld.com/wp-content/uploads/2023/02/fursat-thumbnail-1.jpg?quality=50&strip=all",
      title: "Pencil",
      like: "3.01K",
    },
    {
      img: "https://i.ytimg.com/vi/YwDZMgIImSg/maxresdefault.jpg",
      title: "Pen",
      like: "3.01K",
    },
    {
      img: "https://i.ytimg.com/vi/OG0gxFIOqGI/maxresdefault.jpg",
      title: "Iragu",
      like: "1.42K",
    },
    {
      img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/short-story-thumbnail-design-template-c8d3daba0e4410fb1f3d7876bb2796b3_screen.jpg?ts=1589979453",
      title: "Animate ShortFilm",
      like: "3.01K",
    },
    {
      img: "https://i.ytimg.com/vi/gZp2x5k_9YI/maxresdefault.jpg",
      title: "Singsot",
      like: "34.01K",
    },
  ];
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length === 0) dispatch(getProducts());
    // console.log("first");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Carousel autoplay>
        <div className="BannerDiv">
          <img src={img1} alt="banner" width="100" height="100" />
          <div className="mask"></div>
          <div className="bannercontDiv">
            <div className="usernameDiv">
              <img src={userimg1} alt="user" className="w-full" />
              <h4>Wilson Andrew</h4>
              <button>Follow</button>
            </div>
            <h1 className="titlename">Pen</h1>
            <div className="catagoryDiv">
              <div>Action</div>
              <div>Triller</div>
              <div>English</div>
              <div>U/A 13+</div>
            </div>
            <p className="description">
              “Billa 2" shows the transformation of a Sri Lankan Tamil refugee,
              David Billa, to the most feared underworld don. While corruption
              and bureaucracy... See more
            </p>
            <div className="playbtnDiv">
              <button>{bannerplayicon} Play</button>
              <div>{bannersave}</div>
            </div>
          </div>
        </div>

        <div className="BannerDiv">
          <img src={img2} alt="banner" width="100" height="100" />
          <div className="mask"></div>
          <div className="bannercontDiv">
            <div className="usernameDiv">
              <img src={userimg1} alt="user" />
              <h4>Wilson Andrew</h4>
              <button>Follow</button>
            </div>
            <h1 className="titlename">Iragu</h1>
            <div className="catagoryDiv">
              <div>Action</div>
              <div>Triller</div>
              <div>English</div>
              <div>U/A 13+</div>
            </div>
            <p className="description">
              “Billa 2" shows the transformation of a Sri Lankan Tamil refugee,
              David Billa, to the most feared underworld don. While corruption
              and bureaucracy... See more
            </p>
            <div className="playbtnDiv">
              <button>{bannerplayicon} Play</button>
              <div>{bannersave}</div>
            </div>
          </div>
        </div>
        <div className="BannerDiv">
          <img src={img3} alt="banner" width="100" height="100" />
          <div className="mask"></div>
          <div className="bannercontDiv">
            <div className="usernameDiv">
              <img src={userimg1} alt="user" />
              <h4>Sadhan Bose</h4>
              <button>Follow</button>
            </div>
            <h1 className="titlename">Singcot</h1>
            <div className="catagoryDiv">
              <div>Action</div>
              <div>Triller</div>
              <div>English</div>
              <div>U/A 13+</div>
            </div>
            <p className="description">
              “Billa 2" shows the transformation of a Sri Lankan Tamil refugee,
              David Billa, to the most feared underworld don. While corruption
              and bureaucracy... See more
            </p>
            <div className="playbtnDiv">
              <button>{bannerplayicon} Play</button>
              <div>{bannersave}</div>
            </div>
          </div>
        </div>
        <div className="BannerDiv">
          <img src={img4} alt="banner" width="100" height="100" />
          <div className="mask"></div>
          <div className="bannercontDiv">
            <div className="usernameDiv">
              <img src={userimg1} alt="user" />
              <h4>Wilson Andrew</h4>
              <button>Follow</button>
            </div>
            <h1 className="titlename">AALY</h1>
            <div className="catagoryDiv">
              <div>Action</div>
              <div>Triller</div>
              <div>English</div>
              <div>U/A 13+</div>
            </div>
            <p className="description">
              “Billa 2" shows the transformation of a Sri Lankan Tamil refugee,
              David Billa, to the most feared underworld don. While corruption
              and bureaucracy... See more
            </p>
            <div className="playbtnDiv">
              <button>{bannerplayicon} Play</button>
              <div>{bannersave}</div>
            </div>
          </div>
        </div>
      </Carousel>

      {/* <<<<<<=================== Cards Sections ===================>>>>>> */}

      <div className="home-CardsSection px-3">
        {products?.map((item) => {
          return <Homepagecard key={item.id} item={item} />;
        })}
      </div>
    </>
  );
}

export default HomePage;
