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
  const [selectedTariff, setSelectedTariff] = useState(0);
  const handleChoose = tariff => {
    if (tariff === selectedTariff) {
      setSelectedTariff(0);
    } else {
      setSelectedTariff(tariff);
    }
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
            onSelect={handleChoose}
            selectedTariff={selectedTariff}
          />
        ))}
      </section>
    </main>
  );
}
