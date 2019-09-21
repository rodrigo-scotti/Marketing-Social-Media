Projeto de grau 1 da cadeira WEB III.

 - O trabalho deve ser realizado individualmente.

 - O trabalho foca o uso dos recursos de JS vistos em sala de aula.

 - O trabalho deve ser entregue até as 23h55m do dia 07 de outubro através de espaço de postagem próprio no Google Classroom.

 - O trabalho deverá ser postado como um único arquivo compactado, contendo a pasta do projeto com todo código-fonte criado.

 - Trabalhos entregues fora da data não serão aceitos.

Proponha e construa um sistema web que utilize os recursos de JS vistos em sala de aula.

De acordo a explorar bem os recursos, pede-se que o sistema realize as seguintes operações, ou operações que explorem o mesmo tipo de recurso.

Seu sistema deve permitir algum tipo de cadastro com um conjunto de campos. Alguns
destes devem ser obrigatórios:

1. Seu sistema deve exibir a data atual em algum lugar de destaque de todas as telas do sistema.

2. Seu sistema deve possuir uma tela de “cadastro” em que informações são inseridas e armazenadas.

 - O uso de Bando de Dados, arquivos para armazenar a informação ou a construção da página no formato Single Page Application é incentivado, mas não é obrigatório.

3. A informação cadastrada deve ser salva em um objeto de tipo criado por você, capaz de armazenar as informações necessárias para o registro desejado.

 - Antes de ser salva em um objeto, a informação recuperada dos campos da tela deve ser validada, a fim de determinar se atende ou não os critérios para o seu sistema.

 - Para isso, a informação deverá ser recuperada do DOM da página e submetida a validação.
 
 - Caso a informação não seja validada, a estrutura do DOM da página deve ser modificada para exibir ou revelar uma mensagem de erro indicando que há incorreções na informação esperada e por que (ex.: campo obrigatório deixado em branco, número mínimo de caracteres insuficiente para campo, etc.).

4. Cada novo objeto instanciado deve ser armazenado em um array de objetos a fim de ser posteriormente manipulado com maior facilidade.

5. Seu sistema deve permitir também a busca por informações já cadastradas.

 - Em último caso, você pode realizar a busca em informações pré-cadastradas (hardcoded).

 - A busca deve poder ser realizado por, ao menos, dois atributos diferentes do conjunto de informações armazenadas (ex.: nome e matrícula para um aluno, ou placa e cor para um veículo, etc.).

 - A busca deve navegar pelo array de objetos utilizando uma estrutura, for, forEach, map, filter, etc.e mostrar em tela a relação de todos os registros armazenados no array que satisfazem o critério da busca.

6. Seu sistema deve possuir, no mínimo, cinco funções diferentes para realizar as diferentes tarefas (ou parte de tarefas maiores) necessárias ao seu funcionamento. Isso inclui funções definidas dentro da estrutura de objetos ou classes para realizar tarefas para os mesmos.

7. Evite o uso de elevação (hoisting) em seu código e prefira o uso dos recursos introduzido a partir de ES6, como variáveis com escopo de bloco e notação de classe para a criação da estrutura de objetos.

8. Utilize recursos como rest/spread, arrow functions e interpolação de strings conforme sua necessidade

9. Utilize ao menos um ouvinte para uma tarefa do seu sistema.

10. Utilize jQuery para criar pelo menos um dos conjuntos de tarefas, do cadastro ou da busca de informações.
