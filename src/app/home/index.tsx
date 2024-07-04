'use client'

import ColorfulApplyIcon from '@/components/icons/colorful-apply-icon'
import ColorfulChatIcon from '@/components/icons/colorful-chat-icon'
import ColorfulClockIcon from '@/components/icons/colorful-clock-icon'
import ColorfulFormIcon from '@/components/icons/colorful-form-icon'
import ColorfulPauseIcon from '@/components/icons/colorful-pause-icon'
import ColorfulSearchIcon from '@/components/icons/colorful-search-icon'
import LocaleSearchForm from '@/components/forms/locale-search-form'
import Card from './_components/card'

import { Button } from '@/components/ui/button'
import { useSelectedGroup } from './_hooks/useSelectedGroup'
import { Page } from '@/components/layout/page'

export default function Home() {
  const { selectedGroup, selectSearch, selectAnnounce } = useSelectedGroup()

  return (
    <Page.Container>
      <Page.Content className="mt-32">
        <div className="flex flex-col items-center gap-2">
          <h1>Buscar repúblicas</h1>
          <h2>Onde deseja morar?</h2>
        </div>

        <div className="mt-4 flex justify-center gap-3">
          <LocaleSearchForm className="max-w-128" />
          <Button
            type="submit"
            form="localeForm"
            className="h-14 rounded-xl bg-button-primary px-10 text-lg font-semibold hover:bg-button-primary-hover"
          >
            Buscar
          </Button>
        </div>

        <section className="mt-16 flex w-full flex-col items-center gap-4">
          <h2>Como funciona?</h2>
          <div className="flex w-full justify-center gap-4">
            <Button
              variant={selectedGroup === 'search' ? 'default' : 'outline'}
              className={`h-10 max-w-60 flex-1 ${selectedGroup === 'search' && 'bg-button-secondary hover:bg-button-secondary-hover'}`}
              onClick={selectSearch}
            >
              Para quem busca
            </Button>
            <Button
              variant={selectedGroup === 'announce' ? 'default' : 'outline'}
              className={`h-10 max-w-60 flex-1 ${selectedGroup === 'announce' && 'bg-button-secondary hover:bg-button-secondary-hover'}`}
              onClick={selectAnnounce}
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
      </Page.Content>
    </Page.Container>
  )
}
