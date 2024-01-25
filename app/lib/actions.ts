"use server";

import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const url = process.env.URL;

const createMessengerSchema = z.object({
  id: z.coerce.number(),
  name: z.string().min(1),
  email: z.string().min(1),
  message: z.string().min(12),
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
    return {
      message: "Couldn't create the message.",
    };
  }

  revalidatePath(url + "/");
  redirect(url + "/success");
}

export async function redirectBack() {
  redirect(url + "/");
}
