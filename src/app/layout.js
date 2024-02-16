import { Inter } from "next/font/google";
import "./index.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CARNEIRO MOREIRA Steven",
  description: "Bienvenue sur mon site portfolio ! Je suis un développeur web passionné et créatif, et ce site est mon espace pour partager mes réalisations, compétences et expériences dans le monde du développement web.Découvrez mes projets les plus récents et explorez mes compétences en développement front-end",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
