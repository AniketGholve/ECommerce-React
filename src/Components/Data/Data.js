let data = [
    {
        id: 1,
        name: "AirPods Max",
        url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-green-202011?wid=532&hei=582&fmt=png-alpha&.v=1604022364000",
        rating: 4,
        price: "$499",
        cat: ["all", "ipod"]
    },
    {
        id: 2,
        name: "IPhone 15 Pro",
        url: "https://ishopmx.vtexassets.com/arquivos/iPhone_15pro.png",
        rating: 5,
        price: "$999",
        cat: ["all", "iphone"]
    },
    {
        id: 3,
        name: "IPhone 15 Plus",
        url: "https://ishopmx.vtexassets.com/arquivos/iPhone_15Plus.png",
        rating: 5,
        price: "$899",
        cat: ["all", "iphone"]
    },
    {
        id: 4,
        name: "IPhone 15 Plus",
        url: "https://ishopmx.vtexassets.com/arquivos/HomePod.png",
        rating: 5,
        price: "$899",
        cat: ["all", "accessories"]
    },
    {
        id: 5,
        name: "IPad Pro 12",
        url: "https://ishopmx.vtexassets.com/arquivos/00_iPad_Pro_12_6aGen.png",
        rating: 5,
        price: "$599",
        cat: ["all", "ipad"]
    },
    {
        id: 6,
        name: "Apple watch series 9",
        url: "https://ishopmx.vtexassets.com/arquivos/watch_series9.png",
        rating: 5,
        price: "$599",
        cat: ["all", "watch"]
    },
    {
        id: 7,
        name: "Apple watch ultra 1",
        url: "https://ishopmx.vtexassets.com/arquivos/Watch_ultra1.png",
        rating: 5,
        price: "$599",
        cat: ["all", "watch"]
    },
    {
        id: 8,
        name: "IPhone 15 Pro Max",
        url: "https://ishopmx.vtexassets.com/arquivos/iPhone_15promax.png",
        rating: 5,
        price: "$28999",
        cat: ["iphone"]
    },
    {
        id: 9,
        name: "IPhone 14 Pro Max",
        url: "https://ishopmx.vtexassets.com/arquivos/iphone_14ProMax.png",
        rating: 5,
        price: "$28999",
        cat: ["iphone"]
    },
    {
        id: 10,
        name: "IPhone 14 Pro",
        url: "https://ishopmx.vtexassets.com/arquivos/iphone_14ProMax.png",
        rating: 5,
        price: "$28999",
        cat: ["iphone"]
    },
    {
        id: 11,
        name: "IPhone 14 Plus",
        url: "https://ishopmx.vtexassets.com/assets/vtex.file-manager-graphql/images/8645ccf7-8320-49e0-8731-ed6577bb8463___907d31e30d53792b29b5c742a1343c5a.png",
        rating: 5,
        price: "$28999",
        cat: ["iphone"]
    },
    {
        id: 12,
        name: "IPhone 14",
        url: "https://ishopmx.vtexassets.com/assets/vtex.file-manager-graphql/images/8645ccf7-8320-49e0-8731-ed6577bb8463___907d31e30d53792b29b5c742a1343c5a.png",
        rating: 5,
        price: "$28999",
        cat: ["iphone"]
    },
    {
        id: 13,
        name: "IPhone 12",
        url: "https://ishopmx.vtexassets.com/assets/vtex.file-manager-graphql/images/7efb0960-31ea-4b06-a436-793fd02755af___bd3ba46ec19e6009fc83d45685dabe89.png",
        rating: 5,
        price: "$28999",
        cat: ["iphone"]
    },
    {
        id: 14,
        name: "MacBook Air",
        url: "https://ishopmx.vtexassets.com/assets/vtex.file-manager-graphql/images/c769948a-369d-47ac-8cf3-c71bb47c0b1f___25c3cb08de5167171c0e10456edc25d7.png",
        rating: 5,
        price: "$900",
        cat: ["mac"]
    },
    {
        id: 15,
        name: "MacBook Pro",
        url: "https://ishopmx.vtexassets.com/assets/vtex.file-manager-graphql/images/cdccd817-c08b-4a54-81e9-5766fd860891___c4f646831b209e635dfb0ef8944b5d14.png",
        rating: 5,
        price: "$900",
        cat: ["mac"]
    },
    {
        id: 16,
        name: "MacBook Pro",
        url: "https://ishopmx.vtexassets.com/assets/vtex.file-manager-graphql/images/4f575eb3-cfdb-4769-a6b8-9cc6b69d1c23___013ca44ac27ee358ae4adf5dffce032c.png",
        rating: 5,
        price: "$900",
        cat: ["mac"]
    },
    {
        id: 17,
        name: "Mac Min",
        url: "https://ishopmx.vtexassets.com/arquivos/ids/271011-300-300?v=638144160818300000&width=300&height=300&aspect=true",
        rating: 5,
        price: "$900",
        cat: ["mac"]
    },
    {
        id: 18,
        name: "Mac Studio",
        url: "https://ishopmx.vtexassets.com/assets/vtex.file-manager-graphql/images/a56ab722-a06a-4fa0-a017-da6b52f83b9d___305dd9c62be459eff2b8bed8d4394495.png",
        rating: 5,
        price: "$900",
        cat: ["mac"]
    },
    {
        id: 19,
        name: "Studio Display",
        url: "https://ishopmx.vtexassets.com/assets/vtex/assets-builder/ishopmx.ishop-store-theme/7.106.0/header/menu/mac/Studio_Display___26f704153ffe6dc4052e8c3130967569.png",
        rating: 5,
        price: "$900",
        cat: ["mac", "all"]
    },
    {
        id: 20,
        name: "MacBook Air 13",
        url: "https://www.apple.com/v/mac/home/bw/images/overview/select/product_tile_mba_13__ci4jh6tvqvyq_large.png",
        rating: 5,
        price: "$900",
        cat: ["mac"]
    },
    {
        id: 21,
        name: "Mac Pro M2 Ultra Chip",
        url: "https://www.apple.com/v/mac/home/bw/images/overview/select/product_tile_mac_pro__6q3qt8073f6e_large.png",
        rating: 5,
        price: "$900",
        cat: ["mac"]
    },
    {
        id: 22,
        name: "IPad Pro 12.9",
        url: "https://ishopmx.vtexassets.com/assets/vtex.file-manager-graphql/images/29d3ef6c-afd0-4aed-8fa4-3007a63a2a80___40738b1d556c296790b03eae47b7a30b.png",
        rating: 5,
        price: "$900",
        cat: ["ipad"]
    },
    {
        id: 23,
        name: "IPad Pro 11",
        url: "https://ishopmx.vtexassets.com/assets/vtex.file-manager-graphql/images/29d3ef6c-afd0-4aed-8fa4-3007a63a2a80___40738b1d556c296790b03eae47b7a30b.png",
        rating: 5,
        price: "$900",
        cat: ["ipad"]
    },
    {
        id: 24,
        name: "IPad Air",
        url: "https://ishopmx.vtexassets.com/assets/vtex.file-manager-graphql/images/825c520f-7569-4207-9771-88fac2413810___605ba6b4c63627abdf8b9a374ddb7b38.png",
        rating: 5,
        price: "$900",
        cat: ["ipad"]
    },
    {
        id: 25,
        name: "IPad (10a Gen)",
        url: "https://ishopmx.vtexassets.com/arquivos/05_iPad_10aGen.png",
        rating: 5,
        price: "$900",
        cat: ["ipad"]
    },
    {
        id: 26,
        name: "IPad (9a Gen)",
        url: "https://ishopmx.vtexassets.com/assets/vtex.file-manager-graphql/images/19b5d08c-b8d1-4de6-9485-15a8407d23a2___4e2fce3b90ba8fd8f1974805c619accd.png",
        rating: 5,
        price: "$900",
        cat: ["ipad"]
    },
    {
        id: 27,
        name: "IPad Mini",
        url: "https://ishopmx.vtexassets.com/assets/vtex.file-manager-graphql/images/262463c8-afe3-417a-a74a-5f08869dc63d___2e24ed11b1bb674f5557a8d4a6c45a5b.png",
        rating: 5,
        price: "$900",
        cat: ["ipad"]
    },
    {
        id: 38,
        name: "Magic Keyboard Folio for iPad (10th generation) - US English",
        url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQDP3_FV401?wid=1420&hei=930&fmt=png-alpha&.v=1664481416885",
        rating: 5,
        price: "$900",
        cat: ["ipad"]
    },
    {
        id: 28,
        name: "Airpods (2a Gen)",
        url: "https://ishopmx.vtexassets.com/assets/vtex.file-manager-graphql/images/685a86db-3859-44ba-8229-016f23d5ded8___2790d6029f89ff2ed43998b76ac6ba84.png",
        rating: 5,
        price: "$900",
        cat: ["ipod"]
    },
    {
        id: 29,
        name: "Airpods (3a Gen)",
        url: "https://ishopmx.vtexassets.com/assets/vtex.file-manager-graphql/images/e64326ba-8309-4df2-a2e7-7881dc9e390d___c04912e35b18d45e27da5098ef619c79.png",
        rating: 5,
        price: "$900",
        cat: ["ipod"]
    },
    {
        id: 30,
        name: "Airpods Pro (2a Gen)",
        url: "https://ishopmx.vtexassets.com/assets/vtex.file-manager-graphql/images/d8ca5c43-f51b-4d0c-86d8-2619f92216fb___e473fa4e3805022f89ae1150d0e6348d.png",
        rating: 5,
        price: "$900",
        cat: ["ipod"]
    },
    {
        id: 31,
        name: "Apple Pencil (USB-C)",
        url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MUWA3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1695933856697",
        rating: 5,
        price: "$900",
        cat: ["feature","accessories"]
    },
    {
        id: 32,
        name: "iPhone 15 Pro FineWoven Case with MagSafe - Taupe",
        url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT0U3?wid=532&hei=582&fmt=png-alpha&.v=1693000313579",
        rating: 5,
        price: "$900",
        cat: ["feature","accessories"]
    },
    {
        id: 33,
        name: "Smart Folio for iPad (10th generation) - Sky",
        url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQDU3?wid=532&hei=582&fmt=png-alpha&.v=1664481896530",
        rating: 5,
        price: "$900",
        cat: ["feature","accessories"]
    },
    {
        id: 34,
        name: "Magic Keyboard with Touch ID and Numeric Keypad for Mac",
        url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MMMR3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1645719947833",
        rating: 5,
        price: "$900",
        cat: ["feature","accessories"]
    },
    {
        id: 35,
        name: "USB-C to Lightning Adapter",
        url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MUQX3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1692831819729",
        rating: 5,
        price: "$900",
        cat: ["feature","accessories"]
    },
    {
        id: 36,
        name: "Magic Mouse - Black Multi-Touch Surface",
        url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MMMQ3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1645138486301",
        rating: 5,
        price: "$900",
        cat: ["feature","accessories"]
    },
    {
        id: 37,
        name: "240W USB-C Charge Cable (2m)",
        url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU2G3?wid=532&hei=582&fmt=png-alpha&.v=1693236163178",
        rating: 5,
        price: "$900",
        cat: ["feature","accessories"]
    },

];
export default data;