import './App.css';
import Card from './card-section/Card'
import data from '../src/card-section/CardData'

function App() {
  const travelCountry = data.map((item)=>{
    return(
      <Card 
      key={item.id}
      {...item}
      
      />
    );
  });

  return (
    <div className="App">
      {travelCountry}
    </div>
  );
}

export default App;
