import { UserProgressSection } from '@/features/user-progress'

export default function HomePage() {
  return (
    <main className="mx-auto max-w-[1056px] px-5 font-sans md:px-8">
      <h1 className="text-2xl font-bold text-[#111827]">AI Frontend Demo</h1>
      <UserProgressSection />
    </main>
  )
}
