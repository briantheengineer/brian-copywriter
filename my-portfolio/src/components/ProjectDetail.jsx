import { useParams } from 'react-router-dom';
import SimpleNavbar from './SimpleNavbar';

const projects = [
  {
    id: 'solis-energy',
    title: 'Campanha de Verão - Solis Energy',
    description: 'Copywriting para campanha promocional de verão com desconto de até 25% em placas solares.',
    imageUrl: '/path/para/solis-image.png',
    details: {
      intro: `A Solis Energy é uma empresa especializada em venda e instalação de placas solares para geração de energia elétrica. Fui contratado para criar o copy de uma campanha de verão, atraindo novos consumidores durante os meses mais quentes do ano.`,
      campaignParts: [
        'E-mails promocionais: informando clientes sobre promoção limitada para os 50 primeiros, com desconto de até 25%.',
        'Postagens em redes sociais: destacando os benefícios das placas solares e promovendo a campanha.',
        'Post Blog: destacando os 5 maiores benefícios de placas solares, com CTA forte para contato.'
      ],
      emails: [
        {
          title: 'Email 1',
          heading: 'Cansado de passar calor e pagar caro com ar-condicionado?',
          subject: 'Aproveite agora a promoção da Solis Energy e passe o verão refrescado e sem dívidas.',
          body: `O verão no Brasil pode ser muito impiedoso, a cada ano as temperaturas aumentam mais, mesmo dentro de casa vivemos suados. A vontade é deixar os ventiladores e o ar-condicionado ligados o tempo todo, mas sabemos que isso pesa muito na conta de luz.

Mas e se pudéssemos unir o útil ao agradável?

O que mais temos durante o verão, além da vontade de ficar na piscina o dia todo, é a luz potente do sol.

Aí que a Solis Energy entra. Com as nossas placas solares, você pode transformar essa luz em energia para a sua própria casa, e durante o período do verão, estamos oferecendo até 25% de desconto para os primeiros clientes.

Além de ser um tipo de energia limpa, é uma forma passiva de geração elétrica e em poucos meses esse investimento vai se pagar com a quantidade de energia economizada.

Se a ideia de ficar fresquinho durante o verão e pagar mais barato na conta de luz de interessou, ligue agora para agendar a instalação da sua placa e não passe o verão pagando mais caro.`
        },
        {
          title: 'Email 2',
          heading: 'Promoção de Verão: Placas Solares 25% OFF',
          subject: 'Aproveite os últimos dias da promoção de verão!',
          body: `A sua conta de luz aumenta durante o verão?

Isso acontece com todos, em um país como o Brasil é quase impossível viver durante esses meses quentes sem um ventilador ou ar-condicionado.

Por isso, o propósito do Solis Energy é levar independência de energia a todos, usando o sol para que você possa aproveitar o verão sem calor e sem contas altas.

Para ajudar mais nessa questão, a Solis Energy está oferecendo um desconto de 25% para os 50 primeiros novos clientes que queiram instalar placas solares até o fim deste mês.

Com as nossas placas solares, você pode deixar o ar-condicionado ligado sem medo da conta de luz no fim do mês.

Não perca essa oportunidade, marque sua instalação e comece a economizar com sua própria energia hoje! Faça parte das mais de 100 mil famílias Solis Energy.`
        }
      ],
      socialPosts: [
        'O calorzão chegou? Aproveite 25% de desconto na instalação de placas solares com a Solis Energy. Deixe seu ar-condicionado ligado sem medo da conta de luz. Promoção válida para os 50 primeiros clientes. Corre! #SolisEnergy #PromoVerao.',
        'Pare de se preocupar com a conta de luz nesse verão. Com as placas solares da Solis Energy você pode aproveitar o calor sem o peso no bolso. Corra e aproveite a promoção de verão e comece a economizar agora mesmo! #SolisEnergy #PromoVerao #Energia.',
        'A energia solar é a fonte de energia limpa mais acessível e mais simples de se instalar! Com a promoção de verão da Solis Energy, fica ainda mais fácil. Até o fim de fevereiro, novos clientes têm até 25% de desconto na instalação. Diminua sua conta de luz hoje, contrate Solis Energy! #PromoVerao #SolisEnergy.',
        'Você sabia? Com energia solar, você pode reduzir até 95% da sua conta de luz! E com a promoção de verão da Solis Energy, fica ainda mais fácil: 25% de desconto para novos clientes. Não deixe essa oportunidade passar! #PromoVerao #SolisEnergy.'
      ],
      blogPost: {
        title: '5 MOTIVOS PARA INVESTIR EM ENERGIA SOLAR AINDA ESSE ANO',
        intro: `A energia solar é a mais acessível que temos, simplesmente utilizando a luz do sol para gerar sua própria energia. Além dos ótimos benefícios para o meio ambiente, a geração elétrica independente vai reduzir, e muito, a sua conta de luz, que vem aumentando muito nos últimos anos. Aqui vão 5 motivos para que você tenha certeza que vale a pena investir em placas solares Solis Energy.`,
        reasons: [
          'Conta de luz mais cara: De acordo com o IBGE, em fevereiro de 2025, a conta de luz no Brasil subiu em média 17%, foi um dos aumentos mais significativos registrados nos últimos anos. Esse é o principal motivo das placas solares serem tão atrativas, com elas o preço da conta de luz vai ser tão baixo que os aumentos nos preços no país não vão incomodar.',
          'Energia passiva e limpa: Outro motivo para investir nesse meio de produção de energia é o meio ambiente. Todos nós sentimos que a cada ano o verão vem mais forte, mais quente, os invernos são menos frios e a temperatura global aumenta. Utilizando a energia solar, você para de depender de meios de produção que podem poluir o meio ambiente, como as termoelétricas, que queimam carvão mineral e contribuem para o aquecimento global.',
          'Fácil instalação e alta qualidade: Aqui na Solis Energy nós prezamos pela praticidade e excelência de nossos serviços. As instalações são agendadas e feitas rapidamente, as placas solares foram desenvolvidas para que sejam tanto resistentes às intempéries, quanto eficientes na geração de energia. Além disso, o sistema de manutenção da nossa companhia vai manter as placas sempre em seu mais perfeito estado.',
          'O investimento se paga rápido: Com a tecnologia Solis, o investimento feito para instalar as placas solares se paga mais rápido. Em média no Brasil, geralmente levam de 3 a 5 anos para que o retorno seja positivo. Com a nossa tecnologia, esse prazo é reduzido pela metade.',
          'Valorização do imóvel: Além de reduzir a conta de luz, as placas solares valorizam o imóvel, tendo em vista que tornam os custos fixos da casa menores e mais atraentes para possíveis compradores. As placas ainda são muito discretas e dependendo do tamanho da casa, podem cobrir uma grande superfície dos telhados, podendo gerar eletricidade suficiente para toda ela.'
        ],
        conclusion: `A Solis Energy tem como objetivo democratizar e incentivar o uso da energia solar individual, para que todos possam utilizar a energia elétrica sem se preocupar com o preço. Os benefícios são inúmeros, tanto para o consumidor quanto para o meio ambiente. 

Se você está cansado de pagar contas de luz que aumentam significativamente mais a cada mês, entre em contato e agende sua instalação.`
      }
    }
  }
];

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <>
        <SimpleNavbar />
        <div className="min-h-screen flex items-center justify-center text-white yellowbg bluedark">
          <p>Projeto não encontrado.</p>
        </div>
      </>
    );
  }

  const {
    title,
    imageUrl,
    details: {
      intro,
      campaignParts,
      emails,
      socialPosts,
      blogPost
    }
  } = project;

return (
    <>
      <SimpleNavbar />
      <main className="min-h-screen yellowbg bluedark text-white px-4 md:px-8 lg:px-16 pt-24 pb-16 max-w-6xl mx-auto space-y-14">
        <h1 className="text-4xl md:text-5xl font-extrabold">{title}</h1>

        <img
          src={imageUrl}
          alt={title}
          className="w-full max-h-[400px] object-cover rounded-xl shadow-md"
        />

        <section className="text-base md:text-lg leading-relaxed space-y-4">
          <p>{intro}</p>
        </section>

        <section className="bg-bluedark border border-gray-700 rounded-xl p-6 md:p-8 space-y-4 text-base md:text-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Campanha composta por:</h2>
          <ul className="list-disc list-inside space-y-2">
            {campaignParts.map((part, i) => <li key={i}>{part}</li>)}
          </ul>
        </section>

        <section className="bg-bluedark border border-gray-700 rounded-xl p-6 md:p-8 space-y-8 text-base md:text-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">E-mails promocionais</h2>
          {emails.map(({ title, heading, subject, body }, i) => (
            <div key={i} className="border border-gray-700 rounded-lg p-4 space-y-2">
              <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
              <p className="font-bold">{heading}</p>
              <p className="italic">{subject}</p>
              <p className="whitespace-pre-wrap">{body}</p>
            </div>
          ))}
        </section>

        <section className="bg-bluedark border border-gray-700 rounded-xl p-6 md:p-8 space-y-6 text-base md:text-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Postagens para Redes Sociais</h2>
          {socialPosts.map((post, i) => (
            <div key={i} className="border border-gray-700 rounded-lg p-4">
              <p>{post}</p>
            </div>
          ))}
        </section>

        <section className="bg-bluedark border border-gray-700 rounded-xl p-6 md:p-8 space-y-6 text-base md:text-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Post para Blog</h2>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{blogPost.title}</h2>
          <p>{blogPost.intro}</p>
          <ol className="list-decimal list-inside space-y-2">
            {blogPost.reasons.map((reason, i) => (
              <li key={i}>{reason}</li>
            ))}
          </ol>
          <p>{blogPost.conclusion}</p>
        </section>
      </main>
    </>
  );
}
