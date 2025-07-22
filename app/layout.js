import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers/Providers";
import { companyData } from "@/data";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    // metadataBase: new URL(`https://${companyData.contact.website}`),
    title: {
        default: companyData.company.name,
        template: `%s | ${companyData.company.shortName}`,
    },
    description: companyData.company.description,
    keywords: [
        "socks manufacturing",
        "B2B socks",
        "Bangladesh manufacturing",
        "Korea joint venture",
        "terry socks",
        "plain socks",
        "toe socks",
        "global export",
        "textile manufacturing",
        "RAJUK approved"
    ],
    authors: [{ name: companyData.company.name }],
    creator: companyData.company.name,
    publisher: companyData.company.name,
    openGraph: {
        type: "website",
        locale: "en_US",
        url: `https://${companyData.contact.website}`,
        siteName: companyData.company.name,
        title: companyData.company.name,
        description: companyData.company.description,
    },
    twitter: {
        card: "summary_large_image",
        title: companyData.company.name,
        description: companyData.company.description,
        creator: `@${companyData.company.shortName.toLowerCase()}`,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        // google: "your-google-verification-code",
        // yandex: "your-yandex-verification-code",
    },
};

export const viewport = {
    maximumScale: 1, // Disable auto-zoom on mobile Safari
};

const LIGHT_THEME_COLOR = "hsl(0 0% 100%)";
const DARK_THEME_COLOR = "hsl(240deg 10% 3.92%)";
const THEME_COLOR_SCRIPT = `\
(function() {
  var html = document.documentElement;
  var meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'theme-color');
    document.head.appendChild(meta);
  }
  function updateThemeColor() {
    var isDark = html.classList.contains('dark');
    meta.setAttribute('content', isDark ? '${DARK_THEME_COLOR}' : '${LIGHT_THEME_COLOR}');
  }
  var observer = new MutationObserver(updateThemeColor);
  observer.observe(html, { attributes: true, attributeFilter: ['class'] });
  updateThemeColor();
})();`;

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: THEME_COLOR_SCRIPT,
                    }}
                />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
