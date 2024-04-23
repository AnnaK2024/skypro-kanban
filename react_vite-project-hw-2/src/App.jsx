import { useEffect, useState } from 'react';
import './App.css'
import { Header } from './components/Header/Header.jsx';
import { Main } from './components/Main/Main.jsx';
import { PopBrowse } from './components/Popups/PopBrowse/PopBrowse.jsx';
import { PopNewCard } from './components/Popups/PopNewCard/PopNewCard.jsx';
import { PopUser } from './components/Popups/PopUser/PopUser.jsx';
import { cardList } from './data.js';

function App() {
  const [cards, setCards] = useState(cardList)
  const [isLoading, setisLoading] = useState(false)

  const addCard = (e) => {
    e.preventDefault()
    const newCard = {
      id: cards[cards.length -1].id + 10,
      topic: "Web Design",
      title: "Название задачи 1",
      date: "30.10.23",
      status: "Без статуса",
    }

    setCards ([... cards, newCard])
  }

  useEffect( () => {
    setisLoading(true)
    setTimeout ( () => {
      setisLoading(false)
    }, 1000)
  }, [] )

  return (
    <div className="wrapper">
     <PopUser/>
     <PopNewCard/>
     <PopBrowse/>
     <Header addCard={addCard}/>
     <Main isLoading={isLoading} cards={cards}/>
    </div>
  )
}

export default App
