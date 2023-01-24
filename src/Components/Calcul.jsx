import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Minus, Multip, Add } from "../store/calculSlide";
const Calcul=()=>{
    const [value,setValue]=useState('');
    const [num,setNum]=useState('');
    const select=useSelector(state=>state)
    const dispatch = useDispatch()
    return(
        <div>
       <input type="number" onChange={(e)=>setValue(parseInt(e.target.value))}/>
       
       <input type="number" onChange={(e)=>setNum(parseInt(e.target.value))}/>
       
       <button onClick={()=>dispatch(Add(value,num))}>Add</button>
       <button onClick={()=>dispatch(Minus(value,num))}>Minus</button>
       <button onClick={()=>dispatch(Multip(value,num))}>Multiply</button>
       <h2>Result:{select}</h2>

       </div>

    )
}
export default Calcul;