import { countriesFlags } from './dataBaseNationalFlags.js'
const currencyData=[{
    "USD": {
    "symbol": "$",
        "name": "US Dollar",
        "symbol_native": "$",
        "code": "USD",
        "name_plural": "US dollars",
        "flag": "http://flags.fmcdn.net/data/flags/normal/us.png",
        "color":"red"
},
    "CAD": {
    "symbol": "CA$",
        "name": "Canadian Dollar",
        "symbol_native": "$",
        "code": "CAD",
        "name_plural": "Canadian dollars",
        "flag": 'http://flags.fmcdn.net/data/flags/normal/ca.png',
        "color":"red"
},
    "EUR": {
    "symbol": "€",
        "name": "Euro",
        "symbol_native": "€",
        "code": "EUR",
        "name_plural": "euros",
        "flag": './7aa757c532b0a752236021195bd5a45d.jpeg',
        "color":"blue"
},
    "AED": {
    "symbol": "AED",
        "name": "United Arab Emirates Dirham",
        "symbol_native": "د.إ.‏",
        "code": "AED",
        "name_plural": "UAE dirhams",
        "flag": 'http://flags.fmcdn.net/data/flags/normal/ae.png',
        "color":"white"
},
    "AFN": {
    "symbol": "Af",
        "name": "Afghan Afghani",
        "symbol_native": "؋",
        "code": "AFN",
        "name_plural": "Afghan Afghanis",
        "flag": 'http://flags.fmcdn.net/data/flags/normal/af.png',
        "color":"red"
},
    "ALL": {
    "symbol": "ALL",
        "name": "Albanian Lek",
        "symbol_native": "Lek",
        "code": "ALL",
        "name_plural": "Albanian lekë",
        "flag": 'http://flags.fmcdn.net/data/flags/normal/al.png',
        "color":"red"
},
    "AMD": {
    "symbol": "AMD",
        "name": "Armenian Dram",
        "symbol_native": "դր.",
        "code": "AMD",
        "name_plural": "Armenian drams",
        "flag": "http://flags.fmcdn.net/data/flags/normal/am.png",
        "color":"red"
},
    "ARS": {
    "symbol": "AR$",
        "name": "Argentine Peso",
        "symbol_native": "$",
        "code": "ARS",
        "name_plural": "Argentine pesos",
        "flag": "http://flags.fmcdn.net/data/flags/normal/ar.png",
        "color":"ligt-blue"
},
    "AUD": {
    "symbol": "AU$",
        "name": "Australian Dollar",
        "symbol_native": "$",
        "code": "AUD",
        "name_plural": "Australian dollars",
        "flag": 'http://flags.fmcdn.net/data/flags/normal/au.png',
        "color":"blue"
},
    "AZN": {
    "symbol": "man.",
        "name": "Azerbaijani Manat",
        "symbol_native": "ман.",
        "code": "AZN",
        "name_plural": "Azerbaijani manats",
        "flag": "http://flags.fmcdn.net/data/flags/normal/az.png",
        "color":"light-blue"
},
    "BAM": {
    "symbol": "KM",
        "name": "Bosnia-Herzegovina Convertible Mark",
        "symbol_native": "KM",
        "code": "BAM",
        "name_plural": "Bosnia-Herzegovina convertible marks",
        "flag": "http://flags.fmcdn.net/data/flags/normal/ba.png",
        "color":"blue"
},
    "BDT": {
    "symbol": "Tk",
        "name": "Bangladeshi Taka",
        "symbol_native": "৳",
        "code": "BDT",
        "name_plural": "Bangladeshi takas",
        "flag": "http://flags.fmcdn.net/data/flags/normal/bd.png",
        "color":"blue"
},
    "BGN": {
    "symbol": "BGN",
        "name": "Bulgarian Lev",
        "symbol_native": "лв.",
        "code": "BGN",
        "name_plural": "Bulgarian leva",
        "flag": 'http://flags.fmcdn.net/data/flags/normal/bg.png',
        "color":"green"
},
    "BHD": {
    "symbol": "BD",
        "name": "Bahraini Dinar",
        "symbol_native": "د.ب.‏",
        "code": "BHD",
        "name_plural": "Bahraini dinars",
        "flag": 'http://flags.fmcdn.net/data/flags/normal/bh.png',
        "color":"red"
},
    "BIF": {
    "symbol": "FBu",
        "name": "Burundian Franc",
        "symbol_native": "FBu",
        "code": "BIF",
        "name_plural": "Burundian francs",
        "flag": 'http://flags.fmcdn.net/data/flags/normal/bi.png',
        "color":"red"
},
    "BND": {
    "symbol": "BN$",
        "name": "Brunei Dollar",
        "symbol_native": "$",
        "code": "BND",
        "name_plural": "Brunei dollars",
        "flag": "http://flags.fmcdn.net/data/flags/normal/bn.png",
        "color":"yellow"
},
    "BOB": {
    "symbol": "Bs",
        "name": "Bolivian Boliviano",
        "symbol_native": "Bs",
        "code": "BOB",
        "name_plural": "Bolivian bolivianos",
        "flag": "http://flags.fmcdn.net/data/flags/normal/bo.png",
        "color":"yellow"
},
    "BRL": {
    "symbol": "R$",
        "name": "Brazilian Real",
        "symbol_native": "R$",
        "flag": "http://flags.fmcdn.net/data/flags/normal/br.png",
        "code": "BRL",
        "name_plural": "Brazilian reals",
        "color":"green"
},
    "BWP": {
    "symbol": "BWP",
        "name": "Botswanan Pula",
        "symbol_native": "P",
        "code": "BWP",
        "name_plural": "Botswanan pulas",
        "flag": "http://flags.fmcdn.net/data/flags/normal/bw.png",
        "color":"ligt-blue"
},
    "BYR": {
    "symbol": "BYR",
        "name": "Belarusian Ruble",
        "symbol_native": "BYR",
        "code": "BYR",
        "name_plural": "Belarusian rubles",
        "flag": "http://flags.fmcdn.net/data/flags/normal/ru.png",
        "color":"blue"
},
    "BZD": {
    "symbol": "BZ$",
        "name": "Belize Dollar",
        "symbol_native": "$",
        "code": "BZD",
        "name_plural": "Belize dollars",
        "flag": "http://flags.fmcdn.net/data/flags/normal/bz.png",
        "color":"blue"
},
    "CDF": {
    "symbol": "CDF",
        "name": "Congolese Franc",
        "symbol_native": "FrCD",
        "code": "CDF",
        "name_plural": "Congolese francs",
        "flag": "http://flags.fmcdn.net/data/flags/normal/dk.png",
        "color":"red"
},
    "CHF": {
    "symbol": "CHF",
        "name": "Swiss Franc",
        "symbol_native": "CHF",
        "code": "CHF",
        "name_plural": "Swiss francs",
        "flag": "http://flags.fmcdn.net/data/flags/normal/ch.png",
        "color":"red"
},
    "CLP": {
    "symbol": "CL$",
        "name": "Chilean Peso",
        "symbol_native": "$",
        "code": "CLP",
        "name_plural": "Chilean pesos",
        "flag": "http://flags.fmcdn.net/data/flags/normal/cl.png",
        "color":"red"
},
    "CNY": {
    "symbol": "CN¥",
        "name": "Chinese Yuan",
        "symbol_native": "CN¥",
        "code": "CNY",
        "name_plural": "Chinese yuan",
        "flag": "http://flags.fmcdn.net/data/flags/normal/cn.png",
        "color":"red"
},
    "COP": {
    "symbol": "CO$",
        "name": "Colombian Peso",
        "symbol_native": "$",
        "code": "COP",
        "name_plural": "Colombian pesos",
        "flag":  "http://flags.fmcdn.net/data/flags/normal/co.png",
        "color":"yellow"
},
    "CRC": {
    "symbol": "₡",
        "name": "Costa Rican Colón",
        "symbol_native": "₡",
        "code": "CRC",
        "name_plural": "Costa Rican colóns",
        "flag": 'http://flags.fmcdn.net/data/flags/normal/cr.png',
        "color":"blue"
},
    "CVE": {
    "symbol": "CV$",
        "name": "Cape Verdean Escudo",
        "symbol_native": "CV$",
        "code": "CVE",
        "name_plural": "Cape Verdean escudos",
        "flag": 'http://flags.fmcdn.net/data/flags/normal/cv.png',
        "color":"blue"
},
    "CZK": {
    "symbol": "Kč",
        "name": "Czech Republic Koruna",
        "symbol_native": "Kč",
        "code": "CZK",
        "name_plural": "Czech Republic korunas",
        "flag": 'http://flags.fmcdn.net/data/flags/normal/cz.png',
        "color":"red"
},
    "DJF": {
    "symbol": "Fdj",
        "name": "Djiboutian Franc",
        "symbol_native": "Fdj",
        "code": "DJF",
        "name_plural": "Djiboutian francs",
        "flag": "http://flags.fmcdn.net/data/flags/normal/dj.png",
        "color":"green"
},
    "DKK": {
    "symbol": "Dkr",
        "name": "Danish Krone",
        "symbol_native": "kr",
        "code": "DKK",
        "name_plural": "Danish kroner",
        "flag": 'http://flags.fmcdn.net/data/flags/normal/do.png',
        "color":"blue"
},
    "DOP": {
    "symbol": "RD$",
        "name": "Dominican Peso",
        "symbol_native": "RD$",
        "code": "DOP",
        "name_plural": "Dominican pesos",
        "flag": 'http://flags.fmcdn.net/data/flags/normal/dm.png',
        "color":"green"
},
    "DZD": {
    "symbol": "DA",
        "name": "Algerian Dinar",
        "symbol_native": "د.ج.‏",
        "code": "DZD",
        "name_plural": "Algerian dinars",
        "flag": 'http://flags.fmcdn.net/data/flags/normal/dz.png',
        "color":"green"
},
    "EEK": {
    "symbol": "Ekr",
        "name": "Estonian Kroon",
        "symbol_native": "kr",
        "code": "EEK",
        "name_plural": "Estonian kroons",
        "flag": "http://flags.fmcdn.net/data/flags/normal/ee.png",
        "color":"blue"
},
    "EGP": {
    "symbol": "EGP",
        "name": "Egyptian Pound",
        "symbol_native": "ج.م.‏",
        "code": "EGP",
        "name_plural": "Egyptian pounds",
        "flag": 'http://flags.fmcdn.net/data/flags/normal/eg.png',
        "color":"red"
},
    "ERN": {
    "symbol": "Nfk",
        "name": "Eritrean Nakfa",
        "symbol_native": "Nfk",
        "code": "ERN",
        "name_plural": "Eritrean nakfas",
        "flag": 'http://flags.fmcdn.net/data/flags/normal/er.png',
        "color":"red"
},
    "ETB": {
    "symbol": "Br",
        "name": "Ethiopian Birr",
        "symbol_native": "Br",
        "code": "ETB",
        "name_plural": "Ethiopian birrs",
        "flag": 'http://flags.fmcdn.net/data/flags/normal/et.png',
        "color":"green"
},
    "GBP": {
    "symbol": "£",
        "name": "British Pound Sterling",
        "symbol_native": "£",
        "code": "GBP",
        "name_plural": "British pounds sterling",
        "flag": 'http://flags.fmcdn.net/data/flags/normal/gb.png',
        "color":"blue"
},
    "GEL": {
    "symbol": "GEL",
        "name": "Georgian Lari",
        "symbol_native": "GEL",
        "code": "GEL",
        "name_plural": "Georgian laris",
        "flag": "http://flags.fmcdn.net/data/flags/normal/ge.png",
        "color":"white"
},
    "GHS": {
    "symbol": "GH₵",
        "name": "Ghanaian Cedi",
        "symbol_native": "GH₵",
        "code": "GHS",
        "name_plural": "Ghanaian cedis",
        "flag": 'http://flags.fmcdn.net/data/flags/normal/gh.png',
        "color":"red"
},
    "GNF": {
    "symbol": "FG",
        "name": "Guinean Franc",
        "symbol_native": "FG",
        "code": "GNF",
        "name_plural": "Guinean francs",
        "flag": 'http://flags.fmcdn.net/data/flags/normal/gq.png',
        "color":"green"
},
    "GTQ": {
    "symbol": "GTQ",
        "name": "Guatemalan Quetzal",
        "symbol_native": "Q",
        "code": "GTQ",
        "name_plural": "Guatemalan quetzals",
        "flag": "http://flags.fmcdn.net/data/flags/normal/gt.png",
        "color":"light-blue"
},
    "HKD": {
    "symbol": "HK$",
        "name": "Hong Kong Dollar",
        "symbol_native": "$",
        "code": "HKD",
        "name_plural": "Hong Kong dollars",
        "flag": "http://flags.fmcdn.net/data/flags/normal/cn.png",
        "color":"red"
},
    "HNL": {
    "symbol": "HNL",
        "name": "Honduran Lempira",
        "symbol_native": "L",
        "code": "HNL",
        "name_plural": "Honduran lempiras",
        "flag": "http://flags.fmcdn.net/data/flags/normal/hn.png",
        "color": "blue"
},
    "HRK": {
    "symbol": "kn",
        "name": "Croatian Kuna",
        "symbol_native": "kn",
        "code": "HRK",
        "name_plural": "Croatian kunas",
        "flag": "http://flags.fmcdn.net/data/flags/normal/hr.png",
        "color":"red"
},
    "HUF": {
    "symbol": "Ft",
        "name": "Hungarian Forint",
        "symbol_native": "Ft",
        "code": "HUF",
        "name_plural": "Hungarian forints",
        "flag": "http://flags.fmcdn.net/data/flags/normal/hu.png",
        "color":"green"
},
    "IDR": {
    "symbol": "Rp",
        "name": "Indonesian Rupiah",
        "symbol_native": "Rp",
        "code": "IDR",
        "name_plural": "Indonesian rupiahs",
        "flag": "http://flags.fmcdn.net/data/flags/normal/id.png",
        "color" :"red"
},
    "ILS": {
    "symbol": "₪",
        "name": "Israeli New Sheqel",
        "symbol_native": "₪",
        "code": "ILS",
        "name_plural": "Israeli new sheqels",
        "flag":  "http://flags.fmcdn.net/data/flags/normal/il.png",
        "color":"white"
},
    "INR": {
    "symbol": "Rs",
        "name": "Indian Rupee",
        "symbol_native": "টকা",
        "code": "INR",
        "name_plural": "Indian rupees",
        "flag": "http://flags.fmcdn.net/data/flags/normal/in.png",
        "color":"orange"
},
    "IQD": {
    "symbol": "IQD",
        "name": "Iraqi Dinar",
        "symbol_native": "د.ع.‏",
        "code": "IQD",
        "name_plural": "Iraqi dinars",
        "flag": "http://flags.fmcdn.net/data/flags/normal/iq.png",
        "color" :"red"
},
    "IRR": {
    "symbol": "IRR",
        "name": "Iranian Rial",
        "symbol_native": "﷼",
        "code": "IRR",
        "name_plural": "Iranian rials",
        "flag": "http://flags.fmcdn.net/data/flags/normal/ir.png",
        "color" :"red"
},
    "ISK": {
    "symbol": "Ikr",
        "name": "Icelandic Króna",
        "symbol_native": "kr",
        "code": "ISK",
        "name_plural": "Icelandic krónur",
        "flag": "http://flags.fmcdn.net/data/flags/normal/is.png",
        "color" :"blue"
},
    "JMD": {
    "symbol": "J$",
        "name": "Jamaican Dollar",
        "symbol_native": "$",
        "code": "JMD",
        "name_plural": "Jamaican dollars",
        "flag": "http://flags.fmcdn.net/data/flags/normal/jm.png",
        "color" :"green"
},
    "JOD": {
    "symbol": "JD",
        "name": "Jordanian Dinar",
        "symbol_native": "د.أ.‏",
        "code": "JOD",
        "name_plural": "Jordanian dinars",
        "flag": "http://flags.fmcdn.net/data/flags/normal/jo.png",
        "color" :"green"
},
    "JPY": {
    "symbol": "¥",
        "name": "Japanese Yen",
        "symbol_native": "￥",
        "code": "JPY",
        "name_plural": "Japanese yen",
        "flag": "http://flags.fmcdn.net/data/flags/normal/jp.png",
        "color" :"white"
},
    "KES": {
    "symbol": "Ksh",
        "name": "Kenyan Shilling",
        "symbol_native": "Ksh",
        "code": "KES",
        "name_plural": "Kenyan shillings",
        "flag": "http://flags.fmcdn.net/data/flags/normal/ke.png",
        "color" :"green"
},
    "KHR": {
    "symbol": "KHR",
        "name": "Cambodian Riel",
        "symbol_native": "៛",
        "code": "KHR",
        "name_plural": "Cambodian riels",
        "flag": "http://flags.fmcdn.net/data/flags/normal/kh.png",
        "color" :"blue"
},
    "KMF": {
    "symbol": "CF",
        "name": "Comorian Franc",
        "symbol_native": "FC",
        "code": "KMF",
        "name_plural": "Comorian francs",
        "flag": "http://flags.fmcdn.net/data/flags/normal/km.png",
        "color":"green"
},
    "KRW": {
    "symbol": "₩",
        "name": "South Korean Won",
        "symbol_native": "₩",
        "code": "KRW",
        "name_plural": "South Korean won",
        "flag": "http://flags.fmcdn.net/data/flags/normal/kr.png",
        "color":"white"
},
    "KWD": {
    "symbol": "KD",
        "name": "Kuwaiti Dinar",
        "symbol_native": "د.ك.‏",
        "code": "KWD",
        "name_plural": "Kuwaiti dinars",
        "flag": "http://flags.fmcdn.net/data/flags/normal/kw.png",
        "color": "red"
},
    "KZT": {
    "symbol": "KZT",
        "name": "Kazakhstani Tenge",
        "symbol_native": "тңг.",
        "code": "KZT",
        "name_plural": "Kazakhstani tenges",
        "flag": "http://flags.fmcdn.net/data/flags/normal/kz.png",
        "color":"light-blue"
},
    "LBP": {
    "symbol": "LB£",
        "name": "Lebanese Pound",
        "symbol_native": "ل.ل.‏",
        "code": "LBP",
        "name_plural": "Lebanese pounds",
        "flag": "http://flags.fmcdn.net/data/flags/normal/lb.png" ,
        "color":"red"
},
    "LKR": {
    "symbol": "SLRs",
        "name": "Sri Lankan Rupee",
        "symbol_native": "SL Re",
        "code": "LKR",
        "name_plural": "Sri Lankan rupees",
        "flag": "http://flags.fmcdn.net/data/flags/normal/lk.png",
        "color":"yellow"
},
    "LTL": {
    "symbol": "Lt",
        "name": "Lithuanian Litas",
        "symbol_native": "Lt",
        "code": "LTL",
        "name_plural": "Lithuanian litai",
        "flag": "http://flags.fmcdn.net/data/flags/normal/lt.png",
        "color":"yellow"
},
    "LVL": {
    "symbol": "Ls",
        "name": "Latvian Lats",
        "symbol_native": "Ls",
        "code": "LVL",
        "name_plural": "Latvian lati",
        "flag": "http://flags.fmcdn.net/data/flags/normal/lv.png",
        "color":"red"
},
    "LYD": {
    "symbol": "LD",
        "name": "Libyan Dinar",
        "symbol_native": "د.ل.‏",
        "code": "LYD",
        "name_plural": "Libyan dinars",
        "flag": "http://flags.fmcdn.net/data/flags/normal/ly.png",
        "color":"red"
},
    "MAD": {
    "symbol": "MAD",
        "name": "Moroccan Dirham",
        "symbol_native": "د.م.‏",
        "code": "MAD",
        "name_plural": "Moroccan dirhams",
        "flag": "http://flags.fmcdn.net/data/flags/normal/ma.png",
        "color":"red"
},
    "MDL": {
    "symbol": "MDL",
        "name": "Moldovan Leu",
        "symbol_native": "MDL",
        "code": "MDL",
        "name_plural": "Moldovan lei",
        "flag": "http://flags.fmcdn.net/data/flags/normal/md.png",
        "color":"yellow"
},
    "MGA": {
    "symbol": "MGA",
        "name": "Malagasy Ariary",
        "symbol_native": "MGA",
        "code": "MGA",
        "name_plural": "Malagasy Ariaries",
        "flag": "http://flags.fmcdn.net/data/flags/normal/mg.png",
        "color":"red"
},
    "MKD": {
    "symbol": "MKD",
        "name": "Macedonian Denar",
        "symbol_native": "MKD",
        "code": "MKD",
        "name_plural": "Macedonian denari",
        "flag": "http://flags.fmcdn.net/data/flags/normal/mk.png",
        "color": "red"
},
    "MMK": {
    "symbol": "MMK",
        "name": "Myanma Kyat",
        "symbol_native": "K",
        "code": "MMK",
        "name_plural": "Myanma kyats",
        "flag": "http://flags.fmcdn.net/data/flags/normal/mm.png",
        "color":"yellow"
},
    "MOP": {
    "symbol": "MOP$",
        "name": "Macanese Pataca",
        "symbol_native": "MOP$",
        "code": "MOP",
        "name_plural": "Macanese patacas",
        "flag": "http://flags.fmcdn.net/data/flags/normal/cn.png",
        "color":"red"
},
    "MUR": {
    "symbol": "MURs",
        "name": "Mauritian Rupee",
        "symbol_native": "MURs",
        "code": "MUR",
        "name_plural": "Mauritian rupees",
        "flag": "http://flags.fmcdn.net/data/flags/normal/mu.png",
        "color":"red"
},
    "MXN": {
    "symbol": "MX$",
        "name": "Mexican Peso",
        "symbol_native": "$",
        "code": "MXN",
        "name_plural": "Mexican pesos",
        "flag": "http://flags.fmcdn.net/data/flags/normal/mx.png",
        "color": "green"
},
    "MYR": {
    "symbol": "RM",
        "name": "Malaysian Ringgit",
        "symbol_native": "RM",
        "code": "MYR",
        "name_plural": "Malaysian ringgits",
        "flag": "http://flags.fmcdn.net/data/flags/normal/my.png",
        "color":"red"
},
    "MZN": {
    "symbol": "MTn",
        "name": "Mozambican Metical",
        "symbol_native": "MTn",
        "code": "MZN",
        "name_plural": "Mozambican meticals",
        "flag": "http://flags.fmcdn.net/data/flags/normal/mz.png",
        "color":"yellow"
},
    "NAD": {
    "symbol": "N$",
        "name": "Namibian Dollar",
        "symbol_native": "N$",
        "code": "NAD",
        "name_plural": "Namibian dollars",
        "flag": "http://flags.fmcdn.net/data/flags/normal/na.png",
        "color":"red"
},
    "NGN": {
    "symbol": "₦",
        "name": "Nigerian Naira",
        "symbol_native": "₦",
        "code": "NGN",
        "name_plural": "Nigerian nairas",
        "flag": "http://flags.fmcdn.net/data/flags/normal/ng.png",
        "color":"green"
},
    "NIO": {
    "symbol": "C$",
        "name": "Nicaraguan Córdoba",
        "symbol_native": "C$",
        "code": "NIO",
        "name_plural": "Nicaraguan córdobas",
        "flag": "http://flags.fmcdn.net/data/flags/normal/ni.png",
        "color":"blue"
},
    "NOK": {
    "symbol": "Nkr",
        "name": "Norwegian Krone",
        "symbol_native": "kr",
        "code": "NOK",
        "name_plural": "Norwegian kroner",
        "flag": "http://flags.fmcdn.net/data/flags/normal/no.png",
        "color":"red"
},
    "NPR": {
    "symbol": "NPRs",
        "name": "Nepalese Rupee",
        "symbol_native": "नेरू",
        "code": "NPR",
        "name_plural": "Nepalese rupees",
        "flag": "http://flags.fmcdn.net/data/flags/normal/np.png",
        "color":"white"
},
    "NZD": {
    "symbol": "NZ$",
        "name": "New Zealand Dollar",
        "symbol_native": "$",
        "code": "NZD",
        "name_plural": "New Zealand dollars",
        "flag": "http://flags.fmcdn.net/data/flags/normal/nz.png",
        "color":"blue"
},
    "OMR": {
    "symbol": "OMR",
        "name": "Omani Rial",
        "symbol_native": "ر.ع.‏",
        "code": "OMR",
        "name_plural": "Omani rials",
        "flag": "http://flags.fmcdn.net/data/flags/normal/om.png",
        "color":"red"
},
    "PAB": {
    "symbol": "B/.",
        "name": "Panamanian Balboa",
        "symbol_native": "B/.",
        "code": "PAB",
        "name_plural": "Panamanian balboas",
        "flag": "http://flags.fmcdn.net/data/flags/normal/pa.png",
        "color":"white"
},
    "PEN": {
    "symbol": "S/.",
        "name": "Peruvian Nuevo Sol",
        "symbol_native": "S/.",
        "code": "PEN",
        "name_plural": "Peruvian nuevos soles",
        "flag": "http://flags.fmcdn.net/data/flags/normal/pe.png" ,
        "color":"red"
},
    "PHP": {
    "symbol": "₱",
        "name": "Philippine Peso",
        "symbol_native": "₱",
        "code": "PHP",
        "name_plural": "Philippine pesos",
        "flag": "http://flags.fmcdn.net/data/flags/normal/ph.png",
        "color":"blue"
},
    "PKR": {
    "symbol": "PKRs",
        "name": "Pakistani Rupee",
        "symbol_native": "₨",
        "code": "PKR",
        "name_plural": "Pakistani rupees",
        "flag": "http://flags.fmcdn.net/data/flags/normal/pk.png",
        "color":"green"
},
    "PLN": {
    "symbol": "zł",
        "name": "Polish Zloty",
        "symbol_native": "zł",
        "code": "PLN",
        "name_plural": "Polish zlotys",
        "flag": "http://flags.fmcdn.net/data/flags/normal/pl.png",
        "color":"red"
},
    "PYG": {
    "symbol": "₲",
        "name": "Paraguayan Guarani",
        "symbol_native": "₲",
        "code": "PYG",
        "name_plural": "Paraguayan guaranis",
        "flag": "http://flags.fmcdn.net/data/flags/normal/py.png",
        "color":"red"
},
    "QAR": {
    "symbol": "QR",
        "name": "Qatari Rial",
        "symbol_native": "ر.ق.‏",

        "code": "QAR",
        "name_plural": "Qatari rials",
        "flag": "http://flags.fmcdn.net/data/flags/normal/qa.png",
        "color":"red"
},
    "RON": {
    "symbol": "RON",
        "name": "Romanian Leu",
        "symbol_native": "RON",

        "code": "RON",
        "name_plural": "Romanian lei",
        "flag": "http://flags.fmcdn.net/data/flags/normal/ro.png",
        "color":"red"
},
    "RSD": {
    "symbol": "din.",
        "name": "Serbian Dinar",
        "symbol_native": "дин.",
        "code": "RSD",
        "name_plural": "Serbian dinars",
        "flag": "http://flags.fmcdn.net/data/flags/normal/rs.png",
        "color":"red"
},
    "RUB": {
    "symbol": "RUB",
        "name": "Russian Ruble",
        "symbol_native": "руб.",
        "code": "RUB",
        "name_plural": "Russian rubles",
        "flag": "http://flags.fmcdn.net/data/flags/normal/ru.png",
        "color":"blue"
},
    "RWF": {
    "symbol": "RWF",
        "name": "Rwandan Franc",
        "symbol_native": "FR",
        "code": "RWF",
        "name_plural": "Rwandan francs",
        "flag": "http://flags.fmcdn.net/data/flags/normal/rw.png",
        "color":"light-blue"
},
    "SAR": {
    "symbol": "SR",
        "name": "Saudi Riyal",
        "symbol_native": "ر.س.‏",
        "code": "SAR",
        "name_plural": "Saudi riyals",
        "flag": 'http://flags.fmcdn.net/data/flags/normal/za.png',
        "color":"blue"
},
    "SDG": {
    "symbol": "SDG",
        "name": "Sudanese Pound",
        "symbol_native": "SDG",
        "code": "SDG",
        "name_plural": "Sudanese pounds",
        "flag": "http://flags.fmcdn.net/data/flags/normal/sd.png",
        "color":"red"
},
    "SEK": {
    "symbol": "Skr",
        "name": "Swedish Krona",
        "symbol_native": "kr",
        "code": "SEK",
        "name_plural": "Swedish kronor",
        "flag": "http://flags.fmcdn.net/data/flags/normal/se.png",
        "color":"blue"
},
    "SGD": {
    "symbol": "S$",
        "name": "Singapore Dollar",
        "symbol_native": "$",
        "code": "SGD",
        "name_plural": "Singapore dollars",
        "flag":  "http://flags.fmcdn.net/data/flags/normal/sg.png",
        "color":"red"
},
    "SOS": {
    "symbol": "Ssh",
        "name": "Somali Shilling",
        "symbol_native": "Ssh",
        "code": "SOS",
        "name_plural": "Somali shillings",
        "flag": "http://flags.fmcdn.net/data/flags/normal/so.png",
        "color":"light-blue"
},
    "SYP": {
    "symbol": "SY£",
        "name": "Syrian Pound",
        "symbol_native": "ل.س.‏",
        "code": "SYP",
        "name_plural": "Syrian pounds",
        "flag": "http://flags.fmcdn.net/data/flags/normal/sy.png",
        "color":"red"
},
    "THB": {
    "symbol": "฿",
        "name": "Thai Baht",
        "symbol_native": "฿",
        "code": "THB",
        "name_plural": "Thai baht",
        "flag": "http://flags.fmcdn.net/data/flags/normal/th.png",
        "color":"red"
},
    "TND": {
    "symbol": "DT",
        "name": "Tunisian Dinar",
        "symbol_native": "د.ت.‏",
        "code": "TND",
        "name_plural": "Tunisian dinars",
        "flag": "http://flags.fmcdn.net/data/flags/normal/tn.png",
        "color":"red"
},
    "TOP": {
    "symbol": "T$",
        "name": "Tongan Paʻanga",
        "symbol_native": "T$",
        "code": "TOP",
        "name_plural": "Tongan paʻanga",
        "flag": "http://flags.fmcdn.net/data/flags/normal/to.png",
        "color":"red"
},
    "TRY": {
    "symbol": "TL",
        "name": "Turkish Lira",
        "symbol_native": "TL",
        "code": "TRY",
        "name_plural": "Turkish Lira",
        "flag": "http://flags.fmcdn.net/data/flags/normal/tr.png",
        "color":"red"
},
    "TTD": {
    "symbol": "TT$",
        "name": "Trinidad and Tobago Dollar",
        "symbol_native": "$",
        "code": "TTD",
        "name_plural": "Trinidad and Tobago dollars",
        "flag": "http://flags.fmcdn.net/data/flags/normal/tt.png",
        "color": "red"
},
    "TWD": {
    "symbol": "NT$",
        "name": "New Taiwan Dollar",
        "symbol_native": "NT$",
        "code": "TWD",
        "name_plural": "New Taiwan dollars",
        "flag": "http://flags.fmcdn.net/data/flags/normal/tw.png",
        "color":"red"
},
    "TZS": {
    "symbol": "TSh",
        "name": "Tanzanian Shilling",
        "symbol_native": "TSh",
        "code": "TZS",
        "name_plural": "Tanzanian shillings",
        "flag": "http://flags.fmcdn.net/data/flags/normal/tz.png",
        "color":"green"
},
    "UAH": {
    "symbol": "₴",
        "name": "Ukrainian Hryvnia",
        "symbol_native": "₴",
        "code": "UAH",
        "name_plural": "Ukrainian hryvnias",
        "flag": "http://flags.fmcdn.net/data/flags/normal/ua.png",
        "color":"blue"
},
    "UGX": {
    "symbol": "USh",
        "name": "Ugandan Shilling",
        "symbol_native": "USh",
        "code": "UGX",
        "name_plural": "Ugandan shillings",
        "flag": "http://flags.fmcdn.net/data/flags/normal/ug.png",
        "color":"yellow"
},
    "UYU": {
    "symbol": "$U",
        "name": "Uruguayan Peso",
        "symbol_native": "$",
        "code": "UYU",
        "name_plural": "Uruguayan pesos",
        "flag": "http://flags.fmcdn.net/data/flags/normal/uy.png",
        "color":"white"
},
    "UZS": {
    "symbol": "UZS",
        "name": "Uzbekistan Som",
        "symbol_native": "UZS",
        "code": "UZS",
        "name_plural": "Uzbekistan som",
        "flag": "http://flags.fmcdn.net/data/flags/normal/uz.png",
        "color":"light-blue"
},
    "VEF": {
    "symbol": "Bs.F.",
        "name": "Venezuelan Bolívar",
        "symbol_native": "Bs.F.",
        "code": "VEF",
        "name_plural": "Venezuelan bolívars",
        "flag": "http://flags.fmcdn.net/data/flags/normal/ve.png",
        "color":"yellow"
},
    "VND": {
    "symbol": "₫",
        "name": "Vietnamese Dong",
        "symbol_native": "₫",
        "code": "VND",
        "name_plural": "Vietnamese dong",
        "flag": 'http://flags.fmcdn.net/data/flags/normal/vn.png',
        "color":"red"
},
    "XAF": {
    "symbol": "FCFA",
        "name": "CFA Franc BEAC",
        "symbol_native": "FCFA",
        "code": "XAF",
        "name_plural": "CFA francs BEAC",
        "flag": "http://flags.fmcdn.net/data/flags/normal/gn.png",
        "color":"yellow"
},
    "XOF": {
    "symbol": "CFA",
        "name": "CFA Franc BCEAO",
        "symbol_native": "CFA",
        "code": "XOF",
        "name_plural": "CFA francs BCEAO",
        "flag": 'http://flags.fmcdn.net/data/flags/normal/gw.png',
        "color":"red"
},
    "YER": {
    "symbol": "YR",
        "name": "Yemeni Rial",
        "symbol_native": "ر.ي.‏",
        "code": "YER",
        "name_plural": "Yemeni rials",
        "flag": "http://flags.fmcdn.net/data/flags/normal/ye.png",
        "color":"red"
},
    "ZMK": {
    "symbol": "ZK",
        "name": "Zambian Kwacha",
        "symbol_native": "ZK",
        "code": "ZMK",
        "name_plural": "Zambian kwachas",
        "flag": "http://flags.fmcdn.net/data/flags/normal/zm.png",
        "color":"green"
}
}
]
