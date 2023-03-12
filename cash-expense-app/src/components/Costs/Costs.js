import './Costs.css';
import CostItem from './CostItem';
import Card from '../UI/Card';

const Costs = () => {
    const costs = [
        {
          date: new Date(2022, 1, 22),
          discription: 'headphones',
          price: 50,
        },
        {
          date: new Date(2022, 5, 10),
          discription: 'notebook',
          price: 950,
        },
        {
          date: new Date(2022, 7, 3),
          discription: 'phone',
          price: 400,
        }
    ]

    return (
        <Card>
            <CostItem 
              date = {costs[0].date}
              discription = {costs[0].discription}
              price = {costs[0].price}
            ></CostItem>
            <CostItem 
              date = {costs[1].date}
              discription = {costs[1].discription}
              price = {costs[1].price}
            ></CostItem>
            <CostItem 
              date = {costs[2].date}
              discription = {costs[2].discription}
              price = {costs[2].price}
            ></CostItem>
      </Card>
    )

}
 export default Costs;