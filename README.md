# 2020 - New Portfolio Baby

## If you use nvm

Please run the following command before running any of the commands
bellow:

```bash
cd src
nvm use
```

## Install dependencies

You only to do it once, or when the dependencies in the file
`package.json` change.

```bash
cd src
npm install
```

## Run the development server

```bash
cd src
npm run dev
```

## Publish a change

When you are happy with the changes you made in development mode,
**commit your changes to the source code normally**, and then run the
following command to publish to Github pages:

```bash
cd src
npm run publish
git push
```
