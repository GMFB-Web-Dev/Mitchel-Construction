import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BadgeCheck, ClockArrowUp, Handshake, HardHat, Network } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { InteractiveServiceMap } from "@/components/InteractiveServiceMap";
import { AboutTimeline } from "@/components/AboutTimeline";
import { PublicationCarousel } from "@/components/PublicationCarousel";
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
  return <SiteShell><main><Hero title={service.heroTitle} description={service.intro} image={service.hero} video={heroVideo} certifications />
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
  ["Colin Mitchell","Managing Director","/assets/figma/about-imgPlaceholderImage2.png","Colin Mitchell is a trade-qualified builder and founder of Mitchell Construction Limited, established in 1987.\n\nBeginning his apprenticeship in Hamilton in 1972, Colin gained valuable international experience working in Africa and Europe before returning to New Zealand in 1980 to work in Foreman and Supervisor roles within the government-funded light commercial sector.\n\nWith over 50 years’ industry experience, Colin has successfully delivered projects across the education, commercial, and fit-out sectors, with contract values ranging to $10M+.\n\nHe remains actively involved in all projects, providing hands-on leadership, project oversight, and quality management to ensure strong delivery outcomes and client satisfaction.\n\nUnder Colin’s leadership, Mitchell Construction Limited has grown into a well-established and respected construction company with an annual turnover of $30M–$34M and a strong financial position with no bad debts."],
  ["Paul Findsen","Estimator | Contracts Manager | Account Manager","/assets/figma/about-imgPlaceholderImage3.png","Paul Findsen is a trade-qualified builder with Mitchell Construction Limited since 1987, progressing from Foreman to his current role in 1993.\n\nHe leads tendering, procurement, and subcontractor selection, and manages contract administration including document control, progress claims, payments, and variations across projects up to $10M+."],
  ["Bradley Mitchell","Estimator | Construction Manager | Project Manager","/assets/figma/about-imgPlaceholderImage4.png","Bradley Mitchell is a trade-qualified builder who has been with Mitchell Construction Limited since 2005, becoming qualified in 2010.\n\nHe developed his experience on the Christchurch Earthquake Rebuild before returning to the company and moving from site delivery roles into management.\n\nHe has delivered projects across a wide range of sizes and sectors, with experience in site supervision, subcontractor coordination, and supporting successful project outcomes. Bradley’s current role focuses on estimating and construction management."],
  ["Jared Mitchell","Estimator | Construction Manager | Project Manager","/assets/figma/about-imgPlaceholderImage5.png","Jared Mitchell is a trade-qualified builder with Mitchell Construction Limited since 2005, qualifying in 2010.\n\nHis background includes work on the Christchurch Earthquake Rebuild as well as overseas experience in England on high-spec construction projects before returning to New Zealand and progressing into management roles.\n\nHe has worked across projects of varying scale, overseeing site activity, coordinating subcontractors and consultants, and contributing to project delivery from planning through to completion. Jared now works in estimating and construction management."],
  ["Nicole Mitchell","HSE Manager | HR","/assets/figma/about-imgPlaceholderImage6.png","Nicole Mitchell has managed HSE at Mitchell Construction Limited since 2023. She oversees site audits, risk assessments, incident reporting, and compliance with company policies and safe work practices.\n\nNicole also manages contractor prequalification, First Aid readiness, fleet coordination, and staff training requirements. In addition to HSE management, Nicole provides HR and payroll support, assisting with staff coordination, administration, and internal systems.\n\nShe has successfully implemented SiteMate with Dashpivot to streamline company reporting and compliance processes."],
  ["Ryan Young","Estimator | Site Manager | Senior Foreman | Quality Manager","/assets/figma/about-imgPlaceholderImage7.png","Ryan Young joined Mitchell Construction Limited as an apprentice in 2020 and has rapidly progressed through the company into a Senior Site Manager role.\n\nHe has experience managing projects of all sizes, overseeing staff, subcontractors, architects, and day-to-day site operations, with a strong focus on quality management and project delivery.\n\nRyan has recently transitioned into an Estimator role, bringing practical site experience and strong organisational skills to project planning and procurement."],
  ["Harry van den Berg","Senior Foreman | Site Manager | Quality Manager","/assets/figma/about-imgPlaceholderImage8.png","Harry van den Berg is a trade-qualified builder and one of Mitchell Construction Limited’s longest-serving team members, having been with the company since its establishment in 1987. He has held Foreman roles since 1991 and Senior Foreman since 1995.\n\nWith extensive experience across education, commercial, and refurbishment projects, Harry oversees site operations, subcontractor coordination, and quality control.\n\nKnown for his attention to detail and problem-solving ability, he plays a key role in maintaining the company’s high construction standards and successful project delivery."],
  ["Mathew “Dusty” Smith","Senior Foreman | Site Manager","/assets/figma/about-imgPlaceholderImage9.png","Mathew Smith is a trade-qualified builder with Mitchell Construction Limited since 1998, progressing from apprentice to Foreman in 2008.\n\nHe manages projects of all sizes, overseeing staff, subcontractors and site operations, with a strong focus on quality and delivery."],
  ["Kelvin Patchell","Senior Foreman | Site Manager","/assets/figma/about-imgPlaceholderImage10.png","Kelvin Patchell is a trade-qualified builder with Mitchell Construction Limited since 1993, serving as Foreman since 2000.\n\nHe manages projects of all sizes, overseeing staff, subcontractors and site operations, with a strong focus on delivery and results."],
  ["Quinton Bezuidenhout","Senior Foreman | Site Manager","/assets/figma/about-imgPlaceholderImage11.png","Quinton Bezuidenhout is an experienced builder with Mitchell Construction Limited since 2019, serving as Senior Foreman and Site Manager. Originally from South Africa, he brings 15 years of construction and cabinetry experience, including running his own business.\n\nHe manages projects of all sizes, overseeing staff, subcontractors and day-to-day site operations with a focus on quality and delivery."],
  ["Pesalili Tokolahi","Senior Foreman | Site Manager","/assets/figma/about-imgPlaceholderImage12.png","Pesalili Tokolahi is an experienced builder with Mitchell Construction Limited since 2017 and completed his BCITO apprenticeship while progressing into a Foreman role in 2023.\n\nPesa manages projects of all sizes, supervising staff, coordinating subcontractors, and overseeing day-to-day site operations and materials delivery."],
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
  const [featuredMember, ...teamMembers] = team;
  const values = [
    [BadgeCheck, "Quality Workmanship", "We take pride in delivering work to a high standard, with careful attention to detail across every stage of the project."],
    [ClockArrowUp, "Reliable Delivery", "We focus on clear planning, strong coordination, and dependable project management to keep work moving smoothly."],
    [HardHat, "Safe Site Management", "Health and safety is built into how we work, helping protect our team, subcontractors, clients, and the wider public."],
    [Handshake, "Strong Relationships", "We value open communication and long-term relationships with clients, consultants, subcontractors, and local communities."],
    [Network, "Practical Experience", "Decades of hands-on construction knowledge guide the way we solve problems, manage challenges, and deliver successful outcomes."],
  ] as const;
  return <SiteShell><main><Hero title="A Trusted Waikato Building Team Since 1987" description="Trusted Waikato construction specialists delivering commercial, education, and specialist building projects across Hamilton, Auckland, Bay of Plenty, Taupō, Hawke’s Bay, Napier, New Plymouth, and wider regions." image="/assets/figma/about-imgHeader02.png" outlinedActions showActionArrows={false} />
    <section className="section"><div className="container split-grid"><Reveal className="content-column"><p className="eyebrow">ABOUT US</p><h2>Our History, Our Team, Our Legacy</h2><p>Founded by Colin Mitchell in 1987, Mitchell Construction has grown from a local Waikato building team into a trusted commercial construction company. Today, the company continues to be led by experienced people who understand the business, the industry, and the importance of delivering quality work with strong relationships behind it.</p></Reveal><Reveal className="detail-image" direction="right"><Image src="/assets/figma/about-imgPlaceholderImage1.png" alt="Mitchell Construction team training session" fill sizes="50vw" /></Reveal></div></section>
    <section className="section timeline-section"><div className="container"><h2>FROM 1987 TO TODAY</h2><p className="section-intro">Mitchell Construction’s story is built on decades of hands-on experience, strong family leadership, and long-standing relationships across the Waikato. From its beginnings in 1987 to the company it is today, the business has continued to grow while staying focused on quality workmanship, reliable delivery, and practical construction knowledge.</p><AboutTimeline /></div></section>
    <section className="section values-section"><div className="container values-panel"><p className="eyebrow">VALUES</p><h2>BUILT ON THE RIGHT FOUNDATIONS</h2><div className="values-grid">{values.map(([Icon,title,copy]) => <article className="value-card" key={title}><Icon className="value-icon" aria-hidden="true" /><h3>{title}</h3><p>{copy}</p></article>)}</div><Link className="button outline-blue values-contact" href="/contact-us">CONTACT US</Link></div></section>
    <section className="section publication-section"><div className="container split-grid publication-layout"><Reveal><PublicationCarousel /></Reveal><Reveal className="content-column" direction="right"><p className="eyebrow">FEATURED IN WAIKATO TIMES | BUSINESS NORTH | BUSINESS CENTRAL</p><h2>FEATURED IN INDUSTRY PUBLICATIONS</h2><p>Over the years, we have been featured in respected regional business and construction publications, sharing the story behind Mitchell Construction, our family-led approach, and the work we deliver across education, commercial, modular, seismic strengthening, and accessibility modification projects.</p><p>These features have highlighted our long-standing presence across the Waikato and Bay of Plenty, including projects such as Hillcrest Normal School, St John’s College, Whatawhata School, and St John’s Waihi. They also reflect our history, founded by Colin Mitchell in 1987, and the continued involvement of the wider Mitchell family and long-serving team members.</p></Reveal></div></section>
    <section className="section team-section"><div className="container"><p className="eyebrow">OUR TEAM</p><h2>MEET THE MITCHELL CONSTRUCTION TEAM</h2><Reveal className="team-featured"><div className="team-featured-image"><Image src={featuredMember[2]} alt={featuredMember[0]} fill sizes="(max-width:980px) 100vw, 330px" /></div><div className="team-featured-copy"><h3>{featuredMember[0]}</h3><b>{featuredMember[1]}</b>{featuredMember[3].split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></Reveal><div className="team-grid">{teamMembers.map(([name,role,image,copy],index) => <Reveal className="team-card" key={name} direction={index%2 ? "right" : "left"}><div className="team-image"><Image src={image} alt={name} fill sizes="(max-width:980px) 100vw, 50vw" /></div><div className="team-card-copy"><h3>{name}</h3><b>{role}</b>{copy.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></Reveal>)}</div><div className="wider-team">{widerTeam.map(([name,role,image],index) => <Reveal className="wider-team-card" key={name} direction={index%2 ? "right" : "left"}><Image src={image} alt={name} fill sizes="(max-width:620px) 100vw, 33vw" /><div><h3>{name}</h3><p>{role}</p></div></Reveal>)}</div></div></section>
    <ContactBand showMap={false} />
  </main></SiteShell>;
}

function ProjectsPage() {
  return <SiteShell><main><Hero title="OUR PROJECTS" description="Explore a selection of completed projects showcasing Mitchell Construction’s experience across education, commercial, and specialist building works." image="/assets/figma/projects-imgHeader02.png" /><CertificationStrip />
    <section className="section projects-page"><div className="container"><p className="eyebrow">OUR PROJECTS</p><h2>Built Work That Shows Real Experience</h2><div className="projects-list">{projects.map((project,index) => <article id={project.id} key={project.id} className={`project-row ${index%2 ? "reverse" : ""}`}><Reveal className="project-row-image" direction={index%2 ? "right" : "left"}><Image src={project.image} alt={project.title} fill sizes="(max-width:800px) 100vw, 50vw" /></Reveal><Reveal className="project-row-copy" direction={index%2 ? "left" : "right"}><h3>{project.title}</h3><p>{project.text}</p></Reveal></article>)}</div></div></section><ContactBand />
  </main></SiteShell>;
}

function ContactPage() {
  const icons = [
    "/assets/figma/contact-imgIconEmailWBackground.svg",
    "/assets/figma/contact-imgIconPhoneWBackground.svg",
    "/assets/figma/contact-imgIconPinWBackground.svg",
    "",
    "/assets/figma/contact-imgIconPinWBackground.svg",
  ];
  return <SiteShell><main><Hero title="Start Your Next Project With Mitchell Construction" description="Talk to our Waikato-based team about your next education, commercial, or specialist construction project across Hamilton, Auckland, Bay of Plenty, Taupō, Hawke’s Bay, Napier, New Plymouth, and beyond." image="/assets/figma/contact-imgHeader02.png" primary="SERVICES" secondary="ABOUT US" secondaryHref="/about-us" outlinedActions showActionArrows={false} />
    <section className="section contact-page"><div className="container contact-page-details"><Reveal><p className="eyebrow">CONTACT</p><h2>GET IN TOUCH WITH OUR TEAM</h2></Reveal><div className="contact-grid">{contactItems.map(([label,value],index) => <Reveal className="contact-item" key={label} direction={index%2 ? "right" : "left"} delay={(index%2)*80}>{index === 3 ? <span className="contact-clock" aria-hidden="true"><svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="19"/><circle cx="20" cy="20" r="10"/><path d="M20 13v8l5 3"/></svg></span> : <Image src={icons[index]} alt="" width={56} height={56} />}<h3>{label}</h3>{label === "EMAIL" ? <a href="mailto:office@mitchellconstruction.co.nz">{value}</a> : label === "PHONE" ? <a href="tel:+6478471204">{value}</a> : label === "HOURS" ? <p>Monday to Friday<br />7AM-5PM</p> : <p>{value}</p>}</Reveal>)}</div></div><div className="container contact-page-form"><ContactForm /></div><div className="container contact-page-map"><InteractiveServiceMap /></div></section>
  </main></SiteShell>;
}
