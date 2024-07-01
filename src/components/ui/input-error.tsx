interface InputErrorProps {
  error?: string | undefined
}

export default function InputError({ error }: InputErrorProps) {
  if (error) {
    return <span className="text-xs text-danger">{error}</span>
  }
}
