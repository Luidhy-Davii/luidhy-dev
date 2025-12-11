document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contato-form');
  const mensagemDiv = document.getElementById('form-mensagem');

  if (!form) return;

  // Função auxiliar para verificar se está vazio ou só espaços
  const estaVazio = (valor) => !valor || valor.trim() === '';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Reseta mensagens anteriores
    mensagemDiv.textContent = '';
    mensagemDiv.className = 'form-mensagem';

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.message.value.trim();

    // Validações detalhadas
    if (estaVazio(nome)) {
      mensagemDiv.textContent = 'Por favor, preencha seu nome.';
      mensagemDiv.className = 'form-mensagem erro';
      return;
    }

    if (estaVazio(email)) {
      mensagemDiv.textContent = 'Por favor, preencha seu e-mail.';
      mensagemDiv.className = 'form-mensagem erro';
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      mensagemDiv.textContent = 'Digite um e-mail válido.';
      mensagemDiv.className = 'form-mensagem erro';
      return;
    }

    if (estaVazio(mensagem)) {
      mensagemDiv.textContent = 'Por favor, escreva sua mensagem.';
      mensagemDiv.className = 'form-mensagem erro';
      return;
    }

    if (mensagem.length < 10) {
      mensagemDiv.textContent = 'A mensagem deve ter pelo menos 10 caracteres.';
      mensagemDiv.className = 'form-mensagem erro';
      return;
    }

    // Se chegou aqui, tudo válido — envia
    mensagemDiv.textContent = 'Enviando mensagem...';
    mensagemDiv.className = 'form-mensagem enviando';

    try {
      const formData = new FormData(form);

      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        mensagemDiv.textContent = 'Mensagem enviada com sucesso! Entrarei em contato em breve. 🚀';
        mensagemDiv.className = 'form-mensagem sucesso';
        form.reset();
      } else {
        throw new Error('Erro no servidor');
      }
    } catch (error) {
      mensagemDiv.textContent = 'Ops! Ocorreu um erro ao enviar. Tente novamente ou me contate diretamente.';
      mensagemDiv.className = 'form-mensagem erro';
    }
  });
});