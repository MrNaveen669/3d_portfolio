
import { config } from "../config";
import "./styles/CallToAction.css";

const CallToAction = () => {
  return (
    <div className="cta-section">
      <div className="cta-buttons">
        <a
          href={`mailto:${config.contact.email}`}
          className="cta-btn cta-btn-play"
          data-cursor="disable"
        >
          Start Your Project →
        </a>
        
        <a 
          href="#work"
          className="cta-btn cta-btn-hire"
          data-cursor="disable"
        >
          View Our Work →
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
