"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function GoBackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 rounded-md border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-white hover:bg-slate-700"
    >
      <ArrowLeft className="h-4 w-4" />
      Go Back
    </button>
  );
}
