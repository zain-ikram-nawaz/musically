import Explore from "./component/explore";
import BestSeller from "./component/newArrive";

import Homeabout from "./component/homeabout";
import OurProduct from "./component/ourProduct";
import Banner from "./component/banner";
import OurCustomer from "./component/our Customer";

import LandingPage from "./landingPage";

export default function Home() {
  return (
    <main>
      <LandingPage></LandingPage>
      <Explore></Explore>
      <Homeabout></Homeabout>
      <OurProduct></OurProduct>
      <BestSeller></BestSeller>
      <Banner></Banner>
      <OurCustomer></OurCustomer>

    </main>
  );
}
