export const MENU = [
  // PLATS
  { id: 'ragout', cat: 'plat', name: 'Ragoût de Boeuf', ingredients: [
    { name: 'Viande de boeuf', supplier: 'Boucherie', qty: 1 },
    { name: 'Oignons', supplier: 'Grapseed', qty: 2 },
    { name: 'Pommes de terre', supplier: 'Grapseed', qty: 2 },
    { name: "Huile d'olive", supplier: 'Biogood', qty: 1 },
  ]},
  { id: 'quiche', cat: 'plat', name: 'Quiche Lorraine', ingredients: [
    { name: 'Jambon', supplier: 'Boucherie', qty: 1 },
    { name: 'Farines', supplier: 'Grapseed', qty: 2 },
    { name: 'Poivres', supplier: 'Biogood', qty: 2 },
    { name: 'Crème', supplier: 'LTD', qty: 1 },
  ]},
  { id: 'tartare', cat: 'plat', name: 'Tartare de Boeuf', ingredients: [
    { name: 'Viande de boeuf haché', supplier: 'Boucherie', qty: 1 },
    { name: 'Épices', supplier: 'Grapseed', qty: 2 },
    { name: 'Oeuf', supplier: 'Biogood', qty: 1 },
  ]},
  { id: 'risotto', cat: 'plat', name: 'Risotto au Homard', ingredients: [
    { name: 'Riz non préparé', supplier: 'Grapseed', qty: 2 },
    { name: 'Épice', supplier: 'Grapseed', qty: 1 },
    { name: 'Homard', supplier: 'Millars', qty: 1 },
    { name: 'Crèmes', supplier: 'LTD', qty: 2 },
  ]},
  { id: 'cesar', cat: 'plat', name: 'Salade César', ingredients: [
    { name: 'Blanc de poulet', supplier: 'Boucherie', qty: 1 },
    { name: 'Salades', supplier: 'Grapseed', qty: 2 },
    { name: 'Tomate', supplier: 'Grapseed', qty: 1 },
    { name: 'Fromage', supplier: 'Grapseed', qty: 1 },
  ]},
  { id: 'porc', cat: 'plat', name: 'Sauté de Porc au Caramel', ingredients: [
    { name: 'Côte de porc', supplier: 'Boucherie', qty: 1 },
    { name: 'Pack choix', supplier: 'Grapseed', qty: 2 },
    { name: 'Oignon', supplier: 'Grapseed', qty: 1 },
    { name: 'Sel', supplier: 'Grapseed', qty: 2 },
    { name: "Huiles d'olive", supplier: 'Biogood', qty: 2 },
    { name: 'Caramel', supplier: 'LTD', qty: 1 },
  ]},
  // DESSERTS
  { id: 'churros', cat: 'dessert', name: 'Churros au Chocolat', ingredients: [
    { name: 'Farine', supplier: 'Grapseed', qty: 1 },
    { name: 'Beurre', supplier: 'Grapseed', qty: 1 },
    { name: 'Sucres', supplier: 'Biogood', qty: 2 },
    { name: 'Oeuf', supplier: 'Biogood', qty: 1 },
    { name: 'Chocolats', supplier: 'LTD', qty: 2 },
  ]},
  { id: 'tiramisu', cat: 'dessert', name: 'Tiramisu Café', ingredients: [
    { name: 'Café', supplier: 'Biogood', qty: 2 },
    { name: 'Oeuf', supplier: 'Biogood', qty: 1 },
    { name: 'Crèmes', supplier: 'LTD', qty: 2 },
  ]},
  { id: 'eclair', cat: 'dessert', name: 'Éclair à la Vanille', ingredients: [
    { name: 'Farine', supplier: 'Grapseed', qty: 1 },
    { name: 'Vanille', supplier: 'Grapseed', qty: 1 },
    { name: 'Oeufs', supplier: 'Biogood', qty: 2 },
    { name: 'Crèmes', supplier: 'LTD', qty: 2 },
  ]},
  { id: 'pannacotta', cat: 'dessert', name: 'Panna Cotta à la Fraise', ingredients: [
    { name: 'Lait', supplier: 'Grapseed', qty: 1 },
    { name: 'Fraise', supplier: 'Grapseed', qty: 1 },
    { name: 'Sucres', supplier: 'Biogood', qty: 2 },
  ]},
  { id: 'macaron', cat: 'dessert', name: 'Boite de Macaron', ingredients: [
    { name: 'Fraise', supplier: 'Grapseed', qty: 1 },
    { name: 'Sucres', supplier: 'Biogood', qty: 2 },
    { name: 'Pomme', supplier: 'Biogood', qty: 1 },
    { name: 'Myrtille', supplier: 'Biogood', qty: 1 },
    { name: 'Café', supplier: 'Biogood', qty: 1 },
  ]},
  // BOISSONS
  { id: 'kiwi', cat: 'boisson', name: 'Infusion de Kiwi', ingredients: [
    { name: 'Kiwis', supplier: 'Biogood', qty: 3 },
    { name: 'Sucres', supplier: 'Biogood', qty: 3 },
    { name: 'Feuilles de thé', supplier: 'LDO', qty: 3 },
    { name: 'Eau purifiée', supplier: 'LTD', qty: 3 },
  ]},
  { id: 'limonade', cat: 'boisson', name: 'Limonade', ingredients: [
    { name: 'Citrons jaune', supplier: 'Biogood', qty: 2 },
    { name: 'Citrons vert', supplier: 'Biogood', qty: 2 },
    { name: 'Sucres', supplier: 'Biogood', qty: 2 },
    { name: 'Eau purifiée', supplier: 'LTD', qty: 3 },
  ]},
  { id: 'pina', cat: 'boisson', name: 'Thé de Pina', ingredients: [
    { name: 'Sucres', supplier: 'Biogood', qty: 2 },
    { name: 'Caisse de fruits', supplier: 'Vignoble', qty: 2 },
    { name: 'Eau purifiée', supplier: 'LTD', qty: 2 },
  ]},
  { id: 'bubble', cat: 'boisson', name: 'Bubble Tea Fruit Rouge', ingredients: [
    { name: 'Fraises', supplier: 'Grapseed', qty: 2 },
    { name: 'Sucres', supplier: 'Biogood', qty: 2 },
    { name: 'Myrtilles', supplier: 'Biogood', qty: 2 },
    { name: 'Eau purifiée', supplier: 'LTD', qty: 2 },
  ]},
  { id: 'cappuccino', cat: 'boisson', name: 'Cappuccino', ingredients: [
    { name: 'Chocolat noir', supplier: 'LTD', qty: 2 },
    { name: 'Eau purifiée', supplier: 'LTD', qty: 2 },
  ]},
  { id: 'cafe', cat: 'boisson', name: 'Café Noir', ingredients: [
    { name: 'Grains de café', supplier: 'Biogood', qty: 2 },
    { name: 'Eau purifiée', supplier: 'LTD', qty: 2 },
  ]},
];
