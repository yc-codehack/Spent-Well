import { FC, ReactNode } from "react";

// Define a type for provider components
type ProviderType = FC<{ children?: ReactNode }>;

const providers: ProviderType[] = [];

const combineProvider = (providers: ProviderType[]) => {
	// Initial AccumulatedProviders should be a functional component
	const initialAccumulatedProviders: ProviderType = ({ children }) => (
		<>{children}</>
	);

	return providers.reduce(
		(
			AccumulatedProviders: ProviderType,
			CurrentProvider: ProviderType
		): ProviderType => {
			return ({ children }) => (
				<AccumulatedProviders>
					<CurrentProvider>{children}</CurrentProvider>
				</AccumulatedProviders>
			);
		},
		initialAccumulatedProviders
	);
};

export const GlobalProvider: FC = combineProvider(providers);
