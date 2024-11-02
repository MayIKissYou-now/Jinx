async function askAI() {
    const userMessage = document.getElementById("userInput").value;
    const apiKey = "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"; // replace with your OpenAI key

    const response = await fetch("https://api.openai.com/v1/engines/davinci-codex/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            prompt: userMessage,
            max_tokens: 50
        })
    });

    const data = await response.json();
    const aiResponse = data.choices[0].text;
    document.getElementById("response").innerText = aiResponse;
}
