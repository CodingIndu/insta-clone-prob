import { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db } from './FireBase';


function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()));
    })
  }, []);

  return (
    <div className="App">
      <div className="app__header">
         <img 
         className="app__headerImage" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/110px-Instagram_logo.svg.png"
         alt = ""
         />
      </div>
      
      <h1>Instagram Clone</h1>

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageurl={post.imageurl} />
        ))
      }
    </div>

  );
}

export default App;
