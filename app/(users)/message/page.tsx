import { db } from "@/config/db";
import { messageAction } from "./message.action";
import { RowDataPacket } from "mysql2";
import MessagePageClient from "./client/page";

type MessageData = {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: Date;
  updated_at: Date;
};

const MessagePage = async () => {
  const [messagesData] = await db.execute<(MessageData & RowDataPacket)[]>(
    "SELECT * FROM contact_form",
  );
  console.log(messagesData);

  return (
    <>
      <MessagePageClient />

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
