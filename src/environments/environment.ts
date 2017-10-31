// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  year: '2017',
  wpBase: '//vccw.test/wp-json/wp/v2/',
  icsBase: '//vccw.test/wp-json/booking-ics/v1/',
  mapsAPI: 'AIzaSyDN9hHVdB9-tEN4URIyrNsIGspS4lV7oxU',
  rootURL: '/',
  categories: {
    lodges: 5,
    rooms: 4
  }
};
