// import { useEffect, useState } from 'react';

// import { ChevronUp } from 'react-feather';

// export default function BackToTop() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsVisible(window.scrollY > window.innerHeight * 0.5);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleClick = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <button
//       className={`fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-blue-700 text-slate-50 shadow-lg transition-opacity duration-500 ease-in-out hover:bg-blue-600 dark:bg-blue-800 dark:hover:bg-blue-700 ${
//         isVisible
//           ? 'pointer-events-auto opacity-100'
//           : 'pointer-events-none opacity-0'
//       }`}
//       onClick={handleClick}
//     >
//       <ChevronUp className='h-8 w-8' />
//     </button>
//   );
// }
