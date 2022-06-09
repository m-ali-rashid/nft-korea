import { useEffect, useState } from "react";

// APIs

// Get all posts
// GET https://jsonplaceholder.typicode.com/posts
// keys => ["userId","id","title","body"]

// Get user details
// GET https://jsonplaceholder.typicode.com/users?id=1&id=2 ....
// keys => ["id","name","username","email","address","phone","website","company"]

// Get comments for a post
// GET https://jsonplaceholder.typicode.com/comments?postId=1
// keys => ["postId","id","name","email","body"]

// import "./styles.css";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function getPosts() {
      await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((jsonData) => setPosts(jsonData));
    }
    async function getUsers() {
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((jsonData) => {
          setUsers(jsonData);
        });
    }
    getPosts();
    getUsers();
  }, []);

  async function getCommentsByPostId(id) {
    await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((res) => res.json())
      .then((jsonData) => {
        setComments(jsonData);
      });
  }
  return (
    <div className="App">
      {posts?.map((post) => {
        let filteredUser = users?.filter(
          (user) => user.id === post.userId && user.id
        )[0]?.name;
        return (
          <div key={post.id}>
            <h2>
              {post.title} by {filteredUser}
            </h2>
            <p>{post.body}</p>
            <button
              onClick={() => {
                getCommentsByPostId(post.id);
              }}
            >
              Show Posts
            </button>
            {comments.map((comment) =>
              comment.postId === post.id ? (
                <div key={comment.id}>
                  <p>{comment.body}</p>
                </div>
              ) : (
                <div key={comment.id}></div>
              )
            )}
          </div>
        );
      })}
    </div>
  );
}
