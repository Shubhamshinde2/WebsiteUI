import React, { useState } from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    const [showVideo, setShowVideo] = useState(false);

    const handlePlay = () => setShowVideo(true);
    const handleClose = () => setShowVideo(false);

    return (
        <>
            <div className="footer-container">
                <div className="footer-left-panel">
                    <h2>
                        <span className="footer-highlight">WATCH</span> THE VIDEO
                    </h2>
                    <div className="footer-section">
                        <p className="footer-title">
                            <span className="footer-tick">✓</span> Needs Assessment
                        </p>
                        <p className="footer-desc">
                            The Advocacy Evaluation Toolkit contains the instruments used to collect data for
                            evaluating the Consumer Voices for Coverage program.
                        </p>
                    </div>
                    <div className="footer-section">
                        <p className="footer-title">
                            <span className="footer-tick">✓</span> Insurance Advocacy
                        </p>
                        <p className="footer-desc">
                            We are committed to advocating for appropriate coverage and payment policies.
                        </p>
                    </div>
                    <div className="footer-section">
                        <p className="footer-title">
                            <span className="footer-tick">✓</span> Treatment Planning & Placement
                        </p>
                        <p className="footer-desc">
                            Patients can better understand medical procedures, discharge instructions, etc.
                        </p>
                    </div>
                </div>

                {/* S-Curve Divider */}
                <div className="footer-panel-divider">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path
                            d="M100,0 Q50,50 100,100"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                        />
                    </svg>
                </div>


                <div className="footer-right-panel">
                    <img
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                        alt="People Sitting on Grass"
                        className="footer-background-img"
                    />
                    <div className="footer-video-overlay">
                        <button className="footer-play-button" onClick={handlePlay}>▶</button>
                    </div>
                    <p className="footer-logo">GET AN <strong>INTERVENTION</strong></p>
                </div>
            </div>

            {/* Video Modal */}



            {/* Footer Text Section */}
            <div className="footer-bottom">
                <p>&#169; 2019 Get an Intervention Inc. All rights reserved.</p>
                <div className="footer-links">
                    <a href="/privacy-policy">Privacy Policy</a>|
                    <a href="/terms-of-use">Terms of Use</a>|
                    <a href="/site-map">Site Map</a>
                </div>
            </div>
        </>
    );
};

export default Footer;
