import * as RadioGroup from '@radix-ui/react-radio-group'

interface RadioInputProps {
  value: string
  label: string
}

export default function RadioInput({ value, label }: RadioInputProps) {
  return (
    <div className="flex items-center">
      <RadioGroup.Item
        className="flex h-8 w-32 items-center justify-center rounded-lg border border-primary bg-white data-[state='checked']:border-strong data-[state='checked']:font-medium"
        value={value}
      >
        <span className="text-sm">{label}</span>
      </RadioGroup.Item>
    </div>
  )
}
