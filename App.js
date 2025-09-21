import React from 'react';
import ProductTable from './ProductTable';
import RenderLists from './RenderLists';

function App() {
  const products = [
    { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
    { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
    { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
    { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
    { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
    { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' }
  ];

  const fruits = [
    { name: 'apple', quantity: 95 },
    { name: 'orange', quantity: 45 },
    { name: 'banana', quantity: 105 },
    { name: 'coconut', quantity: 159 },
    { name: 'pineapple', quantity: 37 }
  ];

  const vegetables = [
    { name: 'potatoes', quantity: 110 },
    { name: 'celery', quantity: 15 },
    { name: 'carrots', quantity: 25 },
    { name: 'corn', quantity: 63 },
    { name: 'broccoli', quantity: 50 }
  ];

  const animals = [
    { name: 'Lion', scientificName: 'Panthero leo', weight: '140kg', diet: 'meat' },
    { name: 'Gorilla', scientificName: 'Gorilla beringei', weight: '220kg', diet: 'plants, insects' },
    { name: 'Zebra', scientificName: 'Equus quagga', weight: '322kg', diet: 'plants' }
  ];

  return (
    <div>
      <ProductTable products={products} />
      <div style={{ marginTop: '30px' }}>
        <RenderLists fruits={fruits} vegetables={vegetables} animals={animals} />
      </div>
    </div>
  );
}

export default App;
