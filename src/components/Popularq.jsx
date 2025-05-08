import React, { useState } from 'react';
import './popularq.css';

const questions = [
  {
    title: "How do I optimize React component re-renders?",
    description: "I'm having performance issues with my React app. What are the best practices for optimizing component re-renders?",
    tags: ["react", "performance", "javascript"],
    author: "Alex Johnson",
    time: "2 hours ago",
    votes: 24,
    answers: 8,
    views: 1243
  },
  {
    title: "What are the best hiking trails in Yosemite National Park?",
    description: "Looking for recommendations on the best day hikes for intermediate hikers.",
    tags: ["travel", "hiking", "outdoors"],
    author: "Sarah Miller",
    time: "5 hours ago",
    votes: 37,
    answers: 12,
    views: 2089
  },
  {
    title: "How do you make authentic Italian pizza dough from scratch?",
    description: "Trying to perfect my homemade pizza. Any tips for authentic dough?",
    tags: ["cooking", "recipes", "italian-food"],
    author: "Michael Chen",
    time: "1 day ago",
    votes: 19,
    answers: 6,
    views: 876
  },
  {
    title: "How to deal with exam anxiety effectively?",
    description: "I feel very nervous before exams. How can I stay calm and focused?",
    tags: ["mental-health", "study-tips", "student-life"],
    author: "Ravi Kumar",
    time: "2 days ago",
    votes: 35,
    answers: 11,
    views: 1670
  },
  {
    title: "What skills should I learn to boost my career in 2025?",
    description: "I'm looking to grow professionally. What skills are most in demand this year?",
    tags: ["career", "skills", "personal-growth"],
    author: "Ananya Das",
    time: "6 hours ago",
    votes: 22,
    answers: 5,
    views: 1155
  }
];

const PopularQ = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleQuestions = showAll ? questions : questions.slice(0, 3);

  return (
    <div className="popularq-section">
      <div className="popularq-header">
        <div className="tabs">
          <span className="active">Trending</span>
        </div>
      </div>

      <div className="question-list">
        {visibleQuestions.map((q, index) => (
          <div className="question-card" key={index}>
            <h3>{q.title}</h3>
            <p>{q.description}</p>
            <div className="tags">
              {q.tags.map((tag, idx) => (
                <span className="tag" key={idx}>{tag}</span>
              ))}
            </div>
            <div className="questioninfo">
            
              <span className="author">{q.author}</span>
              <span className="time"> · {q.time}</span>
              <span className="stats">{q.votes} votes · {q.answers} answers · {q.views} views</span>
            </div>
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="load-more">
          <button onClick={() => setShowAll(true)}>Show more</button>
        </div>
      )}
    </div>
  );
};

export default PopularQ;
