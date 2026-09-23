import React, { useState } from 'react';
import { ABOUT_TEXTS } from '../data/companyData';
import { MapPin, HeartHandshake, Eye, CheckCircle2, Maximize2, X } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; title: string; subtitle: string } | null>(null);

  const teamMembers = [
    {
      id: 'team-1',
      src: '/assets/team/person1.jpg',
      title: 'China Operations & Sourcing',
      location: 'Hangzhou & Zhejiang',
      role: 'On-the-ground factory inspections & client liaison',
    },
    {
      id: 'team-2',
      src: '/assets/team/person2.jpg',
      title: 'University Admissions & Visas',
      location: 'Hangzhou Campus Presence',
      role: 'Direct university coordination & student support',
    },
    {
      id: 'team-3',
      src: '/assets/team/person3.jpg',
      title: 'Global Business & Logistics',
      location: 'Zhejiang & International Trade',
      role: 'Supplier verification & export logistics',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header - Ample, calm, human */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF8F5] border border-[#C59B4B]/40 text-xs font-bold text-[#0A2240] tracking-wider uppercase">
            <span>Our Journey &amp; Mission</span>
          </div>
          
          <h2 className="font-agency-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2240] tracking-tight leading-tight">
            Real People on the Ground in China
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Bridging continents through personal relationships, verified expertise, and honest on-site guidance since 2020.
          </p>
        </div>

        {/* 3 Hexagonal Ring Team / On-The-Ground Photos Side-by-Side */}
        <div className="mb-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 max-w-4xl mx-auto items-start justify-center">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id}
                className="flex flex-col items-center text-center group cursor-pointer"
                onClick={() => setSelectedPhoto(member)}
              >
                {/* Hexagonal Ring Container with Multi-Layer Metallic Borders */}
                <div className="relative w-36 h-40 sm:w-40 sm:h-46 md:w-44 md:h-50 transition-transform duration-300 group-hover:scale-105 filter drop-shadow-lg">
                  {/* Outer Hexagon Ring: Gold & Navy Gradient */}
                  <div 
                    className="w-full h-full p-[3px] bg-gradient-to-b from-[#C59B4B] via-[#0A2240] to-[#E8D4A8] transition-all duration-300 group-hover:from-[#E8D4A8] group-hover:via-[#C59B4B] group-hover:to-[#0A2240]"
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      WebkitClipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    }}
                  >
                    {/* Middle Hexagon Ring: Crisp White Separation */}
                    <div 
                      className="w-full h-full p-[2px] bg-white"
                      style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        WebkitClipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      }}
                    >
                      {/* Inner Hexagon Ring: Deep Navy Anchor */}
                      <div 
                        className="w-full h-full p-[3px] bg-[#0A2240]"
                        style={{
                          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                          WebkitClipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        }}
                      >
                        {/* Hexagonal Photo Stage */}
                        <div 
                          className="w-full h-full bg-slate-900 overflow-hidden flex items-center justify-center relative"
                          style={{
                            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                            WebkitClipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                          }}
                        >
                          <img
                            src={member.src}
                            alt={member.title}
                            referrerPolicy="no-referrer"
                            className={`w-full h-full ${index === 2 ? 'object-contain scale-105' : 'object-cover object-top'} transition-transform duration-500 group-hover:scale-110`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Quick Enlarge Icon Badge */}
                  <div className="absolute bottom-0 right-1 w-8 h-8 rounded-full bg-[#0A2240] text-white border-2 border-white flex items-center justify-center shadow-md opacity-90 group-hover:opacity-100 transition-all duration-200">
                    <Maximize2 className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>

                {/* Caption Details without heading */}
                <div className="mt-4 space-y-1 max-w-[240px]">
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                    {member.role}
                  </p>
                  <span className="text-[11px] font-bold text-[#C59B4B] uppercase tracking-wider block">
                    {member.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <span className="text-xs text-slate-500 font-medium bg-[#FAF8F5] px-4 py-1.5 rounded-full border border-[#E8E2D5] inline-block shadow-2xs">
              Click any photo to view in full resolution
            </span>
          </div>
        </div>

        {/* Narrative Box with Warm Styling and Sculpted Non-Sharp Corners */}
        <div className="bg-[#FAF8F5] rounded-tl-[36px] rounded-br-[36px] rounded-tr-2xl rounded-bl-2xl p-6 sm:p-10 border border-[#C59B4B]/30 shadow-sm space-y-8">
          
          <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-[1.75] font-normal">
            <p>
              <strong className="text-[#0A2240] font-bold">Founded in 2020 in Hangzhou</strong>, A'S Worldwide Services was created out of a simple, fundamental reality: navigating China's vast and complex landscape requires more than paperwork—it requires trusted people, honest guidance, and local knowledge that goes beyond the surface.
            </p>

            <p>
              {ABOUT_TEXTS.paragraph2}
            </p>
          </div>

          {/* 3 Real Human Commitments */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#E8E2D5]">
            <div className="space-y-2">
              <div className="w-11 h-11 rounded-tl-2xl rounded-br-2xl rounded-tr-lg rounded-bl-lg bg-white border border-[#C59B4B] text-[#C59B4B] flex items-center justify-center shadow-2xs">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#0A2240] text-base font-agency-display">
                Physically Located in Hangzhou
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-[1.6]">
                Just hours away from Yiwu, Ningbo, Shanghai, and Zhejiang's top universities. We personally visit campuses and factories.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-11 h-11 rounded-tl-2xl rounded-br-2xl rounded-tr-lg rounded-bl-lg bg-white border border-[#0A2240] text-[#0A2240] flex items-center justify-center shadow-2xs">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#0A2240] text-base font-agency-display">
                Total Transparency
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-[1.6]">
                No surprises or hidden fees. We send real-time photos, video inspections, and verified paperwork directly to you via WhatsApp.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-11 h-11 rounded-tl-2xl rounded-br-2xl rounded-tr-lg rounded-bl-lg bg-white border border-[#1E7E34] text-[#1E7E34] flex items-center justify-center shadow-2xs">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#0A2240] text-base font-agency-display">
                Personalized Care
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-[1.6]">
                Whether meeting an arriving student at the airport or checking custom export packaging, we treat your journey like our own.
              </p>
            </div>
          </div>

{/* Corporate Leadership Sub-Section */}
          <div className="pt-10 mt-10 border-t border-[#E8E2D5]">
            <h3 className="font-agency-serif text-2xl sm:text-3xl font-bold text-[#0A2240] text-center mb-10">
              Corporate Leadership
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* CEO Card */}
              <div className="bg-white rounded-2xl border border-[#E8E2D5] p-6 shadow-sm flex items-center gap-6">
                <img
                  src="https://drive.google.com/uc?export=view&id=1Zf3nsrFT5oufwfm3rrAvx9AWGS1HSvi0"
                  alt="Mr. LOMBE ANDREW - CEO"
                  className="w-24 h-24 rounded-full object-cover border border-[#E8E2D5]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-[#0A2240] text-lg">Mr. LOMBE ANDREW</h4>
                  <p className="text-[#C59B4B] font-medium text-sm">Chief Executive Officer (CEO)</p>
                </div>
              </div>
              {/* COO Card */}
              <div className="bg-white rounded-2xl border border-[#E8E2D5] p-6 shadow-sm flex items-center gap-6">
                <img
                  src="https://drive.google.com/uc?export=view&id=1OD6mvdvkD1q8eJCA9D80NcR95YPVKbyR"
                  alt="Miss KIRABO KIGGUNDU NANTONGO - COO"
                  className="w-24 h-24 rounded-full object-cover border border-[#E8E2D5]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-[#0A2240] text-lg">Miss KIRABO KIGGUNDU NANTONGO</h4>
                  <p className="text-[#C59B4B] font-medium text-sm">Chief Operating Officer (COO)</p>
                </div>
              </div>
            </div>
          </div>



{/* Card 4: CEO */}
                <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
                  <div className="aspect-[4/5] overflow-hidden bg-slate-50 relative border-b border-slate-100">
                    <img 
                      src="https://lh3.googleusercontent.comd/1AVYItxK2d2eV9TuntzmCu72k5jRFK7P9" 
                      alt="Mr. LOMBE ANDREW" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-center">
                    <div className="space-y-1.5">
                      <h5 className="font-display font-black text-slate-900 text-base md:text-lg leading-snug group-hover:text-[#0047ab] transition-colors duration-200">
                        Mr.LOMBE ANDREW 
                      </h5>
                      <p className="text-xs md:text-sm font-bold text-[#0047ab] dark:text-blue-400">
                        CEO
                      </p>
                    </div>
                  </div>
                </div>



          






















          

        </div>

      </div>

      {/* Full Resolution Photo Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border-2 border-[#C59B4B] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D5] mb-3">
              <div>
                <h4 className="font-agency-serif font-bold text-[#0A2240] text-base">
                  {selectedPhoto.title}
                </h4>
                <p className="text-xs text-slate-500">{selectedPhoto.location}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0A2240] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="w-full max-h-[70vh] flex items-center justify-center overflow-hidden rounded-xl bg-slate-100">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="pt-3 mt-2 text-center text-xs text-slate-600">
              A'S Worldwide Services • Real people on the ground in Hangzhou, China
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
