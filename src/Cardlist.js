import React from 'react';
import Card from './Card';
import './cardlist.css';

const CardList = () => {
  const cardData = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9dB5ERe0v9QUXux7rr6TnHW9nNlvmZpWqqA&s',
      name:'Scott Ayres',
      description: 'Busting social media myths at the Social Media Lab,...',
      sharedConnections: 23,
      sharedConnectionsImage: 'https://www.shutterstock.com/image-photo/close-head-shot-portrait-preppy-260nw-1433809418.jpg',
    },
    {
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9dB5ERe0v9QUXux7rr6TnHW9nNlvmZpWqqA&s',
        name: 'Scott Ayres',
      description: 'SaaS Customer Onboarding Manager / Producer and...',
      sharedConnections: 7,
      sharedConnectionsImage: 'https://www.shutterstock.com/image-photo/close-head-shot-portrait-preppy-260nw-1433809418.jpg',
    },
    {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9dB5ERe0v9QUXux7rr6TnHW9nNlvmZpWqqA&s',
        name: 'Scott Ayres',
        description: 'Busting social media myths at the Social Media Lab,...',
        sharedConnections: 23,
        sharedConnectionsImage: 'https://www.shutterstock.com/image-photo/close-head-shot-portrait-preppy-260nw-1433809418.jpg',
      },
      {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9dB5ERe0v9QUXux7rr6TnHW9nNlvmZpWqqA&s',
      name: 'Scott Ayres',
        description: 'SaaS Customer Onboarding Manager / Producer and...',
        sharedConnections: 7,
        sharedConnectionsImage: 'https://www.shutterstock.com/image-photo/close-head-shot-portrait-preppy-260nw-1433809418.jpg',
      },
    // Add more card data here
  ];

  return (
    <div className="card-list">
      {cardData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          name={card.name}
          description={card.description}
          sharedConnections={card.sharedConnections}
          sharedConnectionsImage={card.sharedConnectionsImage}
        />
      ))}
    </div>
  );
};

export default CardList;