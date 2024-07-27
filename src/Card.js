import SharedConnections from './shared'; // Import the component
import './Card.css';

const Card = ({ image, name, description, sharedConnections, sharedConnectionsImage }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <SharedConnections image={sharedConnectionsImage} count={sharedConnections} />
      </div>
      <div className="card-action">
        <button>Connect</button>
      </div>
    </div>
  );
};

export default Card;