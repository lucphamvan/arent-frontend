## Project structures

    src
    -	assets
    	-  img : contain image, icon
    	-  css : contain css file
    -	components: define all common component for app
    	-  button : common button for app
    	-  layout : layout include header/content/footer for whole page
    -	config : contain some config like api, url, common config
    -	model : define model  for app
    -	pages : implement pages for app
    -	router: define router for app. We simuate an authen state instead implement real state from redux store
    -	service : define service to get data (seperate with UI). At this time only simutlate all service in 1 file index.ts
    -   index.css : define global css config. In real app, I use "scss" instead "css" for more flexible

## Available Scripts

In the project directory, you can run:

### `npm install`

### `npm start`

### `npm build`
