import { useParams } from 'react-router-dom';
import SimpleNavbar from './SimpleNavbar';
import SolisEnergy from '../images/SolisEnergy.png';
import PostSolis from '../images/PostSolisEnergy.jpg'
import GlobalTrek from '../images/GlobalTrek.png'; 
import PostGlobal from '../images/GlobalTrekPost.png'

const projects = [
 {
  id: 'solis-energy',
  title: 'Campanha de Verão - Solis Energy',
  description: 'Copywriting institucional para campanha de verão da Solis Energy, promovendo seus serviços de instalação de placas solares e reforçando os benefícios da energia limpa.',
  imageUrl: SolisEnergy,
  details: {
    introTitle: 'Sobre o Projeto',
    intro: `A Solis Energy é uma empresa especializada na venda e instalação de placas solares para geração de energia elétrica. Durante o verão, fui contratado para desenvolver a comunicação estratégica da campanha promocional da empresa.

O objetivo era aproveitar o aumento da demanda por energia nos meses mais quentes para posicionar a Solis como uma alternativa inteligente, econômica e sustentável para os consumidores. A campanha buscou gerar autoridade de marca, urgência na ação e conversão imediata através de diversos canais.`,
    campaignParts: [
      'E-mail marketing com tom urgente e foco nos 50 primeiros clientes.',
      'Conteúdo para redes sociais destacando economia e sustentabilidade.',
      'Artigo no blog com CTA forte e estrutura SEO-friendly.'
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
      {
        type: 'image',
        src: PostSolis,
        alt: 'Post da campanha Solis Energy'
      },
      '1- O calorzão chegou? Aproveite 25% de desconto na instalação de placas solares com a Solis Energy. Deixe seu ar-condicionado ligado sem medo da conta de luz. Promoção válida para os 50 primeiros clientes. Corre! #SolisEnergy #PromoVerao.',
      '2- Pare de se preocupar com a conta de luz nesse verão. Com as placas solares da Solis Energy você pode aproveitar o calor sem o peso no bolso. Corra e aproveite a promoção de verão e comece a economizar agora mesmo! #SolisEnergy #PromoVerao #Energia.',
      '3- A energia solar é a fonte de energia limpa mais acessível e mais simples de se instalar! Com a promoção de verão da Solis Energy, fica ainda mais fácil. Até o fim de fevereiro, novos clientes têm até 25% de desconto na instalação. Diminua sua conta de luz hoje, contrate Solis Energy! #PromoVerao #SolisEnergy.',
      '4- Você sabia? Com energia solar, você pode reduzir até 95% da sua conta de luz! E com a promoção de verão da Solis Energy, fica ainda mais fácil: 25% de desconto para novos clientes. Não deixe essa oportunidade passar! #PromoVerao #SolisEnergy.'
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
,
  {
  id: 'proj2',
  title: 'Lançamento de App - Global Trek',
  description: 'Copywriting para lançamento do novo app da Global Trek, voltado para jovens viajantes que buscam praticidade e experiências únicas. A campanha teve foco em storytelling, lifestyle aspiracional e conversão rápida.',
  imageUrl: GlobalTrek,
  details: {
    introTitle: 'Contexto do Projeto',
    intro: `A Global Trek é uma startup focada em facilitar a vida de jovens viajantes que desejam explorar o mundo com liberdade e praticidade. Em seu lançamento oficial, a empresa precisava de uma campanha de copywriting que traduzisse o espírito de aventura, otimismo e praticidade que o app oferece.

Meu papel foi desenvolver textos estratégicos para diferentes canais — site, redes sociais, email e blog — com foco em conversão e posicionamento de marca. O objetivo era mostrar que viajar pode (e deve) ser simples, conectada e inesquecível.`,
    campaignParts: [
      'Landing page com storytelling envolvente e seção de prova social.',
      'Campanha no Instagram com foco em lifestyle e pertencimento.',
      'Newsletter com copy objetiva e CTA forte para instalação do app.'
    ],
    emails: [
      {
        title: 'Email 1',
        heading: 'Descubra o mundo com um clique',
        subject: 'O novo app de viagens chegou!',
        body: `Já pensou em planejar sua próxima viagem com alguns toques na tela?

A Global Trek nasceu para transformar a forma como você viaja: menos complicação, mais experiência. Com o novo app, você encontra destinos personalizados, promoções em tempo real, roteiros prontos e reviews de viajantes reais que já estiveram lá.

Baixe agora e prepare as malas. O mundo está logo ali.`
      }
    ],
    socialPosts: [
      {
        type: 'image',
        src: PostGlobal,
        alt: 'Post da campanha Global Trek'
      },
      '1- Viajar nunca foi tão fácil. Com o app da Global Trek, você escolhe o destino, fecha sua hospedagem e ainda conhece dicas exclusivas dos locais. Baixe agora! #GlobalTrek #ExploreSemLimites',
      '2- Roteiros prontos, mapas integrados e alertas de promoção? Sim, tudo isso em um só app. Experimente o jeito moderno de viajar com a Global Trek. #AppDeViagem #GlobalTrek',
      '3- Seu próximo destino pode estar a um clique de distância. Com o app da Global Trek, você vive o mundo do seu jeito. Baixe e descubra. #ExploreMais #GlobalTrek'
    ],
    blogPost: {
      title: 'Por que o novo app da Global Trek vai mudar sua forma de viajar',
      intro: `Viajar sempre exigiu muita pesquisa, planejamento e organização. Mas e se tudo isso estivesse em um único lugar?

A Global Trek é mais do que um app — é uma plataforma para quem quer viver experiências reais e práticas, sem perder tempo.`,
      reasons: [
        'Interface intuitiva e bonita: nada de menus confusos. O app é direto, visual e fluido.',
        'Ofertas personalizadas com base no seu perfil: diga o que você gosta, e o app sugere destinos e promoções que combinam com você.',
        'Integração com mapas e roteiros prontos: tenha sua viagem planejada com mapas, rotas, transporte e dicas em tempo real.',
        'Alertas de promoções em tempo real: receba notificações quando surgir uma oferta imperdível no seu destino favorito.',
        'Comunidade de viajantes reais com reviews autênticos: veja o que outros usuários disseram sobre cada lugar antes de decidir.'
      ],
      conclusion: `A Global Trek acredita que viajar é um direito de todos — e deve ser simples, segura e inspiradora. Com esse novo app, você transforma o planejamento da sua viagem em algo prazeroso e rápido.

Não importa se você quer explorar as montanhas da Colômbia ou os cafés escondidos de Paris — baixe agora e comece sua jornada.`
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
      introTitle,
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
          className="w-full max-h-[300px] object-cover rounded-xl shadow-md"
        />

        <section className="text-base md:text-lg leading-relaxed space-y-4">
          <h2 className="text-5xl font-bold">{introTitle}</h2>
          <p className="whitespace-pre-wrap">{intro}</p>
        </section>

        <section className="bg-bluedark rounded-xl p-6 md:p-8 space-y-4 text-base md:text-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Componentes da campanha</h2>
          <ul className="list-disc list-inside space-y-2">
            {campaignParts.map((part, i) => (
              <li key={i}>{part}</li>
            ))}
          </ul>
        </section>

        <section className="bg-bluedark rounded-xl p-6 md:p-8 space-y-8 text-base md:text-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">E-mails promocionais</h2>
          {emails.map(({ title, heading, subject, body }, i) => (
            <div key={i} className="bg-[#1e2a3a] rounded-lg p-4 space-y-2">
              <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
              <p className="font-bold">{heading}</p>
              <p className="italic">{subject}</p>
              <p className="whitespace-pre-wrap">{body}</p>
            </div>
          ))}
        </section>

        <section className="bg-bluedark rounded-xl p-6 md:p-8 space-y-6 text-base md:text-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Postagens para Redes Sociais</h2>
          {socialPosts.map((post, i) => (
            <div key={i} className="bg-[#1e2a3a] rounded-lg p-4">
              {typeof post === 'string' ? (
                <p>{post}</p>
              ) : post.type === 'image' ? (
                <img src={post.src} alt={post.alt} className="w-full rounded-md shadow" />
              ) : null}
            </div>
          ))}
        </section>

        <section className="bg-bluedark rounded-xl p-6 md:p-8 space-y-6 text-base md:text-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Post para Blog</h2>
          <h3 className="text-xl md:text-2xl font-semibold">{blogPost.title}</h3>
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
