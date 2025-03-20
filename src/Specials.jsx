import LinkButton from "./LinkButton";
import Card from "./Card";
import salad from "./assets/salad.png"
import bruchetta from "./assets/bruchetta.png"
import dessert from "./assets/lemon-dessert.png"

function Specials() {
    const specials = [
        {
            name: "Salad",
            value: "$15.99",
            description: "Random information describing the dish and how good it is. Random information describing the dish and how good it is. Random information describing the dish and how good it is.",
            image: salad,
        },
        {
            name: "Bruchetta",
            value: "$8.99",
            description: "Random information describing the dish and how good it is. Random information describing the dish and how good it is. Random information describing the dish and how good it is.",
            image: bruchetta,
        },
        {
            name: "Lemon Dessert",
            value: "$4.99",
            description: "Random information describing the dish and how good it is. Random information describing the dish and how good it is. Random information describing the dish and how good it is.",
            image: dessert,
        },
    ]

    return (
        <>
            <div className="title-and-button-container">
                <h1>Current Specials</h1>
                <LinkButton to={"/Order"} buttonText={"Menu"}></LinkButton>
            </div>
            <div className="cards-container">
                {
                
                specials.map((special) =>(
                    <Card data={special} styling="card"></Card>  
                ))}
            </div>
        </>
    )
}

export default Specials;