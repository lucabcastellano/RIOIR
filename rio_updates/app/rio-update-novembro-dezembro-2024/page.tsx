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
              Nov 2, 2024
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
                ⁠Temos mais R$18K prometidos para Novembro de três doadores diferentes. Isso nos leva a R$223K já garantidos em promessas ao final do mês.
              </li>
              <li>
                Demos boas vindas à nossa 4ª Conselheira de Administração. Mais detalhes abaixo.
              </li>
              <li>
                No dia 9 de Novembro, sábado, teremos nosso primeiro Comitê de Seleção das Bolsas RIO, no qual o Comitê determinará como será distribuído o R$ entre os nossos alunos que aplicaram para o nosso edital. Investiremos nos primeiros alunos em breve.
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
                ✅ Passo 1 é receber as doações, o que já está acontecendo. Como mencionado acima, hoje estamos com R$205K captados.
              </li>
              <li>
                ✅ Passo 2 é investir o dinheiro, com o menor risco possível. Um comitê interno do RIO, assessorado por um escritório do BTG, realizará o investimento.
              </li>
              <li>
                ✅ Passo 3 é repassar o edital de mentoria para os nossos alunos. Este edital está pronto e vocês podem acessá-lo através deste link aqui. Aliás, agora com as inscrições encerradas, tivemos o dobro de inscrições do que esperávamos no Bolsa RIO.
              </li>
              <li>
                O passo 4 é uma sessão de pitch dos alunos para o Comitê de Seleção, um grupo de 4 pessoas, todas indicadas pelo nosso Conselho de Administração. Ao final da sessão de pitch, os membros do comitê vão escolher os alunos que serão apoiados pelo RIO (e os detalhes do benefício concedido). A reunião ocorrerá no dia 9 de Novembro.
              </li>
              <li>
                O passo 5 é o investimento no aluno e acompanhamento do nosso impacto social. É o momento em que a sua doação cria novas oportunidade e um presente melhor para os futuros profissionais do Rio de Janeiro.
              </li>
            </ol>

            <h2 className="text-xl font-bold mt-12 mb-4">TLDV</h2>

            <ul className="list-disc pl-4 space-y-2">
              <li>Vamos investir nos primeiros alunos em Novembro;</li>
              <li>Os alunos serão escolhidos pelo Comitê de Seleção do RIO;</li>
              <li>O Comitê será realizado no dia 9 de Novembro, sábado;;</li>
              <li>O Comitê é o responsável por deliberar e decidir acerca do investimento que será feito (tanto para número de alunos como para valor da bolsa)</li>
            </ul>

            <h2 className="text-xl font-bold mt-12 mb-4 flex items-center gap-2">
              📍Highlights
            </h2>

            <ul className="list-disc pl-4 space-y-4">
              <li>O Demos boas vindas à Silvia Motta como mais novo membro do Conselho de Administração e Doadora do RIO. Silvia traz um background impressionante em finanças e estratégia, com passagens por Movile, Coca-Cola, Sympla, Harvard e atual CFO da Hashdex. Silvia chega para colaborar principalmente na frente de captação. Estamos muito felizes com sua chegada.;</li>
              <li>
                Avançamos muito bem na frente de People, com novas contratações para a equipe sob a liderança da Ana Carolina Pêgo. Estruturamos e implementamos processos, estamos criando engajamento e coesão no trabalho dos voluntários, e abrimos um canal de comunicação recorrente dos voluntários com o time de People (que agora conta com pessoas mais sênior na equipe).
              </li>
              <li>
                Abrimos novas frentes grandes de captação e as perspectivas são boas - principalmente acompanhado do 1º investimento que faremos nos alunos durante os próximos dias. Acreditamos que quanto melhor o trabalho que fizermos com os alunos que investiremos, maior o potencial de captação com o mercado. 
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



