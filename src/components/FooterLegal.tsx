import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export function FooterLegalMenu() {
  return (
    <div className="w-full fixed bottom-0 z-20 py-4 border-t bg-slate-50 text-sm text-center text-slate-600">
      <nav className="flex justify-center flex-wrap items-center gap-2">
        <Link href="/legal/terms-and-conditions" className="hover:text-amber-600 transition-colors">Terms & Conditions</Link>
        <Separator orientation="vertical" className="h-4 bg-slate-300" />
        <Link href="/legal/privacy-policy " className="hover:text-amber-600 transition-colors">Privacy Policy</Link>
        <Separator orientation="vertical" className="h-4 bg-slate-300" />
        <Link href="/legal/about" className="hover:text-amber-600 transition-colors">About Us</Link>
      </nav>
    </div>
  )
}