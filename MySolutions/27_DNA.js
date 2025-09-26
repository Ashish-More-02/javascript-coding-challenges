const DNAStrand = dna => {
  // Your solution
  let complementaryDNAStrand = '';
  
  for(let i=0;i<dna.length;i++){
      if(dna[i] == 'A'){
          complementaryDNAStrand += 'T';
      }
      else if(dna[i] == 'T' ){
          complementaryDNAStrand += 'A';
      }
      
      if(dna[i] == 'C'){
          complementaryDNAStrand += 'G';
      }
      else if(dna[i] == 'G'){
          complementaryDNAStrand += 'C';
      }
  }
  
  return complementaryDNAStrand;
};

console.log(DNAStrand('AAAA')); // 'TTTT'
console.log(DNAStrand('ATTGC')); // 'TAACG'
console.log(DNAStrand('GTAT')); // 'CATA'