function Four(){
    const branches=["it","cs","cse"];
    const branchList = branches.map((branch,index)=><li key={index}>{branch}</li>)
    return (<div>
        <h1>list of elements</h1>
        <ul>{branchList}</ul>
        </div>
        );
}
export default Four;