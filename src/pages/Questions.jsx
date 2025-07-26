import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './questions.css';
import { useEffect } from 'react';

const Questions = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [questions, setQuestions] = useState([
    {
      id: 1,
      title: "How to implement authentication in React?",
      author: "priya",
      votes: 42,
      answers: 5,
      tags: ["react", "authentication", "javascript"],
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      title: "Best practices for state management in large applications",
      author: "Jane",
      votes: 28,
      answers: 3,
      tags: ["react", "state-management", "redux"],
      timestamp: "5 hours ago"
    },
    {
      id: 3,
      title: "Understanding React hooks and their use cases",
      author: "xyz",
      votes: 35,
      answers: 7,
      tags: ["react", "hooks", "javascript"],
      timestamp: "1 day ago"
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newQuestion, setNewQuestion] = useState({
    title: '',
    tags: ''
  });


  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState('');
  const [selectedSEQuestion, setSelectedSEQuestion] = useState(null);

  useEffect(() => {
    if (searchQuery === '') {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleAddQuestion = (e) => {
    e.preventDefault();
    const newId = Math.max(...questions.map(q => q.id)) + 1;
    const question = {
      id: newId,
      title: newQuestion.title,
      author: "Current User",
      votes: 0,
      answers: 0,
      tags: newQuestion.tags.split(',').map(tag => tag.trim()),
      timestamp: "Just now"
    };
    setQuestions([question, ...questions]);
    setNewQuestion({ title: '', tags: '' });
    setShowAddForm(false);
  };

  const handleDeleteQuestion = (id) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  const handleQuestionClick = (id) => {
    navigate(`/answers/${id}`);
  };


  const handleSearch = async (e) => {
    e.preventDefault();
    setSearchLoading(true);
    setSearchError('');
    setSearchResults([]);
    setSelectedSEQuestion(null);
    try {
      const res = await fetch(
        `https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=activity&q=${encodeURIComponent(searchQuery)}&site=stackoverflow`
      );
      const data = await res.json();
      setSearchResults(data.items || []);
    } catch (err) {
      setSearchError('Failed to fetch results.');
    }
    setSearchLoading(false);
  };

  return (
    <div className="questions-container">
      <div className="questions-header">
        <h1>All Questions</h1>
      </div>

   
      <div className="search-and-ask-row">
        <form onSubmit={handleSearch} className="search-bar">
          <input
            className="search-input"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="search"
          />
          <button type="submit" className="search-btn">Search</button>
        </form>
        <button className="ask-question-btn" onClick={() => setShowAddForm(true)}>+ Ask Question</button>
      </div>
      {searchLoading && <div className="search-loading">Loading...</div>}
      {searchError && <div className="search-error">{searchError}</div>}
      <ul className="search-results">
        {searchResults.map(q => (
          <li key={q.question_id} className="search-result-item">
            <a
              className="result-title-link"
              href={q.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {q.title}
            </a>
            <span className="result-meta">Score: {q.score} | Answers: {q.answer_count}</span>
          </li>
        ))}
      </ul>


      {showAddForm && (
        <div className="add-question-form">
          <h3>Ask a Question</h3>
          <form onSubmit={handleAddQuestion}>
            <div className="form-group">
              <label htmlFor="title">Question Title</label>
              <input
                type="text"
                id="title"
                value={newQuestion.title}
                onChange={(e) => setNewQuestion({...newQuestion, title: e.target.value})}
                required
                placeholder="What's your question?"
              />
            </div>
            <div className="form-group">
              <label htmlFor="tags">Tags (comma-separated)</label>
              <input
                type="text"
                id="tags"
                value={newQuestion.tags}
                onChange={(e) => setNewQuestion({...newQuestion, tags: e.target.value})}
                placeholder="react, javascript, web-development"
              />
            </div>
            <div className="form-actions">
              <button type="submit" className="submit-btn">Post Question</button>
              <button 
                type="button" 
                className="cancel-btn"
                onClick={() => setShowAddForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}


      <div className="questions-list">
        {questions.map(question => (
          <div key={question.id} className="question-card">
            <div className="question-stats">
              <div className="stat">
                <span className="stat-value">{question.votes}</span>
                <span className="stat-label">votes</span>
              </div>
              <div className="stat">
                <span className="stat-value">{question.answers}</span>
                <span className="stat-label">answers</span>
              </div>
            </div>
            <div 
              className="question-content"
              onClick={() => handleQuestionClick(question.id)}
            >
              <h3 className="question-title">{question.title}</h3>
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
            <button 
              className="delete-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteQuestion(question.id);
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
