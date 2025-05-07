import React,{useState} from "react";
import './topics.css';

const topics=[
    { icon: "🟨", name: "Technology" },
  { icon: "❤️‍🩹", name: "Health" },
  { icon: "🎨", name: "Arts" },
  { icon: "🎥", name: "Travel" },
  { icon: "🍜", name: "Food" },
  { icon: "💸", name: "Finance"},
  { icon: "⚽", name: "Sports"},
  { icon: "🎮", name: "Gaming"},
  { icon: "📚", name: "Education" },
  { icon: "🌐", name: "World" },
];

const PopTopics=()=>{
  const[showall,setShowall]=useState(false)
  const handleClick=()=>{
    setShowall(!showall)
  }
  const visibleTopics = showall ? topics : topics.slice(0, 5);


return(
    <div className="topics-section">
      <h2>Popular Topics</h2>
      <div className="topic-container">
        {visibleTopics.map((topic, index) => (
          <div className="topic-card" key={index}>
            <span className="icon">{topic.icon}</span>
            <span className="name">{topic.name}</span>
            
          </div>
        ))}
      </div>
      <button onClick={handleClick}>
        {showall ? "Show Less" : "Show More"}
      </button>
    </div>

)
}
export default PopTopics;