import { create } from "zustand";

export const useLikeStore = create((set) => ({
  likeMovie: [],
  addLikeMovie: (movieId) =>
    set((state) => {
      if (!state.likeMovie.includes(movieId)) {
        return { likeMovie: [...state.likeMovie, movieId] };
      }
      return state;
    }), // 상태 업데이트 함수
  deleteLikeMove: (movieId) =>
    set((state) => ({
      likeMovie: state.likeMovie.filter((id) => id !== movieId),
    })),
  toggleLike: (movieId) =>
    set((state) =>
      state.likeMovie.includes(movieId)
        ? { likeMovie: state.likeMovie.filter((id) => id !== movieId) }
        : { likeMovie: [...state.likeMovie, movieId] }
    ),
}));
