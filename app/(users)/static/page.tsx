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

  console.log(doctors);

  return (
    <>
      <h1>Full Stack App:</h1>

      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.doctor_id}>{doctor.name}</li>
        ))}
      </ul>
    </>
  );
};

export default StaticPage;
