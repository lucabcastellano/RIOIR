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
                a partir de R$100K e temos 6 nomes atualmente em conversas. Todos os 6 estão engajados. Passamos 7 
                dias no Instituto 12, no Rio de Janeiro, que abriu muitas portas pra nós;
              </li>
              <li>
                Neste mês, o trabalho de captação continuou acontecendo, e mudamos o foco das nossas conversas para 
                captarmos tickets mais altos, apenas. Não estamos buscando ativamente conversas de doações para tíckets 
                de até 20K. No momento, temos R$193.000 em promessas de cartas de intenção;
              </li>
              <li>
                Neste mês, também em captação, avançamos com conversas com o que entendemos como Doadores Âncora - 
                doadores maiores acima dos R$350K. Três dessas conversas avançaram bem. Uma delas não deu certo 
                (ainda investigando os motivos);
              </li>
              <li>
                Este mês o foco foi estruturar o nosso Projeto de Concessão de Incentivo, isto é, como vamos alocar 
                o rendimento do capital investido para os alunos. Isso está mais bem explicado abaixo;
              </li>
              <li>
                Abrimos a conta no BTG Pactual, e isso significa que entre os dias 10 e 30 de Setembro nós entraremos 
                em contato com cada um de vocês, doadores, para recolher o R$ prometido em cartas de intenção.
              </li>
              <li>
                Caso alguém já queira fazer a doação, o nosso PIX é doe@rioendowment.com (BTG);
              </li>
            </ul>

            <h2 className="text-xl font-bold mt-12 mb-4 flex items-center gap-2">
              ▶️ Plano de Concessão de Incentivo
            </h2>

            <p>
              Nosso time preparou um FAQ relatando um pouco melhor sobre como funcionará nossa primeira concessão 
              de incentivo. Neste link você a encontra.
            </p>

            <h3 className="text-lg font-bold mt-8 mb-4">TLDV:</h3>

            <ul className="list-disc pl-4 space-y-2">
              <li>Investiremos em 2 a 4 alunos;</li>
              <li>
                Consideramos que o montante principal, no momento em que recolhermos as cartas de intenção de doação, 
                será de R$250K no mínimo. Estimamos que será maior, com a possibilidade de ser muito maior, a depender 
                do progresso nas próximas 2 semanas;
              </li>
              <li>As bolsas terão valor máximo mensal de até R$750;</li>
              <li>Doadores terão contato com os alunos das turmas;</li>
              <li>O Conselho do RIO Endowment será responsável por aprovar o investimento em cada aluno;</li>
            </ul>

            <p>
              Outro recado importante é a data em que iniciaremos o início do recolhimento do capital prometido nas 
              cartas de intenção de doação. Como dito anteriormente, entre os dias 10 e 30 de Setembro nós entraremos 
              em contato com cada um de vocês, doadores, para recolher o R$ prometido em cartas de intenção.
            </p>

            <h2 className="text-xl font-bold mt-12 mb-4 flex items-center gap-2">
              📍Highlights
            </h2>

            <p>Este mês evoluímos em algumas coisas importantes:</p>

            <ul className="list-disc pl-4 space-y-4">
              <li>
                Como disse, abrimos muitas frentes de doações importantes. Para os doadores que quiserem saber, 
                podemos marcar um papo para falar sobre isso neste link aqui. Será um prazer contar com sua ajuda;
              </li>
              <li>
                Conseguimos avançar com uma parceria com o Instituto Apontar - este que forma e investe em alunos 
                há décadas e provavelmente começarão a indicar alunos ao RIO Endowment. Nossa próxima turma, este ano, 
                será com o Insituto Consuelo - mas depois disso, no início 2025, podemos fazer uma turma com eles. 
                Esse movimento é importante para consolidarmos fontes de qualidade de alunos para ingressarem no RIO Endowment;
              </li>
              <li>
                Definimos as datas do nosso 2o Programa de Mentoria, que é na realidade a segunda turma do RIO Endowment, 
                que será 100% STEM em parceria com o Insituto Consuelo.
                <ul className="list-disc pl-4 mt-2">
                  <li>O programa terá início no início de Outubro e termina no final de Novembro.</li>
                  <li>
                    Contaremos com a participação de 15 alunos dessa vez (vs. 11 no último). Lembrando que o programa 
                    de mentoria sempre antecede o investimento, então com isso já garantimos que teremos 2 turmas 
                    efetivamente recebendo investimento do RIO Endowment;
                  </li>
                </ul>
              </li>
              <li>
                Criamos um excelente relacionamento com o I12 - antiga Hashtown no Rio de Janeiro - para nos conectar 
                ao coração do empreendedorismo e STEM carioca;
              </li>
              <li>
                Descobrimos diversas novas avenidas e estratégias de captação que nos ajudaram a passar a "arrebentação" 
                neste quesito, o que é relevante para estes primeiros meses realizando este processo;
              </li>
            </ul>

            <h2 className="text-xl font-bold mt-12 mb-4 flex items-center gap-2">
              ✋ Lowlights
            </h2>

            <ul className="list-disc pl-4 space-y-4">
              <li>
                Existe uma dificuldade interna, ainda, de manter alguns voluntários engajados. A grande maioria dos 
                voluntários são bastante engajados, mas o turnover tem sido um pouco mais alto do que gostaríamos ainda;
              </li>
            </ul>

            <h2 className="text-xl font-bold mt-12 mb-4 flex items-center gap-2">
              ⭐ Resultados Programa de Mentoria 2024.1
            </h2>

            <p>
              O PDF completo com as informações sobre a turma de mentorados está aqui. De qualquer forma, deixamos 
              alguns highlights aqui.
            </p>

            <p>
              Isso aqui é referente ao relatório do mês passado, mas acho que vale deixar alguns dos resultados aqui novamente.
            </p>

            <ul className="list-disc pl-4 space-y-4">
              <li>
                Nível de clareza, confiança para um possível processo seletivo e clareza de carreira depois do processo 
                de mentoria aumentaram significativamente;
              </li>
              <li>
                Mentores muito bem avaliados, programa idem. 11 alunos, todos com bastante sucesso.
              </li>
            </ul>

            <p>
              Para ler os feedbacks dos nossos alunos, acessem o PDF que está no link acima. Segue uma prévia:
            </p>

            <h2 className="text-xl font-bold mt-12 mb-4 flex items-center gap-2">
              🗣️ Novidades Adicionais
            </h2>

            <ul className="list-disc pl-4 space-y-4">
              <li>
                A parceria que firmamos com a deco.cx vai gerar frutos logo na semana que vem. A partir do dia 09 de 
                Setembro, a primeira versão do nosso novo website vai pro ar. A ideia é se comportar como um endowment 
                focado em tecnologia, com uma comunicação muito mais profissional e inovadora versus o que os outros 
                endowments têm. Seremos diferentes desde o dia 1;
              </li>
            </ul>

            <h2 className="text-xl font-bold mt-12 mb-4 flex items-center gap-2">
              👋 Pedidos
            </h2>

            <p>
              Nós temos alguns bons leads, potenciais doadores, para conversar, mas é bom sempre se conectar com novas pessoas.
            </p>

            <ul className="list-disc pl-4 space-y-4">
              <li>
                Por isso, o primeiro pedido é sempre novos contatos. Quem são pessoas interessantes que vocês acham que 
                podem gerar valor ao RIO? Estamos sempre abertos a novas conversas;
              </li>
              <li>
                Nós vamos colocar o nome de vocês, doadores do RIO, no nosso website na seção de Doadores Fundadores. 
                Se alguém aqui não quiser ter o nome exposto, por favor, nos avise para que possamos removê-lo do novo 
                site, que ficará pronto em poucos dias;
              </li>
            </ul>

            <h2 className="text-xl font-bold mt-12 mb-4 flex items-center gap-2">
              👣 Próximos Passos
            </h2>

            <p>
              Por agora, nosso foco segue absoluto em duas frentes: captação e, principalmente, o Projeto de Concessão 
              de Incentivo. Este projeto consiste em coletar os valores prometidos em cartas de intenção e realizar o 
              primeiro investimento nos alunos do RIO.
            </p>

            <p>
              Em captação, a ideia é continuar com os leads que temos aqui. Temos 6 leads potenciais para doações 
              relevantes e três para doações acima de R$350K.
            </p>

            <p>
              Paralelamente, temos a concessão de incentivo, que deverá ter suas fases iniciais executadas este mês. 
              Todos os times estão focados na sua realização. Como diz Pedro Rodrigues, nosso conselheiro, realizar as 
              ações e gerar provas do valor e do impacto do RIO trará bons frutos.
            </p>

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

