import logo from './logo.svg';
import "tailwindcss/dist/base.css";
import './App.css';
import React, {
  useRef,
  userCount,
  transactionCount,
} from "react";

import {
  FiSmartphone,
  FiClock,
  FiCheck,
  FiUsers,
  FiShield,
  FiShoppingCart,
  FiPhoneCall,
  FiBriefcase,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiMail
} from "react-icons/fi";

import tw, { styled } from "twin.macro";

import {
  FeatureCard, FooterHead, FooterText, Heading, FooterIconContainer,
  PaymentMethodCard, PaymentMethodCardContainer, SubHeading, TestimonialCard,
  WAWCard,
  Container,
  ButtonPrimary,
  LinkButton,
  SecondaryButton
} from "./components/";

import { PlansSection } from './sections';

const FlexBetween = tw.div`flex justify-evenly`;

export default function App() {
  const history = window.history;
  const plansRef = useRef();
  const aboutRef = useRef();
  const testimoRef = useRef();
  const paymentsRef = useRef();
  const contactRef = useRef();
  const featuresRef = useRef();

  return (
    <div tw="bg-white">
      <Container tw="py-8 hidden md:block">
        <div tw="flex justify-between">
          <div tw="text-xl w-64">
            <img src="https://firebasestorage.googleapis.com/v0/b/mf-optimo.appspot.com/o/logo-wide.png?alt=media&token=553c3ab7-8841-49ae-8477-ba1c907d5c40" alt="optimo-logo-wide" />
          </div>
          <FlexBetween tw="gap-6">
            <LinkButton to={aboutRef}>About Us</LinkButton>
            <LinkButton to={plansRef}>Plans</LinkButton>
            <LinkButton to={featuresRef}>Features</LinkButton>
            <LinkButton to={testimoRef}>Testimonials</LinkButton>
            <LinkButton to={paymentsRef}>Payment Methods</LinkButton>
            <LinkButton to={contactRef}>Contact</LinkButton>
            <div>
              <ButtonPrimary className="" onClick={() => history.push('/login')}>Sign up</ButtonPrimary>
              <ButtonPrimary className="" onClick={() => history.push('/login')}>Login</ButtonPrimary>
            </div>
          </FlexBetween>
        </div>
      </Container>
      <Container tw="py-8 block md:hidden">
        <div tw="flex justify-between">
          <div tw="text-xl px-2 py-2 w-64">
            <img src="https://firebasestorage.googleapis.com/v0/b/mf-optimo.appspot.com/o/logo-wide.png?alt=media&token=553c3ab7-8841-49ae-8477-ba1c907d5c40" alt="optimo-logo-wide" />
          </div>
        </div>
      </Container>
      <div tw="bg-gradient-to-l from-white rounded-lg">
        <Container tw="p-4">
          <div tw="grid grid-cols-1 lg:grid-cols-2">
            <div tw="py-32 xl:py-64">
              <SubHeading>Often Have Small</SubHeading>
              <Heading tw="mb-4">Invest Your Money For Future</Heading>
              <p tw="text-justify text-lg text-gray-600 font-medium">“While saving involves putting some of today's money away for tomorrow, investment includes bringing your money to invest in order to appropriately generate a greater return over time. ”</p>
              <div tw="flex mt-4">
                <ButtonPrimary className="animate-pulse" onClick={() => history.push('/app')}>Start Now</ButtonPrimary>
                <SecondaryButton>
                  View Plans
                </SecondaryButton>
              </div>
            </div>
            <img alt="" src="https://firebasestorage.googleapis.com/v0/b/mf-optimo.appspot.com/o/Group%201041.png?alt=media&token=9a8c41bb-a191-4d30-b7e6-950ae9f7db49" />
            {/* <div tw="mt-4 ">
            </div> */}
          </div>
        </Container>
      </div>
      <div tw="bg-gradient-to-l from-white rounded-lg py-16 md:text-center" ref={aboutRef}>
        <Container >
          <div>
            <SubHeading>Who are we</SubHeading>
            <Heading tw="mb-4">Welcome to Optimo Investments</Heading>
            <p tw="mt-3 text-justify md:text-center text-lg text-gray-600 md:px-32 font-medium">At Optimo Investment, we believe in assisting people to achieve their long-term investment ambitions. We are dedicated to helping you to achieve your trading and investor strategy, if you are new to trading or a senior expert, with a comprehensive range of strong trading technology, online brokerage services,trading education and we are always attempting to change the traditional smart trading business is to make currency institutions accessible to all, anywhere.</p>
          </div>
          <div tw="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 my-16 gap-4 w-10/12 mx-auto">
            <WAWCard
              title="Traders"
              description="Providing best customer service is our primary value and always keeping touch with them."
              Icon={FiUsers}
              bgColor="yellow"
            />
            <WAWCard
              title="Reliability"
              description="Since being a trustworthy merchant in digital flat form, We go above and beyond to meet the demands of our clientele."
              Icon={FiShield}
              bgColor="blue"
            />
            <WAWCard
              title="Simplicity"
              description="With our simple trading platform, anyone can become a trader. Optimo Investment is accessible on all relevant platforms, including the following: Web, Windows, MacOS, iPhone, iPad and Android."
              Icon={FiSmartphone}
              bgColor="red"
            />
            <WAWCard
              title="Speed"
              description="We provide fastest trading using cutting-edge technologies. No delays in order executions and lags in user interface."
              Icon={FiClock}
              bgColor="green"
            />
          </div>
          <ButtonPrimary>
            Get More
          </ButtonPrimary>
        </Container>
      </div>
      {/* bg-blue-900 hover:bg-gradient-to-l hover:from-blue-800 */}

      <PlansSection ref={plansRef} />

      <div ref={featuresRef} tw="bg-gradient-to-r from-white via-white to-white rounded-lg py-16">
        <Container>
          <div tw="text-center">
            <SubHeading>Services</SubHeading>
            <Heading>Our Features</Heading>
            <p tw="text-justify md:text-center text-lg text-gray-600 md:px-32 font-medium">At Optimo Investment, we believe in assisting people to achieve their long-term investment ambitions. We are dedicated to helping you to achieve your trading and investor strategy, if you are new to trading or a senior expert, with a comprehensive range of strong trading technology, online brokerage services, and trading education.
              Inhere we are providing opportunity to join our future investment plan</p>

          </div>
          <div tw="grid grid-cols-2 md:grid-cols-3 mt-8 gap-4 w-9/12 mx-auto">
            <FeatureCard
              Icon={FiCheck}
              feature="We're Certified"
              description="Lorem ipsum dolor sit amet sed consectetur adipiscing"
              bgColor="blue"
            />
            <FeatureCard
              Icon={FiShield}
              feature="We're Secure"
              description="Lorem ipsum dolor sit amet sed consectetur adipiscing"
              bgColor="blue"
            />
            <FeatureCard
              Icon={FiCheck}
              feature="We're Profitable"
              description="Lorem ipsum dolor sit amet sed consectetur adipiscing"
              bgColor="orange"
            />
            <FeatureCard
              Icon={FiShoppingCart}
              feature="We Accept Crypto"
              description="Lorem ipsum dolor sit amet sed consectetur adipiscing"
              bgColor="orange"
            />
            <FeatureCard
              Icon={FiPhoneCall}
              feature="Best Support"
              description="Lorem ipsum dolor sit amet sed consectetur adipiscing"
              bgColor="teal"
            />
            <FeatureCard
              Icon={FiBriefcase}
              feature="We're Global"
              description="Lorem ipsum dolor sit amet sed consectetur adipiscing"
              bgColor="red"
            />
          </div>
        </Container>
      </div>
      <div ref={paymentsRef} tw="bg-gradient-to-r from-white via-white to-white rounded-lg py-16">
        <Container>
          <div tw="text-center">
            <SubHeading>Statistics</SubHeading>
            <Heading>What's Happening Now</Heading>
          </div>
          <div tw="grid grid-cols-2 mt-8 gap-4">
            <div tw="rounded-lg p-8 bg-white shadow-lg hover:shadow-md">
              <p>Active Users</p>
              <p tw="text-2xl font-bold">{userCount}</p>
            </div>
            <div tw="rounded-lg p-8 bg-white shadow-lg hover:shadow-md">
              <p>Current Transactions</p>
              <p tw="text-2xl font-bold">{transactionCount}</p>
            </div>
          </div>
        </Container>
      </div>
      <div ref={testimoRef} tw="bg-gradient-to-r from-white via-white to-white rounded-lg py-32">
        <Container tw="px-8 bg-blue-900 text-white rounded-lg">
          <div tw="py-16 lg:py-8 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
            <div tw="lg:py-32">
              <h2 tw="font-bold text-4xl">What Our Clients Say</h2>
              <p tw="text-justify text-lg">Put your investing ideas into action with full range of investments. Duis auteir ure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Enjoy real benefits and rewards on your accrue investing.</p>
              <div tw="flex mt-4">
                <ButtonPrimary tw="transition duration-200 animate-pulse border border-white hover:bg-white hover:text-blue-900 hover:shadow-lg" onClick={() => history.push('/app')}>Start your joruney today!</ButtonPrimary>
              </div>
            </div>
            <div tw="overflow-y-scroll max-w-lg ml-auto" className="no-scroll-bar">
              <TestimonialCard
                clientImgSrc="https://api.multiavatar.com/name.png"
                clientName="Liberty Berge"
                clientPosition="CEO of Apple"
                content="Lorem ipsum dolor sit amet sed consectetur adipiscing"
              />
              <TestimonialCard
                clientImgSrc="https://api.multiavatar.com/Starcrasher.png"
                clientName="Liberty Berge"
                clientPosition="CEO of Apple"
                content="Lorem ipsum dolor sit amet sed consectetur adipiscing"
              />
              <TestimonialCard
                clientImgSrc="https://api.multiavatar.com/Starcrasher.png"
                clientName="Liberty Berge"
                clientPosition="CEO of Apple"
                content="Lorem ipsum dolor sit amet sed consectetur adipiscing"
              />
              <TestimonialCard
                clientImgSrc="https://api.multiavatar.com/Starcrasher.png"
                clientName="Liberty Berge"
                clientPosition="CEO of Apple"
                content="Lorem ipsum dolor sit amet sed consectetur adipiscing"
              />
              <TestimonialCard
                clientImgSrc="https://api.multiavatar.com/Starcrasher.png"
                clientName="Liberty Berge"
                clientPosition="CEO of Apple"
                content="Lorem ipsum dolor sit amet sed consectetur adipiscing"
              />
            </div>
          </div>
        </Container>
      </div>
      {/* <div>
      <Container>
        <div tw="grid grid-cols-2">
          <div>
            <p>FAQ Section</p>
            <h2>How can we help you?</h2>
            <p>Our core values are at the heart of all that we do. They are integrated into our daily work lives and help us to remember our customers always comes first, the last thank you should always come from us.</p>
          </div>
          <div>
            Faq
          </div>
        </div>
      </Container>
    </div> */}
      <div ref={paymentsRef} tw="bg-gradient-to-r from-white via-white to-white rounded-lg py-32">
        <Container>
          <div tw="text-center">
            <SubHeading>Payment Methods</SubHeading>
            <Heading>Accepted Payment Methods</Heading>
          </div>
          <PaymentMethodCardContainer>
            <PaymentMethodCard
              imageSrc="https://firebasestorage.googleapis.com/v0/b/mf-optimo.appspot.com/o/Bitcoin-Logo.wine.png?alt=media&token=ffbdbe09-0caa-474c-af01-2a1e598d1896"
              paymentMethodName="btc"
            />
            <PaymentMethodCard
              imageSrc="https://firebasestorage.googleapis.com/v0/b/mf-optimo.appspot.com/o/tether-usdt-logo.png?alt=media&token=aecbda16-142c-4407-a10e-1eeb21053621"
              paymentMethodName="btc"
            />
            <PaymentMethodCard
              imageSrc="https://firebasestorage.googleapis.com/v0/b/mf-optimo.appspot.com/o/58482363cef1014c0b5e49c1.png?alt=media&token=fb1acb84-bf01-4b10-9c4e-47c92032314d"
              paymentMethodName="visa"
            />
            <PaymentMethodCard
              imageSrc="https://firebasestorage.googleapis.com/v0/b/mf-optimo.appspot.com/o/Maestro-logo.png?alt=media&token=618f9059-2a74-47e6-a407-9401c8f22435"
              paymentMethodName="maestro"
            />
            <PaymentMethodCard
              imageSrc="https://firebasestorage.googleapis.com/v0/b/mf-optimo.appspot.com/o/MasterCard_early_1990s_logo.svg.png?alt=media&token=961ce757-5d7d-4e37-9337-615a82dd22d2"
              paymentMethodName="master card"
            />
            <PaymentMethodCard
              imageSrc="https://firebasestorage.googleapis.com/v0/b/mf-optimo.appspot.com/o/american-express-logo-png-81-images-amex-logo-png-1920_1059.png?alt=media&token=dbef2e6e-f6bd-4dcb-92c9-f55b0cf3abb3"
              paymentMethodName="american express"
            />
          </PaymentMethodCardContainer>
        </Container>
      </div>
      <div ref={contactRef} tw="bg-gradient-to-r from-white via-white to-white rounded-lg pb-8 pt-16">
        <Container>
          <div tw="grid grid-cols-2 md:grid-cols-6 mt-8 gap-8">
            <div tw="flex flex-col col-span-2">
              <img src="https://firebasestorage.googleapis.com/v0/b/mf-optimo.appspot.com/o/logo-wide.png?alt=media&token=553c3ab7-8841-49ae-8477-ba1c907d5c40" alt="optimo-logo-wide" width="80%" />

              <div tw="flex items-center mb-4 ml-4">
                <FooterIconContainer Icon={FiMail} />
                <span tw="my-1 px-4 py-3 opacity-75">info@optimoinvestments.com</span>
              </div>

              <div tw="flex gap-4 ml-4">
                <a href="#"><FooterIconContainer Icon={FiFacebook} /></a>
                <a href="#"><FooterIconContainer Icon={FiTwitter} /></a>
                <a href="#"><FooterIconContainer Icon={FiInstagram} /></a>
                <a href="#"><FooterIconContainer Icon={FiLinkedin} /></a>
              </div>
            </div>
            <div tw="flex flex-col items-start">
              <FooterHead>
                Pages
              </FooterHead>

              <LinkButton to={aboutRef}>
                <FooterText>About Us</FooterText>
              </LinkButton>
              <LinkButton to={plansRef}>
                <FooterText>Plans</FooterText>
              </LinkButton>
              <LinkButton to={featuresRef}>
                <FooterText>Features</FooterText>
              </LinkButton>
              <LinkButton to={testimoRef}>
                <FooterText>Testimonials</FooterText>
              </LinkButton>
              <LinkButton to={paymentsRef}>
                <FooterText>Payment Methods</FooterText>
              </LinkButton>
              <LinkButton to={contactRef}>
                <FooterText>Contact</FooterText>
              </LinkButton>
            </div>

            <div tw="flex flex-col">
              <FooterHead>
                Included Documents
              </FooterHead>

              <FooterText>
                <a href="https://firebasestorage.googleapis.com/v0/b/mf-optimo.appspot.com/o/Optimo%20Terms.pdf?alt=media&token=26c49421-1798-4ec4-989e-eb8b88e4ce6f">
                  Terms and Condtions
                </a>
              </FooterText>
              <FooterText>
                <a href="https://firebasestorage.googleapis.com/v0/b/mf-optimo.appspot.com/o/Optimo%20Privacy.pdf?alt=media&token=abc5bd77-bba9-41e9-8f58-6ba57eac5ca2">
                  Privacy Policy
                </a>
              </FooterText>
            </div>
            <div tw="">
              <FooterHead>
                UK Branch
              </FooterHead>
              <FooterText>+44 74 183 57637</FooterText>
              <FooterText>International House</FooterText>
              <FooterText>12 Constance Street</FooterText>
              <FooterText>London</FooterText>
              <FooterText>E16 2DQ</FooterText>
            </div>
            <div tw="">
              <FooterHead>
                USA Branch
              </FooterHead>
              <FooterText>312 W.</FooterText>
              <FooterText>2nd St #1232 Casper</FooterText>
              <FooterText>WY 82601</FooterText>
            </div>

          </div>
          <div tw="mx-auto text-center">
          </div>
        </Container>
        <div tw="text-center font-medium">&copy; All rights reserved.
        </div>
      </div>
    </div >
  );
}