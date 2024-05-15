import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Gustavo Sena',
    default:
      'Gustavo Sena ',
  },
  description:
    'I’m Gustavo, a 5th year veterinary medicine student, currently working in the commercial area of a renowned Brazilian laboratory, enthusiastic about product and project management. I’m currently CEO and founder of VET SOLUTIONS LTDA, a company that provides backoffice services and a marketing agency for veterinary clinics. ',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
