import './App.css';
import Product from "./Product/Product";
import Cities from "./Cities/Cities";

function App() {
    return (
        <>
            <table>
                <tr>
                    <td>First Name</td>
                    <td>Дмитро</td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>Никоненко</td>
                </tr>
                <tr>
                    <td>Occupation</td>
                    <td>син</td>
                </tr>
            </table>
            <div id={"App"}>
                <Product name={"м'ясо"} cost={"75грн"}/>
                <Product name={"лаваш"} cost={"20грн"}/>
                <Cities/>
            </div>
        </>
    );
}

export default App;
