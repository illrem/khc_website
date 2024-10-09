"use client";
import { Suspense } from 'react';
import SignupSuccessPageDisplay from "./display"
export default function SignupSuccessPage() {
  return (
    <Suspense>
      <SignupSuccessPageDisplay></SignupSuccessPageDisplay>
    </Suspense>     
  );
}