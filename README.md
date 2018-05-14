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

go to backend [http://0.0.0.0:5000](http://0.0.0.0:5000) or [http://localhost:5000](http://localhost:5000) in your browser



## Commands
1. `yarn start` - Starts the server backend
2. `yarn start-app` - Starts the server frontend
3. `yarn build` - Builds backend and front application and puts the generated javascript files into /server/dist folder on backend project
4. `yarn build-app` - Builds front application and puts the generated javascript files into /server/dist/public folder on backend project
4. `yarn build-server` - Builds backend application and puts the generated javascript files into /server/dist folder on backend project
5. `yarn server-node` - Build front and back project and run server on /server/dist
6. `yarn test` - Run front test and generate reporters HTML and Coverage on /app/reporters
7. `yarn lint` - Validates tslint rules in all project


