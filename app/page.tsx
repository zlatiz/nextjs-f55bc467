import Image from 'next/image';
import Link from 'next/link';
import Card from '../components/ui/card';

const IMAGES: Array<{ src: string; alt: string; width: number; height: number }> = [
  { src: 'https://johnkeanestudios.com/Images/StudioBanner.png', alt: 'Studio banner showing console and studio space', width: 1600, height: 700 },
  { src: 'https://johnkeanestudios.com/Images/j.keane2.jpg', alt: 'Photo of John Keane', width: 800, height: 800 },
  { src: 'https://johnkeanestudios.com/Images/console.JPG', alt: 'Console closeup', width: 1200, height: 800 },
  { src: '/generated/generated-hero-1768312505848.png', alt: 'Generated hero artwork', width: 1200, height: 700 },
  { src: '/generated/generated-service:tracking-1768312533411.png', alt: 'Service: tracking', width: 800, height: 600 },
  { src: '/generated/generated-service:mixing-1768312560175.png', alt: 'Service: mixing', width: 800, height: 600 },
  { src: '/generated/generated-gallery:artist_session-1768312584416.png', alt: 'Artist session', width: 800, height: 600 },
  { src: '/generated/generated-gallery:equipment_detail-1768312626070.png', alt: 'Equipment detail', width: 800, height: 600 }
];

function safe(src: string): string {
  return encodeURI(src);
}

export default function Page() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12">
      <header className="max-w-7xl mx-auto">
        <div className="glass-card overflow-hidden rounded-xl">
          <div className="w-full">
            <Image
              src={safe(IMAGES[0].src)}
              alt={IMAGES[0].alt}
              width={IMAGES[0].width}
              height={IMAGES[0].height}
              className="w-full h-auto object-cover"
              unoptimized
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="p-6 md:p-12 relative">
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl">John Keane Studios</h1>
              <p className="mt-3 text-muted-foreground max-w-2xl">Welcome to John Keane Studios</p>
              <div className="mt-6 flex gap-4">
                <Link href="/html/contact" className="gradient-btn" aria-label="Contact us">
                  Contact Us
                </Link>
                <Link href="/html/recordingservices" className="px-4 py-2 border rounded-md border-[var(--border)]" aria-label="Learn more about services">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="About">
          <p className="text-sm text-[var(--muted-foreground)]">Information available: About John Keane.</p>
          <div className="mt-4">
            <Link href="/html/about" className="gradient-btn">About</Link>
          </div>
        </Card>

        <Card title="Services">
          <p className="text-sm text-[var(--muted-foreground)]">Recording services and studio capabilities are listed on the site.</p>
          <div className="mt-4">
            <Link href="/html/recordingservices" className="gradient-btn">Recording Services</Link>
          </div>
        </Card>

        <Card title="Discography">
          <p className="text-sm text-[var(--muted-foreground)]">Selected Discography is available for review.</p>
          <div className="mt-4">
            <Link href="/html/discography" className="gradient-btn">Discography</Link>
          </div>
        </Card>

        {IMAGES.slice(1).map((img) => (
          <article key={img.src} className="glass-card p-4">
            <Image src={safe(img.src)} alt={img.alt} width={img.width} height={img.height} unoptimized className="w-full h-auto rounded-md" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            <h3 className="mt-3 font-semibold">{img.alt}</h3>
          </article>
        ))}
      </section>

      <section className="max-w-7xl mx-auto mt-12">
        <h2 className="font-heading text-2xl mb-4">Extras</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card title="Equipment">
            <p className="text-sm text-[var(--muted-foreground)]">Equipment list available.</p>
            <div className="mt-3">
              <Link href="/html/equipment" className="gradient-btn">Equipment</Link>
            </div>
          </Card>

          <Card title="Client List">
            <p className="text-sm text-[var(--muted-foreground)]">Client List is available on the site.</p>
            <div className="mt-3">
              <Link href="/html/clientlist" className="gradient-btn">Client List</Link>
            </div>
          </Card>

          <Card title="Music Clips">
            <p className="text-sm text-[var(--muted-foreground)]">Music clips and media.</p>
            <div className="mt-3">
              <Link href="/html/clips" className="gradient-btn">Music Clips</Link>
            </div>
          </Card>

          <Card title="Photos">
            <p className="text-sm text-[var(--muted-foreground)]">Photo gallery and studio images.</p>
            <div className="mt-3">
              <Link href="/html/photos" className="gradient-btn">Photos</Link>
            </div>
          </Card>
        </div>
      </section>
    </section>
  );
}
