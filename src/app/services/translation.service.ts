import { Injectable, signal, computed } from '@angular/core';

export type Language = 'en' | 'es';

export interface Translations {
    brand: string;
    nav: {
        benefits: string;
        mission: string;
        shop: string;
    };
    refruit: {
        badge: string;
        title: string;
        description: string;
        btnPrimary: string;
        btnOutline: string;
        imgAlt: string;
        imgSrc: string;
    };
    features: {
        title: string;
        subtitle: string;
        items: {
            icon: string;
            title: string;
            desc: string;
        }[];
    };
    footer: {
        rights: string;
    };
}

const en: Translations = {
    brand: 'ReFruit',
    nav: {
        benefits: 'Benefits',
        mission: 'Our Mission',
        shop: 'Shop Now'
    },
    refruit: {
        badge: '100% Upcycled Goodness',
        title: 'Powered by Nature,<br>Rescued for You.',
        description: 'Delicious, nutritious energy bars made from surplus fruit. Fuel your day while fighting food waste with every bite.',
        btnPrimary: 'Taste the Change',
        btnOutline: 'Learn More',
        imgAlt: 'ReFruit Energy Bars',
        imgSrc: '/images/refruit-landing.jpg'
    },
    features: {
        title: 'Why ReFruit?',
        subtitle: 'Good for you, good for the planet. Here\'s what makes our bars special.',
        items: [
            {
                icon: '♻️',
                title: 'Circular Economy',
                desc: 'We rescue perfectly good surplus fruit that would otherwise go to waste, giving it a second delicious life.'
            },
            {
                icon: '🌱',
                title: '100% Natural',
                desc: 'No additives, no preservatives. Just pure fruit, nuts, and natural energy. Clean eating made simple.'
            },
            {
                icon: '⚡',
                title: 'Sustained Energy',
                desc: 'Standardized for long-lasting energy without the sugar crash. Perfect for hikes, workouts, or busy days.'
            }
        ]
    },
    footer: {
        rights: '© 2025 ReFruit. All rights reserved.'
    }
};

const es: Translations = {
    brand: 'ReFruta',
    nav: {
        benefits: 'Beneficios',
        mission: 'Nuestra Misión',
        shop: 'Comprar'
    },
    refruit: {
        badge: '100% Bondad Reciclada',
        title: 'Impulsado por la Naturaleza,<br>Rescatado para Ti.',
        description: 'Barras energéticas deliciosas y nutritivas hechas de fruta rescatada. Alimenta tu día mientras combates el desperdicio de alimentos con cada bocado.',
        btnPrimary: 'Prueba el Cambio',
        btnOutline: 'Saber Más',
        imgAlt: 'Barras Energéticas ReFruta',
        imgSrc: '/images/refruta-landing.png'
    },
    features: {
        title: '¿Por qué ReFruta?',
        subtitle: 'Bueno para ti, bueno para el planeta. Esto es lo que hace especiales a nuestras barras.',
        items: [
            {
                icon: '♻️',
                title: 'Economía Circular',
                desc: 'Rescatamos fruta excedente en perfecto estado que de otra manera se desperdiciaría, dándole una segunda y deliciosa vida.'
            },
            {
                icon: '🌱',
                title: '100% Natural',
                desc: 'Sin aditivos, sin conservantes. Solo pura fruta, nueces y energía natural. Comer limpio hecho simple.'
            },
            {
                icon: '⚡',
                title: 'Energía Sostenida',
                desc: 'Estandarizado para energía duradera sin el bajón de azúcar. Perfecto para caminatas, entrenamientos o días ajetreados.'
            }
        ]
    },
    footer: {
        rights: '© 2025 ReFruta. Todos los derechos reservados.'
    }
};

@Injectable({
    providedIn: 'root'
})
export class TranslationService {
    private currentLang = signal<Language>('en');

    public translations = computed(() => {
        return this.currentLang() === 'en' ? en : es;
    });

    public currentLanguage = computed(() => this.currentLang());

    toggleLanguage() {
        this.currentLang.update(lang => lang === 'en' ? 'es' : 'en');
    }

    setLanguage(lang: Language) {
        this.currentLang.set(lang);
    }
}
