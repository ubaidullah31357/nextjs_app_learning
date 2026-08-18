"use server";

import { db } from "@/config/db";
import { revalidatePath } from "next/cache";

export const messageAction = async (formData: any) => {
  const data = Object.fromEntries(formData);
  const { name, email, message } = data;

  revalidatePath("/message");

  await db.execute(
    `insert into contact_form (name, email, message) values (?, ?, ?)`,
    [name, email, message],
  );
};
