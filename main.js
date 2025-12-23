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