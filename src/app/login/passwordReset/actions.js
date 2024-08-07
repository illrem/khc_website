"use server";

//import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function reset(formData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const email = formData.get("email");

  
  const { error, data } = await supabase.auth.resetPasswordForEmail(email,{
    redirectTo: "/login/passwordReset/updatePassword",
  });

  if (error) {
    console.log(email);
    redirect(`/login/success?message=${error}`);//here return message
  }

  //revalidatePath("/", "layout");
  console.log(data);
  let msg = "Password reset request successful please check your email, the email will come from noreply@mail.app.supabase.io";
  redirect(`/login/success?message=${msg}`);
}
