import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Movies from "./component";

function App() {
  // [10, 15, 22, ...] - lưu dạng mảng các State k quan tâm tên biến
  // những biến state này được lưu ngoài component nên kh bị xóa mỗi khi rerender
  const [count, setCount] = useState<number>(10);
  // const [number, setNumber] = useState<number>(15); 
  // const [number2, setNumber2] = useState<number>(22); 
  // let num = 1; // khi rerender lại giao diện sẽ bị Reset do nằm trong scope của thg này -> bị GC gom
  const [input,setInput] = useState<string>("");

  const handleSuccessAPI = (response: any) => {
    console.log(response.data.results);
  }
  const handleFailedAPI = () => {
    alert("Failed to load API")
  }

  const callAPI = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/tv?api_key=a10ee5569194b352bcca20840b7f8a32&with_networks=213"
      ) 
      .then(handleSuccessAPI)
      .catch(handleFailedAPI)
      .finally(() => {
        console.log("Ket thuc ham call API");
      })
      
  }
  const buttonHandleClick = () => { // hàm này xem state nào thay đổi từ trên xuống dưới r render 1 lần hết
    setCount(count + 1);
  }
  useEffect(callAPI, []);
  // update frequently everytime input text changed
  useEffect(() => {
    if (input !== '') { // this condition to cancel first rendering
      callAPI();
    }
  },[input]) 
  
  //1. Callback: callAPI
  //2. Dependency arr (phụ thuộc vào đầu mà chạy lại cái call back)
  // []: chỉ chạy lần đầu khi render
  // useEffect(callAPI, input);
  useEffect(() => {
    
  })

  return (
    <>
      <h1>{count}</h1>
      <button onClick={buttonHandleClick}>Button</button>
      <input type="text" value={input} onChange={(e) => {setInput(e.target.value)}} />
    </>
  )
  // return (
  //   <>
  //     <Movies api="http://localhost:8080/movie"/>
  //   </>
  // );
}
//down axios
export default App
