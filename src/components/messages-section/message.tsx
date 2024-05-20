import { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const messageStyles = tv({
  slots: {
    base: 'flex flex-col gap-2.5 w-fit',
    boxMessage: 'text-xs font-normal text-zinc-200',
  },
  variants: {
    variant: {
      primary: {
        base: 'items-end',
        boxMessage: 'bg-primary-600 rounded-lg flex gap-2.4 p-4',
      },
      secondary: {
        base: 'items-start',
        boxMessage: 'bg-secondary-500 rounded-lg flex gap-2.4 p-4',
      },
    },
    owner: {
      me: {
        boxMessage: 'rounded-br-none',
      },
      someone: {
        boxMessage: 'rounded-tl-none',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    owner: 'me',
  },
})

type MessageVariants = VariantProps<typeof messageStyles>

export type IMessage = {
  username: string
  time: string
  text: string
}

type MessageProps = MessageVariants &
  ComponentProps<'div'> & {
    message: IMessage
  }

export const Message = ({
  message,
  className,
  variant,
  owner,
  ...props
}: MessageProps) => {
  const { base, boxMessage } = messageStyles({ variant, owner })

  return (
    <div className={base({ className })} {...props}>
      <div className="text-xs font-normal text-zinc-200">
        {message.username} - {message.time}
      </div>
      <div className={boxMessage()}>{message.text}</div>
    </div>
  )
}
