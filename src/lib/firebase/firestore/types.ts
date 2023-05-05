export interface Message {
  id: string
  text: string
  name: string
  avatar?: string | null
  created_at: string
  uid: string
}

export type CreteMessagePayload = Omit<Message,
  'created_at'
  | 'id'
>