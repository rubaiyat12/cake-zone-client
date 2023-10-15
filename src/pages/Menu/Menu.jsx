import { Helmet } from "react-helmet";
import Cover from "../Shared/Cover";
import menuImg from '../../assets/menu/banner3.PNG';
import dessertImg from '../../assets/menu/banner3.PNG';
import PizzaImg from '../../assets/menu/banner3.PNG';
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectrionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";



const Menu = () => {
    const [menu] = useMenu();
    const Chocolate =menu.filter(item=>item.category === 'Chocolate');
    const Vanilla =menu.filter(item=>item.category === 'Vanilla');
    const Fruitcake =menu.filter(item=>item.category === 'Fruitcake');
    const Coconut =menu.filter(item=>item.category === 'Coconut');
    const Strawberry =menu.filter(item=>item.category === 'Strawberry');
    return (
        <div>
            <Helmet>
        <title>Cake Zone|Our Item</title>

        
      </Helmet>
      <Cover img={menuImg} title={"our items"}> </Cover>
      <SectionTitle
      subHeading={"Don't miss it"} heading={"Today's Offer"}
      ></SectionTitle>
      <MenuCategory items={Strawberry}></MenuCategory>
      <MenuCategory items={Chocolate} title="Chocolate" img={dessertImg}
      ></MenuCategory>
      <MenuCategory items={Vanilla} title={"Vanilla"} img={PizzaImg}></MenuCategory>
      <MenuCategory items={Fruitcake} title={"Fruitcake"} img={PizzaImg}></MenuCategory>
      <MenuCategory items={Coconut} title={"Coconut"} img={PizzaImg}></MenuCategory>
     
      
            
            
            
        </div>
    );
};

export default Menu;