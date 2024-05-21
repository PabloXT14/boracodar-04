import { IoSend } from 'react-icons/io5'

export const BottomSection = () => {
  return (
    <section className="pt-6">
      <form className="flex items-center gap-2.5 rounded-full bg-secondary-900 px-6 py-4 text-zinc-200 focus-within:outline focus-within:outline-2 focus-within:outline-white">
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          className="flex-1 bg-transparent text-xs font-normal placeholder:text-zinc-200"
        />
        <button>
          <IoSend className="text-2xl text-zinc-200" />
        </button>
      </form>
    </section>
  )
}
