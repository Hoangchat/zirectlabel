// app/layout.tsx
import './globals.css';
export const metadata = { title: 'Loop Hit Music', description: 'Independent phonk label' };


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" strategy="beforeInteractive" />
        <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js" strategy="beforeInteractive" />
      </head>
      <body className="min-h-screen flex flex-col">
        <main className="flex-grow">
          {children}
        </main>
        
      </body>
    </html>
  );
}