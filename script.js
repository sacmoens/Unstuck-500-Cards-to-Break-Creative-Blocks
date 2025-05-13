const cards = [
    // Reframe It (100 cards)
    { category: "Reframe It", prompt: "What if this problem is a feature, not a flaw?", subtext: "Turn a challenge into a strength.", color: "#FF6200", icon: "star" },
    { category: "Reframe It", prompt: "Describe your idea as a villain. What’s its strength?", subtext: "Find the power in its flaws.", color: "#FF6200", icon: "star" },
    { category: "Reframe It", prompt: "What’s the opposite of your idea? Can you use it?", subtext: "Explore the reverse perspective.", color: "#FF6200", icon: "star" },
    // ... (Add all 100 Reframe It prompts here)
    
    // Shake It Up (100 cards)
    { category: "Shake It Up", prompt: "Write/draw with your non-dominant hand for 5 minutes.", subtext: "Embrace the awkwardness to spark ideas.", color: "#00F0FF", icon: "dice" },
    { category: "Shake It Up", prompt: "Pick 3 random objects near you. Combine them into an idea.", subtext: "Think outside your usual toolkit.", color: "#00F0FF", icon: "dice" },
    { category: "Shake It Up", prompt: "Use a random emoji as inspiration.", subtext: "Let a symbol guide your creativity.", color: "#00F0FF", icon: "dice" },
    // ... (Add all 100 Shake It Up prompts here)
    
    // Step Out (100 cards)
    { category: "Step Out", prompt: "Go outside. Take a photo of the most boring thing. Make it poetic.", subtext: "Find beauty in the mundane.", color: "#00FF00", icon: "footprint" },
    { category: "Step Out", prompt: "Ask a friend for a one-word suggestion. Use it.", subtext: "Let someone else spark your creativity.", color: "#00FF00", icon: "footprint" },
    { category: "Step Out", prompt: "Take a break. Then draw/write your last dream.", subtext: "Tap into your subconscious for ideas.", color: "#00FF00", icon: "footprint" },
    // ... (Add all 100 Step Out prompts here)
    
    // Mind Stretch (100 cards)
    { category: "Mind Stretch", prompt: "List 10 terrible ideas. Pick one to make awesome.", subtext: "Bad ideas can lead to brilliance.", color: "#FFFF00", icon: "lightbulb" },
    { category: "Mind Stretch", prompt: "Use a metaphor to describe your project.", subtext: "See it in a new light.", color: "#FFFF00", icon: "lightbulb" },
    { category: "Mind Stretch", prompt: "Think of how a child would solve this.", subtext: "Simplify with a fresh perspective.", color: "#FFFF00", icon: "lightbulb" },
    // ... (Add all 100 Mind Stretch prompts here)
    
    // Look Differently (100 cards)
    { category: "Look Differently", prompt: "Pitch your idea as if you were on Shark Tank.", subtext: "Sell it with confidence.", color: "#FF00FF", icon: "eye" },
    { category: "Look Differently", prompt: "Explain it to a 6-year-old. What don’t they understand?", subtext: "Simplify to clarify your vision.", color: "#FF00FF", icon: "eye" },
    { category: "Look Differently", prompt: "Now explain it to a 90-year-old. What changes?", subtext: "Adapt to a different generation.", color: "#FF00FF", icon: "eye" },
    // ... (Add all 100 Look Differently prompts here)
];

// Note: Due to space constraints, I’ve shown the structure with a few prompts. You can add all 500 prompts by copying the full list above into the array.

document.getElementById('drawButton').addEventListener('click', () => {
    const cardContainer = document.getElementById('cardContainer');
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    
    cardContainer.classList.remove('hidden');
    cardContainer.querySelector('.category-label').textContent = randomCard.category;
    cardContainer.querySelector('.category-label').style.color = randomCard.color;
    cardContainer.querySelector('.prompt-title').textContent = randomCard.prompt;
    cardContainer.querySelector('.subtext').textContent = randomCard.subtext;
    
    // Update geometric shape color based on category
    const shape = cardContainer.querySelector('.geometric-shape');
    shape.style.background = randomCard.color;
});