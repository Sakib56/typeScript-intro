import { useQuery } from "@apollo/client";
import { GET_SPACEX_DATA } from "../../graphql/queries";
const SpaceXData = () => {
    const { loading, error, data } = useQuery(GET_SPACEX_DATA);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    const histories = data?.histories

    return (
        <div>
            {
                histories?.map((history)=>(
                    <div key={history?.id}>
                        <p>{history?.title}</p>
                        <p>{history?.details}</p>
                        <p>{history?.__typename}</p>
                        <p>{history?.event_date_utc}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default SpaceXData;