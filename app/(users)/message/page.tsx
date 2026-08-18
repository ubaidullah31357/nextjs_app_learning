import { db } from "@/config/db";
import { messageAction } from "./message.action";
import { RowDataPacket } from "mysql2";

type MessageData = {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: Date;
  updated_at: Date;
};

const MessagePage = async () => {
  const [messagesData] = await db.execute<(MessageData & RowDataPacket)[]>("SELECT * FROM contact_form");
  console.log(messagesData);

  return (
    <>
      <h1>Add New Message:</h1>
      <form
        action={messageAction}
        className="bg-gray-800 rounded p-5 pl-36 flex flex-col items-start justify-start gap-5 text-white text-sm font-bold"
      >
        <label htmlFor="name" className="flex flex-col gap-1">
          Full Name
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your full name"
            className="bg-gray-500 text-white rounded-sm p-3 h-9 w-130"
          />
        </label>
        <label htmlFor="email" className="flex flex-col gap-1">
          Email Address
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
            className="bg-gray-500 text-white rounded-sm p-3 h-9 w-130"
          />
        </label>
        <label htmlFor="message" className="flex flex-col gap-1">
          Message
          <textarea
            name="message"
            id="message"
            cols={60}
            rows={8}
            placeholder="Enter your message"
            className="bg-gray-500 text-white rounded-sm p-3"
          ></textarea>
        </label>

        <button
          type="submit"
          className="bg-pink-500 w-130 p-2 rounded cursor-pointer hover:bg-pink-600"
        >
          Send Message
        </button>
      </form>

      <h1 className="pl-40 mt-10">Message Records:</h1>
      <table className="flex flex-col gap-2 pl-40">
        <thead className="bg-blue-300 text-left">
          <tr>
            <th className="w-8">ID</th>
            <th className="w-40">Name</th>
            <th className="w-40">Email</th>
            <th className="w-80">Message</th>
            <th className="w-40">Created At</th>
            <th className="w-40">Updated At</th>
          </tr>
        </thead>
        <tbody>
          {messagesData.map((message: MessageData) => {
            return (
              <tr key={message.id}>
                <td className="w-8">{message.id}</td>
                <td className="w-40">{message.name}</td>
                <td className="w-40">{message.email}</td>
                <td className="w-80">{message.message}</td>
                <td className="w-40">{message.created_at.toLocaleString()}</td>
                <td className="w-40">{message.updated_at.toLocaleString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default MessagePage;
