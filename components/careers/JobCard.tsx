import { useState } from 'react';
import { MDBCollapse, MDBCard, MDBIcon } from 'mdb-react-ui-kit';

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
          <h5>{title}</h5>
          <p>{location}</p>
        </div>
        <div className="jobs-card-header">
          <a
            className="btn theme-btn-primary m-3 d-md-block d-none mw-fix"
            href={link}
            role="button"
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
          >
            Apply
          </a>
          <div className="collapse-icon">
            <MDBIcon fas icon={open ? 'angle-down' : 'angle-right'} size="3x" />
          </div>
        </div>
      </div>

      <MDBCollapse show={open} className="p-md-5 p-3 pt-md-1 pt-2 h-auto">
        <h6 className="color-purple md-text-left">About the Role</h6>
        <div className="md-text-left div-paragraph">
          <p>{aboutTheRole}</p>
        </div>
        {responsibilities && (
          <div className="div-paragraph">
            <h6 className="color-purple pt-5 md-text-left">Responsibilities:</h6>
            <ul className="md-text-left">
              {responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="div-paragraph">
          <h6 className="color-purple pt-5 md-text-left">Requirements:</h6>
          <ul className="md-text-left">
            {requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
        <div className="div-paragraph">
          <h6 className="color-purple pt-5 md-text-left">What we offer:</h6>
          <ul className="md-text-left">
            {benefits.map((ben, index) => (
              <li key={index}>{ben}</li>
            ))}
          </ul>
        </div>
        <div className="d-flex justify-content-center m-3">
          <a className="btn theme-btn-primary btn-lg" href={link} role="button" target="_blank" rel="noreferrer">
            Apply
          </a>
        </div>
      </MDBCollapse>
    </MDBCard>
  );
};

export default JobCard;
