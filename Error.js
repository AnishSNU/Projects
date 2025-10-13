function errorHandler(req, res) {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>404 - Page Not Found</title>
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
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .error-container {
          max-width: 600px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.2);
          padding: 3rem 2rem;
          text-align: center;
        }
        .error-code {
          font-size: 6rem;
          font-weight: bold;
          color: #e74c3c;
          margin-bottom: 1rem;
        }
        h1 {
          color: #2c3e50;
          margin-bottom: 1rem;
          font-size: 2rem;
        }
        p {
          color: #555;
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }
        .nav-links {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }
        a {
          display: inline-block;
          background: #667eea;
          color: white;
          padding: 12px 30px;
          text-decoration: none;
          border-radius: 5px;
          transition: background 0.3s;
        }
        a:hover {
          background: #764ba2;
        }
      </style>
    </head>
    <body>
      <div class="error-container">
        <div class="error-code">404</div>
        <h1>Page Not Found</h1>
        <p>Oops! The page you're looking for doesn't exist. It might have been moved or deleted.</p>
        <div class="nav-links">
          <a href="/">Go Home</a>
          <a href="/posts">View Posts</a>
        </div>
      </div>
    </body>
    </html>
  `;

  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.end(html);
}

module.exports = errorHandler;