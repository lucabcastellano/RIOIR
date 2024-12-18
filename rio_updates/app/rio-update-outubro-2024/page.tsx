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
              Oct 2, 2024
            </div>
          </header>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 font-mono text-sm">
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

            <h2 className="text-xl font-bold mt-12 mb-4 flex items-center gap-2">
              🎙️ Anúncios
            </h2>

            <ul className="list-disc pl-4 space-y-4">
              <li>
                Rompemos a barreira dos R$200K captados, agora com R$205K. Com exceção de um, que desistiu da doação, todos os outros doadores que prometeram, doaram. Outro doador, que havia prometido R$5K em Outubro, vai fazer a doação ainda em Novembro.

              </li>
              <li>
                Temos R$197.000,00 prometidos para Outubro, e mais R$13.000,000 já prometidos para Novembro. 
                No total, logo, são R$210.000,00 prometidos ao RIO Endowment até então.
              </li>
              <li>
                Esta chamada de capital é importante porque em Novembro faremos nossos primeiros investimentos em alunos. 
                Na próxima seção vocês encontrarão em detalhe sobre como funcionará este processo.
              </li>
              <li>
                Para novas doações, nosso PIX é{' '}
                <code className="bg-muted px-1 rounded">doe@rioendowment.com</code> (BTG)
              </li>
            </ul>

            <h2 className="text-xl font-bold mt-12 mb-4 flex items-center gap-2">
              👛 Bolsa RIO
            </h2>

            <p>
              Bolsa RIO é o nome que estamos dando para o projeto de concessão de incentivo. 
              Em outras palavras, chegou a hora de dar as primeiras bolsas de apoio financeiro.
            </p>

            <ol className="list-decimal pl-4 space-y-4">
              <li>
                O passo 1 é receber as doações, o que já está acontecendo. Como mencionado acima, 
                hoje estamos na reta final de receber os R$197.000,00 prometidos para Outubro.
              </li>
              <li>
                O passo 2 é investir o dinheiro, com o menor risco possível. Um comitê interno do RIO, 
                assessorado por um escritório do BTG, AW Capital, realizará o investimento.
              </li>
              <li>
                O passo 3 é repassar o edital de mentoria para os nossos alunos. Este edital está pronto 
                e vocês podem acessá-lo através deste link aqui. Lembrete importante: os alunos que participaram 
                do programa de mentoria não são os únicos elegíveis para participarem deste edital, mas têm um 
                peso relevante no processo.
              </li>
              <li>
                O passo 4 é uma sessão de pitch dos alunos para o Comitê de Seleção, um grupo de 3 pessoas, 
                todas indicadas pelo nosso Conselho de Administração.
              </li>
              <li>
                O passo 5 é o investimento no aluno e acompanhamento do nosso impacto social.
              </li>
            </ol>

            <h2 className="text-xl font-bold mt-12 mb-4">TLDV</h2>

            <ul className="list-disc pl-4 space-y-2">
              <li>Vamos investir nos primeiros alunos em Novembro;</li>
              <li>Os alunos serão escolhidos pelo Comitê de Seleção do RIO;</li>
              <li>Estimamos R$600 para cada um dos 3 alunos beneficiários, mas quem decide isso é o Comitê;</li>
              <li>Quem quiser doar, nosso pix é doe@rioendowment.com.</li>
            </ul>

            <h2 className="text-xl font-bold mt-12 mb-4 flex items-center gap-2">
              📍Highlights
            </h2>

            <ul className="list-disc pl-4 space-y-4">
              <li>O Edital para a primeira concessão de apoio financeiro do RIO Endowment está pronto;</li>
              <li>
                Demos boas-vindas a dois profissionais sênior que vão ajudar nosso time com People e Compliance. 
                A Ana, que vem da B Hub, Quinto Andar e Fundação Estudar. O Rodrigo, que vem do BofA, BTG Pactual e EY.
              </li>
              <li>
                Estamos animados para a primeira leva de concessão de incentivo da história do RIO.
              </li>
              <li>Continuamos construindo relacionamento com stakeholders importantes.</li>
            </ul>

            <h2 className="text-xl font-bold mt-12 mb-4 flex items-center gap-2">
              🙏 Pedidos
            </h2>

            <ul className="list-disc pl-4 space-y-2">
              <li>Adoraríamos novas conexões com potenciais doadores :)</li>
              <li>Nosso PIX é doe@rioendowment.com.</li>
            </ul>

            <h2 className="text-xl font-bold mt-12 mb-4 flex items-center gap-2">
              👣 Próximos Passos
            </h2>

            <p>Daqui pra frente são três as prioridades do RIO Endowment:</p>

            <ol className="list-decimal pl-4 space-y-2">
              <li>Realizar a primeira concessão das Bolsas RIO com sucesso;</li>
              <li>Continuar captando, ativamente;</li>
              <li>
                Começar a segunda turma de mentoria, desta vez com o Instituto Consuelo. 
                Ela vai obedecer a mesma lógica da primeira (mentoria por 2 meses, resultados, edital, bolsa). 
                Mais detalhes sobre ela no próximo report.
              </li>
            </ol>

            <div className="mt-12 pt-8 border-t">
              <p>
                Até a próxima edição! Novamente importante lembrar: quaisquer dúvidas, por favor entrar em contato com{' '}
                <a 
                  href="mailto:luca@rioendowment.com" 
                  className="text-foreground hover:underline decoration-muted-foreground/30"
                >
                  luca@rioendowment.com
                </a>{' '}
                ou pelo WhatsApp de qualquer um dos nossos Diretores.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}



