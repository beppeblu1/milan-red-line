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
            "Thanks to the M1 Red Line, you can reach the heart of Milan in around 20 minutes while enjoying quieter surroundings, larger apartments and better value."
          ]
        },
  
        {
          title: "Why travellers choose Sesto San Giovanni",
          content: [
            "Fast metro connection to Milan.",
            "Larger apartments for the same budget.",
            "Quiet residential neighbourhood.",
            "Restaurants, supermarkets and cafés within walking distance."
          ]
        },
  
        {
          title: "Is Sesto San Giovanni safe?",
          content: [
            "Sesto San Giovanni is a lively residential city where thousands of people live and work every day.",
            "Like any large urban area, it's always sensible to take normal precautions, especially late at night.",
            "Most visitors are pleasantly surprised by how calm and practical the area feels."
          ]
        },
  
        {
          title: "More than Milan",
          content: [
            "One of the biggest advantages of staying here is that you can easily explore much more than Milan.",
            "The nearby railway station offers convenient connections to Monza, Lecco, Lake Como and many other destinations across Lombardy."
          ]
        },
  
        {
          title: "Local advice",
          content: [
            "If you're planning to spend most of your day visiting Milan, staying close to the M1 Red Line usually matters much more than staying inside the city centre itself."
          ]
        }
      ]
    }
  ];