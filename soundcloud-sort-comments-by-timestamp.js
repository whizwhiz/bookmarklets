/* 
LAST CHECKED 13/03/2017
Bookmarklet to arrange the Soundcloud comments by timestamp on the track instead of
date and time the comment was made
*/ 

// Bookmarklet code/URL - create a bookmark with the line below as the URL
javascript:(function(){var ul=document.getElementsByClassName('lazyLoadingList__list')[0];var li=ul.getElementsByClassName('commentsList__item');var content=document.getElementsByClassName('commentItem__content');var meta=document.getElementsByClassName('commentItem__meta');var comments=[];for(var i=0;i<content.length;i++){var t=content[i].getElementsByClassName('commentItem__timestampLink')[0];if (t === undefined){t="00:00:00";} else {t=t.innerHTML;var ta=t.split(":");if(ta[0].length===1){ t="0"+t; }if(ta.length===2){ t="00:"+t; }}var dt=meta[i].getElementsByClassName('relativeTime')[0].getAttribute('datetime');comments.push([t,dt,li[i]]);}for(var i=0;i<comments.length;i++){ul.removeChild(comments[i][2]);}comments.sort();for(var i=0;i<comments.length;i++) {ul.appendChild(comments[i][2]);}})();


/*
Same code as above with formatting and comments
*/
javascript:(function(){
    // class element for comments list
    var ul=document.getElementsByClassName('lazyLoadingList__list')[0];
    // class element each comment item belongs to, in <li> tag.
    var li=ul.getElementsByClassName('commentsList__item');
    // class element for comment item content (includes timestamp)
    var content=document.getElementsByClassName('commentItem__content');
    // contains comment items posted on timestamp
    var meta=document.getElementsByClassName('commentItem__meta');
    var comments=[];
    // loop through each comment item timestamp ("9:38") 
    for(var i=0;i<content.length;i++){
        // get comment timestamp element and check if undefined (some comments have no timestamp, spam)        
        var t=content[i].getElementsByClassName('commentItem__timestampLink')[0];
        // if undefined assign timestamp
        if (t === undefined){
            t="00:00:00";
        } else {
            // else get timestamp text
            t=t.innerHTML;
            var ta=t.split(":");
            // convert a "9:38" timestamp (one digit at start) into "09:38". If 1st timestamp array element is 1 digit long then add a "0" at the start
            if(ta[0].length===1){ t="0"+t; }
            // convert a "09:38" (array length = 2) timestamp into "00:09:38" so all timestamps are in "xx:xx:xx" format. 
            // to enable easy sorting later.
            if(ta.length===2){ t="00:"+t; }
        }
        // need datetime so Array.sort() arranges the replies correctly. reply comments have same timestamp but later datetime. only need the relativeTime class elements from the meta array (there is other relativeTime class elements on document)
        var dt=meta[i].getElementsByClassName('relativeTime')[0].getAttribute('datetime');
        // push an array element containing timestamp, datetime, comment item (<li>) to comments array. Now Array.sort() will sort elements by timestamp, then datetime.
        comments.push([t,dt,li[i]]);
    }
    // remove each comment item <li> from its parent
    for(var i=0;i<comments.length;i++){
        ul.removeChild(comments[i][2]);
    }
    // sorts by timestamp then datetime then comment item <li> 
    comments.sort();
    // append each comment item <li> back in back to the parent now in comments(array) order
    for(var i=0;i<comments.length;i++) {
        ul.appendChild(comments[i][2]);
    }
 })();




