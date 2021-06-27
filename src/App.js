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
  FiBriefcase
} from "react-icons/fi";

import tw from "twin.macro";

import { FeatureCard, Heading, PaymentMethodCard, PaymentMethodCardContainer, SubHeading, TestimonialCard } from "./components/";

const Container = ({ children, className }) => {
  return <div className={`container ${className}`} tw="mx-auto p-4">{children}</div>
}

const FlexBetween = tw.div`flex justify-evenly`;

const ButtonPrimary = tw.button`
  m-1 px-4 py-3 bg-blue-900 text-white rounded-md
`;

const LinkButton = ({ children, className, to }) => {
  const scrollTo = () => {
    if (to) {
      to.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  return <button onClick={scrollTo} className={className} tw="my-1 px-4 py-3">{children}</button>
}

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
          <FlexBetween>
            <LinkButton to={aboutRef}>About Us</LinkButton>
            <LinkButton to={plansRef}>Plans</LinkButton>
            <LinkButton to={featuresRef}>Features</LinkButton>
            <LinkButton to={testimoRef}>Testimonials</LinkButton>
            <LinkButton to={paymentsRef}>Payment Methods</LinkButton>
            <LinkButton to={contactRef}>Contact</LinkButton>
            <ButtonPrimary className="" onClick={() => history.push('/login')}>Sign up</ButtonPrimary>
            <ButtonPrimary className="" onClick={() => history.push('/login')}>Login</ButtonPrimary>
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
      <div tw="bg-gradient-to-l from-white rounded-lg pb-32 pt-16 py-32">
        <Container tw="p-4">
          <div tw="grid grid-cols-1 lg:grid-cols-2">
            <div tw="py-32 xl:py-64">
              <p tw="text-blue-900 text-lg">Often Have Small</p>
              <h2 tw="font-bold text-4xl">Invest Your Money For Future</h2>
              <p tw="text-justify text-lg text-gray-600">“While saving involves putting some of today's money away for tomorrow, investment includes bringing your money to invest in order to appropriately generate a greater return over time. ”</p>
              <div tw="flex mt-4">
                <ButtonPrimary className="animate-pulse" onClick={() => history.push('/app')}>Start Now</ButtonPrimary>
                <LinkButton to={plansRef}>View Plans</LinkButton>
              </div>
            </div>
            <div tw="mt-4 ">
              <img alt="" src="https://firebasestorage.googleapis.com/v0/b/mf-optimo.appspot.com/o/Group%201041.png?alt=media&token=9a8c41bb-a191-4d30-b7e6-950ae9f7db49" />
            </div>
          </div>
        </Container>
      </div>
      <div tw="bg-gradient-to-l from-white rounded-lg py-48" ref={aboutRef}>
        <Container >
          <div tw="md:text-center">
            <SubHeading>Who are we</SubHeading>
            <Heading>Welcome to Optimo Investments</Heading>
            <p tw="mt-3 text-justify md:text-center text-lg text-gray-600 md:px-32">At Optimo Investment, we believe in assisting people to achieve their long-term investment ambitions. We are dedicated to helping you to achieve your trading and investor strategy, if you are new to trading or a senior expert, with a comprehensive range of strong trading technology, online brokerage services,trading education and we are always attempting to change the traditional smart trading business is to make currency institutions accessible to all, anywhere.</p>
          </div>
          <div tw="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 mt-16 gap-4">
            <div tw="rounded-lg p-8 text-center hover:shadow-lg bg-white">
              <div tw="mx-auto animate-pulse rounded-lg shadow-xl w-32 h-32 flex p-8 bg-yellow-700">
                <FiUsers size="64" color="white" />
              </div>
              <h3 tw="text-xl font-bold mt-8">Traders</h3>
              <p tw="text-lg text-gray-600">Providing best customer service is our primary value and always keeping touch with them.</p>
            </div>
            <div tw="rounded-lg p-8 text-center hover:shadow-lg bg-white">
              <div tw="mx-auto animate-pulse rounded-lg shadow-xl w-32 h-32 flex p-8 bg-blue-700">
                <FiShield size="64" color="white" />
              </div>
              <h3 tw="text-xl font-bold mt-8">Reliability</h3>
              <p tw="text-lg text-gray-600">Since being a trustworthy merchant in digital flat form, We go above and beyond to meet the demands of our clientele.</p>
            </div>
            <div tw="rounded-lg p-8 text-center hover:shadow-lg bg-white">
              <div tw="mx-auto animate-pulse rounded-lg shadow-xl w-32 h-32 flex p-8 bg-red-600">
                <FiSmartphone size="64" color="white" />
              </div>
              <h3 tw="text-xl font-bold mt-8">Simplicity</h3>
              <p tw="text-lg text-gray-600">With our simple trading platform, anyone can become a trader. Optimo Investment is accessible on all relevant platforms, including the following: Web, Windows, MacOS, iPhone, iPad and Android.</p>
            </div>
            <div tw="rounded-lg p-8 text-center hover:shadow-lg bg-white">
              <div tw="mx-auto animate-pulse rounded-lg shadow-xl w-32 h-32 flex p-8 bg-green-600">
                <FiClock size="64" color="white" />
              </div>
              <h3 tw="text-xl font-bold mt-8">Speed</h3>
              <p tw="text-lg text-gray-600">We provide fastest trading using cutting-edge technologies. No delays in order executions and lags in user interface.</p>
            </div>
          </div>
        </Container>
      </div>
      <div ref={plansRef} tw="text-white rounded-lg py-32 bg-blue-900 hover:bg-gradient-to-l hover:from-blue-800">
        <Container >
          <div tw="text-center">
            <p tw="text-lg">Out Plans</p>
            <h1 tw="font-bold text-4xl">Our Investment Plans</h1>
          </div>

          <div tw="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-16 gap-4">
            {/* {error && ''}
          {loading && ''}
          {value && <div className="grid md:grid-cols-3 grid-cols-1">
            {value.docs.map((doc) => (
              <div className="rounded-lg shadow-lg bg-white text-gray-600 md:w-64 w-max">
                <p className="text-blue-900 font-bold m-8">{doc.data()['name']}</p>
                <p className="border-b border-gray-200 py-2 px-8">{doc.data()['min_invest']} Minimum Investment</p>
                <p className="border-b border-gray-200 py-2 px-8">{doc.data()['duration']} Months</p>
                <p className="border-b border-gray-200 py-2 px-8">{doc.data()['interest']}% Interest</p>
                <p className="border-gray-200 py-2 px-8">{doc.data()['ref_bonus']}% Refferal Bonus</p>
                <ButtonPrimary onClick={() => history.push('/app')} className="m-4">Invest Now</ButtonPrimary>
              </div>
            ))}
          </div>} */}
          </div>
        </Container>
      </div>
      <div ref={featuresRef} tw="bg-gradient-to-r from-white via-white to-white rounded-lg py-32">
        <Container>
          <div tw="text-center">
            <SubHeading>Services</SubHeading>
            <Heading>Our Features</Heading>
            <p tw="text-justify md:text-center text-lg text-gray-600 md:px-32">At Optimo Investment, we believe in assisting people to achieve their long-term investment ambitions. We are dedicated to helping you to achieve your trading and investor strategy, if you are new to trading or a senior expert, with a comprehensive range of strong trading technology, online brokerage services, and trading education.
              Inhere we are providing opportunity to join our future investment plan</p>

          </div>
          <div tw="grid grid-cols-2 md:grid-cols-3 mt-8 gap-4 w-10/12 mx-auto">
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
      <div ref={paymentsRef} tw="bg-gradient-to-r from-white via-white to-white rounded-lg py-32">
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
            <div tw="overflow-y-scroll max-w-lg ml-auto">
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
          <div tw="grid grid-cols-2 md:grid-cols-4 mt-8 gap-8">
            <div tw="col-span-2">
              <img src="https://firebasestorage.googleapis.com/v0/b/mf-optimo.appspot.com/o/logo-wide.png?alt=media&token=553c3ab7-8841-49ae-8477-ba1c907d5c40" alt="optimo-logo-wide" />
              <p tw="my-1 px-4 py-3">info@optimoinvestments.com</p>
            </div>
            <div tw="">
              <h6>UK Branch</h6>
              <p tw="">+44 74 183 57637</p>
              <p tw="">International House,</p>
              <p tw="">12 Constance Street</p>
              <p tw="">London</p>
              <p tw="">E16 2DQ</p>
            </div>
            <div tw="">
              <h6>USA Branch</h6>
              <p tw="">312 W.</p>
              <p tw="">2nd St #1232 Casper</p>
              <p tw="">WY 82601</p>
            </div>

          </div>
          <div tw="mx-auto text-center">
            <LinkButton to={aboutRef}>About Us</LinkButton>
            <LinkButton to={plansRef}>Plans</LinkButton>
            <LinkButton to={featuresRef}>Features</LinkButton>
            <LinkButton to={testimoRef}>Testimonials</LinkButton>
            <LinkButton to={paymentsRef}>Payment Methods</LinkButton>
            <LinkButton to={contactRef}>Contact</LinkButton>
          </div>
        </Container>
        <div tw="text-center">&copy; All rights reserved.
          <a href="https://firebasestorage.googleapis.com/v0/b/mf-optimo.appspot.com/o/Optimo%20Terms.pdf?alt=media&token=26c49421-1798-4ec4-989e-eb8b88e4ce6f"><p>Terms and Condtions</p></a>
          <a href="https://firebasestorage.googleapis.com/v0/b/mf-optimo.appspot.com/o/Optimo%20Privacy.pdf?alt=media&token=abc5bd77-bba9-41e9-8f58-6ba57eac5ca2"><p>Privacy Policy</p></a>
        </div>
      </div>
    </div>
  );
}