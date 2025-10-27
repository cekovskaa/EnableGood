import type { Project } from "../types/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Solar Classrooms for Remote Peru",
    description:
      "Off-grid solar energy systems installed in 25 schools across rural Andes",
    overview:
      "Solar Classrooms for Remote Peru is a transformative initiative bringing sustainable energy solutions to underserved educational institutions across the Andean highlands. Partnering with local communities and international organizations, this project addresses the critical energy gap that has long hindered educational opportunities in remote mountainous regions. By installing off-grid solar systems in 25 schools, the initiative not only provides reliable electricity for the first time but also creates a foundation for modern learning environments. The project emphasizes local capacity building by training community technicians in solar maintenance and repair, ensuring long-term sustainability. This comprehensive approach combines renewable energy infrastructure with educational empowerment, demonstrating how strategic partnerships can deliver lasting impact in challenging geographical contexts while promoting environmental stewardship and educational equity.",
    impact: [
      "25 solar systems",
      "10,000+ students reached",
      "100 local technicians trained",
    ],
    esgGoals: ["Environmental"],
    sdgGoals: ["Climate Action", "Life on Land", "Clean Water and Sanitation"],
    industry: "Agriculture",
    projectType: "Reforestation",
    partnerType: "Companies",
    partners: ["cocacola-logo.png", "patagonia-logo.png"],
    location: "Honduras, Uganda, and Indonesia",
    startDate: "July 2024",
    estimatedCompletion: "December 2026",
    teamContacts: [
      {
        name: "Ana López",
        role: "Project Lead",
        organization: "Sollar Honduras",
      },
      {
        name: "Maya Kim",
        role: "Sustainability Program Manager",
        organization: "Starbucks",
      },
    ],
    heroImage: "/src/assets/images-account/solar-classrooms.png",
  },
  {
    id: 2,
    title: "Clean Water Access in Ghana: Innovation through Partnership",
    description:
      "Smart filtration and rainwater systems installed in rural communities",
    overview:
      "Clean Water Access in Ghana represents a groundbreaking collaboration between NGOs, corporate partners, and local communities to address one of the most pressing health challenges in rural Ghana. This innovative project deploys advanced smart filtration technology and rainwater harvesting systems to provide sustainable access to clean drinking water for over 50,000 people across Northern Ghana. By combining cutting-edge water purification methods with traditional rainwater collection practices, the initiative has achieved a remarkable 90% reduction in waterborne illnesses within participating communities. The project's success lies in its holistic approach, which includes community health education, local employment opportunities in system maintenance, and the establishment of three strategic NGO-corporate alliances that ensure ongoing support and resource mobilization. This partnership model demonstrates how collaborative innovation can deliver transformative health outcomes while building resilient water infrastructure.",
    impact: [
      "50,000+ people reached",
      "90% reduction in waterborne illness",
      "3 NGO-corporate alliances",
    ],
    esgGoals: ["Environmental", "Social"],
    sdgGoals: [
      "Affordable and Clean Energy",
      "Climate Action",
      "Decent Work and Economic Growth",
    ],
    industry: "Energy",
    projectType: "Renewable",
    partnerType: "Ngo",
    partners: ["cocacola-logo.png", "stc-logo.png"],
    location: "Northern Ghana",
    startDate: "March 2023",
    estimatedCompletion: "August 2025",
    teamContacts: [
      {
        name: "Kwame Mensah",
        role: "Field Coordinator",
        organization: "WaterAid Ghana",
      },
      {
        name: "Laura Green",
        role: "Corporate Sustainability Partner",
        organization: "Coca-Cola",
      },
    ],
    heroImage: "/src/assets/images-account/water-ghana-hero.png",
  },
  {
    id: 3,
    title: "Inclusive Tech Labs in Serbia: Digital Skills for All",
    description:
      "Tech education centers launched for underserved youth and people with disabilities",
    overview:
      "Inclusive Tech Labs in Serbia is pioneering a new model of digital inclusion by establishing state-of-the-art technology education centers specifically designed for underserved youth and people with disabilities across Serbia's major cities. Operating in Belgrade, Novi Sad, and Niš, this transformative initiative brings together six NGO and technology partners to create accessible learning environments equipped with adaptive technologies and specialized curricula. The project addresses the digital skills gap that has historically limited employment opportunities for marginalized populations, providing comprehensive training in coding, digital literacy, and emerging technologies. With over 1,500 participants already benefiting from the program, the initiative has demonstrated significant improvements in employability and economic independence. By fostering partnerships between the tech industry, social organizations, and educational institutions, this project not only equips individuals with marketable skills but also challenges societal perceptions about disability and creates pathways to meaningful employment in Serbia's growing technology sector.",
    impact: [
      "1,500+ participants ",
      "6 NGO & tech partners",
      "Increased employability",
    ],
    esgGoals: ["Social"],
    sdgGoals: [
      "Clean Water and Sanitation",
      "Good Health and Well-Being",
      "Quality Education",
    ],
    industry: "Infrastructure",
    projectType: "Water",
    partnerType: "Companies",
    partners: ["patagonia-logo.png", "stc-logo.png"],
    location: "Belgrade, Novi Sad, Niš (Serbia)",
    startDate: "January 2024",
    estimatedCompletion: "June 2026",
    teamContacts: [
      {
        name: "Marko Jovanović",
        role: "Tech Lab Manager",
        organization: "Digital Serbia",
      },
      { name: "Sarah Lee", role: "CSR Coordinator", organization: "STC" },
    ],
    heroImage: "/src/assets/images-account/tech-labs-serbia-hero.png",
  },
  {
    id: 4,
    title: "Green Manufacturing Initiative",
    description: "Innovating eco-friendly materials for global production.",
    overview:
      "Green Manufacturing Initiative is revolutionizing industrial production across Asia by developing and implementing eco-friendly materials and sustainable manufacturing processes at scale. Operating in Vietnam, India, and China, this ambitious project brings together leading manufacturers, sustainability experts, and corporate partners to transform traditional production methods into circular economy models. The initiative focuses on reducing carbon emissions, minimizing waste, and establishing sustainable supply chains that benefit both the environment and local economies. By investing in research and development of innovative bio-based materials and clean production technologies, the project demonstrates that environmental responsibility and industrial efficiency can coexist profitably. The program includes comprehensive training for factory workers and management teams, ensuring that sustainable practices become embedded in organizational culture. This collaborative approach between EcoManuTech and global corporate partners like STC showcases how strategic innovation in manufacturing can drive meaningful climate action while maintaining competitive production standards and creating green jobs across multiple countries.",
    impact: [
      "Lower Emissions",
      "Circular Economy",
      "Sustainable Supply Chains",
    ],
    esgGoals: ["Environmental", "Governence"],
    sdgGoals: [
      "Industry, Innovation and Infrastructure",
      "Responsible Consumption and Production",
      "Climate Action",
    ],
    industry: "Manufacturing",
    projectType: "Innovation",
    partnerType: "Companies",
    partners: ["cocacola-logo.png", "stc-logo.png"],
    location: "Vietnam, India, and China",
    startDate: "May 2023",
    estimatedCompletion: "May 2027",
    teamContacts: [
      {
        name: "Priya Sharma",
        role: "Sustainability Engineer",
        organization: "EcoManuTech",
      },
      {
        name: "Daniel Kim",
        role: "Global Partnerships Lead",
        organization: "STC",
      },
    ],
    heroImage: "/src/assets/images-account/green-manufacturing-hero.png",
  },
  {
    id: 5,
    title: "Education for All",
    description:
      "Building schools and training teachers in underserved regions.",
    overview:
      "Education for All is a comprehensive educational transformation initiative focused on expanding access to quality education in rural Nepal through infrastructure development and teacher capacity building. This ambitious project addresses the severe educational disparities faced by children in remote Himalayan communities by constructing 200 modern school facilities equipped with essential learning resources and training thousands of teachers in contemporary pedagogical methods. Partnering with Teach Nepal and supported by corporate philanthropy from Patagonia, the initiative has already reached 50,000 students who previously had limited or no access to formal education. The project goes beyond brick-and-mortar construction by implementing holistic teacher training programs that emphasize student-centered learning, inclusive education practices, and community engagement. By creating sustainable educational ecosystems that involve parents, local leaders, and government stakeholders, Education for All is breaking the cycle of educational poverty and opening pathways to economic opportunity and social mobility for Nepal's most marginalized children and youth.",
    impact: ["200 Schools", "50K Students", "Teacher Training"],
    esgGoals: ["Social"],
    sdgGoals: [
      "Quality Education",
      "Decent Work and Economic Growth",
      "Good Health and Well-Being",
    ],
    industry: "Education",
    projectType: "Community",
    partnerType: "Ngo",
    partners: ["cocacola-logo.png", "patagonia-logo.png"],
    location: "Rural Nepal",
    startDate: "September 2022",
    estimatedCompletion: "December 2025",
    teamContacts: [
      {
        name: "Sita Rai",
        role: "Education Program Lead",
        organization: "Teach Nepal",
      },
      {
        name: "John Peterson",
        role: "Philanthropy Officer",
        organization: "Patagonia",
      },
    ],
    heroImage: "/src/assets/images-account/education-nepal-hero.png",
  },
  {
    id: 6,
    title: "Sustainable Agriculture Hub in Kenya",
    description:
      "Training smallholder farmers in climate-smart agricultural practices and providing access to markets",
    overview:
      "Sustainable Agriculture Hub in Kenya is transforming the livelihoods of smallholder farmers in Nakuru through comprehensive training in climate-smart agricultural practices and innovative market access solutions. This pioneering initiative addresses the dual challenges of climate change and food security by equipping over 5,000 farmers with knowledge and techniques to adapt their farming methods to changing environmental conditions. The project has achieved remarkable results, including a 30% increase in crop yields and a 40% reduction in carbon footprint through the adoption of regenerative agriculture practices, water conservation methods, and organic farming techniques. Beyond agricultural training, the hub connects farmers directly to value chains and markets, eliminating exploitative middlemen and ensuring fair prices for their produce. The partnership between Kenya Green Agri and Coca-Cola demonstrates how corporate expertise in supply chain management can be leveraged to create sustainable agricultural ecosystems that benefit both small-scale producers and large-scale buyers while promoting environmental stewardship and rural economic development.",
    impact: [
      "5,000+ farmers trained",
      "30% yield increase",
      "Carbon footprint reduced by 40%",
    ],
    esgGoals: ["Environmental"],
    sdgGoals: [
      "Life on Land",
      "Responsible Consumption and Production",
      "Decent Work and Economic Growth",
    ],
    industry: "Agriculture",
    projectType: "Reforestation",
    partnerType: "Just exploring",
    partners: ["cocacola-logo.png", "patagonia-logo.png"],
    location: "Nakuru, Kenya",
    startDate: "June 2023",
    estimatedCompletion: "October 2026",
    teamContacts: [
      {
        name: "Peter Otieno",
        role: "Agriculture Hub Director",
        organization: "Kenya Green Agri",
      },
      {
        name: "Maria Gomez",
        role: "Sustainability Manager",
        organization: "Coca-Cola",
      },
    ],
    heroImage: "/src/assets/images-account/agriculture-kenya-hero.png",
  },
  {
    id: 7,
    title: "Smart Energy Grid for Rural Bangladesh",
    description:
      "Implementing micro-grid solutions powered by renewable energy sources for isolated communities",
    overview:
      "Smart Energy Grid for Rural Bangladesh is revolutionizing energy access in isolated communities across Chittagong and Khulna by implementing cutting-edge micro-grid solutions powered entirely by renewable energy sources. This transformative project addresses the chronic energy poverty that has limited economic development and quality of life in 15 remote villages, bringing electricity to over 2,000 households for the first time. The initiative employs an innovative combination of solar, wind, and small-scale hydroelectric power to create resilient, decentralized energy systems that operate independently of the national grid. Beyond infrastructure deployment, the project has established a new model of community-owned energy entrepreneurship by training local residents to operate, maintain, and manage these micro-grids, creating sustainable livelihoods while ensuring long-term system viability. The partnership between BanglaGrid and Patagonia demonstrates how technical innovation combined with community empowerment can deliver scalable solutions to energy poverty while advancing climate action and fostering local economic development in challenging rural contexts.",
    impact: [
      "15 villages electrified",
      "2,000+ households connected",
      "Local energy entrepreneurs trained",
    ],
    esgGoals: ["Social", "Governence"],
    sdgGoals: [
      "Affordable and Clean Energy",
      "Industry, Innovation and Infrastructure",
      "Climate Action",
    ],
    industry: "Energy",
    projectType: "Renewable",
    partnerType: "Companies",
    partners: ["stc-logo.png", "patagonia-logo.png"],
    location: "Chittagong and Khulna, Bangladesh",
    startDate: "April 2024",
    estimatedCompletion: "November 2026",
    teamContacts: [
      {
        name: "Rafiq Ahmed",
        role: "Energy Systems Engineer",
        organization: "BanglaGrid",
      },
      {
        name: "Emma White",
        role: "Corporate Partner",
        organization: "Patagonia",
      },
    ],
    heroImage: "/src/assets/images-account/energy-bangladesh-hero.png",
  },
  {
    id: 8,
    title: "Digital Healthcare Platform for Remote Areas",
    description:
      "Telemedicine and mobile health units bringing quality healthcare to underserved populations",
    overview:
      "Digital Healthcare Platform for Remote Areas is bridging the healthcare access gap in Brazil's Amazon Basin by deploying an integrated system of telemedicine services and mobile health units that bring quality medical care to previously unreachable communities. This innovative initiative leverages digital technology and strategic partnerships to overcome the geographical barriers that have long prevented indigenous and rural populations from accessing essential health services. The project has revolutionized healthcare delivery by connecting remote patients with specialist doctors through secure video consultations, reducing travel time by 80% and eliminating the need for dangerous multi-day journeys to urban medical centers. Mobile health units equipped with diagnostic tools and staffed by trained healthcare workers complement the telemedicine platform by providing on-site care, vaccinations, and health education. The partnership between Saúde Amazonia and STC has created a scalable model that combines technological innovation with community health worker training, ensuring that digital healthcare solutions are culturally appropriate and sustainable while dramatically improving health outcomes for over 25,000 patients across one of the world's most challenging healthcare environments.",
    impact: [
      "25,000+ patients served",
      "80% reduction in travel time",
      "Healthcare workers upskilled",
    ],
    esgGoals: ["Environmental", "Social"],
    sdgGoals: [
      "Good Health and Well-Being",
      "Quality Education",
      "Industry, Innovation and Infrastructure",
    ],
    industry: "Infrastructure",
    projectType: "Innovation",
    partnerType: "Ngo",
    partners: ["cocacola-logo.png", "stc-logo.png"],
    location: "Amazon Basin, Brazil",
    startDate: "February 2023",
    estimatedCompletion: "July 2025",
    teamContacts: [
      {
        name: "Dr. Camila Souza",
        role: "Healthcare Program Lead",
        organization: "Saúde Amazonia",
      },
      {
        name: "David Lin",
        role: "Tech Integration Partner",
        organization: "STC",
      },
    ],
    heroImage: "/src/assets/images-account/healthcare-amazon-hero.png",
  },
  {
    id: 9,
    title: "Circular Economy Manufacturing Network",
    description:
      "Establishing waste-to-resource manufacturing facilities that transform industrial waste into valuable products",
    overview:
      "Circular Economy Manufacturing Network is pioneering a transformative approach to industrial production across Poland and the Czech Republic by establishing innovative facilities that convert industrial waste into valuable commercial products. This groundbreaking initiative addresses the mounting challenge of industrial waste management while creating new economic opportunities through the principles of circular economy. The project has successfully diverted 500 tons of waste from landfills by implementing advanced processing technologies that transform materials previously considered worthless into high-quality inputs for manufacturing. Beyond environmental benefits, the network has generated 150 green jobs in communities previously affected by industrial decline, providing training and employment in emerging circular economy sectors. The achievement of zero-waste certification across participating facilities demonstrates the viability of closed-loop production systems. The collaboration between EcoPolska and STC showcases how strategic partnerships can scale circular economy solutions, proving that waste reduction, environmental sustainability, and economic growth are not conflicting goals but complementary outcomes of innovative industrial transformation.",
    impact: [
      "500 tons waste diverted",
      "150+ green jobs created",
      "Zero-waste certification achieved",
    ],
    esgGoals: ["Environmental", "Governence"],
    sdgGoals: [
      "Responsible Consumption and Production",
      "Decent Work and Economic Growth",
      "Industry, Innovation and Infrastructure",
    ],
    industry: "Manufacturing",
    projectType: "Innovation",
    partnerType: "Just exploring",
    partners: ["patagonia-logo.png", "stc-logo.png"],
    location: "Poland and Czech Republic",
    startDate: "August 2023",
    estimatedCompletion: "January 2027",
    teamContacts: [
      {
        name: "Anna Kowalska",
        role: "Circular Economy Expert",
        organization: "EcoPolska",
      },
      {
        name: "Michael Roberts",
        role: "Partnership Director",
        organization: "STC",
      },
    ],
    heroImage: "/src/assets/images-account/circular-economy-hero.png",
  },
  {
    id: 10,
    title: "Community-Led Water Conservation Initiative",
    description:
      "Empowering local communities to manage and protect their water resources through education and infrastructure",
    overview:
      "Community-Led Water Conservation Initiative is empowering rural communities in Andhra Pradesh, India, to take ownership of their water resources through a comprehensive approach that combines indigenous knowledge, modern conservation techniques, and community-driven management systems. This participatory project recognizes that sustainable water management requires local leadership and collective action, positioning community members as decision-makers and stewards of their water ecosystems. The initiative has installed 12 integrated water conservation systems that include rainwater harvesting structures, traditional pond restoration, and watershed management practices, while engaging over 3,000 community members in ongoing education and maintenance activities. The remarkable 95% improvement in water quality demonstrates the effectiveness of combining technical infrastructure with community mobilization and behavioral change. The partnership between Water for India and Patagonia emphasizes capacity building, ensuring that communities have the skills, resources, and authority to manage their water systems independently. This model of community-led conservation proves that environmental sustainability and social empowerment are inseparable, creating resilient water security that will benefit generations to come.",
    impact: [
      "12 water conservation systems",
      "3,000+ community members engaged",
      "Water quality improved by 95%",
    ],
    esgGoals: ["Social", "Environmental"],
    sdgGoals: [
      "Clean Water and Sanitation",
      "Life on Land",
      "Good Health and Well-Being",
    ],
    industry: "Education",
    projectType: "Community",
    partnerType: "Ngo",
    partners: ["cocacola-logo.png", "patagonia-logo.png"],
    location: "Andhra Pradesh, India",
    startDate: "October 2022",
    estimatedCompletion: "April 2025",
    teamContacts: [
      {
        name: "Ramesh Kumar",
        role: "Community Water Lead",
        organization: "Water for India",
      },
      {
        name: "Julia Brown",
        role: "Impact Partnerships Manager",
        organization: "Patagonia",
      },
    ],
    heroImage: "/src/assets/images-account/water-india-hero.png",
  },
];
