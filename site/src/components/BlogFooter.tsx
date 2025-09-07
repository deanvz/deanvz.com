import BuyMeACoffee from "./BuyMeACoffee";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function BlogFooter({
  author,
  about,
  imageUrl,
  className,
  githubUrl,
  linkedinUrl,
  xUrl,
}: {
  author: string;
  about: string;
  imageUrl: string;
  className?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  xUrl?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-between w-full gap-4 py-4",
        className,
      )}
    >
      <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 w-full border border-white/10">
        <div className="flex flex-row items-center justify-start gap-4">
          <Image
            src={imageUrl}
            alt={author}
            width={100}
            height={100}
            className="rounded-full border-2 border-amber-400/50"
            priority
          />
          <div className="flex flex-col items-start justify-between w-full">
            <span className="text-lg font-bold text-white">{author}</span>
            <span className="text-sm text-gray-200">{about}</span>
          </div>
          <div className="flex flex-col items-end justify-start gap-2">
            {githubUrl && (
              <Link
                href={githubUrl}
                className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
              >
                <FaGithub className="w-6 h-6" />
              </Link>
            )}
            {linkedinUrl && (
              <Link
                href={linkedinUrl}
                className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>
            )}
            {xUrl && (
              <Link
                href={xUrl}
                className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
              >
                <FaXTwitter className="w-6 h-6" />
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between w-full">
        <Link
          href="/blog"
          className="text-sm flex flex-row items-center justify-center gap-2 text-amber-400 hover:text-amber-300 transition-colors duration-200"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to blogs
        </Link>
        <BuyMeACoffee />
      </div>
    </div>
  );
}
