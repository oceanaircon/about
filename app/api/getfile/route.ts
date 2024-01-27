import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
  const buffer = await readFile(
    path.join(process.cwd(), "/public", "ot_resume2024.pdf")
  );

  const headers = new Headers();
  headers.append(
    "Content-Disposition",
    'attachment; filename="ot_resume2024.pdf"'
  );
  headers.append("Content-Type", "application/pdf");

  return new Response(buffer, {
    headers,
  });
}