import React from 'react';
import prop1 from '../assets/prop1.jpg';

const Property = () => {
  const properties = [
    {
      _id: Date.now()+1,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, saepe?',
      priceUnit: '5000',
      price:"2 500 000",
      size:"500",
      area: 'Manhattan',
      type:"FOR SALE",
      rooms:"10"
    },
    {
      _id: Date.now()+2,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, saepe?',
      priceUnit: '5000',
      price:"2 500 000",
      size:"500",
      area: 'Manhattan',
      type:"FOR SALE",
      rooms:"10"
    },
    {
      _id: Date.now()+3,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, saepe?',
      priceUnit: '5000',
      price:"2 500 000",
      size:"500",
      area: 'Manhattan',
      type:"FOR SALE",
      rooms:"10"
    },
    {
      _id: Date.now()+4,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, saepe?',
      priceUnit: '5000',
      price:"2 500 000",
      size:"500",
      area: 'Manhattan',
      type:"FOR SALE",
      rooms:"10"
    },
    {
      _id: Date.now()+5,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, saepe?',
      priceUnit: '5000',
      price:"2 500 000",
      size:"500",
      area: 'Manhattan',
      type:"FOR SALE",
      rooms:"10"
    },
    {
      _id: Date.now()+6,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, saepe?',
      priceUnit: '5000',
      price:"2 500 000",
      size:"500",
      area: 'Manhattan',
      type:"FOR SALE",
      rooms:"10"
    },
  
  ];

  const propertyCard = properties.map((property) => (
    <div className='cardShape' key={property._id}>
      <div  className='propertyCard'>
        <div className="propImg">


        <img src={prop1} className='img' alt={Property._id} />
        </div>
        <div className='propDetails'>
          <div className='left'>
            <div className=''>
              <h2>{property.type}</h2>
              <h3>{property.area}</h3>
            </div>
            <div className=''>
              <h4>
                <p>{property.rooms} rooms</p>
               

                <p>{property.size} m2</p>
               
              </h4>
            </div>
          </div>
          <div className='right'>
            <h3>{property.priceUnit} PLN/m2</h3>
            <h3>{property.price} PLN</h3>
          </div>
        </div>
      </div>
    </div>
  ));

  return <div className='propertyList'>{propertyCard}</div>;
};

export default Property;
