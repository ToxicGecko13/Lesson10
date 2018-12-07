// main.js: This code starts to run after the HTML page is loaded, because of defer attribute in script tag.  
let boardGames = ['Bored: Break The Safe', 'Bored: The Chameleon', 'Bored: Clue', 'Bored: Monopoly', 'Video: Brawlhalla', 'Video: Skyrim', 'Video: Overwatch', 'Card: Boy Scout'];  

boardGames.reverse();

// Update the title with the total number of games from our array length  
document.getElementById('ListTitle').textContent = "Carsten's Top " + boardGames.length + " Games"  

// Retrieve the ordered list element (ol) so we can add list items (li)
let listParent = document.querySelector('.TopTen');  

boardGames.forEach((game) => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(game));
    console.log(li);
    li.className = 'Game-Item';
    listParent.appendChild(li); 
});  