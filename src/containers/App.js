import './App.css';
import Card from '../components/Card';

function App() {

  fetch('https://swapi.py4e.com/api/planets/1/')
    .then(response => response.json())
    .then(console.log);

  return (
    <div>
      <header className="p-10">
        <h1 className="text-5xl text-white text-center p-8">
          Welcome to my Star Wars Infotastic Site!
        </h1>
      </header>
      <Card/>
    </div>
  );
}

export default App;
