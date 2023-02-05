'use client'

import useColorMode from '@/hooks/useColorMode'

export default function Home() {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <main className='h-screen w-screen p-6 bg-white dark:bg-black'>
      <button
        className='dark:text-white text-black bg-sky-500 dark:bg-green-500'
        onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
      >
        TOGGLE THEME
      </button>
    </main>
  )
}
