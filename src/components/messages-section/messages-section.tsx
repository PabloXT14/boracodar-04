import { Message } from './message'

export const MessagesSection = () => {
  return (
    <section className="flex flex-1 flex-col gap-7 overflow-y-auto scrollbar-none">
      <div className="sticky top-0 text-center text-xs font-normal text-zinc-200">
        Hoje 11:30
      </div>

      <div className=" flex flex-col gap-8">
        <Message
          message={{
            username: 'Cecilia',
            time: '11:30',
            text: 'Tive uma ideia incrível para um projeto! 😍',
          }}
          variant="secondary"
          owner="someone"
        />

        <Message
          message={{
            username: 'Você',
            time: '11:32',
            text: 'Sério? Me conta mais.',
          }}
          className="self-end"
        />

        <Message
          message={{
            username: 'Cecilia',
            time: '11:34',
            text: 'E se a gente fizesse um chat moderno e responsivo em apenas uma semana?',
          }}
          variant="secondary"
          owner="someone"
        />

        <Message
          message={{
            username: 'Você',
            time: '11:36',
            text: '#boraCodar! 🚀',
          }}
          className="self-end"
        />
      </div>
    </section>
  )
}
