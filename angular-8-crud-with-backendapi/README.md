# Angular example

angular-8-crud with laravel backend api

# lession-02: Typescript overview

### Keys result
```
- Learn abount Promise, Resolve, Reject
- Async, await
- Read https://ehkoo.com/bai-viet/tat-tan-tat-ve-promise-va-async-await
```

### Setups
```
Setup environment
1. install node: https://nodejs.org/en/download/
2. install typescript: https://www.digitalocean.com/community/tutorials/typescript-new-project
```

# lession-03: Angular overview

### Basic command
```
1. create component: ng g c login

2. run serve: ng serve -o

```

### Console.log in angular
```
    no-console is caused by TSLint and its rule:

    Rule: no-console

    Bans the use of specified console methods.

    Check your tslint.json:

    "no-console": [
        true,
        "debug",
        "info",
        "time",
        "timeEnd",
        "trace"
    ],
    Just change true to false.

```

### Install bootstrap

```
-   npm install bootstrap jquery --save
-   angular.json file

    ...
    
    "styles": [
        "src/styles.css",
        "node_modules/bootstrap/dist/css/bootstrap.min.css"
    ],
    "scripts": [
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/bootstrap/dist/js/bootstrap.min.js"
    ]
    
    ...

- If bootstrap won't work then try to import bootstrap CSS in style.css like:

    /* You can add global styles to this file, and also import other style files */

    @import '~bootstrap/dist/css/bootstrap.min.css';

    .footer {
        position: absolute;
        bottom: 0;
        width:100%;
        height: 70px;
        background-color: blue;
        text-align: center;
        color: white;
    }
```

### Checkall/uncheckall
```
using angular form to work

add to app.module.ts
import { FormsModule } from '@angular/forms';

imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
],
```

### Bài tập
```
 - Tìm hiểu và code lại bài checkall
 - Tìm hiểu và code lại bài hacker-new
 - Viết reflections về việc gọi compnent lẫn nhau.
 - Tìm hiểu trước việc truyền dữ liệu giữa các component.
```

# lession-04: Angular Component
```
    call another components function
    https://stackoverflow.com/questions/37587732/how-to-call-another-components-function-in-angular2
    https://stackoverflow.com/a/54245245/4506775

```

# lession-05: Angular Component 2
```
Setup jwt laravel
step 01. 
	composer require tymon/jwt-auth:dev-develop --prefer-source

step 02. Open config/app.php and add the following provider to the providers array:

    [...]
    Tymon\JWTAuth\Providers\LaravelServiceProvider::class,
    [...]

step 03. config/app.php Add the following facades to the aliases array:

    [...]
    'JWTAuth' => Tymon\JWTAuth\Facades\JWTAuth::class, 
    'JWTFactory' => Tymon\JWTAuth\Facades\JWTFactory::class,
    [...]

steop 04.
	You need to publish the config file for JWT using the following command:

    	$ php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"

step 05.
	When that is done, set the jwt-auth secret by running the following command:

    	$ php artisan jwt:secret

Image upload angular
	https://www.freecodecamp.org/news/how-to-make-image-upload-easy-with-angular-1ed14cb2773b/

```

# lession-08

``` 
Step 01.
 - Restore DB
 
 Step 02.
 - Go to laravel project folder with command (ex: cd /Users/xxx/laravel-api)
 - Start Laravel project with command: php artisan serve
 - Go to url http://127.0.0.1:8000/api/customers check example data

 Step 03.
- Go to Angular project folder with command (ex: cd /Users/xxx/angular-crud)
- Start Angular project with command: ng serve
- Go to menu EmployeeList to show list Employee

```
