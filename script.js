const textInput = document.getElementById("textInput");

textInput.addEventListener("input", () => {
    const text = textInput.value.trim();

    // Word Count
    const words = text === "" ? 0 : text.split(/\s+/).length;

    // Character Count (including spaces)
    const characters = text.length;

    // Sentence Count
    const sentences = text === "" ? 0 : text.split(/[.!?]+/).filter(Boolean).length;

    // Paragraph Count
    const paragraphs = text === "" ? 0 : text.split(/\n+/).filter(Boolean).length;

    document.getElementById("wordCount").innerText = words;
    document.getElementById("charCount").innerText = characters;
    document.getElementById("sentenceCount").innerText = sentences;
    document.getElementById("paragraphCount").innerText = paragraphs;
});
