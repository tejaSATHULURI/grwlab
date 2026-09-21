
import {subscribe,constants} from '../assets/constants/constants.json';
export default function Subscribe({id}) {
    return (    
    <section className="content-section subscribe-section" id={id}>
          <div>
            <p className="eyebrow">{subscribe.label}</p>
            <h2>{subscribe.heading}</h2>
            <p className="subscribe-copy">
              {subscribe.description}
            </p>
          </div>
          <div className="google-form-wrap">
            <iframe
              className="google-form"
              src={constants?.GOOGLE_FORM_URL}
              title="Growth Lab subscription form"
              loading="lazy"
            >
              Loading the subscription form...
            </iframe>
          </div>
        </section>
        )
    }