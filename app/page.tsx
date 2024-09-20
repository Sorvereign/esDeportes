'use client';

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
      <button 
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      
      onClick={() => router.push("auth/signin")}>Sign up</button>
    </div>
  );
}
