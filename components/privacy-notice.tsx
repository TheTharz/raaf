import { Info } from "lucide-react";
export function PrivacyNotice(){
  return (
    <div className="mx-auto max-w-2xl rounded-lg border border-pink-200 bg-pink-50 p-4 text-sm dark:border-pink-900 dark:bg-pink-950/20">
      <div className="flex gap-3">
        <Info className="h-5 w-5 shrink-0 text-pink-600 dark:text-pink-400" />
        <div className="space-y-2">
          <h3 className="font-semibold text-pink-900 dark:text-pink-100">
            Privacy & Security Notice
          </h3>
          <ul className="space-y-1 text-pink-800 dark:text-pink-200">
            <li>• Your card data is stored in the URL (no database)</li>
            <li>• Messages are visible in plain text to anyone with the link</li>
            <li>• Links may appear in browser history and analytics</li>
            <li>• We recommend not sharing sensitive personal information</li>
            <li>• No cookies or tracking - completely client-side</li>
          </ul>
        </div>
      </div>
    </div>
  )
}