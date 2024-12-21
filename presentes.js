document.addEventListener('DOMContentLoaded', () => {
    const produtos = {
        potes: {
            nome: "Potes Herméticos",
            imagem: "potes.jpg",
            qrCode: "potesQR.jpg",
            descricao: "Conjunto electrolux 10 potes para alimentos de tamanhos variados",
            valor: 99,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c15520400005303986540599.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFFHZF6PWB8JNC1EN5B0TBYB63047261",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/emu5798-potes-hermeticos"
        },
        sanduicheira: {
            nome: "Master Grill Inox",
            imagem: "sanduicheira.jpg",
            qrCode: "sanduicheiraQR.jpg",
            descricao: "Sanduícheira Master Grill, ideal para lanches e grelhados, 110v",
            valor: 110,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406110.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFE2H293DYSJ9VZS6T1TTJP963041CA0",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/cpt7371-sanduicheira-mondial"
        },
        cadeira: {
            nome: "Cadeira Escritório",
            imagem: "cadeira.jpg",
            qrCode: "cadeiraQR.jpg",
            descricao: "Cadeira de escritório giratória, base cromada essencial cor preta",
            valor: 150,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406150.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFG8FHXKT1KRVMXZ8E2KYPKZ630442FB",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/var1045-cadeira-escritorio"
        },
        ventilador: {
            nome: "Ventilador Mondial",
            imagem: "ventilador.jpg",
            qrCode: "ventiladorQR.jpg",
            descricao: "Ventilador de mesa Mondial turbo, 3 velocidades, 8 pás, 110v",
            valor: 190,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406190.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFG0ZA6EWNBVHPZXCBH3NYFP6304255D",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/mff3344-ventilador-mondial"
        },
        arroz: {
            nome: "Panela de Arroz",
            imagem: "arroz.jpg",
            qrCode: "arrozQR.jpg",
            descricao: "Panela elétrica de arroz mondial seis xícaras preta/inox",
            valor: 200,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406200.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFH0GFF6D3ZSXVE7Y0NC96GK6304EFAC",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/lqa8441-panela-de-arroz"
        },
        liquidificador: {
            nome: "Liquidificador Oster",
            imagem: "liquidificador.jpg",
            qrCode: "liquidificadorQR.jpg",
            descricao: "Liquidificador 3,2L com 15 velocidades, 110v 1400w",
            valor: 250,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406250.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFE7QKZ954SF7WFASWNEZ2V2630430C4",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/vgx3367-liquidificador-oster"
        },
        airfrayer: {
            nome: "AirFryer Mondial",
            imagem: "airfrayer.jpg",
            qrCode: "airfrayerQR.jpg",
            descricao: "Fritadeira elétrica sem óleo, family inox 4 litros, cor preta, 110v",
            valor: 319,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406319.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFAGQ6Y5EQ59J3Q2JETVYFQN6304D3B0",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/ejo8571-fritadeira-eletrica-mondial"
        },
        frigideira: {
            nome: "Frigideira Antiaderente",
            imagem: "frigideira.jpg",
            qrCode: "frigideiraQR.jpg",
            descricao: "Frigideira Tramontina Grano aço inox 1,2 Litros antiaderente 20cm",
            valor: 340,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406340.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFH2QPAPE2T0E0J5X14ZER4X63042644",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/eny8591-frigideira-antiaderente"
        },
        pressao: {
            nome: "Panela de Pressão",
            imagem: "pressao.jpg",
            qrCode: "pressaoQR.jpg",
            descricao: "Panela de pressão elétrica mondial pratic cook 3L premium",
            valor: 380,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406380.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFH16R5BYG16ACJ0CYEBQ04N63046B25",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/dku9424-panela-de-pressao"
        },
        faqueiro: {
            nome: "Faqueiro Tramontina",
            imagem: "faqueiro.jpg",
            qrCode: "faqueiroQR.jpg",
            descricao: "Kit de talheres pacific, contém 36 peças, serve até 6 pessoas",
            valor: 409,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406409.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFBZ8K85DM0C2XT7QD2QQBAK6304D945",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/ayr5766-faqueiro-tramontina"
        },
        lustre: {
            nome: "Lustre Arcos Led",
            imagem: "lustre.jpg",
            qrCode: "lustreQR.jpg",
            descricao: "Lustre led moderno em arcos suspenso prata",
            valor: 450,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406450.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFG6294K2ZZWDBKNAZXNCWVS63046D68",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/ifl6001-lustre-de-led"
        },
        mala: {
            nome: "Mala de Viagem",
            imagem: "mala.jpg",
            qrCode: "malaQR.jpg",
            descricao: "Mala de viagem Sestini grande quatro rodas giro 360 graus produzida em ABS",
            valor: 497,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406497.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFH1Z4K5KE1CAVS9018HVF4Z63045EC9",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/sqm3422-mala-de-viagem"
        },
        panelasgrafite: {
            nome: "Panelas Grafite",
            imagem: "panelasgrafite.jpg",
            qrCode: "panelasgrafiteQR.jpg",
            descricao: "Kit de panelas tramontina Paris grafite 8 peças e utensílios",
            valor: 509,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406509.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFG6N6JT78YM0KSW045Z5ZCM6304794E",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/xgv6331-panelas-grafite"
        },
        microondas: {
            nome: "Forno Micro-ondas",
            imagem: "microondas.jpg",
            qrCode: "microondasQR.jpg",
            descricao: "Forno Micro-ondas Panasonic 21Litros branco espelhado para embutir",
            valor: 520,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406520.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFGY7G7ANEP7S7S3A36TV7N263048F55",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/pib3149-micro-ondas-panasonic"
        },
        cafeteira: {
            nome: "Cafeteira Nescafé",
            imagem: "cafeteira.jpg",
            qrCode: "cafeteiraQR.jpg",
            descricao: "Cafeteira Nescafé Dolce Gusto Arno cor preta, 110v",
            valor: 550,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406550.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFG9BEA4CV9PB18AFCVT3CFA6304DE27",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/veq8346-cafeteira-nescafe"
        },
        alexa: {
            nome: "Echo Show (Alexa)",
            imagem: "alexa.jpg",
            qrCode: "alexaQR.jpg",
            descricao: "Alexa Echo Show 5 Display 5,5” Geração 3, câmera 2MP",
            valor: 600,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406600.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFG7CA5APJEKKHSJPHR47GDD6304AFDD",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/gbj7826-echo-show-5"
        },
        robo: {
            nome: "Robô Aspirador",
            imagem: "robo.jpg",
            qrCode: "roboQR.jpg",
            descricao: "Robô aspirador Philco Pas22p recarregável mob filtro, preto, bivolt",
            valor: 660,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406660.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFGWCTC7WV0K1TS45DESXHSC6304B68F",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/xmb8528-robo-aspirador"
        },
        guardaroupa: {
            nome: "Guarda-Roupas",
            imagem: "guardaroupa.jpg",
            qrCode: "guardaroupaQR.jpg",
            descricao: "Guarda-Roupas Bartira, modelo Ilhéus, 6 portas e 3 gavetas",
            valor: 710,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406710.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFG01WJQ0H0VG6VD2QVN5PV763045FC4",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/vnj2559-guarda-roupa-ilheus"
        },
        rack: {
            nome: "Rack com Painel",
            imagem: "rack.jpg",
            qrCode: "rackQR.jpg",
            descricao: "Rack em MDP com painel de TV, pintura UV, com prateleiras",
            valor: 840,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406840.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFFPY7X860FMRF389FZ8X0Q56304FB13",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/mdl5279-rack-com-painel"
        },
        tapete: {
            nome: "Tapete 250cm x 300cm",
            imagem: "tapete.jpg",
            qrCode: "tapeteQR.jpg",
            descricao: "Tapete Santorini São Carlos 250x300cm feito em microfibra",
            valor: 990,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406990.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFGX9KEX8CJ7ZD1TBGW0TF1963042C59",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/dop3117-tapete-250x300cm"
        },
        coifa: {
            nome: "Coifa Electrolux",
            imagem: "coifa.jpg",
            qrCode: "coifaQR.jpg",
            descricao: "Coifa de parede Electrolux com luzes de led embutida e vidros laterais",
            valor: 1050,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654071050.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFGVE5KYNGXHY6QEMX194D5R6304653A",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/bfa1155-coifa-electrolux"
        },
        cristaleira: {
            nome: "Cristaleira Aura",
            imagem: "cristaleira.jpg",
            qrCode: "cristaleiraQR.jpg",
            descricao: "Cristaleira Aura com duas portas de vidro, feita em madeira natural marrom",
            valor: 1130,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654071130.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFK8ZTM9SMSZ8TE4E6DVS7FR630452BB",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/gac1775-cristaleira-aura"
        },
        tv32: {
            nome: "Smart TV Samsung 32'",
            imagem: "tv32.jpg",
            qrCode: "tv32QR.jpg",
            descricao: "Smart TV led 32 Polegadas Samsung HDR wifi HDMI e USB, ideal para o quarto",
            valor: 1240,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654071240.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFH465SNBBTR3M5G6BSWZQBS63047845",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/wbr7356-smart-tv-sansung"
        },
        cooktop: {
            nome: "Cooktop de Indução",
            imagem: "cooktop.jpg",
            qrCode: "cooktopQR.jpg",
            descricao: "Cooktop elétrico indução quatro bocas Britânia, em vidro preto, 220v",
            valor: 1490,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654071490.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFFMZ6ZRV1VJGAZTHHJF9KGN63045B70",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/tdc3259-cooktop-de-inducao"
        },
        forno: {
            nome: "Forno Elétrico",
            imagem: "forno.jpg",
            qrCode: "fornoQR.jpg",
            descricao: "Forno de embutir elétrico Electrolux 50L, 220v",
            valor: 1740,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654071740.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFFP0JY6AKPTAQM0H4YZTMGC63045C38",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/tcs8186-forno-eletrico"
        },
        maquinalavar: {
            nome: "Máquina de Lavar",
            imagem: "maquinalavar.jpg",
            qrCode: "maquinalavarQR.jpg",
            descricao: "Lavadora de roupas Consul 15Kg multi-funções, 220v",
            valor: 1940,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654071940.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFK7TEYW9A0W8X40EGGGK2XQ63043A86",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/uwe5048-maquina-de-lavar"
        },
        tv50: {
            nome: "Smart TV 4K Samsung 50'",
            imagem: "tv50.jpg",
            qrCode: "tv50QR.jpg",
            descricao: "Smart TV led 4K 50 Polegadas Samsung UHD Crystal",
            valor: 2090,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654072090.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFH4V744GMA0D6V4E7GZY4N2630491BD",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/pqj7093-smart-tv-sansung-50-4k"
        },
        sofa: {
            nome: "Sofá Retrátil",
            imagem: "sofa.jpg",
            qrCode: "sofaQR.jpg",
            descricao: "Sofá retrátil reclinável modelo frança com molas",
            valor: 2200,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654072200.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFKD0JCBJW46D2JEEH90VB4Q6304C371",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/eyt2206-sofa-retratil"
        },
        jantar: {
            nome: "Conjunto de Jantar",
            imagem: "jantar.jpg",
            qrCode: "jantarQR.jpg",
            descricao: "Conjunto de Jantar 135cm redonda com seis cadeiras",
            valor: 2300,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654072300.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFKAZ80J9PH8DEX0DYE4TJ9P63043C29",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/xpt1286-conjunto-de-jantar"
        },
        arcondicionado: {
            nome: "Ar Condicionado",
            imagem: "arcondicionado.jpg",
            qrCode: "arcondicionadoQR.jpg",
            descricao: "Ar condicionado Midea Inverter split 9.000 btu/h frio, 220v",
            valor: 2550,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654072550.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFG4HZY6SD2RVXG0GKMH7MSG6304C3DF",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/ryh7980-ar-condicionado-split"
        },
        geladeira: {
            nome: "Geladeira Consul",
            imagem: "geladeira.jpg",
            qrCode: "geladeiraQR.jpg",
            descricao: "Geladeira Consul 410 Litros Frost Free Duples Inox controle interno de temperatura",
            valor: 3190,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654073190.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFH5STH60J62RHAJFAGZY6HN6304BC3D",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/mrp3264-geladeira-consul"
        },
        lavaseca: {
            nome: "Máquina Lava e Seca",
            imagem: "lavaseca.jpg",
            qrCode: "lavasecaQR.jpg",
            descricao: "Maquina de lavar (lava e seca) Hisense Steam Titanium 13Kg",
            valor: 3800,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654073800.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFH3FGAY2KJANMBQ8RM4VZNC6304BE81",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/jqm6507-lava-e-seca-13kg"
        }
        
    };

    const container = document.querySelector('.produtos');
    const filtroBotoes = document.querySelectorAll('.filtro-preco');

    const renderProdutos = (produtosFiltrados) => {
        container.innerHTML = ''; // Limpa o container
        produtosFiltrados.forEach(produto => {
            const produtoHTML = `
                <div class="produto">
                    <img src="${produto.imagem}" alt="${produto.nome}">
                    <h2>${produto.nome}</h2>
                    <p>${produto.descricao}</p>
                    <p class="valor">R$ ${produto.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    <button class="btn-presentear" data-id="${produto.nome.toLowerCase().replace(/ /g, '-')}">Presentear</button>
                </div>
            `;
            container.innerHTML += produtoHTML;
        });
        
    
        // Reaplica os eventos nos botões "Presentear"
        const botoesPresentear = document.querySelectorAll('.btn-presentear');
        botoesPresentear.forEach(botao => {
            botao.addEventListener('click', () => {
                const produtoId = botao.dataset.id; // Obtém o ID do produto
                const produto = Object.values(produtos).find(p => 
                    p.nome.toLowerCase().replace(/ /g, '-') === produtoId
                ); // Busca o produto correspondente
    
                if (produto) {
                    modalImagem.src = produto.imagem;
                    modalNome.textContent = produto.nome;
                    modalValor.textContent = `R$ ${produto.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
                    btnCopiar.dataset.pixCode = produto.pixCode;
                    btnCartao.dataset.linkCartao = produto.linkCartao;
                    modal.style.display = 'block';
                    modalInicial.style.display = 'flex';
                    modalPix.style.display = 'none';
                    modalCartao.style.display = 'none';
                
                    if (!modalInicial.contains(modalTexto)) {
                        modalInicial.appendChild(modalTexto);
                    }
                } else {
                    console.error("Produto não encontrado para o ID:", produtoId);
                }
                
            });
        });
    };
    
    

    // Inicializa a exibição com todos os produtos
    renderProdutos(Object.values(produtos));

    // Adiciona eventos de filtro
    filtroBotoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const min = parseInt(botao.getAttribute('data-min'));
            const max = parseInt(botao.getAttribute('data-max'));

            const produtosFiltrados = Object.values(produtos).filter(produto => produto.valor >= min && produto.valor <= max);
            renderProdutos(produtosFiltrados);
        });
    });

    // Seleciona os elementos
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const menuLateral = document.querySelector(".menu-lateral");

    if (hamburgerMenu && menuLateral) { // Verifica se os elementos existem
        const menuLinks = menuLateral.querySelectorAll("a");

        // Alterna o menu lateral ao clicar no ícone
        hamburgerMenu.addEventListener("click", () => {
            menuLateral.classList.toggle("ativo");
        });

        // Fechar o menu ao clicar fora dele
        document.addEventListener("click", (event) => {
            if (!menuLateral.contains(event.target) && !hamburgerMenu.contains(event.target)) {
                menuLateral.classList.remove("ativo");
            }
        });

        // Fechar o menu ao clicar em qualquer link
        menuLinks.forEach(link => {
            link.addEventListener("click", () => {
                menuLateral.classList.remove("ativo");
            });
        });
    }

    // Funções do modal
    const botoesPresentear = document.querySelectorAll('.btn-presentear');
    const modal = document.getElementById('modal');
    const modalImagem = document.getElementById('modal-imagem');
    const modalNome = document.getElementById('modal-nome');
    const modalValor = document.getElementById('modal-valor');
    const modalInicial = document.getElementById('modal-inicial');
    const modalPix = document.getElementById('modal-pix');
    const modalCartao = document.getElementById('modal-cartao');
    const closeModal = document.getElementById('close-modal');
    const btnCopiar = document.getElementById('btn-copiar');
    const btnPix = document.getElementById('btn-pix');
    const btnCartao = document.getElementById('btn-cartao');

    const modalTexto = document.createElement('p');
    modalTexto.className = 'modal-texto';
    modalTexto.textContent = "O pagamento via Pix é enviado diretamente para conta dos noivos, rápido e integral! Pagamentos via cartão são feitos por link de pagamento !😄";

    botoesPresentear.forEach(botao => {
        botao.addEventListener('click', () => {
            const produtoId = botao.dataset.id; // Obtém o ID do produto diretamente
            const produto = produtos[produtoId]; // Busca o produto pelo ID
    
            if (produto) {
                modalImagem.src = produto.imagem;
                modalNome.textContent = produto.nome;
                modalValor.textContent = produto.valor;
                btnCopiar.dataset.pixCode = produto.pixCode;
                btnCartao.dataset.linkCartao = produto.linkCartao;
                modal.style.display = 'block';
                modalInicial.style.display = 'flex';
                modalPix.style.display = 'none';
                modalCartao.style.display = 'none';
    
                if (!modalInicial.contains(modalTexto)) {
                    modalInicial.appendChild(modalTexto);
                }
            } else {
                console.error("Produto não encontrado para o ID:", produtoId);
            }
        });
    });
    

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    btnPix.addEventListener('click', () => {
        // Esconde o modal inicial e mostra o modal Pix
        modalInicial.style.display = 'none';
        modalPix.style.display = 'flex';
    
        // Limpa o conteúdo anterior do modal Pix
        modalPix.innerHTML = '';
    
        // Itera sobre todos os produtos para encontrar o correto
        const nomeProduto = modalNome.textContent.toLowerCase(); // nome do produto exibido no modal
        const produtoAtual = Object.values(produtos).find(produto => produto.nome.toLowerCase() === nomeProduto);
    
        // Verifica se encontrou o produto
        if (produtoAtual) {
            // Atualiza a imagem do QR code
            const qrCodePath = produtoAtual.qrCode || '';
        
            const qrImg = document.createElement('img');
            qrImg.className = 'modal-qr';
            qrImg.src = qrCodePath;
            qrImg.alt = qrCodePath ? 'QR Code do Pix' : 'Erro ao carregar o QR Code. Tente novamente.';
            modalPix.appendChild(qrImg);
        
            // Cria o botão de copiar código Pix
            const btnCopiar = document.createElement('button');
            btnCopiar.className = 'btn-copiar';
            btnCopiar.textContent = 'Copiar código Pix';
    
            // Adiciona evento de clique no botão
            btnCopiar.onclick = () => {
                if (produtoAtual?.pixCode) {
                    navigator.clipboard.writeText(produtoAtual.pixCode)
                        .then(() => {
                            // Troca o texto e adiciona o estilo para "Link copiado!"
                            btnCopiar.textContent = 'Link copiado!';
                            btnCopiar.classList.add('copiado');
    
                            // Retorna ao texto e estilo original após 2 segundos
                            setTimeout(() => {
                                btnCopiar.textContent = 'Copiar código Pix';
                                btnCopiar.classList.remove('copiado');
                            }, 2000);
                        })
                        .catch(() => alert('Erro ao copiar o código Pix.'));
                } else {
                    alert('Código Pix indisponível.');
                }
            };
            modalPix.appendChild(btnCopiar);
        
            // Cria o botão de enviar comprovante
            const btnEnviarComprovante = document.createElement('button');
            btnEnviarComprovante.className = 'btn-enviar';
            btnEnviarComprovante.textContent = 'Enviar comprovante';
            btnEnviarComprovante.onclick = () => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdmgJH_HUEuXcYcMWJbkcg9TE0esXkgTR5khmWntPebE2zp4w/viewform?usp=dialog', '_blank');
            modalPix.appendChild(btnEnviarComprovante);
        } else {
            alert('Produto não encontrado.');
        }
    });
    
         
    
        btnCartao.addEventListener('click', () => {
            modalInicial.style.display = 'none';
            modalCartao.style.display = 'flex';
        
            // Limpa o conteúdo anterior
            modalCartao.innerHTML = '';
        
            // Itera sobre todos os produtos para encontrar o correto
            const nomeProduto = modalNome.textContent.toLowerCase(); // nome do produto exibido no modal
            const produtoAtual = Object.values(produtos).find(produto => produto.nome.toLowerCase() === nomeProduto);
        
            // Verifica se encontrou o produto
            if (produtoAtual) {
                // Cria o botão de ir para o link de pagamento
                const btnIrParaPagamento = document.createElement('button');
                btnIrParaPagamento.className = 'btn-pix';
                btnIrParaPagamento.textContent = 'Ir para link de pagamento';
        
                // Verifica se o linkCartao existe e cria a ação
                if (produtoAtual.linkCartao) {
                    btnIrParaPagamento.onclick = () => {
                        window.open(produtoAtual.linkCartao, '_blank');
                    };
                } else {
                    console.error('Link de pagamento não disponível para este produto.');
                }
        
                // Cria o botão de enviar comprovante
                const btnEnviarComprovante = document.createElement('button');
                btnEnviarComprovante.className = 'btn-enviar';
                btnEnviarComprovante.textContent = 'Enviar comprovante';
                btnEnviarComprovante.onclick = () => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdmgJH_HUEuXcYcMWJbkcg9TE0esXkgTR5khmWntPebE2zp4w/viewform?usp=dialog', '_blank');
        
                // Adiciona os botões ao modal
                modalCartao.appendChild(btnIrParaPagamento);
                modalCartao.appendChild(btnEnviarComprovante);
            } else {
                alert('Produto não encontrado.');
            }
        });
        
    

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        


});
