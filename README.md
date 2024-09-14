# Desafio Frontend - Smart Fit

### Frontend Challenge - Smart Fit

![Smart Fit](./src/assets/img/svg/logo.svg)

> Esse é um pequeno projeto criado no framework Angular como base para a avaliação de habilidades técnicas para o papel de Front-end.
>
> This is a small project created in the Angular framework as a basis for evaluating technical skills for the Front-end role.

# Protótipo Sugerido

### Suggested prototype

![preview](preview-origin.png)

# Protótipo Criado

### Prototype Created

![preview](preview.png)

# Proposta de Teste

> A Smart Fit, por atuar no segmento de fitness, passou por várias mudanças na pandemia. Foi necessário desenvolver uma página para buscar unidades **fechadas** ou **abertas** para consulta e reserva.

### Funcionalidades

- Carrega unidades através do arquivo json `https://test-frontend-developer.s3.amazonaws.com/data/locations.json` com method `GET`
- Busca todas as unidades
- Busca unidades com filtros
- Mostra previsão de resultados encontrados
- Mostra unidades ao buscar

### Regras de negócio

- Filtrar unidades abertas ou fechadas
- Filtrar unidades por período de funcionamento
- Filtrar unidades por Estrutura (Máscara, Banheiros, Vestiário, Bebedouro)
- Validar para mostrar ícones corretos de acordo com o status

### Organizações

- Aplicação do design patern FACADE
- Componente Service(Requisições API)
- Fragmentação dos Componentes(Manutenibilidade do Código)

### ⚙️ Como Executar

Para executar a aplicação localmente, siga os passos abaixo:

> 1. Clone este repositório:

```bash
  git clone https://github.com/dougaandrade/desafio-smart-fit
  cd desafio-smart-fit

```

> 2. Instale as dependências

```bash
  npm install
```

> 3. Inicie a aplicação

```bash
  npm start
```

# Test Proposal

> Smart Fit, as it operates in the fitness segment, went through several changes during the pandemic. It was necessary to develop a page to search for **closed** or **open** units for consultation and reservation.

### Functionalities

- Load units through the json file `https://test-frontend-developer.s3.amazonaws.com/data/locations.json` with method `GET`
- Search all units
- Search units with filters
- Shows prediction of results found
- Shows units when searching

### Business rules

- Filter open or closed units
- Filter units by operating period
- Filter units by Structure (Mask, Bathrooms, Changing Room, Drinking Fountain)
- Validate to show correct icons according to status

### Organizations

- Application of the FACADE patern design
- Service component (API Requests)
- Fragmentation of Components (Code Maintainability)

### ⚙️ How to Execute

To run the application locally, follow the steps below:

> 1. Clone this repository:

```bash
  git clone https://github.com/dougaandrade/desafio-smart-fit
  smart-fit challenge cd

```

> 2. Install dependencies

```bash
  npm install
```

> 3. Start the application

```bash
  npm start
```
