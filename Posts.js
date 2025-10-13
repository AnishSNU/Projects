const blogPosts = require('./data');

function postsHandler(req, res) {
  let postsHTML = '';
  
  for (let i = 0; i < blogPosts.length; i++) {
    const post = blogPosts[i];
    postsHTML += `
      <div class="post-card">
        <h2>${post.title}</h2>
        <p>${post.description}</p>
      </div>
    `;
  }

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Blog Posts - Simple Blog</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          padding: 20px;
        }
        .container {
          max-width: 900px;
          margin: 0 auto;
          background: white;
          border-radius: 10px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.2);
          overflow: hidden;
        }
        nav {
          background: #2c3e50;
          padding: 1rem 2rem;
        }
        nav ul {
          list-style: none;
          display: flex;
          gap: 2rem;
        }
        nav a {
          color: white;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s;
        }
        nav a:hover {
          color: #3498db;
        }
        .content {
          padding: 2rem;
        }
        h1 {
          color: #2c3e50;
          margin-bottom: 2rem;
          font-size: 2.5rem;
        }
        .post-card {
          background: #f8f9fa;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          border-radius: 8px;
          border-left: 4px solid #667eea;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .post-card:hover {
          transform: translateX(5px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        .post-card h2 {
          color: #2c3e50;
          margin-bottom: 0.5rem;
          font-size: 1.5rem;
        }
        .post-card p {
          color: #555;
          line-height: 1.7;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/posts">Posts</a></li>
          </ul>
        </nav>
        <div class="content">
          <h1>Blog Posts</h1>
          ${postsHTML}
        </div>
      </div>
    </body>
    </html>
  `;

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
}

module.exports = postsHandler;