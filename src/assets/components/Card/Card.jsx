import './Card.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Card(props) {
  const { color, tariff, speed, selectedTariff, onSelect } = props;
  const headerClass = `card__header card__header_${color}`;
  const bodyClass = `card__body card__body_${color}`;

  const handleSelectTariff = () => {
    onSelect(tariff);
  };

  return (
    <article
      className={classNames('card', {
        card_special: selectedTariff === tariff
      })}
      onClick={handleSelectTariff}
    >
      <header className={headerClass}>
        Безлимитный <span>{tariff}</span>
      </header>
      <div className={bodyClass}>
        <span className="card__currency">руб</span>
        <span className="card__price">{tariff}</span>
        <span className="card__period">/мес</span>
      </div>
      <p className="card__description">
        до <span>{speed}</span> Мбит/сек
      </p>
      <footer className="card__footer">
        Объем включенного трафика не ограничен
      </footer>
    </article>
  );
}

Card.propTypes = {
  color: PropTypes.string.isRequired,
  tariff: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  selectedTariff: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired
};
