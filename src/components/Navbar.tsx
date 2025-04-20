import React, { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(prevState => !prevState);
    }
    return (
        <div className="main-container">
            <header className="navbar">
                <div className="logo">
                    <span className="curve"></span>GET AN <span className="highlight">INTERVENTION</span>
                </div>

                <div className="hamburger" onClick={toggleMenu}>
                    &#9776;
                </div>

                <nav className={isActive ? 'active' : ''}>
                    <a href="#">HOME</a>
                    <a href="#">ABOUT</a>
                    <a href="#">CONTACT</a>|
                    <span className="call-now">CALL NOW FOR A CONSULT <strong> 123.456.7890</strong></span>
                </nav>
            </header>

            <section className="hero-section">
                <div className="left-content">
                    <div className="GetAN">
                        <span className="outlined">GET AN <span className="filled">INTERVENTION</span></span>
                    </div>
                    <p>
                        Showing greater respect to older adults can be done in several ways: acknowledging and putting to use the talents
                        and skills of older adults, creating intergenerational initiatives, and allowing older adults to stay active and
                        independent for as long as possible.
                    </p>
                </div>

                <div className="right-form">
                    <h2>Contact Us</h2>
                    <form>
                        <div className="form-row">
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last Name" />
                        </div>
                        <div className="form-row">
                            <input type="email" placeholder="Business Email" />
                            <input type="text" placeholder="Company" />
                        </div>
                        <div className="form-row">
                            <select>
                                <option>Country</option>
                                <option>USA</option>
                                <option>Canada</option>
                                <option>UK</option>
                            </select>
                        </div>
                        <button type="submit">➤ Submit</button>
                    </form>
                </div>
            </section>
            <div className={`side-panel ${isActive ? 'active' : ''}`}>
                <div className="close-btn" onClick={toggleMenu}>
                    &times;
                </div>
                <a href="#">HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">CONTACT</a>
                <span className="call-now">CALL NOW FOR A CONSULT <strong> 123.456.7890</strong></span>
            </div>
            
        </div>
    );
};

export default Navbar;
