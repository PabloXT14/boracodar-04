import { IoClose } from 'react-icons/io5'

export const TopSection = () => {
  return (
    <section className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <img
          src="https://randomuser.me/api/portraits/women/50.jpg"
          alt="Foto de Perfil"
          className="size-12 rounded-full object-cover"
        />

        <div className="flex flex-col gap-1">
          <strong className="text-base font-bold">Cecilia Sassaki</strong>
          <div className="flex items-baseline gap-1">
            <div className="size-2 rounded-full bg-primary-500" />
            <span className="text-xs font-normal text-primary-500">Online</span>
          </div>
        </div>
      </div>

      <button>
        <IoClose className="size-6" />
      </button>
    </section>
  )
}
