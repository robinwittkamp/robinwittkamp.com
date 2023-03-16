import type { ReactElement } from 'react';

import Heading from '@/components/Text/Heading';
import TextLink from '@/components/Text/TextLink';

/**
 * Component
 */
const ImprintContent = (): ReactElement => (
  <>
    <Heading variant="h1">Impressum</Heading>
    <Heading variant="h6">Angaben gemäß § 5 TMG</Heading>
    <p>
      Robin Wittkamp
      <br />
      Auf dem Rott 33
      <br />
      59069 Hamm
    </p>
    <Heading variant="h6">Kontakt</Heading>
    <p>
      Telefon: +49-1573-0739127
      <br />
      E-Mail: info@robinwittkamp.com
    </p>
    <Heading variant="h6">Gewerbeanmeldung</Heading>
    <p>
      Die Gewerbeanmeldung nach § 14 GewO oder § 55 c GewO wurde am 01.10.2018 durch die Stadt Hamm
      erteilt.
    </p>
    <Heading variant="h6">EU-Streitschlichtung</Heading>
    <p>
      Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
      <TextLink href="https://ec.europa.eu/consumers/odr">
        https://ec.europa.eu/consumers/odr
      </TextLink>
      .
      <br />
      Unsere E-Mail-Adresse finden Sie oben im Impressum..
    </p>
    <Heading variant="h6">Verbraucherstreitbeilegung / Universalschlichtungsstelle</Heading>
    <p>
      Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
      Verbraucherschlichtungsstelle teilzunehmen.
    </p>
    <Heading variant="h4">Haftungsausschluss</Heading>
    <Heading variant="h6">Haftung für Inhalte</Heading>
    <p>
      Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
      allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch
      nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder
      nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
    </p>
    <p>
      Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
      allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab
      dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
      entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
    </p>
    <Heading variant="h6">Haftung für Links</Heading>
    <p>
      Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
      Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für
      die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
      verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
      Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
      erkennbar.
    </p>
    <p>
      Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
      Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
      werden wir derartige Links umgehend entfernen.
    </p>
    <Heading variant="h6">Urheberrecht</Heading>
    <p>
      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
      deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
      Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
      jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den
      privaten, nicht kommerziellen Gebrauch gestattet.
    </p>
    <p>
      Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
      Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
      Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
      entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte
      umgehend entfernen.
    </p>
    <p>
      Quelle: <TextLink href="https://www.e-recht24.de/">e-recht24.de</TextLink>
    </p>
  </>
);

export default ImprintContent;
