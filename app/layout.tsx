import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/ui/theme-provider"
import { ModeToggle } from '@/components/ui/ModeToggle'
import NavBarComponent from '@/components/ui/NavBarComponent'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Big Six',
  description: 'Big Six of Premier league',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}  suppressHydrationWarning>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="flex  min-h-screen flex-col items-center justify-arround p-12 lg:p-8 ">
              <NavBarComponent/>
              {children}
        
              <div className='w-full flex items-end justify-end'>
                <ModeToggle/>
              </div>
      
            </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
