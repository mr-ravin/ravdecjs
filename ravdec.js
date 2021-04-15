class Ravdec {
constructor(){}
compression(read_data){ //input type: string     output type: string
 let return_data="";
 let binval="";
 let wrt_data="";
 let cnt=0;
 let tmp,tmp2,tmp3,repl;
 let act_len=read_data.length;
 let multiple=act_len/8;
 for (let i=0;i<multiple;i++){
  tmp=read_data.slice(8*i,(8*i)+8);
  for (let j=0;j<8;j++){
    tmp2=tmp.charCodeAt(j);
    tmp3=(tmp2 >>> 0).toString(2);
    while (tmp3.length<7){
      tmp3="0"+tmp3;
    }
    binval=binval+tmp3;
  }
 }
 while (cnt<binval.length){
  repl=binval.slice(cnt,8+cnt);
  wrt_data=String.fromCharCode(parseInt(repl,2));
  cnt=cnt+8;
  return_data=return_data+wrt_data;
}
 return return_data;
}

decompression(read_data){ //input type: string     output type: string
 let return_data="";
 let cnt=0;
 let act_len=read_data.length;
 let multiple=act_len/7;
 let binval="";
 let wrt_data="";
 let tmp,tmp2,tmp3,repl;
 for (let i=0;i<multiple;i++){
  tmp=read_data.slice(7*i,(7*i)+7);
  for (let j=0;j<7;j++){
   tmp2=tmp.charCodeAt(j);
   tmp3=(tmp2 >>> 0).toString(2);
   while (tmp3.length<8){
     tmp3="0"+tmp3;
   }
   binval=binval+tmp3;
  }
 }
 while (cnt<binval.length){
  repl=binval.slice(cnt,7+cnt);
  wrt_data=String.fromCharCode(parseInt(repl,2));
  cnt=cnt+7;
  return_data=return_data+wrt_data;
 }
return return_data;
}
}
module.exports=Ravdec;
