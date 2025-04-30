import React, { useState } from 'react';
import '../styles/Forum.css';
import { FaThumbsUp, FaComment, FaEye, FaImage, FaVideo, FaSmile, FaUserCircle } from 'react-icons/fa';
import profilePic from '../assets/images/main profile.png';

// Import additional images for members and posts
import member1 from '../assets/images/main profile3.jpg';
import member2 from '../assets/images/main profile2.jpg';
import member3 from '../assets/images/main profile1.png';
import member4 from '../assets/images/main profile4.png';
import member5 from '../assets/images/main profile5.png';
import member6 from '../assets/images/main profile6.png';
import postImage1 from '../assets/images/anxiety.png';
import postImage2 from '../assets/images/MindfulMark.png';

const Forum = () => {
  const [activeTab, setActiveTab] = useState('recent');
  const [postText, setPostText] = useState('');
  const [showPostForm, setShowPostForm] = useState(false);
  const [likedPosts, setLikedPosts] = useState([]);
  
  // Dummy data for prototyping - updated with images
  const posts = [
    {
      id: 1,
      content: "I've been practicing meditation every morning and it's really helping with my anxiety.",
      author: "JaneDoe",
      authorImage: member1,
      postImage: postImage1,
      views: 45,
      likes: 12,
      comments: 3,
    },
    {
      id: 2,
      content: "Does anyone have recommendations for managing stress during exam periods?",
      author: "StudentLife",
      authorImage: member2,
      views: 89,
      likes: 24,
      comments: 7,
    },
    {
      id: 3,
      content: "Just finished a 30-day mindfulness challenge and feeling so much better. Has anyone else tried this?",
      author: "MindfulMark",
      authorImage: member3,
      postImage: postImage2,
      views: 67,
      likes: 31,
      comments: 5,
    },
  ];

  // Updated active members with profile images
  const activeMembers = [
    { name: "JaneDoe", image: member1 },
    { name: "StudentLife", image: member2 },
    { name: "MindfulMark", image: member3 },
    { name: "CalmCarol", image: member4 },
    { name: "PeacefulPete", image: member5 },
    { name: "SereneSteve", image: member6 }
  ];

  const blogs = [
    {
      title: "5 Ways to Improve Mental Health",
      summary: "Simple daily practices that can significantly improve your mental wellbeing.",
      image: "src/assets/images/5 Ways to Improve Mental Health.png"
    },
    {
      title: "Understanding Anxiety",
      summary: "Learn about the symptoms and coping strategies for anxiety disorders.",
      image: "src/assets/images/Understanding Anxiety.png"
    },
    {
      title: "The Power of Community Support",
      summary: "How connecting with others can help in mental health recovery.",
      image: "src/assets/images/The Power of Community Support.png"
    },
    {
      title: "Mindfulness Techniques",
      summary: "Practical mindfulness exercises for everyday life.",
      image: "src/assets/images/Mindfulness Techniques.png"
    },
  ];

  const handleCreatePost = (e) => {
    e.preventDefault();
    alert('Post created: ' + postText);
    setPostText('');
    setShowPostForm(false);
  };

  const handleLikePost = (postId) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter(id => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  return (
    <div className="forum-container">
      <div className="forum-top-section">
        {!showPostForm ? (
          <div className="create-post-card">
            <div className="create-post-header">
              <div className="user-avatar">
                <img src={profilePic} alt="Profile" className="profile-image" />
              </div>
              <div 
                className="create-post-input-placeholder"
                onClick={() => setShowPostForm(true)}
              >
                What's on your mind today?
              </div>
            </div>
            <div className="create-post-actions">
              <button className="post-action-btn">
                <FaImage /> Photo
              </button>
              <button className="post-action-btn">
                <FaVideo /> Video
              </button>
              <button className="post-action-btn">
                <FaSmile /> Feeling
              </button>
            </div>
          </div>
        ) : (
          <div className="create-post-form-container">
            <form onSubmit={handleCreatePost} className="create-post-form">
              <div className="form-header">
                <h3>Create Post</h3>
                <button 
                  type="button" 
                  className="close-form-btn"
                  onClick={() => setShowPostForm(false)}
                >
                  &times;
                </button>
              </div>
              <div className="form-user-info">
                <div className="user-avatar">
                  <img src={profilePic} alt="Profile" className="profile-image" />
                </div>
                <div className="user-name">Your Name</div>
              </div>
              <textarea
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                placeholder="What's on your mind?"
                rows={5}
                className="post-text-input"
              />
              <div className="form-footer">
                <div className="attachment-options">
                  <button type="button" className="attachment-btn">
                    <FaImage /> Photo
                  </button>
                  <button type="button" className="attachment-btn">
                    <FaVideo /> Video
                  </button>
                  <button type="button" className="attachment-btn">
                    <FaSmile /> Feeling
                  </button>
                </div>
                <button 
                  type="submit" 
                  className="submit-post-btn"
                  disabled={!postText.trim()}
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      <div className="forum-main-layout">
        {/* Left sidebar */}
        <div className="forum-left-sidebar">
          <div className="active-members-section">
            <h2>Active Members</h2>
            <ul className="active-members-list">
              {activeMembers.map((member, index) => (
                <li key={index} className="member-item">
                  <div className="member-avatar">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="profile-image" />
                    ) : (
                      <FaUserCircle size={30} />
                    )}
                  </div>
                  <span className="member-name">{member.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Middle section */}
        <div className="forum-middle-section">
          <div className="forum-tabs">
            <button 
              className={`tab-button ${activeTab === 'recent' ? 'active' : ''}`}
              onClick={() => setActiveTab('recent')}
            >
              Recent
            </button>
            <button 
              className={`tab-button ${activeTab === 'popular' ? 'active' : ''}`}
              onClick={() => setActiveTab('popular')}
            >
              Popular
            </button>
            <button 
              className={`tab-button ${activeTab === 'mypost' ? 'active' : ''}`}
              onClick={() => setActiveTab('mypost')}
            >
              My Post
            </button>
          </div>

          <div className="posts-container">
            {posts.map(post => (
              <div key={post.id} className="post-card">
                <div className="post-header">
                  <div className="post-author-info">
                    <div className="post-author-avatar">
                      {post.authorImage ? (
                        <img src={post.authorImage} alt={post.author} className="profile-image" />
                      ) : (
                        <FaUserCircle size={40} />
                      )}
                    </div>
                    <div className="post-author-details">
                      <span className="post-author-name">{post.author}</span>
                      <span className="post-timestamp">2 hours ago</span>
                    </div>
                  </div>
                  <div className="post-options">⋯</div>
                </div>
                <div className="post-content">{post.content}</div>
                {post.postImage && (
                  <div className="post-image-container">
                    <img src={post.postImage} alt="Post content" className="post-image" />
                  </div>
                )}
                <div className="post-stats-bar">
                  <div className="post-reactions">
                    <span className="reaction-count">
                      <span className="reaction-icon">👍</span> {post.likes}
                    </span>
                  </div>
                  <div className="post-engagement">
                    <span>{post.comments} comments</span>
                    <span>{post.views} views</span>
                  </div>
                </div>
                <div className="post-actions">
                  <button 
                    className={`post-action ${likedPosts.includes(post.id) ? 'liked' : ''}`}
                    onClick={() => handleLikePost(post.id)}
                  >
                    <FaThumbsUp /> Like
                  </button>
                  <button className="post-action">
                    <FaComment /> Comment
                  </button>
                  <button className="post-action">
                    <FaEye /> View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right sidebar */}
        <div className="forum-right-sidebar">
          <div className="blogs-section">
            <h2>Suggested Reads</h2>
            <div className="blogs-container">
              {blogs.map((blog, index) => (
                <div key={index} className="blog-card">
                  <img src={blog.image} alt={blog.title} className="blog-image" />
                  <div className="blog-details">
                    <h3 className="blog-title">{blog.title}</h3>
                    <p className="blog-summary">{blog.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;
