'use client';
import { useState, useEffect } from 'react';
import { Spinner } from '@heroui/react';

export default function GlobalLoader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => setLoading(true);
    const stop = () => setLoading(false);

    window.addEventListener('next:navigation-start', start);
    window.addEventListener('next:navigation-end', stop);

    return () => {
      window.removeEventListener('next:navigation-start', start);
      window.removeEventListener('next:navigation-end', stop);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0e0e0e]/70 backdrop-blur-[2px] transition-opacity duration-200">
      <div className="flex gap-5">
        <Spinner className="text-[#3B82F6]" size="lg" /> {/* آبی اصلی */}
        <Spinner className="text-[#3B82F6]" size="lg" />
        <Spinner className="text-[#3B82F6]" size="lg" />
      </div>
    </div>
  );
}
