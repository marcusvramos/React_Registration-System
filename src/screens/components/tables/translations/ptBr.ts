export const tableTranslates = {
  clients: {
    tableHead: {
      document: "CPF",
      name: "Nome",
      address: "Endereço",
      cityAndUF: "Cidade/UF",
      neighborhood: "Bairro",
      zipCode: "CEP",
    },
    goBackButtonLabel: "Novo Cliente",
    noContent: "Ainda não há clientes cadastrados",
    wantToDelete: "Deseja realmente excluir esse cliente?",
  },
  categories: {
    tableHead: {
      description: "Descrição",
      name: "Nome",
    },
    goBackButtonLabel: "Nova Categoria",
  },
  providers: {
    tableHead: {
      document: "CNPJ",
      name: "Nome",
      address: "Endereço",
      phoneNumber: "Nº telefone",
      email: "E-mail",
      website: "Site",
      companyDescription: "Descrição",
    },
    goBackButtonLabel: "Novo Fornecedor",
    noContent: "Ainda não há fornecedores cadastrados",
    wantToDelete: "Deseja realmente excluir esse fornecedor?",
  },
  products: {
    tableHead: {
      name: "Nome",
      description: "Descrição",
      unitPrice: "Preço unitário",
      stockQuantity: "Quantidade em estoque",
      brand: "Marca",
      model: "Modelo",
      manufacturingDate: "Data de fabricação",
      category: "Categoria",
      provider: "Fornecedor"
    },
    goBackButtonLabel: "Novo Produto",
  },
  sale: {
    tableHead:{
      client: "Cliente",
      quantity: "Quantidade de Produtos",
      value: "Valor",
      paymentMethod: "Forma de Pagamento"
    },
    goBackButtonLabel: "Nova Venda"
  },
  purchase: {
    tableHead:{
      provider: "Fornecedor",
      quantity: "Quantidade de Produtos",
      value: "Valor",
      paymentMethod: "Forma de Pagamento"
    },
    goBackButtonLabel: "Nova Compra"
  }
};