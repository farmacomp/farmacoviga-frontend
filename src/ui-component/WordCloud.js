import React from 'react';
import WordCloud from 'react-d3-cloud';

const WordCloudComponent = ({ textArray }) => {
    const wordCount = {};
    const words = [];

    textArray.forEach((phrase) => {
        phrase.split(' ').forEach((word) => {
            if (words.indexOf(word) === -1) {
                words.push(word);
            }
            const currentWordCount = wordCount[word];
            const count = currentWordCount ? currentWordCount : 0;
            wordCount[word] = count + 1;
        });
    });
    console.log(wordCount);
    console.log(words);

    const wordCloudData = words.map((word) => {
        return { text: word, value: wordCount[word] * 200 };
    });

    return <WordCloud data={wordCloudData} />;
};

export default WordCloudComponent;
