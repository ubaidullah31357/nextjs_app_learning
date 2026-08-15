import Link from "next/link";
import { Home } from "lucide-react";
import "./globals.css";
import GoBackButton from "./(users)/_components/GoBackButton";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0f172a] px-6 text-white">
      {/* Decorative dots */}
      <div className="absolute left-[33%] top-[25%] h-2.5 w-2.5 rounded-full bg-blue-500/40 blur-[1px]" />

      <div className="absolute right-[10%] top-[34%] h-1 w-1 rounded-full bg-purple-500/70" />

      <div className="absolute left-[44%] bottom-[24%] h-1.5 w-1.5 rounded-full bg-blue-500/40" />

      {/* Main Content */}
      <div className="relative z-10 flex max-w-xl flex-col items-center text-center">
        {/* 404 */}
        <h1
          className="
            bg-linear-to-r
            from-blue-500
            via-indigo-500
            to-purple-500
            bg-clip-text
            text-[88px]
            font-bold
            leading-none
            tracking-tight
            text-transparent
            sm:text-[96px]
          "
        >
          404
        </h1>

        {/* Gradient Divider */}
        <div className="mt-5 h-0.5 w-16 bg-linear-to-r from-blue-500 to-purple-500" />

        {/* Title */}
        <h2 className="mt-6 text-xl font-semibold tracking-wide text-white sm:text-2xl">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-3 max-w-md text-sm leading-5 text-slate-400 sm:text-base">
          The page you're looking for doesn't exist or has been
          <br className="hidden sm:block" />
          moved to another location.
        </p>

        {/* Buttons */}
        <div className="mt-9 flex items-center gap-3">
          {/* Go Home */}
          <Link
            href="/"
            className="
              flex
              items-center
              gap-2
              rounded-md
              bg-linear-to-r
              from-blue-500
              to-purple-600
              px-4
              py-2.5
              text-sm
              font-medium
              text-white
              shadow-lg
              shadow-purple-500/20
              transition
              duration-200
              hover:scale-[1.02]
              hover:from-blue-600
              hover:to-purple-700
            "
          >
            <Home className="h-4 w-4" />
            Go Home
          </Link>

          {/* Go Back */}
          <GoBackButton />
        </div>
      </div>
    </div>
  );
}
