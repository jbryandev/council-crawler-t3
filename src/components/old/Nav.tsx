// import { useRef, useState } from 'react';

// import useOutsideDetector from '@/utils/useOutsideDetector';

// import HamburgerButton from './HamburgerButton';
// import Menu from './Menu';

// export default function Nav({ agencies, agendas }) {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const buttonRef = useRef(null);
//   const menuRef = useRef(null);

//   useOutsideDetector((event) => {
//     if (
//       !buttonRef.current?.contains(event.target) &&
//       !menuRef.current?.contains(event.target)
//     ) {
//       setMenuOpen(false);
//     }
//   });

//   return (
//     <>
//       <nav id='mobile' className='block lg:hidden'>
//         <HamburgerButton
//           isActive={menuOpen}
//           onClick={() => setMenuOpen(!menuOpen)}
//           ref={buttonRef}
//         />
//         {menuOpen && (
//           <div className='relative top-2' ref={menuRef}>
//             <div className='absolute z-50 w-full max-w-[400px] overflow-hidden rounded-lg bg-slate-50 p-3 font-medium shadow-lg dark:bg-slate-900'>
//               <Menu
//                 agencies={agencies}
//                 agendas={agendas}
//                 setMenuOpen={setMenuOpen}
//               />
//             </div>
//           </div>
//         )}
//       </nav>
//       <nav id='desktop' className='hidden overflow-hidden rounded-lg lg:block'>
//         <Menu agencies={agencies} agendas={agendas} />
//       </nav>
//     </>
//   );
// }
