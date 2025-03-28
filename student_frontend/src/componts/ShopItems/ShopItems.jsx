import './ShopItems.css'; // Import custom CSS for additional styling

import { Button, Card, Col, Row } from 'react-bootstrap';

import React from 'react';
import { assest } from '../../assest/assest';

const ShopItems = () => {
  // Hardcoded data for the shops
  const shops = [
    {
      name: 'Sri Lankan Handicrafts',
      image: assest.s1,
      description: 'Discover unique handcrafted items made by local artisans.',
      products: ['Wooden Masks', 'Handwoven Fabrics', 'Clay Pottery'],
      link: 'https://example.com/shop1'
    },
    {
      name: 'Ceylon Tea Boutique',
      image: assest.s2,
      description: 'Buy premium Ceylon tea from Sri Lanka’s best plantations.',
      products: ['Ceylon Black Tea', 'Green Tea', 'Herbal Teas'],
      link: 'https://example.com/shop2'
    },
    {
      name: 'Galle Arts & Crafts',
      image: assest.s3,
      description: 'Shop for unique art pieces and local crafts.',
      products: ['Art Paintings', 'Handcrafted Jewelry', 'Wooden Sculptures'],
      link: 'https://example.com/shop3'
    },
    {
      name: 'Colombo Jewelry Studio',
      image: assest.s4, // Add the correct image path
      description: 'Explore exquisite handcrafted jewelry pieces from Colombo.',
      products: ['Gold Necklaces', 'Silver Rings', 'Gemstone Earrings'],
      link: 'https://example.com/shop4'
    },
    // New shop 2
    {
      name: 'Lanka Spices & Herbs',
      image: assest.s5, // Add the correct image path
      description: 'Buy the finest Sri Lankan spices and herbs for your kitchen.',
      products: ['Cinnamon', 'Curry Leaves', 'Cardamom'],
      link: 'https://example.com/shop5'
    },
  ];

  return (
    <div className="shop-container mt-5">
      <h2 className="text-center mb-5 shop-header">Explore Sri Lankan Shops</h2>
      <Row className="shop-items-row">
        {shops.map((shop, index) => (
          <Col md={3} sm={6} xs={12} key={index} className="mb-4">
            <Card className="shop-card shadow-lg">
              <Card.Img variant="top" src={shop.image} alt={shop.name} className="shop-image" />
              <Card.Body>
                <Card.Title className="shop-title">{shop.name}</Card.Title>
                <Card.Text className="shop-description">{shop.description}</Card.Text>
                <ul className="shop-products">
                  {shop.products.map((product, i) => (
                    <li key={i} className="product-item">{product}</li>
                  ))}
                </ul>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" className="visit-btn" href={shop.link} target="_blank">
                  Visit Shop
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ShopItems;
