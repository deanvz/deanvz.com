import BlogTitle from "@/components/BlogTitle";
import BlogFooter from "@/components/BlogFooter";

export default function ObservabilityPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 p-8">
        <div className="max-w-4xl mx-auto">
          <BlogTitle
            title="Observability | My opinion at least"
            date="September 6, 2025"
            author={{
              name: "Dean van Zyl",
              url: "https://www.linkedin.com/in/deanvz"
            }}
          />

          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 my-8 border border-white/10">
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-gray-200 mb-8">
                Coming soon...
              </p>
            </div>
          </div>

          <BlogFooter 
            author="Dean van Zyl"
            about="Cloud Native Director of Platform building robust scalable platforms that empower innovation."
            imageUrl="/images/pfp.jpg"
            coffeeSlug="deanvz"
            githubUrl="https://github.com/deanvz"
            linkedinUrl="https://www.linkedin.com/in/deanvz"
          />
        </div>
      </div>
    </div>
  );
}