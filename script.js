const matrFare = {
    "Roosevelt": { "Balintawak": 12, "Monumento": 15, "5th Avenue": 18, "R. Papa": 21, "Abad Santos": 24, "Blumentritt": 27, "Tayuman": 30, "Bambang": 33, "Doroteo Jose": 36, "Carriedo": 39, "Central Terminal": 42, "United Nations": 45, "Pedro Gil": 48, "Quirino": 51, "Vito Cruz": 54, "Gil Puyat": 57, "Libertad": 60, "EDSA": 63, "Baclaran": 66 },
    "Balintawak": { "Monumento": 12, "5th Avenue": 15, "R. Papa": 18, "Abad Santos": 21, "Blumentritt": 24, "Tayuman": 27, "Bambang": 30, "Doroteo Jose": 33, "Carriedo": 36, "Central Terminal": 39, "United Nations": 42, "Pedro Gil": 45, "Quirino": 48, "Vito Cruz": 51, "Gil Puyat": 54, "Libertad": 57, "EDSA": 60, "Baclaran": 63 },
    "Monumento": { "5th Avenue": 12, "R. Papa": 15, "Abad Santos": 18, "Blumentritt": 21, "Tayuman": 24, "Bambang": 27, "Doroteo Jose": 30, "Carriedo": 33, "Central Terminal": 36, "United Nations": 39, "Pedro Gil": 42, "Quirino": 45, "Vito Cruz": 48, "Gil Puyat": 51, "Libertad": 54, "EDSA": 57, "Baclaran": 60 },
    "5th Avenue": { "R. Papa": 12, "Abad Santos": 15, "Blumentritt": 18, "Tayuman": 21, "Bambang": 24, "Doroteo Jose": 27, "Carriedo": 30, "Central Terminal": 33, "United Nations": 36, "Pedro Gil": 39, "Quirino": 42, "Vito Cruz": 45, "Gil Puyat": 48, "Libertad": 51, "EDSA": 54, "Baclaran": 57 },
    "R. Papa": { "Abad Santos": 12, "Blumentritt": 15, "Tayuman": 18, "Bambang": 21, "Doroteo Jose": 24, "Carriedo": 27, "Central Terminal": 30, "United Nations": 33, "Pedro Gil": 36, "Quirino": 39, "Vito Cruz": 42, "Gil Puyat": 45, "Libertad": 48, "EDSA": 51, "Baclaran": 54 },
    "Abad Santos": { "Blumentritt": 12, "Tayuman": 15, "Bambang": 18, "Doroteo Jose": 21, "Carriedo": 24, "Central Terminal": 27, "United Nations": 30, "Pedro Gil": 33, "Quirino": 36, "Vito Cruz": 39, "Gil Puyat": 42, "Libertad": 45, "EDSA": 48, "Baclaran": 51 },
    "Blumentritt": { "Tayuman": 12, "Bambang": 15, "Doroteo Jose": 18, "Carriedo": 21, "Central Terminal": 24, "United Nations": 27, "Pedro Gil": 30, "Quirino": 33, "Vito Cruz": 36, "Gil Puyat": 39, "Libertad": 42, "EDSA": 45, "Baclaran": 48 },
    "Tayuman": { "Bambang": 12, "Doroteo Jose": 15, "Carriedo": 18, "Central Terminal": 21, "United Nations": 24, "Pedro Gil": 27, "Quirino": 30, "Vito Cruz": 33, "Gil Puyat": 36, "Libertad": 39, "EDSA": 42, "Baclaran": 45 },
    "Bambang": { "Doroteo Jose": 12, "Carriedo": 15, "Central Terminal": 18, "United Nations": 21, "Pedro Gil": 24, "Quirino": 27, "Vito Cruz": 30, "Gil Puyat": 33, "Libertad": 36, "EDSA": 39, "Baclaran": 42 },
    "Doroteo Jose": { "Carriedo": 12, "Central Terminal": 15, "United Nations": 18, "Pedro Gil": 21, "Quirino": 24, "Vito Cruz": 27, "Gil Puyat": 30, "Libertad": 33, "EDSA": 36, "Baclaran": 39 },
    "Carriedo": { "Central Terminal": 12, "United Nations": 15, "Pedro Gil": 18, "Quirino": 21, "Vito Cruz": 24, "Gil Puyat": 27, "Libertad": 30, "EDSA": 33, "Baclaran": 36 },
    "Central Terminal": { "United Nations": 12, "Pedro Gil": 15, "Quirino": 18, "Vito Cruz": 21, "Gil Puyat": 24, "Libertad": 27, "EDSA": 30, "Baclaran": 33 },
    "United Nations": { "Pedro Gil": 12, "Quirino": 15, "Vito Cruz": 18, "Gil Puyat": 21, "Libertad": 24, "EDSA": 27, "Baclaran": 30 },
    "Pedro Gil": { "Quirino": 12, "Vito Cruz": 15, "Gil Puyat": 18, "Libertad": 21, "EDSA": 24, "Baclaran": 27 },
    "Quirino": { "Vito Cruz": 12, "Gil Puyat": 15, "Libertad": 18, "EDSA": 21, "Baclaran": 24 },
    "Vito Cruz": { "Gil Puyat": 12, "Libertad": 15, "EDSA": 18, "Baclaran": 21 },
    "Gil Puyat": { "Libertad": 12, "EDSA": 15, "Baclaran": 18 },
    "Libertad": { "EDSA": 12, "Baclaran": 15 },
    "EDSA": { "Baclaran": 12 }
};
function calculateFare(type) {
    let from = document.getElementById("fromStation").value;
    let to = document.getElementById("toStation").value;
    let fareDisplay = document.querySelector(".fare-amount");

    if (from === "" || to === "" || from === to) {
        fareDisplay.innerText = "Enter valid stations";
        return;
    }

    let fare = matrFare[from]?.[to] || matrFare[to]?.[from] || 50;

    if (type === "discounted") {
        fare *= 0.3; 
    }

    fareDisplay.innerText = fare.toFixed(2);
}