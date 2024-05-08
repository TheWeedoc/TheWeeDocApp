import React, { useEffect, useState } from "react";
import { Carousel, Spin, Skeleton } from "antd";
import Header from "../../components/Layout/Header/Header";
import Homepagecard from "../../components/cards/Hompage/Homepagecard";
import { useDispatch, useSelector } from "react-redux";
import { getMoreProducts, getProducts } from "../../store/Home/productReducer";
import CarouselHomePage from "./CarouselHomePage";
import { Helmet } from "react-helmet";
import { debounce } from "lodash";

function HomePage() {
  const dispatch = useDispatch();
  const { products, isLoading, next, isLoadingMore } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProducts({ page: 1, page_size: 20 }));
  }, [dispatch]);

  useEffect(() => {
    if (products?.length > 0) {
      setCarouselPic(products.slice(0, 4));
    }
  }, [products]);

  // Handle infinite scrolling
  const handleScroll = debounce(() => {
    // Calculate if the user has scrolled to the bottom of the page
    const scrolledToBottom =
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100;

    // If scrolled to the bottom and there is a next page, load more products
    if (scrolledToBottom && next) {
      dispatch(getMoreProducts());
    }
  }, 300); // Adjust debounce delay time as needed

  useEffect(() => {
    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const [carouselPic, setCarouselPic] = useState([]);

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

          <div className="p-3 md:py-6 md:px-16" style={{ minHeight: "75vh" }}>
            <div className="list_videos">
              {products.map((item) => (
                <Homepagecard key={item.id} item={item} />
              ))}
            </div>
            {isLoadingMore && next && (
                <div style={{display:"flex",justifyContent:"center"}} className="w-100" >
                  <div className="loader"></div>
                </div>
              )}
          </div>
        </>
      )}
    </>
  );
}

export default HomePage;
