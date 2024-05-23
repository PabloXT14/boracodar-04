import { BottomSection } from './components/bottom-section'
import { MessagesSection } from './components/messages-section/messages-section'
import { TopSection } from './components/top-section'

export function App() {
  return (
    <main className="m-auto flex h-screen w-full max-w-[880px] flex-col gap-7 px-8 py-6 sm:px-16 sm:py-8">
      <TopSection />
      <MessagesSection />
      <BottomSection />
    </main>
  )
}
