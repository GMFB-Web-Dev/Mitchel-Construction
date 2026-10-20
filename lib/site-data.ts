export type ServiceKey =
  | "project-management"
  | "commercial-construction"
  | "moh-acc-kainga-ora"
  | "education-projects"
  | "modular-building";

export type ContentSection = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
};

export type Service = {
  slug: ServiceKey;
  title: string;
  heroTitle: string;
  intro: string;
  hero: string;
  sections: ContentSection[];
};

export const services: Service[] = [
  {
    slug: "project-management",
    title: "Project Management",
    heroTitle: "PROJECT MANAGEMENT",
    intro: "Clear communication, subcontractor coordination, programme management, health and safety planning, and quality control from start to finish.",
    hero: "/assets/figma/project_management-imgHeader02.png",
    sections: [
      {
        eyebrow: "PROJECT LEADERSHIP",
        title: "Clear Direction From Start To Finish",
        body: "Mitchell Construction provides practical construction project management across Hamilton, Waikato, Auckland, Bay of Plenty and wider regions. Our experienced team coordinates consultants, subcontractors, programmes, budgets, safety requirements and quality control so every stage of the build remains organised and accountable.\n\nFrom early planning and procurement through to site delivery and handover, we keep communication clear and decisions moving.",
        image: "/assets/live/a1f1ca0598b5f0c89d9dbbc7c0563187d2669311.png",
      },
      {
        eyebrow: "PROJECT CONTROL",
        title: "Planning, Programming And Coordination",
        body: "Successful projects rely on careful sequencing and strong coordination. We establish practical programmes, manage procurement, coordinate trades and monitor progress throughout construction.\n\nOur hands-on approach helps identify risks early, maintain site momentum and provide clients and consultants with reliable reporting at every stage.",
        image: "/assets/figma/project_management-imgPlaceholderImage1.png",
      },
      {
        eyebrow: "RELIABLE DELIVERY",
        title: "Quality, Safety And Accountability",
        body: "Quality and safety are built into the way we manage each project. Our team oversees site controls, inspections, documentation and handover requirements while maintaining open communication with everyone involved.\n\nThe result is a well-managed project delivered with practical leadership, careful attention to detail and a clear focus on the client’s objectives.",
        image: "/assets/figma/project_management-imgPlaceholderImage2.png",
      },
    ],
  },
  {
    slug: "commercial-construction",
    title: "Commercial Construction",
    heroTitle: "COMMERCIAL CONSTRUCTION",
    intro: "From offices to retail spaces, our team can work on a wide range of commercial fit outs including mixed-use developments. We also do new builds and renovations and offer seismic strengthening for existing buildings.",
    hero: "/assets/figma/commercial-imgHeader02.png",
    sections: [
      {
        eyebrow: "COMMERCIAL BUILDING",
        title: "Commercial Construction Built Around Your Business",
        body: "Mitchell Construction delivers commercial projects across Hamilton, Waikato, Auckland, Bay of Plenty and wider New Zealand. Our experience includes offices, retail spaces, laboratories, mixed-use developments, hospitality, community facilities and specialist operational environments.\n\nWe work closely with clients, consultants and subcontractors to provide practical construction solutions and dependable delivery.",
        image: "/assets/live/fdcc19aded7a8d041c34901bf184429961c51356.png",
      },
      {
        eyebrow: "REFURBISHMENTS & FIT-OUTS",
        title: "Working Within Live Environments",
        body: "Many commercial projects are completed while surrounding businesses remain operational. Our team carefully stages work, controls access, coordinates noisy or disruptive activities and maintains clear communication throughout delivery.\n\nThis practical approach allows refurbishment and fit-out work to progress safely while minimising disruption to staff, customers and day-to-day operations.",
        image: "/assets/figma/commercial-imgPlaceholderImage1.png",
      },
      {
        eyebrow: "SPECIALIST WORKS",
        title: "New Builds, Upgrades And Seismic Strengthening",
        body: "From full new-build delivery to structural upgrades and seismic strengthening, Mitchell Construction brings experienced leadership to complex commercial work. We manage procurement, specialist trades, health and safety, programming and quality requirements from start to completion.",
        image: "/assets/figma/commercial-imgPlaceholderImage2.png",
      },
    ],
  },
  {
    slug: "moh-acc-kainga-ora",
    title: "MOH / ACC / Kāinga Ora",
    heroTitle: "MOH/ACC/ Kāinga Ora",
    intro: "Our carefully planned housing modifications help disabled people live more safely and independently, with work completed in coordination with health organisations.",
    hero: "/assets/figma/moh-imgPlaceholderImage.png",
    sections: [
      {
        eyebrow: "ACCESSIBILITY MODIFICATIONS",
        title: "Practical Changes That Improve Everyday Living",
        body: "Mitchell Construction completes carefully planned property modifications for disabled people and their whānau, working alongside health professionals, occupational therapists, government agencies and housing providers.\n\nProjects may include accessible bathrooms, ramps, decks, widened doorways, handrails, specialist fittings and other practical changes that make homes safer and easier to use.",
        image: "/assets/live/attachment-3.jpeg",
      },
      {
        eyebrow: "KĀINGA ORA",
        title: "Reliable Residential Delivery",
        body: "Our team has experience delivering residential and redevelopment work for Kāinga Ora, including new homes, subdivision works, accessways and supporting civil construction.\n\nWe understand the need for clear programming, respectful communication and dependable site management when working within established communities and occupied environments.",
        image: "/assets/figma/moh-imgPlaceholderImage2.png",
      },
      {
        eyebrow: "SPECIALIST SUPPORT",
        title: "Coordinated From Assessment To Handover",
        body: "Every modification is different. We coordinate the required trades, manage site access and safety, and keep clients and referring organisations informed as work progresses. Our goal is to deliver durable, compliant modifications with as little disruption as possible.",
        image: "/assets/figma/moh-imgPlaceholderImage3.png",
      },
    ],
  },
  {
    slug: "education-projects",
    title: "Education Projects",
    heroTitle: "Education Projects",
    intro: "Our experienced commercial builders construct, renovate, and refurbish school buildings, including classrooms, gyms, and auditoriums. We also place and stabilise temporary and portable classrooms.",
    hero: "/assets/figma/education-imgHeader02.png",
    sections: [
      {
        eyebrow: "BUILT FOR LEARNING",
        title: "Built For Safe, Practical Learning Environments",
        body: "Mitchell Construction has extensive experience delivering construction projects for schools and education providers across Hamilton, Waikato, Auckland, Bay of Plenty, Taupō, Hawke’s Bay, Napier, New Plymouth, and further afield. Since 1987, the company has built a strong reputation for completing education works with careful planning, practical site management, and a strong understanding of how school environments operate.\n\nFrom classroom upgrades and block refurbishments through to science laboratories, gymnasiums, auditoriums, toilet blocks, administration areas, and temporary classroom placement, Mitchell Construction provides the capability needed to deliver safe and well-managed education projects from start to finish.",
        image: "/assets/live/625a2924527cbf060c7bf3e43712bd5c2b9e22f8.png",
      },
      {
        eyebrow: "BUILT FOR LEARNING",
        title: "Working In Live School Environments",
        body: "Education projects often need to be completed while schools remain open and fully operational. Mitchell Construction understands the importance of keeping students, staff, parents, and visitors safe while ensuring the project continues to move forward efficiently.\n\nOur team plans each stage to separate construction zones, manage safe access routes, coordinate deliveries, control dust and noise, and maintain clear communication with school leadership.",
        image: "/assets/figma/education-imgPlaceholderImage1.png",
      },
      {
        eyebrow: "BUILT FOR LEARNING",
        title: "Complete Education Building Support",
        body: "Mitchell Construction delivers classroom refurbishments and block upgrades, science laboratories, specialist learning spaces, gymnasium and auditorium works, toilet and administration upgrades, and temporary or portable classroom placement.\n\nFrom small refurbishments to staged school redevelopments, our team provides practical support from planning through to handover.",
        image: "/assets/figma/education-imgPlaceholderImage2.png",
      },
    ],
  },
  {
    slug: "modular-building",
    title: "Modular Building",
    heroTitle: "MODULAR BUILDING",
    intro: "We provide specialist site works and installation support for modular education projects across New Zealand. Our team manages site preparation, foundations, services, logistics, cranage support, and modular unit installation, with a focus on safe, efficient delivery in live school environments.",
    hero: "/assets/figma/modular-imgPlaceholderImage.png",
    sections: [
      {
        eyebrow: "MODULAR DELIVERY",
        title: "From Site Preparation To Installation",
        body: "Mitchell Construction manages the critical on-site works needed to take modular units from delivery through to safe, practical, ready-to-use spaces.\n\nOur role focuses on preparation, foundations, services, access planning, logistics, cranage support, accurate set-out, landing, installation, and handover support.",
        image: "/assets/live/66b078af1169282eecc3e07abe73dfeafb3684ed-1536x1150.jpg",
      },
      {
        eyebrow: "MODULAR DELIVERY",
        title: "Built For Modular Education Projects",
        body: "Modular projects require careful coordination between off-site fabrication and on-site construction. Our team manages site preparation, structural support, service connections, logistics, cranage and accurate unit placement so installation can happen safely and efficiently.\n\nThis creates a smoother transition from factory-built units to completed learning environments.",
        image: "/assets/figma/modular-imgPlaceholderImage1.png",
      },
      {
        eyebrow: "MODULAR DELIVERY",
        title: "Safe, Reliable On-Site Delivery",
        body: "Many modular projects are delivered while schools remain open. We separate work zones, manage access, coordinate deliveries around school operations and maintain strong health and safety standards.\n\nFrom early site readiness through to final installation, our team provides dependable support with practical construction knowledge and a solutions-focused approach.",
        image: "/assets/figma/services-imgHeader02.png",
      },
    ],
  },
];

export const projects = [
  { id: "lic-main-reception", title: "LIC Main Reception / Cafeteria / Boardroom Building", image: "/assets/figma/projects-imgPlaceholderImage.png", text: "New 600m² Administration and Café Hub build, including demolition, concrete foundations, structural steel, and full main contractor delivery. Mitchell Construction acted as the main contractor for this new build at LIC in Newstead, Hamilton. The project was delivered within an active site environment, requiring strong planning, communication and site management." },
  { id: "lic-block-a", title: "LIC Block A ST Genetics Laboratory", image: "/assets/figma/projects-imgPlaceholderImage1.png", text: "PC2 laboratory refurbishment within a live 24/7 LIC facility, completed with careful staging, safety controls, and clear communication. The project required careful coordination of specialist services, laboratory finishes, access control and compliance requirements." },
  { id: "st-johns-college-block-c", title: "St John’s College - Block C ILE Upgrade", image: "/assets/figma/projects-imgPlaceholderImage2.png", text: "Major Block C refurbishment including staged interior upgrades, new toilet facilities, external walkways, services, and a steel and concrete balcony. The works were completed with strong coordination, practical problem-solving and a successful outcome for the client." },
  { id: "st-johns-ambulance", title: "St John’s Ambulance Station, Pukekohe", image: "/assets/figma/projects-imgPlaceholderImage3.png", text: "New ambulance station build delivered with structural works, office areas, ambulance bays, external cladding and full site coordination. Despite unexpected exterior and drainage changes, the project achieved a strong result." },
  { id: "pragma-rise", title: "Pragma Rise", image: "/assets/figma/projects-imgPlaceholderImage4.png", text: "Construction of three two-storey residential buildings containing 14 two-bedroom and two one-bedroom units. The full scope included structure, services, joinery, flooring, balustrades and finishing works." },
  { id: "sudima-hotel", title: "Sudima Hotel – 200s Block – Earthquake Strengthening", image: "/assets/figma/projects-imgPlaceholderImage5.png", text: "Earthquake strengthening across three floors and a basement, including concrete shear walls, beams and passive fire upgrades. The hotel remained fully operational throughout construction." },
  { id: "the-boulevard", title: "The Boulevard", image: "/assets/figma/projects-imgPlaceholderImage6.png", text: "A new 2,220m² commercial building with concrete floors, structural steel, iron cladding, tilt panels and a connected two-storey office area." },
  { id: "te-kura-o-te-koutu", title: "Te Kura o Te Koutu, Rotorua – New Wharekai Building", image: "/assets/figma/projects-imgPlaceholderImage7.png", text: "A new single-storey, 330m² wharekai building with concrete floor, structural steel, timber framing, paving and complete external finishing works." },
  { id: "kainga-ora", title: "Kāinga Ora – 26A Lawrence Street, Te Kuiti", image: "/assets/figma/projects-imgPlaceholderImage8.png", text: "A new 11-unit residential subdivision with duplexes, a standalone home, private shared access and an 80-metre public road handed over at completion." },
  { id: "university-waikato", title: "University of Waikato – Student Union Building Fitout", image: "/assets/figma/projects-imgPlaceholderImage9.png", text: "Internal refurbishment and fit-out including demolition, new kitchen units, seating areas, ceilings, wall linings and new flooring throughout." },
  { id: "waikato-diocesan-school", title: "Waikato Diocesan School for Girls – Sports Education Centre", image: "/assets/figma/projects-imgPlaceholderImage10.png", text: "A new two-storey, 1,200m² sports education centre with fitness and changing rooms, classrooms, offices, retail spaces and sustainable building features." },
  { id: "omakere-school", title: "Omakere School", image: "/assets/figma/projects-imgPlaceholderImage11.png", text: "A staged redevelopment including temporary classrooms, demolition, recontouring, retaining walls, piling, two modular classroom buildings and upgraded outdoor areas." },
];

export const contactItems = [
  ["EMAIL", "office@mitchellconstruction.co.nz"],
  ["PHONE", "07 847 1204"],
  ["OFFICE", "Unit 1/550 Te Rapa Road, Te Rapa, Hamilton"],
  ["HOURS", "Monday to Friday 7AM–5PM"],
  ["LOCATIONS", "Waikato, Bay of Plenty, Auckland, Taupō, Hawke’s Bay / Napier, New Plymouth, Central North & the Upper North"],
] as const;
