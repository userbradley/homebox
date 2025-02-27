export type Codes =
 | "AED"
 | "AFN"
 | "ALL"
 | "AMD"
 | "ANG"
 | "AOA"
 | "ARS"
 | "AUD"
 | "AWG"
 | "AZN"
 | "BAM"
 | "BBD"
 | "BDT"
 | "BGN"
 | "BHD"
 | "BIF"
 | "BMD"
 | "BND"
 | "BOB"
 | "BRL"
 | "BSD"
 | "BTN"
 | "BWP"
 | "BYN"
 | "BZD"
 | "CAD"
 | "CDF"
 | "CHF"
 | "CLP"
 | "CNY"
 | "COP"
 | "CRC"
 | "CUP"
 | "CVE"
 | "CZK"
 | "DJF"
 | "DKK"
 | "DOP"
 | "DZD"
 | "EGP"
 | "ERN"
 | "ETB"
 | "EUR"
 | "FJD"
 | "FKP"
 | "FOK"
 | "GBP"
 | "GEL"
 | "GGP"
 | "GHS"
 | "GIP"
 | "GMD"
 | "GNF"
 | "GTQ"
 | "GYD"
 | "HKD"
 | "HNL"
 | "HRK"
 | "HTG"
 | "HUF"
 | "IDR"
 | "ILS"
 | "IMP"
 | "INR"
 | "IQD"
 | "IRR"
 | "ISK"
 | "JEP"
 | "JMD"
 | "JOD"
 | "JPY"
 | "KES"
 | "KGS"
 | "KHR"
 | "KID"
 | "KMF"
 | "KRW"
 | "KWD"
 | "KYD"
 | "KZT"
 | "LAK"
 | "LBP"
 | "LKR"
 | "LRD"
 | "LSL"
 | "LYD"
 | "MAD"
 | "MDL"
 | "MGA"
 | "MKD"
 | "MMK"
 | "MNT"
 | "MOP"
 | "MRU"
 | "MUR"
 | "MVR"
 | "MWK"
 | "MXN"
 | "MYR"
 | "MZN"
 | "NAD"
 | "NGN"
 | "NIO"
 | "UAH" ;

export type Currency = {
  code: Codes;
  local: string;
  symbol: string;
  name: string;
};

export const currencies: Currency[] = [
  { code: "AED", local: "United Arab Emirates", symbol: "د.إ", name: "United Arab Emirates Dirham" },
  { code: "AFN", local: "Afghanistan", symbol: "؋", name: "Afghan Afghani" },
  { code: "ALL", local: "Albania", symbol: "L", name: "Albanian Lek" },
  { code: "AMD", local: "Armenia", symbol: "֏", name: "Armenian Dram" },
  { code: "ANG", local: "Netherlands Antilles", symbol: "ƒ", name: "Netherlands Antillean Guilder" },
  { code: "AOA", local: "Angola", symbol: "Kz", name: "Angolan Kwanza" },
  { code: "ARS", local: "Argentina", symbol: "$", name: "Argentine Peso" },
  { code: "AUD", local: "Australia", symbol: "A$", name: "Australian Dollar" },
  { code: "AWG", local: "Aruba", symbol: "ƒ", name: "Aruban Florin" },
  { code: "AZN", local: "Azerbaijan", symbol: "₼", name: "Azerbaijani Manat" },
  { code: "BAM", local: "Bosnia and Herzegovina", symbol: "KM", name: "Bosnia and Herzegovina Convertible Mark" },
  { code: "BBD", local: "Barbados", symbol: "Bds$", name: "Barbadian Dollar" },
  { code: "BDT", local: "Bangladesh", symbol: "৳", name: "Bangladeshi Taka" },
  { code: "BGN", local: "Bulgaria", symbol: "лв", name: "Bulgarian lev" },
  { code: "BHD", local: "Bahrain", symbol: "ب.د", name: "Bahraini Dinar" },
  { code: "BIF", local: "Burundi", symbol: "FBu", name: "Burundian Franc" },
  { code: "BMD", local: "Bermuda", symbol: "BD$", name: "Bermudian Dollar" },
  { code: "BND", local: "Brunei", symbol: "B$", name: "Brunei Dollar" },
  { code: "BOB", local: "Bolivia", symbol: "Bs.", name: "Bolivian Boliviano" },
  { code: "BRL", local: "Brazil", symbol: "R$", name: "Brazilian Real" },
  { code: "BSD", local: "Bahamas", symbol: "B$", name: "Bahamian Dollar" },
  { code: "BTN", local: "Bhutan", symbol: "Nu.", name: "Bhutanese Ngultrum" },
  { code: "BWP", local: "Botswana", symbol: "P", name: "Botswana Pula" },
  { code: "BYN", local: "Belarus", symbol: "Br", name: "Belarusian Ruble" },
  { code: "BZD", local: "Belize", symbol: "BZ$", name: "Belize Dollar" },
  { code: "CAD", local: "Canada", symbol: "C$", name: "Canadian Dollar" },
  { code: "CDF", local: "Democratic Republic of the Congo", symbol: "FC", name: "Congolese Franc" },
  { code: "CHF", local: "Switzerland", symbol: "CHF", name: "Swiss Franc" },
  { code: "CLP", local: "Chile", symbol: "CL$", name: "Chilean Peso" },
  { code: "CNY", local: "China", symbol: "¥", name: "Chinese Yuan" },
  { code: "COP", local: "Colombia", symbol: "COL$", name: "Colombian Peso" },
  { code: "CRC", local: "Costa Rica", symbol: "₡", name: "Costa Rican Colón" },
  { code: "CUP", local: "Cuba", symbol: "₱", name: "Cuban Peso" },
  { code: "CVE", local: "Cape Verde", symbol: "$", name: "Cape Verdean Escudo" },
  { code: "CZK", local: "Czech Republic", symbol: "Kč", name: "Czech Koruna" },
  { code: "DJF", local: "Djibouti", symbol: "Fdj", name: "Djiboutian Franc" },
  { code: "DKK", local: "Denmark", symbol: "kr", name: "Danish Krone" },
  { code: "DOP", local: "Dominican Republic", symbol: "RD$", name: "Dominican Peso" },
  { code: "DZD", local: "Algeria", symbol: "د.ج", name: "Algerian Dinar" },
  { code: "EGP", local: "Egypt", symbol: "£", name: "Egyptian Pound" },
  { code: "ERN", local: "Eritrea", symbol: "Nfk", name: "Eritrean Nakfa" },
  { code: "ETB", local: "Ethiopia", symbol: "Br", name: "Ethiopian Birr" },
  { code: "EUR", local: "Eurozone", symbol: "€", name: "Euro" },
  { code: "FJD", local: "Fiji", symbol: "FJ$", name: "Fijian Dollar" },
  { code: "FKP", local: "Falkland Islands", symbol: "£", name: "Falkland Islands Pound" },
  { code: "FOK", local: "Faroe Islands", symbol: "kr", name: "Faroese Króna" },
  { code: "GBP", local: "United Kingdom", symbol: "£", name: "British Pound Sterling" },
  { code: "GEL", local: "Georgia", symbol: "₾", name: "Georgian Lari" },
  { code: "GGP", local: "Guernsey", symbol: "£", name: "Guernsey Pound" },
  { code: "GHS", local: "Ghana", symbol: "GH₵", name: "Ghanaian Cedi" },
  { code: "GIP", local: "Gibraltar", symbol: "£", name: "Gibraltar Pound" },
  { code: "GMD", local: "Gambia", symbol: "D", name: "Gambian Dalasi" },
  { code: "GNF", local: "Guinea", symbol: "FG", name: "Guinean Franc" },
  { code: "GTQ", local: "Guatemala", symbol: "Q", name: "Guatemalan Quetzal" },
  { code: "GYD", local: "Guyana", symbol: "GY$", name: "Guyanese Dollar" },
  { code: "HKD", local: "Hong Kong", symbol: "HK$", name: "Hong Kong Dollar" },
  { code: "HNL", local: "Honduras", symbol: "L", name: "Honduran Lempira" },
  { code: "HRK", local: "Croatia", symbol: "kn", name: "Croatian Kuna" },
  { code: "HTG", local: "Haiti", symbol: "G", name: "Haitian Gourde" },
  { code: "HUF", local: "Hungary", symbol: "Ft", name: "Hungarian Forint" },
  { code: "IDR", local: "Indonesia", symbol: "Rp", name: "Indonesian Rupiah" },
  { code: "ILS", local: "Israel", symbol: "₪", name: "Israeli New Shekel" },
  { code: "IMP", local: "Isle of Man", symbol: "£", name: "Manx Pound" },
  { code: "INR", local: "India", symbol: "₹", name: "Indian Rupee" },
  { code: "IQD", local: "Iraq", symbol: "ع.د", name: "Iraqi Dinar" },
  { code: "IRR", local: "Iran", symbol: "﷼", name: "Iranian Rial" },
  { code: "ISK", local: "Iceland", symbol: "kr", name: "Icelandic Króna" },
  { code: "JEP", local: "Jersey", symbol: "£", name: "Jersey Pound" },
  { code: "JMD", local: "Jamaica", symbol: "J$", name: "Jamaican Dollar" },
  { code: "JOD", local: "Jordan", symbol: "د.ا", name: "Jordanian Dinar" },
  { code: "JPY", local: "Japan", symbol: "¥", name: "Japanese Yen" },
  { code: "KES", local: "Kenya", symbol: "KSh", name: "Kenyan Shilling" },
  { code: "KGS", local: "Kyrgyzstan", symbol: "с", name: "Kyrgyzstani Som" },
  { code: "KHR", local: "Cambodia", symbol: "៛", name: "Cambodian Riel" },
  { code: "KID", local: "Kiribati", symbol: "$", name: "Kiribati Dollar" },
  { code: "KMF", local: "Comoros", symbol: "CF", name: "Comorian Franc" },
  { code: "KRW", local: "South Korea", symbol: "₩", name: "South Korean Won" },
  { code: "KWD", local: "Kuwait", symbol: "د.ك", name: "Kuwaiti Dinar" },
  { code: "KYD", local: "Cayman Islands", symbol: "CI$", name: "Cayman Islands Dollar" },
  { code: "KZT", local: "Kazakhstan", symbol: "₸", name: "Kazakhstani Tenge" },
  { code: "LAK", local: "Laos", symbol: "₭", name: "Lao Kip" },
  { code: "LBP", local: "Lebanon", symbol: "ل.ل", name: "Lebanese Pound" },
  { code: "LKR", local: "Sri Lanka", symbol: "₨", name: "Sri Lankan Rupee" },
  { code: "LRD", local: "Liberia", symbol: "L$", name: "Liberian Dollar" },
  { code: "LSL", local: "Lesotho", symbol: "M", name: "Lesotho Loti" },
  { code: "LYD", local: "Libya", symbol: "ل.د", name: "Libyan Dinar" },
  { code: "MAD", local: "Morocco", symbol: "د.م.", name: "Moroccan Dirham" },
  { code: "MDL", local: "Moldova", symbol: "lei", name: "Moldovan Leu" },
  { code: "MGA", local: "Madagascar", symbol: "Ar", name: "Malagasy Ariary" },
  { code: "MKD", local: "North Macedonia", symbol: "ден", name: "Macedonian Denar" },
  { code: "MMK", local: "Myanmar", symbol: "K", name: "Myanmar Kyat" },
  { code: "MNT", local: "Mongolia", symbol: "₮", name: "Mongolian Tugrik" },
  { code: "MOP", local: "Macau", symbol: "MOP$", name: "Macanese Pataca" },
  { code: "MRU", local: "Mauritania", symbol: "UM", name: "Mauritanian Ouguiya" },
  { code: "MUR", local: "Mauritius", symbol: "₨", name: "Mauritian Rupee" },
  { code: "MVR", local: "Maldives", symbol: "Rf", name: "Maldivian Rufiyaa" },
  { code: "MWK", local: "Malawi", symbol: "MK", name: "Malawian Kwacha" },
  { code: "MXN", local: "Mexico", symbol: "Mex$", name: "Mexican Peso" },
  { code: "MYR", local: "Malaysia", symbol: "RM", name: "Malaysian Ringgit" },
  { code: "MZN", local: "Mozambique", symbol: "MT", name: "Mozambican Metical" },
  { code: "NAD", local: "Namibia", symbol: "N$", name: "Namibian Dollar" },
  { code: "NGN", local: "Nigeria", symbol: "₦", name: "Nigerian Naira" },
  { code: "NIO", local: "Nicaragua", symbol: "C$", name: "Nicaraguan Córdoba" },
  { code: "UAH", local: "Ukraine", symbol: "₴", name: "Ukrainian Hryvnia" },
];
