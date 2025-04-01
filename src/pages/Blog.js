import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaClock } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';

const BlogPost = ({ post }) => (
  <motion.a
    href={post.url}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.02 }}
    className="block backdrop-blur-xl bg-white/10 p-6 rounded-xl border border-white/20
              hover:border-blue-500/50 transition-all duration-300 shadow-xl
              hover:shadow-blue-500/10"
  >
    {post.coverImage && (
      <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
        <img 
          src={post.coverImage} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
    )}
    <h3 className="text-xl font-bold text-white font-tech-mono mb-3 
                   line-clamp-2 hover:text-blue-400 transition-colors">
      {post.title}
    </h3>
    <p className="text-gray-300 font-rajdhani mb-4 line-clamp-3">
      {post.brief}
    </p>
    <div className="flex flex-wrap items-center gap-3 mb-4">
      {post.tags.map((tag) => (
        <span 
          key={tag}
          className="px-2 py-1 text-xs bg-blue-500/20 rounded-full text-blue-400"
        >
          {tag}
        </span>
      ))}
    </div>
    <div className="flex items-center justify-between text-sm text-gray-400">
      <div className="flex items-center gap-2">
        <FaCalendar />
        <span>{new Date(post.dateAdded).toLocaleDateString()}</span>
      </div>
      <div className="flex items-center gap-2">
        <FaClock />
        <span>{post.readTime} min read</span>
      </div>
    </div>
  </motion.a>
);

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Replace with your Hashnode username
        const query = `
          query {
            user(username: "gorakhsawant") {
              publication {
                posts(page: 0) {
                  title
                  brief
                  url
                  coverImage
                  dateAdded
                  readTime
                  tags
                }
              }
            }
          }
        `;

        const response = await fetch('https://api.hashnode.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
        });

        const data = await response.json();
        if (data.data?.user?.publication?.posts) {
          setPosts(data.data.user.publication.posts);
        }
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-30" />
      <div className="fixed inset-0 grid-pattern opacity-25" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold text-white mb-8 font-orbitron">
            My <span className="text-blue-400 drop-shadow-lg">Blog</span>
          </h1>
          <p className="text-xl text-gray-200 font-rajdhani max-w-2xl mx-auto">
            Sharing my thoughts and experiences about technology, development, and more.
          </p>
          <a
            href="https://hashnode.com/@gorakhsawant"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-blue-500/20 
                     rounded-full text-blue-400 hover:bg-blue-500/30 transition-colors"
          >
            <SiHashnode className="text-xl" />
            <span>Follow me on Hashnode</span>
          </a>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <motion.div
                key={post.url}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <BlogPost post={post} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog; 