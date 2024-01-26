"use server";

import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const url = process.env.URL;

const createMessengerSchema = z.object({
  id: z.coerce.number(),
  name: z.string().min(5, { message: "Must be 5 or more characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(12, { message: "Must be 12 or more characters long" }),
  createdAt: z.string(),
});

const CreateMessenger = createMessengerSchema.omit({
  id: true,
  createdAt: true,
});

export async function createMessenger(formData: FormData) {
  const { name, email, message } = CreateMessenger.parse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  try {
    await prisma.messenger.create({
      data: {
        name: name,
        email: email,
        message: message,
      },
    });
  } catch (error) {
    throw error;
  }

  try {
    await fetch(url + "api/send", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
      headers: new Headers({
        "Content-type": "application/json",
        Accept: "application/json",
      }),
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/");
  redirect("/success");
}

export async function redirectBack() {
  revalidatePath("/");
  redirect("/");
}
