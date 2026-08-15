import { RowDataPacket } from "mysql2";
import { db } from "@/config/db";
import { cache } from "react";

interface Doctor extends RowDataPacket {
  doctor_id: number;
  name: string;
  specialization: string;
  phone: string;
  email: string;
  experience_years: number;
  salary: number;
}

export const dynamic = "force-dynamic";

const DynamicPage = async () => {
  const doctors = await getAllDoctors();

  return (
    <>
      <h1>cache() function explanation:</h1>
      <p>
        cache() let us store the result of same user's request in cache so that
        their is no need to request server every time the same data is requested
        by the user.
      </p>
      <DoctorsList />
    </>
  );
};

export default DynamicPage;

export const DoctorsList = async () => {
  const doctors = await getAllDoctors();

  return (
    <ul>
      {doctors.map((doctor) => (
        <li key={doctor.doctor_id}>{doctor.name}</li>
      ))}
    </ul>
  );
};

const getAllDoctors = cache(async () => {
  const [doctors] = await db.query<Doctor[]>("SELECT * FROM doctors");
  console.log("Fetching Doctors ...");
  return doctors;
});
