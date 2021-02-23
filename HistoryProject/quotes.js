class Quote {
  constructor(text, author) {
    this.text = text;
    this.author = author;
  }
}

let randomQuotes = [];
randomQuotes[0] = new Quote('“History is written by the victors.“', "― Winston Churchill");
randomQuotes[1] = new Quote('“We are not makers of history. We are made by history.“', '― Martin Luther King, Jr.');
randomQuotes[2] = new Quote('“You never really understand a person until you consider things from his point of view... Until you climb inside of his skin and walk around in it.”', '― Harper Lee (To Kill a Mockingbird)');
randomQuotes[3] = new Quote('“Travel far enough, you meet yourself.”', '― David Mitchell (Cloud Atlas)');
randomQuotes[4] = new Quote('“People generally see what they look for, and hear what they listen for.”', '― Harper Lee (To Kill a Mockingbird)');
randomQuotes[5] = new Quote('“My life amounts to no more than one drop in a limitless ocean. Yet what is any ocean, but a multitude of drops?”', '― David Mitchell (Cloud Atlas)');
randomQuotes[6] = new Quote('“I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. It is when you know you are licked before you begin, but you begin anyway and see it through no matter what.”', '― Harper Lee (To Kill a Mockingbird)');
randomQuotes[7] = new Quote('“Atticus, he was real nice."/ "Most people are, Scout, when you finally see them.”', '― Harper Lee (To Kill a Mockingbird)');
randomQuotes[8] = new Quote('“No one can make you feel inferior without your consent.”',  '― Eleanor Roosevelt (This is My Story)');
randomQuotes[9] = new Quote('“If you do not tell the truth about yourself you cannot tell it about other people.”', '― Virginia Woolf');
randomQuotes[10] =new Quote('“Every generation imagines itself to be more intelligent than the one that went before it, and wiser than the one that comes after it.”', '― George Orwell');
randomQuotes[11] =new Quote('“Who controls the past controls the future. Who controls the present controls the past.”','― George Orwell');
randomQuotes[12] =new Quote('“The more you know about the past, the better prepared you are for the future”', '― Theodore Roosevelt');
randomQuotes[13] =new Quote('“Anybody can make history. Only a great man can write it.”', '― Oscar Wilde');

function shuffleQuote() {
  let id = +Math.round(Math.random() * (randomQuotes.length - 1));
  document.getElementById('showQuote').innerHTML = randomQuotes[id].text;
  document.getElementById('showAuthor').innerHTML = randomQuotes[id].author;
}
