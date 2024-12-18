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
            <h1 className="text-3xl font-bold mb-2">RIO Endowment Update: Novembro e Dezembro de 2024</h1>
            <div className="text-sm text-muted-foreground">
              Dez 18, 2024
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
              Bem-vindos ao nosso report do mês de Novembro e Dezembro de 2024.
            </p>

            <h2 className="text-xl font-bold mt-12 mb-4 flex items-center gap-2">
              🎙️ Anúncios
            </h2>

            <ul className="list-disc pl-4 space-y-4">
              <li>
                Os meses de Novembro e Dezembro foram ultra focados em organização da casa e construção de relacionamentos. Encontramos muitas pessoas importantes e relevantes do ecossistema nesses dois últimos meses.
              </li>
              <li>
                Seguimos com R$205K captados, e as duas doações que haviam sido prometidos para o mês de Dezembro não foram realizadas.
              </li>
              <li>
                Escolhemos os alunos que receberão as primeiras bolsas RIO. 
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
                Realizamos o Comitê de Seleção e escolhemos 3 alunos para receberem R$400 mensais.
              </li>
              <li>
                Em parceria com o BRASAS, daremos outras 6 bolsas de cursos de inglês.
              </li>
              <li>
                Os alunos estão muito felizes, colocaram em seus Linkedin que são bolsistas RIO. Para mais informações, acessem https://www.rioendowment.com/bolsa-rio-aprovados-2024
              </li>
              <li>
                O próximo passo é passar o investimento em Janeiro, quando começa o ano letivo, e realizar o acompanhamento.
              </li>
            </ol>

            <h2 className="text-xl font-bold mt-12 mb-4 flex items-center gap-2">
              📍Highlights
            </h2>

            <ul className="list-disc pl-4 space-y-4">
              <li>Realizamos os primeiros investimentos do RIO. Turning point 100% para nós.;</li>
              <li>
                Ganhamos bastante agilidade em processos de captação no final do ano. Apostamos que a construção de relacionamento nos dê bons frutos nos próximos meses.
              </li>
              <li>
                Criamos a área de People Analytics e contratamos pessoas sênior para a equipe. Estamos em um processo de trazer pessoas mais experientes para a operação. 
              </li>
              <li>2 voluntários do RIO mudaram de emprego, com promoções, devido ao relacionamento proporcionado pelo RIO Endowment. Isso é ótimo e aumenta o engajamento deles nas propostas que temos aqui.</li>
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



