import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollLock } from '../hooks/smoothScroll';
import { EASE } from './fx';
import { ResumeSheet } from './ResumeViewer';

export default function ResumeModal({ onClose }: { onClose: () => void }) {
  useScrollLock(true);
  useEffect(() => { const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose(); window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey); }, [onClose]);
  return <motion.div className="fixed inset-0 z-[140] flex flex-col bg-black/90 backdrop-blur-md" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} role="dialog" aria-modal="true" aria-label="Profile summary">
    <div className="gutter flex h-16 shrink-0 items-center justify-between gap-3"><p className="truncate font-display text-2xl tracking-wide text-bone">Profile Summary</p><button type="button" onClick={onClose} aria-label="Close profile summary" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-bone hover:bg-white/20">✕</button></div>
    <motion.div className="gutter flex-1 overflow-y-auto pb-8" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.5,ease:EASE}}><ResumeSheet /></motion.div>
  </motion.div>;
}
