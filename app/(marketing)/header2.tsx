import {
    ClerkLoaded,
    ClerkLoading,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover} from '@headlessui/react'
import { Transition} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  BookOpenIcon,
  PencilSquareIcon,
  InformationCircleIcon,
  StarIcon,
  EllipsisHorizontalCircleIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Hematopoese', description: 'Entenda melhor a hematopoese', href: '/atlas/conteudos/hematopoese', icon: BookOpenIcon },
  { name: 'Eritrócitos', description: 'Explore os eritrócitos em detalhes', href: '/atlas/conteudos/eritrocitos', icon: BookOpenIcon },
  { name: 'Leucócitos', description: 'Aprenda sobre os leucócitos e sua função', href: '/atlas/conteudos/leucocitos', icon: BookOpenIcon },
  { name: 'Plaquetas', description: 'Descubra mais sobre as plaquetas sanguíneas', href: '/atlas/conteudos/plaquetas', icon: BookOpenIcon },
  { name: 'Alterações', description: 'Analise as alterações relacionadas ao sistema sanguíneo', href: '/atlas/conteudos/alteracoes', icon: BookOpenIcon },
]
const callsToAction = [
  { name: 'Ver todos os conteúdos', href: '/atlas', icon: EllipsisHorizontalCircleIcon },
]


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b-2 border-slate-200 px-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1" >
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="/hematologo.png" alt="" />
          </a>
          <a href="/" className="-m-1.5 p-1.5 flex items-center">
            <h1 className="pl-2 text-2xl font-thin tracking-wide text-rose-500">
            |
            </h1>
            <img className="h-6 w-auto ml-2" src="/ufrn-sem-legenda.svg" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative flex">
            <Popover.Button className="flex items-center gap-x-1 text-lg font-medium text-neutral-600">
            <BookOpenIcon className="h-10 w-10 pr-2 flex-none text-rose-500" aria-hidden="true"></BookOpenIcon>
              Conteúdos
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600  group-hover:text-rose-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-medium text-neutral-600">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-medium leading-6 text-gray-600 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <div className="flex lg:flex lg:gap-x-1 items-center">
            <PencilSquareIcon className="h-10 w-10 pr-2 flex-none text-rose-500" aria-hidden="true"></PencilSquareIcon>
            <ClerkLoading>
            <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
            <a href="/learn" className="text-lg font-medium text-neutral-600">
                Exercícios
            </a>
            </SignedIn>

            <SignedOut>
              <SignInButton
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn"
              >
                <Button size="lg" variant="normal" className="text-lg font-medium text-neutral-600 p-0">
                  Exercícios
                </Button>
              </SignInButton>
            </SignedOut>
          </ClerkLoaded>
            
          </div>
          <div className="hidden lg:flex lg:gap-x-1 items-center">
            <InformationCircleIcon className="h-10 w-10 pr-2 flex-none text-rose-500" aria-hidden="true"></InformationCircleIcon>
            <a href="/about" className="text-lg font-medium leading-6 text-neutral-600 relative">
            
            Sobre nós
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-1 items-center">
            <StarIcon className="h-10 w-10 pr-2 flex-none text-rose-500" aria-hidden="true"></StarIcon>
            <a href="/form" className="text-lg font-medium leading-6 text-neutral-600 relative">
            
            Nos Avalie
            </a>
          </div>
          
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ClerkLoading>
            <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            <SignedOut>
              <SignInButton
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn"
              >
                <Button size="lg" variant="normal" className="text-lg font-medium text-neutral-600 hover:bg-slate-100 text-slate-500">
                  Login
                </Button>
              </SignInButton>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-10 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <div className="flex">
                <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                    className="h-8 w-auto"
                    src="/hematologo.png"
                    alt=""
                />
                </a>
                <a href="/" className="-m-1.5 p-1.5 flex items-center">
                  <h1 className="pl-2 text-2xl font-thin tracking-wide text-rose-500">
                  |
                  </h1>
                  <img className="h-6 w-auto ml-2" src="/ufrn-sem-legenda.svg" alt="" />
                </a>
            </div>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      
                      <Disclosure.Button className="flex w-full items-center rounded-lg py-2 pl-3 pr-3.5 text-lg font-medium leading-7 text-neutral-600 hover:bg-gray-50">
                        <BookOpenIcon className="h-10 w-10 pr-2 flex-none text-rose-500" aria-hidden="true"></BookOpenIcon>
                        Conteúdos
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <div className="flex w-full lg:gap-x-1 items-center py-2">
                  <PencilSquareIcon className="h-10 w-10 pr-2 flex-none text-rose-500" aria-hidden="true"></PencilSquareIcon>
                  <a href="/learn" className="text-lg font-medium leading-6 text-neutral-600 relative">
                  
                  Exercícios
                  </a>
                </div>
                <div className="flex w-full lg:gap-x-1 items-center py-2">
                  <InformationCircleIcon className="h-10 w-10 pr-2 flex-none text-rose-500" aria-hidden="true"></InformationCircleIcon>
                  <a href="/about" className="text-lg font-medium leading-6 text-neutral-600 relative">
                  
                  Sobre nós
                  </a>
                </div>
              </div>
              <div className="py-6">
                <ClerkLoading>
                    <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                    </SignedIn>

                    <SignedOut>
                    <SignInButton
                        mode="modal"
                        afterSignInUrl="/learn"
                        afterSignUpUrl="/learn"
                    >
                        <Button size="lg" variant="normal" className="p-0 text-lg font-medium text-neutral-600 hover:bg-slate-100 text-slate-500">
                            Login
                        </Button>
                    </SignInButton>
                    </SignedOut>
                </ClerkLoaded>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
