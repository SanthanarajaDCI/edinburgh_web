import MainLayout from "@/components/layout/MainLayout";
import ToastProvider from "@/components/ui/ToastProvider";
import PageTransition from "@/components/ui/PageTransition";

export default function MainGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainLayout>
      <PageTransition>{children}</PageTransition>
      <ToastProvider />
    </MainLayout>
  );
}
