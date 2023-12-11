import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Header/Banner";
import About from "../About/About";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Hassan | Home</title>
      </Helmet>
      <Banner></Banner>
      <About></About>
    </div>
  );
};

export default Home;
