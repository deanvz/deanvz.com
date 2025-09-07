import Link from "next/link";

export default function BlogTitle({
  title,
  date,
  author,
}: {
  title: string;
  date: string;
  author: { name: string; url: string };
}) {
  return (
    <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
        {title}
      </h1>
      <div className="flex flex-col gap-2">
        <Link href={author.url} className="text-lg text-gray-200">
          by{" "}
          <span className="font-bold text-xl text-amber-400 hover:text-amber-300 hover:underline transition-colors duration-200">
            {author.name}
          </span>
        </Link>
        <span className="text-lg text-gray-300">{date}</span>
      </div>
    </div>
  );
}
