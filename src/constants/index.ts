export const WHATSAPP_NUMBER = '5543991147316'
export const WHATSAPP_MESSAGE = 'Olá! Gostaria de reservar uma vaga na Colônia de Férias Bosque Encantado! 🌳'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export const INSTAGRAM_URL = 'https://instagram.com/bosqueencantado.pr'

export const EVENT_DATE = 'Julho de 2026'
export const EVENT_TIME = 'das 13h às 18h'
export const DEPARTURE_LOCATION = 'Loja Ciranda'
export const PHONE = '43 99114-7316'

export const ACTIVITIES = [
  {
    id: 1,
    name: 'Corrida do Saco',
    description: 'Diversão garantida em uma das brincadeiras mais clássicas!',
    icon: '🥊',
    color: '#42B649',
  },
  {
    id: 2,
    name: 'Cabo de Guerra',
    description: 'Trabalho em equipe e muita garra nessa disputa emocionante!',
    icon: '💪',
    color: '#26A9E0',
  },
  {
    id: 3,
    name: 'Campo Minado',
    description: 'Raciocínio, coordenação e risadas em campo aberto.',
    icon: '🎯',
    color: '#FF7A00',
  },
  {
    id: 4,
    name: 'Queimada',
    description: 'O clássico de todos os tempos, sempre animado!',
    icon: '🔥',
    color: '#F44336',
  },
  {
    id: 5,
    name: 'Batata Quente',
    description: 'Música, movimento e suspense a cada rodada.',
    icon: '🥔',
    color: '#FDCB2D',
  },
  {
    id: 6,
    name: 'Caça ao Tesouro',
    description: 'Uma aventura pelo bosque em busca de pistas e surpresas.',
    icon: '🗺️',
    color: '#7A2BBE',
  },
  {
    id: 7,
    name: 'Olimpíadas',
    description: 'Competições com medalhas e muito esporte ao ar livre!',
    icon: '🏅',
    color: '#FDCB2D',
  },
  {
    id: 8,
    name: 'Oficina Criativa',
    description: 'Arte, imaginação e criação em um espaço mágico.',
    icon: '🎨',
    color: '#26A9E0',
  },
  {
    id: 9,
    name: 'Cinema na Mata',
    description: 'Filmes ao ar livre com pipoca e natureza ao redor.',
    icon: '🎬',
    color: '#242424',
  },
  {
    id: 10,
    name: 'Algodão Doce',
    description: 'O doce favorito das crianças em meio ao bosque!',
    icon: '🍭',
    color: '#F44336',
  },
  {
    id: 11,
    name: 'Roda de Fogueira',
    description: 'Histórias, músicas e cumplicidade ao redor do fogo.',
    icon: '🔥',
    color: '#FF7A00',
  },
  {
    id: 12,
    name: 'Marshmallow',
    description: 'O momento mais esperado: torrar marshmallow na fogueira!',
    icon: '🍡',
    color: '#42B649',
  },
]

export const TIMELINE_STEPS = [
  {
    id: 1,
    icon: '🚌',
    title: 'Transporte',
    description: 'Saída da Loja Ciranda com toda segurança e animação!',
    color: '#26A9E0',
  },
  {
    id: 2,
    icon: '🌳',
    title: 'Chegada',
    description: 'Bem-vindos ao Bosque Encantado! Primeiro contato com a natureza.',
    color: '#42B649',
  },
  {
    id: 3,
    icon: '🎮',
    title: 'Brincadeiras',
    description: 'Diversão intensa com jogos, gincanas e atividades ao ar livre.',
    color: '#FF7A00',
  },
  {
    id: 4,
    icon: '🍭',
    title: 'Lanche',
    description: 'Pausa deliciosa com algodão doce e guloseimas do bosque.',
    color: '#FDCB2D',
  },
  {
    id: 5,
    icon: '🎬',
    title: 'Cinema',
    description: 'Cinema na mata com pipoca e muito encanto.',
    color: '#7A2BBE',
  },
  {
    id: 6,
    icon: '🔥',
    title: 'Fogueira',
    description: 'Roda de fogueira, histórias e marshmallows quentinhos.',
    color: '#F44336',
  },
  {
    id: 7,
    icon: '🏠',
    title: 'Volta',
    description: 'Retorno seguro para casa com memórias inesquecíveis!',
    color: '#42B649',
  },
]

export const DIFFERENTIALS = [
  {
    id: 1,
    icon: '🌳',
    title: 'Natureza',
    description: 'Espaço em meio a um bosque real, proporcionando contato genuíno com a natureza.',
    color: '#42B649',
  },
  {
    id: 2,
    icon: '🚌',
    title: 'Transporte Incluso',
    description: 'Saímos da Loja Ciranda. Sem preocupação com logística para os pais.',
    color: '#26A9E0',
  },
  {
    id: 3,
    icon: '👩‍🏫',
    title: 'Equipe Especializada',
    description: 'Patricia Cavalli, ex-professora do IEIJI, e especialistas em recreação infantil.',
    color: '#7A2BBE',
  },
  {
    id: 4,
    icon: '🏆',
    title: 'Desenvolvimento',
    description: 'Atividades pensadas para desenvolver habilidades sociais, criativas e físicas.',
    color: '#FDCB2D',
  },
  {
    id: 5,
    icon: '❤️',
    title: 'Segurança',
    description: 'Ambiente seguro, monitorado e preparado especialmente para crianças.',
    color: '#F44336',
  },
  {
    id: 6,
    icon: '🎨',
    title: 'Criatividade',
    description: 'Oficinas e atividades que estimulam a imaginação e a expressão artística.',
    color: '#FF7A00',
  },
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Ana Paula Rodrigues',
    role: 'Mãe da Isabela, 7 anos',
    text: 'Minha filha não parava de falar da colônia! A organização foi impecável e ela fez amigos incríveis. Com certeza vamos participar de novo!',
    stars: 5,
    avatar: '👩',
  },
  {
    id: 2,
    name: 'Carlos Mendes',
    role: 'Pai do Miguel, 9 anos',
    text: 'Nunca vi meu filho tão animado. O contato com a natureza, as brincadeiras e a equipe foram excepcionais. Vale cada centavo!',
    stars: 5,
    avatar: '👨',
  },
  {
    id: 3,
    name: 'Juliana Costa',
    role: 'Mãe do Pedro e da Sofia',
    text: 'Levei meus dois filhos e os dois amaram! A Patricia é incrível com as crianças. A fogueira com marshmallow foi o ponto alto!',
    stars: 5,
    avatar: '👩‍🦱',
  },
  {
    id: 4,
    name: 'Roberto Lima',
    role: 'Pai da Laura, 8 anos',
    text: 'Minha Laura é tímida, mas saiu de lá com novos amigos e muita confiança. A experiência na natureza fez toda a diferença!',
    stars: 5,
    avatar: '👨‍🦳',
  },
]

export const FAQ_ITEMS = [
  {
    id: 1,
    question: 'Qual é a faixa etária da colônia de férias?',
    answer: 'A Colônia de Férias Bosque Encantado é para crianças de 4 a 12 anos. As atividades são adaptadas para cada faixa etária, garantindo diversão e segurança para todos.',
  },
  {
    id: 2,
    question: 'O transporte está incluído no valor?',
    answer: 'Sim! O transporte está totalmente incluso. Saímos da Loja Ciranda e retornamos ao mesmo local ao final do dia.',
  },
  {
    id: 3,
    question: 'As crianças precisam levar alguma coisa?',
    answer: 'As crianças devem usar roupas confortáveis e tênis fechado. Lanche e água são fornecidos, mas podem trazer a mochilinha com roupas extras caso queiram.',
  },
  {
    id: 4,
    question: 'Qual é a relação de monitores por criança?',
    answer: 'Trabalhamos com no máximo 10 crianças por monitor, garantindo atenção individualizada e total segurança durante todas as atividades.',
  },
  {
    id: 5,
    question: 'O que acontece em caso de chuva?',
    answer: 'Temos um plano B completo com atividades cobertas igualmente divertidas. Sua criança nunca vai perder a diversão!',
  },
  {
    id: 6,
    question: 'Como faço para reservar uma vaga?',
    answer: 'É simples! Clique no botão de WhatsApp em qualquer parte da página e fale diretamente conosco. As vagas são limitadas, então não deixe para depois!',
  },
]
