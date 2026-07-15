export interface GuideSection {
  title: string;
  content: string[];
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  readingTime: string;
  heroTitle: string;
  heroSubtitle: string;
  sections: GuideSection[];
}

export const guides: Guide[] = [
  {
    slug: "is-sesto-san-giovanni-a-good-place-to-stay",

    title:
      "Is Sesto San Giovanni a Good Place to Stay When Visiting Milan?",

    description:
      "Everything you need to know before choosing Sesto San Giovanni as your base for exploring Milan.",

    readingTime: "6 min read",

    heroTitle:
      "Is Sesto San Giovanni a Good Place to Stay When Visiting Milan?",

    heroSubtitle:
      "A local guide to one of the smartest areas for staying near Milan.",

    sections: [
      {
        title: "Short answer",
        content: [
          "Yes. If you're looking for a comfortable, well-connected and more affordable alternative to staying in Milan city centre, Sesto San Giovanni is one of the smartest places to stay.",
          "Thanks to the M1 Red Line, you can reach the heart of Milan in around 20 minutes while enjoying quieter surroundings, larger apartments and better value.",
        ],
      },

      {
        title: "Why travellers choose Sesto San Giovanni",
        content: [
          "Fast metro connection to Milan.",
          "Larger apartments for the same budget.",
          "Quiet residential neighbourhood.",
          "Restaurants, supermarkets and cafés within walking distance.",
        ],
      },

      {
        title: "Is Sesto San Giovanni safe?",
        content: [
          "Sesto San Giovanni is a lively residential city where thousands of people live and work every day.",
          "Like any large urban area, it's always sensible to take normal precautions, especially late at night.",
          "Most visitors are pleasantly surprised by how calm and practical the area feels.",
        ],
      },

      {
        title: "More than Milan",
        content: [
          "One of the biggest advantages of staying here is that you can easily explore much more than Milan.",
          "The nearby railway station offers convenient connections to Monza, Lecco, Lake Como and many other destinations across Lombardy.",
        ],
      },

      {
        title: "Local advice",
        content: [
          "If you're planning to spend most of your day visiting Milan, staying close to the M1 Red Line usually matters much more than staying inside the city centre itself.",
        ],
      },
    ],
  },

  {
    slug: "where-to-stay-in-milan-without-a-car",

    title: "Where to Stay in Milan Without a Car",

    description:
      "Discover the best areas to stay in Milan without a car and learn why choosing the right metro connection can be more useful than staying in the city centre.",

    readingTime: "10 min read",

    heroTitle: "Where to Stay in Milan Without a Car",

    heroSubtitle:
      "The smartest areas to stay if you want to explore Milan using public transport instead of driving.",

    sections: [
      {
        title: "Can you visit Milan without a car?",
        content: [
          "Absolutely. For most travellers, visiting Milan without a car is actually the simplest and most convenient choice.",
          "The city has an extensive public transport network made up of metro lines, trams, buses and regional trains.",
          "Driving often means dealing with traffic, restricted traffic zones and expensive parking, while public transport connects most of the places visitors want to reach.",
        ],
      },

      {
        title: "The biggest mistake first-time visitors make",
        content: [
          "Many visitors assume they must stay close to the Duomo to enjoy Milan.",
          "A better question is not how close an apartment is to one attraction, but how quickly it connects you to all the places you want to visit.",
          "Accommodation close to a direct metro line can provide easier journeys, quieter evenings, more space and better value than many central alternatives.",
        ],
      },

      {
        title: "What really matters when choosing accommodation",
        content: [
          "Look for accommodation within easy walking distance of a metro station.",
          "Check whether supermarkets, pharmacies, restaurants and cafés are available nearby.",
          "A railway station can also be valuable if you plan to visit destinations outside Milan.",
          "The quality of the transport connection is often more important than the postcode itself.",
        ],
      },

      {
        title: "Why the M1 Red Line is a smart choice",
        content: [
          "The M1 Red Line directly connects several important destinations, including Duomo, San Babila, Cadorna and Rho Fiera Milano.",
          "A direct journey without complicated changes makes everyday travel easier, especially for first-time visitors and families.",
          "From Sesto San Giovanni, the heart of Milan can be reached in around 20 minutes.",
        ],
      },

      {
        title: "Why Sesto San Giovanni works well without a car",
        content: [
          "Sesto San Giovanni combines direct metro access with a quieter residential atmosphere.",
          "Supermarkets, restaurants, cafés, pharmacies and everyday services are available within walking distance.",
          "Visitors can enjoy more space and calmer evenings while remaining closely connected to Milan city centre.",
        ],
      },

      {
        title: "More than Milan: easy day trips by train",
        content: [
          "The nearby railway station makes it possible to explore other destinations without renting a car.",
          "Monza is an easy option for visiting the Royal Villa, its large park and the famous Formula 1 circuit.",
          "Lecco offers lakeside walks and mountain scenery, while regional railway connections also make Lake Como accessible for a day trip.",
          "This makes the area a useful base for exploring both Milan and other parts of Lombardy.",
        ],
      },

      {
        title: "Who is this area ideal for?",
        content: [
          "Families benefit from quieter surroundings, larger apartments and simple public transport.",
          "Business travellers can reach Milan's commercial districts and exhibition centres without driving.",
          "Tourists can visit Milan's main attractions while avoiding traffic and parking.",
          "The area is also practical for people attending events at Carroponte or visiting friends and relatives in Sesto San Giovanni.",
        ],
      },

      {
        title: "Local tip",
        content: [
          "Choose the metro connection, not only the postcode.",
          "A 24-hour or 72-hour ATM travel pass can provide unlimited travel on Milan's metro, buses and trams and is usually far cheaper than driving and parking in the city.",
        ],
      },

      {
        title: "Frequently asked questions",
        content: [
          "Do I need a car to visit Milan? For most visitors, no. Public transport is normally faster, cheaper and more convenient.",
          "Is Milan's metro easy to use? Yes. The network is clearly signposted and connects the city's main attractions.",
          "Which metro line is useful for tourists? The M1 Red Line is particularly convenient because it connects Duomo, San Babila, Cadorna and Rho Fiera Milano.",
          "Can I visit Lake Como without a car? Yes. Regional railway connections make several lakeside destinations accessible by public transport.",
          "Is staying outside the city centre a disadvantage? Not necessarily. A well-connected residential area can offer better value, more space and equally convenient access to Milan.",
        ],
      },
    ],
  },
];