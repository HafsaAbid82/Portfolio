import './Hire.css';
import { useState } from 'react';

const Hire = () => {
  const [action, setAction] = useState('');
  const [statusMessage, setStatusMessage] = useState(''); // ✅ for success/error message
  const [statusType, setStatusType] = useState(''); // ✅ to style (success/error)

  const move = () => {
    setAction('active');
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("/api/contact", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatusMessage('✅ Message sent! I’ll get back to you soon.');
        setStatusType('success');
        console.log('Success:', data);
        event.target.reset();
      } else {
        setStatusMessage('❌ Message failed to send. Please try again.');
        setStatusType('error');
        console.error('Server Error:', data);
      }
    } catch (error) {
      setStatusMessage('⚠️ Could not connect to the server.');
      setStatusType('error');
      console.error('Network Error:', error);
    }
  };

  return (
    <div className="hire-section">
      <div className="container">
        {/* Background Design */}
        <div className="background-design">
          <div className="circle-bg"></div>
          <div className="circle-bg"></div>
          <div className="circle-bg"></div>
          <div className="circle-bg"></div>
          <div className="circle-bg"></div>
          <div className="circle-bg"></div>
          <div className="bg-grid"></div>
          <div className="bg-dots"></div>
        </div>

        <div className="orb"></div>

        {/* Particles */}
        {[...Array(125)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${8 + Math.random() * 2}s`,
            }}
          ></div>
        ))}

        {/* Contact Form */}
        <div className={`wrapper ${action}`}>
          <div className="form-box">
            <form onSubmit={onSubmit}>
              <h3>Contact Me</h3>

              <div className="input-box">
                <input type="text" name="name" required />
                <label>Name</label>
              </div>

              <div className="input-box">
                <input type="email" name="email" required />
                <label>Email</label>
              </div>

              <div className="input-box">
                <input type="text" name="subject" required />
                <label>Subject</label>
              </div>

              <div className="input-box textarea">
                <textarea
                  rows="10"
                  cols="30"
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </div>

              <button type="submit" onClick={move}>
                Submit
              </button>

              {/* ✅ Status Message */}
              {statusMessage && (
                <p
                  className={`status-message ${
                    statusType === 'success' ? 'success' : 'error'
                  }`}
                >
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hire;


