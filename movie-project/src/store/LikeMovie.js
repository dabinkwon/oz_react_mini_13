import { create } from "zustand";

export const useLikeStore = create((set) => ({
  likeMovie: [],
  toggleLike: (movieId) =>
    set((state) =>
      state.likeMovie.includes(movieId)
        ? { likeMovie: state.likeMovie.filter((id) => id !== movieId) }
        : { likeMovie: [...state.likeMovie, movieId] }
    ),
}));
