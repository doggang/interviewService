import Header from "./components/Header";
import "./App.css";
import MainArticle from "./components/MainArticle";

function App(){
  return (
  <div className="App">
    <Header />

    <section>
      <article>
        <MainArticle />
      </article>
      <article>
        <div> flex
          <div>
            <img src="img" alt="" />
            <div>
              <div>Small title</div>
              <div>content</div>
            </div>
          </div>
          <div></div>
        </div>
      </article>
    </section>
  </div>);
}

export default App;