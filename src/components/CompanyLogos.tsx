
import React from 'react';

// Array com logos genéricas de empresas
const companyLogos = [
  { name: "TechCorp", initials: "TC", color: "bg-blue-500" },
  { name: "Global Solutions", initials: "GS", color: "bg-green-500" },
  { name: "InnovatePro", initials: "IP", color: "bg-purple-500" },
  { name: "NextGen", initials: "NG", color: "bg-orange-500" },
  { name: "DataFlow", initials: "DF", color: "bg-red-500" }
];

const CompanyLogos = () => {
  return (
    <div className="flex flex-wrap justify-center gap-3 items-center">
      {companyLogos.map((company, index) => (
        <div 
          key={index} 
          className={`w-10 h-10 rounded-full ${company.color} flex items-center justify-center text-white font-bold text-xs shadow-md hover:scale-105 transition-transform cursor-default`}
          title={company.name}
        >
          {company.initials}
        </div>
      ))}
    </div>
  );
};

export default CompanyLogos;
