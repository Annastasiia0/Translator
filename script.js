 let btn = document.querySelector(".btn_add");
 let rus = document.querySelector(".text_board01");
 let trans = document.querySelector(".text_board02");

 btn.addEventListener("click", function () {
   let newDiv = document.createElement("div");
   newDiv.className = "word01";
   rus.appendChild(newDiv);

   let newDivTrans = document.createElement("div");
   newDivTrans.className = "word02";
   trans.appendChild(newDivTrans);
   
   let myText = document.querySelector(".add_word").value;
   
   newDiv.setAttribute("title", myText)
   newDivTrans.setAttribute("title", translit(myText))
     
   if (myText.length > 12) {
     newDiv.innerText = cut (myText)
   } else {
     newDiv.innerText = myText
   }

   newDivTrans.innerText = translit(myText)
  })
  
  function cut (elem) {
    let result = "";
    if (elem.length > 12) {
      result = elem.slice(0,12) + "..."
    }
    return result;
  }
  
  
  document.querySelector(".word02").onmousemove = () => {
    if(myText.length > 12){
      return myText 
    }
  }

  function translit (letters) {
   const items = {
     "а": "a", "б": "b", "в": "v", "г": "g", "д": "d",
     "е": "e", "ё": "yo", "ж": "zh", "з": "z", "и": "i", "й": "iy",
     "к": "k", "л": "l", "м": "m", "н": "n", "о": "o",
     "п": "p", "р": "r", "с": "s", "т": "t", "у": "u",
     "ф": "f", "х": "kh", "ц": "ts", "ч": "ch", "ш": "sh",
     "щ": "shc", "ы": "y", "э": "e", "ю": "yu", "я": "ia", "ь": "'"
    }; if (letters.length > 11) {
      return (letters.split("").map((char) => items[char] || char).join(""))
    } else {
      return letters.split("").map((char) => items[char] || char).join("")
    };

  };
  
 
