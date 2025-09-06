import BlogTitle from "@/components/BlogTitle";
import BlogH2 from "@/components/BlogH2";
import BlogH3 from "@/components/BlogH3";
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
            After years of building and scaling cloud-native platforms, I&apos;ve learned that observability isn&apos;t just about monitoring—it&apos;s about understanding. Here&apos;s my take on what actually matters when you&apos;re trying to make sense of complex distributed systems.
          </p>

          <BlogH2>The Three Pillars Are Just The Beginning</BlogH2>
          
          <p>
            Everyone talks about the &quot;three pillars&quot; of observability: metrics, logs, and traces. But if you stop there, you&apos;re missing the point. The real value comes from the connections between these pillars and how they help you ask better questions about your systems.
          </p>

          <p>
            Metrics tell you <em>what</em> is happening. Logs tell you <em>why</em> it&apos;s happening. Traces tell you <em>how</em> it&apos;s happening across your distributed architecture. But the magic happens when you can jump seamlessly between all three contexts while debugging an issue at 3 AM.
          </p>

          <BlogH2>Context Is Everything</BlogH2>

          <p>
            I&apos;ve seen teams spend months building beautiful dashboards that nobody uses. Why? Because they optimized for pretty charts instead of actionable insights. The best observability setups I&apos;ve worked with share one thing: they preserve context.
          </p>

          <BlogH3>What I Mean By Context</BlogH3>

          <ul>
            <li><strong>Business context</strong>: How does this metric relate to user experience or revenue?</li>
            <li><strong>System context</strong>: What other services or dependencies are involved?</li>
            <li><strong>Historical context</strong>: How does this compare to yesterday, last week, or the same time last month?</li>
            <li><strong>Operational context</strong>: What deployments, config changes, or incidents happened recently?</li>
          </ul>

          <BlogH2>The Platform Team Perspective</BlogH2>

          <p>
            As someone who&apos;s built platforms that other teams rely on, observability becomes even more critical. You&apos;re not just monitoring your own services—you&apos;re providing the foundation that enables other teams to understand <em>their</em> services.
          </p>

          <BlogH2>Tools Don&apos;t Matter (As Much As You Think)</BlogH2>

          <p>
            I&apos;ve worked with Datadog, New Relic, Prometheus + Grafana, ELK stack, Jaeger, and countless other tools. Here&apos;s what I&apos;ve learned: the tool is less important than the culture and practices around observability.
          </p>

          <BlogH2>Final Thoughts</BlogH2>

          <p>
            Observability isn&apos;t a destination—it&apos;s a journey. Start with the basics: instrument your applications, collect meaningful metrics, and build simple but effective alerts. Then iterate based on what you learn during actual incidents.
          </p>

          <p>
            Most importantly, remember that perfect observability is the enemy of good observability. Ship something that helps your team understand their systems better, then improve it over time.
          </p>

          <p>
            That&apos;s my opinion, at least.
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