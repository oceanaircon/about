"use server";

import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const url = process.env.URL;

const createMessengerSchema = z.object({
  name: z.string().min(2, { message: "Must be 2 or more characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(12, { message: "Must be 2 or more characters long" }),
});

export async function createMessenger(formData: FormData) {
  try {
    const { name, email, message } = createMessengerSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    await prisma.messenger.create({
      data: {
        name: name,
        email: email,
        message: message,
      },
    });

    await fetch(url + "api/send", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
      headers: new Headers({
        "Content-type": "application/json",
        Accept: "application/json",
      }),
    });
  } catch (error) {
    redirect("/error");
  }

  revalidatePath("/");
  redirect("/success");
}

export async function redirectBack() {
  revalidatePath("/");
  redirect("/");
}
