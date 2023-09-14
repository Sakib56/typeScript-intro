import { BikesType } from "../Pages/Home/Home";


const Card = ({
    image,
    price,
    title,
}: BikesType) => {
    return (
        <div className="card card-compact w-96 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="card-title">{price} BDT</p>
                <button className="card-title btn btn-neutral">View Details</button>
            </div>
        </div>
    );
};

export default Card;