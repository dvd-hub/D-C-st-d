import { 
  Home, 
  Package, 
  Building2, 
  SprayCan, 
  HardHat, 
  Hotel, 
  Leaf, 
  Star, 
  CreditCard, 
  Clock, 
  Users, 
  ClipboardCheck,
  ShieldCheck,
  Smile
} from 'lucide-react';
import { Service, Review, Partner, Feature, FaqItem } from './types';

export const COMPANY_INFO = {
  name: "D&C Städ AB",
  phone: "0760211140",
  email: "info@dcstad.se",
  address: "Hjalmar Brantingsgatan 7A, 41706 Göteborg",
  hours: "Mån - Fre: 08:00 – 18:00",
  rutDeduction: 50,
  founded: "2019"
};

export const NAV_LINKS = [
  { name: "Hem", href: "#hero" },
  { name: "Tjänster", href: "#services" },
  { name: "Om Oss", href: "#about" },
  { name: "Kunder", href: "#reviews" },
  { name: "FAQ", href: "#faq" },
  { name: "Kontakt", href: "#contact" },
];

export const HERO_CONTENT = {
  headline: "Din tid är värdefull – vi tar hand om städningen",
  subHeadline: "Professionell städning i Göteborg med 100% nöjdhetsgaranti. Boka direkt och få mer tid för det du älskar."
};

export const SERVICES: Service[] = [
  {
    id: "hemstadning",
    title: "Hemstädning",
    shortDescription: "Regelbunden städning av ditt hem med erfarna städare. Flexibla tider och miljövänliga produkter.",
    longDescription: "Det ska vara enkelt att ha ett rent hem. Med vår hemstädning får du en personlig och trygg service där samma städare (i största möjliga mån) kommer till dig. Vi anpassar oss efter dina behov, oavsett om du vill ha städning varje vecka, varannan vecka eller månadsvis. Vi använder skonsamma och effektiva medel för att värna om både ditt hem och miljön.",
    features: [
      "Dammsugning av alla golv och mattor",
      "Våttorkning av golv",
      "Dammtorkning av fria ytor, lister och dörrar",
      "Rengöring av kök (diskbänk, spis, kakel)",
      "Rengöring av badrum (dusch, badkar, toalett, handfat)",
      "Tömning av papperskorgar"
    ],
    price: "Kontakta oss för offert",
    cta: "Boka hemstädning nu →",
    icon: Home
  },
  {
    id: "flyttstadning",
    title: "Flyttstädning",
    shortDescription: "Vi garanterar godkänd besiktning så att du kan lämna över nycklarna utan stress.",
    longDescription: "Att flytta är stressigt nog utan att behöva oroa sig för städningen. Vår flyttstädning är en totalrengöring av bostaden som följer Mäklarförbundets riktlinjer. Vi lämnar inget åt slumpen och erbjuder alltid garanti på vårt arbete – skulle besiktningen mot förmodan inte godkännas åtgärdar vi det kostnadsfritt.",
    features: [
      "Fönsterputsning (in- och utsida)",
      "Rengöring bakom/under vitvaror",
      "Rengöring av ugn, spis och fläkt",
      "Avtorkning av skåp och garderober (in- och utsida)",
      "Rengöring av golvbrunnar och ventiler",
      "Avtorkning av element, lister och dörrkarmar"
    ],
    price: "Kontakta oss för offert",
    cta: "Få offert på flyttstäd →",
    icon: Package
  },
  {
    id: "kontorsstadning",
    title: "Kontorsstädning",
    shortDescription: "Skapa en trivsam och produktiv arbetsmiljö för dina anställda med våra företagstjänster.",
    longDescription: "Ett rent kontor är avgörande för trivsel och produktivitet. Vi erbjuder skräddarsydda städlösningar för företag i Göteborg, från små kontor till stora komplex. Vi arbetar diskret och effektivt för att inte störa verksamheten, och vi ser till att kök, toaletter, mötesrum och arbetsytor alltid är representativa och fräscha.",
    features: [
      "Dammsugning och golvvård",
      "Tömning av papperskorgar och återvinning",
      "Rengöring av pentry och kaffestationer",
      "Hygienisk rengöring av toaletter",
      "Avtorkning av skrivbord och fria ytor",
      "Påfyllning av förbrukningsmaterial (tillval)"
    ],
    price: "Kontakta oss för offert",
    cta: "Kontakta oss för företagsoffert →",
    icon: Building2
  },
  {
    id: "fonsterputs",
    title: "Fönsterputs",
    shortDescription: "Skinande rena fönster för bättre ljusinsläpp. Vi tar hand om alla typer av glas.",
    longDescription: "Rena fönster gör en enorm skillnad för ljusinsläppet och känslan i ett rum. Våra professionella fönsterputsare har rätt utrustning och teknik för att göra dina fönster kristallklara, helt utan ränder. Vi putsar fönster i lägenheter, villor och på kontor, inklusive spröjsade fönster och inglasade balkonger.",
    features: [
      "Putsning av glas (in- och utsida)",
      "Rengöring mellan glasen (vid behov)",
      "Avtorkning av fönsterbleck",
      "Avtorkning av fönsterkarmar",
      "Borttagning av stänk och smuts",
      "Stege och material ingår"
    ],
    price: "Kontakta oss för offert",
    cta: "Boka fönsterputs →",
    icon: SprayCan
  },
  {
    id: "byggstadning",
    title: "Byggstädning",
    shortDescription: "Grovstädning och finstädning efter renovering eller nybyggnation. Vi tar bort byggdammet.",
    longDescription: "Efter en renovering eller ett nybygge finns det ofta fint byggdamm överallt som är svårt att få bort. Vår byggstädning är en grov- och finstädning som gör ytorna redo för inflyttning eller målning. Vi har kapacitet att hantera allt från mindre badrumsrenoveringar till hela fastighetsprojekt.",
    features: [
      "Borttagning av byggdamm från alla ytor",
      "Borttagning av tejp- och färgrester",
      "Dammsugning av väggar och tak",
      "Rengöring av fönster och lister",
      "Grovrengöring av golv",
      "Avtorkning av fast inredning"
    ],
    price: "Kontakta oss för offert",
    cta: "Be om offert för byggstäd →",
    icon: HardHat
  },
  {
    id: "trappstadning",
    title: "Trappstädning",
    shortDescription: "Välkomnande och rena trapphus för bostadsrättsföreningar och fastighetsägare.",
    longDescription: "Trapphuset är det första intrycket boende och besökare får. En regelbunden trappstädning minskar slitaget på fastigheten och ökar trivseln. Vi erbjuder flexibla avtal för BRF:er och fastighetsägare där vi även kan inkludera städning av tvättstuga, källargångar och hiss.",
    features: [
      "Sopning och våttorkning av trappor",
      "Rengöring av entrémattor",
      "Avtorkning av ledstänger och fönsterbrädor",
      "Putsning av entréglas",
      "Hissrengöring (golv, spegel, knappar)",
      "Rapportering av trasiga lampor/skador"
    ],
    price: "Kontakta oss för offert",
    cta: "Få förslag till er förening →",
    icon: Hotel
  }
];

export const ABOUT_CONTENT = {
  headline: "Mer än bara en städfirma",
  text: [
    "D&C Städ AB grundades med en enkel vision: att leverera städtjänster av högsta kvalitet med en personlig touch. Vi förstår att det handlar om förtroende att släppa in någon i sitt hem eller på sin arbetsplats. Därför har vi byggt vår verksamhet på noggrannhet, pålitlighet och en nära dialog med våra kunder.",
    "Med bas i Göteborg har vi under åren hjälpt hundratals privatpersoner och företag att få en renare och enklare vardag. Vår personal är vår viktigaste resurs – alla är kollektivavtalsanslutna, försäkrade och internt utbildade i våra kvalitetsstandarder.",
    "Vi strävar ständigt efter att minimera vår miljöpåverkan genom att använda miljömärkta produkter och optimera våra körsträckor. När du väljer D&C Städ väljer du en partner som bryr sig om både detaljerna och helheten."
  ],
  values: [
    { id: "quality", title: "Kvalitet", description: "Varje städning kvalitetssäkras och vi har 100% nöjdhetsgaranti.", icon: Star },
    { id: "service", title: "Service", description: "Personlig kontaktperson och snabba svar vid frågor.", icon: Smile }
  ]
};

export const FEATURES: Feature[] = [
  { id: "eco", title: "Miljövänliga produkter", icon: Leaf },
  { id: "guarantee", title: "100% Nöjdhetsgaranti", icon: Star },
  { id: "rut", title: "RUT-avdrag direkt", icon: CreditCard },
  { id: "flex", title: "Flexibla tider", icon: Clock },
  { id: "staff", title: "Fast personal", icon: Users },
  { id: "custom", title: "Skräddarsydda lösningar", icon: ClipboardCheck },
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Liz Barne",
    date: "2025-02-15",
    rating: 5,
    text: "Grymt nöjd med allt! Från första samtalet, flexibiliteten och tydligheten till mötet med de trevliga och mycket proffsiga personer som städade mors lägenhet till perfektion. Kan varmt rekommendera D&C Städ alla dar i veckan.",
    service: "Hemstädning"
  },
  {
    id: 2,
    author: "Elisabeth Norell",
    date: "2024-09-05",
    rating: 5,
    text: "Utmärkt jobb och till ett bra pris! Mycket sympatiska och tillmötesgående och gjorde ofta det lilla extra.",
    service: "Hemstädning"
  },
  {
    id: 3,
    author: "RSharihara Prabu",
    date: "2024-05-20",
    rating: 5,
    text: "Very friendly and supported me in urgent situation. I called just before a day and you accepted. Thank you so much for your support. I would definitely recommend you to my colleagues.",
    service: "Akutstädning"
  },
  {
    id: 4,
    author: "Lennart Möllgård",
    date: "2024-03-19",
    rating: 5,
    text: "Stor flyttstädning, nästan sanering, som de positiva anställda löste på ett fint sätt. Rekommenderas.",
    service: "Flyttstädning"
  },
  {
    id: 5,
    author: "Johanna Hoff",
    date: "2023-05-30",
    rating: 5,
    text: "Supernöjd med städningen. Hemstäd en gång i månaden, alltid på plats i tid och lämnar ett fint hem efter sig. Tack för er service och fina personal!",
    service: "Hemstädning"
  },
  {
    id: 6,
    author: "Johan Eltes",
    date: "2022-08-27",
    rating: 5,
    text: "Bästa tänkbara städfirma! Bra kommunikation, familjär känsla, underbar personal och alltid spotless. Och detta till ett mycket konkurrensmässigt pris.",
    service: "Hemstädning"
  },
  {
    id: 7,
    author: "Akhil Neelakanta",
    date: "2021-10-29",
    rating: 5,
    text: "Very efficient. They came prepared and were very helpful and professional.",
    service: "Kontorsstädning"
  },
  {
    id: 8,
    author: "Helén Sandström",
    date: "2020-03-19",
    rating: 5,
    text: "D&C gjorde en flyttstädning i toppklass. Vi är så nöjda. Kan verkligen rekommendera detta företag!",
    service: "Flyttstädning"
  }
];

export const PARTNERS: Partner[] = [
  { 
    id: 1, 
    name: "Embedl", 
    url: "https://www.embedl.com/",
    logoUrl: "https://placehold.co/200x80/black/white?text=embedl" 
  },
  { 
    id: 2, 
    name: "Slangflex", 
    url: "https://www.slangflex.se/",
    logoUrl: "https://placehold.co/200x80/white/red?text=SLANGFLEX" 
  },
  { 
    id: 3, 
    name: "Solarwork", 
    url: "https://www.solarwork.se/",
    logoUrl: "https://placehold.co/200x80/white/black?text=Solarwork" 
  },
  { 
    id: 4, 
    name: "Wilundia", 
    url: "https://wilundia.se/",
    logoUrl: "https://placehold.co/200x80/white/black?text=Wilundia" 
  },
  { 
    id: 5, 
    name: "Mexikanska Monarkin", 
    url: "https://www.mexikanskamonarkin.se/",
    logoUrl: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='80' viewBox='0 0 200 80'%3E%3Crect width='200' height='80' fill='white'/%3E%3Ctext x='50%25' y='35' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='22' font-weight='bold' fill='black'%3EMexikanska%3C/text%3E%3Ctext x='50%25' y='65' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='22' font-weight='bold' fill='black'%3EMonarkin%3C/text%3E%3C/svg%3E" 
  },
  { 
    id: 6, 
    name: "Valhalla Ink", 
    url: "https://www.valhallaink.se/",
    logoUrl: "https://placehold.co/200x80/black/white?text=Valhalla+Ink" 
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Hur fungerar RUT-avdraget?",
    answer: "RUT-avdraget ger dig som privatperson 50% rabatt på arbetskostnaden för hushållsnära tjänster, inklusive städning. Vi drar av beloppet direkt på din faktura och hanterar all administration med Skatteverket. Du behöver bara se till att du har utrymme kvar för avdraget."
  },
  {
    question: "Tar ni med eget städmaterial?",
    answer: "För vanlig hemstädning använder vi de produkter du redan har hemma. Vi gör detta av omsorg för din hemmiljö – vi vill respektera dina doftpreferenser och undvika allergiska reaktioner från nya medel. Genom att använda de produkter du redan känner till vet du exakt vad som används i ditt hem och kan känna dig 100% trygg med resultatet. (Vid flyttstädning och kontorsstädning tar vi självklart med vårt eget professionella material)."
  },
  {
    question: "Vad händer om jag inte är nöjd?",
    answer: "Vi har en 100% nöjdhetsgaranti. Om du mot förmodan inte skulle vara nöjd med resultatet, kontakta oss inom 24 timmar så kommer vi tillbaka och åtgärdar bristerna kostnadsfritt."
  },
  {
    question: "Har ni försäkring?",
    answer: "Ja, D&C Städ AB har full ansvarsförsäkring. Det innebär att om något skulle råka gå sönder under städningen så täcker vår försäkring skadan. Din trygghet är viktig för oss."
  },
  {
    question: "Är det samma personal som kommer varje gång?",
    answer: "För abonnemangskunder (t.ex. hemstädning varje vecka) strävar vi alltid efter att det ska vara samma person eller team som kommer till dig. Detta för att du ska känna dig trygg och för att städaren ska lära känna ditt hem."
  },
  {
    question: "Hur bokar och betalar jag?",
    answer: "Du kan boka via vårt formulär här på hemsidan, mail eller telefon. Efter utfört arbete skickar vi en faktura (vanligtvis via e-post) med 30 dagars betalningstid. RUT-avdraget är då redan gjort på fakturan."
  },
  {
    question: "Städar ni helger och röda dagar?",
    answer: "Våra ordinarie arbetstider är vardagar 08-18. Vi kan utföra uppdrag på helger och röda dagar vid särskild överenskommelse, men då kan extra avgift tillkomma."
  },
  {
    question: "Vilka områden arbetar ni i?",
    answer: "Vi utgår från Hjalmar Brantingsgatan och arbetar främst i centrala Göteborg, Hisingen, Majorna, Linné, Örgryte och västra Göteborg. Kontakta oss om du bor i en kranskommun så ser vi om vi kan hjälpa dig!"
  }
];