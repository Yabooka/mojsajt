'use client'

import useColorMode from '@/hooks/useColorMode'

export default function Switch() {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <button
      className='dark:text-white text-black bg-sky-500 dark:bg-green-500'
      onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
    >
      TOGGLE THEME
    </button>
  )
}
