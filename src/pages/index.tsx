import Link from "next/link";
import { Calendar, CircleDot, HelpCircle } from "lucide-react";
import VotingSessionCard from "@/components/VotingSessionCard";

export default function Home() {
  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">24K+</h2>
        <p className="text-gray-500">Refresh My idol feed</p>
      </div>

      <input
        type="text"
        placeholder="Search for idol or session"
        className="mb-4"
      />

      <div className="space-y-6">
        <VotingSessionCard
          title="K-STAR CHART"
          subtitle="3rd week of Oct."
          date="~10/14(Mon)"
          rank={30}
          href="/vote/1"
          imageUrl="https://kpopvotes.com/vote/1718588192bj4sV5mHjX.png?w=750&t=webp"
        />
      </div>
    </div>
  );
}
