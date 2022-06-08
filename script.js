// ====== Definir Reducer e Estado Inicial ==========
const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  if (action.type === 'DECREMENT' && state.count <= 0) {
    return {
      ...state,
    };
  } else {
    return {
      ...state,
      count: state.count - 1,
    };
  }
};

// ====== Criar a Store ==========
const store = Redux.createStore(reducer);

// ====== Lendo e reagindo a mudanças do Estado Global ==========
// Descomente abaixo:

store.subscribe(() => {
  const { count } = store.getState();

  const h1Element = document.getElementById('counter');
  h1Element.innerText = count;
});

// ========== Disparar as Actions ==========
const incrementButton = document.getElementById('inc');
const decrementButton = document.getElementById('dec');

incrementButton.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});
decrementButton.addEventListener('click', () => {
  store.dispatch({ type: 'DECREMENT' });
});
