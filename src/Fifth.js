function Fifth(){
    const b=true;
   /* 
   if(b){
        return <h1>True statement</h1>
    }
    else{
        return <h1>False statement</h1>
    }
        */
        
    return(
        <div>
            {b?<h1>Truee stmt</h1>:<h1>False</h1>}
        </div>
    );

}
export default Fifth;

