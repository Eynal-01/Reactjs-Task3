import React from 'react';


// export default function Product({products}) {
//         const currentDate = new Date(); // Get the current date
    
//         // Function to check if a product has expired
//         const isExpired = (expirationDate) => {
//             const expiration = new Date(expirationDate);
//             return expiration < currentDate; // Compare expiration date with current date
//         };
//   return (
//     <div>
//             <h2>Product List</h2>
//             <ul>
//                 {products.map((product, index) => (
//                     <li key={index}>
//                         {product.name} - {product.expirationDate}
//                         {isExpired(product.expirationDate) ? ' (Expired)' : ''}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//   )
// }

const ProductList = ({ products }) => {
    const currentDate = new Date(); // Get the current date

    // Function to check if a product has expired
    const isExpired = (expirationDate) => {
        const expiration = new Date(expirationDate);
        return expiration < currentDate; // Compare expiration date with current date
    };

    return (
        <div>
            <h2>Product List</h2>
                {products.map((product, index) => (
                    <div style={{backgroundColor:"gray", display:"inline-block", width:"320px", height:"45vh", margin:"50px"}} key={index}>
                        <div style={{marginTop:"6%", fontSize:"22px", fontWeight:"bold"}}>
                        {product.name} <br></br> {product.expirationDate}
                        </div>
                        <img src={product.image} style={{width:"300px", height:"300px", position:"absolute", marginLeft:"-8%"}}></img>
                        {isExpired(product.expirationDate) ?  <img src="https://theartofbusinessenglish.com/wp-content/uploads/2020/09/Expired-Offer.png" style={{width:"200px", height:"200px", position:"absolute", marginLeft:"-5.5%", marginTop:"2%"}}></img> : ''}
                    </div>
                ))}
        </div>
    );
};

export default ProductList;
