import BlogTitle from "@/components/BlogTitle";
import BlogFooter from "@/components/BlogFooter";

export default function ObservabilityPost() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <BlogTitle
          title="Observability | My opinion at least"
          date="September 6, 2025"
          author={{
            name: "Dean van Zyl",
            url: "https://www.linkedin.com/in/deanvz"
          }}
        />

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Coming soon...
          </p>
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
  );
}