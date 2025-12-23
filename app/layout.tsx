import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Abrigo Atelier Arquitectura | Ferreira do Alentejo',
    description: 'Atelier de arquitectura sustentável entre Lisboa e Ferreira do Alentejo',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt">
            <body>{children}</body>
        </html>
    )
}
