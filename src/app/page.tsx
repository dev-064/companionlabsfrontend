'use client';

import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 100 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-300, 300], [5, -5]);
  const rotateY = useTransform(springX, [-300, 300], [-5, 5]);

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const fullTitle = 'Companion Labs';
  const fullSubtitle = 'Where AI Meets soul';

  // About section content
  const aboutParagraphs = [
    `We're a small team of builders —\non a mission to craft AI companions that feel like friends, not tools.`,
    `We're not just building software.\nWe're building presence.\nA new kind of relationship.\nOne that listens. Learns. Stays.`,
    `Because in a world of endless noise, people don't need another app.\nThey need someone who gets them.`,
    `Let's bring heart back to tech—one companion at a time.`
  ];

  // Gradient movement state for hero h1
  const [gradientPos, setGradientPos] = useState('50% 50%');
  const h1Ref = useRef<HTMLHeadingElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    const rect = h1Ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGradientPos(`${x}% ${y}%`);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(clientX - centerX);
      mouseY.set(clientY - centerY);
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    let titleTimeout: NodeJS.Timeout;
    let subtitleTimeout: NodeJS.Timeout;
    let i = 0;
    let j = 0;
    function typeTitle() {
      if (i <= fullTitle.length) {
        setTitle(fullTitle.slice(0, i));
        i++;
        titleTimeout = setTimeout(typeTitle, 80);
      } else {
        typeSubtitle();
      }
    }
    function typeSubtitle() {
      if (j <= fullSubtitle.length) {
        setSubtitle(fullSubtitle.slice(0, j));
        j++;
        subtitleTimeout = setTimeout(typeSubtitle, 60);
      }
    }
    typeTitle();
    return () => {
      clearTimeout(titleTimeout);
      clearTimeout(subtitleTimeout);
    };
  }, []);

  // For subtitle underline
  const subtitleParts = fullSubtitle.split(' ');
  const lastWord = subtitleParts.pop();
  const subtitleStart = subtitleParts.join(' ');

  return (
    <main className="min-h-screen bg-white overflow-hidden relative">
      {/* <Navbar />
       */}
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px),
                             linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 0%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 100%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 0% 100%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative z-10">
        <div className="text-center w-full">
          <h1
            ref={h1Ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setGradientPos('50% 50%')}
            className="text-6xl md:text-8xl lg:text-9xl font-extrabold mb-4 select-none cursor-pointer bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'radial-gradient(circle at ' + gradientPos + ', #3b82f6 0%, #a21caf 40%, #f472b6 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              transition: 'background-position 0.2s cubic-bezier(.4,0,.2,1)',
            }}
          >
            {title}
          </h1>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-semibold select-none bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'radial-gradient(circle at ' + gradientPos + ', #3b82f6 0%, #a21caf 40%, #f472b6 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              transition: 'background-position 0.2s cubic-bezier(.4,0,.2,1)',
            }}
          >
            {subtitleStart} <span className="underline decoration-4 decoration-[#3b82f6] underline-offset-4">{lastWord}</span>
          </h2>
        </div>
      </section>

      {/* About Section */}
      <section className="flex justify-center px-4 pt-20 pb-5 bg-transparent w-full">
        <motion.div
          className="w-full rounded-3xl p-8 md:p-20 flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Animated Centerpiece */}
          <motion.h3
            className="text-4xl md:text-5xl font-extrabold mb-10 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            viewport={{ once: true }}
          >
            Who we are
          </motion.h3>
          <div className="space-y-6 text-lg md:text-2xl text-gray-800 font-light w-full text-center">
            {aboutParagraphs.map((text, idx) => {
              const ref = useRef(null);
              const inView = useInView(ref, { margin: '-20% 0px -20% 0px', amount: 0.3 });
              return (
                <motion.p
                  key={idx}
                  ref={ref}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.1 * (idx + 1) }}
                  className={idx === 3 ? 'font-semibold text-black' : ''}
                  style={{ minHeight: '2.5em' }}
                >
                  {text.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </motion.p>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="mailto:team@companionlabs.xyz" className="text-black hover:text-blue-800 transition-colors" aria-label="Email">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block align-middle">
                  <rect width="24" height="24" rx="4" fill="#000000"/>
                  <path d="M4 8.5V16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.5l-8 5-8-5z" fill="#fff"/>
                  <path d="M20 6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2l8 5 8-5z" fill="#fff"/>
                </svg>
              </a>
              <a href="https://twitter.com/companionlabs" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-700 transition-colors" aria-label="Twitter">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block align-middle"><path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 12.07 9.03c0 .352.04.695.116 1.022-3.728-.187-7.034-1.97-9.244-4.68a4.48 4.48 0 0 0-.606 2.254c0 1.555.792 2.927 2.002 3.732a4.48 4.48 0 0 1-2.03-.56v.057a4.48 4.48 0 0 0 3.594 4.393c-.193.052-.397.08-.607.08-.148 0-.292-.014-.432-.04a4.48 4.48 0 0 0 4.184 3.11A8.98 8.98 0 0 1 2 19.54a12.68 12.68 0 0 0 6.88 2.017c8.26 0 12.78-6.84 12.78-12.78 0-.195-.004-.39-.013-.583A9.18 9.18 0 0 0 24 4.59a8.93 8.93 0 0 1-2.54.698z" fill="currentColor"/></svg>
              </a>
              <a href="https://linkedin.com/company/companionlabs" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-700 transition-colors" aria-label="LinkedIn">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block align-middle"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.27h-3v-5.6c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.696h-3v-10h2.881v1.367h.041c.401-.76 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.6v5.596z" fill="currentColor"/></svg>
              </a>
            </div>
          </div>
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Companion Labs. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
