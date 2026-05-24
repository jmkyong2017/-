import './App.css';

import { useState } from 'react';
import Header from './components/Header';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: '첫 글', author: '홍길동', likes: 0 },
    { id: 2, title: '두 번째', author: '김철수', likes: 0 },
    { id: 3, title: '세 번째', author: '이영희', likes: 0 },
  ]);

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const handleDelete = (id) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  const handleLike = (id) => {
    setPosts(
      posts.map(p =>
        p.id === id
          ? { ...p, likes: p.likes + 1 }
          : p
      )
    );
  };

  return (
    <>
      <Header />
      <PostForm onAddPost={handleAddPost} />
      <PostList posts={posts} onDelete={handleDelete} onLike={handleLike} />
      <div className="footer">
        <p>확인</p>
        <p>&copy; 2023 My Blog. All rights reserved.</p>
      </div>
    </>
  );
}

export default App;
