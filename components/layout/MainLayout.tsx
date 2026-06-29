import Navbar from "./Navbar";
import Footer from "./Footer";
import BottomNav from "./BottomNav";

interface MainLayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

export default function MainLayout({
  children,
  showFooter = true,
}: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pb-20 md:pb-0">{children}</main>
      {showFooter && <Footer />}
      <BottomNav />
    </div>
  );
}
