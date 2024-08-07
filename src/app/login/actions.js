"use server";

//import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function login(formData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const email = formData.get("email");
  const password = formData.get("password");

  
  const { error, data } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.log(email, password);
    redirect(`/login?message=${error}`);//here return message
  }

  //revalidatePath("/", "layout");
  console.log(data);
  redirect("/");
}

export async function signup(formData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { error, returnedData } = await supabase.auth.signUp(data);

  if (error) {
    // redirect("/error");
    redirect(`/login?message=${error}`);//throw error onto page
  }

  console.log(returnedData);
  //revalidatePath("/", "layout");
  let msg = "Signup successful please check your email, the email will come from noreply@mail.app.supabase.io";
  redirect(`/login/success?message=${msg}`);
}
