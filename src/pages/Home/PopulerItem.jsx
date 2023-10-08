
import SectionTitle from "../../components/SectrionTitle/SectionTitle";
import Menuitem from "../Shared/Menuitem";
import useMenu from "../../hooks/useMenu";


const PopulerItem = () => {
    const [menu]=useMenu();
    const popular =menu.filter(item=>item.category === 'popular');

    // const [menu,setMenu] = useState([]);
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>
    //         {
    //             const popularItems=data.filter(item=>item.category === 'popular')
    //         setMenu(popularItems)})
    
    // },[])
    return (
        <section>
            <SectionTitle
            subHeading={"Populer Items"}
            heading={"From our Item"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    popular.map(item=><Menuitem
                    key={item._id}
                    item={item}
                    ></Menuitem>)
                }
            </div>

        </section>
    );
};

export default PopulerItem;