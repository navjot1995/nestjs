import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloDefault(): string {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>NestJS on Vercel</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          background: linear-gradient(135deg, #000 0%, #111 100%);
          color: #fff;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .container {
          text-align: center;
          max-width: 600px;
          padding: 2rem;
        }
        .logo {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          margin: 0 auto 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.5rem;
        }
        h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: white;
        }
        p {
          font-size: 1.125rem;
          color: #888;
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
          margin-top: 2rem;
        }
        .feature {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 1rem;
          backdrop-filter: blur(10px);
        }
        .feature h3 {
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .feature a {
          font-size: 1rem;
          color: white;
          margin: 0;
          text-decoration: none;
        }
        .feature a:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <img src="https://api-frameworks.vercel.sh/framework-logos/nestjs.svg" alt="Nitro logo" class="logo" />
        <h1>Welcome to NestJS</h1>
        <p>A progressive Node.js framework running on Vercel</p>
        <div class="features">
          <div class="feature">
            <a href="https://vercel.com/docs/frameworks/nestjs" target="_blank" rel="noreferrer">Vercel docs</a>
          </div>
          <div class="feature">
            <a href="https://docs.nestjs.com" target="_blank" rel="noreferrer">NestJS docs</a>
          </div>
        </div>
      </div>
    </body>
    </html>
    `;
  }

  getHelloBasic(): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>NestJS Auth API</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .container {
            background: white;
            border-radius: 10px;
            padding: 2rem;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          }
          h1 {
            color: #667eea;
            margin-bottom: 1rem;
            border-bottom: 2px solid #f0f0f0;
            padding-bottom: 0.5rem;
          }
          h2 {
            color: #764ba2;
            margin-top: 1.5rem;
          }
          ul {
            list-style: none;
            padding: 0;
          }
          li {
            margin: 0.5rem 0;
            padding: 0.5rem;
            background: #f8f9fa;
            border-radius: 5px;
          }
          .badge {
            display: inline-block;
            padding: 0.25rem 0.5rem;
            border-radius: 3px;
            font-size: 0.8rem;
            font-weight: 600;
            margin-right: 0.5rem;
          }
          .badge-get { background: #61affe; color: white; }
          .badge-post { background: #49cc90; color: white; }
          .badge-patch { background: #fca130; color: white; }
          .badge-delete { background: #f93e3e; color: white; }
          code {
            background: #e9ecef;
            padding: 0.2rem 0.4rem;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
          }
          a {
            color: #667eea;
            text-decoration: none;
            font-weight: 600;
          }
          a:hover {
            text-decoration: underline;
          }
          .footer {
            margin-top: 2rem;
            text-align: center;
            color: #666;
            font-size: 0.9rem;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🚀 NestJS Auth API</h1>
          <p>A complete authentication API built with NestJS, MongoDB, and JWT.</p>
          
          <h2>📚 Documentation</h2>
          <p>Visit <a href="/api-docs" target="_blank">/api-docs</a> for interactive Swagger documentation</p>
          
          <h2>🔧 Available Endpoints</h2>
          <ul>
            <li>
              <span class="badge badge-get">GET</span>
              <code>/health</code> - Health check
            </li>
            <li>
              <span class="badge badge-get">GET</span>
              <code>/version</code> - API version
            </li>
            <li>
              <span class="badge badge-get">GET</span>
              <code>/public</code> - Public test endpoint
            </li>
            <li>
              <span class="badge badge-get">GET</span>
              <code>/info</code> - API information
            </li>
            <li>
              <span class="badge badge-get">GET</span>
              <code>/status</code> - Detailed status
            </li>
          </ul>
          
          <h2>🔐 Authentication Endpoints</h2>
          <ul>
            <li>
              <span class="badge badge-post">POST</span>
              <code>/auth/register</code> - Register new user
            </li>
            <li>
              <span class="badge badge-post">POST</span>
              <code>/auth/login</code> - User login
            </li>
          </ul>
          
          <h2>📝 Articles Endpoints</h2>
          <ul>
            <li>
              <span class="badge badge-get">GET</span>
              <code>/articles</code> - Get all articles
            </li>
            <li>
              <span class="badge badge-post">POST</span>
              <code>/articles</code> - Create article (protected)
            </li>
            <li>
              <span class="badge badge-get">GET</span>
              <code>/articles/:id</code> - Get article by ID
            </li>
            <li>
              <span class="badge badge-patch">PATCH</span>
              <code>/articles/:id</code> - Update article (protected)
            </li>
            <li>
              <span class="badge badge-delete">DELETE</span>
              <code>/articles/:id</code> - Delete article (protected)
            </li>
          </ul>
          
          <h2>⚡ Quick Start</h2>
          <ol>
            <li>Register a user: <code>POST /auth/register</code></li>
            <li>Login: <code>POST /auth/login</code> (get JWT token)</li>
            <li>Use token in Authorization header for protected routes</li>
          </ol>
          
          <div class="footer">
            <p>NestJS Auth API v1.0.0 | Built with ❤️ using NestJS, MongoDB, and JWT</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  getHello(): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>NestJS Auth API - Modern Authentication Solution</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="alternate icon" href="/favicon.ico">
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #333;
            line-height: 1.6;
            min-height: 100vh;
          }

          /* Animated background */
          .gradient-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
            background-size: 400% 400%;
            animation: gradient 15s ease infinite;
          }

          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          /* Floating shapes */
          .floating-shapes {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: -1;
          }

          .shape {
            position: absolute;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            animation: float 20s infinite;
          }

          .shape:nth-child(1) {
            width: 200px;
            height: 200px;
            top: -100px;
            left: -100px;
            animation-delay: 0s;
          }

          .shape:nth-child(2) {
            width: 300px;
            height: 300px;
            bottom: -150px;
            right: -150px;
            animation-delay: 5s;
          }

          .shape:nth-child(3) {
            width: 150px;
            height: 150px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation-delay: 10s;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }

          /* Main container */
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
            position: relative;
            z-index: 1;
          }

          /* Navigation */
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
            margin-bottom: 3rem;
            animation: slideDown 0.8s ease-out;
          }

          @keyframes slideDown {
            from {
              transform: translateY(-100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          .logo {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .logo-icon {
            width: 40px;
            height: 40px;
            background: white;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #667eea;
            font-size: 1.5rem;
            font-weight: bold;
            transform: rotate(10deg);
            transition: transform 0.3s ease;
          }

          .logo:hover .logo-icon {
            transform: rotate(0deg) scale(1.1);
          }

          .logo-text {
            font-size: 1.5rem;
            font-weight: 700;
            color: white;
            letter-spacing: -0.5px;
          }

          .logo-text span {
            color: #ffd700;
          }

          .nav-links {
            display: flex;
            gap: 2rem;
            align-items: center;
          }

          .nav-links a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
          }

          .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: #ffd700;
            transition: width 0.3s ease;
          }

          .nav-links a:hover::after {
            width: 100%;
          }

          .btn-docs {
            background: rgba(255, 255, 255, 0.2);
            padding: 0.5rem 1.5rem;
            border-radius: 50px;
            border: 2px solid white;
          }

          .btn-docs:hover {
            background: white;
            color: #667eea !important;
          }

          /* Hero section */
          .hero {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
            margin-bottom: 5rem;
            animation: fadeInUp 1s ease-out 0.3s both;
          }

          @keyframes fadeInUp {
            from {
              transform: translateY(50px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          .hero-content h1 {
            font-size: 3.5rem;
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 1.5rem;
            color: white;
          }

          .hero-content h1 span {
            color: #ffd700;
            display: inline-block;
            animation: pulse 2s infinite;
          }

          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }

          .hero-content p {
            font-size: 1.2rem;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 2rem;
          }

          .hero-buttons {
            display: flex;
            gap: 1rem;
          }

          .btn-primary {
            padding: 1rem 2rem;
            background: white;
            color: #667eea;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            transition: all 0.3s ease;
            border: 2px solid white;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          }

          .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
            background: transparent;
            color: white;
          }

          .btn-secondary {
            padding: 1rem 2rem;
            background: transparent;
            color: white;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            transition: all 0.3s ease;
            border: 2px solid white;
          }

          .btn-secondary:hover {
            background: white;
            color: #667eea;
            transform: translateY(-3px);
          }

          .hero-image {
            position: relative;
            animation: floatImage 6s ease-in-out infinite;
          }

          @keyframes floatImage {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }

          .hero-image img {
            width: 100%;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          }

          .stats-card {
            position: absolute;
            bottom: -20px;
            left: -20px;
            background: white;
            padding: 1rem;
            border-radius: 10px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
            animation: slideInLeft 0.8s ease-out 1s both;
          }

          @keyframes slideInLeft {
            from {
              transform: translateX(-50px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          /* Features section */
          .features {
            padding: 4rem 0;
            animation: fadeIn 1s ease-out 0.6s both;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          .section-title {
            text-align: center;
            font-size: 2.5rem;
            color: white;
            margin-bottom: 3rem;
          }

          .section-title span {
            color: #ffd700;
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          }

          .feature-card {
            background: rgba(255, 255, 255, 0.95);
            padding: 2rem;
            border-radius: 20px;
            text-align: center;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            cursor: pointer;
          }

          .feature-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 0;
          }

          .feature-card:hover::before {
            opacity: 1;
          }

          .feature-card:hover * {
            color: white;
            position: relative;
            z-index: 1;
          }

          .feature-card:hover .feature-icon {
            background: white;
            color: #667eea;
          }

          .feature-icon {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
            color: white;
            font-size: 2rem;
            transition: all 0.3s ease;
          }

          .feature-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: #333;
          }

          .feature-card p {
            color: #666;
            line-height: 1.6;
          }

          /* API Endpoints section */
          .endpoints {
            padding: 4rem 0;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 30px;
            margin: 2rem 0;
            animation: fadeIn 1s ease-out 0.9s both;
          }

          .endpoints-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            padding: 2rem;
          }

          .endpoint-group h3 {
            color: white;
            margin-bottom: 1rem;
            font-size: 1.3rem;
            border-bottom: 2px solid rgba(255, 255, 255, 0.2);
            padding-bottom: 0.5rem;
          }

          .endpoint-item {
            background: rgba(255, 255, 255, 0.95);
            padding: 0.8rem;
            border-radius: 10px;
            margin-bottom: 0.8rem;
            display: flex;
            align-items: center;
            gap: 0.8rem;
            transition: all 0.3s ease;
          }

          .endpoint-item:hover {
            transform: translateX(10px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          }

          .method {
            padding: 0.2rem 0.6rem;
            border-radius: 5px;
            font-size: 0.8rem;
            font-weight: 700;
            text-transform: uppercase;
          }

          .method.get { background: #61affe; color: white; }
          .method.post { background: #49cc90; color: white; }
          .method.patch { background: #fca130; color: white; }
          .method.delete { background: #f93e3e; color: white; }

          .endpoint-item code {
            font-size: 0.9rem;
            color: #333;
          }

          /* Stats section */
          .stats-section {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
            padding: 4rem 0;
            animation: fadeIn 1s ease-out 1.2s both;
          }

          .stat-item {
            text-align: center;
            color: white;
          }

          .stat-number {
            font-size: 3rem;
            font-weight: 800;
            color: #ffd700;
            margin-bottom: 0.5rem;
            animation: countUp 2s ease-out;
          }

          .stat-label {
            font-size: 1.1rem;
            opacity: 0.9;
          }

          /* Testimonial section */
          .testimonials {
            padding: 4rem 0;
            animation: fadeIn 1s ease-out 1.5s both;
          }

          .testimonial-card {
            background: white;
            padding: 2rem;
            border-radius: 20px;
            position: relative;
          }

          .testimonial-card::before {
            content: '"';
            position: absolute;
            top: -20px;
            left: 20px;
            font-size: 5rem;
            color: #667eea;
            opacity: 0.2;
            font-family: serif;
          }

          .testimonial-author {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-top: 1.5rem;
          }

          .author-avatar {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
          }

          /* Footer */
          .footer {
            padding: 4rem 0 2rem;
            color: white;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            margin-top: 4rem;
            animation: fadeIn 1s ease-out 1.8s both;
          }

          .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
          }

          .footer-section h4 {
            margin-bottom: 1rem;
            color: #ffd700;
          }

          .footer-section ul {
            list-style: none;
          }

          .footer-section ul li {
            margin-bottom: 0.5rem;
          }

          .footer-section ul li a {
            color: rgba(255, 255, 255, 0.8);
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .footer-section ul li a:hover {
            color: #ffd700;
          }

          .social-links {
            display: flex;
            gap: 1rem;
          }

          .social-links a {
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-decoration: none;
            transition: all 0.3s ease;
          }

          .social-links a:hover {
            background: #ffd700;
            color: #333;
            transform: translateY(-3px);
          }

          .copyright {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            color: rgba(255, 255, 255, 0.6);
          }

          /* Loading animation */
          .loading {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top-color: white;
            animation: spin 1s ease-in-out infinite;
          }

          @keyframes spin {
            to { transform: rotate(360deg); }
          }

          /* Responsive design */
          @media (max-width: 768px) {
            .hero {
              grid-template-columns: 1fr;
              text-align: center;
            }

            .hero-buttons {
              justify-content: center;
            }

            .navbar {
              flex-direction: column;
              gap: 1rem;
            }

            .nav-links {
              flex-wrap: wrap;
              justify-content: center;
            }

            .stats-section {
              grid-template-columns: repeat(2, 1fr);
            }

            .hero-content h1 {
              font-size: 2.5rem;
            }
          }

          @media (max-width: 480px) {
            .stats-section {
              grid-template-columns: 1fr;
            }

            .hero-buttons {
              flex-direction: column;
            }
          }

          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 10px;
          }

          ::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
          }

          ::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 5px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
          }
        </style>
      </head>
      <body>
        <div class="gradient-bg"></div>
        <div class="floating-shapes">
          <div class="shape"></div>
          <div class="shape"></div>
          <div class="shape"></div>
        </div>

        <div class="container">
          <!-- Navigation -->
          <nav class="navbar">
            <div class="logo">
              <div class="logo-icon">
                <i class="fas fa-bolt"></i>
              </div>
              <div class="logo-text">Nest<span>Auth</span></div>
            </div>
            <div class="nav-links">
              <a href="#features">Features</a>
              <a href="#docs">Documentation</a>
              <a href="#api">API</a>
              <a href="#pricing">Pricing</a>
              <a href="/api-docs" class="btn-docs"><i class="fas fa-book"></i> API Docs</a>
            </div>
          </nav>

          <!-- Hero Section -->
          <section class="hero">
            <div class="hero-content">
              <h1>
                Build <span>Secure</span> APIs<br>with NestJS & JWT
              </h1>
              <p>
                Enterprise-grade authentication solution with MongoDB integration. 
                Ready-to-use JWT authentication, user management, and article CRUD operations.
              </p>
              <div class="hero-buttons">
                <a href="/api-docs" class="btn-primary">
                  <i class="fas fa-rocket"></i> Get Started
                </a>
                <a href="https://github.com/your-repo" class="btn-secondary">
                  <i class="fab fa-github"></i> GitHub
                </a>
              </div>
              <div style="margin-top: 2rem;">
                <span style="color: rgba(255,255,255,0.8);">
                  <i class="fas fa-check-circle" style="color: #ffd700;"></i> 
                  100% Free & Open Source
                </span>
              </div>
            </div>
            <div class="hero-image">
              <svg viewBox="0 0 400 400" style="width: 100%; height: auto;">
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
                  </linearGradient>
                </defs>
                <circle cx="200" cy="200" r="150" fill="url(#grad)" opacity="0.8"/>
                <circle cx="200" cy="200" r="120" fill="white" opacity="0.2"/>
                <text x="200" y="210" text-anchor="middle" fill="white" font-size="48" font-weight="bold">JWT</text>
              </svg>
              <div class="stats-card">
                <i class="fas fa-shield-alt" style="color: #667eea; margin-right: 0.5rem;"></i>
                <span style="font-weight: bold;">99.9% Uptime</span>
              </div>
            </div>
          </section>

          <!-- Stats Section -->
          <div class="stats-section">
            <div class="stat-item">
              <div class="stat-number">10K+</div>
              <div class="stat-label">Active Users</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">50K+</div>
              <div class="stat-label">API Calls/day</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">99.9%</div>
              <div class="stat-label">Uptime</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">24/7</div>
              <div class="stat-label">Support</div>
            </div>
          </div>

          <!-- Features Section -->
          <section id="features" class="features">
            <h2 class="section-title">Why Choose <span>NestAuth</span>?</h2>
            <div class="features-grid">
              <div class="feature-card">
                <div class="feature-icon">
                  <i class="fas fa-bolt"></i>
                </div>
                <h3>Lightning Fast</h3>
                <p>Built on NestJS, one of the fastest Node.js frameworks. Response times under 100ms.</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">
                  <i class="fas fa-shield-alt"></i>
                </div>
                <h3>Enterprise Security</h3>
                <p>JWT authentication with bcrypt password hashing. Production-ready security.</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">
                  <i class="fas fa-database"></i>
                </div>
                <h3>MongoDB Integration</h3>
                <p>Seamless MongoDB integration with Mongoose ODM. Scalable and flexible.</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">
                  <i class="fas fa-code"></i>
                </div>
                <h3>TypeScript Support</h3>
                <p>Fully typed with TypeScript. Excellent IDE support and type safety.</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">
                  <i class="fas fa-swagger"></i>
                </div>
                <h3>Swagger Documentation</h3>
                <p>Interactive API documentation with Swagger UI. Test endpoints directly.</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">
                  <i class="fas fa-rocket"></i>
                </div>
                <h3>Ready to Deploy</h3>
                <p>Docker support and environment configuration. Deploy anywhere.</p>
              </div>
            </div>
          </section>

          <!-- API Endpoints Section -->
          <section id="api" class="endpoints">
            <h2 class="section-title">API <span>Endpoints</span></h2>
            <div class="endpoints-grid">
              <div class="endpoint-group">
                <h3><i class="fas fa-lock"></i> Authentication</h3>
                <div class="endpoint-item">
                  <span class="method post">POST</span>
                  <code>/auth/register</code>
                </div>
                <div class="endpoint-item">
                  <span class="method post">POST</span>
                  <code>/auth/login</code>
                </div>
              </div>
              <div class="endpoint-group">
                <h3><i class="fas fa-users"></i> Users</h3>
                <div class="endpoint-item">
                  <span class="method get">GET</span>
                  <code>/users/profile/:id</code>
                </div>
              </div>
              <div class="endpoint-group">
                <h3><i class="fas fa-newspaper"></i> Articles</h3>
                <div class="endpoint-item">
                  <span class="method get">GET</span>
                  <code>/articles</code>
                </div>
                <div class="endpoint-item">
                  <span class="method post">POST</span>
                  <code>/articles</code>
                </div>
                <div class="endpoint-item">
                  <span class="method get">GET</span>
                  <code>/articles/:id</code>
                </div>
                <div class="endpoint-item">
                  <span class="method patch">PATCH</span>
                  <code>/articles/:id</code>
                </div>
                <div class="endpoint-item">
                  <span class="method delete">DELETE</span>
                  <code>/articles/:id</code>
                </div>
              </div>
              <div class="endpoint-group">
                <h3><i class="fas fa-heart"></i> System</h3>
                <div class="endpoint-item">
                  <span class="method get">GET</span>
                  <code>/health</code>
                </div>
                <div class="endpoint-item">
                  <span class="method get">GET</span>
                  <code>/version</code>
                </div>
                <div class="endpoint-item">
                  <span class="method get">GET</span>
                  <code>/public</code>
                </div>
                <div class="endpoint-item">
                  <span class="method get">GET</span>
                  <code>/status</code>
                </div>
                <div class="endpoint-item">
                  <span class="method get">GET</span>
                  <code>/info</code>
                </div>
              </div>
            </div>
          </section>

          <!-- Testimonials -->
          <section class="testimonials">
            <h2 class="section-title">What <span>Developers</span> Say</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
              <div class="testimonial-card">
                <p>"Best authentication boilerplate I've ever used. Saved me weeks of development time!"</p>
                <div class="testimonial-author">
                  <div class="author-avatar">JD</div>
                  <div>
                    <strong>John Doe</strong>
                    <div style="color: #666;">Senior Developer</div>
                  </div>
                </div>
              </div>
              <div class="testimonial-card">
                <p>"The Swagger documentation is incredibly detailed. Made API integration a breeze."</p>
                <div class="testimonial-author">
                  <div class="author-avatar">JS</div>
                  <div>
                    <strong>Jane Smith</strong>
                    <div style="color: #666;">Tech Lead</div>
                  </div>
                </div>
              </div>
              <div class="testimonial-card">
                <p>"Production-ready code with excellent security practices. Highly recommended!"</p>
                <div class="testimonial-author">
                  <div class="author-avatar">RJ</div>
                  <div>
                    <strong>Robert Johnson</strong>
                    <div style="color: #666;">CTO</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Footer -->
          <footer class="footer">
            <div class="footer-content">
              <div class="footer-section">
                <h4>NestAuth</h4>
                <p>Modern authentication solution for NestJS applications with JWT and MongoDB.</p>
                <div class="social-links">
                  <a href="#"><i class="fab fa-github"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-linkedin"></i></a>
                  <a href="#"><i class="fab fa-discord"></i></a>
                </div>
              </div>
              <div class="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#features">Features</a></li>
                  <li><a href="/api-docs">Documentation</a></li>
                  <li><a href="#api">API Reference</a></li>
                  <li><a href="#pricing">Pricing</a></li>
                </ul>
              </div>
              <div class="footer-section">
                <h4>Resources</h4>
                <ul>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Community</a></li>
                  <li><a href="#">Support</a></li>
                  <li><a href="#">Status</a></li>
                </ul>
              </div>
              <div class="footer-section">
                <h4>Legal</h4>
                <ul>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Cookie Policy</a></li>
                  <li><a href="#">Security</a></li>
                </ul>
              </div>
            </div>
            <div class="copyright">
              <p>© 2024 NestAuth. All rights reserved. Built with ❤️ using NestJS</p>
              <p style="margin-top: 0.5rem; font-size: 0.9rem;">
                <i class="fas fa-code-branch"></i> v1.0.0 | 
                <i class="fas fa-database"></i> MongoDB | 
                <i class="fas fa-shield"></i> JWT
              </p>
            </div>
          </footer>
        </div>

        <script>
          // Smooth scroll for anchor links
          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
              e.preventDefault();
              const target = document.querySelector(this.getAttribute('href'));
              if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            });
          });

          // Animate stats numbers
          function animateStats() {
            const stats = document.querySelectorAll('.stat-number');
            stats.forEach(stat => {
              const target = parseInt(stat.innerText);
              let current = 0;
              const increment = target / 50;
              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  stat.innerText = target.toLocaleString() + '+';
                  clearInterval(timer);
                } else {
                  stat.innerText = Math.floor(current).toLocaleString() + '+';
                }
              }, 30);
            });
          }

          // Intersection Observer for animations
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                if (entry.target.classList.contains('stats-section')) {
                  animateStats();
                }
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
              }
            });
          }, { threshold: 0.1 });

          document.querySelectorAll('.stats-section, .features-grid, .endpoints, .testimonials').forEach(el => {
            el.style.opacity = 0;
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease-out';
            observer.observe(el);
          });

          // Add loading state to documentation button
          document.querySelector('.btn-docs').addEventListener('click', function(e) {
            if (this.classList.contains('loading')) return;
            this.innerHTML = '<span class="loading"></span> Loading...';
            this.classList.add('loading');
          });
        </script>
      </body>
      </html>
    `;
  }
}
