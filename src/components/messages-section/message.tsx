export type IMessage = {
  username: string
  time: string
  text: string
}

type MessageProps = {
  message: IMessage
}

export const Message = ({ message }: MessageProps) => {
  return (
    <div>
      <div>
        {message.username} - {message.time}
      </div>
      <div>{message.text}</div>
    </div>
  )
}
