
export function NumberOfCharacters({characters}) {
    let message
    const nbCharacter = characters.length
    if (nbCharacter=== 0) {
        message ="There is no character";
    } else {
        message = `There are ${nbCharacter} characters`;
    }
    
    return (
        <p>
            {message}
        </p>
    )
  }