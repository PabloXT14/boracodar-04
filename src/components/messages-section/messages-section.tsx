import { Message } from './message'

export const MessagesSection = () => {
  return (
    <section>
      <div>Hoje 11:30</div>

      <div>
        <Message
          message={{
            username: 'Cecilia',
            time: '11:30',
            text: 'Tive uma ideia incrível para um projeto! 😍',
          }}
        />

        <Message
          message={{
            username: 'Você',
            time: '11:32',
            text: 'Sério? Me conta mais.',
          }}
        />

        <Message
          message={{
            username: 'Cecilia',
            time: '11:34',
            text: 'E se a gente fizesse um chat moderno e responsivo em apenas uma semana?',
          }}
        />

        <Message
          message={{
            username: 'Você',
            time: '11:36',
            text: '#boraCodar! 🚀',
          }}
        />
      </div>
    </section>
  )
}
