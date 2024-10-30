async function searchWord() {
    // get the user's input and clean any extra spaces
    const word = document.getElementById('wordInput').value.trim();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // clears any previous results
  
    if (!word) {
      resultDiv.innerHTML = '<p>Please enter a word.</p>';
      return;
    }
  
   
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  
    try {
      
      const response = await fetch(url);
      
      
      if (!response.ok) throw new Error('Word not found.');
  
      
      const data = await response.json();
      const wordData = data[0]; // uses the first result from the data
  
      
      resultDiv.innerHTML = `
        <h2>${wordData.word}</h2>
        <p><strong>Phonetic:</strong> ${wordData.phonetic || 'N/A'}</p>
        <p><strong>Definition:</strong> ${wordData.meanings[0].definitions[0].definition}</p>
      `;
    } catch (error) {
      // displays an error incase owt went wrong
      resultDiv.innerHTML = `<p>${error.message}</p>`;
    }
  }
  