import React from "react"
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';

const dummy = [{
  username:"farizsabili0604"
  ,email:"ruri@gmail.com"
  ,experience:"expert"
  ,level:"200"
},
{
  username:"bambang"
  ,email:"bb@gmail.com"
  ,experience:"amateur"
  ,level:"20"
}]

function App() {
 var keyword =""
 const [searchResult, setSearch]=React.useState([{
  username:""
  ,email:""
  ,experience:""
  ,level:""
 }])
 const search = (keyword)=>{
  let lowerCase = keyword.toLowerCase()
  const data = dummy
  setSearch(data.filter((value)=>{
    return ((value.username).toLowerCase()===lowerCase) ||
    ((value.email).toLowerCase()===lowerCase) ||
    ((value.experience).toLowerCase()===lowerCase)||
    ((value.level).toLowerCase()===lowerCase)
  }))

 }
  return (
    <div className="App">
      <input className="searchBar"placeholder='Keyword Email,Username,etc.'onChange={(value)=> keyword = value.target.value}></input>
      <button onClick={()=>search(keyword)}>Search</button>
      {searchResult.map(data=>{
        return(<><h2>Username:{data.username}</h2>
        <h2>Email:{data.email}</h2>
        <h2>Experience:{data.experience}</h2>
        <h2>Level:{data.level}</h2></>)
      })}
      
      <Form/>
    </div>
  );
}

export default App;
