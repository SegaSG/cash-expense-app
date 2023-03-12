import './CostItem.css';
import CostDate from './CostDate';
import Card from '../UI/Card';

const CostItem = (props) => {
    return (
        <Card className='cost-item'>
            <CostDate date={props.date} />
            <div>
                <h2>{props.discription}</h2>
                <div className='cost-item__price'>${props.price}</div>
            </div>
            
        </Card>
    )    
}

export default CostItem;