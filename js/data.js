/* ============================================================
   Tokyo Muslim Guide — Data
   NOTE: Always verify hours & halal status before visiting.
   ============================================================ */

const MOSQUES = [
  {
    name: "Tokyo Camii & Diyanet Turkish Culture Center",
    nameJp: "東京ジャーミイ",
    area: "Shibuya (Yoyogi-Uehara)",
    station: "Yoyogi-Uehara Sta. (Odakyu / Chiyoda Line) · 5 min walk",
    address: "1-19 Oyamacho, Shibuya-ku, Tokyo 151-0065",
    capacity: "≈ 2,000 worshippers",
    jumuah: "Friday prayer ~13:00 (arrive early; sermon in Turkish, Arabic, Japanese & English)",
    facilities: ["Wudu area", "Women's prayer hall", "Halal shop", "Library", "Tours welcome"],
    description: "The largest mosque in Japan and Tokyo's landmark of Islamic architecture. Stunning Ottoman-style design with intricate tilework. Non-Muslim visitors are welcome outside prayer times (modest dress required).",
    website: "https://tokyocamii.org",
    maps: "https://www.google.com/maps/search/?api=1&query=Tokyo+Camii",
    tags: ["iconic", "tourist-friendly", "english"]
  },
  {
    name: "Arabic Islamic Institute (Hiroo Mosque)",
    nameJp: "アラブイスラム学院",
    area: "Minato (Hiroo)",
    station: "Hiroo Sta. (Hibiya Line) · 7 min walk",
    address: "3-4-18 Motoazabu, Minato-ku, Tokyo 106-0046",
    capacity: "≈ 400 worshippers",
    jumuah: "Friday prayer ~12:20 (sermon in Arabic with Japanese summary)",
    facilities: ["Wudu area", "Women's section", "Arabic library", "Lectures"],
    description: "Established by Saudi Arabia in 1982, this mosque in the quiet Hiroo neighborhood is known for its beautiful white minaret and welcoming community.",
    website: "https://www.aii-t.org",
    maps: "https://www.google.com/maps/search/?api=1&query=Arabic+Islamic+Institute+Tokyo",
    tags: ["central", "quiet"]
  },
  {
    name: "Masjid As-Salaam (Ueno Okachimachi Mosque)",
    nameJp: "浅草・上野エリア",
    area: "Taito (Ueno/Okachimachi)",
    station: "Naka-Okachimachi Sta. (Hibiya Line) · 1 min walk",
    address: "4-6-7 Taito, Taito-ku, Tokyo 110-0016",
    capacity: "≈ 300 worshippers",
    jumuah: "Multiple Friday sessions (check notice board); sermon in English/Japanese/Bengali",
    facilities: ["Wudu area", "Women's prayer room", "Halal shops nearby", "Islamic bookstore"],
    description: "A very convenient mosque near Ueno and Asakusa — perfect for tourists exploring the old town. The surrounding Okachimachi area is Tokyo's famous 'halal street' with many Muslim-owned shops.",
    website: "",
    maps: "https://www.google.com/maps/search/?api=1&query=As-Salaam+Mosque+Ueno+Tokyo",
    tags: ["tourist-friendly", "english", "near-asakusa"]
  },
  {
    name: "Masjid Ikebukuro (Toshima)",
    nameJp: "池袋マスジド",
    area: "Toshima (Ikebukuro)",
    station: "Ikebukuro Sta. (JR / Metro) · 10 min walk",
    address: "2-41-2 Ikebukuro, Toshima-ku, Tokyo 171-0014",
    capacity: "≈ 200 worshippers",
    jumuah: "Friday prayer ~12:30 & 13:30 (two sessions)",
    facilities: ["Wudu area", "Women's section", "Quran classes"],
    description: "Community mosque serving the diverse Ikebukuro district. Close to many halal grocery stores and restaurants around Ikebukuro's west side.",
    website: "",
    maps: "https://www.google.com/maps/search/?api=1&query=Masjid+Ikebukuro+Tokyo",
    tags: ["community"]
  },
  {
    name: "Masjid Otsuka (Otsuka Mosque)",
    nameJp: "大塚マスジド",
    area: "Toshima (Otsuka)",
    station: "Otsuka Sta. (JR Yamanote Line) · 3 min walk",
    address: "3-42-7 Minami-Otsuka, Toshima-ku, Tokyo 170-0005",
    capacity: "≈ 250 worshippers",
    jumuah: "Friday prayer ~12:30 (sermon in Japanese & English)",
    facilities: ["Wudu area", "Women's prayer room", "Weekend school"],
    description: "One of Tokyo's most active community mosques, run by the Islamic Circle of Japan. Known for Japanese-language dawah programs and a warm, international congregation.",
    website: "https://www.icoj.org",
    maps: "https://www.google.com/maps/search/?api=1&query=Otsuka+Mosque+Tokyo",
    tags: ["community", "english", "japanese"]
  },
  {
    name: "Shin-Okubo Mosque (Islamic Center)",
    nameJp: "新大久保モスク",
    area: "Shinjuku (Shin-Okubo)",
    station: "Shin-Okubo Sta. (JR Yamanote Line) · 5 min walk",
    address: "1-11 Hyakunincho, Shinjuku-ku, Tokyo 169-0073",
    capacity: "≈ 150 worshippers",
    jumuah: "Friday prayer ~13:00",
    facilities: ["Wudu area", "Women's section", "Halal market nearby"],
    description: "Located in Tokyo's Koreatown, surrounded by a growing number of halal restaurants, Indonesian and South Asian grocery stores.",
    website: "",
    maps: "https://www.google.com/maps/search/?api=1&query=Shin-Okubo+Mosque+Tokyo",
    tags: ["community", "near-food"]
  },
  {
    name: "Masjid Al-Tawheed (Hachioji)",
    nameJp: "八王子マスジド",
    area: "Hachioji (West Tokyo)",
    station: "Hachioji Sta. (JR Chuo Line) · 12 min walk",
    address: "Hachioji-shi, Tokyo (see map)",
    capacity: "≈ 150 worshippers",
    jumuah: "Friday prayer ~13:00",
    facilities: ["Wudu area", "Women's section", "Parking"],
    description: "Serving the Muslim community of western Tokyo and the many university students in the Hachioji area.",
    website: "",
    maps: "https://www.google.com/maps/search/?api=1&query=Masjid+Al-Tawheed+Hachioji",
    tags: ["suburb", "students"]
  },
  {
    name: "Makki Masjid (Yoyogi)",
    nameJp: "マッキーマスジド",
    area: "Shibuya (Yoyogi)",
    station: "Yoyogi Sta. (JR / Toei Oedo Line) · 8 min walk",
    address: "5-1-3 Yoyogi, Shibuya-ku, Tokyo 151-0053",
    capacity: "≈ 120 worshippers",
    jumuah: "Friday prayer ~13:00",
    facilities: ["Wudu area", "Women's section"],
    description: "A small but welcoming mosque near Shinjuku Gyoen park — convenient if you're visiting Shinjuku or Harajuku.",
    website: "",
    maps: "https://www.google.com/maps/search/?api=1&query=Makki+Masjid+Yoyogi+Tokyo",
    tags: ["central", "near-shinjuku"]
  }
];

const PRAYER_SPACES = [
  {
    name: "Haneda Airport Prayer Rooms",
    location: "Terminals 1, 2 & 3 (International)",
    notes: "Free prayer rooms with wudu facilities and qibla markers. Terminal 3 room is open 24h.",
    icon: "plane"
  },
  {
    name: "Narita Airport Prayer Rooms",
    location: "Terminals 1 & 2 (airside & landside)",
    notes: "Clean, quiet rooms with ablution space. Ask at information counters for directions.",
    icon: "plane"
  },
  {
    name: "Tokyo Station Area — Marunouchi",
    location: "Marunouchi Building / KITTE (seasonal)",
    notes: "Some department stores offer multi-faith quiet rooms. Availability changes — ask concierge.",
    icon: "building"
  },
  {
    name: "Asakusa Culture Tourist Information Center",
    location: "Asakusa, Taito-ku",
    notes: "A prayer space has been offered on the upper floors; confirm at the front desk. Combine with a visit to Senso-ji and nearby halal eateries.",
    icon: "landmark"
  },
  {
    name: "Shibuya / Harajuku — Mobile Prayer Mats",
    location: "Carry a travel prayer mat",
    notes: "Dedicated rooms are rare in shopping districts. Many Muslims use quiet corners of large parks (Yoyogi Park) with a travel mat and a qibla app.",
    icon: "compass"
  }
];

const RESTAURANTS = [
  {
    name: "Gyumon",
    area: "Shibuya",
    cuisine: "Yakiniku (Japanese BBQ)",
    price: "¥¥",
    halal: "Halal-certified",
    station: "Shibuya Sta. · 8 min walk",
    description: "Famous halal yakiniku restaurant where you grill premium wagyu beef at your table. A must-try Japanese BBQ experience. Reservations recommended.",
    maps: "https://www.google.com/maps/search/?api=1&query=Gyumon+Shibuya+halal",
    tags: ["wagyu", "japanese", "certified"]
  },
  {
    name: "Halal Wagyu Yakiniku PANGA",
    area: "Taito (Okachimachi)",
    cuisine: "Yakiniku (Wagyu BBQ)",
    price: "¥¥¥",
    halal: "Halal-certified",
    station: "Naka-Okachimachi Sta. · 3 min walk",
    description: "Premium halal-certified wagyu yakiniku near Ueno. Their A5 wagyu platters are legendary among Muslim visitors.",
    maps: "https://www.google.com/maps/search/?api=1&query=PANGA+halal+wagyu+Okachimachi",
    tags: ["wagyu", "japanese", "certified", "premium"]
  },
  {
    name: "Naritaya Halal Ramen",
    area: "Asakusa",
    cuisine: "Ramen",
    price: "¥",
    halal: "Halal-certified",
    station: "Asakusa Sta. · 5 min walk",
    description: "Rich chicken-broth halal ramen in the heart of Asakusa. Perfect after visiting Senso-ji temple. Also has a small prayer space upstairs.",
    maps: "https://www.google.com/maps/search/?api=1&query=Naritaya+halal+ramen+Asakusa",
    tags: ["ramen", "japanese", "certified", "prayer-space"]
  },
  {
    name: "Ayam-YA Halal Ramen",
    area: "Okachimachi & Shinjuku",
    cuisine: "Ramen",
    price: "¥",
    halal: "Halal-certified",
    station: "Naka-Okachimachi Sta. · 2 min walk",
    description: "Kyoto-born halal ramen chain famous for its creamy chicken paitan (white broth) ramen. Multiple branches across Tokyo.",
    maps: "https://www.google.com/maps/search/?api=1&query=Ayam-YA+halal+ramen+Tokyo",
    tags: ["ramen", "japanese", "certified", "chain"]
  },
  {
    name: "Shinjuku Gyoen Ramen Ouka",
    area: "Shinjuku",
    cuisine: "Ramen",
    price: "¥",
    halal: "Halal-certified",
    station: "Shinjuku-gyoemmae Sta. · 3 min walk",
    description: "Halal ramen sets with grilled wagyu sushi on the side. English-speaking staff; prayer space available in the restaurant.",
    maps: "https://www.google.com/maps/search/?api=1&query=Ramen+Ouka+Shinjuku",
    tags: ["ramen", "japanese", "certified", "prayer-space", "english"]
  },
  {
    name: "Sushiken Asakusa",
    area: "Asakusa",
    cuisine: "Sushi",
    price: "¥¥",
    halal: "Halal-certified (Muslim-friendly menu)",
    station: "Asakusa Sta. · 7 min walk",
    description: "One of Tokyo's first halal-certified sushi restaurants. Enjoy authentic Edomae sushi with halal soy sauce and no mirin in the rice.",
    maps: "https://www.google.com/maps/search/?api=1&query=Sushiken+Asakusa+halal",
    tags: ["sushi", "japanese", "certified"]
  },
  {
    name: "Sekai Cafe (Asakusa & Oshiage)",
    area: "Asakusa / Tokyo Skytree",
    cuisine: "Cafe & Fusion",
    price: "¥¥",
    halal: "Muslim-friendly (no pork, halal meat)",
    station: "Asakusa Sta. · 5 min walk",
    description: "Cozy cafe catering to Muslim, vegetarian and vegan guests. Great pizza, pasta and desserts near Senso-ji and Tokyo Skytree.",
    maps: "https://www.google.com/maps/search/?api=1&query=Sekai+Cafe+Asakusa",
    tags: ["cafe", "fusion", "vegetarian-options"]
  },
  {
    name: "Malaychan",
    area: "Ikebukuro",
    cuisine: "Malaysian",
    price: "¥",
    halal: "Muslim-owned",
    station: "Ikebukuro Sta. (West Exit) · 5 min walk",
    description: "Beloved Muslim-owned Malaysian restaurant serving nasi lemak, laksa and char kway teow. A local Muslim community favorite.",
    maps: "https://www.google.com/maps/search/?api=1&query=Malaychan+Ikebukuro",
    tags: ["malaysian", "muslim-owned", "local-favorite"]
  },
  {
    name: "Marhaba Pakistani Restaurant",
    area: "Okachimachi",
    cuisine: "Pakistani",
    price: "¥",
    halal: "Muslim-owned",
    station: "Naka-Okachimachi Sta. · 2 min walk",
    description: "Authentic Pakistani curries, biryani and fresh naan in the heart of 'halal street'. Generous portions at great prices.",
    maps: "https://www.google.com/maps/search/?api=1&query=Marhaba+Pakistani+Okachimachi+Tokyo",
    tags: ["pakistani", "muslim-owned", "budget"]
  },
  {
    name: "Annam Indian Restaurant",
    area: "Ginza",
    cuisine: "Indian",
    price: "¥¥",
    halal: "Halal-certified",
    station: "Ginza Sta. · 4 min walk",
    description: "Long-running halal Indian restaurant in upscale Ginza. Known for tandoori dishes and a wide curry selection.",
    maps: "https://www.google.com/maps/search/?api=1&query=Annam+Indian+Ginza+halal",
    tags: ["indian", "certified", "ginza"]
  },
  {
    name: "Cinta Jawa Cafe",
    area: "Akihabara & Shinjuku",
    cuisine: "Indonesian",
    price: "¥",
    halal: "Muslim-friendly",
    station: "Akihabara Sta. · 6 min walk",
    description: "Indonesian comfort food — nasi goreng, rendang, satay — plus Indonesian groceries. Popular with students and travelers.",
    maps: "https://www.google.com/maps/search/?api=1&query=Cinta+Jawa+Cafe+Akihabara",
    tags: ["indonesian", "budget", "groceries"]
  },
  {
    name: "Tokyo Muslim Hanten (Muslim Restaurant)",
    area: "Kinshicho",
    cuisine: "Chinese Halal",
    price: "¥",
    halal: "Halal-certified",
    station: "Kinshicho Sta. · 5 min walk",
    description: "Halal Chinese cuisine — hand-pulled beef noodles, dumplings and lamb skewers. A rare taste of Chinese Muslim food in Tokyo.",
    maps: "https://www.google.com/maps/search/?api=1&query=Tokyo+Muslim+Hanten+Kinshicho",
    tags: ["chinese", "certified", "noodles"]
  }
];

const GROCERIES = [
  {
    name: "Tokyo Camii Halal Market",
    area: "Shibuya (Yoyogi-Uehara)",
    notes: "Inside Tokyo Camii. Halal meats, Turkish products, sweets, and prayer items.",
    maps: "https://www.google.com/maps/search/?api=1&query=Tokyo+Camii+halal+market"
  },
  {
    name: "Nasco Halal Food (Okachimachi)",
    area: "Taito (Okachimachi)",
    notes: "Halal butcher and grocery on 'halal street' — fresh meat, spices, frozen foods.",
    maps: "https://www.google.com/maps/search/?api=1&query=Nasco+halal+food+Okachimachi"
  },
  {
    name: "Jupiter Halal Food (Shin-Okubo)",
    area: "Shinjuku (Shin-Okubo)",
    notes: "South Asian groceries, halal meat, and Bangladeshi/Indian staples.",
    maps: "https://www.google.com/maps/search/?api=1&query=Jupiter+halal+food+Shin-Okubo"
  },
  {
    name: "Green Nasco (Ikebukuro)",
    area: "Toshima (Ikebukuro)",
    notes: "Halal grocery near Ikebukuro west exit; Indonesian and South Asian products.",
    maps: "https://www.google.com/maps/search/?api=1&query=Green+Nasco+Ikebukuro+halal"
  },
  {
    name: "National Azabu (Hiroo)",
    area: "Minato (Hiroo)",
    notes: "International supermarket with a dedicated halal section; near Hiroo Mosque.",
    maps: "https://www.google.com/maps/search/?api=1&query=National+Azabu+Hiroo"
  },
  {
    name: "Gyomu Super (業務スーパー)",
    area: "Multiple locations",
    notes: "Budget supermarket chain; many frozen items carry halal certification marks. Check labels.",
    maps: "https://www.google.com/maps/search/?api=1&query=Gyomu+Super+Tokyo"
  }
];

const TIPS = [
  {
    title: "Finding Prayer Times",
    body: "Use apps like Muslim Pro, Athan, or Salatuk with location set to Tokyo. Tokyo Camii also publishes monthly timetables on its website."
  },
  {
    title: "Qibla Direction",
    body: "Qibla from Tokyo is roughly west-northwest (~293°). Most prayer rooms in Japan have qibla stickers on the ceiling — look up!"
  },
  {
    title: "Reading Labels",
    body: "Watch for these ingredients: 豚肉 (pork), ラード (lard), ゼラチン (gelatin), みりん (mirin), 酒 (sake/alcohol), コンソメ (consommé, often pork-based). When in doubt, choose seafood or vegetarian dishes."
  },
  {
    title: "Muslim-Friendly vs Halal-Certified",
    body: "'Muslim-friendly' usually means no pork and halal meat, but the kitchen may not be certified. 'Halal-certified' means a certifying body has audited the restaurant. Choose based on your comfort level."
  },
  {
    title: "Convenience Store Survival",
    body: "Safe bets at 7-Eleven/FamilyMart/Lawson: onigiri with salmon (鮭) or ume (梅), edamame, salads (check dressing), boiled eggs, bananas, and plain rice. Avoid fried chicken and most breads (may contain lard/shortening)."
  },
  {
    title: "Friday Prayer (Jumu'ah)",
    body: "Arrive 20–30 minutes early at major mosques — Tokyo Camii fills up fast. Many mosques hold two sessions. Prayer spaces at airports do not hold congregational Friday prayers."
  },
  {
    title: "Useful Japanese Phrases",
    body: "\"Butaniku wa haitte imasu ka?\" (Does this contain pork?) · \"Osake nashi de onegaishimasu\" (No alcohol, please) · \"Halal no menyu wa arimasu ka?\" (Do you have a halal menu?)"
  },
  {
    title: "Etiquette at Mosques",
    body: "Dress modestly (women: bring a scarf; most mosques lend them). Remove shoes before entering prayer halls. Keep voices low, and ask before photographing worshippers."
  }
];
