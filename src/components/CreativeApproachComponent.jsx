// CreativeApproachComponent.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Create the fade-in animation component
export const FadeInView = ({ children, delay = 0, duration = 0.5 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration, delay }}
  >
    {children}
  </motion.div>
);

const CreativeApproachComponent = ({ approaches = [] }) => {
  return (
    <div className="py-4 md:my-4 lg:py-6 w-full flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 overflow-y-auto">
        {approaches.map((approach, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
          >
            <div className="mt-1 text-green-500 flex-shrink-0">
              <svg className="w-4 h-4 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm md:text-2xl">{approach}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CreativeApproachComponent;