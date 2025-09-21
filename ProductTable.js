import React from 'react';

function ProductTable({ products }) {
  const fruitProducts = products.filter(product => product.category === 'Fruits');
  const vegetableProducts = products.filter(product => product.category === 'Vegetables');

  return (
    <div>
      {/* Search Bar (merged here) */}
      <input type="text" placeholder="Search..." />
      <p>
        <input type="checkbox" /> Only show products in stock
      </p>

      {/* Product Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th style={{ paddingLeft: '50px' }}>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colSpan="2">Fruits</th>
          </tr>
          {fruitProducts.map((product) => (
            <tr key={product.name}>
              <td style={{ color: product.stocked ? 'black' : 'red' }}>
                {product.name}
              </td>
              <td style={{ paddingLeft: '50px' }}>{product.price}</td>
            </tr>
          ))}
          <tr>
            <th colSpan="2">Vegetables</th>
          </tr>
          {vegetableProducts.map((product) => (
            <tr key={product.name}>
              <td style={{ color: product.stocked ? 'black' : 'red' }}>
                {product.name}
              </td>
              <td style={{ paddingLeft: '50px' }}>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
