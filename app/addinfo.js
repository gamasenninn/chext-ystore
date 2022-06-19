alert('アラートのテストです。');
console.log('アラートのテストです。');
$(function(){
    //$('li').filter('.sc-jWBwVP').each(function(i,v){
    $('a').each(function(i,v){
        //$(this).text("test"+v.innerText+i);
        //$(this).text("test"+v.innerText+i);
        //scode = $(this).find('p').text();
        //$(this).append("<li>"+"test"+scode+"</li>");
        addhtml = "<h2>ワシだ!!</h2>"
        $(this).append(addhtml);
        //$(this).parent().prepend(addhtml);
        console.log(i)
    });
});
