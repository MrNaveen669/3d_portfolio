import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>4+ Years of Industry Experience</h2>
            <h1>
              ANY
              {' '}
              <br />
              <span>FRAME</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>We Drive</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Growth & Creativity</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Through Technology</div>
            </h2>
          </div>
          {/* Mobile photo - shows only on mobile when 3D character is hidden */}
          <div className="mobile-photo">
            <img src="/images/mypicnbg.png" alt="AnyFrame Agency" />
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
