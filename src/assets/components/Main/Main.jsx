import './Main.css';
import Card from '../Card/Card.jsx';
import { useState } from 'react';

const cardsData = [
  {
    color: 'blue',
    tariff: 300,
    speed: 10
  },
  {
    color: 'green',
    tariff: 450,
    speed: 50
  },
  {
    color: 'red',
    tariff: 550,
    speed: 100
  },
  {
    color: 'black',
    tariff: 1000,
    speed: 200
  }
];

export default function Main() {
  const [currentTariff, setCurrentTariff] = useState(0);
  const handleChoose = e => {
    const tariff = +e.currentTarget.id;
    setCurrentTariff(tariff);
  };

  return (
    <main>
      <section className="section">
        {cardsData.map(cardData => (
          <Card
            key={cardData.tariff}
            color={cardData.color}
            tariff={cardData.tariff}
            speed={cardData.speed}
            choose={handleChoose}
            currentTariff={currentTariff}
          />
        ))}
      </section>
    </main>
  );
}
