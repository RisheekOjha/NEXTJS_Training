"use server";

export async function handleSubmit(formData: FormData) {
  const name = formData.get("name") as string;
  console.log("✅ Server received name:", name);

}
