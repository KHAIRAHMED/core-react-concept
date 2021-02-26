import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

var name = 'khair';
var person = {
  name :"khair",
  age : 23

}
var style ={
  color : 'red'
}
var names =['asma','mohammad','sabir']
var jobs =['houseWife',"baby",'baby']



function App() {
  var product =[
    {name:"photoshop" , price:45},
    {name:"photoshop2" , price:45},
    {name:"photoshop3" , price:45},
    {name:"photoshop4" , price:45}
  ]


  const friends =[
    {name:"khair",roll:45,Dept:'TCT'},
    {name:"khair",roll:45,Dept:'TCT'},
    {name:"khair",roll:45,Dept:'TCT'},
    {name:"khair",roll:45,Dept:'TCT'}
  ]


const nayok =['a','b','c','d']


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />


        <Counter></Counter>

      <ul>
        {
          nayok.map(nayok=><li>{nayok}</li> ) 
        }
        {
          product.map(producs=><li> {producs.name} </li>)
        }
    
      </ul>

      {
        friends.map(details=>< FriendsDetail dts={details}></ FriendsDetail>)
      }

        <p>
          Edit React  <code>src/App.js</code> and save to reload.
        </p>
     <p> i am react person</p>
     {/* similiar look different data  */}

     
     <Person name="khair" job ="developer"></Person>
     <Person name="saleh" job ="audit officer"></Person>
     <Person name="jalal" job ="abroad"></Person>
     <Person name={names[0]} job ={jobs[0]}></Person>
     <Person name={names[1]} job={jobs[1]}></Person>
     <Person name={names[2]} job={jobs[2]}></Person>



      {
        product.map(productss =>
          <ProductsList products ={productss}></ProductsList>)
      }
     {/* <ProductsList products ={product[0]}></ProductsList>
     <ProductsList products ={product[0]}></ProductsList>
     <ProductsList products ={product[0]}></ProductsList> */}

     {/* end  */}




     {/* useEffect  */}
     <UseEffect></UseEffect>
      </header>
    </div>
  );
}

// simillar look different data 

function Person(props){
  return(
    <div style={{border:"2px solid red", margin:"10px", padding:'10px'}}>
      <h1>Name : {props.name}</h1>
      <p>Profession :{props.job}</p>
    </div>
  );
}



var style ={}
function ProductsList(props){
  var style ={
    border:"1px solid red",
    height:'200px',
    width:"200px",
    backgroundColor:'lightGray',
    color:'black',
    padding:"10px",
    margin:"10px",
    float :"left"

  }
  return (
    <div style ={style}>
        <h3>{props.products.name}</h3>
        <h5>{props.products.price}</h5>
        <button>Buy Now</button>
    </div>
  );
}


function FriendsDetail(props){
  return(
    <div style={{border:"1px solid red", margin :"10px"}}>
      <h4>{props.dts.name}</h4>
      <h5>{props.dts.roll}</h5>
      <h5>{props.dts.Dept}</h5>
    </div>
  )
}



// state 
function Counter(){
  const [count,setState]=useState(10);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setState(count+1)}>Increase</button>
      <button onClick={()=>setState(count-1)}>Decrease</button>
    </div>
  )
}




// useEffect 
function UseEffect(){
  const [users,setUsers]=useState([])
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>setUsers(data))
},[])
  return(
    <div>
     <h1>{users.map((element)=><p>{element.name}</p>)}</h1>
      <ul>
        {
          users.map((user)=>  <li> Name :{user.name}</li> )
        }
      </ul>
    </div>
  )
}

// end 













export default App;

