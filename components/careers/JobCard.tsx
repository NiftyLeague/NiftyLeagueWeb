import { useState } from "react";
import { MDBCollapse, MDBCard, MDBIcon } from 'mdb-react-ui-kit';

interface JobCardProps {
  details: {
    id: string;
    link: string;
    title: string;
    location: string;
    aboutTheJob: string;
    aboutTheRole: string;
    responsibilities?: string[];
    requirements: string[];
    benefits: string[];
  }

}

const JobCard = ({ details }: JobCardProps): JSX.Element => {
  const { id, title, location, aboutTheRole, responsibilities, requirements, benefits, link } = details;
  const [open, setOpen] = useState(false);
  return (
    <MDBCard background='dark' className="m-3 job-card my-5">
      <div className="card-header position-relative p-5 cursor-pointer jobs-card-header border-bottom-0" onClick={() => setOpen(!open)}>
        <div>
          <h3>{title}</h3>
          <span>{location}</span>
        </div>
        <div className="jobs-card-header">
          <a className="btn theme-btn-aqua m-3 btn-lg d-md-block d-none" href={link} role="button" target='_blank' rel="noreferrer">Apply on LinkedIn</a>
          <div className="collapse-icon">
            <MDBIcon fas icon={open ? 'angle-down' : 'angle-right'} size='3x' />
          </div>
        </div>
      </div>

      <MDBCollapse show={open} className='pt-0 p-4 h-auto'>
        <h4 className="color-purple">About the Role</h4>
        <p>&nbsp;&nbsp;{aboutTheRole}</p>
        {
          responsibilities &&
          <p>
            <h4 className="color-purple pt-5">Responsibilities:</h4>
            <ul>
              {responsibilities.map((resp, index) => <li key={index}>{resp}</li>)}
            </ul>
          </p>
        }
        <p>
          <h4 className="color-purple pt-5">Requirements:</h4>
          <ul>
            {requirements.map((req, index) => <li key={index}>{req}</li>)}
          </ul>
        </p>
        <p>
          <h4 className="color-purple pt-5">What we offer:</h4>
          <ul>
            {benefits.map((ben, index) => <li key={index}>{ben}</li>)}
          </ul>
        </p>
        <a className="btn theme-btn-aqua m-3 btn-lg" href={link} role="button" target='_blank' rel="noreferrer">Apply on LinkedIn</a>
      </MDBCollapse>
    </MDBCard>
  );
}

export default JobCard;
