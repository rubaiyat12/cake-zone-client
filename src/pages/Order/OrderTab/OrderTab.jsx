
import CakeCard from '../../../components/CakeCard/CakeCard';

const OrderTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-10'>
        {
            items.map(item => <CakeCard
            key={item._id}
            item={item}
            ></CakeCard>)
        }
        </div>
    );
};

export default OrderTab;