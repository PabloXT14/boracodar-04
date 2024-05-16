import { PiX } from 'react-icons/pi'

export const TopSection = () => {
  return (
    <section>
      <div>
        <img
          src="https://randomuser.me/api/portraits/women/50.jpg"
          alt="Foto de Perfil"
        />
        <div>
          <strong>Cecilia Sassaki</strong>
          <div>
            <div className="size-2 rounded-full bg-primary-500" />
            <span>Online</span>
          </div>
        </div>
      </div>

      <button>
        <PiX />
      </button>
    </section>
  )
}
