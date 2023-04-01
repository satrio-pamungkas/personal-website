This is my personal website, which is built using NextJS framework, and follows several best practices in the software development (e.g. Test-Driven Development, Atomic Design Philosophy)

## Getting Started
Firstly, install all dependencies
```bash
npm install
```
To run this project
```bash
npm run dev
```
To run storybook (Debug atomic design)
```bash
npm run storybook
```
To run unit testing (Test-Driven Development)
```bash
npm run test
```
Make sure, before run the above command (unit testing), you have to generate tailwind `test.css` file using this command. Otherwise, some unit testing that are related to style assertion will not work.
```bash
npx tailwindcss -i ./src/styles/globals.css -o ./src/styles/test.css
``` 