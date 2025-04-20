// UnderstandingText.tsx
import React from 'react';
import './UnderstandingText.css';

const UnderstandingText: React.FC = () => {
    return (
        <>

            <div className="understanding-text">
                <div className="WE">
                    <span className="outlined">
                        WE <span className="filled">UNDERSTAND</span>
                    </span>
                </div>
            </div>




            <div className="understanding-container">
                <div className="understanding-column">
                    Older adults want to play active and meaningful roles in their lives, including as part of a social
                    network, a neighborhood, and a community. Service providers and policymakers must consider that a
                    lack of sense of purpose can become problematic as people age. Engaging them in leisure activities
                    and volunteer work is important.
                </div>

                <div className="understanding-column">
                    Older adults want to stay active and contribute to society in a reciprocal manner (meaning that they
                    want to exchange their services and skills with others for the mutual benefit of the neighborhood or
                    community). Qualitative and quantitative studies published from 2005 to 2016 examining the social
                    needs of older adults were eligible for inclusion.
                </div>

                <div className="understanding-column">
                    To stimulate social contacts, neighborhood initiatives can be developed. Social meeting places, such
                    as pubs and churches can help to foster the development of close.

                    <button className="success-button">92% Success Rate →</button>
                </div>
            </div>
        </>
    );
};

export default UnderstandingText;
