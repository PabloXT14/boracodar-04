import { BottomSection } from './components/bottom-section'
import { MessagesSection } from './components/messages-section/messages-section'
import { TopSection } from './components/top-section'

export function App() {
  return (
    <main className="mx-16 my-8 flex flex-col">
      <TopSection />
      <MessagesSection />
      <BottomSection />
    </main>
  )
}
