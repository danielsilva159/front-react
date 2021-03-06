import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }
    case types.BOTAO_CLICADO_REQUEST: {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return state;
    }
    case types.BOTAO_CLICADO_FAILURE: {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }
    default:
      return state;
  }
}
