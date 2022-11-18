export const books = [
    {
        id: "caldeiraoDeTashaParaTudo",
        name: "Caldeirao de Tasha para tudo",
    },
    {
        id: "guiaDeXanatharSobreTodasAsCoisas",
        name: "Guia de Xanathar sobre Todas as Coisas",
    },
    {
        id: "guiaDoVoloParaMonstros",
        name: "Guia do Volo para Monstros",
    },
    {
        id: "monstrosDoMultiverso",
        name: "Monstros do Multiverso",
    },
]

export const livroDoJogador = {
    listOfRaces: [
        {
            id: "anao",
            name: "Anão",
        },
        {
            id: "draconato",
            name: "Draconato",
        },
        {
            id: "elfo",
            name: "Elfo",
        },
        {
            id: "gnomo",
            name: "Gnomo",
        },
        {
            id: "humano",
            name: "Humano",
        },
        {
            id: "meioElfo",
            name: "Meio-Elfo",
        },
        {
            id: "meioOrc",
            name: "Meio-Orc",
        },
        {
            id: "pequenino",
            name: "Pequenino",
        },
        {
            id: "tiferino",
            name: "Tiferino",
        },
    ],
}

export const caldeiraoDeTashaParaTudo = {

}

export const guiaDeXanatharSobreTodasAsCoisas = {

}

export const guiaDoVoloParaMonstros = {
    listOfRaces: [
        {
            id: "aasimar",
            name: "Aasimar",
        },
        {
            id: "firbolg",
            name: "Firbolg",
        },
        {
            id: "golias",
            name: "Golias",
        },
        {
            id: "kenku",
            name: "Kenku",
        },
        {
            id: "povolagarto",
            name: "Povo-Lagarto",
        },
        {
            id: "tabaxi",
            name: "Tabaxi",
        },
        {
            id: "tritao",
            name: "Tritão",
        },
        {
            id: "bugbear",
            name: "Bugbear",
        },
        {
            id: "goblin",
            name: "Goblin",
        },
        {
            id: "hobgoblin",
            name: "Hobgoblin",
        },
        {
            id: "kobold",
            name: "Kobold",
        },
        {
            id: "orc",
            name: "Orc",
        },
        {
            id: "yuantipurosangue",
            name: "Yuan-ti Puro Sangue"
        }
    ],
}

export const monstrosDoMultiverso = {
    listOfRaces: [
        {
            id: "aarakocra",
            name: "Aarakocra",
        },
        {
            id: "aasimar",
            name: "Aasimar",
        },
        {
            id: "bugbear",
            name: "Bugbear",
        },
        {
            id: "centauro",
            name: "Centauro",
        },
        {
            id: "transfigurador",
            name: "Transfigurador",
        },
        {
            id: "gnomodasprofundezas",
            name: "Gnomo Das Profundezas",
        },
        {
            id: "duergar",
            name: "Duergar",
        },
        {
            id: "eladrin",
            name: "Eladrin",
        },
        {
            id: "fada",
            name: "Fada",
        },
        {
            id: "firbolg",
            name: "Firbolg",
        },
        {
            id: "genasidoar",
            name: "Genasi do Ar",
        },
        {
            id: "genasidaterra",
            name: "Genasi da Terra",
        },
        {
            id: "genasidofogo",
            name: "Genasi do Fogo",
        },
        {
            id: "genasidaagua",
            name: "Genasi da Água",
        },
        {
            id: "githyanki",
            name: "Githyanki",
        },
        {
            id: "githzerai",
            name: "Githzerai",
        },
        {
            id: "goblin",
            name: "Goblin",
        },
        {
            id: "golias",
            name: "Golias",
        },
        {
            id: "haregon",
            name: "Haregon",
        },
        {
            id: "hobgoblin",
            name: "Hobgoblin",
        },
        {
            id: "kenku",
            name: "Kenku",
        },
        {
            id: "kobold",
            name: "Kobold",
        },
        {
            id: "povolagarto",
            name: "Povo-Lagarto",
        },
        {
            id: "minotauro",
            name: "Minotauro",
        },
        {
            id: "orc",
            name: "Orc",
        },
        {
            id: "satiro",
            name: "Sátiro",
        },
        {
            id: "elfodomar",
            name: "Elfo do Mar",
        },
        {
            id: "shadarkai",
            name: "Shadar-Kai",
        },
        {
            id: "transmorfo",
            name: "Transmorfo",
        },
        {
            id: "tabaxi",
            name: "Tabaxi",
        },
        {
            id: "tortle",
            name: "Tortle",
        },
        {
            id: "tritao",
            name: "Tritão",
        },
        {
            id: "yuanti",
            name: "Yuan-ti",
        },
    ],
}

export const races = {
    anao: {
        name: "Anão",
        subRace: {
            options: [
                {
                    id: "anaoDaColina",
                    name: "Anão da Colina",
                },
                {
                    id: "anaoDaMontanha",
                    name: "Anão da Montanha",
                },
            ],
        },
        choices: [
            {
                id: "proficiênciaComFerramentas",
                name: "Proficiência com Ferramentas",
                label: "Ferramentas",
                options: [
                    {
                        id: "ferraria",
                        name: "Ferraria",
                    },
                    {
                        id: "cervejaria",
                        name: "Cervejaria",
                    },
                    {
                        id: "alvenaria",
                        name: "Alvenaria",
                    },
                ],
            },
        ],
        descriptions: {
            base: [
                "Aumento no Valor de Atributo: Constituição +2",
                "Tamanho: Médio",
                "Deslocamento: 7,5 metros",
                "Visão no Escuro",
                "Resistência a Toxinas",
                "Treinamento Anão em Combate",
                "Conhecimento de Pedras",
                "Idiomas: Comun e Anão",
            ],
            anaoDaColina: [
                "Aumento no Valor de Atributo: Sabedoria +1",
                "Tenacidade Anã",
            ],
            anaoDaMontanha: [
                "Aumento no Valor de Atributo: Força +2",
                "Treinamento Anão com Armaduras",
            ],
        },
    },
    draconato: {
        name: "Anão",
        choices: [
            {
                id: "herancaDraconica",
                name: "Herança Dracônica",
                label: "Dragão",
                options: [
                    {
                        id: "azul",
                        name: "Azul",
                    },
                    {
                        id: "branco",
                        name: "Branco",
                    },
                    {
                        id: "bronze",
                        name: "Bronze",
                    },
                    {
                        id: "cobre",
                        name: "Cobre",
                    },
                    {
                        id: "latao",
                        name: "Latão",
                    },
                    {
                        id: "negro",
                        name: "Negro",
                    },
                    {
                        id: "ouro",
                        name: "Ouro",
                    },
                    {
                        id: "prata",
                        name: "Prata",
                    },
                    {
                        id: "verde",
                        name: "Verde",
                    },
                    {
                        id: "vermelho",
                        name: "Vermelho",
                    },
                ],
            },
        ],
        descriptions: {
            base: [
                "Aumento no Valor de Atributo: Força +2, Carisma +1",
                "Tamanho: Médio",
                "Deslocamento: 9 metros",
                "Ataque de Sopro",
                "Resistência a Dano",
                "Idiomas: Comun e Dracônico",
            ],
        },
    },
    elfo: {
        name: "Elfo",
        subRace: {
            options: [
                {
                    id: "altoElfo",
                    name: "Alto Elfo",
                },
                {
                    id: "elfoSilvestre",
                    name: "Elfo Silvestre",
                },
                {
                    id: "elfoObscuroDrow",
                    name: "Elfo Obscuro (Drow)",
                },
            ],
            choices: [
                {
                    for: "altoElfo",
                    id: "truque",
                    name: "Truque",
                    label: "Truque de Mago",
                    options: "truqueDeMago",
                },
                {
                    for: "altoElfo",
                    id: "idiomaExtra",
                    name: "Idioma Extra",
                    label: "Idioma",
                    options: "idioma",
                },
            ],
        },
        descriptions: {
            base: [
                "Aumento no Valor de Atributo: Destreza +2",
                "Tamanho: Médio",
                "Visão no Escuro",
                "Sentidos Aguçados",
                "Ancestralidade Feérica",
                "Transe",
                "Idiomas: Comun e Élfico",
            ],
            altoElfo: [
                "Deslocamento: 9 metxros",
                "Aumento no Valor de Atributo: Inteligência +1",
                "Treinamento Élfico com Armas",
            ],
            elfoSilvestre: [
                "Deslocamento: 10,5 metros",
                "Aumento no Valor de Atributo: Sabedoria +1",
                "Treinamento Élfico com Armas",
                "Máscara da Natureza",
            ],
            elfoObscuroDrow: [
                "Deslocamento: 9 metxros",
                "Aumento no Valor de Atributo: Carisma +1",
                "Visão no Escuro Aprimorada",
                "Sensibilidade à Luz Solar",
                "Magia Drow",
                "Treinamento Drow com Armas",
            ],
        },
    },
    gnomo: {
        // subRaca,
    },
    humano: {
        // idioma,
        // subRaca
        //     pontoDeAtributo
        //     pericia
        //     talento
    },
    meioElfo: {
        // pontosDeAtributo,
        // pericia,
        // idioma,
    },
    meioOrc: {
        
    },
    pequenino: {
        // subRaca,
    }, 
    tiferino: {

    }
}




// export const races = [
//     {
//         id: "anao",
//         title: "Anão",
//         subRace: [
//             {
//                 id: "anaoDaColina",
//                 title: "Anão da Colina",
//             },
//             {
//                 id: "anaoDaMontanha",
//                 title: "Anão Da Montanha",
//             },
//         ],
//         age: {
//             min: 50,
//             max: 350,
//         },
//         height: {
//             min: 1.3,
//             max: 1.6,
//         },
//         weight: {
//             min: 50,
//             max: 112.5,
//         },
//     },
//     {
//         id: "draconato",
//         title: "Draconato",
//         subRace: [],
//         age: {
//             min: 15,
//             max: 80,
//         },
//         height: {
//             min: 1.2,
//             max: 2.7,
//         },
//         weight: {
//             min: 73.3,
//             max: 165,
//         },
//     },
//     {
//         id: "elfo",
//         title: "Elfo",
//         subRace: [
//             {
//                 id: "altoElfo",
//                 title: "Alto Elfo",
//             },
//             {
//                 id: "elfoSilvestre",
//                 title: "Elfo Silvestre",
//             },
//             {
//                 id: "elfoObscuro",
//                 title: "Elfo Obscuro (Drow)",
//             },
//         ],
//         age: {
//             min: 18,
//             max: 750,
//         },
//         height: {
//             min: 33.5,
//             max: 75,
//         },
//         weight: {
//             min: 1.5,
//             max: 1.8,
//         },
//     },
//     {
//         id: "gnomo",
//         title: "Gnomo",
//         subRace: [
//             {
//                 id: "gnomoDosBosques",
//                 title: "Gnomo Dos Bosques",
//             },
//             {
//                 id: "gnomoDasRochas",
//                 title: "Gnomo Das Rochas",
//             },
//         ],
//         age: {
//             min: 18,
//             max: 500,
//         },
//         height: {
//             min: 0.9,
//             max: 1.2,
//         },
//         weight: {
//             min: 12,
//             max: 27,
//         },
//     },
//     {
//         id: "humano",
//         title: "Humano",
//         subRace: [
//             {
//                 id: "humanoVariante",
//                 title: "Humano Variante",
//             },
//         ],
//         age: {
//             min: 18,
//             max: 100,
//         },
//         height: {
//             min: 1.4,
//             max: 2,
//         },
//         weight: {
//             min: 40,
//             max: 120,
//         },
//     },
//     {
//         id: "meioElfo",
//         title: "Meio-Elfo",
//         subRace: [],
//         age: {
//             min: 18,
//             max: 180,
//         },
//         height: {
//             min: 1.5,
//             max: 1.8,
//         },
//         weight: {
//             min: 45,
//             max: 75,
//         },
//     },
//     {
//         id: "meioOrc",
//         title: "Meio-Orc",
//         subRace: [],
//         age: {
//             min: 14,
//             max: 75,
//         },
//         height: {
//             min: 1.5,
//             max: 1.9,
//         },
//         weight: {
//             min: 50,
//             max: 105,
//         },
//     },
//     {
//         id: "pequenino",
//         title: "Pequenino",
//         subRace: [
//             {
//                 id: "pequeninoPesLigeiros",
//                 title: "Pés Ligeiros",
//             },
//             {
//                 id: "pequeninoRobusto",
//                 title: "Robusto",
//             },
//         ],
//         age: {
//             min: 20,
//             max: 250,
//         },
//         height: {
//             min: 0.6,
//             max: 1.3,
//         },
//         weight: {
//             min: 12,
//             max: 27,
//         },
//     },
//     {
//         id: "tiferino",
//         title: "Tiferino",
//         subRace: [],
//         age: {
//             min: 18,
//             max: 120,
//         },
//         height: {
//             min: 1.6,
//             max: 1.8,
//         },
//         weight: {
//             min: 45,
//             max: 80,
//         },
//     },
// ]