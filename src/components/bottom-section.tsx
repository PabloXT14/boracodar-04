import { PiPaperPlaneRight } from 'react-icons/pi'

export const BottomSection = () => {
  return (
    <section>
      <form>
        <input type="text" placeholder="Digite sua mensagem" />
        <button>
          <PiPaperPlaneRight />
        </button>
      </form>
    </section>
  )
}
