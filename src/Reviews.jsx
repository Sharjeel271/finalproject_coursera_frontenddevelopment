import Card from "./Card";
import React from "react";

function Reviews() {
    const reviews = [
        {
            name: "Alex",
            value: "5/5",
            description: "Amazing food with a cosy atmosphere",
        },
        {
            name: "Mark",
            value: "4/5",
            description: "Decent food but delivery took too long",
        },
        {
            name: "Liz",
            value: "5/5",
            description: "Great place to eat but too crowded",
        },
        {
            name: "Emily",
            value: "3/5",
            description: "Great but need to work on their speed",
        },
        {
            name: "Leo",
            value: "4/5",
            description: "Nice place to relax with friends",
        },
    ]

    return (
        <>
            <h1 className="reviewTitle">Reviews</h1>
            <div className="cards-container reviews-container">
                {reviews.map((review) =>(
                    <Card data={review} styling="reviewCard"></Card>  
                ))}
            </div>

        </>
    )
}

export default Reviews;