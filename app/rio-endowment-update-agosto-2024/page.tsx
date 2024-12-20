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
            <h1 className="text-3xl font-bold mb-2">RIO Endowment Update: Agosto de 2024</h1>
            <div className="text-sm text-muted-foreground">
              Sep 3, 2024
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
              À nossa rede de doadores, voluntários, conselheiros, advisors e demais apoiadores da causa,
            </p>

            <p>
              Bem-vindos ao nosso report do mês de Agosto de 2024.
            </p>

            <h2 className="text-xl font-bold mt-12 mb-4 flex items-center gap-2">
              🎙️ Anúncios
            </h2>

            <ul className="list-disc pl-4 space-y-4">
              <li>
                Por conta do embalo do último mês, nós construímos muitas avenidas de captação de doadores maiores, 
                a partir de R$100K e temos 6 nomes atualmente em conversas. Todos os 6 estão engajados. Passamos 7 dias 
                no Instituto 12, no Rio de Janeiro, que abriu muitas portas pra nós;
              </li>
              <li>
                Mudamos o foco das nossas conversas para captarmos tickets mais altos, apenas. Não estamos buscando 
                ativamente conversas de doações para tíckets de até 20K. No momento, temos R$193.000 em promessas 
                de cartas de intenção;
              </li>
              <li>
                Avançamos com conversas com Doadores Âncora (valores acima de R$350K). Três dessas conversas avançaram 
                bem, e uma delas ainda estamos investigando os motivos de não ter dado certo;
              </li>
              <li>
                Estruturamos nosso Projeto de Concessão de Incentivo, detalhado mais abaixo;
              </li>
              <li>
                Abrimos a conta no BTG Pactual. Entre 10 e 30 de Setembro, entraremos em contato com os doadores para 
                recolher o prometido em cartas de intenção.
              </li>
            </ul>

            <h2 className="text-xl font-bold mt-12 mb-4 flex items-center gap-2">
              👛 Plano de Concessão de Incentivo
            </h2>

            <p>
              Nosso time preparou um FAQ explicando melhor como funcionará nossa primeira concessão de incentivo. 
              <a href="#" className="text-foreground hover:underline">Veja aqui.</a>
            </p>

            <ul className="list-disc pl-4 space-y-2">
              <li>Investiremos em 2 a 4 alunos;</li>
              <li>Montante principal estimado em pelo menos R$250K;</li>
              <li>Bolsas terão valor máximo mensal de até R$750;</li>
              <li>Doadores terão contato com os alunos das turmas;</li>
              <li>Conselho do RIO Endowment aprovará os investimentos.</li>
            </ul>

            <h2 className="text-xl font-bold mt-12 mb-4 flex items-center gap-2">
              📍Highlights
            </h2>

            <ul className="list-disc pl-4 space-y-4">
              <li>
                Evoluímos em diversas frentes de doações importantes. Para detalhes, entre em contato conosco.
              </li>
              <li>
                Parceria avançada com o Instituto Apontar para indicação de alunos ao RIO Endowment em futuras turmas.
              </li>
              <li>
                Definimos datas para o 2º Programa de Mentoria (100% STEM) em parceria com o Instituto Consuelo.
                Será de Outubro a Novembro, com 15 alunos.
              </li>
              <li>
                Relacionamento consolidado com o I12, conectando-nos ao ecossistema STEM do Rio de Janeiro.
              </li>
              <li>
                Novas estratégias de captação descobertas, superando desafios iniciais.
              </li>
            </ul>

            <h2 className="text-xl font-bold mt-12 mb-4 flex items-center gap-2">
              🙏 Pedidos
            </h2>

            <ul className="list-disc pl-4 space-y-2">
              <li>
                Conexões com potenciais doadores são sempre bem-vindas.
              </li>
              <li>
                Nosso PIX é doe@rioendowment.com.
              </li>
            </ul>

            <h2 className="text-xl font-bold mt-12 mb-4 flex items-center gap-2">
              👣 Próximos Passos
            </h2>

            <p>
              Nosso foco segue em duas frentes principais:
            </p>

            <ol className="list-decimal pl-4 space-y-2">
              <li>Realizar a primeira concessão das Bolsas RIO com sucesso;</li>
              <li>Continuar captando ativamente;</li>
              <li>
                Começar a segunda turma de mentoria com o Instituto Consuelo. 
                Mais detalhes no próximo report.
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
