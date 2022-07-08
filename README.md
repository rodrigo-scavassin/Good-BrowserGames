# COMO USAR O GIT NO VISUAL STUDIO CODE

Neste exemplo vou explicar como utilizar o VSCode com a extensão Git.

---

## Links
Visual Studio Code - https://code.visualstudio.com/
Git Extension for Visual Studio Code - https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github

Após a instalação do VSCode e da Extensão, note que um novo botão apareceu em seu menu lateral. Esse é o botão para modificar branches (Uma Ramificação, em controle de versão e gerenciamento de configuração de software)
![image](https://user-images.githubusercontent.com/78883240/158706074-5bca1e22-bba9-4ff0-938c-9c9a98bda3a3.png)

## Como controlar o repositório pela extensão:
---
### Etapa 1: Clonando o Repositório: 

Caso já tenha feito isso, pule para Localizando a pasta no VSCODE

1. Crie um diretório(pasta) em qualquer lugar de seu computador para clonarmos o projeto nela.
2. Ao criar a pasta, usando o explorador de arquivos do windows clique na barra de caminho do diretório e cole:
git clone https://github.com/The-Mave/Good-Browser-Games.git
3. A pasta será clonada. 
4. Após isso basta abrir o VSCode.

### Etapa 2: Localizando a pasta no VSCode
1. CLique em File > Open Folder
2. Selecione o mesmo diretório onde o projeto foi clonado na Primeira Etapa.
3. Pronto você está na pasta do projeto.

### Etapa 3: Instalando o Git Extension for Visual Studio Code
1. Após instalar o Git Extension for Visual Studio Code você precisa sincronizar ele com sua conta do GitHub (para utilizar melhor suas funções)
2. Clique no ícone do GitHub na barra lateal (O ícone de gatinho)
3. Faça o procedimento que ele te indica de efetuar login pelo navegador e autorizar o uso do mesmo no VSCode
4. Após fazer isso você estára logado.

### Etapa 4: Baixando última versão do repositório para a máquina local 
O Pull é usado para buscar e baixar conteúdo de repositórios remotos e fazer a atualização imediata ao repositório local para que os conteúdos sejam iguais.

1. Fazer o Pull é basicamente sincronizar o projeto que está no Github com o da sua maquina, no sentido de "baixar" os arquivos novos. É importante fazer isso sempre que for fazer alguma alteração, para que seu repositório não esteja desatualizado.
2. Para "baixar" a ultima versão do projeto, clique em "Source Control" a ferramenta que fica logo abaixo da busca.


![image](https://user-images.githubusercontent.com/78883240/158711642-091c6185-d38a-4a7d-841a-cd3a2e4fd665.png)


3. Depois disso, clique nos três pontihos no superior direito do menu do SourceControl clique em Pull, Push > Pull from ... 
4. E insira o nome da Remote que quer atualizar com seu projeto local, geralmente optamos sempre pela origin pois é a raiz de nosso projeto e é onde fica tudo que está em produção, podem existir outras remotes como, develop ou teste para fazer testes internos antes de subir para o website/produção
5. Selecione origin/main e basta clicar, seu repositório será atualizado.

Uma maneira mais pratica e visual de fazer isso é abrir o console do Visual Studio (ctrl + ') e digitar:
> git pull

Ele irá retornar uma mensagem positiva ou negativa do resultado.


![image](https://user-images.githubusercontent.com/78883240/158712548-bb48e2c8-37ad-45e0-95df-9dc510e986bc.png)

### Etapa 5: Subindo alterações I 
#### Criando branch
Uma ramificação no git é um ponteiro para as alterações feitas nos arquivos do projeto. É útil em situações nas quais você deseja adicionar um novo recurso ou corrigir um erro, gerando uma nova ramificação garantindo que o código instável não seja mesclado nos arquivos do projeto principal

É importante que, para subir as modificações que você fez é sempre ideal criar uma branch para a mesma.
1. Ao fazer alguma alteração, elas serão indicadas no menu de Source Control, você pode optar entre subir ou não uma alterção.
2. Para subir uma das alterações, primeiramente você deve dar Stage nela, ou seja, preparar para o commit. 
3. Você pode fazer isso colocando o mouse em cima do arquivo modificado na ferramenta de Source Controle  clicar na opção com um [ + ] 

![image](https://user-images.githubusercontent.com/78883240/158714060-9cdaca94-a3ad-4c9c-a1bc-66e47860ae6a.png)

4. Após fazer isso o arquivo será adicionado em Staged Changes, você pode adicionar mais de um arquivos para Staged Changes.
5. Agora devemos criar uma branch para as alterações que foram feitas, nesse exemplo vou criar uma branch com o nome de "feature/teste"

Geralmente usamos alguns prefixos para organizar melhor, como: 

FEATURE - Para novas Funcionalidades
HOTFIX - Para alterações

Para criar a branch vamos clicar em três pontinhos (...) > Branch > Create Branch...  
Então iremos colocar o nome da nossa branch: "feature/teste"

Pronto, branch criada.

#### Fazendo Commit
"Commit refere-se ao processo de tornar permanente um conjunto de alterações, ou seja, de efetivar as alterações."

1. Fazer um commit é basicamente definir que as alterações que você fez fiquem em um "pacote" 
2. Para fazer o Commit basta clicar em:

![image](https://user-images.githubusercontent.com/78883240/158714820-631f0cbb-4b4a-4bd9-be03-ee9af2f0fa3a.png)

3. Pronto, o commit foi feito. 
4. Agora basta publicar as alterações, para isso basta fazer a Publicação clicando em Publish Branch

Quando você publica a Branch, ela não está oficialmente no repositório, ela está em um "braço" dele, para que as alterações que voê fez subam para o projeto principal "origin/main" você precisa criar um Pull Request para então fazer um Merge(juntar) com o projeto oficial

### Fazendo um Pull Request
O Pull Request é uma forma colaborativa de compartilhar criação ou mudanças de código no repositório, de forma que facilite ser revisado e/ou discutido entre todos os membros do time

1. Para você poder sincronizar seu projeto local com o repositório você precisa criar um Pull Request (Pedido de Alteração)
2. Para fazer isso, clique na ferramenta Create Pull Request no canto superior do Source Control

![image](https://user-images.githubusercontent.com/78883240/158822341-efe7300e-17e8-4a05-9e8d-0569d9efc92b.png)

3. A tela de Pull Request irá aparecer, pedindo informações
4. Na parte MERGE CHANGES FROM você irá selecionar de onde as alteraç~eos irão sair, no caso elas irãi sair da sua Branch Local, que foi criada no passo
