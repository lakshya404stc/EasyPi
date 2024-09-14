"use client"

import { useRouter } from "next/navigation";

export const Logo = () => {
  const router = useRouter()
  return (
    <div role="button" onClick={()=>router.push("/")} className="text-2xl font-semibold">
      <img src="/assets/img/logo2.png" className="h-[50px]" />
    </div>
  );
};
