import { LanguageContent, LanguageOption } from "../types";

export const languageOptions: LanguageOption[] = [
  { id: "en", label: "EN" },
  { id: "ru", label: "RU" },
];

export const content: LanguageContent = {
  en: {
    title: "CRYPTO ELLIOT",
    subtitle: "THE SYSTEM HACKER",
    heroText: "I've hacked the whales. Now I'm sharing their secrets.",
    descriptionTitle: "THE TRUTH THEY DON'T WANT YOU TO KNOW",
    description: "For years, the financial elite have manipulated markets using algorithms and insider information. I've infiltrated their systems and decoded their patterns. Now, I'm making this knowledge accessible to everyone, not just the 1%.",
    ctaButton: "JOIN THE CHANNEL",
    featuresTitle: "HOW IT WORKS",
    features: [
      {
        title: "PRECISION SIGNALS",
        description: "Receive real-time market insights based on whale movement patterns"
      },
      {
        title: "STRATEGY BREAKDOWNS",
        description: "Learn how to identify manipulation and profit from predictable cycles"
      },
      {
        title: "COMMUNITY ACCESS",
        description: "Connect with others who are fighting back against market manipulation"
      }
    ]
  },
  ru: {
    title: "КРИПТО ЭЛЛИОТ",
    subtitle: "ВЗЛОМЩИК СИСТЕМЫ",
    heroText: "Я взломал китов. Теперь делюсь их секретами.",
    descriptionTitle: "ПРАВДА, КОТОРУЮ ОНИ СКРЫВАЮТ",
    description: "Годами финансовая элита манипулировала рынками, используя алгоритмы и инсайдерскую информацию. Я проник в их системы и расшифровал их паттерны. Теперь я делаю эти знания доступными для всех, а не только для 1%.",
    ctaButton: "ПРИСОЕДИНИТЬСЯ К КАНАЛУ",
    featuresTitle: "КАК ЭТО РАБОТАЕТ",
    features: [
      {
        title: "ТОЧНЫЕ СИГНАЛЫ",
        description: "Получайте аналитику рынка в реальном времени на основе движений китов"
      },
      {
        title: "РАЗБОР СТРАТЕГИЙ",
        description: "Научитесь выявлять манипуляции и зарабатывать на предсказуемых циклах"
      },
      {
        title: "ДОСТУП К СООБЩЕСТВУ",
        description: "Присоединяйтесь к тем, кто противостоит рыночным манипуляциям"
      }
    ]
  }
};