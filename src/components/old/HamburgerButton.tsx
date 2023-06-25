// import { forwardRef } from 'react';

// const HamburgerButton = forwardRef(function HamburgerButton(
//   { isActive, onClick },
//   ref
// ) {
//   function handleClick() {
//     onClick && onClick();
//   }

//   return (
//     <button
//       className='cursor-pointer justify-center rounded-lg bg-blue-700 p-5 hover:bg-blue-600 dark:bg-blue-800 dark:hover:bg-blue-700'
//       onClick={handleClick}
//       ref={ref}
//     >
//       <div
//         className={`my-1 h-[3px] w-7 bg-slate-50 duration-200 ${
//           isActive ? 'translate-y-[7px] rotate-45' : undefined
//         }`}
//       />
//       <div
//         className={`my-1 h-[3px] w-7 bg-slate-50 duration-200 ${
//           isActive ? 'opacity-0' : undefined
//         }`}
//       />
//       <div
//         className={`my-1 h-[3px] w-7 bg-slate-50 duration-200 ${
//           isActive ? '-translate-y-[7px] -rotate-45' : undefined
//         }`}
//       />
//     </button>
//   );
// });

// export default HamburgerButton;
