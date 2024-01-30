"use server";

import { redirect } from "next/navigation";

export const navigateHome = () => {
  redirect("/home");
};
