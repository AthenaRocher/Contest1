function countWords(str)
{
    const arr = str.split(' ');
    return arr.filter(word => word !== '').length;
}
  
  console.log(countWords('Je m-applelle Maurakshi')); 