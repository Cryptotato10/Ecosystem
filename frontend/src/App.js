import React, { useState, useEffect } from 'react';
import { FaSearch, FaTimes, FaTwitter, FaLink, FaEthereum } from 'react-icons/fa';
import { SiSolana, SiBinance } from 'react-icons/si';
import './App.css';

function App() {
  const [partners, setPartners] = useState([]);
  const [filteredPartners, setFilteredPartners] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Partners data
  useEffect(() => {
    const partnersData = [
      {
        name: "Rivalz Network",
        category: "Web3",
        description: "Rivalz is a Web3-centric platform offering cross-chain tools and liquidity solutions, empowering users to seamlessly access yield, staking, and other decentralized finance (DeFi) features across multiple blockchain ecosystems",
        twitterUrl: "https://x.com/NetmindAi/status/1864058215702679851",
        status: "Official Partner",
        logo: "https://via.placeholder.com/150"
      },
      {
        name: "Greenfield",
        category: "Web3",
        description: "Greenfield (BNB Greenfield) is a decentralized data storage solution on the BNB Chain, designed to empower users with ownership and monetization of their data through smart contract–based mechanisms.",
        twitterUrl: "https://x.com/NetmindAi/status/1869338444876714198",
        status: "Official Partner",
        logo: "https://via.placeholder.com/150"
      },
      {
        name: "GAIB",
        category: "Web3",
        description: "GAIB provides high-performance computing and AI infrastructure, enabling scalable machine learning for complex industry applications.",
        twitterUrl: "",
        status: "Official Partner",
        logo: "https://via.placeholder.com/150"
      },
      {
        name: "PinlinkAI",
        category: "Web3",
        description: "PinlinkAI develops secure, AI-driven networking solutions for IoT and enterprise environments, ensuring seamless data flow across devices.",
        twitterUrl: "https://x.com/NetmindAi/status/1862595429038268917",
        status: "Official Partner",
        logo: "https://via.placeholder.com/150"
      },
      {
        name: "AGI Odysey",
        category: "Web2",
        description: "AGI Odysey explores advanced AI concepts and research, especially around artificial general intelligence and cognitive computing.",
        twitterUrl: "https://x.com/AGI_Odyssey/status/1862525515317260430",
        status: "Official Partner",
        logo: "https://via.placeholder.com/150"
      },
      {
        name: "aelfblockchain",
        category: "Web3",
        description: "aelfblockchain offers a scalable, decentralized computing network for enterprise blockchain solutions.",
        twitterUrl: "https://x.com/NetmindAi/status/1859990274338132162",
        status: "Official Partner",
        logo: "https://via.placeholder.com/150"
      },
      {
        name: "Haiper AI",
        category: "AI",
        description: "Haiper AI drives digital transformation with specialized AI software, helping companies streamline workflows and unlock new efficiencies.",
        twitterUrl: "https://x.com/NetmindAi/status/1857504053346840879",
        status: "Official Partner",
        logo: "https://via.placeholder.com/150"
      },
      {
        name: "ParallelAI",
        category: "Web3",
        description: "ParallelAI specializes in frameworks for massively parallel data processing, enabling faster model training and inference at scale.",
        twitterUrl: "https://x.com/NetmindAi/status/1849459457870213336",
        status: "Official Partner",
        logo: "https://via.placeholder.com/150"
      },
      {
        name: "Love AI",
        category: "Web3",
        description: "Love AI focuses on AI for mental well-being, creating solutions that promote emotional health and empathetic user interactions.",
        twitterUrl: "https://x.com/NetmindAi/status/1843320411611947066",
        status: "Official Partner",
        logo: "https://via.placeholder.com/150"
      },
      {
        name: "Cambridge University",
        category: "Web2",
        description: "A premier global university renowned for pioneering research in artificial intelligence, mathematics, and transformative science.",
        twitterUrl: "https://x.com/NetmindAi/status/1840673084682219862",
        status: "Official Partner (College)",
        logo: "https://via.placeholder.com/150"
      },
      {
        name: "King's College London",
        category: "Web2",
        description: "A renowned research university with strong expertise in AI across healthcare, social sciences, and other interdisciplinary domains.",
        twitterUrl: "https://x.com/NetmindAi/status/1837112075988127771",
        status: "Official Partner (College)",
        logo: "https://via.placeholder.com/150"
      },
      {
        name: "TG0",
        category: "Web2",
        description: "TG0 creates innovative materials and 3D-sensing technologies, transforming human-machine interaction through AI-enhanced interfaces.",
        twitterUrl: "https://x.com/NetmindAi/status/1836067861233811913",
        status: "Official Partner",
        logo: "https://via.placeholder.com/150"
      },
      {
        name: "FrogPay AI",
        category: "Web3",
        description: "FrogPay AI offers intelligent fintech and payment processing solutions, emphasizing fraud detection and seamless transaction flows.",
        twitterUrl: "https://x.com/NetmindAi/status/1826597652705751263",
        status: "Official Partner",
        logo: "https://via.placeholder.com/150"
      },
      {
        name: "AI Society Labs",
        category: "AI",
        description: "AI Society Labs investigates the societal impacts of artificial intelligence, shaping ethical frameworks and responsible technology policies.",
        twitterUrl: "https://x.com/NetmindAi/status/1825883143364018240",
        status: "Official Partner",
        logo: "https://via.placeholder.com/150"
      },
      {
        name: "DWF Labs",
        category: "Web3",
        description: "DWF Labs is a prominent Web3 market maker and investment firm, providing liquidity and strategic support for blockchain ecosystems.",
        twitterUrl: "https://x.com/NetmindAi/status/1824539869764546717",
        status: "Official Partner",
        logo: "https://via.placeholder.com/150"
      },
      {
        name: "IO Net",
        category: "Web3",
        description: "IO Net delivers advanced networking solutions, leveraging AI to optimize bandwidth usage and connectivity in decentralized computing setups.",
        twitterUrl: "https://x.com/NetmindAi/status/1823348947542216707",
        status: "Official Partner",
        logo: "https://via.placeholder.com/150"
      },
      {
        name: "Carnegie Mellon University",
        category: "Web2",
        description: "A world-leading university in AI research, known for breakthroughs in robotics, language technologies, and machine learning.",
        twitterUrl: "https://x.com/NetmindAi/status/1823039314474975577",
        status: "Official Partner (College)",
        logo: "https://via.placeholder.com/150"
      },
      {
        name: "Quantstamp",
        category: "Web3",
        description: "Quantstamp secures blockchain projects through automated and manual smart contract audits, ensuring the integrity of codebases.",
        twitterUrl: "https://x.com/NetmindAi/status/1821910450952401198",
        status: "Official Partner (audit)",
        logo: "https://via.placeholder.com/150"
      },
      {
        name: "Marlin Protocol",
        category: "Web3",
        description: "Marlin Protocol improves network performance for blockchains, aiming to minimize latency and maximize throughput in decentralized environments.",
        twitterUrl: "https://x.com/NetmindAi/status/1820430972653031740",
        status: "Official Partner",
        logo: "https://via.placeholder.com/150"
      },
      {
        name: "Neurochain AI",
        category: "Web3",
        description: "Neurochain AI reimagines blockchain consensus with intelligent, adaptive protocols that enhance efficiency and security.",
        twitterUrl: "https://x.com/NetmindAi/status/1818634489737744808",
        status: "Official Partner",
        logo: "https://via.placeholder.com/150"
      },
      {
        name: "The University of Warwick",
        category: "Web2",
        description: "A leading research university with notable contributions in AI and data science across a variety of scientific and social disciplines.",
        twitterUrl: "https://x.com/NetmindAi/status/1817959285382386069",
        status: "Official Partner (College)",
        logo: "https://via.placeholder.com/150"
      },
      {
        name: "Solder AI",
        category: "AI",
        description: "Solder AI integrates AI functionality at the hardware level, producing efficient chips for real-time analytics and inference.",
        twitterUrl: "https://x.com/NetmindAi/status/1815752772165197869",
        status: "Official Partner",
        logo: "https://via.placeholder.com/150"
      },
      {
        name: "zkHive",
        category: "Web3",
        description: "zkHive pioneers zero-knowledge proof solutions combined with AI to enhance privacy, security, and scalability on blockchain platforms.",
        twitterUrl: "https://x.com/NetmindAi/status/1775863797896626296",
        status: "Official Partner",
        logo: "https://via.placeholder.com/150"
      },
      {
        name: "The University of Edinburgh",
        category: "Web2",
        description: "A globally recognized institution in AI, with significant research in NLP, robotics, and data science.",
        twitterUrl: "https://x.com/NetmindAi/status/1771190491226493169",
        status: "Official Partner (College)",
        logo: "https://via.placeholder.com/150"
      },
      {
        name: "Tria",
        category: "Web3",
        description: "Tria is a conversation intelligence platform that records, transcribes, and analyzes meetings, turning them into searchable, shareable knowledge.",
        twitterUrl: "https://x.com/NetmindAi/status/1863946395155349862",
        status: "Official Partner",
        logo: "https://via.placeholder.com/150"
      },
      {
        name: "0G (Zero Gravity)",
        category: "Web3",
        description: "0G is building next-generation AI tools and platforms, focusing on real-time analytics, generative models, and decentralized innovation.",
        twitterUrl: "https://x.com/0G_labs/status/1868968449399206119",
        status: "Official Partner",
        logo: "https://via.placeholder.com/150"
      }
    ];

    setPartners(partnersData);
    setFilteredPartners(partnersData);
  }, []);

  // Blockchains data
  const blockchains = [
    {
      name: "Ethereum",
      logo: "https://images.unsplash.com/photo-1651221436727-28b9c922db97",
      icon: <FaEthereum />
    },
    {
      name: "Binance Smart Chain",
      logo: "https://images.unsplash.com/photo-1670269069776-a1337c703669",
      icon: <SiBinance />
    },
    {
      name: "Solana",
      logo: "https://images.unsplash.com/photo-1666816943145-bac390ca866c",
      icon: <SiSolana />
    },
    {
      name: "Base",
      logo: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74",
      icon: null
    }
  ];

  // DEXes data
  const dexes = [
    {
      name: "PancakeSwap",
      logo: "https://camo.githubusercontent.com/566fba2131500bc8cb451c802d1eb8203a8b1477e090e46ab2eab88cf9b58bc6/68747470733a2f2f70616e63616b65737761702e66696e616e63652f6c6f676f2e706e67",
      type: "DEX",
      chain: "BSC"
    },
    {
      name: "Uniswap",
      logo: "https://repository-images.githubusercontent.com/108706901/c4deeb80-9c03-11ea-846b-0921bd7dc3ba",
      type: "DEX",
      chain: "Ethereum"
    },
    {
      name: "Raydium",
      logo: "https://avatars.githubusercontent.com/u/78411976?s=200&v=4",
      type: "DEX",
      chain: "Solana"
    },
    {
      name: "Aerodrom",
      logo: "https://avatars.githubusercontent.com/u/139490796?s=200&v=4",
      type: "DEX",
      chain: "Base"
    }
  ];

  // CEXes data
  const cexes = [
    {
      name: "BitMart",
      logo: "https://via.placeholder.com/150",
      type: "CEX",
      pair: "NMT/USDT"
    },
    {
      name: "Gate.io",
      logo: "https://via.placeholder.com/150",
      type: "CEX",
      pair: "NMT/USDT"
    },
    {
      name: "MEXC Global",
      logo: "https://via.placeholder.com/150",
      type: "CEX",
      pair: "NMT/USDT"
    },
    {
      name: "Bitget",
      logo: "https://via.placeholder.com/150",
      type: "CEX",
      pair: "NMT/USDT"
    },
    {
      name: "XT.COM",
      logo: "https://via.placeholder.com/150",
      type: "CEX",
      pair: "NMT/USDT"
    }
  ];

  // Filter partners by category
  const filterByCategory = (category) => {
    setActiveCategory(category);
    if (category === 'all') {
      setFilteredPartners(partners);
    } else {
      const filtered = partners.filter(partner => {
        if (category === 'college') {
          return partner.status.includes('College');
        } else {
          return partner.category === category;
        }
      });
      setFilteredPartners(filtered);
    }
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
  };

  // Open partner modal
  const openPartnerModal = (partner) => {
    setSelectedPartner(partner);
    setShowModal(true);
  };

  // Close partner modal
  const closePartnerModal = () => {
    setSelectedPartner(null);
    setShowModal(false);
  };

  return (
    <div className="netmind-ecosystem">
      {/* Header */}
      <header className="bg-black">
        <div className="container mx-auto py-6 flex justify-between items-center">
          <div className="logo">
            <h1 className="text-white text-3xl font-bold">
              <span className="text-orange-500">Net</span>Mind
            </h1>
          </div>
          <nav>
            <ul className="flex space-x-8">
              <li><a href="#" className="text-white hover:text-orange-500">Home</a></li>
              <li><a href="#" className="text-white hover:text-orange-500">Ecosystem</a></li>
              <li><a href="#" className="text-white hover:text-orange-500">About</a></li>
              <li><a href="#" className="text-white hover:text-orange-500">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="overlay"></div>
        <div className="hero-content container mx-auto py-20 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            NetMind <span className="text-orange-500">Ecosystem</span>
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Explore the growing network of partners, blockchains, and exchanges 
            powering the NetMind decentralized intelligence infrastructure.
          </p>
          <div className="search-bar mx-auto">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search partners..." 
                className="w-full px-6 py-3 rounded-full bg-white bg-opacity-20 text-white placeholder-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
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
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              className={`px-6 py-2 rounded-full ${activeCategory === 'all' ? 'bg-orange-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
              onClick={() => filterByCategory('all')}
            >
              All Partners
            </button>
            <button 
              className={`px-6 py-2 rounded-full ${activeCategory === 'Web3' ? 'bg-orange-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
              onClick={() => filterByCategory('Web3')}
            >
              Web3
            </button>
            <button 
              className={`px-6 py-2 rounded-full ${activeCategory === 'Web2' ? 'bg-orange-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
              onClick={() => filterByCategory('Web2')}
            >
              Web2
            </button>
            <button 
              className={`px-6 py-2 rounded-full ${activeCategory === 'AI' ? 'bg-orange-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
              onClick={() => filterByCategory('AI')}
            >
              AI
            </button>
            <button 
              className={`px-6 py-2 rounded-full ${activeCategory === 'college' ? 'bg-orange-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
              onClick={() => filterByCategory('college')}
            >
              Academic Partners
            </button>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="partners-grid bg-gray-100 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="border-b-4 border-orange-500 pb-2">Official Partners</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPartners.map((partner, index) => (
              <div 
                key={index} 
                className="partner-card bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => openPartnerModal(partner)}
              >
                <div className="h-40 bg-gray-200 flex items-center justify-center">
                  <img src={partner.logo} alt={partner.name} className="max-h-32" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">{partner.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs ${partner.status.includes('College') ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'}`}>
                      {partner.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">{partner.description}</p>
                  <div className="flex justify-between items-center">
                    <span className={`px-3 py-1 rounded-full text-xs bg-gray-200 text-gray-700`}>
                      {partner.category || 'Partner'}
                    </span>
                    {partner.twitterUrl && (
                      <a href={partner.twitterUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700" onClick={(e) => e.stopPropagation()}>
                        <FaTwitter />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blockchains Section */}
      <section className="blockchains-section bg-gray-900 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            <span className="border-b-4 border-orange-500 pb-2">Integrated Blockchains</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blockchains.map((blockchain, index) => (
              <div key={index} className="blockchain-card bg-black bg-opacity-50 rounded-lg p-6 text-center">
                <div className="h-32 flex items-center justify-center mb-4">
                  <img src={blockchain.logo} alt={blockchain.name} className="max-h-24 rounded-lg" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{blockchain.name}</h3>
                <div className="text-3xl text-orange-500 mt-2">
                  {blockchain.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exchanges Section */}
      <section className="exchanges-section bg-white py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="border-b-4 border-orange-500 pb-2">Exchanges</span>
          </h2>
          
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Decentralized Exchanges (DEXes)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {dexes.map((dex, index) => (
                <div key={index} className="exchange-card bg-gray-100 rounded-lg p-6 text-center shadow-md">
                  <div className="h-24 flex items-center justify-center mb-4">
                    <img src={dex.logo} alt={dex.name} className="max-h-20" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{dex.name}</h4>
                  <p className="text-sm text-gray-600">{dex.chain}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Centralized Exchanges (CEXes)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {cexes.map((cex, index) => (
                <div key={index} className="exchange-card bg-gray-100 rounded-lg p-4 text-center shadow-md">
                  <div className="h-16 flex items-center justify-center mb-2">
                    <img src={cex.logo} alt={cex.name} className="max-h-14" />
                  </div>
                  <h4 className="text-lg font-bold mb-1">{cex.name}</h4>
                  <p className="text-xs text-gray-600">{cex.pair}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest Integrations */}
      <section className="latest-integrations bg-gray-100 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="border-b-4 border-orange-500 pb-2">Latest Integrations</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.slice(0, 3).map((partner, index) => (
              <div 
                key={index} 
                className="partner-card bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => openPartnerModal(partner)}
              >
                <div className="h-40 bg-gray-200 flex items-center justify-center">
                  <img src={partner.logo} alt={partner.name} className="max-h-32" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">{partner.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs ${partner.status.includes('College') ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'}`}>
                      {partner.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">{partner.description}</p>
                  <div className="flex justify-between items-center">
                    <span className={`px-3 py-1 rounded-full text-xs bg-gray-200 text-gray-700`}>
                      {partner.category || 'Partner'}
                    </span>
                    {partner.twitterUrl && (
                      <a href={partner.twitterUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700" onClick={(e) => e.stopPropagation()}>
                        <FaTwitter />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span className="text-orange-500">Net</span>Mind
              </h3>
              <p className="text-gray-400">
                Decentralized intelligence for everyone. Power AI, train agents, and earn NMT through contributing idle GPUs.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Ecosystem</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-orange-500">Partners</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500">Blockchains</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500">Exchanges</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-orange-500">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500">API</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500">Developers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-orange-500">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500">Discord</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500">Telegram</a></li>
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
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <div className="h-20 w-20 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
                    <img src={selectedPartner.logo} alt={selectedPartner.name} className="max-h-16 max-w-16" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{selectedPartner.name}</h2>
                    <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs ${selectedPartner.status.includes('College') ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'}`}>
                      {selectedPartner.status}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={closePartnerModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaTimes className="text-2xl" />
                </button>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">About</h3>
                <p className="text-gray-700">{selectedPartner.description}</p>
              </div>
              
              {selectedPartner.twitterUrl && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">Announcement</h3>
                  <a 
                    href={selectedPartner.twitterUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-4 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center text-blue-500 mb-2">
                      <FaTwitter className="mr-2" />
                      <span>View Announcement on Twitter</span>
                    </div>
                    <p className="text-gray-600 text-sm">{selectedPartner.twitterUrl}</p>
                  </a>
                </div>
              )}
              
              <div className="flex justify-center">
                <button 
                  onClick={closePartnerModal}
                  className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;