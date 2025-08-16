import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-text">Redefining Productivity</span>
          </div>
          <h1 className="hero-title">
            About <span className="gradient-text">TaskPilot</span>
          </h1>
          <p className="hero-description">
            The future of task management is here. TaskPilot combines cutting-edge AI 
            with intuitive design to create the ultimate productivity companion that 
            evolves with your workflow.
          </p>
        </div>
        <div className="hero-visual">
          <div className="floating-elements">
            <div className="element element-1"></div>
            <div className="element element-2"></div>
            <div className="element element-3"></div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="section-header">
          <h2 className="section-title">Our Mission</h2>
          <div className="title-underline"></div>
        </div>
        <div className="mission-content">
          <div className="mission-text">
            <p className="mission-description">
              We believe productivity shouldn't be complicated. Our mission is to empower 
              individuals, teams, and organizations with intelligent tools that seamlessly 
              integrate into their workflow, eliminating friction and amplifying results.
            </p>
            <div className="mission-stats">
              <div className="stat-item">
                <div className="stat-number">500K+</div>
                <div className="stat-label">Active Users</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2M+</div>
                <div className="stat-label">Tasks Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime</div>
              </div>
            </div>
          </div>
          <div className="mission-visual">
            <div className="mission-card">
              <div className="card-icon">🎯</div>
              <h3>Vision</h3>
              <p>To be the world's most intuitive and intelligent productivity platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">What Makes Us Different</h2>
          <div className="title-underline"></div>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <div className="icon-wrapper">⚡</div>
            </div>
            <h3 className="feature-title">Lightning Fast</h3>
            <p className="feature-description">
              Create, organize, and manage tasks in milliseconds. Our optimized 
              architecture ensures zero-latency interactions.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <div className="icon-wrapper">🤖</div>
            </div>
            <h3 className="feature-title">AI-Powered Intelligence</h3>
            <p className="feature-description">
              Smart task prioritization, deadline predictions, and workflow 
              optimization powered by advanced machine learning.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <div className="icon-wrapper">🔄</div>
            </div>
            <h3 className="feature-title">Real-time Collaboration</h3>
            <p className="feature-description">
              Seamless team synchronization with live updates, comments, 
              and intelligent conflict resolution.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <div className="icon-wrapper">📊</div>
            </div>
            <h3 className="feature-title">Smart Analytics</h3>
            <p className="feature-description">
              Deep insights into your productivity patterns with actionable 
              recommendations for continuous improvement.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <div className="icon-wrapper">🔒</div>
            </div>
            <h3 className="feature-title">Enterprise Security</h3>
            <p className="feature-description">
              Bank-grade encryption, SOC2 compliance, and advanced access 
              controls to keep your data absolutely secure.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <div className="icon-wrapper">🌐</div>
            </div>
            <h3 className="feature-title">Universal Access</h3>
            <p className="feature-description">
              Native apps for every platform, offline sync, and cloud-first 
              architecture for productivity anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="values-section">
        <div className="section-header">
          <h2 className="section-title">Our Core Values</h2>
          <div className="title-underline"></div>
        </div>
        <div className="values-grid">
          <div className="value-item">
            <div className="value-number">01</div>
            <h3>Innovation First</h3>
            <p>We constantly push boundaries to deliver tomorrow's productivity solutions today.</p>
          </div>
          <div className="value-item">
            <div className="value-number">02</div>
            <h3>User-Centric Design</h3>
            <p>Every feature is crafted with our users' needs and workflows at the center.</p>
          </div>
          <div className="value-item">
            <div className="value-number">03</div>
            <h3>Transparency</h3>
            <p>Open communication, clear roadmaps, and honest feedback drive everything we do.</p>
          </div>
          <div className="value-item">
            <div className="value-number">04</div>
            <h3>Excellence</h3>
            <p>We maintain the highest standards in code quality, design, and user experience.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Your Productivity?</h2>
          <p className="cta-description">
            Join thousands of professionals who've already revolutionized their workflow with TaskPilot.
          </p>
          <div className="cta-buttons">
            <button className="cta-primary">Start Free Trial</button>
            <button className="cta-secondary">Watch Demo</button>
          </div>
        </div>
        <div className="cta-visual">
          <div className="pulse-ring"></div>
          <div className="pulse-ring delay-1"></div>
          <div className="pulse-ring delay-2"></div>
        </div>
      </section>
    </div>
  );
};

export default About;