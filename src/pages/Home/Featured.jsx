import SectionTitle from "../../components/SectrionTitle/SectionTitle";
import featuredImg from '../../assets/home/featured1.PNG';
import './Featured.css';


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-10 my-20">
            <SectionTitle
            subHeading={"Check it Out"}
            heading={"Featured Items"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 py-20 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Jun 20,2023</p>
                    <p className="uppecase">Where can I get One</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Mollitia voluptates omnis, necessitatibus officiis cumque aspernatur perspiciatis
                         distinctio est adipisci quos veritatis minima corrupti. Ullam eligendi doloribus
                          sequi obcaecati placeat repellendus odio reiciendis, facilis beatae accusamus 
                          minima ea omnis excepturi quasi,
                         amet natus distinctio magnam qui, assumenda possimus ducimus cum. Quae?</p>
                         <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>

                </div>
            </div>
            
        </div>
    );
};

export default Featured;