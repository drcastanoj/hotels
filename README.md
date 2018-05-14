### Quick start
**Make sure you have Node version >= 6.0 and NPM >= 3**

## Prerequisite
- Install yarn `npm install -g yarn`

```bash
# clone 
git clone https://github.com/drcastanoj/hotels

# change directory to our repo
cd hotels


# install the repo with npm
yarn 

# start the server backend
yarn start

# start the server frontend
yarn start-app


```
go to frontend[http://0.0.0.0:5000](http://0.0.0.0:5000) or [http://localhost:5000](http://localhost:5000) in your browser

```
go to backend [http://0.0.0.0:5000](http://0.0.0.0:5000) or [http://localhost:5000](http://localhost:5000) in your browser

# Getting Started
## Dependencies
What you need to run this app:
* Ensure you're running the latest versions Node `v6.x.x`+ (or `v7.x.x`) and NPM `3.x.x`+

## Installing and  Running the app
* `yarn` to install all dependencies
* `yarn start` to start the dev server bacckend
* `yarn start-app` to start the dev server front end
After you have installed all dependencies you can now run the app.  Open browser in `http://localhost:5000` 


### server backend
```bash
# development
yarn start
# production generate build backend and front 
yarn build
#  generate build backend and frontend, and  up server node
yarn serve-server
```

### server frontend
```bash
# build front-end
yarn start-app
# build front-end
yarn build-app
# build backend
yarn build-server
```

## Other commands

### generate frontend app 
```bash
yarn build-app
```

### generate backend app 
```bash
yarn build-server
```

### run unit tests and coverage on front-end 
```bash
yarn run test
```

### run tslint 
```bash
yarn lint
```


