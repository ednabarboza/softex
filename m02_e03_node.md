<h1>📚 Crie um pequeno servidor web que contenha várias rotas.
Em cada rota, você deverá fazer o controle do fluxo de requisições de maneira estática ou dinâmica, alterne entre essas formas usando placeholders e query.</h1>

Obs: O arquivo main.js mostra a alteração de rota usando o placeholder id já o arquivo index.js mostra a alteração de rota usando o query.

<b>Para rodar:</b>
1) No main.js <br>
No terminal: node main.js <br>
Na página web: http://localhost:8080/usuarios:id <br>

2) No index.js <br>
No terminal: node index.js <br>
Na página web:http://localhost:8080/listar?page=1&pageSize=20 <br>
Na url passar após a barra final que representa a rota um sinal de interrogação que diz que o que vem depois disso é uma query param e após ela escrevemos as 
propriedades que colocamos como a <i>page</i> e a <i>pageSize</i>.
