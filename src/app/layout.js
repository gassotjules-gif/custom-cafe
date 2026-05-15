import './globals.css'

export const metadata = {
  title: 'La Cuisine — Commandes',
  description: 'Calculateur d\'ingrédients avec marge de perte',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
