
import './App.css'
import Card from './components/Card/Card'
function App(){
  const item1= {
    name:'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  }
  const item2= {
    name: 'Morty Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  }
  const item3= {
    name:'Sam Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
  }
  const item4= {
    name:'Beth Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg'
  }
  return (
    <>
       <div className="cards">
      <Card item={item1} />
      <Card item={item2} />
      <Card item={item3}/>
      <Card item={item4}/>
      </div>
    </>
  )
}

export default App
