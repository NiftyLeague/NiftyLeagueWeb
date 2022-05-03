import React from 'react';
import { Container } from '@mui/material';
import Definitions from '@components/definitions';
import Layout from '@components/layout';

const Disclaimer = (): JSX.Element => (
  <Layout classes={{ root: 'legal-pg' }}>
    <Container style={{ textAlign: 'left', padding: '40px', marginTop: '5%' }}>
      <h2>Disclaimer</h2>
      <p>
        Effective date: <strong>January 19th, 2022</strong>
      </p>
      <Definitions />
      <h2>Rights and Conditions</h2>
      <p>
        The content contained in this Site does not constitute an offer or sale of securities in or into the United
        States, or to or for the account or benefit of U.S. persons, or in any other jurisdictions where it is unlawful
        to do so.
      </p>
      <p>
        Using a Smart Contract on the Blockchain requires a high degree of technical skills and is therefore associated
        with a high risk. Obtaining and holding an NFT-Token represents ownership of a piece of digital artwork only.
        Accordingly, no information on this Site (or any other documents mentioned therein) is or may be considered to
        be advice or an invitation to enter into an agreement for any investment purpose. Further, as NFT-Token
        represents artwork, nothing on this Site qualifies or is intended to be an offering of securities in any
        jurisdiction nor does it constitute an offer or an invitation to purchase shares, securities or other financial
        product.
      </p>
      <p>
        The NFTL governance and utility token is solely to be used for governance within the Nifty DAO as well as for
        platform-wide expenses. Accordingly, no information on this Site (or any other documents mentioned therein) is
        or may be considered to be advice or an invitation to enter into an agreement for any investment purpose with
        Nifty League Inc. (&quot;Company&quot;). By no means should NFTL token holders expect any income from our
        team&apos;s contributions, gain from Company profits, or ownership of the Company in any way. NFTL is not
        purchasable from our Company and will always and only be distributed freely. Free distributions are not intended
        to be an offering of securities in any jurisdiction nor does it constitute an offer or invitation for Company
        shares. Transfer of NFTL tokens may be subject to legal restrictions under applicable laws. Under no
        circumstances shall NFTL tokens be reoffered, resold or transferred within the United States or to, or for the
        account or benefit of, U.S. persons, except pursuant to an exemption from, or in a transaction not subject to,
        the registration requirements of the U.S. Securities Act of 1933, as amended.
      </p>
      <p>
        The information contained on this Site is not intended for individuals or entities who are ordinarily resident
        in Austria or the United States of America nor for residents of a geographic area that is subject to UN-, US-,
        EU- or Swiss sanctions or embargoes, including: Afghanistan, Albania, Belarus, Bosnia &amp; Herzegovina,
        Burundi, Central African Republic, Côte d&apos;Ivoire, Cuba, Democratic Republic of the Congo, Ethiopia, Guinea,
        Guinea-Bissau, Iran, Iraq, Lebanon, Liberia, Libya, Myanmar (Burma), North Korea, Russia, Republic of Macedonia,
        Serbia, Somalia, South Sudan, Sri Lanka, Sudan, Syria, Thailand, Trinidad &amp; Tobago, Tunisia, Uganda,
        Ukraine, Vatican, Venezuela, Yemen, and Zimbabwe. By entering or using the Site, you accept representation and
        warrant that you are not resident in those countries. The company reserves the right to restrict the sale of the
        NFT-token in any jurisdiction or to any individuals or entities at its discretion.
      </p>
      <h2>Warranties and Limitations</h2>
      <p>
        Without limiting the foregoing, neither the Company nor any of the Company&apos;s provider makes any
        representation or warranty of any kind, express or implied: (i) as to the operation or availability of the
        Service, or the information, content, and materials or products included thereon; (ii) that the Service will be
        uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content
        provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on
        behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful
        components.
      </p>
      <p>
        Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable
        statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But
        in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent
        enforceable under applicable law.
      </p>
      <h2>“AS IS” and “AS AVAILABLE”</h2>
      <p>
        The Service is provided to You &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; and with all faults and defects
        without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own
        behalf and on behalf of its affiliates and their respective licensors and service providers, expressly disclaims
        all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all
        implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and
        warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without
        limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any
        kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any
        other software, applications, systems or services, operate without interruption, meet any performance or
        reliability standards or be error free or that any errors or defects can or will be corrected.
      </p>
    </Container>
  </Layout>
);

export default Disclaimer;
