import { useState } from 'react';
import { MDBCollapse, MDBCard, MDBIcon } from 'mdb-react-ui-kit';
import AnimatedWrapper from '@components/AnimatedWrapper';

interface JobCardProps {
  details: {
    id: string;
    link: string;
    title: string;
    location: string;
    aboutTheRole: string;
    responsibilities?: string[];
    requirements: string[];
    benefits: string[];
  };
}

const JobCard = ({ details }: JobCardProps): JSX.Element => {
  const { id, title, location, aboutTheRole, responsibilities, requirements, benefits, link } = details;
  const [open, setOpen] = useState(false);
  return (
    <MDBCard background="dark" className="m-3 job-card my-5">
      <div
        className="card-header position-relative p-md-5 p-3 cursor-pointer jobs-card-header border-bottom-0"
        onClick={() => setOpen(!open)}
      >
        <div>
          <AnimatedWrapper>
            <h5 className="animated-fade animated-fade-start transition-delay-small">{title}</h5>
          </AnimatedWrapper>
          <AnimatedWrapper>
            <p className="animated-fade animated-fade-start transition-delay-medium">{location}</p>
          </AnimatedWrapper>
        </div>
        <div className="jobs-card-header">
          <AnimatedWrapper>
            <a
              className="btn theme-btn-primary m-3 d-md-block d-none mw-fix animated-fade-start animated-fade transition-delay-medium"
              href={link}
              role="button"
              target="_blank"
              rel="noreferrer"
              onClick={e => e.stopPropagation()}
            >
              Apply
            </a>
          </AnimatedWrapper>
          <AnimatedWrapper>
            <div className="collapse-icon animated-fade-start animated-fade transition-delay-large">
              <MDBIcon fas icon={open ? 'angle-down' : 'angle-right'} size="3x" />
            </div>
          </AnimatedWrapper>
        </div>
      </div>

      <MDBCollapse show={open} className="p-md-5 p-3 pt-md-1 pt-2 h-auto">
        <AnimatedWrapper>
          <h6 className="color-purple md-text-left animated-fade-start animated-fade transition-delay-small">
            About the Role
          </h6>
        </AnimatedWrapper>
        <div className="md-text-left div-paragraph">
          <AnimatedWrapper>
            <p className="animated-fade-start animated-fade transition-delay-medium">{aboutTheRole}</p>
          </AnimatedWrapper>
        </div>
        {responsibilities && (
          <div className="div-paragraph">
            <AnimatedWrapper>
              <h6 className="color-purple pt-5 md-text-left animated-fade-start animated-fade transition-delay-small">
                Responsibilities:
              </h6>
            </AnimatedWrapper>
            <ul className="md-text-left">
              {responsibilities.map((resp, index) => (
                <AnimatedWrapper key={index}>
                  <li className="animated-fade-start animated-fade transition-delay-medium">{resp}</li>
                </AnimatedWrapper>
              ))}
            </ul>
          </div>
        )}
        <div className="div-paragraph">
          <AnimatedWrapper>
            <h6 className="color-purple pt-5 md-text-left animated-fade-start animated-fade transition-delay-small">
              Requirements:
            </h6>
          </AnimatedWrapper>
          <ul className="md-text-left">
            {requirements.map((req, index) => (
              <AnimatedWrapper key={index}>
                <li className="animated-fade-start animated-fade transition-delay-medium">{req}</li>
              </AnimatedWrapper>
            ))}
          </ul>
        </div>
        <div className="div-paragraph">
          <AnimatedWrapper>
            <h6 className="color-purple pt-5 md-text-left animated-fade-start animated-fade transition-delay-small">
              What we offer:
            </h6>
          </AnimatedWrapper>
          <ul className="md-text-left">
            {benefits.map((ben, index) => (
              <AnimatedWrapper key={index}>
                <li className="animated-fade-start animated-fade transition-delay-medium">{ben}</li>
              </AnimatedWrapper>
            ))}
          </ul>
        </div>
        <div className="d-flex justify-content-center m-3">
          <AnimatedWrapper>
            <a
              className="btn theme-btn-primary btn-lg animated-fade-start animated-fade transition-delay-medium"
              href={link}
              role="button"
              target="_blank"
              rel="noreferrer"
            >
              Apply
            </a>
          </AnimatedWrapper>
        </div>
      </MDBCollapse>
    </MDBCard>
  );
};

export default JobCard;
