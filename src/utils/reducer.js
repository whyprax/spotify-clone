import { reducerCases } from "./Constants";

export const inititalState = {
  token: null,
  playlists: [],
  userInfo: null,
  selectedPlaylist: null,
  selectedPlaylistID: "7Hd4PhE7ZU7DcrVybdzetE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }
    case reducerCases.SET_PLAYLISTS: {
      return {
        ...state,
        playlists: action.playlists,
      };
    }
    case reducerCases.SET_USERINFO: {
      return {
        ...state,
        userInfo: action.userInfo,
      };
    }
    case reducerCases.SET_PLAYLIST: {
      return {
        ...state,
        selectedPlaylist: action.selectedPlaylist,
      };
    }
    default:
      return state;
  }
};

export default reducer;
