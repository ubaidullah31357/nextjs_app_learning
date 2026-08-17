"use server";

import { db } from "@/config/db";

export const contactAction = async (previousState: any, formData: any) => {
  //   const name = formData.get("name");
  //   const email = formData.get("email");
  //   const message = formData.get("message");

  try {
    const { name, email, message } = Object.fromEntries(formData.entries());
    console.log(name, email, message);

    // await db.execute(
    //   `insert into contact_form (name, email, message) values (?, ?, ?)`,
    //   [name, email, message],
    // );

    
    return {
      success: true,
      message: "Form has been submitted Successfully.",
    };
  } catch (error: any) {
    console.log("Some Error has occured ⚠");
    return {
      success: false,
      message: "Some Error has occured while submitting the Form.",
    };
  }
};
