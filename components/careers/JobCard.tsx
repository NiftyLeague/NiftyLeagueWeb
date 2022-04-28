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
    pay?: {
      min?: string;
      max?: string;
    };
    contact?: {
      name: string;
      title: string;
    }
  }

}

const JobCard = ({ details }: JobCardProps): JSX.Element => {
  const { id, title, location, aboutTheJob, aboutTheRole, responsibilities, requirements, benefits, pay, contact, link } = details;
  const [open, setOpen] = useState(false);
  return (
    <MDBCard background='dark' className="m-3 job-card">
      <div className="card-header position-relative p-5 cursor-pointer" onClick={() => setOpen(!open)}>
        <h3>{title}</h3>
        <p>{location}</p>
        <span className="collapse-icon">
          <MDBIcon fas icon={open ? 'angle-down' : 'angle-right'} size='3x' />
        </span>
      </div>

      <MDBCollapse show={open} className='p-4 h-auto'>
        <h4 className="color-purple">About the Job:</h4>
        <p>&nbsp;&nbsp;{aboutTheJob}</p>
        <h4 className="color-purple">About the Role</h4>
        <p>&nbsp;&nbsp;{aboutTheRole}</p>
        {
          responsibilities &&
          <p>
            <h4 className="color-purple">Responsibilities:</h4>
            <ul>
              {responsibilities.map((resp, index) => <li key={index}>{resp}</li>)}
            </ul>
          </p>
        }
        <p>
          <h4 className="color-purple">Requirements:</h4>
          <ul>
            {requirements.map((req, index) => <li key={index}>{req}</li>)}
          </ul>
        </p>
        <p>
          <h4 className="color-purple">What we offer:</h4>
          <ul>
            {benefits.map((ben, index) => <li key={index}>{ben}</li>)}
          </ul>
        </p>
        {
          pay ?
            <p>From: {pay.min}, To: {pay.max}</p>
            :
            <p>
              <h4 className="color-purple">Pay range unavailable</h4>
              &nbsp;&nbsp;Salary information is not available at the moment.
            </p>
        }
        {
          contact &&
          <p>
            <h4 className="color-purple">Contact:</h4>
            <span>&nbsp;&nbsp;{contact.name}</span><br />
            <span>&nbsp;&nbsp;{contact.title}</span>
          </p>
        }
        <a className="btn theme-btn-aqua m-3 btn-lg" href={link} role="button" target='_blank' rel="noreferrer">Apply</a>
      </MDBCollapse>
    </MDBCard>
  );
}

export default JobCard;
