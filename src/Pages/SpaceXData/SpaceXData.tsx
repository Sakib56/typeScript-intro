import { useQuery } from "@apollo/client";
import { GET_SPACEX_DATA } from "../../graphql/queries";

const SpaceXData = () => {
    const { loading, error, data } = useQuery(GET_SPACEX_DATA);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <div>
            {
                data?.histories?.map((history: any)=>(
                    <div key={history.id}>
                        <p>{history.title}</p>
                        <p>{history.details}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default SpaceXData;