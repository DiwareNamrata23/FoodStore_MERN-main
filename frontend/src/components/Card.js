import React,{useRef, useState, useEffect} from 'react';
import { useCart, useDispatchCart } from './ContextReducer';

export default function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();
  let options = props.options;
  let priceOptions = Object.keys(options)
  const [qty, setqty] = useState(1)
  const [size, setsize] = useState("")
  const handleAddToCart = async () => {
    let food = data.find(item => item.id === props.foodItem._id);
  
    if (food) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty });
      } else {
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size, img: props.ImgSrc });
      }
    } else {
      await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size });
    }
  }
  

  useEffect(() => {
    {      
      setsize(priceRef.current.value); 
    }
  }, []); 
  
  let finalPrice = qty * parseInt(options[size]);


  return (
    <div>
      <div>
        <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
          <img
            src={props.foodItem.img}
            className="card-img-top "
            alt="..."
            style={{height:"150px",objectFit:"fill"}}
          />
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>
            <div className="container w-100">
              <select className="m-2 h-100 bg-success rounded" onChange={(e)=> setqty(e.target.value)}>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>

              <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e)=> setsize(e.target.value)}>
                {priceOptions.map((data)=>{
                  return <option key={data} value={data}>{data}</option>
                })}
              </select>

              <div className="d-inline h-100 fs-s">
                {finalPrice}/-
              </div>
            </div>
            <hr/>
            <button className='btn btn-success justify-center ms-2' onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
