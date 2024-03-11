function extractMarkdownContent(text) {
    // Regular expression to match headers and code blocks
    const markdownRegex = /(\#{1,6}\s.*|```[\s\S]*?```)/g;

    // Extract matches
    const matches = text.match(markdownRegex);

    if (matches && matches.length > 0) {
        // Concatenate all matches to get a string of markdown elements
        return matches.join('\n\n');
    } else {
        return 'No specific markdown elements found.';
    }
}

// Example usage
const input = "This is your current code: ### This is the code ```javascript const x = 5; console.log(x);``` Please review it and let me know if you have any questions.";
console.log(extractMarkdownContent(input));
