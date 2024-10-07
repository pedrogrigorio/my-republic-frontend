import ChangeEmailModal from '@/components/modals/change-email-modal'
import Breadcrumb from '@/components/ui/breadcrumb'
import persona from '@/assets/img/persona.png'
import Image from 'next/image'

import { Button } from '@/components/shadcnui/button'
import { Page } from '@/components/layout/page'
import {
  Camera,
  CaretRight,
  PencilSimple,
} from '@phosphor-icons/react/dist/ssr'
import DeleteAccountModal from '@/components/modals/delete-account-modal'
import ChangePasswordModal from '@/components/modals/change-password-modal'
import ChangeNameModal from '@/components/modals/change-name-modal'

export default function Account() {
  return (
    <Page.Container>
      <Page.Header>
        <Breadcrumb
          currentPage="Minha conta"
          parents={[{ name: 'Configurações', path: '/settings' }]}
        />
      </Page.Header>

      <Page.Content>
        <section className="pb-8">
          <h2 className="font-bold">Minha conta</h2>
          <div className="mt-6 flex gap-8">
            <div className="relative">
              <Image
                src={persona}
                width={256}
                height={256}
                className="h-32 w-32 rounded-full border-[1px] border-gray-300"
                alt="Profile image"
              />
              <button className="absolute bottom-0 right-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-black to-gray-400">
                <Camera size={32} className="text-white" />
              </button>
            </div>

            <div className="mt-6 flex h-fit gap-4">
              <h3>Rafael Gonçalves</h3>
              <ChangeNameModal>
                <button>
                  <PencilSimple size={24} />
                </button>
              </ChangeNameModal>
            </div>
          </div>
        </section>

        <div className="h-[1px] w-full bg-divisor" />

        <section className="py-8">
          <h2 className="font-bold">Segurança da conta</h2>
          <div className="mt-8 flex flex-col gap-4">
            <div className="flex justify-between">
              <div>
                <h4>E-mail</h4>
                <span className="text-primary">teste@gmail.com</span>
              </div>
              <ChangeEmailModal>
                <Button variant="outline">Alterar e-mail</Button>
              </ChangeEmailModal>
            </div>
            <div className="flex justify-between">
              <div>
                <h4>Senha</h4>
                <span className="text-primary">
                  Troque de senha regularmente
                </span>
              </div>
              <ChangePasswordModal>
                <Button variant="outline">Alterar senha</Button>
              </ChangePasswordModal>
            </div>
          </div>
        </section>

        <div className="h-[1px] w-full bg-divisor" />

        <section className="py-8">
          <h2 className="font-bold">Excluir conta</h2>
          <DeleteAccountModal>
            <div className="mt-8 flex cursor-pointer items-center justify-between">
              <div>
                <h4 className="text-danger">Excluir minha conta</h4>
                <span className="text-primary">
                  Esse processo não poderá ser desfeito
                </span>
              </div>
              <CaretRight size={24} />
            </div>
          </DeleteAccountModal>
        </section>
      </Page.Content>
    </Page.Container>
  )
}
