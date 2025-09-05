import React from 'react';
import { Download } from 'lucide-react';

interface DownloadResumeButtonProps {
  className?: string;
}

const DownloadResumeButton: React.FC<DownloadResumeButtonProps> = ({ className = '' }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Hamza Shehzad_Resume.pdf';
    link.download = 'Hamza_Shehzad_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className={`
        group relative inline-flex items-center gap-2 px-4 py-2 
        bg-slate-800 hover:bg-slate-700 
        border border-slate-600 hover:border-slate-500
        text-slate-200 hover:text-white
        font-['Lexend'] font-medium text-sm
        rounded-lg transition-all duration-200 ease-in-out
        hover:shadow-lg hover:shadow-slate-900/20
        active:scale-95
        cursor-pointer
        ${className}
      `}
    >
      <Download 
        size={16} 
        className="transition-transform duration-200 group-hover:scale-110" 
      />
      <span>Download Resume</span>
      
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-slate-600/0 via-slate-500/10 to-slate-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
    </button>
  );
};

export default DownloadResumeButton;