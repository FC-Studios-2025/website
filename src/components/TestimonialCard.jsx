import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  const { name, role, content, image } = testimonial;
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:translate-y-1 hover:shadow-xl h-full flex flex-col">
      <div className="p-8 flex-grow relative">
        <div className="absolute top-6 left-6 text-blue-500 opacity-20">
          <svg className="w-8 h-8 transform scale-150" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 11.5C10 12.8807 8.88071 14 7.5 14C6.11929 14 5 12.8807 5 11.5C5 10.1193 6.11929 9 7.5 9C8.88071 9 10 10.1193 10 11.5Z" fill="currentColor"/>
            <path d="M19 11.5C19 12.8807 17.8807 14 16.5 14C15.1193 14 14 12.8807 14 11.5C14 10.1193 15.1193 9 16.5 9C17.8807 9 19 10.1193 19 11.5Z" fill="currentColor"/>
            <path d="M7.5 17C6.62347 17 5.79015 16.7638 5.08394 16.3394C4.37772 15.9149 3.82772 15.3185 3.50938 14.6173C3.19104 13.916 3.12088 13.1352 3.31053 12.3879C3.50017 11.6406 3.94001 10.9691 4.56932 10.4635C5.19863 9.95803 5.98341 9.65206 6.8 9.6C7.61658 9.54794 8.4334 9.75572 9.1221 10.1934C9.81081 10.6312 10.3365 11.2782 10.6353 12.0369C10.934 12.7955 10.9905 13.6329 10.8 14.425" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M16.5 17C15.6235 17 14.7901 16.7638 14.0839 16.3394C13.3777 15.9149 12.8277 15.3185 12.5094 14.6173C12.191 13.916 12.1209 13.1352 12.3105 12.3879C12.5002 11.6406 12.94 10.9691 13.5693 10.4635C14.1986 9.95803 14.9834 9.65206 15.8 9.6C16.6166 9.54794 17.4334 9.75572 18.1221 10.1934C18.8108 10.6312 19.3365 11.2782 19.6353 12.0369C19.934 12.7955 19.9905 13.6329 19.8 14.425" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <p className="text-gray-700 text-base leading-relaxed mt-6 italic">
          {content}
        </p>
      </div>
      
      <div className="flex items-center px-8 py-5 bg-gray-50 border-t border-gray-100">
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm">
          <img 
            src={image} 
            alt={`${name} portrait`}
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;