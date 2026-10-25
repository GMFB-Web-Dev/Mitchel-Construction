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
  bullets?: string[];
  closing?: string;
  image: string;
  video?: string;
  imagePosition?: "left" | "right";
};

export type Service = {
  slug: ServiceKey;
  title: string;
  heroTitle: string;
  intro: string;
  cardIntro: string;
  hero: string;
  whyTitle: string;
  sections: ContentSection[];
};

export const services: Service[] = [
  {
    slug: "project-management",
    title: "Project Management",
    heroTitle: "PROJECT MANAGEMENT",
    intro: "Managing construction projects with clear planning, strong coordination, and reliable delivery from start to finish.",
    cardIntro: "Clear communication, subcontractor coordination, programme management, health and safety planning, and quality control from start to finish.",
    hero: "/assets/figma/project_management-imgHeader02.png",
    whyTitle: "BUILT FOR CLEAR, COORDINATED DELIVERY",
    sections: [
      {
        eyebrow: "CLEAR, COORDINATED DELIVERY",
        title: "MANAGING EVERY STAGE WITH CONFIDENCE",
        body: "Mitchell Construction provides practical, hands-on project management across Waikato, Hamilton, Auckland, Bay of Plenty, Taupō, Hawke’s Bay, Napier, New Plymouth, and further afield. Since 1987, the company has built a strong reputation for managing education, commercial, MOH / ACC modification, and specialist construction projects with clear communication, careful planning, and dependable site coordination.\n\nTheir project management approach is grounded in real construction experience. With experienced project managers, site managers, foremen, estimators, tradespeople, administration support, and health and safety leadership, Mitchell Construction can manage each stage of a project from early planning through to completion and handover.",
        image: "/assets/figma/project_management-imgPlaceholderImage.png",
      },
      {
        eyebrow: "CLEAR, COORDINATED DELIVERY",
        title: "PLANNING, PROGRAMME & COORDINATION",
        body: "Strong project management begins with clear planning. Mitchell Construction works to understand the project requirements, programme, site conditions, risks, subcontractor needs, and client expectations before work begins.\n\nTheir team manages the key moving parts of the project, including:",
        bullets: ["Construction programming and staging", "Subcontractor coordination", "Procurement and material lead times", "Site establishment and access planning", "Consultant and client communication", "Cost tracking and variation support", "Inspection planning and compliance requirements", "Quality assurance and final handover"],
        closing: "This structured approach helps keep projects moving efficiently while ensuring key decisions, risks, and responsibilities are clearly managed.",
        image: "/assets/figma/project_management-imgPlaceholderImage2.png",
      },
      {
        eyebrow: "CLEAR, COORDINATED DELIVERY",
        title: "LIVE-SITE & COMPLEX PROJECT MANAGEMENT",
        body: "Many construction projects need to be delivered in active environments, including schools, commercial sites, laboratories, public facilities, and occupied homes. Mitchell Construction understands the importance of keeping sites safe, organised, and functional while work is underway.\n\nTheir team carefully manages live-site requirements such as:",
        bullets: ["Separating construction zones from active areas", "Maintaining safe access for staff, visitors, residents, or the public", "Coordinating deliveries and subcontractor movements", "Managing noise, dust, and disruption", "Planning staged works around daily operations", "Communicating clearly with stakeholders throughout the project"],
        closing: "This allows clients to continue operating with confidence while construction works are completed safely and professionally.",
        image: "/assets/figma/project_management-imgPlaceholderImage1.png",
      },
    ],
  },
  {
    slug: "commercial-construction",
    title: "Commercial Construction",
    heroTitle: "COMMERCIAL CONSTRUCTION",
    intro: "Delivering dependable commercial new builds, refurbishments, fit-outs, and upgrades across Hamilton and the wider Waikato.",
    cardIntro: "From offices to retail spaces, our team can work on a wide range of commercial fit outs including mixed-use developments. We also do new builds and renovations and offer seismic strengthening for existing buildings.",
    hero: "/assets/figma/commercial-imgHeader02.png",
    whyTitle: "A TRUSTED PARTNER FOR COMMERCIAL BUILDS",
    sections: [
      {
        eyebrow: "COMMERCIAL BUILDING",
        title: "COMMERCIAL PROJECTS BUILT WITH CONFIDENCE",
        body: "Mitchell Construction delivers commercial construction projects across Waikato, Hamilton, Auckland, Bay of Plenty, Taupō, Hawke’s Bay, Napier, New Plymouth, and further afield. Since 1987, the company has built a strong reputation for dependable delivery across commercial new builds, refurbishments, fit-outs, upgrades, and complex staged works.\n\nTheir team has experience across a wide range of commercial environments, including offices, retail spaces, hospitality buildings, community facilities, medical and laboratory spaces, and large-scale redevelopment projects. With strong project management, skilled tradespeople, and practical site leadership, Mitchell Construction provides a reliable construction partner for commercial projects of varying scale and complexity.",
        image: "/assets/figma/commercial-imgPlaceholderImage.png",
      },
      {
        eyebrow: "COMMERCIAL BUILDING",
        title: "BUILT FOR COMPLEX COMMERCIAL ENVIRONMENTS",
        body: "Commercial projects often involve tight programmes, multiple subcontractors, live-site conditions, long-lead materials, and strict compliance requirements. Mitchell Construction understands how to manage these moving parts with clear planning and strong coordination.\n\nTheir approach includes:",
        bullets: ["Programme planning and staged delivery", "Subcontractor coordination", "Procurement and lead-time management", "Health and safety planning", "Live-site access and site separation", "Quality assurance throughout construction", "Clear communication with clients, consultants, and project stakeholders"],
        closing: "This structured approach helps keep projects moving efficiently while maintaining safety, quality, and accountability at every stage.",
        image: "/assets/figma/commercial-imgPlaceholderImage3.png",
      },
      {
        eyebrow: "COMMERCIAL BUILDING",
        title: "NEW BUILDS & REFURBISHMENTS",
        body: "Mitchell Construction can deliver a wide range of commercial building works, from full new builds through to internal upgrades and specialist refurbishments. Their project experience includes structural works, concrete foundations, steel framing, timber framing, cladding, roofing, internal linings, flooring, joinery, services coordination, and final fit-out.\n\nTheir commercial construction services can include:",
        bullets: ["Commercial new builds", "Office fit-outs and refurbishments", "Retail and hospitality construction", "Medical, laboratory, and specialist facilities", "Community and public-use buildings", "Structural upgrades and seismic strengthening", "Interior reconfigurations", "Exterior upgrades and cladding works", "Commercial kitchen and amenities fit-outs", "Project management, quality assurance, and handover support"],
        closing: "Whether the project is a new facility, a staged upgrade, or a complex refurbishment, Mitchell Construction brings the practical experience needed to deliver a strong result.",
        image: "/assets/figma/commercial-imgPlaceholderImage2.png",
      },
    ],
  },
  {
    slug: "moh-acc-kainga-ora",
    title: "MOH / ACC / Kāinga Ora",
    heroTitle: "MOH/ACC/ Kainga Ora",
    intro: "Supporting safer, more independent living through carefully planned home accessibility modifications.",
    cardIntro: "Our carefully planned housing modifications help disabled people live more safely and independently, with work completed in coordination with health organisations.",
    hero: "/assets/figma/moh-imgPlaceholderImage.png",
    whyTitle: "EXPERIENCED, RESPECTFUL DELIVERY",
    sections: [
      {
        eyebrow: "SAFER, MORE ACCESSIBLE HOMES",
        title: "MODIFICATIONS THAT SUPPORT INDEPENDENT LIVING",
        body: "Mitchell Construction delivers carefully planned Ministry of Health and ACC housing modifications across Waikato, Hamilton, Auckland, Bay of Plenty, Taupō, Hawke’s Bay, Napier, New Plymouth, and further afield. These projects are designed to help people live more safely, comfortably, and independently in their own homes, with work completed carefully around the needs of each person using the space.\n\nAccessibility projects often require thoughtful planning, clear communication, safe site management, and a strong understanding of how small changes can make a major difference to everyday living. Mitchell Construction works closely with health organisations, consultants, clients, families, and support teams to ensure each modification is practical, respectful, and completed to a high standard.",
        image: "/assets/figma/moh-imgPlaceholderImage.png",
      },
      {
        eyebrow: "SAFER, MORE ACCESSIBLE HOMES",
        title: "ACCESSIBILITY WORK WITH CARE",
        body: "MOH and ACC modification projects are often completed in homes that remain occupied during the works. Mitchell Construction takes a respectful and organised approach to reduce disruption and maintain a safe environment for everyone involved.\n\nTheir team carefully manages each stage of the project, including:",
        bullets: ["Safe access around the home during construction", "Clear communication with residents and support people", "Careful planning around daily routines", "Coordination with health providers and project consultants", "Clean, tidy, and well-managed work areas", "Practical solutions that improve safety and usability"],
        closing: "This approach helps ensure each modification is completed with care, while keeping the client’s comfort, dignity, and independence at the centre of the project.",
        image: "/assets/figma/moh-imgPlaceholderImage4.png",
      },
      {
        eyebrow: "BUILDING BETTER HOMES AND ACCESSIBLE LIVING SPACES",
        title: "KĀINGA ORA",
        body: "Mitchell Construction specialises in Kāinga Ora new builds, refurbishment programmes, and retrofit projects, delivering high-quality construction solutions that improve homes and strengthen communities across New Zealand.\n\nAlongside our social housing work, we provide Ministry of Health (MOH) and ACC-funded housing modifications, helping people live safely, comfortably, and independently in their own homes. From access ramps and bathroom alterations to complex accessibility upgrades, our team works closely with occupational therapists, consultants, clients, and support networks to create practical solutions tailored to individual needs.\n\nWhether we're constructing new homes, upgrading existing housing stock, or delivering specialised accessibility modifications, we bring the same commitment to quality workmanship, safety, clear communication, and professional project delivery. Our experience working in occupied homes and community environments allows us to complete projects efficiently while minimising disruption for residents and their families.\n\nAt Mitchell Construction, our goal is simple: to build, improve, and adapt homes that provide lasting value and better outcomes for the people who live in them.",
        image: "/assets/figma/moh-imgPlaceholderImage1.png",
      },
      {
        eyebrow: "SAFER, MORE ACCESSIBLE HOMES",
        title: "PRACTICAL HOME MODIFICATION SOLUTIONS",
        body: "Mitchell Construction can complete a wide range of housing modifications to improve access, mobility, and day-to-day function within the home. Each project is approached with a focus on safety, durability, and ease of use.\n\nTheir modification work can include:",
        bullets: ["Bathroom accessibility upgrades", "Entry access improvements", "Ramp construction and threshold adjustments", "Doorway widening and internal layout changes", "Handrail and support installation", "Wet area upgrades", "Bedroom and living area alterations", "Kitchen and laundry access improvements", "General building works to support safer movement through the home"],
        closing: "From minor adjustments through to more involved structural changes, Mitchell Construction provides the building experience needed to deliver practical outcomes that support independent living.",
        image: "/assets/figma/moh-imgPlaceholderImage3.png",
        imagePosition: "right",
      },
    ],
  },
  {
    slug: "education-projects",
    title: "Education Projects",
    heroTitle: "Education Projects",
    intro: "Creating safe, practical learning spaces for schools and education providers across the Waikato.",
    cardIntro: "Our experienced commercial builders construct, renovate, and refurbish school buildings, including classrooms, gyms, and auditoriums. We also place and stabilise temporary and portable classrooms.",
    hero: "/assets/figma/education-imgHeader02.png",
    whyTitle: "Why Mitchell Construction",
    sections: [
      {
        eyebrow: "BUILT FOR LEARNING",
        title: "BUILT FOR SAFE, PRACTICAL LEARNING ENVIRONMENTS",
        body: "Mitchell Construction has extensive experience delivering construction projects for schools and education providers across Hamilton, Waikato, Auckland, Bay of Plenty, Taupō, Hawke’s Bay, Napier, New Plymouth, and further afield. Since 1987, the company has built a strong reputation for completing education works with careful planning, practical site management, and a strong understanding of how school environments operate.\n\nFrom classroom upgrades and block refurbishments through to science laboratories, gymnasiums, auditoriums, toilet blocks, administration areas, and temporary classroom placement, Mitchell Construction provides the capability needed to deliver safe and well-managed education projects from start to finish.",
        image: "/assets/figma/education-imgPlaceholderImage.png",
      },
      {
        eyebrow: "BUILT FOR LEARNING",
        title: "WORKING IN LIVE SCHOOL ENVIRONMENTS",
        body: "Education projects often need to be completed while schools remain open and fully operational. Mitchell Construction understands the importance of keeping students, staff, parents, and visitors safe while ensuring the project continues to move forward efficiently.\n\nTheir team carefully plans each stage of work to reduce disruption and maintain an organised site.\n\nThis includes:",
        bullets: ["Separating construction zones from active school areas", "Managing safe access routes", "Coordinating deliveries around school operations", "Controlling noise, dust, and site movement", "Communicating clearly with school leadership, consultants, and subcontractors"],
        image: "/assets/figma/education-imgPlaceholderImage2.png",
      },
      {
        eyebrow: "BUILT FOR LEARNING",
        title: "COMPLETE EDUCATION BUILDING SUPPORT",
        body: "Mitchell Construction can deliver a wide range of education works, from small refurbishments through to larger staged upgrades and specialist learning spaces.\n\nOur experience includes:",
        bullets: ["Classroom refurbishments and block upgrades", "Science laboratories and specialist learning spaces", "Gymnasium and auditorium works", "Toilet block and administration upgrades", "Temporary and portable classroom placement", "New school buildings and additions", "Health and safety planning, subcontractor coordination, quality assurance, and handover support"],
        image: "/assets/figma/education-imgPlaceholderImage1.png",
      },
    ],
  },
  {
    slug: "modular-building",
    title: "Modular Building",
    heroTitle: "MODULAR BUILDING",
    intro: "Specialist site works and installation support for modular education projects across New Zealand.",
    cardIntro: "We provide specialist site works and installation support for modular education projects across New Zealand. Our team manages site preparation, foundations, services, logistics, cranage support, and modular unit installation, with a focus on safe, efficient delivery in live school environments.",
    hero: "/assets/figma/modular-imgPlaceholderImage.png",
    whyTitle: "BUILT FOR SEAMLESS MODULAR DELIVERY",
    sections: [
      {
        eyebrow: "MODULAR DELIVERY",
        title: "FROM FACTORY-BUILT UNITS TO FINISHED LEARNING SPACES",
        body: "Mitchell Construction Limited delivers specialist site works and installation services for modular building projects, with a strong focus on education environments. Working alongside modular fabricators, consultants, and school stakeholders, the team manages the critical on-site works needed to take modular units from delivery through to safe, practical, ready-to-use spaces.\n\nOur role focuses on the construction work that happens on site, including preparation, foundations, services, access planning, logistics, cranage support, accurate set-out, landing, installation, and handover support.",
        image: "/assets/video/modular-section-installation-poster.jpg",
        video: "/assets/video/modular-section-installation.m4v",
      },
      {
        eyebrow: "MODULAR DELIVERY",
        title: "BUILT FOR MODULAR EDUCATION PROJECTS",
        body: "Modular projects require careful coordination between off-site fabrication and on-site construction. Mitchell Construction understands the importance of having the site ready before units arrive, ensuring each stage is properly planned so installation can happen safely and efficiently.\n\nOur team can manage key site requirements, including:",
        bullets: ["Site preparation and enabling works", "Foundations and structural support", "Service coordination and connections", "Access and logistics planning", "Cranage support and installation coordination", "Accurate setting out and unit placement", "Final positioning and handover support"],
        closing: "This helps create a smoother transition from factory-built units to completed learning environments.",
        image: "/assets/figma/modular-imgPlaceholderImage1.png",
      },
      {
        eyebrow: "MODULAR DELIVERY",
        title: "SAFE, RELIABLE ON-SITE DELIVERY",
        body: "Many modular building projects are delivered while schools remain open and operational. Mitchell Construction brings extensive experience working in live education settings, where safety, communication, and disruption control are essential.\n\nOur approach includes:",
        bullets: ["Separating work zones from active school areas", "Managing safe access for students, staff, and visitors", "Coordinating deliveries around school operations", "Planning cranage and installation works carefully", "Maintaining strong health and safety standards", "Reducing disruption to day-to-day learning"],
        closing: "From early site readiness through to final installation, their team provides dependable site support with practical construction knowledge, strong coordination, and a solutions-focused approach. This helps ensure each project is completed safely, efficiently, and to a high standard.",
        image: "/assets/figma/modular-imgPlaceholderImage.png",
      },
    ],
  },
];

export const projects = [
  {
    id: "lic-main-reception", title: "LIC Main Reception / Cafeteria / Boardroom Building", image: "/assets/figma/projects-imgPlaceholderImage.png",
    text: "New 600m² Administration and Café Hub build, including demolition, concrete foundations, structural steel, and full main contractor delivery.",
    details: "Mitchell Construction acted as the main contractor for this new build project at LIC in Newstead, Hamilton. The project involved demolishing the existing administration building and constructing a new single-storey Administration and Café Hub building.\n\nThe works included concrete foundations, a structural steel frame, and careful coordination across the full build. As the project was delivered within an active site environment, strong planning, communication, and site management were essential throughout the construction process.",
  },
  {
    id: "st-johns-college-block-c", title: "St John’s College - Block C ILE Upgrade", image: "/assets/figma/projects-imgPlaceholderImage1.png",
    text: "Major Block C refurbishment including staged interior upgrades, new toilet facilities, external walkways, services, and a steel and concrete balcony.",
    details: "Mitchell Construction completed a major refurbishment and upgrade of Block C at St John’s College in Hillcrest, Hamilton. The project included staged interior works, demolition of the existing toilet block, construction of new facilities, external walkway upgrades, and a new steel and concrete balcony with a roof canopy.\n\nThe team managed delays around key materials and recovered programme time during the second stage of the project. The works were completed with strong coordination, practical problem-solving, and a successful outcome for the client.",
  },
  {
    id: "lic-block-a", title: "LIC Block A ST Genetics Laboratory", image: "/assets/figma/projects-imgPlaceholderImage2.png",
    text: "PC2 laboratory refurbishment within a live 24/7 LIC facility, completed with careful staging, safety controls, and clear communication.",
    details: "This project involved the full refurbishment and upgrade of a PC2 laboratory within an operational LIC facility. Surrounding laboratories remained active throughout the works, requiring strict safety protocols, detailed staging, and proactive communication.\n\nMitchell Construction managed the works while maintaining operational continuity for the client. The project required careful coordination of specialist services, laboratory finishes, access control, and compliance requirements.",
  },
  {
    id: "st-johns-ambulance", title: "St John’s Ambulance Station, Pukekohe", image: "/assets/figma/projects-imgPlaceholderImage3.png",
    text: "New ambulance station build delivered with structural works, office areas, ambulance bays, external cladding, and full site coordination.",
    details: "This project involved the construction of a new St John’s Ambulance Station in Pukekohe. Mitchell Construction delivered the main building works, including concrete pads, timber walls, trusses, GIB installation, exterior cladding systems, office areas, ambulance bays, and surrounding site works.\n\nThe project required careful procurement of long-lead materials and strong coordination with consultants and stakeholders. Despite unexpected exterior works and drainage changes, the project was delivered successfully and achieved a strong result for the client.",
  },
  {
    id: "pragma-rise", title: "Pragma Rise", image: "/assets/figma/projects-imgPlaceholderImage4.png",
    text: "Mitchell Construction Ltd was the main contractor for this project, delivered between April 2022 and April 2023.",
    details: "The project involved the construction of three two-storey residential buildings, made up of two buildings with six units each and one building with four units. In total, the development included 14 two-bedroom units and 2 one-bedroom units.\n\nThe scope of works included major footing installation, reinforcing, concrete floors, concrete tilt panels, timber framing and trusses, aluminium windows and doors, steel fire doors, electrical, plumbing, drainage, mechanical services, kitchen joinery, acoustic underlay, carpet, floor tiles, aluminium balustrades, and painting.\n\nThe project was completed within the client’s required timeframe, allowing the units to be ready for tenants to move in as planned.",
  },
  {
    id: "the-boulevard", title: "The Boulevard", image: "/assets/figma/projects-imgPlaceholderImage5.png",
    text: "Mitchell Construction Ltd was the main contractor for this project, delivered in 2018.",
    details: "The project involved the construction of a new 2,220m² commercial building, requiring full coordination of the main building works from site setup through to completion.\n\nThe scope of works included concrete floor construction, structural steel installation, iron cladding, concrete tilt panels, and associated building works. The project also included a connected two-storey office area, adding both operational and administrative space to the facility.\n\nMitchell Construction managed the project as the lead contractor, coordinating the required trades and construction stages to deliver a practical, well-built commercial facility.",
  },
  {
    id: "sudima-hotel", title: "Sudima Hotel – 200s Block – Earthquake Strengthening", image: "/assets/figma/projects-imgPlaceholderImage6.png",
    text: "Mitchell Construction Ltd delivered the earthquake strengthening works for the 200s Block at Sudima Hotel in Rotorua.",
    details: "The project covered three floors and a basement, with each level approximately 750m². The works included the installation of more than 225LM of concrete shear walls and 160LM of concrete beams.\n\nThe scope of works included basement strengthening, concrete beam installation, shear wall construction, passive fire upgrades, new fire doors, and structural upgrades across multiple hotel rooms on the upper floors.\n\nThe hotel remained fully operational throughout construction, requiring careful staging, strong communication, and close coordination with hotel operations. The project was completed on time, within budget, and to a high standard.",
  },
  {
    id: "te-kura-o-te-koutu", title: "Te Kura o Te Koutu, Rotorua – New Wharekai Building", image: "/assets/figma/projects-imgPlaceholderImage7.png",
    text: "Mitchell Construction Limited was the main contractor for this project, delivered between August 2019 and April 2020.",
    details: "The project involved the construction of a new single-storey building with a total floor area of approximately 330m².\n\nThe scope of works included concrete floor construction, structural steel frames, timber framing, and associated building works.\n\nThe site works included concrete paving, mowing strips, grassing, and external finishing works to complete the project to the required standard.",
  },
  {
    id: "kainga-ora", title: "Kainga Ora – 26A Lawrence Street, Te Kuiti", image: "/assets/figma/projects-imgHeader02.png",
    text: "Mitchell Construction Ltd was the main contractor for this Kāinga Ora project, delivered between July 2024 and July 2025.",
    details: "The project involved the construction of a new subdivision made up of 11 residential units. This included four 3-bedroom double-storey duplexes, four 2-bedroom double-storey duplexes, two 4-bedroom double-storey duplexes, and one 2-bedroom single-storey standalone unit.\n\nThe scope of works included subdivision construction, residential building works, private JOAL access for all units, and an 80-metre public road, which was handed over to NZTA at the end of the contract.\n\nThe project required careful coordination across multiple dwellings, shared access areas, civil works, and programme requirements to deliver a complete residential development to the required standard.",
  },
  {
    id: "university-waikato", title: "University of Waikato – Student Union Building Fitout", image: "/assets/figma/projects-imgPlaceholderImage8.png",
    text: "Mitchell Construction Limited was the main contractor for this project, delivered between October 2019 and February 2020.",
    details: "The project involved the internal refurbishment and fit-out of an existing space, including the strip-out of internal walls, ceilings, and associated finishes.\n\nThe new fit-out included the installation of kitchen units, seating areas, ceilings, wall linings, and new flooring throughout the refurbished areas.\n\nThe works required careful coordination of demolition, services, finishes and joinery to create a refreshed interior environment suitable for continued use by the client, staff, and building occupants within the existing building.",
  },
  {
    id: "waikato-diocesan-school", title: "Waikato Diocesan School for Girls – Sports Education Centre", image: "/assets/figma/projects-imgPlaceholderImage9.png",
    text: "Mitchell Construction Limited was the main contractor for this project, completed for the Board of Waikato Diocesan School.",
    details: "The project involved the construction of a new two-storey sports education centre with a total floor area of approximately 1,200m².\n\nThe facility included fitness and changing rooms, classrooms, offices, and the school uniform and stationery shop.\n\nThe building featured concrete and steel construction with brick, glass, and cedar cladding, along with sustainable design elements including rainwater harvesting, natural ventilation, recycled aggregate concrete, and waste tracking. The project also included extensive decking, landscaping, and planting.",
  },
  {
    id: "omakere-school", title: "Omakere School", image: "/assets/figma/projects-imgPlaceholderImage10.png",
    text: "Mitchell Construction Limited was the main contractor for this staged project, delivered between November 2024 and December 2025.",
    details: "The project involved relocating the school into temporary Portacom classrooms, including service connections, toilet facilities, decks, ramps, verandahs, and outdoor learning areas.\n\nFollowing relocation, the existing classroom block, hardstand areas, tennis courts, and services were demolished and cleared for redevelopment.\n\nThe final stage included site recontouring, retaining walls, piling, and the installation of two modular classroom buildings with integrated amenities, covered accessways, coloured concrete outdoor areas, and an Astro Turf tennis and netball court.",
  },
  {
    id: "turangawaewae-marae", title: "Turangawaewae Marae – New Toilet Block", image: "/assets/figma/projects-imgPlaceholderImage11.png",
    text: "Mitchell Construction Limited was the main contractor for this project, delivered between May 2020 and July 2020.",
    details: "The project involved the full refurbishment of an existing 240m² toilet block, including the complete strip-out of the existing internal areas.\n\nThe new fit-out included toilets, showers, vanities, basins, cubby holes, Duraplan wall linings, and Hardie Glaze ceiling finishes throughout the refurbished amenities.\n\nThe scope also included new exterior concrete works, handrails, and louvres, creating upgraded toilet and shower facilities with improved durability, functionality, and finishes for ongoing use.",
  },
];

export const contactItems = [
  ["EMAIL", "office@mitchellconstruction.co.nz"],
  ["PHONE", "07 847 1204"],
  ["OFFICE", "Unit 1/550 Te Rapa Road, Te Rapa, Hamilton"],
  ["HOURS", "Monday to Friday 7AM–5PM"],
  ["LOCATIONS", "Waikato, Bay of Plenty, Auckland, Taupō, Hawke’s Bay / Napier, New Plymouth, Cental North & the Upper North"],
] as const;
