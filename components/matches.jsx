/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/Dk7bO3qKmNt
 */
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function Matches() {
  return (
    <div className="bg-[#0d0d0d] text-white p-4 rounded-lg w-[400px]">
      <div className="text-xs font-bold uppercase text-[#ff3f3f] mb-2">
        Trendyol Süper Lig Sofascore Reytingi
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-[#8a8a8a] text-xs">21.01.21</div>
            <FlagIcon className="h-4 w-4" />
            <div className="text-xs">Trabzonspor</div>
            <XIcon className="h-4 w-4" />
            <div className="text-xs font-bold">Galatasaray</div>
          </div>
          <div className="flex items-center space-x-1">
            <div className="text-xs">1</div>
            <div className="text-xs font-bold">5</div>
            <Badge variant="secondary">W</Badge>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-[#8a8a8a] text-xs">25.01.21</div>
            <FlagIcon className="h-4 w-4" />
            <div className="text-xs font-bold">Galatasaray</div>
            <XIcon className="h-4 w-4" />
            <div className="text-xs">İstanbulspor</div>
          </div>
          <div className="flex items-center space-x-1">
            <div className="text-xs">3</div>
            <div className="text-xs font-bold">1</div>
            <Badge variant="secondary">W</Badge>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-[#8a8a8a] text-xs">29.01.21</div>
            <FlagIcon className="h-4 w-4" />
            <div className="text-xs font-bold">Galatasaray</div>
            <XIcon className="h-4 w-4" />
            <div className="text-xs">Gaziantep</div>
          </div>
          <div className="flex items-center space-x-1">
            <div className="text-xs">2</div>
            <div className="text-xs font-bold">1</div>
            <Badge variant="secondary">W</Badge>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-[#8a8a8a] text-xs">02.02.21</div>
            <FlagIcon className="h-4 w-4" />
            <div className="text-xs">Samsunspor</div>
            <XIcon className="h-4 w-4" />
            <div className="text-xs font-bold">Galatasaray</div>
          </div>
          <div className="flex items-center space-x-1">
            <div className="text-xs">0</div>
            <div className="text-xs font-bold">2</div>
            <Badge variant="secondary">W</Badge>
          </div>
        </div>
        <div className="text-xs font-bold uppercase text-[#ff3f3f] mb-2">
          Türkiye Kupası
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-[#8a8a8a] text-xs">06.02.21</div>
            <FlagIcon className="h-4 w-4" />
            <div className="text-xs font-bold">Galatasaray</div>
            <XIcon className="h-4 w-4" />
            <div className="text-xs">Bandırmaspor</div>
          </div>
          <div className="flex items-center space-x-1">
            <div className="text-xs">4</div>
            <div className="text-xs font-bold">2</div>
            <Badge variant="secondary">W</Badge>
          </div>
        </div>
        <div className="text-xs font-bold uppercase text-[#ff3f3f] mb-2">
          Trendyol Süper Lig Sofascore Reytingi
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-[#8a8a8a] text-xs">10.02.21</div>
            <FlagIcon className="h-4 w-4" />
            <div className="text-xs font-bold">Galatasaray</div>
            <XIcon className="h-4 w-4" />
            <div className="text-xs">Başakşehir</div>
          </div>
          <div className="flex items-center space-x-1">
            <div className="text-xs">2</div>
            <div className="text-xs font-bold">0</div>
            <Badge variant="destructive">W</Badge>
          </div>
        </div>
        <div className="text-xs font-bold uppercase text-[#ff3f3f] mb-2">
          UEFA Europa League Sofascore Reytingi
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-[#8a8a8a] text-xs">15.02.21</div>
            <FlagIcon className="h-4 w-4" />
            <div className="text-xs font-bold">Galatasaray</div>
            <XIcon className="h-4 w-4" />
            <div className="text-xs">Sparta Praha</div>
          </div>
          <div className="flex items-center space-x-1">
            <div className="text-xs">3</div>
            <div className="text-xs font-bold">2</div>
            <Badge variant="secondary">W</Badge>
          </div>
        </div>
        <div className="text-xs font-bold uppercase text-[#ff3f3f] mb-2">
          Trendyol Süper Lig Sofascore Reytingi
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-[#8a8a8a] text-xs">18.02.21</div>
            <ClockIcon className="h-4 w-4" />
            <div className="text-xs">19:00</div>
            <FlagIcon className="h-4 w-4" />
            <div className="text-xs">Ankaragücü</div>
            <XIcon className="h-4 w-4" />
            <div className="text-xs font-bold">Galatasaray</div>
          </div>
          <MoreHorizontalIcon className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}

function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MoreHorizontalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  );
}
