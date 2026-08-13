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

export const dynamic = "force-dynamic";

const DynamicPage = async () => {
  const [doctors] = await db.query<Doctor[]>("SELECT * FROM doctors");

  console.log("Dynamic Page Doctors:", doctors);

  return (
    <>
      <h1>Full Stack Dynamic App:</h1>
      <p>
        👉 All pages are made Dynamic by setting the `dynamic` option to
        `"force-dynamic"`.
      </p>
      <p>👉 Dynamic page is rendered on the server at request time.</p>
      <p>👉 Changes based on user or request data.</p>
      <p>👉 Any change are reflected in the rendered page.</p>
      <p>👉 File has an "f" sign before it.</p>
      <p>
        👉 Examples are: searchParams, useSearchParams(), header() function,
        cookies() function, usePathname(), fetch() with cache: no store or next
        or when you manually mark the page to be dynamic
      </p>

      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.doctor_id}>{doctor.name}</li>
        ))}
      </ul>
    </>
  );
};

export default DynamicPage;
