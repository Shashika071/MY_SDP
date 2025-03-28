import "bootstrap/dist/css/bootstrap.min.css";
import "./FeaturedPosts.css";

import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { assest } from "../../assest/assest";

// Simulated data (you can replace it with actual API or context data)
const allPosts = [
  { id: 1, title: "Adventure in the Mountains", imageUrl: assest.b2, category: "Adventure", author: "John Doe", date: "2024-11-23" },
  { id: 2, title: "Relaxing on the Beach", imageUrl: assest.b4, category: "Relaxation", author: "Jane Smith", date: "2024-11-22" },
  { id: 3, title: "Cultural Wonders of the World", imageUrl: assest.b1, category: "Culture", author: "Alice Brown", date: "2024-11-21" },
  { id: 4, title: "Exploring the Wild Nature", imageUrl: assest.b3, category: "Nature", author: "Mark Wilson", date: "2024-11-20" },
  { id: 5, title: "Road Trip Adventures", imageUrl: assest.b2, category: "Adventure", author: "Emily Clark", date: "2024-11-19" },
  { id: 6, title: "Island Escapes", imageUrl: assest.b4, category: "Relaxation", author: "Chris Allen", date: "2024-11-18" },
  { id: 7, title: "Discovering Hidden Gems", imageUrl: assest.b1, category: "Culture", author: "Olivia Martin", date: "2024-11-17" },
  { id: 8, title: "Wilderness Exploration", imageUrl: assest.b3, category: "Nature", author: "Noah Johnson", date: "2024-11-16" },
  // Add more posts as needed
];

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);

  // Function to shuffle and select random posts
  const getRandomPosts = (numberOfPosts) => {
    const shuffled = [...allPosts].sort(() => 0.5 - Math.random()); // Shuffle array
    return shuffled.slice(0, numberOfPosts); // Select the desired number of posts
  };

  useEffect(() => {
    const randomPosts = getRandomPosts(8); // Get 8 random posts
    setFeaturedPosts(randomPosts); // Set featured posts in state
  }, []);

  return (
    <div className="container-fluid">
      <div className="text-center mb-4">
        <h2 className="featured-title">Featured Travel Posts</h2>
      </div>
      <div className="row g-4"> {/* Use Bootstrap's gap classes for spacing between items */}
        {featuredPosts.map((post) => (
          <div key={post.id} className="col-12 col-sm-6 col-md-4 col-lg-3"> {/* Use col-md-4 for 3 cards per row on tablets */}
            <div className="card post-card h-100">
              <Link to={`/article/${post.id}`}>
                <div
                  className="post-image"
                  style={{ backgroundImage: `url(${post.imageUrl})`, backgroundSize: 'cover', height: '200px' }}
                >
                  <span className="post-category badge bg-success">{post.category}</span>
                </div>
              </Link>
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/article/${post.id}`} className="text-decoration-none text-dark">
                    {post.title}
                  </Link>
                </h5>
                <div className="post-info text-muted">
                  <span className="me-3"><i className="bi bi-person"></i> {post.author}</span>
                  <span><i className="bi bi-calendar"></i> {post.date}</span>
                </div>
                <div className="post-summary">
                  <p>{post.title} is a journey into {post.category} and nature.</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-end mt-3">
        <Link to="/articles" className="see-all-posts text-decoration-none">See All Posts</Link>
      </div>
    </div>
  );
};

export default FeaturedPosts;
