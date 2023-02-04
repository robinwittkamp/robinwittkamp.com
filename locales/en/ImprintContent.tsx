// import Link from 'next/link';
import type { ReactElement } from 'react';

import Heading from '../../components/Text/Heading';
import TextLink from '../../components/Text/TextLink';

const ImprintContent = (): ReactElement => (
  <>
    <Heading variant="h1">Imprint</Heading>
    <Heading variant="h6">According to § 5 TMG</Heading>
    <p>
      Robin Wittkamp
      <br />
      Auf dem Rott 33
      <br />
      59069 Hamm
      <br />
      Germany
    </p>
    <Heading variant="h6">Contact</Heading>
    <p>
      Phone: +49-1573-0739127
      <br />
      Email: info@robinwittkamp.com
    </p>
    <Heading variant="h6">Business registration</Heading>
    <p>
      The business registration according to § 14 GewO or § 55 c GewO was granted by the city of
      Hamm on 01.10.2018.
    </p>
    <Heading variant="h6">EU dispute resolution</Heading>
    <p>
      The European Commission provides a platform for online dispute resolution (ODR):{' '}
      <TextLink external href="https://ec.europa.eu/consumers/odr">
        https://ec.europa.eu/consumers/odr
      </TextLink>
      .
      <br />
      Our e-mail address can be found above in the site notice.
    </p>
    <Heading variant="h6">Consumer dispute settlement / Universal arbitration</Heading>
    <p>
      We are not willing or obliged to participate in dispute resolution proceedings before a
      consumer arbitration board.
    </p>
    <Heading variant="h4">Disclaimer</Heading>
    <Heading variant="h6">Liability for content</Heading>
    <p>
      As a service provider and according to § 7 paragraph 1 of TMG, we are responsible for own
      contents on these pages under the general laws. According to § § 8 to 10 TMG, as a service
      provider we are not obliged to monitor transmitted or stored information from outside or to
      investigate circumstances that indicate illegal activity.
    </p>
    <p>
      Obligations under the general laws to remove or block the use of information remain
      unaffected. However, our liability begins only when we are made aware of any specific
      infringement. Upon notification of such violations, we will remove the content immediately.
    </p>
    <Heading variant="h6">Liability for links</Heading>
    <p>
      Our site contains links to external websites that we not control. Therefore we cannot accept
      any responsibility for their content. The respective provider or operator of the pages is
      always responsible for the contents of any linked site. The linked sites were checked at the
      time of linking for possible violations of law. At that time, no illegal content was evident.
    </p>
    <p>
      Without specific evidence of a violation, constant controls of the linked pages are
      unreasonable. Upon notification of violations, we will remove such links immediately.
    </p>
    <Heading variant="h6">Copyright</Heading>
    <p>
      Content and work done on these pages created by the site operator are subject to German
      copyright law. Duplication, processing, distribution and any kind of exploitation outside the
      limits of copyright require the written consent of their respective author or creator.
      Downloads and copies of these pages are only permitted for private, non-commercial use.
    </p>
    <p>
      Where content is not created by the website operator, the copyright of third parties will be
      respected. Content from third parties will be marked as such. Should you become aware of any
      copyright infringements on these pages, please notify us. Upon notification of violations, we
      will remove such content immediately.
    </p>
    <p>
      Source:{' '}
      <TextLink external href="https://www.e-recht24.de/">
        e-recht24.de
      </TextLink>
    </p>
  </>
);

export default ImprintContent;
