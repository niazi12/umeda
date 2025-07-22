
import { Navbar } from "@/components/custom/nav/navbar";
import Footer from "@/components/custom/ui/Footer";
import { ClientProviders } from "@/components/providers/ClientProvider";

export default async function RootLayout({ children }) {
  return (
    <ClientProviders>
      <div className="flex flex-col min-h-screen">
        <div className="bg-white dark:bg-black">
          <Navbar />
        </div>
        <main className="w-full flex-grow  mx-auto">{children}</main>
        <Footer />
      </div>
    </ClientProviders>
  );
}
