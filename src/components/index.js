import React from "react";
import tw from "twin.macro";

export const Heading = tw.h2`
	font-bold text-4xl font-heading mb-16
`;

export const SubHeading = tw.h4`
	font-medium text-blue-500 font-normal
`;

export const FeatureCard = ({
	bgColor,
	Icon,
	feature = "",
	description = "Lorem ipsum dolor sit amet sed consectetur adipiscing"
}) => {
	const colors = {
		"blue": tw`bg-blue-600`,
		"orange": tw`bg-orange-600`,
		"teal": tw`bg-teal-600`,
		"red": tw`bg-red-600`
	}

	return <div tw="rounded-lg p-8 bg-white shadow-lg hover:shadow-md max-w-sm">
		<div tw="rounded-lg shadow-xl w-16 h-16 flex p-4 animate-pulse" css={colors[bgColor]}>
			<Icon size="32" color="white" />
		</div>
		<h3 tw="text-xl font-bold mt-8">
			{feature}
		</h3>
		<p tw="text-lg text-gray-600 mt-2">
			{description}
		</p>
	</div>
}

export const TestimonialCard = ({ clientImgSrc, clientName, clientPosition, content }) => {
	// NOTE
	// To reduce the number of divs, start using grid instead of flex
	return (
		<div tw="flex gap-4 m-2 p-4 rounded-lg shadow-lg bg-white text-black">
			<img alt={clientName} src={clientImgSrc} tw="rounded-lg w-16 h-16" />
			<div tw="flex flex-col">
				<div tw="flex gap-2 items-baseline">
					<span tw="font-bold text-gray-500">
						{clientName}
					</span>
					<span tw="font-thin text-sm text-blue-500">
						{clientPosition}
					</span>
				</div>
				<p>"{content}"</p>
			</div>
		</div>
	)
}

export const PaymentMethodCardContainer = tw.div`
	flex flex-wrap gap-5 justify-center
`;

export const PaymentMethodCard = ({ imageSrc, paymentMethodName }) => {
	return <div tw="rounded-lg p-8 bg-white shadow-lg hover:shadow-md max-h-40 max-w-96">
		<img tw="animate-pulse h-full m-auto"
			src={imageSrc} alt={paymentMethodName} />
	</div>
}