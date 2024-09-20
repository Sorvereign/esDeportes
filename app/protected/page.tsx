'use client'

import { signOut } from "next-auth/react";

export default function Protected() {

  return (
    <main className="max-w-2xl min-h-screen flex flex-col items-center mx-auto">
      <div className="w-full flex justify-between my-10">
        <h1 className="text-2xl font-bold">Protected Page</h1>
        <button
          type="button"
          className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => signOut({
            callbackUrl: "/",
          })}
        >
          Logout
        </button>
      </div>
    </main>
  );
}