const bgColors = ["#ED095C", "#ECD4D6", "#FD866D", "#E2DF9F", "#E1FE84", "#21DC99", "#4Ae1c6"];
let previousColorIndex = -1;

export const getRandomColorFromList = () => {
    let randomIndex = Math.floor(Math.random() * bgColors.length);

    // Ensure consecutive colors are not the same
    while (randomIndex === previousColorIndex) {
        randomIndex = Math.floor(Math.random() * bgColors.length);
    }

    previousColorIndex = randomIndex;

    return bgColors[randomIndex];
};

export const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
