 var quoteGenerator = [
   {
      name : 'Anonymous',
      quote: ' A warrior is not he who has a weapon,but he who also knows when and how to use it.'
   },
    {
       name: 'Sana Jahan',
       quote: 'When you think it\'s over that is when it is REALLY over.'},
       {
        name: 'Rabindranath Tagore',
        quote: 'The highest education is that which does not merely give us information but makes our life in harmony with all existence.'
       },
       {
        name: 'Bob Dylan',
        quote: 'No one is free, even the birds are chained to the sky.'
       },
       {
        name: 'Steve Pavlina',
        quote: 'When you live for a strong purpose,then hard work isn\'t an option. It\'s a necessity.'
       },
       {
        quote: 'A dream doesn\'t become reality through magic; it takes sweat, determination and hard work.',
        name: 'Colin Powell'
       },
       {
        quote: 'Desire is the key to motivation, but it\'s determination and commitment to an unrelenting pursuit of your goal - a commitment to excellence - that will enable you to attain the success you seek.',
        name: 'Mario Andretti'
       },
       {
        quote: 'The truest wisdom is a resolute determination.',
        name: 'Napoleon Bonaparte'
       },

       {
        quote: 'Determination becomes obsession and then it becomes all that matters.',
        name: 'Jeremy Irwine'
       }



  ]

   getQuote.onclick = function(){
   var len = (quoteGenerator.length);    
   for(i =0; i<len ; i++){
    var generate = Math.floor(Math.random()*len);
    var getQuote = document.getElementById("getQuote");
    document.getElementById("generateQuoteTextHere").innerHTML = '" ' + quoteGenerator[generate].quote + ' "';
    document.getElementById("generateQuoteWriter").innerHTML= quoteGenerator[generate].name;
    break;
 }
};