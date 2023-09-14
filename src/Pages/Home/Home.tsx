import Card from "../../Components/Card";
import bikesData from "../../Data/Bikes";



export type BikesType = {
    id?: number;
    title: string;
    price: number;
    image: string;
};

const Home = () => {
    return (
        <div className="py-10">
            <h1 className="text-center font-bold md:text-2xl">Welcome to Bikes Bd shop</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {bikesData.map((bike) => (
                    <Card key={bike.id} {...bike} />
                ))}
            </div>
        </div>
    );
};

export default Home;