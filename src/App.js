import './App.css';
import Login from './Component/Login/Login';


function App() {
  return (
    <>
    <div id='div1'>
      <div>
      <h1>The best offer <br/>
       <span className='blue'>for your business</span></h1>
      <p id='main_p'>Lorem ipsum dolor sit amet consectetur adipisicing <br/>elit. Reprehenderit aut earum excepturi quam tenetur<br/> id labore natus beatae facere saepe obcaecati <br/>voluptatum aspernatur, consequatur itaque animi <br/>sapiente possimus et quaerat facilis?</p>
      </div>
      <div>
      <Login></Login>
      </div>
    </div>
    
    </>
  );
}

export default App;
