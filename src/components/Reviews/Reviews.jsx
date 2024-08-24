import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useReviews } from "../../contexts/ReviewsContext";
import Loader from "../Loader/Loader";
import Slide from "../Slide/Slide";
import styles from "./Reviews.module.css";
import Stars from "../Stars/Stars";
import Button from "../Button/Button";
import "swiper/css";

function Reviews() {
  const swiperRef = useRef();
  const { reviews, error, isLoading } = useReviews();
  const [currentIndex, setCurrentIndex] = useState(null);
  const [rate, setRate] = useState(null);
  const countReviews = reviews.length;

  useEffect(() => {
    if (reviews.length) {
      setRate(reviews[currentIndex].rate);
    }
  }, [reviews, currentIndex]);

  function handleSliderTitleChange({ activeIndex }) {
    setCurrentIndex(activeIndex);
  }

  if (error) return <h1> {error} </h1>;
  if (isLoading) return <Loader></Loader>;

  return (
    <>
      <div className={styles.slider}>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
          onSlideChange={(swiper) => handleSliderTitleChange(swiper)}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            handleSliderTitleChange(swiper);
          }}
        >
          {reviews.map((review) => {
            return (
              <SwiperSlide key={review.id} className="swiperSlide">
                <Slide review={review} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className={styles.reviewsTitle}>
        <h2>What Our Customers Say</h2>
        <div className={styles.rating}>
          <b>{rate}</b>
          <Stars rate={rate} />
          <i>based on {countReviews} reviews</i>
        </div>
        <Pagination swiper={swiperRef.current} />
      </div>
    </>
  );
}

function Pagination({ swiper }) {
  function prevSlide() {
    swiper.slidePrev();
  }

  function nextSlide() {
    swiper.slideNext();
  }

  return (
    <div className={styles.pagination}>
      <Button type="pagination" event={prevSlide}>
        <img src="Assests/left.svg" alt="<=" />
      </Button>
      <Button type="pagination" event={nextSlide}>
        <img src="Assests/right.svg" alt="=>" />
      </Button>
    </div>
  );
}

export default Reviews;
