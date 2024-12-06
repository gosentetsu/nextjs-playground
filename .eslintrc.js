module.exports = {
  extends: "next/core-web-vitals",
  plugins: [
    'perfectionist',
  ],
  rules: {
    'perfectionist/sort-imports': 'error',
  },
}

