'use client'

import ColorfulSearchIcon from '@/components/icons/ColorfulSearchIcon'
import SearchBox from '@/components/layout/SearchBox'
import { Button } from '@/components/ui/button'
import Card from './_components/Card'
import ColorfulApplyIcon from '@/components/icons/ColorfulApplyIcon'
import ColorfulChatIcon from '@/components/icons/ColorfulChatIcon'
import { useState } from 'react'
import ColorfulClockIcon from '@/components/icons/ColorfulClockIcon'
import ColorfulFormIcon from '@/components/icons/ColorfulFormIcon'
import ColorfulPauseIcon from '@/components/icons/ColorfulPauseIcon'

export default function Home() {
  const [selectedGroup, setSelectedGroup] = useState('search')

  return (
    <div className="mt-32 w-full px-8 pb-16">
      <div className="flex flex-col items-center">
        <h1>Buscar repúblicas</h1>
        <h2>Onde deseja morar?</h2>
      </div>

      <div className="mt-4 flex justify-center gap-3">
        <SearchBox className="min-w-64 max-w-[516px]" />
        <Button className="bg-button-primary hover:bg-button-primaryHover h-14 rounded-xl px-10 text-lg font-semibold">
          Buscar
        </Button>
      </div>

      <section className="mt-16 flex w-full flex-col items-center gap-4">
        <h2>Como funciona?</h2>
        <div className="flex w-full justify-center gap-4">
          <Button
            variant={selectedGroup === 'search' ? 'default' : 'outline'}
            className={`h-10 max-w-60 flex-1 ${selectedGroup === 'search' && 'bg-button-secondary hover:bg-button-secondaryHover'}`}
            onClick={() => setSelectedGroup('search')}
          >
            Para quem busca
          </Button>
          <Button
            variant={selectedGroup === 'announce' ? 'default' : 'outline'}
            className={`h-10 max-w-60 flex-1 ${selectedGroup === 'announce' && 'bg-button-secondary hover:bg-button-secondaryHover'}`}
            onClick={() => setSelectedGroup('announce')}
          >
            Para quem anuncia
          </Button>
        </div>
        {selectedGroup === 'search' && (
          <div
            className="grid w-full justify-center gap-10"
            style={{ gridTemplateColumns: 'repeat(auto-fit, 20rem)' }}
          >
            <Card
              icon={<ColorfulSearchIcon />}
              title="Encontre uma república"
              body="Use nosso sistema de buscas para encontrar a melhor república de acordo
              com suas preferências"
            />
            <Card
              icon={<ColorfulApplyIcon />}
              title="Aplique para uma vaga"
              body="Depois de encontrar a república perfeita, clique no botão “Tenho interesse” para fazer sua aplicação"
            />
            <Card
              icon={<ColorfulChatIcon />}
              title="Negocie com o anunciante"
              body="Utilize nosso chat para combinar os detalhes com o anunciante e conhecer melhor seu novo colega de moradia"
            />
          </div>
        )}
        {selectedGroup === 'announce' && (
          <div
            className="grid w-full justify-center gap-10"
            style={{ gridTemplateColumns: 'repeat(auto-fit, 20rem)' }}
          >
            <Card
              icon={<ColorfulFormIcon />}
              title="Crie seu anúncio"
              body="Preencha todos os dados sobre sua república e crie seu anúncio. Selecione o perfil de pessoas que você busca e adicione as regras de moradia."
            />
            <Card
              icon={<ColorfulClockIcon />}
              title="Aguarde aplicações"
              body="Depois de criar seu anúncio, basta aguardar que outros estudantes o vejam e façam suas aplicações."
            />
            <Card
              icon={<ColorfulChatIcon />}
              title="Negocie com os interessados"
              body="Utilize nosso chat para combinar os detalhes com os interessados."
            />
            <Card
              icon={<ColorfulPauseIcon />}
              title="Pausar anúncio"
              body="Ao preencher todas as vagas da república, seu anúncio será automaticamente pausado."
            />
          </div>
        )}
      </section>
    </div>
  )
}
