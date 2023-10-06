import Counter from "./Counter";
import Nav from "./Nav";
import Profile from "./Profile";
function Home(){
    return(
        <>
        <Nav/>
        <p>Workshop on React</p>
        <p>IIIM College</p>
        <Profile/>
        <Counter/>
        </>
        
    );
}
export default Home;