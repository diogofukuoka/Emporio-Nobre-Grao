/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'motion/react';
import { Leaf, MapPin, ShoppingBag, HeartHandshake, CheckCircle2 } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-accent/30 text-white font-sans overflow-x-hidden">
      
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 glass-header transition-all duration-300 py-4 px-6 md:px-12 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-[20px] tracking-[2px] uppercase font-light"
        >
          <span className="text-brand-accent pr-1">Nobre</span>Grão.
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button className="border border-brand-accent px-[24px] py-[10px] text-[11px] uppercase tracking-[1px] text-brand-accent hover:bg-brand-accent hover:text-brand-dark transition-all duration-300">
            Acessar Loja
          </button>
        </motion.div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image & Gradient Masks Optimized for LCP < 1.2s */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1615486171448-4fdab34e5cb4?q=80&w=2070&auto=format&fit=crop" 
            alt="Produtos Naturais e Grãos" 
            className="w-full h-full object-cover opacity-40 scale-105"
            referrerPolicy="no-referrer"
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-transparent to-transparent md:w-2/3" />
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] border border-white/20 glass-card mb-6"
            >
              <Leaf className="w-4 h-4 text-brand-accent" />
              <span className="text-xs font-semibold tracking-widest uppercase text-white/80">Saúde & Bem-Estar</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-serif text-5xl md:text-[82px] leading-[0.9] font-normal tracking-[-2px] mb-6"
            >
              A vida <span className="text-brand-accent">nutrida</span><br />
              pela natureza.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-[18px] text-white/70 mb-10 max-w-[480px] font-normal leading-[1.6]"
            >
              Descubra o Empório Nobre Grão. A mais completa seleção de produtos a granel, chás e suplementos em Curitiba. Qualidade premium e atendimento acolhedor.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-brand-accent text-black px-[24px] py-[10px] text-[11px] uppercase tracking-[1px] font-bold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 border-none">
                <ShoppingBag className="w-4 h-4" />
                Explorar Produtos
              </button>
              <button className="px-[24px] py-[10px] text-[11px] uppercase tracking-[1px] text-white hover:border-brand-accent hover:text-brand-accent transition-colors duration-300 flex items-center justify-center gap-2 border border-white/30 rounded-[2px]">
                <MapPin className="w-4 h-4 opacity-70" />
                Loja Física: Bom Retiro
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AUTHORITY MARQUEE */}
      <div className="w-full glass-header py-4 relative z-20 border-y border-white/5 overflow-hidden flex bg-brand-panel/30">
        <motion.div 
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex whitespace-nowrap gap-12 sm:gap-24 items-center"
        >
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase font-normal text-white/30">
                <Leaf className="w-4 h-4 text-brand-sage" />
                Produtos Frescos
              </div>
              <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase font-normal text-white/30">
                <HeartHandshake className="w-4 h-4 text-brand-sage" />
                Atendimento Humanizado
              </div>
              <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase font-normal text-white/30">
                <CheckCircle2 className="w-4 h-4 text-brand-sage" />
                Qualidade Certificada
              </div>
              <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase font-normal text-white/30">
                <MapPin className="w-4 h-4 text-brand-sage" />
                Curitiba & Online
              </div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* DIFFERENTIALS - BENTO GRID */}
      <section className="py-24 md:py-32 px-6 md:px-12 container mx-auto relative">
        <FadeIn className="mb-16">
          <h2 className="font-serif text-[42px] leading-[0.9] tracking-[-1px] text-center font-normal">Nosso Padrão <span className="text-brand-accent">Nobre</span></h2>
          <p className="text-center text-white/70 mt-4 max-w-[480px] mx-auto text-[18px] leading-[1.6]">Uma curadoria exigente para garantir que o melhor da natureza chegue até a sua mesa.</p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Card 1 - Span 2 */}
          <FadeIn delay={0.1} className="md:col-span-2 group relative rounded-[2px] overflow-hidden glass-card p-[24px] flex flex-col justify-end">
            <img 
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop" 
              alt="Grãos a granel" 
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <span className="text-brand-accent text-[11px] tracking-[1.5px] uppercase mb-1 block">Variedade Ampliada</span>
              <h3 className="text-[14px] uppercase tracking-[1.5px] text-brand-accent mb-2">Grãos, Sementes e Temperos</h3>
              <p className="text-[12px] text-white/50 leading-[1.4] max-w-md">Dobramos nosso mix original para oferecer absolutamente tudo que sua dieta pede, sempre a granel e sempre fresco.</p>
            </div>
          </FadeIn>

          {/* Card 2 - Span 1 */}
          <FadeIn delay={0.2} className="relative rounded-[2px] overflow-hidden glass-card p-[24px] flex flex-col justify-end bg-gradient-to-br from-[#1a1c18] to-brand-panel">
            <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
              <CheckCircle2 className="w-6 h-6 text-brand-sage" />
            </div>
            <h3 className="text-[14px] uppercase tracking-[1.5px] text-brand-accent mb-2">Qualidade Inegociável</h3>
            <p className="text-[12px] text-white/50 leading-[1.4]">Selecionamos fornecedores com rigor absoluto. O frescor dos nossos produtos naturais é reconhecido e elogiado por nossa clientela fiel.</p>
          </FadeIn>

          {/* Card 3 - Span 1 */}
          <FadeIn delay={0.1} className="relative rounded-[2px] overflow-hidden glass-card p-[24px] flex flex-col justify-end">
            <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
              <HeartHandshake className="w-6 h-6 text-brand-accent" />
            </div>
            <h3 className="text-[14px] uppercase tracking-[1.5px] text-brand-accent mb-2">Atendimento Humanizado</h3>
            <p className="text-[12px] text-white/50 leading-[1.4]">Não apenas vendemos produtos, nós entendemos suas necessidades. Uma escuta ativa e cuidadosa para apoiar sua jornada de saúde.</p>
          </FadeIn>

          {/* Card 4 - Span 2 */}
          <FadeIn delay={0.2} className="md:col-span-2 relative rounded-[2px] overflow-hidden glass-card p-[24px] flex flex-col justify-end group">
             <img 
              src="https://images.unsplash.com/photo-1647427017066-5ccfa01e613b?q=80&w=2070&auto=format&fit=crop" 
              alt="Chás e Suplementos" 
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent pointer-events-none" />
            <div className="relative z-10 max-w-lg">
              <span className="text-brand-accent text-[11px] tracking-[1.5px] uppercase mb-1 block">Rotina Equilibrada</span>
              <h3 className="text-[14px] uppercase tracking-[1.5px] text-brand-accent mb-2">Chás e Encapsulados</h3>
              <p className="text-[12px] text-white/50 leading-[1.4]">Das ervas mais puras para o seu momento de relaxamento até os suplementos essenciais encapsulados para a sua performance e longevidade.</p>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* AEO (ANSWER ENGINE OPTIMIZATION) SECTION */}
      <section className="py-24 relative overflow-hidden bg-brand-panel/30 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn className="mb-16">
            <h2 className="font-serif text-[42px] leading-[0.9] tracking-[-1px] text-center font-normal">
              Respondendo às <span className="text-brand-accent">Buscas Semânticas</span>
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <FadeIn delay={0.1}>
              <h3 className="text-brand-accent text-[14px] uppercase tracking-[1px] mb-3">O que é o Empório Nobre Grão?</h3>
              <p className="text-white/70 text-[16px] leading-[1.6] font-light">
                O Empório Nobre Grão é uma loja especializa em alimentação saudável localizada no Bom Retiro, em Curitiba. Desde 2021, fornecemos uma curadoria premium de produtos a granel, ervas exclusivas para chás e suplementos encapsulados de alta performance para quem busca qualidade de vida e nutrição equilibrada diária.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h3 className="text-brand-accent text-[14px] uppercase tracking-[1px] mb-3">Por que comprar nossos produtos a granel?</h3>
              <p className="text-white/70 text-[16px] leading-[1.6] font-light">
                Nossos produtos a granel garantem frescor absoluto e qualidade inegociável que supermercados tradicionais não oferecem. Trabalhamos estritamente com fornecedores rigorosamente selecionados e alto giro de estoque, assegurando que sementes, oleaginosas e temperos cheguem à sua mesa com máximo sabor e seu valor nutricional totalmente preservados.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h3 className="text-brand-accent text-[14px] uppercase tracking-[1px] mb-3">Como funciona o atendimento humanizado?</h3>
              <p className="text-white/70 text-[16px] leading-[1.6] font-light">
                Nosso atendimento humanizado baseia-se puramente na escuta ativa e na consultoria personalizada de bem-estar. Não empurramos produtos; nossa equipe dedicada busca entender suas dores e objetivos de saúde (como digestão, foco, energia ou imunidade) para recomendar corretamente o blend de chás ou a suplementação mais adequada.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <h3 className="text-brand-accent text-[14px] uppercase tracking-[1px] mb-3">Onde encontrar nossos suplementos?</h3>
              <p className="text-white/70 text-[16px] leading-[1.6] font-light">
                Você pode encontrar nossa linha completa de suplementos naturais, chás e granel de extrema qualidade em nossa loja física na Av. Desembargador Hugo Simas, 2818, em Curitiba. Adicionalmente, disponibilizamos nosso catálogo atualizado em nossa plataforma de webloja online, efetuando entregas rápidas e perfeitamente embaladas.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ABOUT / SOCIAL PROOF */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
          <FadeIn className="lg:w-1/2">
            <h2 className="font-serif text-5xl md:text-[64px] leading-[0.9] tracking-[-1px] font-normal mb-6">
              Compartilhando saúde com <span className="text-brand-accent">amor</span> desde 2021.
            </h2>
            <div className="space-y-6 text-[18px] text-white/70 font-normal leading-[1.6]">
              <p>Nascemos de uma paixão por estilo de vida saudável e pelo poder da nutrição natural. Nossa empresa familiar se dedica diariamente a ser mais do que uma loja: queremos ser seus parceiros na busca pela qualidade de vida.</p>
              <p>Venha nos visitar em nossa loja física em Curitiba, no bairro Bom Retiro, ou receba nosso carinho diretamente em sua casa através de nossa webloja.</p>
            </div>
          </FadeIn>
          
          <div className="lg:w-1/2 w-full space-y-6">
             <FadeIn delay={0.2} className="glass-card p-[24px] rounded-[2px] ml-0 lg:ml-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <span className="font-serif text-8xl">"</span>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-dark rounded-full"></div>
                  <div>
                    <h4 className="font-medium text-white">Cliente Verificado</h4>
                    <div className="flex gap-1 text-brand-accent">
                      ★★★★★
                    </div>
                  </div>
                </div>
                <p className="text-white/80 font-light italic leading-relaxed">
                  "Excelente atendimento! Fui procurar ajuda para melhorar minha digestão e fui tratada com tanto cuidado. Os produtos são super fresquinhos e a variedade é incrível. Recomendo de olhos fechados."
                </p>
             </FadeIn>
             
             <FadeIn delay={0.4} className="glass-card p-[24px] rounded-[2px] mr-0 lg:mr-12 relative overflow-hidden">
                <div className="flex items-center gap-4 mb-4">
                   <div className="w-12 h-12 bg-white/10 rounded-full"></div>
                  <div>
                    <h4 className="font-medium text-white">Mariana C.</h4>
                    <div className="flex gap-1 text-brand-accent">
                      ★★★★★
                    </div>
                  </div>
                </div>
                <p className="text-white/80 font-light italic leading-relaxed">
                  "O empório no Bom Retiro tem uma ótima variedade de produtos e sempre encontro os suplementos e chás que preciso. A qualidade das castanhas a granel é maravilhosa."
                </p>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="py-24 relative overflow-hidden bg-[#080808] border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn className="mb-12">
            <h2 className="font-serif text-[42px] leading-[0.9] tracking-[-1px] text-center font-normal">Nossa <span className="text-brand-accent">Localização</span></h2>
          </FadeIn>
          <FadeIn delay={0.2} className="w-full h-[450px] rounded-[2px] overflow-hidden glass-card p-2 md:p-3 relative z-10">
            <iframe 
              src="https://maps.google.com/maps?q=Av.+Desembargador+Hugo+Simas,+2818+-+Bom+Retiro,+Curitiba+-+PR,+80520-708&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(100%)' }} // Custom dark mode mapping trick
              allowFullScreen={false} 
              loading="lazy" 
              title="Google Maps Empório Nobre Grão"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 pt-16 pb-8 bg-brand-dark relative z-10">
        <div className="container mx-auto px-6 text-center">
           <div className="font-serif text-[20px] tracking-[2px] uppercase font-light mb-6">
            Empório <span className="text-brand-accent">Nobre Grão</span>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-8 text-[11px] text-white/30 mb-8 uppercase tracking-[1px] font-normal">
            <span>Av. Desembargador Hugo Simas, 2818 - Bom Retiro</span>
            <span className="hidden md:inline">•</span>
            <span>Desde 2021</span>
            <span className="hidden md:inline">•</span>
            <span>Webloja Ativa</span>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] text-white/30 uppercase tracking-[1px] gap-4 sm:gap-0">
             <div className="mb-4 sm:mb-0">&copy; 2026 Empório Nobre Grão • Todos os direitos reservados</div>
             <div className="flex items-center gap-2 px-3 py-1 border border-brand-sage/30 rounded-[2px] text-brand-sage hover:bg-brand-sage/10 transition-colors duration-300">
               <Leaf className="w-3 h-3" />
               <span>Green Hosting • Código Limpo & Performance INP</span>
             </div>
             <div className="hidden md:block">Saúde compartilhada com amor</div>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a 
        href="https://wa.me/5541992435724" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] group flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75 duration-[2000ms]"></div>
        <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.3)] border border-[#20bd59] group-hover:scale-110 transition-transform duration-300">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.976L2 22l5.163-1.353a9.982 9.982 0 004.849 1.259h.004c5.505 0 9.988-4.478 9.989-9.984 0-5.514-4.482-9.922-10.005-9.922zm5.565 14.213c-.234.664-1.364 1.282-1.895 1.325-.503.04-1.164.135-3.411-.796-2.69-1.117-4.42-3.864-4.553-4.04-.132-.176-1.086-1.442-1.086-2.75 0-1.309.68-1.956.92-2.222.24-.265.525-.33.698-.33.173 0 .346.002.493.008.155.008.361-.06.564.43.212.51.722 1.765.787 1.897.065.132.108.286.02.463-.087.176-.132.286-.263.441-.132.153-.277.34-.396.462-.132.153-.28.32-.122.595.158.275.703 1.163 1.506 1.882.935.836 1.802 1.127 2.083 1.258.282.132.446.111.611-.077.165-.188.71-8.24.902-1.107.19-.286.381-.24.643-.142.261.098 1.65.776 1.933.918.282.142.47.218.539.34.068.122.068.705-.165 1.369z"/>
          </svg>
        </div>
      </a>

    </div>
  );
}
