var lastDigit = function(str1, str2){  

        if (str1 === "0" && str2 === "0") {
          return 1;
        } else if (str2 === "0") {
          return 1;
        }
  
        let bigL = BigInt(str1);
        let pattern = []
        for (let i = 1; i < 5; i++) {
          pattern.push(String(bigL ** BigInt(i)).slice(-1));
        }
        
        let idx = Number(BigInt(str2) % BigInt(4)) - 1;
        return idx === -1 ? Number(pattern[3]) : Number(pattern[idx]);
        
}

      console.log(lastDigit("1911686374834547335", "0"));