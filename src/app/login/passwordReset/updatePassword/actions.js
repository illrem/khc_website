"use server";

//import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function reset(formData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const new_Password = formData.get("password");

  const { error, data } = await supabase.auth.updateUser({
    password: new_Password,
  });

  if (error) {
    console.log(email);
    redirect(`/login/success?message=${error}`); //here return message
  }

  //revalidatePath("/", "layout");
  console.log(data);
  let msg = "Password reset successful";
  redirect(`/login/success?message=${msg}`);
}
