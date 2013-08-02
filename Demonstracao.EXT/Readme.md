# DemonstracaoExt/app

This folder contains the javascript files for the application.

# DemonstracaoExt/resources

This folder contains static resources (typically an `"images"` folder as well).

# DemonstracaoExt/overrides

This folder contains override classes. All overrides in this folder will be 
automatically included in application builds if the target class of the override
is loaded.

# DemonstracaoExt/sass/etc

This folder contains misc. support code for sass builds (global functions, 
mixins, etc.)

# DemonstracaoExt/sass/src

This folder contains sass files defining css rules corresponding to classes
included in the application's javascript code build.  By default, files in this 
folder are mapped to the application's root namespace, 'DemonstracaoExt'. The
namespace to which files in this directory are matched is controlled by the
app.sass.namespace property in DemonstracaoExt/.sencha/app/sencha.cfg. 

# DemonstracaoExt/sass/var

This folder contains sass files defining sass variables corresponding to classes
included in the application's javascript code build.  By default, files in this 
folder are mapped to the application's root namespace, 'DemonstracaoExt'. The
namespace to which files in this directory are matched is controlled by the
app.sass.namespace property in DemonstracaoExt/.sencha/app/sencha.cfg. 
