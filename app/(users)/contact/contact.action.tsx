"use server";

import { db } from "@/config/db";
import { redirect } from "next/navigation";

export const contactAction = async (name: any, email: any, message: any) => {
  //   const name = formData.get("name");
  //   const email = formData.get("email");
  //   const message = formData.get("message");

  try {
    // const { name, email, message } = Object.fromEntries(formData.entries());
    console.log(name, email, message);

    // await db.execute(
    //   `insert into contact_form (name, email, message) values (?, ?, ?)`,
    //   [name, email, message],
    // );

    // for user's redirection
    // redirect("/");
    return {
      success: true,
      message: "Form has been submitted Successfully.",
    };
  } catch (error: any) {
    if (error.message === "NEXT_REDIRECT") throw error;
    console.log("Some Error has occured ⚠");
    return {
      success: false,
      message: "Some Error has occured while submitting the Form.",
    };
  }
};
