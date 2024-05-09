import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navebar';

export default function MyOrder() {
    const [orderData, setOrderData] = useState({});

    useEffect(() => {
        fetchMyOrder();
    }, []);

    const fetchMyOrder = async () => {
        const userEmail = localStorage.getItem('userEmail');
        if (!userEmail) return;

        try {
            const response = await fetch("http://localhost:5001/api/myorderData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: userEmail })
            });
            const data = await response.json();
            setOrderData(data.orderData);
        } catch (error) {
            console.error('Error fetching order data:', error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    {orderData && orderData.order_data && orderData.order_data.map((orderArray, index) => (
                        <div key={index}>
                            {orderArray.map((order, subIndex) => (
                                <div key={subIndex} className='col-12 col-md-6 col-lg-3'>
                                    <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                        {/* Render order details here */}
                                        <div className="card-body">
                                            <h5 className="card-title">{order.name}</h5>
                                            <p>Qty: {order.qty}</p>
                                            <p>Size: {order.size}</p>
                                            <p>Price: ₹{order.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
