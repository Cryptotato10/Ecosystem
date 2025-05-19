import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaTimes, FaTwitter, FaEthereum, FaAngleRight, FaAngleLeft, FaLink, FaArrowUp } from 'react-icons/fa';
import { SiSolana, SiBinance } from 'react-icons/si';
import './App.css';

function App() {
  const [partners, setPartners] = useState([]);
  const [filteredPartners, setFilteredPartners] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [particles, setParticles] = useState([]);
  const particleRef = useRef(null);
  const partnersPerPage = 9;
  
  // Create particles for animation
  useEffect(() => {
    const createParticles = () => {
      const newParticles = [];
      const colors = ['#FF6F20', '#0066ff', '#00c389'];
      
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 15 + 5,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 5
        });
      }
      
      setParticles(newParticles);
    };
    
    createParticles();
  }, []);

  // Partners data
  useEffect(() => {
    const partnersData = [
      // Business Partners
      {
        name: "Rivalz Network",
        category: "Web3",
        description: "Rivalz is a Web3-centric platform offering cross-chain tools and liquidity solutions, empowering users to seamlessly access yield, staking, and other decentralized finance (DeFi) features across multiple blockchain ecosystems",
        twitterUrl: "https://x.com/NetmindAi/status/1864058215702679851",
        status: "Business Partner",
        website: "https://rivalz.ai",
        logo: "https://rivalz.ai/logos/black-logo.png"
      },
      {
        name: "Greenfield",
        category: "Web3",
        description: "Greenfield (BNB Greenfield) is a decentralized data storage solution on the BNB Chain, designed to empower users with ownership and monetization of their data through smart contract–based mechanisms.",
        twitterUrl: "https://x.com/NetmindAi/status/1869338444876714198",
        status: "Business Partner",
        website: "https://greenfield.bnbchain.org",
        logo: "https://greenfield.bnbchain.org/images/logo-light.svg"
      },
      {
        name: "GAIB",
        category: "Web3",
        description: "GAIB provides high-performance computing and AI infrastructure, enabling scalable machine learning for complex industry applications.",
        twitterUrl: "",
        status: "Business Partner",
        website: "https://gaib.ai",
        logo: "https://gaib.ai/logo.png"
      },
      {
        name: "PinlinkAI",
        category: "Web3",
        description: "PinlinkAI develops secure, AI-driven networking solutions for IoT and enterprise environments, ensuring seamless data flow across devices.",
        twitterUrl: "https://x.com/NetmindAi/status/1862595429038268917",
        status: "Business Partner",
        website: "https://pinlink.ai",
        logo: "https://pinlink.ai/logo.png"
      },
      {
        name: "AGI Odyssey",
        category: "Web3",
        description: "AGI Odyssey explores advanced AI concepts and research, especially around artificial general intelligence and cognitive computing.",
        twitterUrl: "https://x.com/AGI_Odyssey/status/1862525515317260430",
        status: "Business Partner",
        website: "https://www.agiodyssey.org",
        logo: "https://www.agiodyssey.org/logo.png"
      },
      {
        name: "aelf Blockchain",
        category: "Web3",
        description: "aelf Blockchain offers a scalable, decentralized computing network for enterprise blockchain solutions.",
        twitterUrl: "https://x.com/NetmindAi/status/1859990274338132162",
        status: "Business Partner",
        website: "https://aelf.com",
        logo: "https://aelf.com/assets/logo.svg"
      },
      {
        name: "Haiper AI",
        category: "Web3",
        description: "Haiper AI drives digital transformation with specialized AI software, helping companies streamline workflows and unlock new efficiencies.",
        twitterUrl: "https://x.com/NetmindAi/status/1857504053346840879",
        status: "Business Partner",
        website: "https://haiper.ai",
        logo: "https://haiper.ai/logo.png"
      },
      {
        name: "ParallelAI",
        category: "Web3",
        description: "ParallelAI specializes in frameworks for massively parallel data processing, enabling faster model training and inference at scale.",
        twitterUrl: "https://x.com/NetmindAi/status/1849459457870213336",
        status: "Business Partner",
        website: "https://www.parallelai.tech",
        logo: "https://www.parallelai.tech/logo.svg"
      },
      {
        name: "Love AI",
        category: "Web3",
        description: "Love AI focuses on AI for mental well-being, creating solutions that promote emotional health and empathetic user interactions.",
        twitterUrl: "https://x.com/NetmindAi/status/1843320411611947066",
        status: "Business Partner",
        website: "https://lovingai.org",
        logo: "https://lovingai.org/logo.png"
      },
      {
        name: "FrogPay AI",
        category: "Web3",
        description: "FrogPay AI offers intelligent fintech and payment processing solutions, emphasizing fraud detection and seamless transaction flows.",
        twitterUrl: "https://x.com/NetmindAi/status/1826597652705751263",
        status: "Business Partner",
        website: "https://www.frogpay.io",
        logo: "https://www.frogpay.io/logo.png"
      },
      {
        name: "AI Society Labs",
        category: "Web3",
        description: "AI Society Labs investigates the societal impacts of artificial intelligence, shaping ethical frameworks and responsible technology policies.",
        twitterUrl: "https://x.com/NetmindAi/status/1825883143364018240",
        status: "Business Partner",
        website: "https://www.hiig.de/en/research/ai-and-society-lab",
        logo: "https://www.hiig.de/wp-content/uploads/2023/05/aisl-logo.svg"
      },
      {
        name: "DWF Labs",
        category: "Web3",
        description: "DWF Labs is a prominent Web3 market maker and investment firm, providing liquidity and strategic support for blockchain ecosystems.",
        twitterUrl: "https://x.com/NetmindAi/status/1824539869764546717",
        status: "Business Partner",
        website: "https://www.dwf-labs.com",
        logo: "https://www.dwf-labs.com/images/logos/logo-dark.svg"
      },
      {
        name: "IO Net",
        category: "Web3",
        description: "IO Net delivers advanced networking solutions, leveraging AI to optimize bandwidth usage and connectivity in decentralized computing setups.",
        twitterUrl: "https://x.com/NetmindAi/status/1823348947542216707",
        status: "Business Partner",
        website: "https://www.ionet.io",
        logo: "https://www.ionet.io/logo.png"
      },
      {
        name: "Quantstamp",
        category: "Web3",
        description: "Quantstamp secures blockchain projects through automated and manual smart contract audits, ensuring the integrity of codebases.",
        twitterUrl: "https://x.com/NetmindAi/status/1821910450952401198",
        status: "Business Partner",
        website: "https://quantstamp.com",
        logo: "https://quantstamp.com/assets/img/quantstamp-logo.svg"
      },
      {
        name: "Marlin Protocol",
        category: "Web3",
        description: "Marlin Protocol improves network performance for blockchains, aiming to minimize latency and maximize throughput in decentralized environments.",
        twitterUrl: "https://x.com/NetmindAi/status/1820430972653031740",
        status: "Business Partner",
        website: "https://www.marlin.pro",
        logo: "https://www.marlin.pro/logo.svg"
      },
      {
        name: "Neurochain AI",
        category: "Web3",
        description: "Neurochain AI reimagines blockchain consensus with intelligent, adaptive protocols that enhance efficiency and security.",
        twitterUrl: "https://x.com/NetmindAi/status/1818634489737744808",
        status: "Business Partner",
        website: "https://neurochaintech.io",
        logo: "https://neurochaintech.io/wp-content/uploads/2023/01/logo-neurochain.png"
      },
      {
        name: "Solder AI",
        category: "Web3",
        description: "Solder AI integrates AI functionality at the hardware level, producing efficient chips for real-time analytics and inference.",
        twitterUrl: "https://x.com/NetmindAi/status/1815752772165197869",
        status: "Business Partner",
        website: "https://solder.ai",
        logo: "https://solder.ai/logo.png"
      },
      {
        name: "zkHive",
        category: "Web3",
        description: "zkHive pioneers zero-knowledge proof solutions combined with AI to enhance privacy, security, and scalability on blockchain platforms.",
        twitterUrl: "https://x.com/NetmindAi/status/1775863797896626296",
        status: "Business Partner",
        website: "https://zkhive.io",
        logo: "https://zkhive.io/logo.svg"
      },
      {
        name: "Tria",
        category: "Web3",
        description: "Tria is a conversation intelligence platform that records, transcribes, and analyzes meetings, turning them into searchable, shareable knowledge.",
        twitterUrl: "https://x.com/NetmindAi/status/1863946395155349862",
        status: "Business Partner",
        website: "https://tria.ai",
        logo: "https://tria.ai/logo.png"
      },
      {
        name: "0G (Zero Gravity)",
        category: "Web3",
        description: "0G is building next-generation AI tools and platforms, focusing on real-time analytics, generative models, and decentralized innovation.",
        twitterUrl: "https://x.com/0G_labs/status/1868968449399206119",
        status: "Business Partner",
        website: "https://0g.ai",
        logo: "https://0g.ai/logo.png"
      },
      {
        name: "NVIDIA",
        category: "Web3",
        description: "NVIDIA pioneered accelerated computing to tackle challenges no one else can solve. Our work in AI and digital twins is transforming the world's largest industries and profoundly impacting society.",
        twitterUrl: "",
        status: "Business Partner",
        website: "https://www.nvidia.com",
        logo: "https://www.nvidia.com/content/nvidiaGDC/us/en_US/about-nvidia/legal-info/logo-brand-identity/_jcr_content/root/responsivegrid/nv_container_1304332406/nv_container/nv_grid_16x9_cop_1909396337/nv_container/nv_container/nv_container/nv_image.coreimg.svg/1613593883220/nvidia-logo-vert-rgb-blk-for-print.svg"
      },
      {
        name: "Ocean Protocol",
        category: "Web3",
        description: "Ocean Protocol is a decentralized data exchange protocol that unlocks data for AI, connecting data providers and consumers while ensuring privacy, control and transparency.",
        twitterUrl: "",
        status: "Business Partner",
        website: "https://oceanprotocol.com",
        logo: "https://oceanprotocol.com/static/4ad704a150e411d4e8b52ee306c4aef7/45e4d/logo-ocean-protocol.webp"
      },
      {
        name: "TG0",
        category: "Hardware",
        description: "TG0 creates innovative materials and 3D-sensing technologies, transforming human-machine interaction through AI-enhanced interfaces.",
        twitterUrl: "https://x.com/NetmindAi/status/1836067861233811913",
        status: "Business Partner",
        website: "https://www.tg0.co.uk",
        logo: "https://www.tg0.co.uk/logo.png"
      },
      
      // Research Partners (Academic Institutions)
      {
        name: "University of Cambridge",
        category: "Research",
        description: "A premier global university renowned for pioneering research in artificial intelligence, mathematics, and transformative science.",
        twitterUrl: "https://x.com/NetmindAi/status/1840673084682219862",
        status: "Research Partner",
        website: "https://www.cam.ac.uk",
        logo: "https://www.cam.ac.uk/sites/www.cam.ac.uk/files/inner-images/logo.jpg"
      },
      {
        name: "King's College London",
        category: "Research",
        description: "A renowned research university with strong expertise in AI across healthcare, social sciences, and other interdisciplinary domains.",
        twitterUrl: "https://x.com/NetmindAi/status/1837112075988127771",
        status: "Research Partner",
        website: "https://www.kcl.ac.uk",
        logo: "https://www.kcl.ac.uk/SiteElements/Images/logo.svg"
      },
      {
        name: "Carnegie Mellon University",
        category: "Research",
        description: "A world-leading university in AI research, known for breakthroughs in robotics, language technologies, and machine learning.",
        twitterUrl: "https://x.com/NetmindAi/status/1823039314474975577",
        status: "Research Partner",
        website: "https://www.cmu.edu",
        logo: "https://www.cmu.edu/brand/brand-guidelines/images/wordmarklargewordmark-min.jpg"
      },
      {
        name: "University of Warwick",
        category: "Research",
        description: "A leading research university with notable contributions in AI and data science across a variety of scientific and social disciplines.",
        twitterUrl: "https://x.com/NetmindAi/status/1817959285382386069",
        status: "Research Partner",
        website: "https://warwick.ac.uk",
        logo: "https://warwick.ac.uk/fac/sci/statistics/about/logo/universitycrest.png"
      },
      {
        name: "University of Edinburgh",
        category: "Research",
        description: "A globally recognized institution in AI, with significant research in NLP, robotics, and data science.",
        twitterUrl: "https://x.com/NetmindAi/status/1771190491226493169",
        status: "Research Partner",
        website: "https://www.ed.ac.uk",
        logo: "https://www.ed.ac.uk/sites/all/themes/uoe/assets/logo.png"
      }
    ];

    // Simulate loading data
    setTimeout(() => {
      setPartners(partnersData);
      setFilteredPartners(partnersData);
      setIsLoading(false);
    }, 1500);
  }, []);

  // Blockchains data
  const blockchains = [
    {
      name: "Ethereum",
      logo: null,
      icon: <FaEthereum className="text-orange-500" size={40} />
    },
    {
      name: "Binance Smart Chain",
      logo: null,
      icon: <SiBinance className="text-orange-500" size={40} />
    },
    {
      name: "Solana",
      logo: null,
      icon: <SiSolana className="text-orange-500" size={40} />
    },
    {
      name: "Base",
      logo: null,
      icon: <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="16" fill="#0052FF"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M11.5 11.3335C11.5 9.77161 12.7582 8.5166 14.3158 8.5166H17.6842C19.2418 8.5166 20.5 9.77161 20.5 11.3335V20.6668C20.5 22.2287 19.2418 23.4837 17.6842 23.4837H14.3158C12.7582 23.4837 11.5 22.2287 11.5 20.6668V11.3335ZM17.6842 20.6668V11.3335H14.3158V20.6668H17.6842Z" fill="white"/>
      </svg>
    }
  ];

  // DEXes data
  const dexes = [
    {
      name: "PancakeSwap",
      chain: "BSC",
      type: "DEX",
      icon: <svg width="40" height="40" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="48" cy="48" r="48" fill="#FFC000"/>
        <path d="M47.36 20.86C48.36 19.39 50.59 19.39 51.58 20.86L53.23 23.32C53.75 24.1 54.69 24.55 55.69 24.45L58.79 24.05C60.55 23.86 62.03 25.35 61.84 27.11L61.44 30.2C61.33 31.2 61.78 32.15 62.57 32.67L65.02 34.31C66.49 35.31 66.49 37.54 65.02 38.53L62.57 40.17C61.78 40.69 61.33 41.63 61.44 42.64L61.84 45.73C62.03 47.49 60.54 48.97 58.79 48.78L55.69 48.38C54.69 48.27 53.75 48.73 53.23 49.51L51.58 51.96C50.59 53.44 48.36 53.44 47.36 51.96L45.71 49.51C45.2 48.73 44.25 48.27 43.25 48.38L40.16 48.78C38.4 48.97 36.92 47.49 37.1 45.73L37.5 42.64C37.61 41.64 37.16 40.69 36.37 40.17L33.92 38.53C32.45 37.54 32.45 35.3 33.92 34.31L36.37 32.67C37.16 32.15 37.61 31.2 37.5 30.2L37.1 27.11C36.91 25.35 38.4 23.87 40.16 24.05L43.25 24.45C44.25 24.56 45.2 24.1 45.71 23.32L47.36 20.86Z" fill="white"/>
        <path d="M63.06 53.47C64.05 51.99 66.28 51.99 67.28 53.47L68.92 55.92C69.44 56.7 70.39 57.16 71.39 57.05L74.48 56.65C76.24 56.46 77.72 57.95 77.54 59.7L77.14 62.8C77.03 63.8 77.48 64.75 78.27 65.26L80.72 66.91C82.19 67.9 82.19 70.13 80.72 71.13L78.27 72.77C77.48 73.29 77.03 74.23 77.14 75.24L77.54 78.33C77.73 80.09 76.24 81.57 74.48 81.38L71.39 80.98C70.39 80.87 69.44 81.33 68.92 82.11L67.28 84.56C66.28 86.04 64.05 86.04 63.06 84.56L61.41 82.11C60.89 81.33 59.95 80.87 58.95 80.98L55.85 81.38C54.09 81.57 52.61 80.09 52.8 78.33L53.2 75.24C53.31 74.23 52.86 73.29 52.07 72.77L49.62 71.13C48.15 70.13 48.15 67.9 49.62 66.91L52.07 65.26C52.86 64.75 53.31 63.8 53.2 62.8L52.8 59.7C52.61 57.95 54.1 56.46 55.85 56.65L58.95 57.05C59.95 57.16 60.89 56.7 61.41 55.92L63.06 53.47Z" fill="white"/>
        <path d="M31.65 53.47C32.65 51.99 34.88 51.99 35.87 53.47L37.52 55.92C38.04 56.7 38.98 57.16 39.98 57.05L43.08 56.65C44.84 56.46 46.32 57.95 46.13 59.7L45.73 62.8C45.62 63.8 46.08 64.75 46.86 65.26L49.31 66.91C50.79 67.9 50.79 70.13 49.31 71.13L46.86 72.77C46.08 73.29 45.62 74.23 45.73 75.24L46.13 78.33C46.32 80.09 44.84 81.57 43.08 81.38L39.98 80.98C38.98 80.87 38.04 81.33 37.52 82.11L35.87 84.56C34.88 86.04 32.65 86.04 31.65 84.56L30.01 82.11C29.49 81.33 28.54 80.87 27.54 80.98L24.45 81.38C22.69 81.57 21.21 80.09 21.39 78.33L21.79 75.24C21.9 74.23 21.45 73.29 20.66 72.77L18.21 71.13C16.74 70.13 16.74 67.9 18.21 66.91L20.66 65.26C21.45 64.75 21.9 63.8 21.79 62.8L21.39 59.7C21.21 57.95 22.69 56.46 24.45 56.65L27.54 57.05C28.54 57.16 29.49 56.7 30.01 55.92L31.65 53.47Z" fill="white"/>
      </svg>
    },
    {
      name: "Uniswap",
      chain: "Ethereum",
      type: "DEX",
      icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32.04 9.68C31.34 9.76 30.71 10.01 30.14 10.42C29.57 10.84 29.11 11.37 28.75 12.03C28.39 12.69 28.17 13.41 28.09 14.2C28.01 14.99 28.08 15.78 28.31 16.57C28.54 17.36 28.9 18.08 29.38 18.74C29.86 19.4 30.46 19.93 31.17 20.35C31.88 20.77 32.66 21.02 33.52 21.1C34.12 21.16 34.68 21.13 35.2 21.01C35.72 20.89 36.19 20.7 36.61 20.44C37.03 20.18 37.4 19.87 37.72 19.51C38.04 19.15 38.29 18.76 38.47 18.35L40 18.87C39.74 19.53 39.38 20.13 38.93 20.67C38.48 21.21 37.95 21.67 37.35 22.06C36.75 22.45 36.09 22.75 35.39 22.95C34.69 23.15 33.96 23.23 33.2 23.19C32.08 23.13 31.05 22.84 30.12 22.31C29.19 21.78 28.4 21.09 27.75 20.24C27.1 19.39 26.63 18.45 26.32 17.43C26.01 16.41 25.91 15.36 26.01 14.29C26.11 13.22 26.4 12.23 26.87 11.34C27.34 10.45 27.97 9.7 28.74 9.09C29.51 8.48 30.39 8.05 31.39 7.8C32.39 7.55 33.46 7.51 34.6 7.68L34.32 9.35C33.59 9.38 32.85 9.47 32.05 9.62L32.04 9.68Z" fill="#FF007A"/>
        <path d="M13.46 8.23C14.16 8.23 14.85 8.35 15.53 8.59C16.21 8.83 16.85 9.18 17.44 9.63C18.03 10.08 18.55 10.62 19.01 11.25C19.47 11.88 19.83 12.57 20.1 13.32L18.49 13.74C18.28 13.2 18 12.71 17.65 12.28C17.3 11.85 16.9 11.48 16.44 11.18C15.98 10.88 15.49 10.65 14.96 10.5C14.43 10.35 13.89 10.28 13.32 10.28C12.1 10.28 11.01 10.62 10.05 11.3C9.09 11.98 8.3 12.92 7.68 14.12C7.06 15.32 6.75 16.7 6.75 18.26C6.75 19.86 7.07 21.28 7.72 22.51C8.37 23.74 9.24 24.7 10.32 25.37C11.4 26.04 12.59 26.39 13.88 26.41C14.44 26.41 14.99 26.34 15.53 26.19C16.07 26.04 16.58 25.82 17.07 25.52C17.56 25.22 18.01 24.86 18.42 24.43C18.83 24 19.17 23.51 19.45 22.95L21.1 23.41C20.75 24.21 20.29 24.91 19.72 25.51C19.15 26.11 18.49 26.61 17.76 27.01C17.03 27.41 16.25 27.7 15.44 27.88C14.63 28.06 13.8 28.15 12.96 28.15C11.32 28.15 9.83 27.77 8.48 27C7.13 26.23 6.02 25.15 5.18 23.79C4.34 22.43 3.91 20.83 3.91 19.02C3.91 17.94 4.07 16.92 4.38 15.93C4.69 14.94 5.15 14.05 5.76 13.24C6.37 12.43 7.09 11.73 7.94 11.15C8.79 10.57 9.72 10.13 10.74 9.83C11.76 9.53 12.82 9.38 13.91 9.38L13.46 8.23Z" fill="#FF007A"/>
        <path d="M23.55 27.63V0.37H26.37V27.63H23.55Z" fill="#FF007A"/>
        <path d="M29.83 38.83C29.25 38.83 28.68 38.74 28.13 38.55C27.58 38.36 27.08 38.08 26.63 37.72C26.18 37.36 25.8 36.95 25.49 36.48L26.81 35.39C27.17 35.96 27.64 36.41 28.24 36.73C28.84 37.05 29.49 37.22 30.19 37.22C30.65 37.22 31.09 37.14 31.5 36.98C31.91 36.82 32.28 36.6 32.59 36.3C32.9 36 33.15 35.65 33.34 35.24C33.53 34.83 33.63 34.37 33.63 33.87V32.77H33.54C33.37 33.08 33.15 33.38 32.87 33.67C32.59 33.96 32.22 34.19 31.76 34.37C31.3 34.55 30.72 34.64 30.02 34.64C29.12 34.64 28.3 34.45 27.57 34.08C26.84 33.71 26.22 33.19 25.7 32.52C25.18 31.85 24.79 31.07 24.52 30.17C24.25 29.27 24.12 28.28 24.12 27.21C24.12 26.09 24.27 25.08 24.58 24.16C24.89 23.24 25.31 22.44 25.86 21.78C26.41 21.12 27.05 20.61 27.78 20.26C28.51 19.91 29.3 19.74 30.16 19.74C30.86 19.74 31.45 19.84 31.91 20.04C32.37 20.24 32.75 20.48 33.04 20.78C33.33 21.08 33.56 21.37 33.72 21.66H33.82V19.95H36.32V33.76C36.32 34.76 36.11 35.63 35.68 36.39C35.25 37.15 34.67 37.73 33.93 38.15C33.19 38.57 32.35 38.78 31.42 38.78C30.92 38.78 30.4 38.76 29.83 38.71V38.83ZM30.52 32.21C31.19 32.21 31.76 32.06 32.22 31.75C32.68 31.44 33.03 30.99 33.28 30.38C33.53 29.77 33.65 29.02 33.65 28.13C33.65 27.27 33.53 26.53 33.29 25.9C33.05 25.27 32.69 24.79 32.21 24.44C31.73 24.09 31.15 23.92 30.49 23.92C29.79 23.92 29.2 24.1 28.72 24.47C28.24 24.84 27.88 25.34 27.63 25.99C27.38 26.64 27.25 27.38 27.25 28.23C27.25 29.1 27.37 29.85 27.61 30.47C27.85 31.09 28.21 31.57 28.69 31.9C29.17 32.23 29.78 32.4 30.53 32.4L30.52 32.21Z" fill="#FF007A"/>
      </svg>
    },
    {
      name: "Raydium",
      chain: "Solana",
      type: "DEX",
      icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M36.6665 20.0002C36.6665 29.2049 29.2046 36.6668 19.9998 36.6668C10.7951 36.6668 3.33317 29.2049 3.33317 20.0002C3.33317 10.7954 10.7951 3.3335 19.9998 3.3335C29.2046 3.3335 36.6665 10.7954 36.6665 20.0002Z" fill="#00D1B9"/>
        <path d="M25.8787 18.3431C25.193 19.0287 24.0673 19.0287 23.3817 18.3431C22.696 17.6574 22.696 16.5317 23.3817 15.8461C24.0673 15.1604 25.193 15.1604 25.8787 15.8461C26.5643 16.5317 26.5643 17.6574 25.8787 18.3431Z" fill="white"/>
        <path d="M30.5821 22.3137C29.5195 23.3764 27.8123 23.3766 26.7495 22.3141C25.6867 21.2516 25.6865 19.5445 26.749 18.4817C27.8116 17.419 29.5187 17.4189 30.5815 18.4814C31.6443 19.5439 31.6446 21.251 30.5821 22.3137Z" fill="white"/>
        <path d="M30.0447 8.55371C30.9447 7.65371 32.3973 7.65371 33.2973 8.55371C34.1973 9.45371 34.1973 10.9063 33.2973 11.8063L23.2973 21.8063C22.3973 22.7063 20.9447 22.7063 20.0447 21.8063C19.1447 20.9063 19.1447 19.4537 20.0447 18.5537L30.0447 8.55371Z" fill="white"/>
        <path d="M17.4749 30.7325C16.8154 31.3921 15.7363 31.3921 15.0768 30.7325C14.4172 30.073 14.4172 28.9939 15.0768 28.3344L18.9093 24.5019C19.5688 23.8423 20.6479 23.8423 21.3075 24.5019C21.967 25.1614 21.967 26.2405 21.3075 26.9001L17.4749 30.7325Z" fill="white"/>
        <path d="M12.3569 25.6113C11.6979 26.2739 10.6145 26.2764 9.95186 25.6174C9.28922 24.9585 9.28676 23.8751 9.94572 23.2124L14.4967 18.6326C15.1556 17.9701 16.239 17.9676 16.9017 18.6266C17.5643 19.2856 17.5667 20.369 16.9078 21.0316L12.3569 25.6113Z" fill="white"/>
        <path d="M9.32698 16.6075C8.5139 17.4205 7.19825 17.4205 6.38517 16.6075C5.57209 15.7944 5.57209 14.4787 6.38517 13.6656L9.64095 10.4099C10.454 9.59682 11.7697 9.59682 12.5828 10.4099C13.3958 11.223 13.3958 12.5386 12.5828 13.3517L9.32698 16.6075Z" fill="white"/>
      </svg>
    },
    {
      name: "Aerodrom",
      chain: "Base",
      type: "DEX",
      icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="#FF5733"/>
        <path d="M8 20C8 13.373 13.373 8 20 8C26.627 8 32 13.373 32 20C32 26.627 26.627 32 20 32C13.373 32 8 26.627 8 20ZM22.172 14.828C21.781 14.437 21.146 14.437 20.754 14.828L17.754 17.828C17.363 18.219 17.363 18.854 17.754 19.246C18.146 19.637 18.781 19.637 19.172 19.246L21 17.414V25C21 25.552 21.448 26 22 26C22.552 26 23 25.552 23 25V17.414L24.828 19.246C25.219 19.637 25.854 19.637 26.246 19.246C26.637 18.854 26.637 18.219 26.246 17.828L23.246 14.828C22.854 14.437 22.219 14.437 21.828 14.828H22.172Z" fill="white"/>
      </svg>
    }
  ];

  // CEXes data
  const cexes = [
    {
      name: "BitMart",
      type: "CEX",
      pair: "NMT/USDT",
      icon: <svg width="40" height="40" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="512" height="512" rx="256" fill="#13BEFF"/>
        <path d="M256 112L166 166V246L256 300L346 246V166L256 112ZM226 266L196 246V206L226 186L256 206V246L226 266Z" fill="white"/>
        <path d="M286 186L256 166L226 186L256 206L286 186Z" fill="white"/>
        <path d="M166 286L226 326V286L166 246V286Z" fill="white"/>
        <path d="M256 326L316 286V246L256 286V326Z" fill="white"/>
        <path d="M346 286L286 326V366L346 326V286Z" fill="white"/>
        <path d="M226 366L256 386L286 366L256 346L226 366Z" fill="white"/>
        <path d="M226 326V366L166 326V366L226 406L256 386V346L226 326Z" fill="white"/>
        <path d="M286 326L256 346V386L286 406L346 366V326L286 326Z" fill="white"/>
      </svg>
    },
    {
      name: "Gate.io",
      type: "CEX",
      pair: "NMT/USDT",
      icon: <svg width="40" height="40" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="512" height="512" rx="256" fill="#DF0024"/>
        <path d="M108 194H404V250H108V194Z" fill="white"/>
        <path d="M108 262H404V318H108V262Z" fill="white"/>
      </svg>
    },
    {
      name: "MEXC Global",
      type: "CEX",
      pair: "NMT/USDT",
      icon: <svg width="40" height="40" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="512" height="512" rx="256" fill="#062772"/>
        <path d="M256 128L366 384H146L256 128Z" fill="#83FF8C"/>
      </svg>
    },
    {
      name: "Bitget",
      type: "CEX",
      pair: "NMT/USDT",
      icon: <svg width="40" height="40" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="512" height="512" rx="256" fill="#00F2FE"/>
        <path d="M128 192H192V320H128V192Z" fill="white"/>
        <path d="M224 128H288V320H224V128Z" fill="white"/>
        <path d="M320 224H384V320H320V224Z" fill="white"/>
      </svg>
    },
    {
      name: "XT.COM",
      type: "CEX",
      pair: "NMT/USDT",
      icon: <svg width="40" height="40" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="512" height="512" rx="256" fill="#101010"/>
        <path d="M128 216L180 128H216L164 216H128Z" fill="#0068FF"/>
        <path d="M180 216L232 128H268L216 216H180Z" fill="#0068FF"/>
        <path d="M244 216L296 128H332L280 216H244Z" fill="#0068FF"/>
        <path d="M332 216L384 128H420L368 216H332Z" fill="#0068FF"/>
        <path d="M128 296L180 384H216L164 296H128Z" fill="#0068FF"/>
        <path d="M180 296L232 384H268L216 296H180Z" fill="#0068FF"/>
        <path d="M244 296L296 384H332L280 296H244Z" fill="#0068FF"/>
        <path d="M332 296L384 384H420L368 296H332Z" fill="#0068FF"/>
      </svg>
    }
  ];

  // Filter partners by category
  const filterByCategory = (category) => {
    setActiveCategory(category);
    if (category === 'all') {
      setFilteredPartners(partners);
    } else if (category === 'Web3') {
      // Filter by category field for Web3 partners
      const filtered = partners.filter(partner => partner.category === 'Web3');
      setFilteredPartners(filtered);
    } else {
      // Filter by status field for Business and Research partners
      const filtered = partners.filter(partner => partner.status.includes(category));
      setFilteredPartners(filtered);
    }
    setCurrentPage(1);
  };

  // Handle search
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term.trim() === '') {
      filterByCategory(activeCategory);
    } else {
      const searched = partners.filter(partner => 
        partner.name.toLowerCase().includes(term.toLowerCase()) || 
        partner.description.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredPartners(searched);
    }
    setCurrentPage(1);
  };

  // Open partner modal
  const openPartnerModal = (partner) => {
    console.log("Opening modal for partner:", partner.name);
    setSelectedPartner(partner);
    setShowModal(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  // Close partner modal
  const closePartnerModal = () => {
    console.log("Closing partner modal");
    setSelectedPartner(null);
    setShowModal(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Handle image load
  const handleImageLoad = (partnerId) => {
    setImagesLoaded(prev => ({...prev, [partnerId]: true}));
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle scroll event to show/hide back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get current partners for pagination
  const indexOfLastPartner = currentPage * partnersPerPage;
  const indexOfFirstPartner = indexOfLastPartner - partnersPerPage;
  const currentPartners = filteredPartners.slice(indexOfFirstPartner, indexOfLastPartner);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="netmind-ecosystem">
      {/* Loading Bar */}
      {isLoading && (
        <div className="loading-container fixed top-0 left-0 w-full z-50">
          <div className="loading-bar"></div>
        </div>
      )}

      {/* Header */}
      <header className="bg-black">
        <div className="container mx-auto py-6 px-4 flex justify-between items-center">
          <div className="logo">
            <img src="https://www.netmind.ai/assets/netmind_white-36738add.svg" alt="NetMind Logo" className="h-8" />
          </div>
          <nav>
            <ul className="flex space-x-8">
              <li><a href="#" className="text-white hover:text-orange-500">Home</a></li>
              <li><a href="#" className="text-white hover:text-orange-500 border-b-2 border-orange-500">Ecosystem</a></li>
              <li><a href="#" className="text-white hover:text-orange-500">About</a></li>
              <li><a href="#" className="text-white hover:text-orange-500">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="overlay"></div>
        
        {/* Particle Animation Background */}
        <div className="particle-background" ref={particleRef}>
          {particles.map(particle => (
            <div 
              key={particle.id}
              className="atom"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                backgroundColor: particle.color,
                animationDelay: `${particle.delay}s`
              }}
            />
          ))}
        </div>
        
        <div className="hero-content container mx-auto py-20 px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4 fade-in">
            NetMind <span className="text-orange-500">Ecosystem</span>
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto fade-in animation-delay-300">
            Explore our growing network of partners, integrations, and exchanges 
            powering the NetMind decentralized intelligence infrastructure.
          </p>
          <div className="search-bar mx-auto fade-in animation-delay-500">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search partners..." 
                className="w-full px-6 py-3 rounded-full bg-gray-800 bg-opacity-70 text-white placeholder-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={searchTerm}
                onChange={handleSearch}
              />
              <FaSearch className="absolute right-6 top-4 text-gray-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="category-filter bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              className={`netmind-button ${activeCategory === 'all' ? 'glow-border' : 'opacity-75 hover:opacity-100'}`}
              onClick={() => filterByCategory('all')}
            >
              All Partners
            </button>
            <button 
              className={`netmind-button ${activeCategory === 'Business' ? 'glow-border' : 'opacity-75 hover:opacity-100'}`}
              onClick={() => filterByCategory('Business')}
            >
              Business Partners
            </button>
            <button 
              className={`netmind-button ${activeCategory === 'Research' ? 'glow-border' : 'opacity-75 hover:opacity-100'}`}
              onClick={() => filterByCategory('Research')}
            >
              Research Partners
            </button>
            <button 
              className={`netmind-button-secondary ${activeCategory === 'Web3' ? 'glow-border' : 'opacity-75 hover:opacity-100'}`}
              onClick={() => filterByCategory('Web3')}
            >
              Web3 Partners
            </button>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="partners-grid py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            <span className="section-heading">Partners</span>
          </h2>
          
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full spinning-icon mb-4"></div>
              <p className="text-xl text-gray-300">Loading partners...</p>
            </div>
          ) : currentPartners.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-300">No partners found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPartners.map((partner, index) => (
                <div 
                  key={index} 
                  className="partner-card rounded-lg shadow-lg overflow-hidden transition-all duration-300 cursor-pointer animate-fade-in"
                  onClick={() => openPartnerModal(partner)}
                  role="button"
                  tabIndex={0}
                  style={{animationDelay: `${(index % 3) * 100 + Math.floor(index / 3) * 150}ms`}}
                >
                  <div className="h-40 bg-gray-800 flex items-center justify-center p-4 relative">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className={`max-h-32 max-w-full transition-opacity duration-300 ${imagesLoaded[partner.name] ? 'opacity-100' : 'opacity-0'}`}
                      onLoad={() => handleImageLoad(partner.name)}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://www.netmind.ai/assets/netmind_ai_white-ca9d065a.svg";
                        handleImageLoad(partner.name);
                      }}
                    />
                    {!imagesLoaded[partner.name] && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full spinning-icon"></div>
                      </div>
                    )}
                  </div>
                  <div className="p-6 netmind-card-content">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-white">{partner.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        partner.status.includes('Research') 
                          ? 'bg-blue-100 text-blue-800' 
                          : partner.status.includes('Web3')
                            ? 'bg-purple-100 text-purple-800'
                            : 'bg-orange-100 text-orange-800'
                      }`}>
                        {partner.status}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4 line-clamp-3">{partner.description}</p>
                    <div className="flex justify-between items-center">
                      <span className={`px-3 py-1 rounded-full text-xs bg-gray-700 text-gray-200`}>
                        {partner.category || 'Partner'}
                      </span>
                      <div className="flex space-x-2">
                        {partner.website && (
                          <a href={partner.website} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white" onClick={(e) => e.stopPropagation()}>
                            <FaLink />
                          </a>
                        )}
                        {partner.twitterUrl && (
                          <a href={partner.twitterUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300" onClick={(e) => e.stopPropagation()}>
                            <FaTwitter />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Pagination */}
          {filteredPartners.length > partnersPerPage && (
            <div className="pagination flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
                >
                  <FaAngleLeft />
                </button>
                
                {/* Page numbers */}
                {Array.from({ length: Math.ceil(filteredPartners.length / partnersPerPage) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`px-4 py-2 rounded-md ${currentPage === index + 1 ? 'netmind-button' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                  >
                    {index + 1}
                  </button>
                ))}
                
                <button 
                  onClick={() => paginate(currentPage < Math.ceil(filteredPartners.length / partnersPerPage) ? currentPage + 1 : Math.ceil(filteredPartners.length / partnersPerPage))}
                  disabled={currentPage === Math.ceil(filteredPartners.length / partnersPerPage)}
                  className={`px-4 py-2 rounded-md ${currentPage === Math.ceil(filteredPartners.length / partnersPerPage) ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
                >
                  <FaAngleRight />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Web3 Integrations Section */}
      <section className="web3-integrations bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            <span className="section-heading text-white">Web3 Integrations</span>
          </h2>
          
          {/* Blockchains */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-white fade-in">Supported Blockchains</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {blockchains.map((blockchain, index) => (
                <div key={index} className="blockchain-card bg-black bg-opacity-50 rounded-lg p-6 text-center transition-all duration-300 floating" style={{animationDelay: `${index * 150}ms`}}>
                  <div className="h-24 flex items-center justify-center mb-4">
                    {blockchain.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{blockchain.name}</h3>
                </div>
              ))}
            </div>
          </div>
          
          {/* Exchanges */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-white fade-in">Exchanges</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* DEXes */}
              <div className="bg-black bg-opacity-30 rounded-lg p-6 animate-slide-in-left">
                <h4 className="text-xl font-bold mb-6 text-center text-white">Decentralized Exchanges (DEXes)</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {dexes.map((dex, index) => (
                    <div key={index} className="exchange-card bg-black bg-opacity-50 rounded-lg p-4 text-center transition-all duration-300 zoom-in" style={{animationDelay: `${index * 100}ms`}}>
                      <div className="h-16 flex items-center justify-center mb-2">
                        {dex.icon}
                      </div>
                      <h4 className="text-lg font-bold text-white mb-1">{dex.name}</h4>
                      <p className="text-xs text-gray-400">{dex.chain}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* CEXes */}
              <div className="bg-black bg-opacity-30 rounded-lg p-6 animate-slide-in-right">
                <h4 className="text-xl font-bold mb-6 text-center text-white">Centralized Exchanges (CEXes)</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cexes.map((cex, index) => (
                    <div key={index} className="exchange-card bg-black bg-opacity-50 rounded-lg p-4 text-center transition-all duration-300 zoom-in" style={{animationDelay: `${index * 100}ms`}}>
                      <div className="h-16 flex items-center justify-center mb-2">
                        {cex.icon}
                      </div>
                      <h4 className="text-lg font-bold text-white mb-1">{cex.name}</h4>
                      <p className="text-xs text-gray-400">{cex.pair}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="fade-in">
              <img src="https://www.netmind.ai/assets/netmind_white-36738add.svg" alt="NetMind Logo" className="h-8 mb-4" />
              <p className="text-gray-400">
                Decentralized intelligence for everyone. Power AI, train agents, and earn NMT through contributing idle GPUs.
              </p>
            </div>
            <div className="fade-in animation-delay-300">
              <h4 className="text-lg font-bold mb-4">Ecosystem</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Partners</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Blockchains</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Exchanges</a></li>
              </ul>
            </div>
            <div className="fade-in animation-delay-500">
              <h4 className="text-lg font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">API</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Developers</a></li>
              </ul>
            </div>
            <div className="fade-in animation-delay-700">
              <h4 className="text-lg font-bold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Discord</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Telegram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500">© 2025 NetMind. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Partner Modal */}
      {showModal && selectedPartner && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 fade-in" onClick={closePartnerModal}>
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto zoom-in" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <div className="h-20 w-20 bg-gray-100 rounded-lg flex items-center justify-center mr-4 p-2">
                    <img 
                      src={selectedPartner.logo} 
                      alt={selectedPartner.name} 
                      className={`max-h-16 max-w-16 transition-opacity duration-300 ${imagesLoaded[selectedPartner.name + "-modal"] ? 'opacity-100' : 'opacity-0'}`}
                      onLoad={() => handleImageLoad(selectedPartner.name + "-modal")}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://www.netmind.ai/assets/netmind_ai_white-ca9d065a.svg";
                        handleImageLoad(selectedPartner.name + "-modal");
                      }}
                    />
                    {!imagesLoaded[selectedPartner.name + "-modal"] && (
                      <div className="absolute flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-orange-500 border-t-transparent rounded-full spinning-icon"></div>
                      </div>
                    )}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{selectedPartner.name}</h2>
                    <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs ${
                      selectedPartner.status.includes('Research') 
                        ? 'bg-blue-100 text-blue-800' 
                        : selectedPartner.status.includes('Web3')
                          ? 'bg-purple-100 text-purple-800'
                          : 'bg-orange-100 text-orange-800'
                    }`}>
                      {selectedPartner.status}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={closePartnerModal}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
                  aria-label="Close modal"
                >
                  <FaTimes className="text-2xl" />
                </button>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">About</h3>
                <p className="text-gray-700">{selectedPartner.description}</p>
              </div>
              
              <div className="flex mb-6 space-x-4">
                {selectedPartner.website && (
                  <a 
                    href={selectedPartner.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-colors duration-300 flex items-center"
                  >
                    <FaLink className="mr-2" />
                    <span>Visit Website</span>
                  </a>
                )}
                
                {selectedPartner.twitterUrl && (
                  <a 
                    href={selectedPartner.twitterUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300 flex items-center"
                  >
                    <FaTwitter className="mr-2" />
                    <span>Twitter Announcement</span>
                  </a>
                )}
              </div>
              
              {selectedPartner.twitterUrl && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">Announcement</h3>
                  <div className="border border-gray-300 rounded-lg overflow-hidden">
                    <div className="twitter-embed p-4">
                      <p className="mb-4 text-gray-700">Twitter announcement for {selectedPartner.name}:</p>
                      <a 
                        href={selectedPartner.twitterUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline block mb-4"
                      >
                        {selectedPartner.twitterUrl}
                      </a>
                      
                      {/* Twitter Embed Fallback */}
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-2">Click below to view the full announcement:</p>
                        <a 
                          href={selectedPartner.twitterUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300 inline-flex items-center pulse-effect"
                        >
                          <FaTwitter className="mr-2" />
                          <span>View on Twitter</span>
                        </a>
                      </div>
                      
                      {/* Hidden Twitter Embed (will load if Twitter script works) */}
                      <div className="mt-4" dangerouslySetInnerHTML={{
                        __html: `
                          <blockquote class="twitter-tweet" data-theme="light">
                            <a href="${selectedPartner.twitterUrl}"></a>
                          </blockquote>
                          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                        `
                      }} />
                    </div>
                  </div>
                </div>
              )}
              
              <div className="flex justify-center">
                <button 
                  onClick={closePartnerModal}
                  className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Back to Top Button */}
      {showBackToTop && (
        <button 
          onClick={scrollToTop} 
          className="fixed right-8 bottom-8 p-4 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-110 z-40 fade-in animate-pulse"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default App;