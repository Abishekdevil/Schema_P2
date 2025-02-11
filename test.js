const testBlogPost = {
    title: "Understanding Node.js and Express",
    content: "Node.js is a runtime environment that allows developers to run JavaScript on the server-side. Express.js is a web application framework for Node.js that simplifies the development of web applications and APIs. This blog post explores the fundamentals of Node.js and Express, their benefits, and how to get started with building server-side applications.",
    author: "Abishek",
    tags: ["Node.js", "Express",  "JavaScript"],
    category: "Technology",
    likes: ["Tamil", "shankar", "Dhanya"],
    comments: [
      {
        username: "Tamil",
        message: "Great article! Well structured and useful.",
        commentedAt: new Date("2025-02-10T12:00:00Z"),
      },
      {
        username: "Shankar",
        message: "Well written! Looking forward for more like this.",
        commentedAt: new Date("2025-02-11T14:30:00Z"),
      },
    ],
  };
  
  module.exports = testBlogPost;