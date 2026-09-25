import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  return (
    <footer className="bg-terra-deep text-terra-cream border-t border-terra-lime/10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Columna 1: Logo + tagline */}
        <div className="md:col-span-2">
          <div className="text-2xl font-bold mb-4">
            Terra<span className="text-terra-lime">Watt</span>
          </div>
          <p className="text-sm text-terra-cream/70 max-w-md">
            {t('tagline')}
          </p>
        </div>

        {/* Columna 2: Links */}
        <div>
          <h3 className="text-sm font-semibold text-terra-lime mb-4 uppercase tracking-wider">
            Empresa
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/nosotros" className="hover:text-terra-lime transition">
                {tNav('about')}
              </Link>
            </li>
            <li>
              <Link href="/proyectos" className="hover:text-terra-lime transition">
                {tNav('projects')}
              </Link>
            </li>
            <li>
              <Link href="/sostenibilidad" className="hover:text-terra-lime transition">
                {tNav('sustainability')}
              </Link>
            </li>
            <li>
              <Link href="/inversores" className="hover:text-terra-lime transition">
                {tNav('investors')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div>
          <h3 className="text-sm font-semibold text-terra-lime mb-4 uppercase tracking-wider">
            Contacto
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/contacto" className="hover:text-terra-lime transition">
                {tNav('contact')}
              </Link>
            </li>
            <li>
              <Link href="/carreras" className="hover:text-terra-lime transition">
                {tNav('careers')}
              </Link>
            </li>
            <li className="text-terra-cream/70">
              hola@terrawatt.com
            </li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-terra-lime/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-terra-cream/60">
          <p>© {new Date().getFullYear()} TerraWatt. {t('rights')}.</p>
          <div className="flex gap-6">
            <Link href="/legal/privacidad" className="hover:text-terra-lime transition">
              Privacidad
            </Link>
            <Link href="/legal/terminos" className="hover:text-terra-lime transition">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}