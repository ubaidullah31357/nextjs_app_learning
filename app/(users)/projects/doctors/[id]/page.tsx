import { db } from "@/config/db";
import { RowDataPacket } from "mysql2";
import {
  Mail,
  Phone,
  BriefcaseBusiness,
  DollarSign,
  UserRound,
  Stethoscope,
} from "lucide-react";

interface Doctor extends RowDataPacket {
  doctor_id: number;
  name: string;
  specialization: string;
  phone: string;
  email: string;
  experience_years: number;
  salary: number;
}

interface Props {
  params: Promise<{ id: string }>;
}

const FetchDoctors = async ({ params }: Props) => {
  const { id } = await params;

  const [doctors] = await db.query<Doctor[]>("SELECT * FROM doctors");

  console.log("Doctors:", doctors);
  console.log("Requested ID:", id);

  const doctor = doctors.find((doctor) => doctor.doctor_id === parseInt(id));

  if (!doctor) {
    return <h1>Doctor not found</h1>;
  }

  return (
    <>
      <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6">
        <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-5">
            <div className="flex items-center gap-4">
              {/* Doctor Avatar */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-2xl font-bold text-indigo-600">
                {doctor.name.charAt(0)}
              </div>

              {/* Doctor Name */}
              <div className="text-white">
                <h1 className="text-xl font-bold">{doctor.name}</h1>

                <p className="text-sm text-indigo-100">
                  {doctor.specialization}
                </p>

                <div className="mt-1 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-400"></span>
                  <span className="text-xs text-green-100">Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Information */}
          <div className="px-6 py-5">
            {/* Email */}
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-blue-500">
                <Mail size={16} className="h-4 w-4 text-blue-500" />
              </span>

              <div>
                <p className="text-xs text-gray-400">Email</p>
                <p className="text-sm text-gray-600">{doctor.email}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="mt-4 flex items-start gap-3">
              <span className="mt-0.5 text-green-500">
                <Phone size={16} className="h-4 w-4 text-green-500" />
              </span>

              <div>
                <p className="text-xs text-gray-400">Phone</p>
                <p className="text-sm text-gray-600">{doctor.phone}</p>
              </div>
            </div>

            {/* Experience + Salary */}
            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-gray-100 pt-5">
              <div className="flex items-start gap-3">
                <span className="text-yellow-500">
                  <BriefcaseBusiness
                    size={16}
                    className="h-4 w-4 text-yellow-500"
                  />
                </span>

                <div>
                  <p className="text-xs text-gray-400">Experience</p>

                  <p className="text-sm font-medium text-gray-600">
                    {doctor.experience_years} years
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-purple-500">
                  <DollarSign size={16} className="h-4 w-4 text-purple-500" />
                </span>

                <div>
                  <p className="text-xs text-gray-400">Salary</p>

                  <p className="text-sm font-medium text-gray-600">
                    ${doctor.salary}
                  </p>
                </div>
              </div>
            </div>

            {/* Doctor ID */}
            <div className="mt-5 border-t border-gray-100 pt-4">
              <p className="text-xs text-gray-400">Doctor ID</p>

              <p className="text-sm text-gray-600">#{doctor.doctor_id}</p>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-100 bg-gray-50 px-6 py-3">
            <p className="text-xs text-gray-400">
              Doctor Profile • {doctor.name}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FetchDoctors;
