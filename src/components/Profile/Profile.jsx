import { useLoaderData } from "react-router"

export default function Profile() {

  const studentDetails = useLoaderData().data;
  const { profilePicture, firstName, lastName, email, enrollmentDate, courseProgress, lastLogin } = studentDetails;

  const calculateOverallProgress = (courseProgress) => {
    const progressValues = Object.values(courseProgress);
    const totalProgress = progressValues.reduce((sum, value) => sum + value, 0);
    return totalProgress / progressValues.length;
  };

  const progress = calculateOverallProgress(courseProgress);

  return (
    <div className="h-[calc(100vh-65px)] flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl border">
        <figure className="p-5">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
              <img src={profilePicture} />
            </div>
          </div>
        </figure>
        <div className="card-body items-center text-center bg-fuchsia-100 rounded-b-md">
          <h2 className="card-title">{firstName + lastName}</h2>
          <p>{email}</p>
          <p>Enrollment Date: {enrollmentDate}</p>
          <p>Overall Progress: {progress}%</p>
          <p>Last Login: {lastLogin}</p>
          <div className="card-actions">
            <button className="btn btn-primary">View Courses</button>
            <button className="btn btn-secondary">Log Out</button>
          </div>
        </div>
      </div>
    </div>

  )
}
