import PriceOption from '../components/PriceOption/PriceOption';
const priceOptions =[
    {
        "id": 1,
        "name": "Basic Membership",
        "price": 29.99,
        "features": [
          "Access to cardio and strength training equipment",
          "Unlimited access during regular hours",
          "Locker room access"
        ]
      },
      {
        "id": 2,
        "name": "Premium Membership",
        "price": 49.99,
        "features": [
          "Access to all gym facilities, including swimming pool and sauna",
          "Unlimited access during extended hours",
          "Personalized workout plans",
          "Group fitness classes"
        ]
      },
      {
        "id": 3,
        "name": "Family Membership",
        "price": 89.99,
        "features": [
          "Access for the whole family (2 adults, 2 children)",
          "Unlimited access during regular hours",
          "Family-friendly fitness classes",
          "Childcare services"
        ]
      },
      {
        "id": 4,
        "name": "Student Membership",
        "price": 19.99,
        "features": [
          "Access to cardio and strength training equipment",
          "Unlimited access during regular hours",
          "Valid student ID required"
        ]
      }
];

const PriceOptions = () => {
    return (
        <div className='m-12'>
            <h2 className='text-5xl text-center mb-5'>Best Prices</h2>
           <div className='grid md:grid-cols-3 gap-6'>
           {
                priceOptions.map(option=><PriceOption key={priceOptions.id} option={option}></PriceOption>)
            }
           </div>
           
        </div>
    );
};

export default PriceOptions;