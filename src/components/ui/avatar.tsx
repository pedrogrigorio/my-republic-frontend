import { getUserInitials } from '@/utils/getUserInitials'
import {
  Avatar as AvatarRoot,
  AvatarFallback,
  AvatarImage,
} from '../shadcnui/avatar'

interface AvatarProps {
  user: { name: string; imgSrc: string }
  className?: string
}

export default function Avatar({ user, className }: AvatarProps) {
  const initials = getUserInitials(user.name)

  return (
    <AvatarRoot className={className}>
      <AvatarImage src={user.imgSrc} alt="Foto de perfil" />
      <AvatarFallback>{initials}</AvatarFallback>
    </AvatarRoot>
  )
}
