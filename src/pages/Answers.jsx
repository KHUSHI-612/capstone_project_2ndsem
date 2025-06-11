import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './answers.css';

const Answers = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newAnswer, setNewAnswer] = useState('');
  const [answers, setAnswers] = useState([
    {
      id: 1,
      content: "To implement authentication in React, you can use various libraries like Firebase Auth, Auth0, or implement your own solution using JWT tokens. Here's a basic example using Firebase...",
      author: "Alex Thompson",
      votes: 15,
      timestamp: "1 hour ago"
    },
    {
      id: 2,
      content: "Another approach is to use Next.js with its built-in authentication support. It provides a secure way to handle authentication with various providers...",
      author: "Sarah Wilson",
      votes: 8,
      timestamp: "2 hours ago"
    }
  ]);

  const question = {
    id: parseInt(id),
    title: "How to implement authentication in React?",
    author: "John Doe",
    votes: 42,
    answers: answers.length,
    tags: ["react", "authentication", "javascript"],
    timestamp: "2 hours ago",
    content: "I'm building a React application and need to implement user authentication. What are the best practices and recommended libraries for handling authentication in React?"
  };

  const handleAddAnswer = (e) => {
    e.preventDefault();
    if (!newAnswer.trim()) return;

    const answer = {
      id: Math.max(...answers.map(a => a.id)) + 1,
      content: newAnswer,
      author: "Current User",
      votes: 0,
      timestamp: "Just now"
    };

    setAnswers([...answers, answer]);
    setNewAnswer('');
  };

  const handleVote = (answerId, increment) => {
    setAnswers(answers.map(answer => 
      answer.id === answerId 
        ? { ...answer, votes: answer.votes + increment }
        : answer
    ));
  };

  return (
    <div className="answers-container">
      <div className="question-detail">
        <div className="question-header">
          <h1>{question.title}</h1>
          <button className="back-btn" onClick={() => navigate('/questions')}>
            Back to Questions
          </button>
        </div>

        <div className="question-body">
          <div className="question-stats">
            <button className="vote-btn" onClick={() => handleVote(question.id, 1)}>
              ↑
            </button>
            <span className="vote-count">{question.votes}</span>
            <button className="vote-btn" onClick={() => handleVote(question.id, -1)}>
              ↓
            </button>
          </div>
          <div className="question-content">
            <p>{question.content}</p>
            <div className="question-tags">
              {question.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <div className="question-meta">
              <span className="author">asked by {question.author}</span>
              <span className="timestamp">{question.timestamp}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="answers-section">
        <h2>{answers.length} Answers</h2>
        
        <div className="answers-list">
          {answers.map(answer => (
            <div key={answer.id} className="answer-card">
              <div className="answer-stats">
                <button className="vote-btn" onClick={() => handleVote(answer.id, 1)}>
                  ↑
                </button>
                <span className="vote-count">{answer.votes}</span>
                <button className="vote-btn" onClick={() => handleVote(answer.id, -1)}>
                  ↓
                </button>
              </div>
              <div className="answer-content">
                <p>{answer.content}</p>
                <div className="answer-meta">
                  <span className="author">answered by {answer.author}</span>
                  <span className="timestamp">{answer.timestamp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="add-answer">
          <h3>Your Answer</h3>
          <form onSubmit={handleAddAnswer}>
            <textarea
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
              placeholder="Write your answer here..."
              rows="6"
              required
            />
            <button type="submit" className="submit-btn">Post Answer</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Answers; 