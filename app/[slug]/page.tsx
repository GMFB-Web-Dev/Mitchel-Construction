import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { AboutTimeline } from "@/components/AboutTimeline";
import { ValueIcon } from "@/components/ValueIcon";
import { Reveal } from "@/components/Reveal";
import { ArrowIcon } from "@/components/InteractionIcons";
import { CertificationStrip, ContactBand, Hero, SiteShell } from "@/components/SiteShell";
import { contactItems, projects, services } from "@/lib/site-data";

type PageProps = { params: Promise<{ slug: string }> };

const serviceHeroVideos: Record<string, string> = {
  "moh-acc-kainga-ora": "/assets/video/moh-acc-kainga-ora-drone.mp4",
  "modular-building": "/assets/video/modular-building-hero.mp4",
};

// This catch-all page selects a complete static page from the URL slug. It must
// resolve that slug before rendering, so opt it out of an instant shared shell.
export const instant = false;

export function generateStaticParams() {
  return ["about-us", "services", "projects", "contact-us", ...services.map((service) => service.slug)].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  const title = service?.title ?? ({ "about-us": "About Us", services: "Services", projects: "Projects", "contact-us": "Contact Us" } as Record<string,string>)[slug];
  return title ? { title: `${title} | Mitchell Construction` } : {};
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  if (slug === "about-us") return <AboutPage />;
  if (slug === "services") return <ServicesPage />;
  if (slug === "projects") return <ProjectsPage />;
  if (slug === "contact-us") return <ContactPage />;
  const service = services.find((item) => item.slug === slug);
  if (service) return <ServicePage service={service} />;
  notFound();
}

function ServicePage({ service }: { service: (typeof services)[number] }) {
  const heroVideo = serviceHeroVideos[service.slug];
  return <SiteShell><main><Hero title={service.heroTitle} description={service.intro} image={service.hero} video={heroVideo} /><CertificationStrip />
    <div className="detail-sections">{service.sections.map((section,index) => <section className={`section detail-section ${index%2 ? "tinted" : ""}`} key={section.title}><div className={`container split-grid ${index%2 ? "reverse" : ""}`}>
      <Reveal className="content-column" direction={index%2 ? "right" : "left"}><p className="eyebrow">{section.eyebrow}</p><h2>{section.title}</h2>{section.body.split("\n\n").map((part) => <p key={part}>{part}</p>)}</Reveal>
      <Reveal className="detail-image" direction={index%2 ? "left" : "right"} delay={100}><Image src={section.image} alt="" fill sizes="(max-width:800px) 100vw, 50vw" /></Reveal>
    </div></section>)}</div><WhyUs /><ContactBand />
  </main></SiteShell>;
}

function WhyUs() {
  const items = [
    ["Proven experience in education and commercial construction", "Mitchell Construction has specialised in education and commercial projects across Hamilton and the wider Waikato since 1987."],
    ["Established team with practical leadership", "Trade-qualified builders, project managers, estimators, site managers and health and safety leadership support reliable delivery."],
    ["Strong track record across Waikato projects", "Our completed work includes classrooms, refurbishments, accessibility upgrades, laboratories and major commercial facilities."],
    ["Commitment to quality, safety and dependable delivery", "Registered Master Builder, Site Safe and Licensed Building Practitioner credentials reinforce a focus on professional delivery."],
  ];
  return <section className="section why-section"><div className="container"><p className="eyebrow">WHY US</p><h2>BUILT ON THE RIGHT FOUNDATIONS</h2><div className="why-grid">{items.map(([title,copy],i) => <Reveal key={title} direction={i%2 ? "right" : "left"} delay={(i%2)*80}><h3>{title}</h3><p>{copy}</p></Reveal>)}</div></div></section>;
}

function ServicesPage() {
  return <SiteShell><main><Hero title="Complete Construction Services Across Waikato" description="Delivering reliable education, commercial, and specialist construction services across Hamilton and the wider Waikato." image="/assets/figma/services-imgHeader02.png" primary="PROJECTS" primaryHref="/projects" />
    <section className="section"><div className="container"><p className="eyebrow">OUR SERVICES</p><h2>WHAT WE DELIVER</h2><div className="service-list">{services.map((service,index) => <Reveal className="service-list-item" key={service.slug} direction={index%2 ? "right" : "left"} delay={(index%2)*80}><div className="service-list-image"><Image src={service.sections[0].image} alt="" fill sizes="(max-width:800px) 100vw, 50vw" /></div><div><h3>{service.title.toUpperCase()}</h3><p>{service.intro}</p><Link className="action-link" href={`/${service.slug}`}>LEARN MORE <ArrowIcon /></Link></div></Reveal>)}</div></div></section>
    <CertificationStrip /><Featured /><ContactBand />
  </main></SiteShell>;
}

function Featured() {
  return <section className="section featured-section"><div className="container"><p className="eyebrow">PORTFOLIO</p><h2>FEATURED PROJECTS</h2><div className="project-card-grid">{projects.slice(0,3).map((project) => <div className="project-card" key={project.id}><div className="project-card-image"><Image src={project.image} alt="" fill sizes="33vw" /></div><h3>{project.title}</h3><p>{project.text}</p><Link className="action-link" href={`/projects#${project.id}`}>VIEW PROJECT <ArrowIcon /></Link></div>)}</div></div></section>;
}

const team = [
  ["Colin Mitchell","Managing Director","/assets/figma/about-imgPlaceholderImage2.png","Founder of Mitchell Construction, Colin is a trade-qualified builder with more than 50 years of industry experience and remains actively involved in project oversight and quality management."],
  ["Paul Findsen","Estimator | Contracts Manager | Account Manager","/assets/figma/about-imgPlaceholderImage3.png","Paul has been with Mitchell Construction since 1987 and leads tendering, procurement, subcontractor selection and contract administration."],
  ["Bradley Mitchell","Estimator | Construction Manager | Project Manager","/assets/figma/about-imgPlaceholderImage4.png","A trade-qualified builder, Bradley brings experience across site delivery, supervision, estimating and construction management."],
  ["Jared Mitchell","Estimator | Construction Manager | Project Manager","/assets/figma/about-imgPlaceholderImage5.png","Jared combines practical site delivery experience with estimating and construction management across projects of varying scale."],
  ["Nicole Mitchell","HSE Manager | HR","/assets/figma/about-imgPlaceholderImage6.png","Nicole oversees health and safety, contractor prequalification, staff training, fleet coordination, HR and payroll support."],
  ["Ryan Young","Estimator | Site Manager | Senior Foreman","/assets/figma/about-imgPlaceholderImage7.png","Ryan progressed from apprentice to senior site management and now brings practical construction knowledge into estimating and procurement."],
  ["Harry van den Berg","Senior Foreman | Site Manager","/assets/figma/about-imgPlaceholderImage8.png","One of the company’s longest-serving team members, Harry brings extensive experience across education, commercial and refurbishment projects."],
  ["Mathew “Dusty” Smith","Senior Foreman | Site Manager","/assets/figma/about-imgPlaceholderImage9.png","A trade-qualified builder with Mitchell Construction since 1998, Mathew oversees staff, subcontractors and site delivery."],
  ["Kelvin Patchell","Senior Foreman | Site Manager","/assets/figma/about-imgPlaceholderImage10.png","Kelvin has been with Mitchell Construction since 1993 and manages projects with a strong focus on practical delivery and results."],
  ["Quinton Bezuidenhout","Senior Foreman | Site Manager","/assets/figma/about-imgPlaceholderImage11.png","Quinton brings construction and cabinetry experience to the management of projects, teams and day-to-day site operations."],
  ["Pesalili Tokolahi","Senior Foreman | Site Manager","/assets/figma/about-imgPlaceholderImage12.png","Pesa manages projects of all sizes, supervising staff, coordinating subcontractors and overseeing materials delivery."],
];

const widerTeam = [
  ["Nicola Will","Account Administration","/assets/figma/about-imgUiCard.png"],
  ["Denise Mitchell","Administration & Payroll","/assets/figma/about-imgUiCard1.png"],
  ["Ananda Dock","Office Administration","/assets/figma/about-imgUiCard2.png"],
  ["Grant Frew","Foreman","/assets/figma/about-imgUiCard3.png"],
  ["Brian Morgan","Foreman","/assets/figma/about-imgUiCard4.png"],
  ["Cameron Mackintosh","Foreman","/assets/figma/about-imgUiCard5.png"],
  ["Sam Christie","Foreman","/assets/figma/about-imgUiCard6.png"],
  ["Glenn Wilson","Foreman","/assets/figma/about-imgUiCard7.png"],
  ["Todd Barakat","Foreman","/assets/figma/about-imgUiCard8.png"],
];

function AboutPage() {
  const values = [
    ["quality", "Quality Workmanship", "We take pride in delivering work to a high standard, with careful attention to detail across every stage of the project."],
    ["delivery", "Reliable Delivery", "We focus on clear planning, strong coordination, and dependable project management to keep work moving smoothly."],
    ["safety", "Safe Site Management", "Health and safety is built into how we work, helping protect our team, subcontractors, clients, and the wider public."],
    ["relationships", "Strong Relationships", "We value open communication and long-term relationships with clients, consultants, subcontractors, and local communities."],
    ["experience", "Practical Experience", "Decades of hands-on construction knowledge guide the way we solve problems, manage challenges, and deliver successful outcomes."],
  ] as const;
  return <SiteShell><main><Hero title="A Trusted Waikato Building Team Since 1987" description="Trusted Waikato construction specialists delivering commercial, education, and specialist building projects across Hamilton, Auckland, Bay of Plenty, Taupō, Hawke’s Bay, Napier, New Plymouth, and wider regions." image="/assets/figma/about-imgHeader02.png" outlinedActions showActionArrows={false} />
    <section className="section"><div className="container split-grid"><Reveal className="content-column"><p className="eyebrow">ABOUT US</p><h2>Our History, Our Team, Our Legacy</h2><p>Founded by Colin Mitchell in 1987, Mitchell Construction has grown from a local Waikato building team into a trusted commercial construction company. Today, the company continues to be led by experienced people who understand the business, the industry, and the importance of delivering quality work with strong relationships behind it.</p></Reveal><Reveal className="detail-image" direction="right"><Image src="/assets/figma/about-imgPlaceholderImage1.png" alt="Mitchell Construction team training session" fill sizes="50vw" /></Reveal></div></section>
    <section className="section timeline-section"><div className="container"><h2>FROM 1987 TO TODAY</h2><p className="section-intro">Mitchell Construction’s story is built on decades of hands-on experience, strong family leadership, and long-standing relationships across the Waikato. From its beginnings in 1987 to the company it is today, the business has continued to grow while staying focused on quality workmanship, reliable delivery, and practical construction knowledge.</p><AboutTimeline /></div></section>
    <section className="section values-section"><div className="container values-panel"><p className="eyebrow">VALUES</p><h2>BUILT ON THE RIGHT FOUNDATIONS</h2><div className="values-grid">{values.map(([type,title,copy]) => <article className="value-card" key={title}><ValueIcon type={type} /><h3>{title}</h3><p>{copy}</p></article>)}</div><Link className="button outline-blue values-contact" href="/contact-us">CONTACT US</Link></div></section>
    <section className="section publication-section"><div className="container split-grid"><Reveal className="publication-image"><Image src="/assets/figma/about-imgPlaceholderImage.png" alt="Mitchell Construction project featured in regional publications" fill sizes="50vw" /></Reveal><Reveal className="content-column" direction="right"><p className="eyebrow">FEATURED IN WAIKATO TIMES | BUSINESS NORTH | BUSINESS CENTRAL</p><h2>Featured In Industry Publications</h2><p>Over the years, we have been featured in respected regional business and construction publications, sharing the story behind Mitchell Construction, our family-led approach, and the work we deliver across education, commercial, modular, seismic strengthening, and accessibility modification projects.</p><p>These features have highlighted our long-standing presence across the Waikato and Bay of Plenty, including projects such as Hillcrest Normal School, St John’s College, Whatawhata School, and St John’s Waihi.</p></Reveal></div></section>
    <section className="section team-section"><div className="container"><p className="eyebrow">OUR TEAM</p><h2>Meet The Mitchell Construction Team</h2><div className="team-grid">{team.map(([name,role,image,copy],index) => <Reveal className="team-card" key={name} direction={index%2 ? "right" : "left"}><div className="team-image"><Image src={image} alt={name} fill sizes="(max-width:800px) 100vw, 50vw" /></div><h3>{name}</h3><b>{role}</b><p>{copy}</p></Reveal>)}</div><div className="wider-team">{widerTeam.map(([name,role,image],index) => <Reveal className="wider-team-card" key={name} direction={index%2 ? "right" : "left"}><Image src={image} alt={name} fill sizes="(max-width:620px) 100vw, 33vw" /><div><h3>{name}</h3><p>{role}</p></div></Reveal>)}</div></div></section>
    <ContactBand />
  </main></SiteShell>;
}

function ProjectsPage() {
  return <SiteShell><main><Hero title="OUR PROJECTS" description="Explore a selection of completed projects showcasing Mitchell Construction’s experience across education, commercial, and specialist building works." image="/assets/figma/projects-imgHeader02.png" /><CertificationStrip />
    <section className="section projects-page"><div className="container"><p className="eyebrow">OUR PROJECTS</p><h2>Built Work That Shows Real Experience</h2><div className="projects-list">{projects.map((project,index) => <article id={project.id} key={project.id} className={`project-row ${index%2 ? "reverse" : ""}`}><Reveal className="project-row-image" direction={index%2 ? "right" : "left"}><Image src={project.image} alt={project.title} fill sizes="(max-width:800px) 100vw, 50vw" /></Reveal><Reveal className="project-row-copy" direction={index%2 ? "left" : "right"}><h3>{project.title}</h3><p>{project.text}</p></Reveal></article>)}</div></div></section><ContactBand />
  </main></SiteShell>;
}

function ContactPage() {
  return <SiteShell><main><Hero title="Start Your Next Project With Mitchell Construction" description="Talk to our Waikato-based team about your next education, commercial, or specialist construction project across Hamilton, Auckland, Bay of Plenty, Taupō, Hawke’s Bay, Napier, New Plymouth, and beyond." image="/assets/figma/contact-imgHeader02.png" primary="SERVICES" secondary="ABOUT US" secondaryHref="/about-us" />
    <section className="section contact-page"><div className="container"><Reveal><p className="eyebrow">CONTACT</p><h2>GET IN TOUCH WITH OUR TEAM</h2></Reveal><div className="contact-grid">{contactItems.map(([label,value],index) => <Reveal key={label} direction={index%2 ? "right" : "left"} delay={(index%2)*80}><h3>{label}</h3><p>{value}</p></Reveal>)}</div><ContactForm /></div></section>
    <div className="map-image"><Image src="/assets/figma/contact-imgRectangle12.png" alt="Map showing Mitchell Construction in Te Rapa, Hamilton" fill sizes="100vw" /></div>
  </main></SiteShell>;
}
