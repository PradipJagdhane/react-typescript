import axios from "axios";
import React, { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

const FetchData: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<Post[]>(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching Error:", error);
      }
    };

    fetchPosts();
  }, []);
  return (
<div>

<h2>Posts</h2>
<ul>
    {posts.map(post => (
        <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </li>
    ))}
</ul>
</div>
  )
};

export default FetchData;
