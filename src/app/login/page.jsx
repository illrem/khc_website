"use client";
import React , { Suspense } from 'react';
import ChildLoginPage from "./display";

export default function LoginPage() {
  return (
    <Suspense>
        <ChildLoginPage></ChildLoginPage>
    </Suspense>
  )
}