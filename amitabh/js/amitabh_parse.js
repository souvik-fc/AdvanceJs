var parse=function(){
        this.arr=[];
        var max_retwt=0,min_retwt=1950;
        this.games=[];
        this.kbc=[];
        this.film=[];
        this.india=[];
        this.family=[];
        this.mood=[];
        this.alltwt=[];
        this.other=[];
        var twt_len=info.length;
  for(i=0;i<twt_len;i++){
    var s=info[i].text;
   this.arr.push({text:s,retweet_count:info[i].retweet_count,fetched:"false"});

    
    max_retwt=Math.max(info[i].retweet_count,max_retwt);
    min_retwt=Math.min(info[i].retweet_count,min_retwt);
  }
    console.log(max_retwt);
    console.log(min_retwt);




  for(i=0;i<twt_len;i++){
    if(this.arr[i].text.match(/(world cup|cricket|kabaddi|football|goal|game)/i) && this.arr[i].fetched=="false"){
    this.games.push({text:this.arr[i].text,retweet_count:this.arr[i].retweet_count});
    this.alltwt.push({text:this.arr[i].text,retweet_count:this.arr[i].retweet_count,color:"yellow"});

    this.arr[i].fetched="true";
  }
  
 // console.log(games);

  

   else if(this.arr[i].text.match(/kbc/i)  && this.arr[i].fetched=="false"){
    this.kbc.push({text:this.arr[i].text,retweet_count:this.arr[i].retweet_count});
    this.alltwt.push({text:this.arr[i].text,retweet_count:this.arr[i].retweet_count,color:"blue"});
    this.arr[i].fetched="true";
  }
  
  //console.log(kbc);

  
  
   else if(this.arr[i].text.match(/(movie|film|trailer|song)/i) && this.arr[i].fetched=="false"){
    this.film.push({text:this.arr[i].text,retweet_count:this.arr[i].retweet_count});
    this.alltwt.push({text:this.arr[i].text,retweet_count:this.arr[i].retweet_count,color:"green"});
    this.arr[i].fetched="true";
  }
  
    //console.log(film);


  
   else if(this.arr[i].text.match(/india/i) && this.arr[i].fetched=="false"){
    this.india.push({text:this.arr[i].text,retweet_count:this.arr[i].retweet_count});
    this.alltwt.push({text:this.arr[i].text,retweet_count:this.arr[i].retweet_count,color:"skyblue"});
    this.arr[i].fetched="true";
  }
  
    //console.log(india);


   else if(this.arr[i].text.match(/(family)/i) && this.arr[i].fetched=="false"){
    this.family.push({text:this.arr[i].text,retweet_count:this.arr[i].retweet_count});
    this.alltwt.push({text:this.arr[i].text,retweet_count:this.arr[i].retweet_count,color:"red"});
    this.arr[i].fetched="true";
  }

   else if(this.arr[i].text.match(/(peace|happyness|love|fun|great|fantastic|wonderful)/i) && this.arr[i].fetched=="false"){
    this.mood.push({text:this.arr[i].text,retweet_count:this.arr[i].retweet_count});
    this.alltwt.push({text:this.arr[i].text,retweet_count:this.arr[i].retweet_count,color:"pink"});
    this.arr[i].fetched="true";
  }

   else{
    this.other.push({text:this.arr[i].text,retweet_count:this.arr[i].retweet_count});
    this.alltwt.push({text:this.arr[i].text,retweet_count:this.arr[i].retweet_count,color:"purple"});

  }

  }
    console.log(this.mood);


};
