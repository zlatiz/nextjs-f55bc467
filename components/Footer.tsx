import Link from 'next/link';

export default function Footer(): JSX.Element {
  const year = 2026;
  return (
    <footer className="border-t border-[var(--border)] mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold">John Keane Studios</h4>
          <p className="text-sm text-[var(--muted-foreground)] mt-2">Welcome to John Keane Studios</p>
        </div>

        <div>
          <h5 className="font-semibold">Navigate</h5>
          <ul className="mt-2 space-y-2 text-sm text-[var(--muted-foreground)]">
            <li><Link href="/html/about">About</Link></li>
            <li><Link href="/html/discography">Discography</Link></li>
            <li><Link href="/html/recordingservices">Recording Services</Link></li>
            <li><Link href="/html/clientlist">Client List</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold">Contact</h5>
          <address className="not-italic mt-2 text-sm text-[var(--muted-foreground)]">
            <div>
              <Link href="/html/contact">Contact</Link>
            </div>
            <div className="mt-4 text-[10px]">© {year} John Keane Studios. All rights reserved.</div>
          </address>
        </div>
      </div>
    </footer>
  );
}
