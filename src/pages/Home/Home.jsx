import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import PopulerItem from "./PopulerItem";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <div>
             
            <Helmet>
        <title>Cake Zone|Home</title>
        
      </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopulerItem></PopulerItem>
            <Featured></Featured>
            <Testimonials></Testimonials>
            
        </div>
    );
};

export default Home;