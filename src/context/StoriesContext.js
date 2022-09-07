import React, { createContext, useReducer } from "react";

export const StoryContext = createContext();

export const constants = {
  TOP_STORIES: "Top Stories",
  LATEST_STORIES: "Latest Stories",
};

const reducer = (state, action) => {
  switch (action.type) {
    case constants.LATEST_STORIES:
      return { ...state, latestStories: action.payload };
      break;

    case constants.TOP_STORIES:
      return { ...state, topStories: action.payload };
      break;
    default:
      return state;
      break;
  }
};

const StoriesContextProvider = ({ children }) => {
  const initialState = {
    latestStories: [],
    topStories: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    state,
    dispatch,
  };

  return (
    <StoryContext.Provider value={value}>{children}</StoryContext.Provider>
  );
};

export default StoriesContextProvider;
