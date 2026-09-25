export type ProjectType = 'solar' | 'wind' | 'hydrogen';
export type ProjectStatus = 'operational' | 'construction' | 'planned';
export type Locale = 'es' | 'en' | 'pt';

export type ProjectTranslation = {
  name: string;
  description: string;
  location: string;
};

export type Project = {
  slug: string;
  country: string;
  countryCode: string;
  type: ProjectType;
  status: ProjectStatus;
  capacityMW: number;
  co2AvoidedTons: number;
  year: number;
  translations: Record<Locale, ProjectTranslation>;
};

export const projects: Project[] = [
  {
    slug: 'parque-solar-atalaya',
    country: 'España',
    countryCode: 'ES',
    type: 'solar',
    status: 'operational',
    capacityMW: 320,
    co2AvoidedTons: 185000,
    year: 2023,
    translations: {
      es: {
        name: 'Parque Solar Atalaya',
        description:
          'Una de las mayores plantas fotovoltaicas del sur de Europa, ubicada en la meseta castellana.',
        location: 'Castilla-La Mancha, España'
      },
      en: {
        name: 'Atalaya Solar Park',
        description:
          'One of the largest photovoltaic plants in southern Europe, located on the Castilian plateau.',
        location: 'Castilla-La Mancha, Spain'
      },
      pt: {
        name: 'Parque Solar Atalaya',
        description:
          'Uma das maiores usinas fotovoltaicas do sul da Europa, localizada no planalto castelhano.',
        location: 'Castela-Mancha, Espanha'
      }
    }
  },
  {
    slug: 'eolico-patagonia-sur',
    country: 'Argentina',
    countryCode: 'AR',
    type: 'wind',
    status: 'operational',
    capacityMW: 180,
    co2AvoidedTons: 98000,
    year: 2022,
    translations: {
      es: {
        name: 'Parque Eólico Patagonia Sur',
        description:
          'Aprovecha los vientos constantes de la Patagonia para abastecer a más de 200.000 hogares.',
        location: 'Chubut, Argentina'
      },
      en: {
        name: 'Patagonia Sur Wind Farm',
        description:
          'Harnesses the constant Patagonian winds to power over 200,000 homes.',
        location: 'Chubut, Argentina'
      },
      pt: {
        name: 'Parque Eólico Patagônia Sul',
        description:
          'Aproveita os ventos constantes da Patagônia para abastecer mais de 200.000 lares.',
        location: 'Chubut, Argentina'
      }
    }
  },
  {
    slug: 'hidrogeno-verde-bahia',
    country: 'Brasil',
    countryCode: 'BR',
    type: 'hydrogen',
    status: 'construction',
    capacityMW: 250,
    co2AvoidedTons: 140000,
    year: 2025,
    translations: {
      es: {
        name: 'Planta de Hidrógeno Verde Bahía',
        description:
          'Primera planta de hidrógeno verde a escala industrial en Sudamérica.',
        location: 'Bahía, Brasil'
      },
      en: {
        name: 'Bahia Green Hydrogen Plant',
        description:
          'First industrial-scale green hydrogen plant in South America.',
        location: 'Bahia, Brazil'
      },
      pt: {
        name: 'Planta de Hidrogênio Verde Bahia',
        description:
          'Primeira planta de hidrogênio verde em escala industrial na América do Sul.',
        location: 'Bahia, Brasil'
      }
    }
  },
  {
    slug: 'solar-almeria-ii',
    country: 'España',
    countryCode: 'ES',
    type: 'solar',
    status: 'construction',
    capacityMW: 150,
    co2AvoidedTons: 87000,
    year: 2025,
    translations: {
      es: {
        name: 'Solar Almería II',
        description:
          'Ampliación de nuestra planta insignia en el sureste español, con almacenamiento en baterías.',
        location: 'Almería, España'
      },
      en: {
        name: 'Almeria Solar II',
        description:
          'Expansion of our flagship plant in southeastern Spain, with battery storage.',
        location: 'Almeria, Spain'
      },
      pt: {
        name: 'Solar Almeria II',
        description:
          'Expansão da nossa usina principal no sudeste espanhol, com armazenamento em baterias.',
        location: 'Almeria, Espanha'
      }
    }
  },
  {
    slug: 'eolico-marruecos-norte',
    country: 'Marruecos',
    countryCode: 'MA',
    type: 'wind',
    status: 'planned',
    capacityMW: 400,
    co2AvoidedTons: 220000,
    year: 2027,
    translations: {
      es: {
        name: 'Eólico Marruecos Norte',
        description:
          'Proyecto estratégico que conectará el norte de África con la red europea.',
        location: 'Tánger-Tetuán, Marruecos'
      },
      en: {
        name: 'North Morocco Wind',
        description:
          'Strategic project that will connect North Africa to the European grid.',
        location: 'Tangier-Tetouan, Morocco'
      },
      pt: {
        name: 'Eólico Marrocos Norte',
        description:
          'Projeto estratégico que conectará o norte da África à rede europeia.',
        location: 'Tânger-Tetuán, Marrocos'
      }
    }
  },
  {
    slug: 'solar-atacama',
    country: 'Chile',
    countryCode: 'CL',
    type: 'solar',
    status: 'operational',
    capacityMW: 210,
    co2AvoidedTons: 118000,
    year: 2024,
    translations: {
      es: {
        name: 'Solar Atacama',
        description:
          'Aprovecha la radiación más alta del planeta en el desierto de Atacama.',
        location: 'Antofagasta, Chile'
      },
      en: {
        name: 'Atacama Solar',
        description:
          'Harnesses the highest solar radiation on the planet in the Atacama Desert.',
        location: 'Antofagasta, Chile'
      },
      pt: {
        name: 'Solar Atacama',
        description:
          'Aproveita a radiação solar mais alta do planeta no deserto do Atacama.',
        location: 'Antofagasta, Chile'
      }
    }
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}