import { ReviewsProvider } from "../contexts/ReviewsContext";

import Button from "./Button";
import CategoryCard from "./CategoryCard";
import CardBox from "./CardBox";
import Footer from "./Footer";
import Header from "./Header";
import Reviews from "./Reviews";
import Wrapper from "./Wrapper";
import WrapperImage from "./WrapperImage";
import WrapperTitle from "./WrapperTitle";
import ShopCard from "./ShopCard";

function Homepage() {
  return (
    <>
      <Wrapper type="block">
        <WrapperTitle type="block">
          <h2>Explore Our Alowishus</h2>
          <p>
            A drink from the ‘My Alowishus’ bottled brews range OR grab one of
            our delicious coffee’s.
          </p>
        </WrapperTitle>
        <CardBox>
          <CategoryCard
            title="Our Catering"
            desc="Alowishus Catering, delicious drop off Catering"
            icon="./Assests/FastFoodIcon.svg"
            btn="Order cathering"
          />
          <CategoryCard
            title="The Food"
            desc="Our entire menu is available as dine in or takeaway."
            icon="Assests/FoodIcon.svg"
            btn="food menu"
          />
          <CategoryCard
            title="The Gelato"
            desc="Life is like GELATO, enjoy it before it melts."
            icon="Assests/IcecreamIcon.svg"
            btn="Discover more"
          />
        </CardBox>
      </Wrapper>

      <Wrapper type="inline">
        <WrapperTitle type="inline">
          <h2>Order Your Favourite Coffee</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <Button type="primary">Order Now</Button>
        </WrapperTitle>
        <WrapperImage type="inline">
          <img src="Assests/Coffe3.svg" alt="coffe" />
        </WrapperImage>
      </Wrapper>

      <Wrapper type="block">
        <WrapperTitle type="block">
          <h2>Best Selling Coffee</h2>
          <p>
            A drink from the ‘My Alowishus’ bottled brews range OR grab one of
            our delicious coffee’s.
          </p>
        </WrapperTitle>
        <CardBox>
          <ShopCard
            img="Assests/Coffe5.svg"
            rank="1"
            title="Double Espresso"
            desc="Amet minim mollit non deserunt dolor ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis."
            price="$59.99"
          />
          <ShopCard
            img="Assests/Coffe5.svg"
            rank="2"
            title="Caramel Frappe"
            desc="Amet minim mollit non deserunt dolor ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis."
            price="$59.99"
          />
          <ShopCard
            img="Assests/Coffe5.svg"
            rank="3"
            title="Iced Coffee"
            desc="Amet minim mollit non deserunt dolor ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis."
            price="$59.99"
          />
        </CardBox>
      </Wrapper>

      <Wrapper type="inline">
        <WrapperImage type="inline">
          <div className="mobile-images">
            <img src="Assests/MobilePreview.png" alt="" />
            <img src="Assests/MobilePreview.png" alt="" />
          </div>
        </WrapperImage>
        <WrapperTitle type="inline">
          <h2>Instant Coffee At Your Home</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <Button type="primary">Download our app</Button>
        </WrapperTitle>
      </Wrapper>
      <Wrapper type="slider">
        <ReviewsProvider>
          <Reviews />
        </ReviewsProvider>
      </Wrapper>
    </>
  );
}

export default Homepage;
