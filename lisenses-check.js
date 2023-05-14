import { init } from 'license-checker'

const VALID_LICENSES = [
   '0BSD',         'AFL-2.1',      'AFL-3.0',      'APSL-2.0',     'Apache-1.1',      'BSD',
   'Apache-2.0',   'Artistic-1.0', 'Artistic-2.0', 'BSD-2-Clause', 'BSD-3-Clause',    
   'BSL-1.0',      'CC-BY-1.0',    'CC-BY-2.0',    'CC-BY-2.5',    'CC-BY-3.0',       
   'CC-BY-4.0',    'CC0-1.0',      'CDDL-1.0',     'CDDL-1.1',     'CPL-1.0',         
   'EPL-1.0',      'FTL',          'IPL-1.0',      'ISC',          'LGPL-2.0',        
   'LGPL-2.1',     'LGPL-3.0',     'LPL-1.02',     'MIT',          'MPL-1.0',         
   'MPL-1.1',      'MPL-2.0',      'MS-PL',        'NCSA',         'OpenSSL',
   'PHP-3.0',      'Ruby',         'Unlicense',    'W3C',          'Xnet',
   'ZPL-2.0',      'Zend-2.0',     'Zlib',         'libtiff',      'WTFPL'
 ]

let sum = 0

let checkTwoLicenses = false

init( {
   start: '.',
   production: true,
}, function ( err, json ) {
   if ( err ) {
      console.log( err );
      return;
   }

   const dependencies = Object.keys( json );

   dependencies.forEach( ( dependency ) => {
      const license = json[dependency].licenses;
      if ( ( license === "(Apache-2.0 OR MPL-1.1)" || license === "(AFL-2.1 OR BSD-3-Clause)"
         || license === "(BSD-3-Clause OR GPL-2.0)" || license === "(MIT AND CC-BY-3.0)" ) ) {
        checkTwoLicenses = true
      }
      const path = json[dependency].path;
      if ( VALID_LICENSES.includes( license ) === false && checkTwoLicenses === false ) {
         sum++
         console.log( `Залежність ${dependency} має неприпустиму ліцензію ${license} \nШлях: ${path}` );
      }
   } );
   if ( sum == 0 ) {
      console.log( "Проект може мати ліцензію MIT у відповідності до ліцензій модулів" )
   }
} )