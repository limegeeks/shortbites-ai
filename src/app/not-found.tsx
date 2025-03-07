import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen  dark:bg-gray-900 text-center px-6">
      <h1 className="text-7xl font-bold text-amber-500 dark:text-white mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-lg">
        The page you are looking for does not exist.
      </p>
      <div className="mt-6">
        <Link href="/">
          <Button className="px-6 py-3 bg-amber-500 text-lg">Go Home</Button>
        </Link>
      </div>
      <div className="absolute bottom-6 text-gray-400 text-sm">
        <p>📢 Stay updated with the latest news on <strong>ShortBites.ai</strong></p>
      </div>
    </div>
  );
}
