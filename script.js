// --- CONFIGURAÇÕES ---
const GOOGLE_SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbx66vWYj5cL5cwWgzVe2gqKDQZVzEKOX0WHU_LmpMDPS3RjB3MttH4suBWsAfOMaFYT/exec";
const WHATSAPP_NOIVA = "558193149580";

// --- DADOS DOS PRESENTES ---
const giftsData = [
  // COZINHA
  {
    id: 1,
    name: "Assadeira",
    category: "Cozinha",
    linkShopee: "https://shopee.com.br/product/561341313/22099317741?d_id=79dd8&uls_trackid=56ro7qnh01l0&utm_content=FrWfbGUMop3Gvyugz48V8225Mr7",
    linkML: "https://www.mercadolivre.com.br/up/MLBU1727413419?matt_tool=38524122&pdp_filters=item_id:MLB3306155373&ua=LzkbAo-h_B1CuBO9a3GZGt-nzsVqAfPDxDT_HkEpqTTcrHiw#origin=share&sid=share&wid=MLB3306155373&action=whatsapp",
    icon: "🥘",
    maxQty: 3
  },
  {
    id: 2,
    name: "Boleira",
    category: "Cozinha",
    linkShopee: "https://shopee.com.br/product/385241875/22697143547?d_id=79dd8&uls_trackid=56ro7u2100je&utm_content=FrWfbGUMpCRMGzrKZSWq51jWwZ1",
    linkML: "https://www.mercadolivre.com.br/boleira-vidro-ruvolo-boleira-com-tampa-acrilica-e-pe/p/MLB34852629?pdp_filters=item_id%3AMLB4548783116&matt_tool=38524122&ua=8lEVOenmUnXAX9EI00nKesuAL7OztmjVP1Hstsz5EqjGBiid#origin=whatsapp&sid=whatsapp&wid=MLB4548783116",
    icon: "🎂",
    maxQty: 2
  },
  {
    id: 3,
    name: "Cuscuzeira",
    category: "Cozinha",
    linkShopee: "https://shopee.com.br/Cuscuzeiro-Inox-Nº16-Individual-100-Inoxidável-Importado-Linha-Luxo-i.402529311.19749763096?extraParams=%7B%22display_model_id%22%3A192511501279%2C%22model_selection_logic%22%3A3%7D",
    linkML: "https://www.mercadolivre.com.br/up/MLBU4200972369?matt_tool=38524122&pdp_filters=item_id:MLB4843889135&ua=4MhUaDt3mSBWZ9IFRjMaD94zdjggtoB2SjeEF_oTzgGcSITs#origin=share&sid=share&wid=MLB4843889135&action=whatsapp",
    icon: "🍲",
    maxQty: 1
  },
  {
    id: 4,
    name: "Escorredor de arroz",
    category: "Cozinha",
    linkShopee: "https://shopee.com.br/Escorredor-de-Arroz-Inox-Lava-Alimentos-Fruta-Legumes-Verduras-e-Saladas-Cozinha-Multiuso-i.1785484295.58263379842?extraParams=%7B%22display_model_id%22%3A169729006318%2C%22model_selection_logic%22%3A3%7D&rModelId=169729006318&vItemId=58206371744&vModelId=169725752452&vShopId=1665239494",
    linkML: "https://www.mercadolivre.com.br/p/MLB67424667?matt_tool=38524122&pdp_filters=item_id:MLB4616557453&ua=it1Tpyp6P56JSl7qjq_w-sWPOuEXrnYfTf-iWh9MSxkrBhuZ#origin=share&sid=share&wid=MLB4616557453&action=whatsapp",
    icon: "🍚",
    maxQty: 2
  },
  {
    id: 5,
    name: "Escorredor de louças",
    category: "Cozinha",
    linkShopee: "https://shopee.com.br/product/1794268079/58258864542?d_id=79dd8&uls_trackid=56ro8fc501l0&utm_content=FrWfbGS75KwXtYP2cu78FDpfQFy",
    linkML: "https://www.mercadolivre.com.br/p/MLB72907406?matt_tool=38524122&pdp_filters=item_id:MLB4994238223&ua=vFJ0rBlPy5k5iZ74X01zf7lbZsStcwL3fHvril-N9dx_0JFY#origin=share&sid=share&wid=MLB4994238223&action=whatsapp",
    icon: "🍽️",
    maxQty: 1
  },
  {
    id: 6,
    name: "Escorredor de macarrão",
    category: "Cozinha",
    linkShopee: "https://shopee.com.br/Escorredor-De-Massas-24Cm-Ou-28-Cm-De-Inox-Para-Alimentos-De-Cozinha-Prático-E-Fácil-De-Se-Usar-i.478733087.12116563533?extraParams=%7B%22display_model_id%22%3A77424945374%2C%22model_selection_logic%22%3A3%7D&rModelId=77424945374&vItemId=58206134604&vModelId=169414189424&vShopId=1665239494",
    linkML: "https://www.mercadolivre.com.br/p/MLB75508244?matt_tool=38524122&pdp_filters=item_id:MLB7476877324&ua=5HWJrpkiM11r0tdvS5fXZ3ULxUHN80dAInqnjCB99w9khaPV#origin=share&sid=share&wid=MLB7476877324&action=whatsapp",
    icon: "🍝",
    maxQty: 2
  },
  {
    id: 7,
    name: "Espátula para bolo",
    category: "Cozinha",
    linkShopee: "https://shopee.com.br/CONJUNTO-2-PECAS-ESPATULA-E-FACA-PARA-BOLO-DE-ACO-INOX-POSITANO-i.707647199.56917831631?extraParams=%7B%22display_model_id%22%3A292958816306%2C%22model_selection_logic%22%3A3%7D",
    linkML: "https://www.mercadolivre.com.br/p/MLB77372457?matt_tool=38524122&pdp_filters=item_id:MLB5220435105&ua=k8yHyO1zHtNc58Y6tN6aSlg7EO34abXnSa6Xr5DtB_5nW3g3#origin=share&sid=share&wid=MLB5220435105&action=whatsapp",
    icon: "🔪",
    maxQty: 2
  },
  {
    id: 8,
    name: "Forma de bolo",
    category: "Cozinha",
    linkShopee: "https://shopee.com.br/Assadeira-Forma-Redonda-Bolo-Pudim-Alumínio-para-Torta-Suíça-Brigadeirão-Doces-com-Furo-Cone-Central-i.299163712.9331945643?extraParams=%7B%22display_model_id%22%3A356071176741%2C%22model_selection_logic%22%3A3%7D",
    linkML: "https://www.mercadolivre.com.br/p/MLB52421585?matt_tool=38524122&pdp_filters=item_id:MLB4127412633&ua=n_ZPWY0PJClTvYeeA5H2r9tIh6jdq1GcIwpWwmpU_yeLrbI5#origin=share&sid=share&wid=MLB4127412633&action=whatsapp",
    icon: "🧁",
    maxQty: 2
  },
  {
    id: 9,
    name: "Garrafa para geladeira",
    category: "Cozinha",
    linkShopee: "https://shopee.com.br/Jarra-De-Vidro-Sucos-Água-e-Refrigerantes-1-8-L-Com-Tampa-Branca-Lanty-Ke-Home-i.467913980.23392933047?extraParams=%7B%22display_model_id%22%3A189161685167%2C%22model_selection_logic%22%3A3%7D&rModelId=189161685167&vItemId=58206516442&vModelId=199619197396&vShopId=1665239494",
    linkML: "https://www.mercadolivre.com.br/up/MLBU3834096555?matt_tool=38524122&pdp_filters=item_id:MLB4524166801&ua=LqtDHDsylmhxzSz9YZYCqgLtI5pNbgxSpFrAnf-AmQB6SkxA#origin=share&sid=share&wid=MLB4524166801&action=whatsapp",
    icon: "🧊",
    maxQty: 2
  },
  {
    id: 10,
    name: "Garrafa térmica",
    category: "Cozinha",
    linkShopee: "https://shopee.com.br/Garrafa-Térmica-ÉLORA-1-Litro-com-Cabo-de-Madeira-–-Café-Quente-Design-Elegante-e-Sofisticado-i.1837754041.58267879164?extraParams=%7B%22display_model_id%22%3A228812220725%2C%22model_selection_logic%22%3A3%7D",
    linkML: "https://www.mercadolivre.com.br/vittak-garrafa-termica-cafe-1-litro-nordica-cabo-madeira-mesa-posta-cor-preta/p/MLB37204362?pdp_filters=item_id%3AMLB3888945023#polycard_client=search-desktop&be_origin=searchv2&overlay_label=not_apply&search_layout=grid&position=8&type=product&tracking_id=9cfb7a2f-4d76-40a5-a5eb-2418906d119c&wid=MLB3888945023&sid=search",
    icon: "☕",
    maxQty: 1
  },
  {
    id: 11,
    name: "Jarra",
    category: "Cozinha",
    linkShopee: "https://shopee.com.br/Jarra-De-Vidro-Com-Tampa-Água-Refri-Suco-Safira-1-8-Litro-i.1452259641.22398846508?extraParams=%7B%22display_model_id%22%3A229427227648%2C%22model_selection_logic%22%3A3%7D&rModelId=229427227648&vItemId=58253",
    linkML: "https://www.mercadolivre.com.br/jarra-elegance-2l-plastico-com-tampa-hermetica-suco-agua-transparente-2-litros/p/MLB75371826?pdp_filters=item_id:MLB7165396624|item_id:MLB7165396624#is_advertising=true&searchVariation=MLB75371826&backend_model=search-backend&be_origin=searchv2&position=1&search_layout=grid&type=pad&tracking_id=69bd86e3-496e-48e7-835d-8c2c2a2895b9&ad_domain=VQCATCORE_LST&ad_position=1&ad_click_id=YmFiN2RiOTItNzg0Ni00NDZlLWJmZWQtZDFmNDNhZmYxMDE2",
    icon: "🫖",
    maxQty: 2
  },
  {
    id: 12,
    name: "Jogo de copos",
    category: "Cozinha",
    linkShopee: "https://shopee.com.br/Copo-de-Vidro-6-Unidades-300ml-Grosso-Diamante-Elegante-Água-Suco-Refrigerante-Resistente-i.431805520.23394792951?extraParams=%7B%22display_model_id%22%3A229436108029%2C%22model_selection_logic%22%3A3%7D",
    linkML: "https://www.mercadolivre.com.br/p/MLB66377283?matt_tool=38524122&pdp_filters=item_id:MLB6386525666&ua=S2Ni46tzshp6SfVJUhhALQpJam1GvI2JL4IAEiltry7fJINb#origin=share&sid=share&wid=MLB6386525666&action=whatsapp",
    icon: "🥛",
    maxQty: 2
  },
  {
    id: 13,
    name: "Jogo de potes",
    category: "Cozinha",
    linkShopee: "https://shopee.com.br/Potes-Herméticos-Electrolux-de-Plástico-Cinza-Retangular-com-12-Unidades-i.1526836548.22998524934?extraParams=%7B%22display_model_id%22%3A129833926201%2C%22model_selection_logic%22%3A3%7D",
    linkML: "https://www.mercadolivre.com.br/p/MLB74912596?matt_tool=38524122&pdp_filters=item_id:MLB6824640494&ua=Hfp3heGNGyEeYX_GeDpwOXfAO4WsCDF0BieWSapCW8Lw9y9P#origin=share&sid=share&wid=MLB6824640494&action=whatsapp",
    icon: "🥡",
    maxQty: 2
  },
  {
    id: 14,
    name: "Jogo de pratos",
    category: "Cozinha",
    linkShopee: "https://shopee.com.br/Aparelho-de-Jantar-e-Chá-Porcelana-20-peças-Ryo-Maresia-Jogo-de-Pratos-e-Xícaras-Oxford-i.638399297.19297605422?extraParams=%7B%22display_model_id%22%3A219591773980%2C%22model_selection_logic%22%3A3%7D&rModelId=219591773980&vItemId=58253313503&vModelId=199616895335&vShopId=1665239494",
    linkML: "https://www.mercadolivre.com.br/p/MLB75550233?attributes=PIECES_NUMBER:MLB75550234,COLOR:MLB75550233&matt_tool=38524122&pdp_filters=item_id:MLB5318591603&ua=Bfna2nzvJctlHXX7hKZTSIVEnym7HCHGg_ZSUaFM8MY6y3j5#origin=share&sid=share&wid=MLB5318591603&action=whatsapp",
    icon: "🍽️",
    maxQty: 2
  },
  {
    id: 15,
    name: "Lixeira de pia",
    category: "Cozinha",
    linkShopee: "https://shopee.com.br/Kit-Pia-Cozinha-Organizador-Completo-Luxo-Lixeira-5L-Porta-Detergente-Porta-Esponja-Rodinho-Moderno-i.849977839.41131242539?extraParams=%7B%22display_model_id%22%3A244245927383%2C%22model_selection_logic%22%3A3%7D",
    linkML: "https://www.mercadolivre.com.br/up/MLBU714365562?matt_tool=38524122&pdp_filters=item_id:MLB3832319523&ua=zY1ueD8KawkFuoGZTYKSflUCC6f2xAuZKJ7iPO948BQO63s2#origin=share&sid=share&wid=MLB3832319523&action=whatsapp",
    icon: "🗑️",
    maxQty: 2
  },
  {
    id: 16,
    name: "Panela de pressão",
    category: "Cozinha",
    linkShopee: "https://shopee.com.br/Panela-de-Pressão-Com-Indução-Brinox-Pressure-4-2-L-20x14-5-cm-Vanilla-i.842996464.21357829581?extraParams=%7B%22display_model_id%22%3A137000455145%2C%22model_selection_logic%22%3A3%7D",
    linkML: "https://www.mercadolivre.com.br/p/MLB61738923?matt_tool=38524122&pdp_filters=item_id:MLB5106982677&ua=ALMfcIyNUmAsyq07ZYJNPsjmypeqGKlFVzU_J3H20XrnSk79#origin=share&sid=share&wid=MLB5106982677&action=whatsapp",
    icon: "🍲",
    maxQty: 1
  },
  {
    id: 17,
    name: "Peneira",
    category: "Cozinha",
    linkShopee: "https://shopee.com.br/3-Ppçs-Peneira-Coador-Em-Aço-Inox-Para-Cozinha-3-Tamanhos-P-M-G-8-10-12CM-i.832040275.23895748983?extraParams=%7B%22display_model_id%22%3A179712225900%2C%22model_selection_logic%22%3A3%7D&rModelId=179712225900&vItemId=58253313472&vModelId=189616900530&vShopId=1665239494",
    linkML: "https://www.mercadolivre.com.br/jogo-3-peneiras-p-m-g-em-casa-tem-aco-inox-luxo-utensilios-de-cozinha/p/MLB24768616?pdp_filters=item_id:MLB4406486605|item_id:MLB4406486605#is_advertising=true&searchVariation=MLB24768616&backend_model=search-backend&be_origin=searchv2&position=2&search_layout=grid&type=pad&tracking_id=98da4b00-e768-44d7-8801-abf69401fc3f&ad_domain=VQCATCORE_LST&ad_position=2&ad_click_id=MzVlYzU4YTItNzU1Mi00NTZjLTlhMTgtZTdlNWJmZDA2NTY4",
    icon: "🍳",
    maxQty: 2
  },
  {
    id: 18,
    name: "Ralador",
    category: "Cozinha",
    linkShopee: "https://shopee.com.br/Ralador-4-Faces-Aço-Inox-24cm-Multiuso-Resistente-Queijo-Legumes-Verduras-Cozinha-ENVIO-IMEDIATO-i.385640160.58215531876?extraParams=%7B%22display_model_id%22%3A149556078878%2C%22model_selection_logic%22%3A3%7D",
    linkML: "https://www.mercadolivre.com.br/up/MLBU3366692614?matt_tool=38524122&pdp_filters=item_id:MLB5582232352&ua=0ZWF9nv1aLsUQG0HPpiC59sQmw-81oSRfAtNSnQ-XpDL5gkN#origin=share&sid=share&wid=MLB5582232352&action=whatsapp",
    icon: "🧀",
    maxQty: 2
  },
  {
    id: 19,
    name: "Travessa de vidro",
    category: "Cozinha",
    linkShopee: "https://shopee.com.br/Jogo-de-Travessas-Marinex-e-sobremesa-em-Vidro-Temperado-Nadir-7-peças-LER-DESCRIÇÃO-i.310702142.19973325519?extraParams=%7B%22display_model_id%22%3A230953729802%2C%22model_selection_logic%22%3A3%7D",
    linkML: "https://www.mercadolivre.com.br/kit-3-travessas-de-vidro-retangular-2l-27l-38l-assadeira/up/MLBU4490905484?pdp_filters=item_id:MLB7277754194|item_id:MLB7277754194#is_advertising=true&searchVariation=MLBU4490905484&backend_model=search-backend&be_origin=searchv2&position=1&search_layout=grid&type=pad&tracking_id=78e9276d-6f6b-4a9b-a507-a7497804c9aa&ad_domain=VQCATCORE_LST&ad_position=1&ad_click_id=NTgzOWJlODktMjk4NS00ZDUzLThlNDAtOTgzZmZjNWZkYmNi",
    icon: "🥗",
    maxQty: 2
  },
  {
    id: 20,
    name: "Jogo de medidores",
    category: "Cozinha",
    linkShopee: "https://shopee.com.br/Kit-4-Medidores-de-Cozinha-Aço-Inox-60-80-125-250ml-i.396847656.58265855457?extraParams=%7B%22display_model_id%22%3A149794227241%2C%22model_selection_logic%22%3A3%7D",
    linkML: "https://www.mercadolivre.com.br/up/MLBU4136662263?matt_tool=38524122&pdp_filters=item_id:MLB7024324030&ua=hhB5fbu-z9hqjzcK51G_uQVoe1iX8E17L7nX4DTjPbHR6Ono#origin=share&sid=share&wid=MLB7024324030&action=whatsapp",
    icon: "🥄",
    maxQty: 1
  },

  // QUARTO
  {
    id: 21,
    name: "Edredom",
    category: "Quarto",
    linkShopee: "https://shopee.com.br/Kit-Edredom-Ternura-Lençol-King-6-Peças-i.373784807.14973822678?extraParams=%7B%22display_model_id%22%3A78632727643%2C%22model_selection_logic%22%3A3%7D",
    linkML: "https://produto.mercadolivre.com.br/MLB-1123964980-coberdron-casal-queen-malha-100-algodo-edredom-dupla-face-_JM?attributes=FABRIC_DESIGN%3AU2hlcnBh%2CCOLOR_SECONDARY_COLOR%3AQ8OhcXVp&matt_tool=38524122&ua=Qn2tqHIMyvLYS2Ilpj6lsjGn3ux8yEjZur8thWpdS4VcmAoO#origin=share&sid=share&action=whatsapp",
    icon: "🛌",
    maxQty: 2
  },
  {
    id: 22,
    name: "Jogo de lençóis e fronhas",
    category: "Quarto",
    linkShopee: "https://shopee.com.br/Kit-Jogo-De-Cama-Berço-Solteiro-Casal-Queen-King-400-Fios-Micropercal-com-Ponto-Palito-i.313984108.23093525798?extraParams=%7B%22display_model_id%22%3A266143436048%2C%22model_selection_logic%22%3A3%7D&rModelId=266143436048&vItemId=23099473032&vModelId=209190133913&vShopId=1665239494",
    linkML: "https://produto.mercadolivre.com.br/MLB-3965059663-jogo-de-lencol-400-fios-ponto-palito-cama-queen-3-pcs-saldo-_JM?searchVariation=182824063438#is_advertising=true&searchVariation=182824063438&backend_model=search-backend&be_origin=searchv2&position=3&search_layout=grid&type=pad&tracking_id=0e7e4767-2fa4-4ee1-82f5-f20747f183d7&ad_domain=VQCATCORE_LST&ad_position=3&ad_click_id=MTdjNDU3M2YtY2RlMy00MWM2LTlhOTYtMmYyYjc2NDI2MDY3",
    icon: "🛏️",
    maxQty: 3
  },
  {
    id: 23,
    name: "Travesseiros",
    category: "Quarto",
    linkShopee: "https://shopee.com.br/Travesseiro-Altenburg-Antistress-Tech-0-50x0-70m-Suporte-Firme-i.781152841.22592856868?extraParams=%7B%22display_model_id%22%3A189592967685%2C%22model_selection_logic%22%3A3%7D",
    linkML: "https://www.mercadolivre.com.br/kit-2-travesseiros-70x50-antialergico-lavavel-fibra-siliconada-toque-de-pluma-de-ganso-oaktex-cor-branco/p/MLB43954645?pdp_filters=item_id:MLB5197670602|item_id:MLB5197670602#is_advertising=true&searchVariation=MLB43954645&backend_model=search-backend&be_origin=searchv2&position=1&search_layout=grid&type=pad&tracking_id=0525c0bd-08ff-4d6b-98d9-02e149549a82&ad_domain=VQCATCORE_LST&ad_position=1&ad_click_id=MjUyMGQ3NTYtOWMwYy00NjE0LThhM2UtNmFkMDdiZWQ5N2Ey",
    icon: "😴",
    maxQty: 2
  },

  // BANHEIRO
  {
    id: 24,
    name: "Cesto para roupa suja",
    category: "Banheiro",
    linkShopee: "https://shopee.com.br/product/1548697431/58218412904?d_id=79dd8&uls_trackid=56rocr1q00k8&utm_content=FrWfbGUMqhUrsjo7VBfxoi2eUWj",
    linkML: "https://www.mercadolivre.com.br/up/MLBU3726935279?matt_tool=38524122&pdp_filters=item_id:MLB4421996357&ua=MCtcZxpAGQsv0kmZWBDSpPpvB_G4VpE3YZuLGPJ7_WQaR4Ys#origin=share&sid=share&wid=MLB4421996357&action=whatsapp",
    icon: "🧺",
    maxQty: 1
  },
  {
    id: 25,
    name: "Jogo de banheiro",
    category: "Banheiro",
    linkShopee: "https://shopee.com.br/product/664761873/23697485404?d_id=79dd8&uls_trackid=56rocufn00jq&utm_content=FrWfbGUMqZdU7mxMscdbqtGq1pB",
    linkML: "https://produto.mercadolivre.com.br/MLB-2747522301-conjunto-banheiro-4-pecas-tapete-preto-jogo-banheiro-oferta-_JM?matt_tool=38524122&ua=xLHxH4NhwjkpRwT5kITgxHjzAgwV7gk4LcY8It8oLmGdWgbO#origin=whatsapp&sid=whatsapp",
    icon: "🚿",
    maxQty: 3
  },
  {
    id: 26,
    name: "Jogo de toalhas",
    category: "Banheiro",
    linkShopee: "https://shopee.com.br/Kit-4-Toalhas-de-Banho-e-Rosto-100-Algodão-Super-Grossas-e-Macias-i.1876788118.58264848552?extraParams=%7B%22display_model_id%22%3A199624667035%2C%22model_selection_logic%22%3A3%7D&rModelId=199624667035&vItemId=58266482969&vModelId=199625732144&vShopId=1665239494",
    linkML: "https://www.mercadolivre.com.br/p/MLB46014466?matt_tool=38524122&pdp_filters=item_id:MLB4000561115&ua=EpeC487weKPmmjO7kI7-W6_8Qg2mCvsEgPCW9LNjXcmDDEnv#origin=share&sid=share&wid=MLB4000561115&action=whatsapp",
    icon: "🧖‍♀️",
    maxQty: 3
  },
  {
    id: 27,
    name: "Mop",
    category: "Banheiro",
    linkShopee: "https://shopee.com.br/Mop-Giratório-360°-Xplast-8-7L-Balde-com-Centrifugação-e-Esfregão-Microfibra-i.1556155871.46568719514?extraParams=%7B%22display_model_id%22%3A316570283326%2C%22model_selection_logic%22%3A3%7D",
    linkML: "https://www.mercadolivre.com.br/mop-esfregao-giratorio-condor-balde-inox-13-litros-refil-microfibra-cabo-longo-14-metros/p/MLB47285674?pdp_filters=item_id%3AMLB5919534142#polycard_client=search-desktop&be_origin=searchv2&overlay_label=not_apply&search_layout=grid&position=5&type=product&tracking_id=1709d30f-ab07-491d-861f-c0c4a2b1a6b5&wid=MLB5919534142&sid=search",
    icon: "🧹",
    maxQty: 2
  },
  {
    id: 28,
    name: "Potes para higiene",
    category: "Banheiro",
    linkShopee: "https://shopee.com.br/Kit-Banheiro-em-Vidro-com-Dispenser-Pump-400ml-Porta-Escova-de-Dentes-Lavabo-2-Peças-Elegante-i.748710427.22299560322?extraParams=%7B%22display_model_id%22%3A356378837388%2C%22model_selection_logic%22%3A3%7D",
    linkML: "https://produto.mercadolivre.com.br/MLB-2163638195-kit-de-banheiro-luxo-4-utensilios-de-lavabo-plasutil-casa-_JM?attributes=COLOR_SECONDARY_COLOR%3ASW5jb2xvcg%3D%3D&matt_tool=38524122&ua=qHkiJwbdIeMqYO6bec2lpVeQf6kRYiQe-SJlPXdQeP6tktsR#origin=share&sid=share&action=whatsapp",
    icon: "🧴",
    maxQty: 1
  },
  {
    id: 29,
    name: "Varal de chão",
    category: "Banheiro",
    linkShopee: "https://shopee.com.br/product/570456386/22033658928?d_id=79dd8&uls_trackid=56rodrui00je&utm_content=FrWfbGUMphf1ZbvGAhRw7uL5ZS7",
    linkML: "https://www.mercadolivre.com.br/p/MLB27694147?matt_tool=38524122&pdp_filters=item_id:MLB6288999562&ua=9XhthEO-xhax4e02fE9YV-chs8fuYZXEIstviedjM5pl9ACR#origin=share&sid=share&wid=MLB6288999562&action=whatsapp",
    icon: "👕",
    maxQty: 2
  },

  // SALA
  {
    id: 30,
    name: "Almofadas",
    category: "Sala",
    linkShopee: "https://shopee.com.br/product/1398321074/58201876118?d_id=79dd8&uls_trackid=56rodvpj00l0&utm_content=FrWfbGUMpY5M1srUnPS6VKV7TT5",
    linkML: "https://www.mercadolivre.com.br/up/MLBU3944683611?matt_tool=38524122&pdp_filters=item_id:MLB6738514256&ua=_t-IRP1DrA6txCWIXOcAERQPySvXPSfAH62JxP2gzFA9ks__#origin=share&sid=share&wid=MLB6738514256&action=whatsapp",
    icon: "🛋️",
    maxQty: 4
  },
  {
    id: 31,
    name: "Oratório",
    category: "Sala",
    linkShopee: "https://shopee.com.br/product/1415619904/58264153844?d_id=79dd8&uls_trackid=56roea2101l0&utm_content=FrWfbGS75XAM1uhEpxmU2KMRNTh",
    linkML: "https://www.mercadolivre.com.br/up/MLBU3909930274?attributes=COLOR:MLBU3909930274&matt_tool=38524122&pdp_filters=item_id:MLB4610385745&ua=5mq5bjChQN3re-ZcF1FTnQK4UGwrfw2yaDRdI4oJWSgD7pH9#origin=share&sid=share&wid=MLB4610385745&action=whatsapp",
    icon: "⛪",
    maxQty: 1
  },
  {
    id: 32,
    name: "Tapete",
    category: "Sala",
    linkShopee: "https://shopee.com.br/product/346235717/7667837195?d_id=79dd8&uls_trackid=56roedi300l0&utm_content=FrWfbGUMpqenEqyKhf4mSpNPaqV",
    linkML: "https://produto.mercadolivre.com.br/MLB-3383650729-tapete-felpudo-quarto-sala-100-x-140-mt-peludo-_JM?attributes=COLOR_SECONDARY_COLOR%3AQmVnZSBNZXNjbGFkbw%3D%3D&matt_tool=38524122&ua=KvSHluq2zhOiqL_gvv_uwgocuAwtAY8J5hqFIwamGvmMCZFs#origin=share&sid=share&action=whatsapp",
    icon: "🧶",
    maxQty: 2
  },

  // ELETROPORTÁTEIS
  {
    id: 33,
    name: "Aspirador de pó - 220v (Preto)",
    category: "Eletroportáteis",
    linkShopee: "https://shopee.com.br/Aspirador-de-Pó-e-Água-Electrolux-1400W-c-Conjunto-de-Acessórios-e-Rodas-360°-(AWD01)-i.1526836548.20599758564?extraParams=%7B%22display_model_id%22%3A189607682159%2C%22model_selection_logic%22%3A3%7D",
    linkML: "https://www.mercadolivre.com.br/aspirador-de-po-turbo-cycle-mondial-1100w-ap-36/p/MLB14214630?product_trigger_id=MLB14214630&attributes=COLOR%3AVermelho%2FPreto%2CVOLTAGE%3AMLB14214630&pdp_filters=item_id:MLB7520867138&applied_product_filters=MLB14214630&from=gshop&picker=true",
    icon: "🔌",
    maxQty: 1
  },
  {
    id: 34,
    name: "Batedeira - 220v (Preto)",
    category: "Eletroportáteis",
    linkShopee: "https://shopee.com.br/Batedeira-400-watts-3-velocidades-preta-Prática-B-44-B-Mondial-i.489001115.12837546705?extraParams=%7B%22display_model_id%22%3A121692258826%2C%22model_selection_logic%22%3A3%7D",
    linkML: "https://www.mercadolivre.com.br/up/MLBU3516532377?matt_tool=38524122&pdp_filters=item_id:MLB4276211501&ua=ANxT6lJZdG2MtjsrmzKRzOB1VB3txeMfCG9e8xdlXghObh7G#origin=share&sid=share&wid=MLB4276211501&action=whatsapp",
    icon: "🥣",
    maxQty: 1
  },
  {
    id: 35,
    name: "Cafeteira - 220V (Preto)",
    category: "Eletroportáteis",
    linkShopee: "https://shopee.com.br/Cafeteira-Oster-Inox-Compacta-0-75L-i.1573223607.18899851719?extraParams=%7B%22display_model_id%22%3A229426380046%2C%22model_selection_logic%22%3A3%7D",
    linkML: "https://www.mercadolivre.com.br/p/MLB18716121?matt_tool=38524122&pdp_filters=item_id:MLB4647847848&ua=8hDTfa38zn1QEZYeamVmpneCQQVjumaa4QY8Vh_HGtx7d0ba#origin=share&sid=share&wid=MLB4647847848&action=whatsapp",
    icon: "☕",
    maxQty: 1
  },
  {
    id: 36,
    name: "Ferro de passar - 220v (Preto)",
    category: "Eletroportáteis",
    linkShopee: "https://shopee.com.br/Ferro-de-Passar-a-Vapor-Oster-Antiaderente-Verde-i.1573223607.22398810512?extraParams=%7B%22display_model_id%22%3A228789200349%2C%22model_selection_logic%22%3A3%7D",
    linkML: "https://www.mercadolivre.com.br/ferro-de-passar-vapor-oster-aeroceramic-vapor-vertical-127v-preto-127v/p/MLB65424101?pdp_filters=item_id:MLB7005822686|item_id:MLB7005822686#is_advertising=true&searchVariation=MLB65424101&backend_model=search-backend&be_origin=searchv2&position=1&search_layout=grid&type=pad&tracking_id=8bc3331c-7cf3-4feb-b5e7-95450e0e5a68&ad_domain=VQCATCORE_LST&ad_position=1&ad_click_id=YWRjZTdiOWYtNjJiMS00NjdhLWI5NWEtNWY0YmMwYmUzOTVl",
    icon: "👔",
    maxQty: 1
  },
  {
    id: 37,
    name: "Filtro de água (Preto)",
    category: "Eletroportáteis",
    linkShopee: "https://shopee.com.br/Bebedouro-de-Água-Electrolux-Prata-com-Refrigeração-Eletrônica-(BE11X)-i.1526836548.23694200792?extraParams=%7B%22display_model_id%22%3A159785300625%2C%22model_selection_logic%22%3A3%7D",
    linkML: "",
    icon: "🚰",
    maxQty: 1
  },
  {
    id: 38,
    name: "Sanduicheira/Grill - 220v (Preto)",
    category: "Eletroportáteis",
    linkShopee: "https://shopee.com.br/Sanduicheira-Elétrica-Cadence-Click-i.1608214292.23999484261?extraParams=%7B%22display_model_id%22%3A179416872473%2C%22model_selection_logic%22%3A3%7D",
    linkML: "https://www.mercadolivre.com.br/p/MLB37684449?attributes=COLOR:MLB37684449&matt_tool=38524122&pdp_filters=item_id:MLB5496663072&ua=JliKg5RV0Ei_Nx6e-2GVazPB0j77Wn6dgt89pXekHeayZKKJ#origin=share&sid=share&wid=MLB5496663072&action=whatsapp",
    icon: "🥪",
    maxQty: 1
  },
  {
    id: 39,
    name: "Ventilador - 220v (Preto)",
    category: "Eletroportáteis",
    linkShopee: "https://shopee.com.br/Ventilador-de-Coluna-Electrolux-40cm-6-Pás-Efficient-DuoForce-Air-Cinza-(EFS40)-i.1526836548.22198793165?extraParams=%7B%22display_model_id%22%3A129651684761%2C%22model_selection_logic%22%3A3%7D",
    linkML: "https://www.mercadolivre.com.br/p/MLB69425438?attributes=STRUCTURE_COLOR-BLADES_COLOR:MLB18932161,BLADES_MATERIAL:MLB18932161,DIAMETER:MLB69425438&matt_tool=38524122&pdp_filters=item_id:MLB7721696852&ua=uq-ZZR8SALd3KCr7WQ3JR45N-0QoF9njwyCua973IBVg-8jk#origin=share&sid=share&wid=MLB7721696852&action=whatsapp",
    icon: "🌬️",
    maxQty: 1
  },
];

let reservedItemIds = []; // Guardará os IDs que já foram reservados

// --- FUNÇÕES DE ANIMAÇÃO INICIAL ---
function openEnvelope() {
  document.querySelector(".envelope").style.display = "none";
  document.getElementById("letter-content").classList.remove("hidden");
}

function enterSite() {
  document.getElementById("envelope-screen").style.display = "none";
  document.getElementById("main-content").classList.remove("hidden");
  loadReservedItems(); // Carrega os dados do Google Sheets
}

// --- INTEGRAÇÃO COM GOOGLE SHEETS ---
async function loadReservedItems() {
  if (GOOGLE_SHEETS_URL === "SUA_URL_DO_WEB_APP_AQUI") {
    renderGifts("Todos");
    return;
  }
  try {
    const response = await fetch(GOOGLE_SHEETS_URL);
    const data = await response.json();
    reservedItemIds = data.reservedIds || [];
    renderGifts("Todos");
  } catch (error) {
    console.error("Erro ao carregar reservas:", error);
    renderGifts("Todos");
  }
}

// --- RENDERIZAÇÃO DOS PRESENTES ---
function renderGifts(category) {
  const grid = document.getElementById("gift-grid");
  grid.innerHTML = "";

  const filtered =
    category === "Todos"
      ? giftsData
      : giftsData.filter((g) => g.category === category);

  filtered.forEach((gift) => {
    // Conta quantas vezes este presente já foi escolhido
    const vezesReservado = reservedItemIds.filter(
      (id) => id === gift.id,
    ).length;

    // Bloqueia o botão APENAS se já atingiu a quantidade máxima específica do item
    const isReserved = vezesReservado >= gift.maxQty;
    const card = document.createElement("div");
    card.className = "gift-card";

    let buttonHtml = `<button class="btn-presentear" onclick="openModal(${gift.id})">Presentear</button>`;
    if (isReserved) {
      buttonHtml = `<button class="btn-presentear" disabled>Já foi presenteado</button>`;
    }

    card.innerHTML = `
            <div class="gift-icon">${gift.icon}</div>
            <h3 class="gift-title">${gift.name}</h3>
            ${buttonHtml}
        `;
    grid.appendChild(card);
  });
}

function filterCategory(category) {
  document
    .querySelectorAll(".cat-btn")
    .forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");
  renderGifts(category);
}

// --- LÓGICA DO MODAL DE RESERVA ---
let currentGift = null;

function openModal(giftId) {
  currentGift = giftsData.find((g) => g.id === giftId);
  document.getElementById("modal-gift-name").innerText = currentGift.name;
  document.getElementById("gift-id").value = currentGift.id;

  // Reseta o modal
  document.querySelector(".purchase-options").classList.remove("hidden");
  document.getElementById("reservation-form").classList.add("hidden");
  document.getElementById("success-message").classList.add("hidden");

  document.getElementById("reservation-modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("reservation-modal").classList.add("hidden");
}

function selectOption(option) {
  document.getElementById("selected-option").value = option;
  document.querySelector(".purchase-options").classList.add("hidden");
  document.getElementById("reservation-form").classList.remove("hidden");
}

document
  .getElementById("reservation-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const btn = document.getElementById("submit-btn");
    btn.innerText = "Registrando...";
    btn.disabled = true;

    const data = {
      giftId: document.getElementById("gift-id").value,
      giftName: currentGift.name,
      guestName: document.getElementById("guest-name").value,
      guestPhone: document.getElementById("guest-phone").value,
      option: document.getElementById("selected-option").value,
    };

    // Enviar para o Google Sheets
    if (GOOGLE_SHEETS_URL !== "SUA_URL_DO_WEB_APP_AQUI") {
      try {
        await fetch(GOOGLE_SHEETS_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      } catch (e) {
        console.error(e);
      }
    }

    // Marca como reservado localmente para atualizar a tela
    reservedItemIds.push(parseInt(data.giftId));
    renderGifts(document.querySelector(".cat-btn.active").innerText);

    showSuccess(data);

    btn.innerText = "Confirmar Presente";
    btn.disabled = false;
  });

function showSuccess(data) {
  document.getElementById("reservation-form").classList.add("hidden");
  document.getElementById("success-message").classList.remove("hidden");

  // Configurar o link da loja, se houver
  const storeContainer = document.getElementById("store-link-container");
  const storeLink = document.getElementById("store-link");

  if (data.option === "Shopee" && currentGift.linkShopee) {
    storeLink.href = currentGift.linkShopee;
    storeContainer.classList.remove("hidden");
  } else if (data.option === "Mercado Livre" && currentGift.linkML) {
    storeLink.href = currentGift.linkML;
    storeContainer.classList.remove("hidden");
  } else {
    storeContainer.classList.add("hidden");
  }

  // Configurar o link do WhatsApp para o convidado avisar a noiva
  const waText = encodeURIComponent(
    `Olá Rayana! Sou ${data.guestName}. Acabei de escolher o presente "${data.giftName}" na sua lista de casamento!`,
  );
  document.getElementById("wa-link").href =
    `https://wa.me/${WHATSAPP_NOIVA}?text=${waText}`;
}

// --- FUNÇÃO DO PIX ---
function copyPix() {
  const pixKey = "rreuzebio20@gmail.com";
  
  navigator.clipboard.writeText(pixKey).then(() => {
    alert("Chave Pix copiada com sucesso! \n\nAbra a aplicação do seu banco e cole a chave: " + pixKey);
  }).catch(err => {
    // Caso o telemóvel bloqueie a cópia automática
    alert("A chave Pix é: " + pixKey + "\n\nPor favor, copie este e-mail para realizar a transferência.");
  });
}
