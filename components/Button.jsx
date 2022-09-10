import React from 'react';

function Button({ children }) {
  const handleClick = () => {
    alert('Thank to click');
  };
  return <button type="button" onClick={handleClick} className="px-2 py-2 rounded-sm bg-black dark:bg-white text-teal-100 dark:text-gray-800">{children}</button>;
}

export default Button;
