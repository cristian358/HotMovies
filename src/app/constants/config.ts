export const tmdbConfig = {
  URL: 'https://api.themoviedb.org/3',
  apiKey: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTc1YWEyZTYzYmRmNzFjYjkxZTRkOTY3YzllY2JkMCIsIm5iZiI6MTcyMjg2Mzk3My4xNjUwMDYsInN1YiI6IjY2YjA4NTE1MjBhMjM3YTdlNWExMWI3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JYcfhMjypWXQWmArSeyYFY-LouehwNmjS7vdLLIA2j4',

}
export const tmdbHeader = {
  headers: { Authorization: `Bearer ${tmdbConfig.apiKey}` }
};
