

const Menuitem = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="flex space-x-4">
            <img  style={{borderRadius:'40%'}} className="w-[110px]" src={image} alt="" />
            <div>
                <h3 className="uppercase ">{name}----------</h3>
                <p>{recipe}</p>

            </div>
            <p className="text-red-400">{price}</p>
            
        </div>
    );
};

export default Menuitem;