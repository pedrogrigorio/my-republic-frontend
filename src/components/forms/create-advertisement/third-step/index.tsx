import { useFormContext } from 'react-hook-form'
import { amenities } from '@/data/amenities'

export default function ThirdStep() {
  const { register } = useFormContext()

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center text-center">
        <h3>Comodidades</h3>
        <span>Selecione as comodidades de sua república</span>
      </div>
      <div className="mt-8 inline-grid grid-cols-1 justify-center gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {amenities.map((amenity) => (
          <div key={amenity.id} className="flex items-center space-x-2">
            <input
              id={amenity.tag}
              type="checkbox"
              {...register(`amenities.${amenity.tag}`)}
            />
            <label
              htmlFor={amenity.tag}
              className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {amenity.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}
