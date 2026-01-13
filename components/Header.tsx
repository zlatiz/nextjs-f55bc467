import Link from 'next/link';
import Image from 'next/image';
import MobileNav from './MobileNav';

const NAV: Array<{ href: string; label: string }> = [
  { href: '/', label: 'Home' },
  { href: '/html/about', label: 'About' },
  { href: '/html/discography', label: 'Discography' },
  { href: '/html/recordingservices', label: 'Recording Services' },
  { href: '/html/clientlist', label: 'Client List' },
  { href: '/html/equipment', label: 'Equipment' },
  { href: '/html/clips', label: 'Music Clips' },
  { href: '/html/photos', label: 'Photos' },
  { href: '/html/contact', label: 'Contact' }
];

export default function Header(): JSX.Element {
  const brand = 'KeaneStudios';
  const logoSrc = encodeURI('https://johnkeanestudios.com/Images/j.keane2.jpg');
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-[rgba(11,11,15,0.6)] border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md overflow-hidden bg-[var(--primary)] flex items-center justify-center">
                <Image src={logoSrc} alt="John Keane portrait" width={40} height={40} unoptimized className="object-cover" />
              </div>
              <span className="font-heading text-lg">{brand}</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-4" aria-label="Main navigation">
            {(Array.isArray(NAV) ? NAV : []).map((item) => (
              <Link key={item.href} href={item.href} className="text-sm px-3 py-2 rounded-md hover:bg-[rgba(255,255,255,0.02)]">{item.label}</Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/html/contact" className="hidden sm:inline-block gradient-btn">Contact Us</Link>
            <MobileNav links={NAV} />
          </div>
        </div>
      </div>
    </header>
  );
}
