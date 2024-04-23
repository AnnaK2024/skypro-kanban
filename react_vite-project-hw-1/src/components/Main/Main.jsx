import { Card } from "../Card/Card.jsx";
import { Column } from "../Column/Column.jsx";

export const Main = () => {
  return (
    <main className="main">
        <div className="container">
          <div className="main__block">
            <div className="main__content">
             <Column title= {'Без статуса'} cards={
                <>
                 <Card name={'Web Design'} color={'_orange'} />
                 <Card name={'Researgh'} color={'_green'} />
                 <Card name={'Web Design'} color={'_orange'} />
                 <Card name={'Copywriting'} color={'_purple'} />
                 <Card name={'Researgh'} color={'_green'} />
                </>
              }/>

              <Column title= {'Нужно сделать'} cards= {<Card name={'Researgh'} color={'_green'} />} />

              <Column title= {'В работе'} cards={
                <>
                 <Card name={'Researgh'} color={'_green'} />
                 <Card name={'Copywriting'} color={'_purple'} />
                 <Card name={'Web Design'} color={'_orange'} />
                </>
              }/>

              <Column title= {'Тестирование'} cards= {<Card name={'Researgh'} color={'_green'} />} />

              <Column title= {'Готово'} cards= {<Card name={'Researgh'} color={'_green'} />} />

            </div>
          </div>
        </div>
    </main>
  )
}