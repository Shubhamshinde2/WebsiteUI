import React from 'react';
import './Organize.css';

const organizeItems = [
  'Needs Assessment',
  'Treatment Planning & Placement',
  'Transportation & Logistics',
  'Insurance Advocacy',
  'Employment Advocacy',
  'Aftercare Planning'
];

const Organize: React.FC = () => {
  return (
    <div className="organize-container">
      <div className="organize-header">
        <h2><span className="light">WE</span> <strong>CAN ORGANIZE EVERYTHING</strong></h2>
      
      </div>

      <div className="organize-texts">
      <p><span className="intervention-highlight"><em>Interventions</em></span> should focus on older adult’s desire for connectedness, participation and independence.</p>

        <p>
          Loneliness and social isolation are growing public health concerns in our aging society.
          Whilst these experiences occur across the life span, 50% of individuals aged over 60 are at risk
          of social isolation and one-third will experience some degree of loneliness later in life.
          It is vital to reduce loneliness and social isolation among older adults.
        </p>
        <p>
          The methodology framework proposed by Asked and O’Malley and further developed by Levac, et al.
          was used to guide the scoping review process. A total of 33 reviews met the inclusion criteria,
          evaluating a range of interventions targeted at older people residing in the community or
          institutionalised settings.
        </p>
      </div>

      <div className="organize-grid">
        {organizeItems.map((item, index) => (
          <div key={index} className={`organize-box ${item === 'Insurance Advocacy' ? 'highlighted' : ''}`}>
            {item}
            {item === 'Insurance Advocacy' && (
              <div className="tooltip">
                We’re experienced in our individual crafts and understand how each one of our roles impacts your plan holistically.
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Organize;
