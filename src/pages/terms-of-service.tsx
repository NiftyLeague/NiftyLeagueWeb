import React, { memo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Container } from '@mui/material';
import Definitions from '@/components/Definitions';
import Layout from '@/components/Layout';
import AnimatedWrapper from '@/components/AnimatedWrapper';

const ToS = (): JSX.Element => (
  <Layout classes={{ root: 'legal-pg' }}>
    <Head>
      <title>Nifty League | Terms of Service</title>
    </Head>
    <Container sx={{ p: { xs: 2, md: 4 }, pt: { xs: 15, md: 20 } }}>
      <div className="mb-3 mb-md-5">
        <AnimatedWrapper>
          <h1 className="text-align-center animated-fade-slow animated-fade-start transition-delay-small">
            TERMS AND CONDITIONS
          </h1>
        </AnimatedWrapper>
      </div>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          Last updated: <strong>March 15th, 2022</strong>
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          Please read these terms and conditions carefully before using Our Service.
        </p>
      </AnimatedWrapper>
      <Definitions />
      <AnimatedWrapper>
        <h5 className="my-3 my-md-5 animated-fade-slow animated-fade-start transition-delay-medium">Acknowledgement</h5>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          These are the Terms and Conditions governing the use of this Service and the agreement that operates between
          You, whether personally or on behalf of an entity, and the Company. These Terms and Conditions set out the
          rights and obligations of all users regarding the use of our Application.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          The Nifty League is a distributed application that is currently running on the Ethereum Network, using
          specially-developed Smart Contracts to enable users to own, transfer, compete, and purchase genetically-unique
          digital characters. It also intends to enable users to own and transfer other digital assets like plots of
          land or items. These assets can then be visualized on our Site and be used to interact with our Application or
          Online Games.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          In addition, each DEGEN NFT-Token accumulates a utility and governance token (“NFTL”). The NFTL token cannot
          be purchased, but it can be freely accumulated by holding the DEGEN NFT-Token along with contributing to the
          community. The Company does not provide or intend to provide a secondary market place for our NFT-Tokens or
          NFTL. NFTL does not constitute any ownership of the Company nor do we guarantee any value to the NFTL token in
          and of itself outside of the Nifty DAO, nor do we guarantee NFTL will be used for any platform-wide expenses
          outside of renaming characters. After the sale of an NFT-Token to You, the ownership of the NFT-Token, and to
          the connected Art, is transferred from the Smart Contract to the purchaser and concludes the business
          transaction between both parties.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          Transactions on the App are managed and confirmed via the Ethereum blockchain and other networks such as
          Arbitrum. We neither own nor control MetaMask, Google Chrome, the Ethereum network, Arbitrum, or any other
          third-party site, product, or service that You might access, visit, or use for the purpose of enabling You to
          use the various features of the App. We will not be liable for the acts or omissions of any such third
          parties, nor will we be liable for any damage that You may suffer as a result of Your transactions or any
          other interaction with any such third parties.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and
          Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
          By accessing or using the Service You agree to be bound by these Terms and Conditions. Your access to and use
          of the Service is also conditioned on Your acceptance of and compliance with our{' '}
          <Link href="/disclaimer">Disclaimer</Link> and <Link href="/privacy-policy">Privacy Policy</Link>. If You
          disagree with any part of these Terms and Conditions, Disclaimer, or Privacy Policy then You may not access
          our Application.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          The Site is intended for users who are at least 18 years old. People under the age of 18 are not permitted to
          use or register for the Site, the App, and the Smart Contracts.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <h5 className="my-3 my-md-5 animated-fade-slow animated-fade-start transition-delay-medium">
          Intellectual Property Rights
        </h5>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          Unless otherwise indicated, the Site and the Smart Contracts are our proprietary property and all source code,
          database, functionality, software, website design, audio, video, text, photographs, and graphics on the Site
          and the Apps (collectively, the &quot;Content&quot;) and trademarks, service marks and logos contained therein
          (the &quot;Marks&quot;) are owned, controlled by us or licensed to us. Except as expressly provided in these
          Terms of Use, no part of the Site, the App as well as the Smart Contract and no Content or Marks may be
          copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated,
          transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever,
          without our prior express written permission.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          Provided that You are eligible to use the Site, the App and the Smart Contracts, You are granted a limited
          license to access and use the Site or to download or print a copy of any portion of the Content to which You
          have properly gained access solely to Your personal, non-commercial use. We reserve all rights not expressly
          granted to You in and to the Site, the App, the Content, and the Marks.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          When a User purchases a Good or platform asset, the User owns the underlying NFT-Token completely for as long
          as the User owns the NFT-Token. Ownership of the NFT-Token is mediated entirely by the smart contract and
          Ethereum Network (or any other applicable network): at no point may Nifty League seize, freeze, or otherwise
          modify the ownership of the Good.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          Subject to Your continued compliance with these Terms, The Company grants You a worldwide, non-exclusive,
          royalty-free license to use, copy, and display the purchased Art, along with any extensions that You choose to
          create or use, solely for the following purposes: (i) for Your own personal, non-commercial use; (ii) as part
          of a marketplace that permits the purchase and sale of Your Nifty League NFT-Tokens, provided that the
          marketplace cryptographically verifies each NFT-Token owner&apos;s rights to display the Art for their
          NFT-Token to ensure that only the actual owner can display the Art; or (iii) as part of a third party website
          or application that permits the inclusion, involvement, or participation of Your NFT-Token, provided that the
          website/application cryptographically verifies each NFT-Token owner&apos;s rights to display the Art for their
          NFT-Token to ensure that only the actual owner can display the Art.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          By using the Site and in conjunction with creating, submitting, posting, promoting, or displaying content, You
          grant us a worldwide, non-exclusive, sublicensable, royalty-free license to use, copy, modify, and display any
          content, including but not limited to text, materials, images, files, communications, comments, feedback,
          suggestions, ideas, concepts, questions, data, or otherwise, that you submit or post on or through the Site or
          the App (collectively, “User Contributions”) for our current and future business purposes, including to
          provide, promote, and improve the Site and the App. This includes any digital file, art, or other material
          linked to or associated with any NFTs or other crypto assets that are displayed on the Site or the App.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          Provided that You own an ERC721 NFT-Token asset, You are granted a limited license to create fan-art and
          merchandise which can be used commercially given that You follow the terms set herein:
        </p>
      </AnimatedWrapper>
      <ol>
        <AnimatedWrapper>
          <li className="animated-fade-slow animated-fade-start transition-delay-medium">
            Anyone creating fan-art of a NFT-Token needs to either own the NFT-Token they are creating fan-art from or
            receive permission from that NFT-Token&apos;s owner.
          </li>
        </AnimatedWrapper>
        <AnimatedWrapper>
          <li className="animated-fade-slow animated-fade-start transition-delay-medium">
            Fan artwork must not use official Nifty League assets, but creating unique art using Nifty League NFT-Token
            assets as inspiration is acceptable.
          </li>
        </AnimatedWrapper>
        <AnimatedWrapper>
          <li className="animated-fade-slow animated-fade-start transition-delay-medium">
            The artwork must clearly state &quot;Nifty League Fanart&quot;, link to https://www.niftyleague.com, and
            link directly to the NFT-Token that is being used for inspiration.
          </li>
        </AnimatedWrapper>
        <AnimatedWrapper>
          <li className="animated-fade-slow animated-fade-start transition-delay-medium">
            A Nifty League NFT-Token can be used to generate a maximum of $10,000 in revenue before a separate official
            license agreement is required to be discussed, agreed to and signed by both parties. The revenue can come
            from either fan-art (tokenized or physical) or merchandise (t-shirts, mugs, hoodies, etc).
          </li>
        </AnimatedWrapper>
      </ol>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          Creating original fan-art without monetizing it or for the sake of charity is acceptable without any license
          or ownership.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          Furthermore, we will not place any restrictions on using our assets or NFT-Token art for the creation of games
          generated for the Nifty League by community developers. Upon receipt of payment for Your development efforts
          You agree to transfer ownership and commercial rights of the game to our Company.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <h5 className="my-3 my-md-5 animated-fade-slow animated-fade-start transition-delay-medium">
          User Representations
        </h5>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          By using the Site, the App and the Smart Contracts, You represent and warrant that: (i) You have the legal
          capacity and You agree to comply with these Terms of Use; (ii) You are not a minor in the jurisdiction in
          which You reside; (iii) You will not access the Site, the App and the Smart Contracts through automated and
          non-human means, whether through a bot, script or otherwise. This does not include building public tools and
          bots that facilitate transparency and analysis.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          (iv) You will not use the Site, the App, and the Smart Contracts for any illegal and unauthorized purpose; and
          (v) Your use of the Site, the App, and the Smart Contracts will not violate any applicable law or regulation.
          If You provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to
          suspend or terminate Your account and refuse any and all current or future use of the Site, the App, and the
          Smart Contracts (or any portion thereof).
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          (vi) You have not been included in any trade embargoes or economic sanctions list (such as United Nations
          Security Council Sanctions List), the list of specially designated nationals maintained by OFAC (the Office of
          Foreign Assets Control of the U.S. Department of the Treasury), or the denied persons or entity list of the
          U.S. Department of Commerce. Nifty League reserves the right to choose markets and jurisdictions to conduct
          business, and may restrict or refuse, in its sole discretion, the provision of our Services in certain
          countries or regions.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <h5 className="my-3 my-md-5 animated-fade-slow animated-fade-start transition-delay-medium">
          Placing Orders for Goods
        </h5>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          By placing an Order for Goods through the Service, You warrant that You are legally capable of entering into
          binding contracts.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <h6 className="animated-fade-slow animated-fade-start transition-delay-medium">Your Information</h6>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          If You wish to place an Order for Goods available on the Service, You will not be asked to provide any
          information. The transaction occurs between You and the Smart Contract.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          You represent and warrant that: (i) You have the legal right to use the payment method in connection with any
          Order; and that (ii) You are not residing in a country excluded by the{' '}
          <Link href="/disclaimer">Disclaimer</Link>.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <h6 className="animated-fade-slow animated-fade-start transition-delay-medium">Order Cancellation</h6>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          We, bound by the Smart Contract, reserve the right to refuse or cancel Your Order at any time for certain
          reasons including but not limited to:
        </p>
      </AnimatedWrapper>
      <ul>
        <AnimatedWrapper>
          <li className="animated-fade-slow animated-fade-start transition-delay-medium">Goods availability</li>
        </AnimatedWrapper>
        <AnimatedWrapper>
          <li className="animated-fade-slow animated-fade-start transition-delay-medium">Errors in Your Order</li>
        </AnimatedWrapper>
        <AnimatedWrapper>
          <li className="animated-fade-slow animated-fade-start transition-delay-medium">Technical problems</li>
        </AnimatedWrapper>
      </ul>
      <AnimatedWrapper>
        <h6 className="animated-fade-slow animated-fade-start transition-delay-medium">
          Your Order Cancellation Rights
        </h6>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          As transactions with a Smart Contract are digital and final goods (for example NFT-tokens) cannot be returned
          and therefore there is no Returns Policy.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          By interacting with the Smart Contract You agree that any sale is final and You do not have any right or
          possibility to cancel an Order.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <h6 className="animated-fade-slow animated-fade-start transition-delay-medium">Prices Policy</h6>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          The Company reserves the right to revise its prices or generate new Smart Contracts at any time. The prices
          quoted are specified by the respective Smart Contract.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <h6 className="animated-fade-slow animated-fade-start transition-delay-medium">Payments</h6>
      </AnimatedWrapper>
      <ol type="A">
        <AnimatedWrapper>
          <li className="animated-fade-slow animated-fade-start transition-delay-medium">
            All Goods purchased are subject to a one-time payment. A payment can be made through the Ethereum Blockchain
            only. We have no control over these payments or transactions, nor do we have the ability to reverse any
            transactions. With that in mind, the company will have no liability to You or to any third party for any
            claims or damages that may arise as a result of any transactions that You engage in via the App, or using
            the Smart Contracts, or any other transactions that You conduct via the Ethereum network.
          </li>
        </AnimatedWrapper>
        <AnimatedWrapper>
          <li className="animated-fade-slow animated-fade-start transition-delay-medium">
            Ethereum requires the payment of a transaction fee (a &quot;Gas Fee&quot;) for every transaction that occurs
            on the Ethereum network. The Gas Fee funds the network of computers that run the decentralized Ethereum
            network. This means that You will need to pay a Gas Fee for each transaction that occurs via the App. The
            Gas Fee does not go to us and We have no control over its pricing.
          </li>
        </AnimatedWrapper>
        <AnimatedWrapper>
          <li className="animated-fade-slow animated-fade-start transition-delay-medium">
            All paid prices exclude any possible duties or charges. You will be solely responsible to pay any and all
            sales, use, value-added and other taxes, duties, and assessments (except taxes on our net income) now or
            hereafter claimed or imposed by any governmental authority (collectively, &quot;Taxes&quot;) associated with
            Your use of the App (including, without limitation, any Taxes that may become payable as the result of Your
            ownership of a Nifty League NFT-Token or NFTL. Except for income and net-wealth taxes levied on The Company,
            You: (i) will pay or reimburse us for all national, federal, state, local or other taxes and assessments of
            any jurisdiction, including value added taxes and taxes as required by international tax treaties, customs
            or other import or export taxes, and amounts levied in lieu thereof based on charges set, services performed
            or payments made hereunder, as are now or hereafter may be imposed under the authority of any national,
            state, local or any other taxing jurisdiction; and (ii) shall not be entitled to deduct the amount of any
            such taxes, duties or assessments from payments made to us pursuant to these Terms.
          </li>
        </AnimatedWrapper>
      </ol>
      <AnimatedWrapper>
        <h5 className="my-3 my-md-5 animated-fade-slow animated-fade-start transition-delay-medium">
          Links to Other Websites
        </h5>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          Our Service may contain links to third-party web sites or services that are not owned or controlled by the
          Company including all articles, photograph, text, graphics, pictures, designs, music, sound, video,
          information, applications, software, and other content or items belonging to or originating from
          third-parties.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          The Company has no control over, and assumes no responsibility for, the content, privacy policies, or
          practices of any third party web sites or services. You further acknowledge and agree that the Company shall
          not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by
          or in connection with the use of or reliance on any such content, goods or services available on or through
          any such web sites or services.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          We strongly advise You to read the terms and conditions and privacy policies of any third-party websites or
          services that You visit.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <h5 className="my-3 my-md-5 animated-fade-slow animated-fade-start transition-delay-medium">Termination</h5>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          These Terms remain in full force and effect while You use the Site, the App and the Smart Contracts. We may
          terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever,
          including without limitation if You breach these Terms and Conditions.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          Upon termination, Your right to use the Service will cease immediately. However, interactions between You and
          the public Smart Contract will be outside our control. In addition to terminating and suspending Your account,
          we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal,
          and injunctive redress.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <h5 className="my-3 my-md-5 animated-fade-slow animated-fade-start transition-delay-medium">
          Limitation of Liability
        </h5>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers
          under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the
          amount actually paid by You through the Service.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable
          for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to,
          damages for loss of profits, loss of data or other information, for business interruption, for personal
          injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service,
          third-party software and/or third-party hardware used with the Service, or otherwise in connection with any
          provision of these Terms), even if the Company or any supplier has been advised of the possibility of such
          damages and even if the remedy fails of its essential purpose.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or
          consequential damages, which means that some of the above limitations may not apply. In these states, each
          party&apos;s liability will be limited to the greatest extent permitted by law.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <h5 className="my-3 my-md-5 animated-fade-slow animated-fade-start transition-delay-medium">
          Assumption of Risk
        </h5>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          You accept and acknowledge each of the following:
        </p>
      </AnimatedWrapper>
      <ol type="A">
        <AnimatedWrapper>
          <li className="animated-fade-slow animated-fade-start transition-delay-medium">
            The prices of blockchain assets are extremely volatile. Fluctuations in the price of other digital assets
            could materially and adversely affect the value of Your NFT-Tokens, which may also be subject to significant
            price volatility. We cannot guarantee that any purchasers of NFT-Token will not lose money.
          </li>
        </AnimatedWrapper>
        <AnimatedWrapper>
          <li className="animated-fade-slow animated-fade-start transition-delay-medium">
            You are solely responsible for determining what, if any, taxes apply to Your NFT-Token-related transactions.
            The Nifty League is not responsible for determining the taxes that apply to Your transactions on the App,
            the Site, or the Smart Contracts.
          </li>
        </AnimatedWrapper>
        <AnimatedWrapper>
          <li className="animated-fade-slow animated-fade-start transition-delay-medium">
            There are risks associated with using an Internet-based currency, including, but not limited to, the risk of
            hardware, software and Internet connection malfunctions, the risk of malicious software introduction, and
            the risk that third parties may obtain unauthorized access to information stored within Your wallet. You
            accept and acknowledge that Nifty League will not be responsible for any communication failures,
            disruptions, errors, distortions or delays You may encounter while using the Ethereum network, however
            caused.
          </li>
        </AnimatedWrapper>
        <AnimatedWrapper>
          <li className="animated-fade-slow animated-fade-start transition-delay-medium">
            A lack of use or public interest in the creation and development of distributed ecosystems could negatively
            impact the development of the Nifty League&apos;s platform, and therefore the potential utility and/or value
            of Nifty League NFT-Tokens.
          </li>
        </AnimatedWrapper>
        <AnimatedWrapper>
          <li className="animated-fade-slow animated-fade-start transition-delay-medium">
            The regulatory regime governing blockchain technologies, cryptocurrencies, and tokens is currently
            uncertain, and new regulations and/or policies may materially adversely affect the development of the Nifty
            League, and therefore the potential utility and/or value of Nifty League NFT-Tokens.
          </li>
        </AnimatedWrapper>
        <AnimatedWrapper>
          <li className="animated-fade-slow animated-fade-start transition-delay-medium">
            Upgrades to our platform or the Ethereum Network may have unintended, adverse effects on all Nifty League
            assets.
          </li>
        </AnimatedWrapper>
        <AnimatedWrapper>
          <li className="animated-fade-slow animated-fade-start transition-delay-medium">
            Bad actors may hack or exploit systems and steal NFTs.
          </li>
        </AnimatedWrapper>
        <AnimatedWrapper>
          <li className="animated-fade-slow animated-fade-start transition-delay-medium">
            Legislation or regulation could be adopted that negatively impact the use, transfer, exchange or price of
            NFTs.
          </li>
        </AnimatedWrapper>
        <AnimatedWrapper>
          <li className="animated-fade-slow animated-fade-start transition-delay-medium">
            NFTs compete with other digital assets, and this competition may negatively impact the price of an NFT.
          </li>
        </AnimatedWrapper>
        <AnimatedWrapper>
          <li className="animated-fade-slow animated-fade-start transition-delay-medium">
            The market for NFTs is new and volatile, and the price of an NFT relative to fiat currencies may greatly
            decrease over a short period of time, impacting the liquidity and the price of the NFT.
          </li>
        </AnimatedWrapper>
        <AnimatedWrapper>
          <li className="animated-fade-slow animated-fade-start transition-delay-medium">
            Bad actors may attempt to impersonate owners of NFTs, counterfeit NFTs, sell replicas of original NFTs or
            misuse art tied to NFTs.
          </li>
        </AnimatedWrapper>
        <AnimatedWrapper>
          <li className="animated-fade-slow animated-fade-start transition-delay-medium">
            Businesses or organizations that issue NFTs may go out of business, declare bankruptcy or cease operations,
            thereby decreasing the use or value of its NFTs.
          </li>
        </AnimatedWrapper>
      </ol>
      <AnimatedWrapper>
        <h5 className="my-3 my-md-5 animated-fade-slow animated-fade-start transition-delay-medium">Abuse</h5>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          Nifty League reserves the right to prevent the withdrawal of NFTL if abuse is detected. Cheating and
          &apos;boosting&apos; are strictly prohibited. Agreeing with other players to rank experience and earn NFTL
          faster than can be done through normal gameplay, often referred to as &apos;boosting&apos;, is strictly
          prohibited. Use of third-party programs, for example, cheat or bot engines, and applications in conjunction
          with our app is strictly prohibited.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <h5 className="my-3 my-md-5 animated-fade-slow animated-fade-start transition-delay-medium">Disclaimer</h5>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          Our Disclaimer includes important statements intended to specify or delimit the scope of rights and
          obligations that may be exercised or enforced, and is hereby incorporated by this reference into these Terms.
          You agree to the warnings and expectations outlined in our <Link href="/disclaimer">Disclaimer</Link>.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <h5 className="my-3 my-md-5 animated-fade-slow animated-fade-start transition-delay-medium">Governing Law</h5>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          The laws of the United States, excluding its conflicts of law rules, shall govern these Terms and Your use of
          the Service. Your use of the Application may also be subject to other local, state, national, or international
          laws.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <h5 className="my-3 my-md-5 animated-fade-slow animated-fade-start transition-delay-medium">
          Disputes Resolution
        </h5>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <h6 className="animated-fade-slow animated-fade-start transition-delay-medium">Informal Negotiations</h6>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          To expedite resolution and control the cost of any dispute, controversy, or claim related to these Terms of
          Use (each a &quot;Dispute&quot; and collectively, the &quot;Disputes&quot;) brought by either You or Us
          (individually, a &quot;Party&quot; and collectively, the &quot;Parties&quot;), the Parties agree to first
          attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least
          thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice from
          one Party to the other Party.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <h6 className="animated-fade-slow animated-fade-start transition-delay-medium">Binding Arbitration</h6>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          If a Party is unable to resolve a Dispute through informal negotiations, the Disputes (except those Disputes
          expressly excluded below) will be finally and exclusively resolved by binding arbitration. YOU UNDERSTAND THAT
          WITHOUT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL. The arbitration shall
          be commenced and conducted under the Commercial Arbitration Rules of the American Arbitration Association
          (&quot;AAA&quot;) and, where appropriate, the AAA&apos;s Supplementary Procedures for Consumer-Related
          Disputes (&quot;AAA Consumer Rules&quot;), both of which are available at the AAA website www.adr.org. Your
          arbitration fees and Your share of arbitration compensation shall be governed by the AAA Consumer Rules and,
          where appropriate, limited by the AAA Consumer Rules. If such costs are determined by the arbitrator to be
          excessive, we will supplement the arbitration fees and expenses. Except where otherwise required by the
          applicable AA rules or applicable law, the arbitration will take place in the United States. Except as
          otherwise provided herein, the Parties may litigate in court to compel arbitration, stay proceedings pending
          arbitration, or to confirm, modify, vacate, or enter judgement on the award entered by the arbitrator.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          If for any reason, a Dispute proceeds in court rather than arbitration, the Dispute shall be commenced or
          prosecuted in the state and federal courts located in the United States, and the Parties hereby consent to and
          waive all defenses of lack of personal jurisdiction, and forum non-conveniens with respect to venue and
          jurisdiction in such state and federal courts.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          In no event shall any Dispute brought by either Party related in any way to the Site, the App and the Smart
          Contracts be commenced more than one (1) year after the cause of the action arose. If this provision is found
          to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that
          portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of
          competent jurisdiction within the courts listed or jurisdiction above, and the Parties agree to submit to the
          personal jurisdiction of that court.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <h6 className="animated-fade-slow animated-fade-start transition-delay-medium">
          Exceptions to the Informal Negotiations and Arbitration
        </h6>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          The Parties agree that the following Disputes are not subject to the above provision concerning informal
          negotiations and binding arbitration: (a) any Dispute seeking to enforce or protect, or concerning the
          validity of, and of the intellectual property rights of a Party, (b) any Dispute related to, or arising from,
          allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive
          relief. If this provision is found to be illegal and unenforceable, then neither Party will elect to arbitrate
          any Dispute falling within that portion of this provision found to be illegal or unenforceable and such
          Dispute shall be decided by a court of competent jurisdiction within the courts listed or jurisdiction above,
          and the Parties agree to submit to the personal jurisdiction of that court.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <h5 className="my-3 my-md-5 animated-fade-slow animated-fade-start transition-delay-medium">
          For European Union (EU) Users
        </h5>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          If You are a European Union consumer, You will benefit from any mandatory provisions of the law of the country
          in which You are resident in.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <h5 className="my-3 my-md-5 animated-fade-slow animated-fade-start transition-delay-medium">
          United States Legal Compliance
        </h5>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          You represent and warrant that (i) You are not located in a country that is subject to the United States
          government embargo, or that has been designated by the United States government as a &quot;terrorist
          supporting&quot; country, and (ii) You are not listed on any United States government list of prohibited or
          restricted parties. Please read our <Link href="/disclaimer">Disclaimer</Link> for more details.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <h5 className="my-3 my-md-5 animated-fade-slow animated-fade-start transition-delay-medium">
          Severability and Waiver
        </h5>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <h6 className="animated-fade-slow animated-fade-start transition-delay-medium">Severability</h6>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          If any provision of these Terms is held to be unenforceable or invalid, such provision will be amended and
          interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable
          law and the remaining provisions will continue in full force and effect.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <h6 className="animated-fade-slow animated-fade-start transition-delay-medium">Waiver</h6>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          Except as provided herein, the failure to exercise a right or to require performance of an obligation under
          these Terms shall not affect a party&apos;s ability to exercise such right or require such performance at any
          time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <h5 className="my-3 my-md-5 animated-fade-slow animated-fade-start transition-delay-medium">
          Translation Interpretation
        </h5>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          These Terms and Conditions may have been translated if We have made them available to You on our Service. You
          agree that the original English text shall prevail in the case of a dispute.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <h5 className="my-3 my-md-5 animated-fade-slow animated-fade-start transition-delay-medium">Indemnification</h5>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our
          respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or
          demand, including reasonable attorneys&apos; fees and expenses, made by third party due to or arising out of:
          (1) use of the Site, (2) breach of these Terms of Use, (3) any breach of Your representations and warranties
          set forth in these Terms of Use, (4) Your violation of the rights of a third party, including but not limited
          to intellectual property rights, or (5) any overt harmful act toward any other use of the Site, the App and
          the Smart Contracts with whom You connected via the Site, the App and the Smart Contracts. Notwithstanding the
          foregoing, we reserve the right, at Your expense, to assume the exclusive defense and control of any matter
          for which You are required to indemnify us, and You agree to cooperate, at Your expense, with our defense of
          such claims. We will use reasonable efforts to notify You of any such claim, action or proceeding which is
          subject to this indemnification upon becoming aware of it.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <h5 className="my-3 my-md-5 animated-fade-slow animated-fade-start transition-delay-medium">Privacy Policy</h5>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          Our <Link href="/privacy-policy">Privacy Policy</Link> describes the ways we collect, use, store and disclose
          Your personal information, and is hereby incorporated by this reference into these Terms. You agree to the
          collection, use, storage, and disclosure of Your data in accordance with our Privacy Policy.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <h5 className="my-3 my-md-5 animated-fade-slow animated-fade-start transition-delay-medium">
          Changes to These Terms and Conditions
        </h5>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          Supplemental terms and conditions or documents that may be posted on the Site, the App, and the Smart
          Contracts from time to time are hereby expressly incorporated herein by reference. We reserve the right, in
          our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason. We
          will alert You of any changes by updating the &quot;Last Updated&quot; date of these Terms of Use, and You
          waive any right to receive specific notice of each such change. It is Your responsibility to periodically
          review these Terms of Use to stay informed of updates. You will be subject to and will be deemed to have been
          made aware of and to have accepted, the changes in any revised Terms of Use by Your continued use of the Site,
          the App, and the Smart Contracts after the date such revised Terms of Use are posted.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is
          material We will make reasonable efforts to provide at least 30 days&apos; notice prior to any new terms
          taking effect. What constitutes a material change will be determined at Our sole discretion.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          By continuing to access or use Our Service after those revisions become effective, You agree to be bound by
          the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the
          Application.
        </p>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <h5 className="my-3 my-md-5 animated-fade-slow animated-fade-start transition-delay-medium">Contact Us</h5>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <p className="animated-fade-slow animated-fade-start transition-delay-medium">
          If You have any questions about these Terms and Conditions, You can contact us at{' '}
          <a href="mailto: team@niftyleague.com">team@niftyleague.com</a> or by reaching out to one of our team members
          on{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/niftyleague">
            Discord
          </a>
          .
        </p>
      </AnimatedWrapper>
    </Container>
  </Layout>
);

export default memo(ToS);
