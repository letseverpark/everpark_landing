'use client';

import { useState } from 'react';

export default function PhoneScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="phone-screen">
      <style jsx>{`
        .phone-screen {
          width: 260px;
          height: 520px;
          background: linear-gradient(180deg, #ffffff 0%, #f8fffe 100%);
          border-radius: 36px;
          padding: 50px 20px 30px 20px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05);
        }
        
        .phone-screen::before {
          content: '';
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(0, 181, 142, 0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        
        .status-bar {
          position: absolute;
          top: 12px;
          left: 20px;
          right: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          font-weight: 600;
          color: #000;
        }
        
        .status-bar-time {
          font-weight: 600;
        }
        
        .status-bar-icons {
          display: flex;
          gap: 4px;
          align-items: center;
        }
        
        .logo-container {
          display: flex;
          justify-content: center;
          margin-bottom: 24px;
          margin-top: 10px;
          position: relative;
          z-index: 1;
        }
        
        .logo-box {
          background: white;
          border: 2px solid #e8e8e8;
          border-radius: 20px;
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
        }
        
        .logo-text {
          font-family: 'Space Grotesk', -apple-system, system-ui, sans-serif;
          font-weight: 700;
          font-size: 22px;
          line-height: 1;
          letter-spacing: -0.5px;
        }
        
        .logo-ever {
          color: #000000;
        }
        
        .logo-park {
          color: #00b58e;
        }
        
        .title {
          font-family: 'Space Grotesk', -apple-system, system-ui, sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: #000000;
          margin-bottom: 20px;
          text-align: center;
          position: relative;
          z-index: 1;
          letter-spacing: -0.3px;
        }
        
        .input-group {
          margin-bottom: 14px;
          position: relative;
          z-index: 1;
        }
        
        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        
        .input-icon {
          position: absolute;
          left: 14px;
          color: #9ca3af;
          font-size: 15px;
          pointer-events: none;
        }
        
        .input {
          width: 100%;
          padding: 14px 14px 14px 42px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 2px solid #e5e5e5;
          border-radius: 14px;
          font-size: 15px;
          font-family: 'Inter', -apple-system, system-ui, sans-serif;
          color: #000000;
          outline: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .input::placeholder {
          color: #a0a0a0;
        }
        
        .input:focus {
          border-color: #00b58e;
          box-shadow: 0 0 0 4px rgba(0, 181, 142, 0.15), 0 4px 20px rgba(0, 181, 142, 0.1);
        }
        
        .input.has-value {
          border-color: rgba(0, 181, 142, 0.5);
        }
        
        .password-toggle {
          position: absolute;
          right: 14px;
          background: none;
          border: none;
          color: #9ca3af;
          cursor: pointer;
          padding: 4px;
          font-size: 16px;
          transition: color 0.2s;
        }
        
        .password-toggle:hover {
          color: #00b58e;
        }
        
        .btn-primary {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #00b58e 0%, #009977 100%);
          border: none;
          border-radius: 14px;
          color: white;
          font-family: 'Space Grotesk', -apple-system, system-ui, sans-serif;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          margin-top: 6px;
          position: relative;
          z-index: 1;
          letter-spacing: -0.2px;
          box-shadow: 0 4px 20px rgba(0, 181, 142, 0.3);
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 181, 142, 0.4);
        }
        
        .btn-primary:active {
          transform: scale(0.98);
        }
        
        .divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 18px 0;
          position: relative;
          z-index: 1;
        }
        
        .divider-line {
          flex: 1;
          height: 1px;
          background: #e5e5e5;
        }
        
        .divider-text {
          font-size: 12px;
          color: #888888;
          white-space: nowrap;
          font-weight: 500;
        }
        
        .social-buttons {
          display: flex;
          gap: 12px;
          position: relative;
          z-index: 1;
        }
        
        .btn-social {
          flex: 1;
          padding: 12px 10px;
          background: #ffffff;
          border: 2px solid #e5e5e5;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          font-family: 'Inter', -apple-system, system-ui, sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #000000;
        }
        
        .btn-social:hover {
          border-color: #00b58e;
          box-shadow: 0 4px 16px rgba(0, 181, 142, 0.12);
          transform: translateY(-1px);
        }
        
        .btn-social:active {
          transform: scale(0.98);
        }
        
        .btn-social svg {
          width: 18px;
          height: 18px;
        }
        
        .footer-text {
          margin-top: auto;
          text-align: center;
          font-size: 13px;
          color: #666666;
          position: relative;
          z-index: 1;
          padding-top: 16px;
        }
        
        .footer-link {
          color: #00b58e;
          text-decoration: none;
          font-weight: 600;
        }
        
        .home-indicator {
          position: absolute;
          bottom: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 5px;
          background: #000000;
          border-radius: 3px;
          opacity: 0.2;
        }
      `}</style>
      
      {/* Status bar */}
      <div className="status-bar">
        <span className="status-bar-time">9:41</span>
        <div className="status-bar-icons">
          <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
            <path d="M1.5 4.5C1.5 3.67 2.17 3 3 3H4C4.83 3 5.5 3.67 5.5 4.5V10.5C5.5 11.33 4.83 12 4 12H3C2.17 12 1.5 11.33 1.5 10.5V4.5Z" fill="black"/>
            <path d="M7 2.5C7 1.67 7.67 1 8.5 1H9.5C10.33 1 11 1.67 11 2.5V10.5C11 11.33 10.33 12 9.5 12H8.5C7.67 12 7 11.33 7 10.5V2.5Z" fill="black"/>
            <path d="M12.5 0.5C12.5 0.22 12.72 0 13 0H14C14.28 0 14.5 0.22 14.5 0.5V10.5C14.5 11.33 13.83 12 13 12H14C13.17 12 12.5 11.33 12.5 10.5V0.5Z" fill="black"/>
          </svg>
          <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
            <path d="M7.5 2.5C9.5 2.5 11.3 3.3 12.6 4.6L14 3.2C12.3 1.5 10 0.5 7.5 0.5C5 0.5 2.7 1.5 1 3.2L2.4 4.6C3.7 3.3 5.5 2.5 7.5 2.5Z" fill="black"/>
            <path d="M4.3 6.5L5.7 7.9C6.2 7.4 6.8 7 7.5 7C8.2 7 8.8 7.4 9.3 7.9L10.7 6.5C9.8 5.6 8.7 5 7.5 5C6.3 5 5.2 5.6 4.3 6.5Z" fill="black"/>
            <circle cx="7.5" cy="10" r="1.5" fill="black"/>
          </svg>
          <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
            <rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke="black" strokeOpacity="0.35"/>
            <rect x="2" y="2" width="18" height="8" rx="1.5" fill="black"/>
            <path d="M23 4V8C23.8 7.6 24.5 6.9 24.5 6C24.5 5.1 23.8 4.4 23 4Z" fill="black" fillOpacity="0.4"/>
          </svg>
        </div>
      </div>
      
      {/* Logo */}
      <div className="logo-container">
        <div className="logo-box">
          <span className="logo-text">
            <span className="logo-ever">ever</span>
            <span className="logo-park">park</span>
          </span>
        </div>
      </div>
      
      {/* Title */}
      <h2 className="title">Inicia sesión</h2>
      
      {/* Email input */}
      <div className="input-group">
        <div className="input-wrapper">
          <span className="input-icon">✉️</span>
          <input
            type="email"
            className={`input ${email ? 'has-value' : ''}`}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      
      {/* Password input */}
      <div className="input-group">
        <div className="input-wrapper">
          <span className="input-icon">🔒</span>
          <input
            type={showPassword ? 'text' : 'password'}
            className={`input ${password ? 'has-value' : ''}`}
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ paddingRight: '44px' }}
          />
          <button
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
            type="button"
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        </div>
      </div>
      
      {/* Login button */}
      <button className="btn-primary">
        Iniciar sesión
      </button>
      
      {/* Divider */}
      <div className="divider">
        <div className="divider-line" />
        <span className="divider-text">o continúa con</span>
        <div className="divider-line" />
      </div>
      
      {/* Social buttons */}
      <div className="social-buttons">
        <button className="btn-social">
          <svg viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Google
        </button>
        <button className="btn-social">
          <svg viewBox="0 0 24 24" fill="#000000">
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
          </svg>
          Apple
        </button>
      </div>
      
      {/* Footer */}
      <p className="footer-text">
        ¿No tienes cuenta? <a href="#" className="footer-link">Regístrate</a>
      </p>
      
      {/* Home indicator */}
      <div className="home-indicator" />
    </div>
  );
}
