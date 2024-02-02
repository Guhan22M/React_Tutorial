// import "./App.css";
// import { useState, useEffect } from "react";
// import Axios from "axios"

// function App() {

//   const [excuseval,setexcuse] = useState("")

//   const excusefunc = (value)=>{
//     Axios.get(`https://excuser-three.vercel.app/v1/excuse/${value}/`)   
//     .then((res)=>{
//       setexcuse(res.data[0].excuse)
//   })
//   }
//   useEffect(()=>{
//     excusefunc("party")
//   },[])
//   return (
//   <div className="App" > 
//     <h1>generate An Excuse</h1>
//     <button onClick={()=>excusefunc("party")} >Party</button>
//     <button onClick={()=>excusefunc("family")} >Family</button>
//     <button onClick={()=>excusefunc("office")} >Office</button>
//     <p> {excuseval} </p>
//   </div>
//   );
// }

// export default App;
