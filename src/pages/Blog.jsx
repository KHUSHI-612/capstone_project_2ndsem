import React from "react";
import "./blog.css";

const blogPosts = [
  {
    title: "How to Get Fast, Quality Answers to Your Questions",
    excerpt: "Learn proven strategies to write questions that attract quick and helpful responses from the community.",
    date: "2024-06-10",
    image: "/src/assets/blog1.jpg",
    link: "#"
  },
  {
    title: "Building Your Reputation: Tips for Becoming a Trusted Contributor",
    excerpt: "Discover how to earn trust, upvotes, and badges by providing valuable answers and engaging positively.",
    date: "2024-06-05",
    image: "/src/assets/blog2.jpg",
    link: "#"
  },
  {
    title: "Moderation Matters: Keeping Our Community Safe and Supportive",
    excerpt: "Explore the importance of moderation, reporting, and how you can help maintain a welcoming environment.",
    date: "2024-05-28",
    image: "/src/assets/blog3.jpg",
    link: "#"
  }
];

export default function Blog() {
  return (
    <div className="blog-container">
      <section className="blog-hero">
        <h1>Q&A Blog</h1>
        <div className="subtitle">Insights, tips, and stories from the Q&A community</div>
      </section>
      <div className="blog-content">
        <section className="blog-posts-section">
          <h2>Latest Posts</h2>
          <div className="blog-posts-grid">
            {blogPosts.map((post, idx) => (
              <div className="blog-post-card" key={idx}>
                <div className="blog-post-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-post-info">
                  <h3>{post.title}</h3>
                  <p className="blog-post-date">{post.date}</p>
                  <p className="blog-post-excerpt">{post.excerpt}</p>
                  <a href={post.link} className="blog-post-link">Read More</a>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="blog-cta-section">
          <h2>Want to Contribute?</h2>
          <p>Share your knowledge, tips, or stories with the community! Reach out to become a guest author or suggest a topic for our blog.</p>
          <button className="blog-cta-button">Contact Us</button>
        </section>
      </div>
    </div>
  );
}
