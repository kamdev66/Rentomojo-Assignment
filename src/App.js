import './App.css';
import React,{useEffect,useState} from 'react';
import axios from 'axios';
function App() {
 const [data,setData]=useState([])

 const baseURL="https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json"

  useEffect(()=>{
    axios.get(`${baseURL}`)
        .then((res)=>{
          setData(res.data)
          console.log(res.data[1].title);
        })
        .catch((err)=>{
              console.log(err)
        });
  },[])
  return (
    <div className="App">
    {
     data.map((datas,index)=>{
       return(
       // 
      datas.title? <div className='likeCard'key={index.toString()}>
          <h1><span>Title: </span>{datas.title}</h1>
          <h1><span>Platform: </span>{datas.platform}</h1>
          <h1><span>Score: </span>{datas.score}</h1>
          <h1><span>Genre: </span>{datas.genre}</h1>
          <h1><span>Editors Choice: </span>{datas.editors_choice}</h1>
        </div> : null
       )
     })
    }
    </div>
  );
}

export default App;
