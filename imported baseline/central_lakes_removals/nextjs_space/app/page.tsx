import HeroSection from '@/components/hero/hero-section'

export const dynamic = 'force-static'

export default function Page() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <HeroSection />
    </main>
  )
}
