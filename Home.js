function homeHandler(req, res) {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Home - Simple Blog</title>
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
          max-width: 800px;
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
          padding: 3rem 2rem;
        }
        h1 {
          color: #2c3e50;
          margin-bottom: 1rem;
          font-size: 2.5rem;
        }
        p {
          color: #555;
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }
        .cta {
          display: inline-block;
          background: #667eea;
          color: white;
          padding: 12px 30px;
          text-decoration: none;
          border-radius: 5px;
          margin-top: 1rem;
          transition: background 0.3s;
        }
        .cta:hover {
          background: #764ba2;
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
          <h1>Welcome to Simple Blog</h1>
          <p>This is a minimalist blog application built with Node.js using only the built-in HTTP module.</p>
          <p>Explore our collection of articles about web development, Node.js, and modern JavaScript practices.</p>
          <a href="/posts" class="cta">View All Posts</a>
        </div>
      </div>
    </body>
    </html>
  `;

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
}

module.exports = homeHandler;