import React, { useEffect, useState } from "react";
import { Carousel, Spin } from "antd";
import Header from "../../components/Layout/Header/Header";
import "./homepage.css";
import Homepagecard from "../../components/cards/Hompage/Homepagecard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/Home/productReducer";
import CarouselHomePage from "./CarouselHomePage";
import { Helmet } from "react-helmet";
function HomePage() {
  const { products, isLoading } = useSelector((state) => state.products);
  const [carouselPic, setCarouselPic] = useState([]);
  const [Loader, setLoader] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (products?.results?.length > 0) {
      let firstFourObjects = products?.results?.slice(0, 4);
      setCarouselPic(firstFourObjects);
    }
  }, [products]);

  return (
    <>
      <Helmet>
        <title>TheWeedoc</title>
        <meta
          name="description"
          content="Enjoy the best Short Films & documentary you wouldn't love, Creators upload their original content and publish it on TheWeedoc."
        />
      </Helmet>
      <Header />
      {isLoading ? (
        <div className="loaderDiv">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <Carousel autoplay>
            {carouselPic?.map((item) => (
              <CarouselHomePage key={item.id} item={item} />
            ))}
          </Carousel>

          {/* <<<<<<=================== Cards Sections ===================>>>>>> */}

          {/* <div className="home-CardsSection px-3"> */}
          {/* <Spin spinning={isLoading}> */}

          <div className="p-3 md:py-6 md:px-16" style={{ minHeight: "75vh" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 custom-lg:grid-cols-3 gap-8 custom-lg:gap-x-12 lg:gap-y-8 grid-rows-auto">
              {products?.results?.map((item) => {
                return <Homepagecard key={item.id} item={item} />;
              })}
            </div>
          </div>
          {/* </Spin> */}
        </>
      )}
    </>
  );
}

export default HomePage;
