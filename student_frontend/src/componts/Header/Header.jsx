import './Header.css'; // Add custom CSS for styling

import { Carousel, Container } from 'react-bootstrap';

import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import React from 'react';
import { assest } from '../../assest/assest';

function Header() {
  const iconUrl = assest.icon; // Path to your uploaded icon

  const topPosts = [
    {
      id: 1,
      imageUrl: assest.g,
      category: 'Adventure',
      title: 'Adventure Travel',
    },
    {
      id: 2,
      imageUrl: assest.g2,
      category: 'Relaxation',
      title: 'Adventure Travel',
    },
    {
      id: 3,
      imageUrl: assest.g6,
      category: 'Cultural',
      title: 'Adventure Travel',
    },
    {
      id: 4,
      imageUrl: assest.g5,
      category: 'Nature',
      title: 'Adventure Travel',
    },
  ];

  return (
    <Container fluid className="p-0">
      <Carousel className="header-carousel" interval={5000} controls={true} indicators={true}>
        {topPosts.map((post, index) => (
          <Carousel.Item key={index}>
            <Link to={`/article/${post.id}`}>
              <img
                className="d-block w-100 carousel-image"
                src={post.imageUrl}
                alt={`Slide ${index + 1}`}
              />
            </Link>
            <Carousel.Caption className="carousel-caption">
              <img src={iconUrl} alt="Logo" className="logo" />
              <h2>
                <Link to={`/article/${post.id}`} className="text-white text-decoration-none">
                  {post.title}
                </Link>
              </h2>
              <p>Your best Adventure Deals with nature.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default Header;
