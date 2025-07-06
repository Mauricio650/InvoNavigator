export function BtnClassic ({ children }) {
  return (
    <button className='font-medium text-white cursor-pointer
     bg-sky-600 rounded-sm px-2 ring-2 ring-sky-50 border-b-4 border-l-3 border-r-2 border-t-2 border-transparent
    hover:bg-sky-700 hover:border-sky-950 shadow-lg shadow-sky-500/50 hover:shadow-sky-50 transition-all ease-linear duration-200
    '
    >
      {children}
    </button>
  )
}
