import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className='bg-gray-900 text-white flex items-center justify-center px-4 h-16'>
        <p className='text-center'>Copyright &copy; {currentYear} Get me A Chai - All right reserved!</p>
      </footer>
    </div>
  )
}

export default Footer
 