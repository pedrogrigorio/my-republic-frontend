export function getUserInitials(name: string): string {
  const [firstName, lastName] = name.split(' ')

  if (lastName) {
    return `${firstName[0]}${lastName[0]}`.toUpperCase()
  }

  return firstName.slice(0, 2).toUpperCase()
}
