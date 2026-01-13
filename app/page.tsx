import Image from 'next/image';
import Link from 'next/link';

const SERVICES = [
  {
    title: 'Recording',
    description: 'Full tracking services in our professionally treated live room. Capture your sound with premium microphones and preamps.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    )
  },
  {
    title: 'Mixing',
    description: 'Professional mixing that brings clarity and punch to your tracks. Analog warmth meets modern precision.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: 'Production',
    description: 'From pre-production to final master. Decades of experience helping artists realize their creative vision.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    )
  }
];

const CLIENTS = [
  'R.E.M.', 'Indigo Girls', 'Widespread Panic', 'Cowboy Junkies',
  'Drivin\' N\' Cryin\'', 'Shawn Mullins', 'Michelle Malone', 'Vic Chesnutt'
];

export default function Page() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding py-24 lg:py-32">
        <div className="container-width">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="animate-fade-in">
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">
                Professional Recording Studio
              </p>
              <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Where great music comes to life
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Award-winning recording studio with over 30 years of experience.
                We&apos;ve helped artists create Grammy-nominated albums and timeless records.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="#contact" className="btn-primary">
                  Book a Session
                </Link>
                <Link href="#work" className="btn-secondary">
                  View Our Work
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="https://johnkeanestudios.com/Images/StudioBanner.png"
                  alt="John Keane Studios console and recording space"
                  width={800}
                  height={500}
                  className="h-auto w-full object-cover"
                  unoptimized
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding border-t border-border py-24">
        <div className="container-width">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">
              What We Offer
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Full-service recording studio
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to create professional-quality recordings under one roof.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <div key={service.title} className="card card-hover">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="section-padding border-t border-border py-24">
        <div className="container-width">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">
              Our Work
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Trusted by legendary artists
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Over three decades of recording some of the most influential albums in alternative and Americana music.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {CLIENTS.map((client) => (
              <span
                key={client}
                className="rounded-full border border-border bg-primary/30 px-6 py-2 text-sm font-medium"
              >
                {client}
              </span>
            ))}
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-xl">
              <Image
                src="https://johnkeanestudios.com/Images/console.JPG"
                alt="Recording console closeup"
                width={600}
                height={400}
                className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                unoptimized
              />
            </div>
            <div className="overflow-hidden rounded-xl">
              <Image
                src="https://johnkeanestudios.com/Images/j.keane2.jpg"
                alt="John Keane at work"
                width={600}
                height={400}
                className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                unoptimized
              />
            </div>
            <div className="overflow-hidden rounded-xl sm:col-span-2 lg:col-span-1">
              <Image
                src="/generated/generated-gallery:equipment_detail-1768312626070.png"
                alt="Studio equipment detail"
                width={600}
                height={400}
                className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding border-t border-border py-24">
        <div className="container-width">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="https://johnkeanestudios.com/Images/j.keane2.jpg"
                alt="John Keane"
                width={600}
                height={600}
                className="h-auto w-full object-cover"
                unoptimized
              />
            </div>
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">
                About
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Meet John Keane
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                With over 30 years behind the console, John Keane has established himself
                as one of the most respected producers and engineers in alternative and
                Americana music.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                His work with R.E.M., Indigo Girls, and countless other artists has earned
                Grammy nominations and critical acclaim. The studio combines vintage analog
                warmth with modern digital precision.
              </p>
              <div className="mt-8">
                <Link href="#contact" className="btn-secondary">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding border-t border-border py-24">
        <div className="container-width">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">
              Contact
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to record?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let&apos;s discuss your project and how we can help bring your vision to life.
            </p>
            <div className="mt-8">
              <a
                href="mailto:john@johnkeanestudios.com?subject=Booking"
                className="btn-primary text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                john@johnkeanestudios.com
              </a>
            </div>
            <p className="mt-6 text-muted-foreground">
              Athens, Georgia
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
