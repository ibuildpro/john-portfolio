import aiAutomationImage from "@/assets/blogs/ai-automation.jpg?url";
import architecturalThinkingImage from "@/assets/blogs/architectural-thinking.jpg?url";
import businessArchitectureImage from "@/assets/blogs/business-architecture.jpg?url";
import dataModelingImage from "@/assets/blogs/data-modeling.jpg?url";
import futureBusinessImage from "@/assets/blogs/future-business.jpg?url";
import hardSeasonsImage from "@/assets/blogs/hard-seasons.jpg?url";
import problemSolvingImage from "@/assets/blogs/problem-solving.jpg?url";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
  coverImage: string;
  imageAlt: string;
  imagePrompt: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "from-architectural-thinking-to-digital-products",
    title: "Blueprints, Bugs, and the Quiet Weight of a Product",
    excerpt:
      "I keep coming back to the same idea: good software is not decoration. It has weight, load, rooms, exits, and consequences.",
    category: "Career",
    date: "2026-06-10",
    readTime: "2 min read",
    tags: ["Career", "Product Design", "Architecture"],
    coverImage: architecturalThinkingImage,
    imageAlt:
      "Premium architectural studio with blueprint lines becoming a digital product system map",
    imagePrompt:
      "Premium editorial image of an architectural blueprint dissolving into a modern digital product interface, cinematic dark graphite studio, ivory linework, antique brass accents, no people, no readable text.",
    body: [
      "I did not begin my career thinking software and architecture had much to do with each other. That connection came later, after enough projects had gone from clean idea to real business pressure. Somewhere in that process I started seeing screens less like pages and more like rooms. People enter them, make decisions, leave traces, and trust that the structure will hold.",
      "That may sound a little dramatic, but it is true. A product carries weight. A workflow carries responsibility from one person to another. A number on a dashboard becomes the reason someone approves a claim, delays a shipment, questions a customer record, or changes a plan. When the system is careless, the business feels it. Not always loudly. Sometimes just through friction.",
      "So now, when I look at a product, I ask boring questions first. Where does responsibility move? What should be remembered? What should never cross a tenant boundary? What will someone need to prove later when the conversation is not friendly anymore? These are not glamorous questions. Honestly, they are the kind of questions that keep a platform from becoming a beautiful mess.",
      "Architectural thinking helps because it respects structure before decoration. Boundaries matter. Circulation matters. Load matters. Future expansion matters. A building can look impressive and still be hard to live in. A SaaS product can look modern and still punish the team every time the business changes.",
      "The tricky part is that users do not always see the architecture. They feel it. They feel it when onboarding is smooth, when permissions make sense, when reports match reality, when a workflow does not collapse because a new role was added. That feeling is not magic. Someone paid attention before the pressure arrived.",
      "This is the kind of product work I trust now. Less noise. More consequence. Less decoration pretending to be strategy. More structure that lets people do serious work without thinking about the scaffolding underneath. Maybe that is why I still like the word architecture. It reminds me that good software should give people a place to stand.",
    ],
  },
  {
    slug: "what-hard-seasons-changed-about-my-work",
    title: "The Season That Taught Me to Stop Performing Calm",
    excerpt:
      "Pressure strips the polish off engineering. After that, you learn what kind of systems, habits, and people actually hold.",
    category: "Leadership",
    date: "2026-05-22",
    readTime: "2 min read",
    tags: ["Leadership", "Reliability", "Delivery"],
    coverImage: hardSeasonsImage,
    imageAlt: "Dark late-night engineering workspace with operational diagrams and warm desk light",
    imagePrompt:
      "Premium editorial image of a quiet late-night engineering war room, operational diagrams on glass, warm brass light, dark navy graphite palette, no people, no readable text.",
    body: [
      "There is a kind of project pressure that changes you. Not in a movie-scene way. More like a slow tightening. A requirement moves. An integration behaves differently in production than it did in the demo. A report is suddenly important to someone very senior. A small shortcut, the one everyone agreed was temporary, starts collecting interest.",
      "I used to think senior calm meant looking unbothered. I do not think that anymore. Calm is not a face you put on. Calm is preparation. Clear logs. Small releases. Honest data. A rollback path. A team that knows who owns what. The outside may look quiet, but underneath it there is structure doing its job.",
      "The hardest seasons made me less impressed by cleverness. Clever code is fun for about fifteen minutes. Then someone has to maintain it at 10:47 p.m. with a customer waiting and incomplete context. In that moment, readable beats clever. Observable beats elegant. A boring fix that everyone understands is often the most senior move in the room.",
      "I also learned that ambiguity is expensive. If ownership is vague, every issue gets slower. If the workflow is invisible, diagnosis becomes a meeting calendar. If permissions do not match the organization, trust begins to leak out quietly. Nobody calls it architecture at first. They call it delays, confusion, manual work, or just 'the system being weird.'",
      "There were times, I will be honest, when I wanted the work to be easier than it was. I wanted the messy part to be somebody else's problem. But that is not how good systems get built. At some point you accept that the uncomfortable questions are part of the job, not an interruption from the job.",
      "That season changed my taste. I like calm systems now. I like decisions that can be explained without theater. I like architecture that still makes sense after the original builder has moved on. The point is not to be heroic. The point is to build in a way that makes heroics less necessary.",
    ],
  },
  {
    slug: "good-architecture-from-a-business-point-of-view",
    title: "Architecture Is Where the Business Either Breathes or Chokes",
    excerpt:
      "The business may not care about the diagram. It absolutely cares whether the structure lets it grow without panic.",
    category: "Architecture",
    date: "2026-04-18",
    readTime: "2 min read",
    tags: ["Architecture", "Business", "ERP"],
    coverImage: businessArchitectureImage,
    imageAlt: "Executive table with layered glass model of business platform architecture",
    imagePrompt:
      "Premium editorial image of a refined boardroom table with stacked translucent business system layers, tenant compartments, workflow paths, dark graphite navy palette, brass accents, no people, no readable text.",
    body: [
      "Most business leaders do not wake up excited about architecture. Fair enough. They have customers, margins, contracts, staff, risk, deadlines, and a hundred other concerns that are more visible. But the funny thing is this: architecture is often the hidden reason those visible things either move smoothly or become painfully expensive.",
      "A business does not buy a domain model. It buys the ability to add a customer without breaking another customer. It buys pricing changes that do not require a week of nervous testing. It buys reports people believe. It buys workflows that survive a new department, a new product line, or a new compliance requirement.",
      "That is why I do not see architecture as separate from business value. In ERP and SaaS systems, architecture is where value is protected. Tenant isolation protects trust. Permission boundaries protect accountability. Event history protects memory. A clear model protects the future from the shortcuts of the present.",
      "You can feel bad architecture even if you cannot name it. A simple request becomes risky. A customer exception becomes permanent. The data model cannot explain what the business actually does. Everybody starts keeping private spreadsheets because the system is not quite trusted. I have seen that pattern, and once it starts, it takes real discipline to unwind.",
      "Good architecture, on the other hand, gives the business oxygen. It does not make every change easy, but it makes change understandable. It gives teams a way to reason, estimate, test, and recover. It lowers the emotional temperature because the system is not fighting every new idea.",
      "So when I talk about architecture with business people, I try not to worship the diagram. The diagram is only useful if it helps the company move with more confidence. The real test is simple: can the business grow into this structure, or will it start choking on its own success?",
    ],
  },
  {
    slug: "ai-automation-and-scalable-systems",
    title: "AI Is Boring Until It Becomes Accountable",
    excerpt:
      "The impressive demo is not the point. The real question is who reviews it, who owns it, and what happens when it is wrong.",
    category: "Technology",
    date: "2026-03-12",
    readTime: "2 min read",
    tags: ["AI", "Automation", "Scalable Systems"],
    coverImage: aiAutomationImage,
    imageAlt: "Modern automation control room with structured AI workflow paths",
    imagePrompt:
      "Premium editorial image of a modern automation operations room with AI workflow paths, audit checkpoints and permission gates, cinematic lighting, dark navy and graphite palette, no people, no readable text.",
    body: [
      "I am interested in AI, but not in the fireworks version of it. The demo version is easy to like. A prompt goes in, something polished comes out, everyone nods. Nice. But in a real business system, the interesting part starts after the demo. Who is allowed to use it? What data did it see? Who checks the result? What happens when it is wrong?",
      "That is where AI gets serious. Not less powerful, just less magical. It becomes a layer inside work: summarize this intake, route this exception, draft this response, classify this document, reconcile this mismatch. Useful, practical, sometimes quietly excellent. But only if the system around it has a spine.",
      "The architecture matters because AI should not float above the rules of the business. A model should not cross tenant boundaries because somebody wanted a faster implementation. It should not create a decision nobody can audit. It should not turn a human approval process into a mystery box with nice wording.",
      "I think the best AI products will feel almost boring in the right way. There will be queues, roles, review states, evidence, permissions, prompts, policies, and logs. The user may see a simple assistant or a clean suggestion, but underneath it the system will know how to explain itself.",
      "This is also why automation should not be confused with abdication. Let the machine reduce the repetitive work. Yes. Let it find patterns, draft, classify, and accelerate. But the business still needs accountability. Somebody owns the outcome. Somebody understands the risk. Somebody can say, 'No, not this time.'",
      "That is the version of AI I trust: less spectacle, more operational discipline. Faster work, but not reckless work. Helpful intelligence inside a system that still respects people, tenants, evidence, and consequence. Anything else feels impressive for a week and dangerous after that.",
    ],
  },
  {
    slug: "the-core-technology-i-keep-coming-back-to",
    title: "The Unfashionable Skill I Still Trust: Modeling the Truth",
    excerpt:
      "Frameworks come and go. The data model stays close to the business, which is exactly why it deserves more respect.",
    category: "Engineering",
    date: "2026-02-21",
    readTime: "2 min read",
    tags: ["Data Modeling", "Backend", "Maintainability"],
    coverImage: dataModelingImage,
    imageAlt: "Dark engineering workspace with glass data model blocks and relationship lines",
    imagePrompt:
      "Premium editorial image of database schema blocks as architectural objects on a dark engineering desk, frosted glass, etched metal, ivory relationship lines, brass accents, no people, no readable text.",
    body: [
      "If I had to pick one technical skill that keeps paying rent, I would pick data modeling. Not the flashiest answer. I know. It does not get the same applause as a new framework, a slick animation, or a clever AI feature. But it sits closer to the truth of the business than almost anything else we build.",
      "A good model is not just tables and fields. It is a set of decisions about reality. What is a customer? What is a tenant? When does a workflow become complete? Who owns this action? Is this value a current state, a historical event, or somebody's temporary opinion? These questions sound small until the system grows around the wrong answer.",
      "I have learned to be careful with names. Names become habits. Habits become code. Code becomes operations. A bad name can survive for years, quietly confusing every developer and every report that touches it. Sometimes I look at a messy model and think, 'There it is. The business changed, but the vocabulary did not.'",
      "Multi-tenant systems make this even more serious. Tenant boundaries cannot be casual. Roles cannot be casual. Audit history cannot be casual. Reporting definitions cannot be something everyone sort of understands differently. If the model is vague, the product may still run, but trust starts to wobble.",
      "I have seen polished interfaces struggle because the model underneath could not express the business. I have also seen simple interfaces work beautifully because the data was honest, stable, and easy to reason about. That contrast sticks with you. It changes what you respect.",
      "So yes, I still care about data modeling. A lot. It is not glamorous, but it is one of the places where engineering becomes business architecture. When the model tells the truth, the rest of the system gets a fighting chance.",
    ],
  },
  {
    slug: "when-problem-solving-becomes-a-real-advantage",
    title: "The Bug Is Usually Not the Bug",
    excerpt:
      "The visible issue is often just the smoke. The real work is finding the pressure underneath it.",
    category: "Practice",
    date: "2026-01-26",
    readTime: "2 min read",
    tags: ["Problem Solving", "Operations", "Systems Thinking"],
    coverImage: problemSolvingImage,
    imageAlt: "Diagnostic business process map with highlighted constraint path",
    imagePrompt:
      "Premium editorial image of a diagnostic system map on a dark command table, highlighted constraint points, business workflow topology, cinematic side lighting, brass highlights, no people, no readable text.",
    body: [
      "When someone says there is a bug, I try to listen carefully. Of course the code might be wrong. It often is. But in business software, the visible bug is sometimes just smoke coming from a deeper pressure point. The system is telling you something, if you slow down enough to hear it.",
      "Maybe the workflow changed and nobody updated the model. Maybe a manual handoff became invisible. Maybe a permission rule made sense two years ago but no longer matches the organization. Maybe the report is technically correct and operationally useless. That last one hurts, by the way, because everyone can be right and the system can still fail the room.",
      "Good problem solving moves between layers. Look at the code. Then look at the data. Then look at the process. Then ask what the business is trying to protect. Speed? Accuracy? Compliance? Margin? Customer trust? The answer changes the fix.",
      "I have made the mistake of solving too low in the stack. Patch the symptom, ship the fix, move on. It feels productive. Sometimes it is. But if the same shape of problem comes back with a different name, that is a sign. The system is asking for a better question.",
      "The best engineers I know are not just fast. They are patient in a useful way. They can hold the technical detail and the business pressure in the same frame. They do not make every issue philosophical, but they know when a bug is pointing to a design problem.",
      "A good fix should leave less fog behind it. The next incident should be easier to understand. The next feature should be easier to add. The next decision should be easier to defend. That is when problem solving becomes more than repair. It becomes leverage.",
    ],
  },
  {
    slug: "the-future-business-needs-design-technology-structure",
    title: "The Next Serious Company Will Feel Designed Before It Feels Technical",
    excerpt:
      "The best systems ahead will not separate taste, engineering, and operating discipline. They will need all three in the same room.",
    category: "Future",
    date: "2025-12-09",
    readTime: "2 min read",
    tags: ["Future", "Design", "Strategy"],
    coverImage: futureBusinessImage,
    imageAlt: "Future business platform model combining design grids and system architecture",
    imagePrompt:
      "Premium editorial image of a future business strategy studio where design grids, software architecture layers and product strategy converge into one platform model, dark navy graphite palette, brass accents, no people, no readable text.",
    body: [
      "I do not think the future of business software will be won by technology alone. That sounds strange coming from an engineer, maybe, but the longer I do this work the more obvious it becomes. Technology is necessary. It is not sufficient.",
      "The next serious companies will need systems that feel designed before they feel technical. By designed, I do not mean decorated. I mean shaped with intention. The workflow makes sense. The language is clear. The permissions match the organization. The system respects how people actually work when the day gets busy and imperfect.",
      "Technology still matters, deeply. The platform has to scale. It has to integrate. It has to automate without losing control. It has to keep tenant data separate, preserve audit history, and survive the kind of change that does not politely wait for a rewrite. That is engineering discipline, and there is no shortcut around it.",
      "But product taste matters too. People do not trust a system simply because the backend is elegant. They trust it because the product behaves with clarity. It gives the right amount of information at the right time. It does not make every edge case feel like a personal insult. Small things, yes. Small things become culture.",
      "The mistake is putting design, technology, and structure in separate rooms. A beautiful product without architecture becomes fragile. A powerful architecture without product judgment becomes hard to adopt. A clever automation without business structure becomes risky. I have seen pieces of that story more than once.",
      "The future I want to build toward is quieter and stronger than the hype cycle. Better-shaped systems. Products that help people think. Platforms that let a business grow without losing itself. That sounds simple. It is not. But it is the work that still feels worth doing.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
