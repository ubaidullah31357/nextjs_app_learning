import { RowDataPacket } from "mysql2";
import { db } from "@/config/db";

interface Doctor extends RowDataPacket {
  doctor_id: number;
  name: string;
  specialization: string;
  phone: string;
  email: string;
  experience_years: number;
  salary: number;
}

const StaticPage = async () => {
  const [doctors] = await db.query<Doctor[]>("SELECT * FROM doctors");

  console.log("Static Page Doctors:", doctors);

  return (
    <>
      <h1>Full Stack Static App:</h1>
      <p>👉 All pages are static by default.</p>
      <p>👉 Static page is rendered on the server at build time.</p>
      <p>👉 After build, the page is served as a static HTML file.</p>
      <p>👉 Doesn't change based on user or request data.</p>
      <p>👉 Any change after build requires a new deployment.</p>
      <p>👉 Loads super fast and can be cached by CDNs.</p>
      <p>👉 File has a "o" sign before it.</p>

      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.doctor_id}>{doctor.name}</li>
        ))}
      </ul>
    </>
  );
};

export default StaticPage;
