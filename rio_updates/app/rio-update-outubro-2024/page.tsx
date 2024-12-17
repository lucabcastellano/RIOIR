'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <div className="mx-auto max-w-2xl px-6">
        <header className="py-8">
          <Link 
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </header>

        <article className="py-8">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">RIO Endowment Update: Outubro de 2024</h1>
            <div className="text-sm text-muted-foreground">
              Nov 1, 2024
            </div>
          </header>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-4 font-mono text-sm">
            <p>
              O RIO Endowment é um fundo patrimonial dedicado a desbloquear o potencial dos alunos STEM 
              no Rio de Janeiro. Por meio das doações que recebemos, o RIO seleciona estudantes brilhantes 
              que necessitam de apoio financeiro e não financeiro, investindo em seu desenvolvimento para 
              ampliar horizontes e criar oportunidades para um futuro mais promissor.
            </p>

            <p>
              À nossa rede de doadores, voluntários, conselheiros, advisors e demais apoiadores da causa.
            </p>

            <p>
              Bem-vindos ao nosso report do mês de Outubro de 2024.
            </p>

            <p>
              Quaisquer dúvidas, por favor entrar em contato com{' '}
              <a 
                href="mailto:luca@rioendowment.com" 
                className="text-foreground hover:underline decoration-muted-foreground/30"
              >
                luca@rioendowment.com
              </a>{' '}
              ou pelo WhatsApp de qualquer um dos nossos Diretores.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}

