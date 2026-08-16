"use server";

import { db } from "@/config/db";

export const contactAction = async (formData: any) => {
  //   const name = formData.get("name");
  //   const email = formData.get("email");
  //   const message = formData.get("message");

  const { name, email, message } = Object.fromEntries(formData.entries());
  console.log(name, email, message);

  await db.execute(
    `insert into contact_form (name, email, message) values (?, ?, ?)`,
    [name, email, message],
  );
};
