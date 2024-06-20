# Desafio Frontend - Smart Fit

![Smart Fit](./src/assets/img/svg/logo.svg)

> Esse é um pequeno projeto criado no framework Angular como base para a avaliação de habilidades técnicas para o papel de Front-end.

# Preview

![preview](preview.png)

# Proposta de Teste
> A Smart Fit, por atuar no segmento de fitness, passou por várias mudanças na pandemia. Foi necessário desenvolver uma página para buscar unidades **fechadas** ou **abertas** para consulta e reserva.

> Optamos por não disponibilizar a API de buscas de unidades abertas/fechadas original para esse teste.

> Nesse teste você implementará as funcionalidades descritas abaixos. Tenha atenção com as regras de negócios definidas mais adiante.

> Caso não consiga concluir todas as funcionalidade, lembre-se que o mais importante é termos noção da qualidade do código e de suas habilidades para projeto de sistemas. Nesse caso, complemente sua solução com comentários e documentação sobre como terminaria o teste.

### Funcionalidades
- Carrega unidades através do arquivo json `https://test-frontend-developer.s3.amazonaws.com/data/locations.json` com method `GET`
- Busca todas as unidades
- Busca unidades com filtros
- Mostra previsão de resultados encontrados
- Mostra unidades ao buscar

### Regras de negócio
- Filtrar unidades abertas ou fechadas
- Filtrar unidades por período de funcionamento
- Caso não encontre unidades, mostrar uma menssagem ao usuário "Nenhuma unidade encontrada"
- Validar para mostrar ícones corretos de acordo com o status

###⚙️ Como Executar

Para executar a aplicação localmente, siga os passos abaixo:

1. Clone este repositório:

```bash
  git clone https://github.com/dougaandrade/desafio-smart-fit
  cd desafio-smart-fit

```

2. Instale as dependências

```bash
  npm install
```

3. Inicie a aplicação

```bash
  npm start
```

