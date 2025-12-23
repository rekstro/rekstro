// --- Efeito glitch no título ---
document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('.title');
  if (!title) return;

  setInterval(() => {
    const chars = '()~-_+=[]{};:\\,./?|\\‹›«»…•¶§©®™°±×÷µ$€£¥₩₿₺₹₽₴₦←↑→↓↔↕↩↪↺↻⟵⟶⟷⟹⟺∞≠≈≤≥√∑∏∂∆∇∫⊕⊗∈∉∅∀∃■■▣▲△▼▽◆◇○●◎▪▫░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├┼┘┌╞╟╚╔╩╦╠╬áàäâãçéèêëíìîïóòôöõúùûüñÿβ½¼¾‰‱Ω℧℃℉☑☒✔✖✚✦✧★☆☀☁☂☃☠☢☣';
    let str = '';
    for (let i = 0; i < title.textContent.length; i++) {
      if (Math.random() > .8) str += chars.charAt(Math.floor(Math.random() * chars.length));
      else str += title.textContent[i];
    }
    title.textContent = str;
  }, 200);
});

// --- MODAL BLOG ---
document.addEventListener('DOMContentLoaded', () => {
  const posts = document.querySelectorAll('.post');
  const modal = document.getElementById('modal');
  const closeBtn = modal?.querySelector('.close');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');

  const artigos = {
    1: {
  titulo: 'Propagação do Micélio de Cogumelos',
  texto: `

<p>O micélio é a rede fibrosa que forma o corpo vegetativo dos fungos. Para cultivar cogumelos em casa ou em larga escala, primeiro precisamos <strong>propagar o micélio</strong>. Este processo envolve inoculação, incubação e frutificação.</p>

<h2>1. Preparação do Substrato</h2>
<p>O substrato serve de alimento para o micélio. Os tipos mais comuns são:</p>
<ul>
    <li><strong>Pedaço de palha</strong>: limpa, esterilizada e misturada com farinha ou grãos.</li>
    <li><strong>Fibra de coco</strong>: hidratada, filtrada e esterilizada.</li>
    <li><strong>Composto agrícola</strong>: enriquecido com matéria orgânica.</li>
</ul>

<h3>Esterilização</h3>
<p>A esterilização evita contaminantes. Use autoclave a 121 °C por 15–20 minutos ou panela de pressão a 1,2 bar por 30 min.</p>

<h2>2. Inoculação do Micélio</h2>
<p>O micélio pode ser adquirido em blocos, fios ou grãos cultivados. A inoculação envolve:</p>
<ol>
    <li><strong>Lavar as mãos e usar luvas esterilizadas.</strong></li>
    <li><strong>Limpar o ambiente com álcool 70 %.</strong></li>
    <li><strong>Separar o substrato em sacos ou recipientes limpos.</strong></li>
    <li><strong>Inserir os pedaços de micélio uniformemente no substrato.</strong></li>
</ol>

<h3>Cuidados Pós-inoculação</h3>
<p>Mantenha a temperatura entre 22–26 °C e umidade relativa em torno de 80 %. Feche bem o recipiente para evitar entrada de ar seco.</p>

<h2>3. Incubação</h2>
<p>Durante a incubação, o micélio cresce lentamente:</p>
<ul>
    <li><strong>Duração:</strong> 10–21 dias dependendo da espécie.</li>
    <li><strong>Observações:</strong> procure por crescimento uniforme e ausência de bolores verdes ou pretos.</li>
</ul>

<h3>Controle de Temperatura e Umidade</h3>
<p>Mantenha a temperatura constante. Se a umidade cair, pulverize água destilada sem usar spray para evitar contaminação.</p>

<h2>4. Frutificação (Raspagem)</h2>
<p>Quando o micélio colonizou todo o substrato, é hora de induzir a frutificação:</p>
<ol class="step">
    <li><strong>Reduzir a temperatura para 18–22 °C.</strong></li>
    <li><strong>Aumentar a circulação de ar (ventilação cruzada).</strong></li>
    <li><strong>Mantenha a umidade em 85–95 % usando nebulizadores ou bandejas com água.</strong></li>
</ol>

<p>Essas condições desencadeiam o aparecimento dos primórdios, que evoluem para <strong>corpos de frutificação maduros (cogumelos)</strong>. A colheita ocorre quando as capas se abrem e liberam esporos.</p>

<h2>5. Manutenção e Multiplicação</h2>
<ul>
    <li>Recolha os cogumelos e reserve parte do micélio para novos lotes.</li>
    <li>Armazene o micélio inoculado em sacos plásticos fechados na geladeira (4 °C) por até 3 meses.</li>
</ul>

<h2>Conclusões</h2>
<p>A propagação de micélio é uma ciência que combina higiene, controle ambiental e paciência. Seguindo estes passos, você pode produzir cogumelos frescos e saudáveis em qualquer escala desejada.</p>
  `
},

2: {
  titulo: 'Cogumelos Reishi, Shimeji e Juba de Leão',
  texto: `

<h2>1. Cogumelo Reishi (<em>Ganoderma lucidum</em>)</h2>
<p>O <strong>Reishi</strong>, conhecido como "cogumelo da imortalidade", é um fungo medicinal originário da Ásia. Cresce naturalmente sobre troncos de árvores de madeira dura e apresenta corpo de frutificação lenhoso, com coloração vermelho-alaranjada e superfície brilhante.</p>

<h3>Características</h3>
<ul>
  <li>Textura rígida e não comestível em estado fresco.</li>
  <li>Usado principalmente em <strong>chás, cápsulas e extratos medicinais</strong>.</li>
  <li>Rico em <em>beta-glucanas</em> e <em>triterpenos</em>, compostos que auxiliam o sistema imunológico e têm ação antioxidante.</li>
</ul>

<h3>Condições de Cultivo</h3>
<ul>
  <li><strong>Substrato:</strong> serragem de madeira dura misturada com farelo de arroz ou trigo.</li>
  <li><strong>Temperatura de incubação:</strong> 25–30 °C.</li>
  <li><strong>Frutificação:</strong> 20–28 °C com umidade de 85–95 %.</li>
  <li><strong>Ciclo total:</strong> cerca de 90–100 dias.</li>
</ul>

<p>O Reishi é um dos fungos medicinais mais valorizados do mundo. Seu cultivo é feito em blocos de serragem esterilizados ou em troncos, sendo voltado para a <strong>fitoterapia e suplementação natural</strong>.</p>


<h2>2. Cogumelo Shimeji (<em>Pleurotus spp.</em>)</h2>
<p>O <strong>Shimeji</strong> é um cogumelo comestível muito apreciado na culinária asiática e brasileira. Desenvolve-se em cachos densos, com textura tenra e sabor marcante. As espécies mais comuns são o <em>Pleurotus ostreatus</em> (shimeji branco ou cinza) e o <em>Pleurotus eryngii</em> (shimeji rei).</p>

<h3>Características</h3>
<ul>
  <li>Chapéu convexo, variando de branco a marrom-acinzentado.</li>
  <li>Haste curta e macia, com aroma leve de nozes.</li>
  <li>Rico em proteínas, fibras, vitaminas do complexo B e minerais.</li>
</ul>

<h3>Condições de Cultivo</h3>
<ul>
  <li><strong>Substrato:</strong> palha de trigo, serragem ou bagaço de cana pasteurizado.</li>
  <li><strong>Temperatura de incubação:</strong> 24–28 °C.</li>
  <li><strong>Frutificação:</strong> 18–22 °C e umidade de 85–95 %.</li>
  <li><strong>Ciclo total:</strong> 30–45 dias.</li>
</ul>

<p>É um dos cogumelos mais fáceis de cultivar, ideal para iniciantes. Pode ser produzido em <strong>sacos de substrato</strong> ou blocos prontos. É amplamente utilizado em pratos refogados, risotos, sopas e grelhados.</p>


<h2>3. Cogumelo Juba de Leão (<em>Hericium erinaceus</em>)</h2>
<p>O <strong>Juba de Leão</strong> é um fungo gourmet e medicinal reconhecido por sua aparência singular — uma massa branca com filamentos longos que lembram uma juba. É nativo da Ásia, Europa e América do Norte e cresce sobre madeiras duras em decomposição.</p>

<h3>Características</h3>
<ul>
  <li>Textura macia e sabor suave, semelhante ao de frutos do mar.</li>
  <li>Comestível e também utilizado em suplementos nutricionais.</li>
  <li>Contém compostos neurotróficos (hericenonas e erinacinas) que estimulam o crescimento de neurônios.</li>
</ul>

<h3>Condições de Cultivo</h3>
<ul>
  <li><strong>Substrato:</strong> serragem de madeira com farelo de trigo e gesso agrícola.</li>
  <li><strong>Temperatura de incubação:</strong> 22–26 °C.</li>
  <li><strong>Frutificação:</strong> 16–21 °C e umidade de 90–95 %.</li>
  <li><strong>Ciclo total:</strong> 40–60 dias.</li>
</ul>

<p>O Juba de Leão tem alto valor culinário e terapêutico. É apreciado tanto por chefs quanto por pesquisadores devido ao seu potencial <strong>neuroprotetor e regenerativo</strong>.</p>

<h2>Conclusão</h2>
<p>Reishi, Shimeji e Juba de Leão representam diferentes vertentes do cultivo de cogumelos: o <strong>medicinal</strong>, o <strong>culinário</strong> e o <strong>funcional</strong>. Cada espécie requer condições específicas de temperatura, umidade e substrato, mas todas podem ser cultivadas com sucesso seguindo práticas adequadas de higiene e controle ambiental.</p>
  `
},
  };

  posts.forEach(post => {
    post.addEventListener('click', () => {
      const id = post.dataset.id;
      const artigo = artigos[id];
      if (!artigo) return;
      modalTitle.textContent = artigo.titulo;
      modalBody.innerHTML = artigo.texto; // agora aceita HTML formatado
      modal.classList.remove('hidden');
    });
  });

  closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.add('hidden');
  });

});
