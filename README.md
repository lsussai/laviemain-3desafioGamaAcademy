# La Vie - Saúde Mental

- Neste projeto foi feito uma API para criar registros de psicólogos, pacientes e seus prontuários de uma clínica de saúde mental
      Projeto desenvolvido durante o Desafio 3 oferecido pela Gama Academy.

#Descrição das Funcionalidades

Pacientes: Foi feito um CRUD simples que pode ser observado da documentação

Psicólogos: No CRUD feito para os psicólocos foi utilizado o pacote bcrypt que é responsável pela encryptação da senha tanto na hora de fazer o cadastro quanto na utilização da senha!

Login do psicólogo: No login é feito uma autenticação através de email e senha que tem como resposta um token gerado.

Atendimentos: Para criação do atendimento é necessário uma autorização. Essa autorização é feita pelo token.

