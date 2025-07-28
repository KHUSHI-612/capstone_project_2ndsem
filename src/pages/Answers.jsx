import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './answers.css';

const Answers = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newAnswer, setNewAnswer] = useState('');
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);


  const questionsData = [
    {
      id: 1,
      title: "How to implement authentication in React?",
      author: "priya",
      votes: 42,
      answers: 5,
      tags: ["react", "authentication", "javascript"],
      timestamp: "2 hours ago",
      content: "I'm building a React application and need to implement user authentication. What are the best practices and recommended libraries for handling authentication in React?"
    },
    {
      id: 2,
      title: "Best practices for state management in large applications",
      author: "riya",
      votes: 28,
      answers: 3,
      tags: ["react", "state-management", "redux"],
      timestamp: "5 hours ago",
      content: "I'm working on a large React application and struggling with state management. What are the best practices for managing state in complex applications? Should I use Redux, Context API, or something else?"
    },
    {
      id: 3,
      title: "Understanding React hooks and their use cases",
      author: "khushi",
      votes: 35,
      answers: 7,
      tags: ["react", "hooks", "javascript"],
      timestamp: "1 day ago",
      content: "I'm new to React hooks and want to understand when to use useState, useEffect, useContext, and other hooks. Can someone explain the different use cases and best practices?"
    }
  ];


  const answersData = {
    1: [
      {
        id: 1,
        content: "To implement authentication in React, you can use various libraries like Firebase Auth, Auth0, or implement your own solution using JWT tokens. Here's a basic example using Firebase...",
        author: "user56",
        votes: 15,
        timestamp: "1 hour ago"
      },
      {
        id: 2,
        content: "Another approach is to use Next.js with its built-in authentication support. It provides a secure way to handle authentication with various providers...",
        author: "secret_user",
        votes: 8,
        timestamp: "2 hours ago"
      }
    ],
    2: [
      {
        id: 1,
        content: "For large applications, I recommend using Redux Toolkit or Zustand. Redux Toolkit simplifies Redux setup and reduces boilerplate code...",
        author: "krish",
        votes: 12,
        timestamp: "3 hours ago"
      },
      {
        id: 2,
        content: "Consider using React Query for server state and Zustand for client state. This combination works well for complex applications...",
        author: "Lisa",
        votes: 9,
        timestamp: "4 hours ago"
      }
    ],
    3: [
      {
        id: 1,
        content: "useState is for local component state, useEffect for side effects, useContext for sharing data across components. Start with useState and useEffect...",
        author: "David",
        votes: 18,
        timestamp: "6 hours ago"
      },
      {
        id: 2,
        content: "Here's a practical example: useState for form data, useEffect for API calls, useContext for theme or user data...",
        author: "Emma Wilson",
        votes: 14,
        timestamp: "8 hours ago"
      }
    ]
  };

  useEffect(() => {
    const questionId = parseInt(id);
    

    let foundQuestion = questionsData.find(q => q.id === questionId);
    
    
    if (!foundQuestion) {
      try {
        const storedQuestions = JSON.parse(localStorage.getItem('dynamicQuestions') || '[]');
        foundQuestion = storedQuestions.find(q => q.id === questionId);
      } catch (error) {
        console.error('Error reading from localStorage:', error);
      }
    }
    
    if (foundQuestion) {
      setQuestion(foundQuestion);
 
      try {
        const storedAnswers = JSON.parse(localStorage.getItem(`answers_${questionId}`) || '[]');
        setAnswers(storedAnswers);
      } catch (error) {
        console.error('Error reading answers from localStorage:', error);
        setAnswers([]);
      }
    } else {
  
      navigate('/questions');
    }
    setLoading(false);
  }, [id, navigate]);

  const handleAddAnswer = (e) => {
    e.preventDefault();
    if (!newAnswer.trim()) return;

    const answer = {
      id: Math.max(...answers.map(a => a.id), 0) + 1,
      content: newAnswer,
      author: "Current User",
      votes: 0,
      timestamp: "Just now"
    };

    const updatedAnswers = [...answers, answer];
    setAnswers(updatedAnswers);
    

    try {
      localStorage.setItem(`answers_${question.id}`, JSON.stringify(updatedAnswers));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
    
    setNewAnswer('');
  };

  const handleVote = (answerId, increment) => {
    const updatedAnswers = answers.map(answer => 
      answer.id === answerId 
        ? { ...answer, votes: answer.votes + increment }
        : answer
    );
    
    setAnswers(updatedAnswers);
    
   
    try {
      localStorage.setItem(`answers_${question.id}`, JSON.stringify(updatedAnswers));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  if (loading) {
    return <div className="answers-container">Loading...</div>;
  }

  if (!question) {
    return <div className="answers-container">Question not found</div>;
  }

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
            <p>{question.content || "No detailed content available for this question."}</p>
            <div className="question-tags">
              {question.tags && question.tags.map(tag => (
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
          {answers.length === 0 ? (
            <div className="no-answers">
              <p>No answers yet. Be the first to answer this question!</p>
            </div>
          ) : (
            answers.map(answer => (
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
            ))
          )}
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