// Adiciona um evento de escuta ao formulário de login que reage ao evento 'submit'
document.getElementById('loginForm').addEventListener('submit', function(e) {
    // Impede o comportamento padrão do formulário, que é enviar os dados e recarregar a página
    e.preventDefault();

    // Obtém os valores inseridos nos campos de username e password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Obtém o elemento onde será exibida a mensagem de erro
    const errorMessage = document.getElementById('error-message');

    // Array de objetos representando os usuários válidos e suas respectivas páginas de redirecionamento
    const users = [
        { username: 'Matheus', password: 'santos123', redirect: 'menu_matheus.html' },
        { username: 'Jose', password: 'robertinho123', redirect: 'menu_junior.html' },
        { username: 'Day', password: 'rodrigues123', redirect: 'menu_day.html' },
        { username: 'Karyna', password: 'rocha123', redirect: 'menu_karyna.html' }
    ];

    // Procura no array de usuários um objeto que corresponda ao username e password fornecidos
    const user = users.find(user => user.username === username && user.password === password);

    // Se um usuário correspondente for encontrado, redireciona para a página específica desse usuário
    if (user) {
        window.location.href = user.redirect;
    } else {
        // Se não encontrar um usuário correspondente, exibe uma mensagem de erro
        errorMessage.textContent = 'Nome de usuário ou senha inválidos';
        errorMessage.style.display = 'block'; // Exibir a mensagem de erro
    }
});
