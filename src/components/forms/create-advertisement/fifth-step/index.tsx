import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

export default function FifthStep() {
  return (
    <div className="mt-8 flex flex-col items-center gap-8 text-center">
      <div className="relative h-32 w-32">
        <div className="bg-secondary absolute z-20 flex h-32 w-32 items-center justify-center rounded-full text-white">
          <Check size={96} />
        </div>

        <div className="absolute -left-3 -top-3 z-10 h-12 w-12 rounded-xl bg-blue-300 opacity-50" />
        <div className="absolute -right-4 top-6 z-10 h-8 w-8 rounded-lg bg-blue-300 opacity-50" />
        <div className="absolute  -left-6 bottom-1/4 z-10 h-8 w-8 rounded-xl bg-blue-200 opacity-50" />
        <div className="absolute -bottom-2 -right-2 z-10 h-10 w-10 rounded-xl bg-blue-200 opacity-50" />
      </div>

      <div>
        <h2>Tudo pronto!</h2>
        <p className="mt-2 max-w-[512px] text-primary">
          Por favor revise todas as informações que foram digitadas nos passos
          anteriores e, se tudo estiver correto, publique seu anúncio e ele
          estará ativo em até 24h.
        </p>
      </div>

      <Button
        type="submit"
        className="flex h-14 w-36 items-center justify-center rounded-full bg-button-secondary text-lg hover:bg-button-secondary-hover"
      >
        Publicar
      </Button>
    </div>
  )
}
