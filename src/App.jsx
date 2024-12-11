import { useState } from "react";
import data from './data'
import { nanoid } from "nanoid";

const App = () => {
  const [ count, setCount ] = useState( 1 );
  const [ text, setText ] = useState( [] );

  const submitHandler = ( e ) => {
    e.preventDefault();
    let amount = parseInt( count )
    setText( data.slice( 0, amount ) )
  }
  return <section className="section-center">
    <h4>Tired Of Boring lorem ipsum?</h4>
    <form className="lorem-form" onSubmit={submitHandler}>
      <label htmlFor="amount">Paragraph: </label>
      <input type="number" value={count}
        name='amount'
        onChange={( e ) => setCount( e.target.value )}
        id='amount'
        min='1'
        step='1'
        max='8'
      />

      <button type="submit" className="btn">Generate</button>
    </form>
    <article className="lorem-text">
      {text.map( ( item, index ) => <p key={nanoid()}>{item}</p> )}
    </article>

  </section>;
};
export default App;
