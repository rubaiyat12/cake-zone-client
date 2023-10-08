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
    const dessert =menu.filter(item=>item.category === 'dessert');
    const soup =menu.filter(item=>item.category === 'soup');
    const salad =menu.filter(item=>item.category === 'salad');
    const pizza =menu.filter(item=>item.category === 'pizza');
    const offered =menu.filter(item=>item.category === 'offered');
    return (
        <div>
            <Helmet>
        <title>Cake Zone|Our Item</title>

        
      </Helmet>
      <Cover img={menuImg} title={"our items"}> </Cover>
      <SectionTitle
      subHeading={"Don't miss it"} heading={"Today's Offer"}
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory items={dessert} title="dessert" img={dessertImg}
      ></MenuCategory>
      <MenuCategory items={pizza} title={"pizza"} img={PizzaImg}></MenuCategory>
      <MenuCategory items={salad} title={"salad"} img={PizzaImg}></MenuCategory>
      <MenuCategory items={soup} title={"soup"} img={PizzaImg}></MenuCategory>
     
      
            
            
            
        </div>
    );
};

export default Menu;