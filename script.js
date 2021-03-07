((d) => {
    const coin = d.getElementById('coin');
    const flip = d.getElementById('flip');

    const faceGenerator = () => {
        coin.textContent = Math.floor(Math.random() * 2) === 0 ? "Head!" : "Tails!";
    }

    flip.addEventListener("click", faceGenerator);
    
})(document)