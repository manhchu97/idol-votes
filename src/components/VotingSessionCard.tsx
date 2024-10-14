import Link from "next/link";
import { IoTicket } from "react-icons/io5";

interface VotingSessionCardProps {
  title: string;
  subtitle: string;
  date: string;
  rank: number;
  href: string;
  imageUrl: string;
}

export default function VotingSessionCard({
  title,
  subtitle,
  date,
  rank,
  href,
  imageUrl,
}: VotingSessionCardProps) {
  return (
    <Link href={href} className="block">
      <div className="relative rounded-2xl overflow-hidden bg-indigo-900">
        {/* Badge for Vote */}
        <div className="absolute top-3 left-3 bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold z-10">
          Vote
        </div>
        {/* Background Image */}
        <div
          className="bg-cover bg-center h-64 rounded-lg"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover", // Đảm bảo hình ảnh được bao phủ toàn bộ
            backgroundPosition: "center", // Đặt hình ảnh vào giữa
          }}
        />
      </div>
      <div className="mt-2">
        <h4>{title}</h4>
        <div className="bg-blue-100 inline-block px-3 py-1 rounded-full mt-1">
          <div
            style={{
              display: "flex",
              justifyContent: "center", // Căn giữa theo chiều ngang
              alignItems: "center", // Căn giữa theo chiều dọc
            }}
          >
            <IoTicket
              style={{ color: "rgb(145, 158, 181)", marginRight: "4px" }}
            />
            Ranked No.{rank}
          </div>
        </div>
      </div>
    </Link>
  );
}
