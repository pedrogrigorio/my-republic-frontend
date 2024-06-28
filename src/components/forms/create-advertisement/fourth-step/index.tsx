import { useFormContext } from 'react-hook-form'
import { rules } from '@/data/rules'

export default function FourthStep() {
  const { register } = useFormContext()

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center text-center">
        <h3>Regras</h3>
        <span>Selecione as regras de sua república</span>
      </div>
      <div className="mt-8 inline-grid grid-cols-1 justify-center gap-8 md:grid-cols-2 lg:grid-cols-3">
        {rules.map((rule) => (
          <div key={rule.id} className="flex items-center space-x-2">
            <input
              id={rule.tag}
              type="checkbox"
              {...register(`rules.${rule.tag}`)}
            />
            <label
              htmlFor={rule.tag}
              className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {rule.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}
