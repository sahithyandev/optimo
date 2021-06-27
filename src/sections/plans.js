import tw, { styled } from "twin.macro";

import {
	Container,
	Heading,
	SubHeading,
	ButtonPrimary
} from "./../components/index";

const PLANS = [
	{
		planName: "silver",
		features: [
			"Up to 5% for 20 Hourly",
			"Compound Available",
			"Down to 5% for 20 Hourly",
			"Principal Return",
			"Up to 5% for 20 Hourly"
		],
		readMoreLink: "#"
	},
	{
		planName: "bronze",
		features: [
			"Up to 5% Daily for 5 Days",
			"Min deposit: $2020",
			"Max deposit: $101010",
			"Principal Return",
			"Compound Available"
		],
		readMoreLink: "#"
	},
	{
		planName: "copper",
		features: [
			"Up to 3% Hourly for 10 Hourly",
			"Min deposit: $300",
			"Max deposit: $3000",
			"Principal Not Return",
			"Compound Not Available"
		],
		readMoreLink: "#"
	},
	{
		planName: "gold",
		features: [
			"Up to 7% for 30 days",
			"Min deposit: $500",
			"Max deposit: $3000",
			"Principal Not Return",
			"Compound Available"
		],
		readMoreLink: "#"
	},
]

const PlanCard = ({
	planName,
	features,
	readMoreLink
}) => {
	const horizontalPadding = tw`px-6`

	return <div tw="flex flex-col bg-white shadow-lg rounded-xl py-6 pb-12">
		<h5 tw="font-medium mb-6 text-3xl" css={horizontalPadding}>
			<span tw="capitalize text-primary-500">{planName}</span> Plan
		</h5>

		<div tw="flex flex-col text-xl mb-6 opacity-75">
			{features.map((feature, i) => {
				return (
					<>
						<span css={horizontalPadding} tw="py-2">{feature}</span>
						{i == features.length - 1 ? null : <hr />}
					</>
				);
			})}
		</div>

		<div css={horizontalPadding}>
			<ButtonPrimary as="a" href={readMoreLink} tw="py-4 px-6 m-0 justify-self-end">
				Read More
			</ButtonPrimary>
		</div>
	</div>
}

const BackgroundBand = tw.div`w-full h-80 bg-primary-500 mt-48`

const PlansCardContainer = styled.div`
	${tw`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-2xl inset-x-0 mx-auto px-10 absolute`}
	z-index: 1;
`;

export const PlansSection = () => {
	return <Container tw="relative">
		<div tw="text-center">
			<SubHeading>Our Plans</SubHeading>
			<Heading>Our Investment Plans</Heading>
		</div>

		<PlansCardContainer>
			{PLANS.map(plan => {
				return <PlanCard {...plan} />
			})}
		</PlansCardContainer>

		<BackgroundBand />
	</Container>
}