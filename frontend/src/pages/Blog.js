import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaClock } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';

const BlogPost = ({ post }) => (
  <motion.a
    href={post.url}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ 
      scale: 1.02,
      boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)"
    }}
    className="block backdrop-blur-xl bg-white/10 p-6 rounded-xl border border-white/20
              hover:border-blue-500/50 transition-all duration-500 shadow-xl
              hover:shadow-blue-500/10 group relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-500" />
    {post.coverImage && (
      <div className="w-full h-48 mb-4 overflow-hidden rounded-lg relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
        <img 
          src={post.coverImage} 
          alt={post.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
      </div>
    )}
    <div className="relative z-10">
      <h3 className="text-xl font-bold text-white font-tech-mono mb-3 
                   group-hover:text-blue-400 transition-colors duration-300">
        {post.title}
      </h3>
      <p className="text-gray-300 font-rajdhani mb-4 line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
        {post.brief}
      </p>
      <div className="flex flex-wrap items-center gap-3 mb-4">
        {post.tags.map((tag) => (
          <span 
            key={tag}
            className="px-3 py-1.5 text-sm bg-blue-500/20 rounded-full text-blue-400
                     group-hover:bg-blue-500/30 group-hover:text-blue-300 
                     transition-all duration-300 transform hover:scale-105"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between text-sm text-gray-400">
        <div className="flex items-center gap-2 group-hover:text-blue-400 transition-colors duration-300">
          <FaCalendar className="transform group-hover:rotate-12 transition-transform duration-300" />
          <span>{new Date(post.dateAdded).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-2 group-hover:text-blue-400 transition-colors duration-300">
          <FaClock className="transform group-hover:rotate-12 transition-transform duration-300" />
          <span>{post.readTime} min read</span>
        </div>
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
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_transparent_1px,_rgba(0,0,0,0.1)_1px)] bg-[length:32px_32px] opacity-25" />
      <div className="fixed inset-0 backdrop-blur-3xl opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold text-white mb-8 font-orbitron relative inline-block">
            My <span className="text-blue-400 drop-shadow-lg">Blog</span>
            <motion.div
              className="absolute -inset-1 bg-blue-500/20 rounded-lg -z-10"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.3, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </h1>
          <p className="text-xl text-gray-200 font-rajdhani max-w-2xl mx-auto leading-relaxed">
            Sharing my thoughts and experiences about technology, development, and more.
          </p>
          <motion.a
            href="https://hashnode.com/@gorakhsawant"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-blue-500/20 
                     rounded-full text-blue-400 hover:bg-blue-500/30 transition-all duration-300
                     border border-blue-500/30 hover:border-blue-400/50 shadow-lg hover:shadow-blue-500/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SiHashnode className="text-xl" />
            <span>Follow me on Hashnode</span>
          </motion.a>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <motion.div 
              className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-400 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.url}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
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