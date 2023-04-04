import { FlightsPageContainer } from "../../containers/flights-page-container";
import { getFlights } from "../../services/flights";

function FlightsPage() {
  return <FlightsPageContainer />;
}


export const flightPageLoader = async ({params}) => {
  return getFlights(params.from, params.to);
};


export { FlightsPage };
